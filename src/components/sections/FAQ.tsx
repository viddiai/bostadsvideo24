import { faq } from "@/lib/data";
import { Accordion } from "@/components/ui/Accordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function FAQ() {
  return (
    <section className="relative py-24 lg:py-36 bg-paper">
      <div className="relative container-edit">
        <div className="grid lg:grid-cols-12 gap-y-12 lg:gap-x-12">
          {/* LEFT — Header (sticky) */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-brass-deep">
                  10 / Frågor
                </span>
                <span className="h-px w-12 bg-ink/30" />
              </div>
              <h2 className="font-display font-light text-[2.25rem] sm:text-[2.75rem] lg:text-[3.5rem] leading-[0.95] tracking-tight text-ink">
                Vanliga{" "}
                <span
                  className="italic-display text-brass-deep"
                  style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
                >
                  frågor.
                </span>
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-fog max-w-xs">
                Hör av er till{" "}
                <a
                  href="mailto:info@bostadsvideo24.se"
                  className="editorial-link text-ink"
                >
                  info@bostadsvideo24.se
                </a>{" "}
                om något inte besvaras nedan.
              </p>
            </div>
          </div>

          {/* RIGHT — Accordion list */}
          <div className="lg:col-span-8">
            <div className="border-b border-ink/15">
              {faq.map((item, i) => (
                <ScrollReveal key={item.question} delay={i * 0.05}>
                  <Accordion
                    question={item.question}
                    answer={item.answer}
                    index={i}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
