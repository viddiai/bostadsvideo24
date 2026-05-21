import Stripe from "stripe";

// Lazy singleton — the Stripe constructor throws if no key is provided,
// which would crash module evaluation during `next build`'s "collecting
// page data" pass on hosts where env vars aren't set yet (e.g. preview
// deploys before secrets are wired up).
let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (_stripe) return _stripe;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error(
      "STRIPE_SECRET_KEY is not configured. Set it in Vercel → Project → Settings → Environment Variables.",
    );
  }
  _stripe = new Stripe(key, {
    apiVersion: "2026-04-22.dahlia",
    typescript: true,
    appInfo: {
      name: "Bostadsvideo24",
      url: "https://bostadsvideo24.se",
    },
  });
  return _stripe;
}

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
