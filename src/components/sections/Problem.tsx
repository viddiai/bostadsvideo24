import { problem } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import * as LucideIcons from "lucide-react";

export function Problem() {
  return (
    <section id="tjanster" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-sora font-bold text-2xl md:text-3xl text-navy text-center max-w-3xl mx-auto">
            {problem.headline}
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {problem.painPoints.map((point, i) => {
            const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[point.icon];
            return (
              <ScrollReveal key={point.problem} delay={i * 0.1}>
                <Card className="text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
                    {Icon && <Icon size={22} className="text-red-400" />}
                  </div>
                  <p className="text-slate text-sm line-through decoration-red-300">
                    {point.problem}
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate/10">
                    <p className="font-sora font-semibold text-navy">
                      Er lösning:{" "}
                      <span className="text-gold">{point.solution}</span>
                    </p>
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
