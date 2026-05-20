import { faq } from "@/lib/data";
import { Accordion } from "@/components/ui/Accordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function FAQ() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-sora font-bold text-2xl md:text-3xl text-navy text-center">
            Vanliga frågor
          </h2>
        </ScrollReveal>

        <div className="mt-10">
          {faq.map((item, i) => (
            <ScrollReveal key={item.question} delay={i * 0.05}>
              <Accordion question={item.question} answer={item.answer} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
