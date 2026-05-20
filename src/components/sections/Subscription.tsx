import { subscriptions } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Subscription() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-sora font-bold text-2xl md:text-3xl text-navy text-center">
            {subscriptions.headline}
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {subscriptions.items.map((sub, i) => (
            <ScrollReveal key={sub.name} delay={i * 0.1}>
              <Card
                className={`relative text-center ${
                  sub.recommended ? "ring-2 ring-gold" : ""
                }`}
              >
                {sub.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy text-xs font-sora font-semibold px-4 py-1 rounded-full">
                    Rekommenderad
                  </span>
                )}
                <h3 className="font-sora font-semibold text-lg text-navy">
                  {sub.name}
                </h3>
                <p className="text-2xl font-sora font-bold text-navy mt-2">
                  {sub.price}
                </p>
                <p className="text-sm text-slate mt-2">{sub.description}</p>
                <Button
                  href="#kontakt"
                  variant={sub.recommended ? "primary" : "secondary"}
                  className="mt-6 w-full"
                >
                  Kom igång
                </Button>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-center text-sm text-slate mt-8">
            {subscriptions.note}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
