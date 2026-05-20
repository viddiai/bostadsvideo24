import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "@/styles/globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bostadsvideo24 — Bostadsvideo på 24 timmar",
  description:
    "Vi hjälper mäklare och husleverantörer att skapa professionella videos från materialet ni redan har — redo för Reels, TikTok, Facebook, LinkedIn och annonser.",
  openGraph: {
    title: "Bostadsvideo24 — Bostadsvideo på 24 timmar",
    description:
      "Professionell bostadsvideo från ert befintliga material. Leverans inom 24 timmar. Fasta priser.",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" className={`${sora.variable} ${inter.variable}`}>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
