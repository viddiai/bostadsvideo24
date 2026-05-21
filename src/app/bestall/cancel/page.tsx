import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Avbruten beställning · Bostadsvideo24",
};

export default function CancelPage() {
  return (
    <main className="min-h-screen bg-bone grain flex items-center justify-center py-20">
      <div className="container-edit max-w-2xl text-center">
        <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-fog">
          Beställning ej slutförd
        </span>
        <h1 className="mt-5 font-display font-light text-4xl sm:text-5xl leading-[0.98] tracking-tight text-ink">
          Inga problem —{" "}
          <span
            className="italic-display text-brass-deep"
            style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
          >
            börja om
          </span>{" "}
          när som helst.
        </h1>
        <p className="mt-7 text-[16px] leading-relaxed text-fog max-w-md mx-auto">
          Betalningen avbröts och ingen debitering har skett. Återgå till
          paketöversikten eller hör av dig om du har frågor innan beställning.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase text-ink editorial-link"
          >
            <ArrowLeft
              size={12}
              strokeWidth={1.5}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            Tillbaka till startsidan
          </Link>
          <span className="hidden sm:inline w-1 h-1 bg-ink/20 rounded-full" />
          <a
            href="mailto:info@bostadsvideo24.se"
            className="inline-flex items-center font-mono text-[11px] tracking-[0.22em] uppercase text-ink editorial-link"
          >
            Kontakta oss först
          </a>
        </div>
      </div>
    </main>
  );
}
