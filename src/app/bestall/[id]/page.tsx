import { notFound } from "next/navigation";
import Link from "next/link";
import { catalog, catalogList } from "@/lib/catalog";
import { OrderForm } from "@/components/forms/OrderForm";
import { ArrowLeft, ShieldCheck, Zap, FileText } from "lucide-react";

export const dynamicParams = false;

export async function generateStaticParams() {
  return catalogList.map((item) => ({ id: item.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = catalog[id];
  if (!item) return { title: "Beställ — Bostadsvideo24" };
  return {
    title: `Beställ ${item.name} — Bostadsvideo24`,
    description: item.description,
  };
}

export default async function OrderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = catalog[id];
  if (!item) notFound();

  const categoryLabels: Record<string, string> = {
    provfilm: "Pilot",
    objekt: "Objektspaket",
    abonnemang: "Abonnemang",
    leverantor: "Husleverantör",
  };

  return (
    <main className="min-h-screen bg-bone grain">
      {/* Slim header */}
      <header className="border-b border-ink/15">
        <div className="container-edit py-5 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-baseline gap-1 text-ink"
          >
            <span className="font-display text-[18px] tracking-tight font-medium">
              Bostads
              <span
                className="italic-display font-medium"
                style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
              >
                video
              </span>
            </span>
            <span className="font-mono text-[10px] tracking-widest text-brass-deep pb-0.5">
              /24
            </span>
          </Link>
          <Link
            href="/"
            className="group flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-fog hover:text-ink transition-colors"
          >
            <ArrowLeft
              size={12}
              strokeWidth={1.5}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            Tillbaka
          </Link>
        </div>
      </header>

      <div className="container-edit py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-y-12 lg:gap-x-16">
          {/* LEFT — package summary */}
          <aside className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-brass-deep">
                {categoryLabels[item.category] ?? "Beställning"}
              </span>
              <span className="h-px w-12 bg-ink/30" />
            </div>

            <h1 className="font-display font-light text-[2.25rem] sm:text-[3rem] lg:text-[3.75rem] leading-[0.95] tracking-tight text-ink">
              {item.name}
            </h1>

            <div className="mt-8 flex items-baseline gap-3">
              <span className="font-display text-5xl lg:text-6xl font-medium text-ink tracking-tight leading-none">
                {item.displayPrice}
              </span>
            </div>
            <p className="mt-2 font-mono text-[10px] tracking-widest uppercase text-fog">
              exkl. moms{item.recurring && " · återkommer månadsvis"}
            </p>

            <p className="mt-8 text-[15px] leading-relaxed text-fog max-w-md">
              {item.description}
            </p>

            {/* Features */}
            <ul className="mt-10 space-y-3 border-t border-ink/15 pt-7">
              {item.features.map((feature, i) => (
                <li
                  key={feature}
                  className="flex items-start gap-4 text-[14px] text-ink/85"
                >
                  <span className="font-mono text-[10px] tracking-widest text-fog flex-shrink-0 pt-1.5 w-5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Trust strip */}
            <div className="mt-12 pt-7 border-t border-ink/15 grid grid-cols-3 gap-4">
              {[
                { Icon: Zap, label: "24h leverans" },
                { Icon: ShieldCheck, label: "Säker betalning" },
                { Icon: FileText, label: "Fast pris" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex flex-col gap-2">
                  <Icon size={16} strokeWidth={1.4} className="text-brass-deep" />
                  <span className="font-mono text-[10px] tracking-widest uppercase text-fog leading-snug">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </aside>

          {/* RIGHT — order form */}
          <section className="lg:col-span-7 lg:pl-8">
            <div className="bg-paper border border-ink/15 p-7 lg:p-10 relative">
              <div className="absolute top-0 right-0 w-10 h-10 bg-brass" />

              <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-brass-deep">
                Steg 1 / 2 · Uppgifter
              </span>
              <h2 className="mt-4 font-display font-light text-2xl lg:text-3xl leading-tight tracking-tight text-ink">
                Fyll i nedan,{" "}
                <span
                  className="italic-display text-brass-deep"
                  style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
                >
                  betala
                </span>{" "}
                via Stripe.
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-fog max-w-md mb-8">
                Inga konton, ingen offertprocess. Vi återkommer med
                uppladdningsinstruktioner direkt efter betalning.
              </p>

              <OrderForm item={item} />
            </div>

            <p className="mt-6 font-mono text-[10px] tracking-widest uppercase text-fog text-center">
              Säker betalning via Stripe · GDPR-säker · Klarna tillgängligt
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
