import { packagesAgents } from "@/lib/data";
import { PackageCard } from "@/components/ui/PackageCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProvfilmTrigger } from "@/components/forms/ProvfilmTrigger";

// Map data.ts order → catalog SKU ids
const packageIds = ["objekt-start", "objekt-kampanj", "objekt-premium"];

export function PackagesAgents() {
  return (
    <section id="paket" className="relative py-24 lg:py-36 bg-bone grain">
      <div className="relative container-edit">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-y-10 lg:gap-x-8 mb-16 lg:mb-20">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-brass-deep">
                04 / Paket
              </span>
              <span className="h-px w-12 bg-ink/30" />
            </div>
            <p className="font-mono text-[11px] tracking-widest uppercase text-fog max-w-xs">
              Tre konstellationer / fasta priser
            </p>
          </div>
          <ScrollReveal className="lg:col-span-8">
            <h2 className="font-display font-light text-[2rem] sm:text-[2.75rem] lg:text-[3.75rem] leading-[0.98] tracking-tight text-ink">
              Tydliga paket.{" "}
              <span
                className="italic-display text-brass-deep"
                style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
              >
                Fasta
              </span>{" "}
              priser. Snabb leverans.
            </h2>
          </ScrollReveal>
        </div>

        {/* Packages */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {packagesAgents.packages.map((pkg, i) => (
            <ScrollReveal key={pkg.name} delay={i * 0.08}>
              <PackageCard
                name={pkg.name}
                price={pkg.price}
                features={pkg.features}
                cta={pkg.cta}
                popular={pkg.popular}
                index={i}
                packageId={packageIds[i]}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Provfilm card */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 lg:mt-20">
            <div className="grid lg:grid-cols-12 gap-6 items-end border-t border-ink/15 pt-12">
              <div className="lg:col-span-2">
                <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-brass-deep">
                  Pilotbeställning
                </span>
              </div>
              <div className="lg:col-span-7">
                <p className="font-display text-2xl lg:text-[32px] leading-tight text-ink">
                  {packagesAgents.promoFilm.text}
                </p>
                <p className="mt-3 font-mono text-[11px] tracking-widest uppercase text-fog">
                  Risk noll — vi använder ett redan sålt objekt.
                </p>
              </div>
              <div className="lg:col-span-3 flex flex-col gap-3 items-start lg:items-end">
                <span
                  className="font-display text-3xl lg:text-4xl text-ink italic-display"
                  style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
                >
                  1 900 kr
                </span>
                <ProvfilmTrigger size="sm" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
