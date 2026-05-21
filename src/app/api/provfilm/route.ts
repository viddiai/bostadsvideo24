import { NextResponse } from "next/server";
import { z } from "zod";
import { getStripe, siteUrl } from "@/lib/stripe";
import { getResend, fromAddress, notificationEmail } from "@/lib/resend";
import { catalog } from "@/lib/catalog";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  company: z.string().min(2),
  property: z.string().min(3),
  materialLink: z.string().url(),
  notes: z.string().optional(),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ogiltig request." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validering misslyckades. Kontrollera fälten." },
      { status: 400 },
    );
  }
  const data = parsed.data;
  const item = catalog.provfilm;

  // ── 1. Send internal notification email ───────────────────────
  // Fire-and-forget — never block payment on email problems
  void (async () => {
    try {
      await getResend().emails.send({
        from: fromAddress,
        to: notificationEmail,
        replyTo: data.email,
        subject: `Provfilm-beställning · ${data.company} · ${data.property}`,
        text: [
          `Ny provfilm-beställning (1 900 kr)`,
          ``,
          `Namn:     ${data.name}`,
          `Företag:  ${data.company}`,
          `E-post:   ${data.email}`,
          `Telefon:  ${data.phone}`,
          `Objekt:   ${data.property}`,
          `Material: ${data.materialLink}`,
          ``,
          `Övrigt:`,
          data.notes ?? "—",
        ].join("\n"),
      });
    } catch (e) {
      console.error("Resend (internal) failed:", e);
    }
  })();

  // ── 2. Create Stripe Checkout session ─────────────────────────
  try {
    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card", "klarna"],
      line_items: [
        {
          price_data: {
            currency: "sek",
            unit_amount: item.price,
            product_data: {
              name: `Bostadsvideo24 — ${item.name}`,
              description: `${item.description} | Objekt: ${data.property}`,
            },
          },
          quantity: 1,
        },
      ],
      customer_email: data.email,
      metadata: {
        type: "provfilm",
        company: data.company,
        property: data.property,
        materialLink: data.materialLink,
        phone: data.phone,
        notes: data.notes ?? "",
      },
      success_url: `${siteUrl}/bestall/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/bestall/cancel`,
      locale: "sv",
    });

    return NextResponse.json({ checkoutUrl: session.url });
  } catch (e) {
    console.error("Stripe Checkout failed:", e);
    // Fallback: confirm receipt but tell the user we'll send an invoice manually
    return NextResponse.json(
      {
        error:
          "Betalningsleverantören är otillgänglig. Vi har tagit emot din beställning och återkommer med betallänk.",
      },
      { status: 502 },
    );
  }
}
