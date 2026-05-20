import { promoFilmCta } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function PromoFilm() {
  return (
    <section className="py-20 md:py-28 bg-navy text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-sora font-bold text-2xl md:text-3xl text-white">
            {promoFilmCta.headline}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-4 text-white/70 leading-relaxed">
            {promoFilmCta.description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 font-sora font-semibold text-gold text-lg">
            {promoFilmCta.price}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <Button href="#kontakt" className="mt-6">
            {promoFilmCta.cta}
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
