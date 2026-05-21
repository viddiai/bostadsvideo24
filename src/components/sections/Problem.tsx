import { problem } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";

export function Problem() {
  return (
    <section id="tjanster" className="relative py-24 lg:py-36 bg-bone grain">
      <div className="relative container-edit">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-y-10 lg:gap-x-8 mb-16 lg:mb-24">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-brass-deep">
                02 / Problemet
              </span>
              <span className="h-px w-12 bg-ink/30" />
            </div>
          </div>
          <ScrollReveal className="lg:col-span-9">
            <h2 className="font-display font-light text-[2.25rem] sm:text-[3rem] lg:text-[4.25rem] leading-[0.95] tracking-tight text-ink max-w-4xl">
              Mäklare vill ha mer video,{" "}
              <span
                className="italic-display text-brass-deep"
                style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
              >
                men
              </span>{" "}
              traditionell produktion är långsam &amp; dyr.
            </h2>
          </ScrollReveal>
        </div>

        {/* Pain points — editorial ledger */}
        <div className="divide-y divide-ink/15 border-y border-ink/15">
          {problem.painPoints.map((point, i) => {
            const Icon = (
              LucideIcons as unknown as Record<
                string,
                React.ComponentType<{
                  size?: number;
                  className?: string;
                  strokeWidth?: number;
                }>
              >
            )[point.icon];

            return (
              <ScrollReveal key={point.problem} delay={i * 0.08}>
                <article className="group grid grid-cols-12 gap-4 lg:gap-8 py-8 lg:py-10 items-center">
                  {/* Index */}
                  <div className="col-span-2 lg:col-span-1">
                    <span className="font-mono text-[11px] tracking-widest text-fog">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Old way */}
                  <div className="col-span-10 lg:col-span-6">
                    <div className="flex items-start gap-3">
                      <div className="hidden sm:flex w-9 h-9 border border-rust/30 items-center justify-center flex-shrink-0 mt-1">
                        {Icon && (
                          <Icon
                            size={15}
                            strokeWidth={1.5}
                            className="text-rust/80"
                          />
                        )}
                      </div>
                      <p className="font-display text-xl lg:text-[26px] leading-snug text-fog line-through decoration-rust/40 decoration-1">
                        {point.problem}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden lg:flex col-span-1 justify-center text-fog group-hover:text-brass transition-colors duration-500">
                    <ArrowRight size={20} strokeWidth={1.4} />
                  </div>

                  {/* New way */}
                  <div className="col-span-12 lg:col-span-4 mt-2 lg:mt-0">
                    <div className="lg:text-right">
                      <span className="block font-mono text-[10px] tracking-widest uppercase text-brass-deep mb-1">
                        Vår lösning
                      </span>
                      <p className="font-display text-2xl lg:text-[34px] leading-tight text-ink">
                        {point.solution}
                      </p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Footnote */}
        <ScrollReveal delay={0.2}>
          <p className="mt-10 max-w-2xl font-mono text-[11px] tracking-widest uppercase text-fog">
            Bostadsvideo24 — En ny standard för bostadsmarknadens videoproduktion.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
