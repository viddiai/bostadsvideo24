import { subscriptions } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Subscription() {
  return (
    <section className="relative py-24 lg:py-36 bg-paper">
      <div className="relative container-edit">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-y-10 lg:gap-x-8 mb-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-brass-deep">
                05 / Abonnemang
              </span>
              <span className="h-px w-12 bg-ink/30" />
            </div>
            <p className="font-mono text-[11px] tracking-widest uppercase text-fog max-w-xs">
              {subscriptions.note}
            </p>
          </div>
          <ScrollReveal className="lg:col-span-8">
            <h2 className="font-display font-light text-[2rem] sm:text-[2.75rem] lg:text-[3.75rem] leading-[0.98] tracking-tight text-ink max-w-3xl">
              Er{" "}
              <span
                className="italic-display text-brass-deep"
                style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
              >
                externa
              </span>{" "}
              videoredaktion för bostadsmarknaden.
            </h2>
          </ScrollReveal>
        </div>

        {/* Subscription rows — horizontal editorial cards */}
        <div className="space-y-px bg-ink/10">
          {subscriptions.items.map((sub, i) => {
            const aboIds = ["abo-bas", "abo-pro", "abo-team"];
            const aboId = aboIds[i];
            return (
            <ScrollReveal key={sub.name} delay={i * 0.08}>
              <article
                className={`group grid grid-cols-12 gap-4 lg:gap-8 items-center p-7 lg:p-10 transition-colors duration-500 ${
                  sub.recommended
                    ? "bg-ink text-ivory"
                    : "bg-paper hover:bg-ivory"
                }`}
              >
                {/* Number */}
                <div className="col-span-12 lg:col-span-1">
                  <span
                    className={`font-mono text-[11px] tracking-widest uppercase ${
                      sub.recommended ? "text-brass-light" : "text-fog"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Name + description */}
                <div className="col-span-12 lg:col-span-5">
                  <div className="flex items-center gap-3 mb-2">
                    <h3
                      className={`font-display text-2xl lg:text-[30px] leading-tight ${
                        sub.recommended ? "text-ivory" : "text-ink"
                      }`}
                    >
                      {sub.name}
                    </h3>
                    {sub.recommended && (
                      <span className="px-2 py-0.5 bg-brass text-ink font-mono text-[9px] tracking-widest uppercase">
                        Rekommend.
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-[15px] leading-relaxed ${
                      sub.recommended ? "text-ivory/70" : "text-fog"
                    }`}
                  >
                    {sub.description}
                  </p>
                </div>

                {/* Price */}
                <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                  <span
                    className={`font-display text-3xl lg:text-[42px] font-light leading-none tracking-tight ${
                      sub.recommended ? "text-ivory" : "text-ink"
                    }`}
                  >
                    {sub.price}
                  </span>
                  <p
                    className={`mt-1 font-mono text-[10px] tracking-widest uppercase ${
                      sub.recommended ? "text-ivory/50" : "text-fog"
                    }`}
                  >
                    exkl. moms
                  </p>
                </div>

                {/* CTA */}
                <div className="col-span-12 sm:col-span-6 lg:col-span-3 lg:text-right">
                  <Button
                    href={`/bestall/${aboId}`}
                    variant={sub.recommended ? "inverse" : "secondary"}
                    size="sm"
                  >
                    Kom igång
                  </Button>
                </div>
              </article>
            </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
