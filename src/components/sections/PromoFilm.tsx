import { promoFilmCta } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProvfilmTrigger } from "@/components/forms/ProvfilmTrigger";
import { Film } from "lucide-react";

export function PromoFilm() {
  return (
    <section className="relative py-24 lg:py-36 bg-bone grain overflow-hidden">
      {/* Decorative side rule */}
      <span
        aria-hidden
        className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <span className="block h-32 w-px bg-ink/20" />
      </span>

      <div className="relative container-edit">
        <div className="grid lg:grid-cols-12 gap-y-10 lg:gap-x-12 items-end">
          {/* LEFT — label + headline */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-brass-deep">
                09 / Provfilm
              </span>
              <span className="h-px w-12 bg-ink/30" />
            </div>

            <ScrollReveal>
              <h2 className="font-display font-light text-[2.5rem] sm:text-[3.5rem] lg:text-[5rem] leading-[0.95] tracking-tight text-ink">
                Testa med ett{" "}
                <span
                  className="italic-display text-brass-deep"
                  style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
                >
                  tidigare
                </span>{" "}
                objekt.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-8 text-[16px] lg:text-[18px] leading-relaxed text-ink/75 max-w-xl">
                {promoFilmCta.description}
              </p>
            </ScrollReveal>
          </div>

          {/* RIGHT — order ticket */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.2}>
              <div className="relative bg-paper border border-ink/15 p-8 lg:p-10">
                <div className="absolute top-0 right-0 w-12 h-12 bg-brass" />
                <Film
                  size={22}
                  strokeWidth={1.4}
                  className="text-ink mb-6"
                />
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-fog">
                    Provfilm — Engångsbeställning
                  </span>
                </div>
                <p className="font-display text-5xl lg:text-6xl font-light text-ink tracking-tight">
                  1 900 kr
                </p>
                <p className="mt-1 font-mono text-[10px] tracking-widest uppercase text-fog">
                  exkl. moms · Leverans 24h
                </p>
                <ul className="mt-7 space-y-2.5 border-t border-ink/15 pt-5">
                  {[
                    "1 vertikal video (30–45 sek)",
                    "Producerad från ert befintliga material",
                    "Levereras inom 24h",
                    "Ingen risk — sålt objekt",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[14px] text-ink/80"
                    >
                      <span className="mt-2 h-px w-3 bg-brass flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ProvfilmTrigger className="w-full mt-8">
                  {promoFilmCta.cta}
                </ProvfilmTrigger>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
