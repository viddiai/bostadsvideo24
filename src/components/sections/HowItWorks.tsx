import { howItWorks } from "@/lib/data";
import { StepIndicator } from "@/components/ui/StepIndicator";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function HowItWorks() {
  return (
    <section className="relative py-24 lg:py-36 bg-paper">
      <div className="relative container-edit">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-y-10 lg:gap-x-8 mb-20">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-brass-deep">
                03 / Processen
              </span>
              <span className="h-px w-12 bg-ink/30" />
            </div>
            <p className="font-mono text-[11px] tracking-widest uppercase text-fog">
              Fyra steg / ett dygn
            </p>
          </div>
          <ScrollReveal className="lg:col-span-8">
            <h2 className="font-display font-light text-[2rem] sm:text-[2.75rem] lg:text-[3.75rem] leading-[0.98] tracking-tight text-ink">
              Skicka material{" "}
              <span
                className="italic-display text-brass-deep"
                style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
              >
                idag.
              </span>
              <br />
              Publicera färdig video{" "}
              <span
                className="italic-display text-brass-deep"
                style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
              >
                imorgon.
              </span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-[3.5rem] left-0 right-0 h-px bg-ink/15"
            aria-hidden
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
            {howItWorks.steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.1}>
                <StepIndicator
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  stepNumber={i + 1}
                  isLast={i === howItWorks.steps.length - 1}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
