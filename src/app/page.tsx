import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PackagesAgents } from "@/components/sections/PackagesAgents";
import { Subscription } from "@/components/sections/Subscription";
import { ForAgents } from "@/components/sections/ForAgents";
import { ForSuppliers } from "@/components/sections/ForSuppliers";
import { Trust } from "@/components/sections/Trust";
import { PromoFilm } from "@/components/sections/PromoFilm";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <PackagesAgents />
        <Subscription />
        <ForAgents />
        <ForSuppliers />
        <Trust />
        <PromoFilm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
