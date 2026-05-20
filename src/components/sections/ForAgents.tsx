import { forAgents } from "@/lib/data";
import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ForAgents() {
  return (
    <section id="maklare" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <h2 className="font-sora font-bold text-2xl md:text-3xl text-navy">
                {forAgents.headline}
              </h2>
              <p className="mt-4 text-slate leading-relaxed">
                {forAgents.description}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <ul className="space-y-4">
              {forAgents.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-navy" />
                  </div>
                  <span className="text-slate">{feature}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
