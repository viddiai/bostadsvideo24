import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { ProvfilmProvider } from "@/components/forms/ProvfilmContext";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-stack",
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
    <html
      lang="sv"
      className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}
    >
      <body className="antialiased">
        <ProvfilmProvider>{children}</ProvfilmProvider>
      </body>
    </html>
  );
}
