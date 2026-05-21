import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-04-22.dahlia",
  typescript: true,
  appInfo: {
    name: "Bostadsvideo24",
    url: "https://bostadsvideo24.se",
  },
});

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
