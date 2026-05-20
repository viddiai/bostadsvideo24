import { hero } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Hero() {
  return (
    <section className="relative bg-navy pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(244,201,93,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(244,201,93,0.1) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h1 className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            Bostadsvideo på <span className="text-gold">24</span> timmar
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            {hero.subheadline}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#kontakt">{hero.primaryCta}</Button>
            <Button href="#kontakt" variant="secondary" className="border-white text-white hover:bg-white hover:text-navy">
              {hero.secondaryCta}
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {hero.trustBadges.map((badge) => (
              <Badge key={badge.text} icon={badge.icon} text={badge.text} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
