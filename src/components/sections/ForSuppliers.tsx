import { forSuppliers } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ForSuppliers() {
  return (
    <section
      id="husleverantorer"
      className="relative py-24 lg:py-36 bg-ink text-ivory grain grain-on-dark overflow-hidden"
    >
      {/* Ghost background number */}
      <span
        aria-hidden
        className="absolute -left-12 bottom-[5%] font-display text-[22rem] lg:text-[30rem] leading-none font-light text-ivory/[0.04] tracking-tighter select-none pointer-events-none"
      >
        07
      </span>

      <div className="relative container-edit">
        {/* Header */}
        <div className="flex items-center gap-3 mb-12 lg:mb-16">
          <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-brass-light">
            07 / Husleverantörer
          </span>
          <span className="h-px flex-1 max-w-[120px] bg-ivory/20" />
        </div>

        <div className="grid lg:grid-cols-12 gap-y-12 lg:gap-x-12 mb-16">
          <ScrollReveal className="lg:col-span-7">
            <h2 className="font-display font-light text-[2.25rem] sm:text-[3rem] lg:text-[4rem] leading-[0.95] tracking-tight text-ivory">
              Från{" "}
              <span
                className="italic-display text-brass-light"
                style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
              >
                bildbank
              </span>{" "}
              till säljande videoinnehåll.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="lg:col-span-5 lg:pt-4">
            <p className="text-[16px] lg:text-[17px] leading-relaxed text-ivory/75">
              {forSuppliers.description}
            </p>
          </ScrollReveal>
        </div>

        {/* Packages — editorial rows */}
        <div className="border-y border-ivory/15 divide-y divide-ivory/15">
          {forSuppliers.packages.map((pkg, i) => {
            const supplierIds = ["lev-husmodell", "lev-kampanj", "lev-bas", "lev-pro"];
            const id = supplierIds[i];
            return (
            <ScrollReveal key={pkg.name} delay={i * 0.06}>
              <article className="group grid grid-cols-12 gap-4 lg:gap-8 items-center py-7 lg:py-9 cursor-pointer hover:bg-ivory/[0.03] transition-colors duration-500">
                {/* Index */}
                <div className="col-span-2 lg:col-span-1">
                  <span className="font-mono text-[10px] tracking-widest text-ivory/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Type label */}
                <div className="col-span-10 lg:col-span-2">
                  <span
                    className={`font-mono text-[10px] tracking-widest uppercase ${
                      pkg.isSubscription ? "text-brass-light" : "text-ivory/40"
                    }`}
                  >
                    {pkg.isSubscription ? "Abonnemang" : "Enstaka"}
                  </span>
                </div>

                {/* Name */}
                <div className="col-span-12 lg:col-span-5">
                  <h3 className="font-display text-2xl lg:text-[30px] leading-tight text-ivory group-hover:text-brass-light transition-colors duration-500">
                    {pkg.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="col-span-7 lg:col-span-3">
                  <span className="font-display text-2xl lg:text-[28px] font-light tracking-tight text-ivory">
                    {pkg.price}
                  </span>
                  <p className="mt-0.5 font-mono text-[10px] tracking-widest uppercase text-ivory/40">
                    exkl. moms
                  </p>
                </div>

                {/* CTA */}
                <div className="col-span-5 lg:col-span-1 lg:text-right">
                  <Button
                    href={`/bestall/${id}`}
                    variant="ghost"
                    size="sm"
                    showArrow={false}
                    className="!text-ivory !border-ivory/40 hover:!border-ivory"
                  >
                    →
                  </Button>
                </div>
              </article>
            </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
