import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export const notificationEmail =
  process.env.ORDER_NOTIFICATION_EMAIL ?? "info@bostadsvideo24.se";

export const fromAddress = "Bostadsvideo24 <bestallning@bostadsvideo24.se>";
