import { forSuppliers } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ForSuppliers() {
  return (
    <section id="husleverantorer" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-sora font-bold text-2xl md:text-3xl text-navy text-center">
            {forSuppliers.headline}
          </h2>
          <p className="mt-4 text-slate text-center max-w-2xl mx-auto leading-relaxed">
            {forSuppliers.description}
          </p>
        </ScrollReveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {forSuppliers.packages.map((pkg, i) => (
            <ScrollReveal key={pkg.name} delay={i * 0.1}>
              <Card className="text-center h-full flex flex-col">
                {pkg.isSubscription && (
                  <span className="text-xs text-gold font-sora font-semibold mb-1">
                    Abonnemang
                  </span>
                )}
                <h3 className="font-sora font-semibold text-navy text-sm">
                  {pkg.name}
                </h3>
                <p className="text-xl font-sora font-bold text-navy mt-2">
                  {pkg.price}
                </p>
                <p className="text-xs text-slate mt-1">exkl. moms</p>
                <Button
                  href="#kontakt"
                  variant="secondary"
                  className="mt-4 w-full text-xs"
                >
                  Kontakta oss
                </Button>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
