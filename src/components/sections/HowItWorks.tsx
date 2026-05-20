import { howItWorks } from "@/lib/data";
import { StepIndicator } from "@/components/ui/StepIndicator";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-sora font-bold text-2xl md:text-3xl text-navy text-center">
            {howItWorks.headline}
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
    </section>
  );
}
