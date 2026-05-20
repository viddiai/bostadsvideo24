import { packagesAgents } from "@/lib/data";
import { PackageCard } from "@/components/ui/PackageCard";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function PackagesAgents() {
  return (
    <section id="paket" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-sora font-bold text-2xl md:text-3xl text-navy text-center">
            {packagesAgents.headline}
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6 items-start">
          {packagesAgents.packages.map((pkg, i) => (
            <ScrollReveal key={pkg.name} delay={i * 0.1}>
              <PackageCard
                name={pkg.name}
                price={pkg.price}
                features={pkg.features}
                cta={pkg.cta}
                popular={pkg.popular}
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 text-center bg-gold/10 rounded-2xl p-6">
            <p className="font-sora font-semibold text-navy text-lg">
              {packagesAgents.promoFilm.price}
            </p>
            <p className="text-slate text-sm mt-1">
              {packagesAgents.promoFilm.text}
            </p>
            <Button href="#kontakt" className="mt-4">
              Beställ provfilm
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
