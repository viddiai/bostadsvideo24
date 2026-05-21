import { Resend } from "resend";

// Lazy singleton — Resend's constructor throws when RESEND_API_KEY is
// missing, which crashes module evaluation at build time on hosts that
// haven't received the env yet.
let _resend: Resend | null = null;

export function getResend(): Resend {
  if (_resend) return _resend;
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error(
      "RESEND_API_KEY is not configured. Set it in Vercel → Project → Settings → Environment Variables.",
    );
  }
  _resend = new Resend(key);
  return _resend;
}

export const notificationEmail =
  process.env.ORDER_NOTIFICATION_EMAIL ?? "info@bostadsvideo24.se";

export const fromAddress = "Bostadsvideo24 <bestallning@bostadsvideo24.se>";
