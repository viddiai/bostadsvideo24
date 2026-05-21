import { trust } from "@/lib/data";
import { CounterUp } from "@/components/ui/CounterUp";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Trust() {
  return (
    <section className="relative py-24 lg:py-36 bg-paper">
      <div className="relative container-edit">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-y-10 lg:gap-x-8 mb-16 lg:mb-20">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-brass-deep">
                08 / Beviset
              </span>
              <span className="h-px w-12 bg-ink/30" />
            </div>
          </div>
          <ScrollReveal className="lg:col-span-8">
            <h2 className="font-display font-light text-[2rem] sm:text-[2.75rem] lg:text-[3.75rem] leading-[0.98] tracking-tight text-ink">
              Varför{" "}
              <span
                className="italic-display text-brass-deep"
                style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
              >
                Bostadsvideo24
              </span>
              ?
            </h2>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 lg:gap-x-10 gap-y-12">
          {trust.stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.08}>
              <CounterUp
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={i}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Launch note — pull quote treatment */}
        <ScrollReveal delay={0.4}>
          <div className="mt-20 lg:mt-28 max-w-3xl">
            <div className="flex items-start gap-4">
              <span
                className="font-display text-7xl leading-none text-brass italic-display"
                aria-hidden
                style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
              >
                &ldquo;
              </span>
              <div>
                <p className="font-display text-xl lg:text-[26px] leading-snug text-ink/90 italic">
                  {trust.launchNote}
                </p>
                <p className="mt-4 font-mono text-[10px] tracking-widest uppercase text-fog">
                  Bostadsvideo24 — Etablerad 2025
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
