import Link from "next/link";
import { footer } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { ProvfilmTrigger } from "@/components/forms/ProvfilmTrigger";
import { ArrowUpRight, MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="kontakt" className="relative bg-ink text-ivory grain grain-on-dark overflow-hidden">
      {/* Giant brand wordmark in background */}
      <span
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 -bottom-12 lg:-bottom-20 font-display font-light text-[7rem] sm:text-[10rem] lg:text-[16rem] xl:text-[20rem] leading-none text-ivory/[0.04] tracking-tighter select-none pointer-events-none whitespace-nowrap"
      >
        Bostadsvideo24
      </span>

      <div className="relative container-edit pt-20 pb-32 lg:pt-28 lg:pb-44">
        {/* Final CTA banner */}
        <div className="grid lg:grid-cols-12 gap-y-10 lg:gap-x-12 items-end pb-16 lg:pb-24 border-b border-ivory/15">
          <div className="lg:col-span-8">
            <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-brass-light">
              11 / Kontakt
            </span>
            <h2 className="mt-6 font-display font-light text-[2.5rem] sm:text-[3.5rem] lg:text-[5rem] leading-[0.95] tracking-tight text-ivory">
              Skicka material{" "}
              <span
                className="italic-display text-brass-light"
                style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
              >
                idag.
              </span>
            </h2>
            <p className="mt-6 text-[16px] lg:text-[18px] leading-relaxed text-ivory/75 max-w-xl">
              {footer.tagline} Inga offerter, inga filmteam, inga väntetider.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
            <ProvfilmTrigger variant="inverse" />
            <Button
              href="#paket"
              variant="secondary"
              className="!text-ivory !border-ivory/30 hover:!bg-ivory hover:!text-ink hover:!border-ivory"
            >
              Se alla paket
            </Button>
          </div>
        </div>

        {/* Info grid */}
        <div className="grid lg:grid-cols-12 gap-y-12 lg:gap-x-12 pt-16 lg:pt-20">
          {/* Brand */}
          <div className="lg:col-span-5">
            <a href="#" className="flex items-baseline gap-1">
              <span className="font-display text-3xl tracking-tight text-ivory font-medium">
                Bostads
                <span
                  className="italic-display text-brass-light font-medium"
                  style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
                >
                  video
                </span>
              </span>
              <span className="font-mono text-sm tracking-widest text-brass-light">
                /24
              </span>
            </a>
            <p className="mt-5 text-[14px] leading-relaxed text-ivory/65 max-w-sm">
              Professionell bostadsvideo från ert befintliga material —
              levererat inom ett dygn. För mäklare, mäklarkontor och
              husleverantörer i Sverige &amp; Norge.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-3">
            <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-ivory/40 block mb-5">
              Navigera
            </span>
            <ul className="space-y-3">
              {footer.links.map((link, i) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-baseline gap-2 text-[14px] text-ivory/80 hover:text-ivory transition-colors"
                  >
                    <span className="font-mono text-[10px] tracking-widest text-ivory/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="editorial-link">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-ivory/40 block mb-5">
              Studio
            </span>
            <div className="space-y-3 text-[14px] text-ivory/80">
              <p className="flex items-start gap-3">
                <MapPin size={14} strokeWidth={1.4} className="mt-1 text-brass-light flex-shrink-0" />
                <span>{footer.location}</span>
              </p>
              <p className="flex items-start gap-3">
                <Mail size={14} strokeWidth={1.4} className="mt-1 text-brass-light flex-shrink-0" />
                <a
                  href={`mailto:${footer.email}`}
                  className="editorial-link"
                >
                  {footer.email}
                </a>
              </p>
              <Link
                href="/boka"
                className="inline-flex items-center gap-2 mt-2 font-mono text-[10px] tracking-[0.22em] uppercase text-brass-light hover:text-brass transition-colors"
              >
                Bokningskalender
                <ArrowUpRight size={12} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="mt-16 lg:mt-24 pt-6 border-t border-ivory/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-ivory/40">
            {footer.copyright}
          </p>
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-ivory/40">
            Skapad i Göteborg · Bostadsvideo24™
          </p>
        </div>
      </div>
    </footer>
  );
}
