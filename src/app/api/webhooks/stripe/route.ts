import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { getResend, fromAddress, notificationEmail } from "@/lib/resend";

export const runtime = "nodejs";

// Stripe needs the raw request body to verify the signature. Don't parse JSON
// or apply middleware that mutates the body before this handler.

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!sig || !secret) {
    return NextResponse.json(
      { error: "Missing signature or webhook secret." },
      { status: 400 },
    );
  }

  const payload = await req.text();

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(payload, sig, secret);
  } catch (e) {
    console.error("Webhook signature verification failed:", e);
    return NextResponse.json(
      { error: "Invalid signature." },
      { status: 400 },
    );
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      await handleCheckoutCompleted(session);
      break;
    }
    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
      console.warn("Subscription invoice failed:", invoice.id);
      break;
    }
    default:
      // No-op for unhandled events
      break;
  }

  return NextResponse.json({ received: true });
}

// ─────────────────────────────────────────────────────────────
// Process a completed checkout
// ─────────────────────────────────────────────────────────────

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const meta = session.metadata ?? {};
  const customerEmail =
    session.customer_email ?? session.customer_details?.email ?? "okänd";

  // 1. Internal confirmation email
  try {
    await getResend().emails.send({
      from: fromAddress,
      to: notificationEmail,
      replyTo: customerEmail,
      subject: `BETALD · ${meta.packageId ?? meta.type ?? "Beställning"} · ${meta.company ?? ""}`,
      text: [
        `Betalning bekräftad via Stripe.`,
        ``,
        `Session ID: ${session.id}`,
        `Status:     ${session.payment_status}`,
        `Belopp:     ${(session.amount_total ?? 0) / 100} ${session.currency?.toUpperCase()}`,
        `Mode:       ${session.mode}`,
        `Kund:       ${customerEmail}`,
        ``,
        `Metadata:`,
        ...Object.entries(meta).map(([k, v]) => `  ${k}: ${v}`),
      ].join("\n"),
    });
  } catch (e) {
    console.error("Resend internal failed:", e);
  }

  // 2. Customer confirmation email
  if (customerEmail !== "okänd") {
    try {
      await getResend().emails.send({
        from: fromAddress,
        to: customerEmail,
        subject: "Tack för din beställning hos Bostadsvideo24",
        text: [
          `Hej${meta.name ? " " + meta.name : ""},`,
          ``,
          `Tack för din beställning. Vi har tagit emot din betalning och`,
          `återkommer inom kort med uppladdningsinstruktioner och nästa steg.`,
          ``,
          `Leverans inom 24 timmar från komplett underlag.`,
          ``,
          `Frågor? Svara direkt på detta mail.`,
          ``,
          `Bostadsvideo24`,
          `Göteborg, Sverige`,
        ].join("\n"),
      });
    } catch (e) {
      console.error("Resend customer failed:", e);
    }
  }
}
