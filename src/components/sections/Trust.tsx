import { trust } from "@/lib/data";
import { CounterUp } from "@/components/ui/CounterUp";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Trust() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-sora font-bold text-2xl md:text-3xl text-navy text-center">
            {trust.headline}
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {trust.stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <CounterUp
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <p className="mt-12 text-center text-slate text-sm italic">
            {trust.launchNote}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
