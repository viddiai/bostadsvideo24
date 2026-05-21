import { NextResponse } from "next/server";
import { z } from "zod";
import { getStripe, siteUrl } from "@/lib/stripe";
import { getResend, fromAddress, notificationEmail } from "@/lib/resend";
import { catalog } from "@/lib/catalog";

export const runtime = "nodejs";

const schema = z.object({
  packageId: z.string(),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  company: z.string().min(2),
  orgNumber: z.string().optional(),
  property: z.string().optional(),
  materialLink: z.string().url().optional().or(z.literal("")),
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
      { error: "Validering misslyckades." },
      { status: 400 },
    );
  }
  const data = parsed.data;

  const item = catalog[data.packageId];
  if (!item) {
    return NextResponse.json(
      { error: "Okänt paket." },
      { status: 400 },
    );
  }

  // ── 1. Internal email notification ────────────────────────
  void (async () => {
    try {
      await getResend().emails.send({
        from: fromAddress,
        to: notificationEmail,
        replyTo: data.email,
        subject: `Beställning · ${item.name} · ${data.company}`,
        text: [
          `Ny beställning: ${item.name} (${item.displayPrice})`,
          item.recurring ? `Återkommande: månadsvis` : `Engångsköp`,
          ``,
          `Namn:        ${data.name}`,
          `Företag:     ${data.company}`,
          `Org.nr:      ${data.orgNumber ?? "—"}`,
          `E-post:      ${data.email}`,
          `Telefon:     ${data.phone}`,
          `Objekt:      ${data.property ?? "—"}`,
          `Material:    ${data.materialLink || "—"}`,
          ``,
          `Övrigt:`,
          data.notes ?? "—",
        ].join("\n"),
      });
    } catch (e) {
      console.error("Resend failed:", e);
    }
  })();

  // ── 2. Create Stripe Checkout session ─────────────────────
  try {
    const isRecurring = item.recurring === "month";

    const session = await getStripe().checkout.sessions.create({
      mode: isRecurring ? "subscription" : "payment",
      payment_method_types: isRecurring
        ? ["card"]
        : ["card", "klarna"],
      line_items: [
        {
          price_data: {
            currency: "sek",
            unit_amount: item.price,
            product_data: {
              name: `Bostadsvideo24 — ${item.name}`,
              description: item.description,
            },
            ...(isRecurring && { recurring: { interval: "month" } }),
          },
          quantity: 1,
        },
      ],
      customer_email: data.email,
      metadata: {
        packageId: item.id,
        category: item.category,
        company: data.company,
        orgNumber: data.orgNumber ?? "",
        phone: data.phone,
        property: data.property ?? "",
        materialLink: data.materialLink ?? "",
        notes: data.notes ?? "",
      },
      ...(isRecurring && {
        subscription_data: {
          metadata: {
            packageId: item.id,
            company: data.company,
          },
        },
      }),
      success_url: `${siteUrl}/bestall/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/bestall/cancel`,
      locale: "sv",
      allow_promotion_codes: !isRecurring,
    });

    return NextResponse.json({ checkoutUrl: session.url });
  } catch (e) {
    console.error("Stripe Checkout failed:", e);
    return NextResponse.json(
      {
        error:
          "Betalningsleverantören är otillgänglig. Försök igen om en stund.",
      },
      { status: 502 },
    );
  }
}
