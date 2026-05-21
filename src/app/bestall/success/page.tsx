import Link from "next/link";
import { Check, Mail, Clock, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Tack — Beställning bekräftad · Bostadsvideo24",
};

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-ink text-ivory grain grain-on-dark overflow-hidden flex flex-col">
      {/* Slim header */}
      <header className="border-b border-ivory/15">
        <div className="container-edit py-5 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-baseline gap-1 text-ivory"
          >
            <span className="font-display text-[18px] tracking-tight font-medium">
              Bostads
              <span
                className="italic-display font-medium text-brass-light"
                style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
              >
                video
              </span>
            </span>
            <span className="font-mono text-[10px] tracking-widest text-brass-light pb-0.5">
              /24
            </span>
          </Link>
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ivory/50">
            Bekräftelse / 01
          </span>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center py-20 relative">
        <span
          aria-hidden
          className="absolute left-1/2 -translate-x-1/2 bottom-0 font-display text-[16rem] lg:text-[26rem] leading-none font-light text-ivory/[0.03] tracking-tighter select-none pointer-events-none"
        >
          24
        </span>

        <div className="relative container-edit max-w-3xl text-center">
          <div className="mx-auto w-16 h-16 border border-brass-light flex items-center justify-center mb-8">
            <Check size={24} strokeWidth={1.4} className="text-brass-light" />
          </div>

          <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-brass-light">
            Betalning bekräftad
          </span>

          <h1 className="mt-5 font-display font-light text-4xl sm:text-5xl lg:text-6xl leading-[0.98] tracking-tight text-ivory">
            Tack —{" "}
            <span
              className="italic-display text-brass-light"
              style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
            >
              vi sätter igång.
            </span>
          </h1>

          <p className="mt-8 text-[16px] lg:text-[18px] leading-relaxed text-ivory/75 max-w-xl mx-auto">
            Din beställning är registrerad och betalning genomförd via Stripe.
            Du får en bekräftelse på e-post med uppladdningsinstruktioner inom
            kort.
          </p>

          {/* Next steps */}
          <div className="mt-14 grid sm:grid-cols-3 gap-px bg-ivory/15 border border-ivory/15 text-left">
            {[
              {
                Icon: Mail,
                step: "01",
                title: "Bekräftelse",
                body: "Mail med kvitto och nästa steg landar i din inbox.",
              },
              {
                Icon: Clock,
                step: "02",
                title: "Vi börjar",
                body: "Vår produktion startar så snart vi har ert material.",
              },
              {
                Icon: ArrowUpRight,
                step: "03",
                title: "Leverans",
                body: "Färdig video inom 24 timmar från komplett underlag.",
              },
            ].map(({ Icon, step, title, body }) => (
              <div key={step} className="bg-ink p-7">
                <div className="flex items-center justify-between mb-5">
                  <Icon size={16} strokeWidth={1.4} className="text-brass-light" />
                  <span className="font-mono text-[10px] tracking-widest text-ivory/40">
                    {step}
                  </span>
                </div>
                <h3 className="font-display text-lg text-ivory">{title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ivory/65">
                  {body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase text-ivory editorial-link"
            >
              Tillbaka till startsidan
            </Link>
            <span className="hidden sm:inline w-1 h-1 bg-ivory/20 rounded-full" />
            <a
              href="mailto:info@bostadsvideo24.se"
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase text-ivory editorial-link"
            >
              Kontakta oss
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
