import type { Metadata } from "next";
import { MaklareNav } from "@/components/maklare/Nav";
import { Hero } from "@/components/maklare/Hero";
import {
  Problem,
  Solution,
  VideoEffect,
  HowItWorks,
  WallOfLove,
  Packages,
  SalesPitch,
  RiskReversal,
  FinalCta,
} from "@/components/maklare/Sections";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title:
    "Bostadsvideo24 för mäklare — sälj bostäder snabbare med video på 24h",
  description:
    "Ert externa videoteam för bostadsmarknaden. Färdiga, varumärkesanpassade videor för Hemnet och sociala medier inom 24 timmar. Fast pris, era mallar. Boka ett kickoff-möte.",
  openGraph: {
    title:
      "Bostadsvideo24 för mäklare — sälj bostäder snabbare med video på 24h",
    description:
      "Ert externa videoteam: färdiga, varumärkesanpassade videor klara för Hemnet och sociala medier inom ett dygn. Boka ett kickoff-möte.",
    locale: "sv_SE",
    type: "website",
  },
};

export default function MaklareLandingPage() {
  return (
    <>
      <MaklareNav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <VideoEffect />
        <HowItWorks />
        <WallOfLove />
        <Packages />
        <SalesPitch />
        <RiskReversal />
        <FinalCta />
      </main>
      <Footer showNav={false} />
    </>
  );
}
