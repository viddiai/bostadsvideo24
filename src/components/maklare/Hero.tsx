import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CounterUp } from "@/components/ui/CounterUp";
import { Camera, Play, ArrowRight, ImageIcon } from "lucide-react";
import { heroContent } from "./data";
import { KickoffButton, RiskBadges } from "./Cta";

export function Hero() {
  const { eyebrow, headline, subheadline, socialProof } = heroContent;

  return (
    <section className="relative bg-ink text-ivory pt-32 lg:pt-40 pb-16 lg:pb-20 overflow-hidden grain grain-on-dark">
      {/* Background wash + giant ghost "24" */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(80% 60% at 80% 20%, rgba(182,138,79,0.18) 0%, transparent 60%), radial-gradient(60% 50% at 10% 80%, rgba(217,181,112,0.08) 0%, transparent 60%)",
        }}
      />
      <span
        aria-hidden
        className="absolute -right-12 lg:right-[-2rem] top-[18%] font-display text-[24rem] lg:text-[32rem] leading-none font-light text-ivory/[0.04] tracking-tighter select-none pointer-events-none"
      >
        24
      </span>

      <div className="relative container-edit">
        {/* Top meta-row */}
        <div className="flex items-center justify-between mb-10 lg:mb-16">
          <div className="flex items-center gap-3 text-ivory/60">
            <span className="font-mono text-[10px] tracking-[0.24em] uppercase">
              {eyebrow}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="live-dot" />
            <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-ivory/60">
              Bokningar öppna
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-y-14 lg:gap-x-10 items-start">
          {/* LEFT — Headline, CTA, badges */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <h1 className="font-display font-light text-[2.85rem] sm:text-[4rem] lg:text-[5rem] xl:text-[5.5rem] leading-[0.95] tracking-tight text-ivory">
                {headline.lead}{" "}
                <span
                  className="text-brass-light italic"
                  style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
                >
                  {headline.emphasis}
                </span>{" "}
                <span className="text-ivory/70">{headline.tail}</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-9 grid lg:grid-cols-12 gap-6">
                <span className="hidden lg:block lg:col-span-1 mt-2 h-px bg-brass" />
                <p className="lg:col-span-11 text-[17px] lg:text-[19px] leading-relaxed text-ivory/75 max-w-2xl">
                  {subheadline}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="mt-10">
                <KickoffButton tone="dark" />
                <RiskBadges tone="dark" className="mt-6 max-w-xl" />
              </div>
            </ScrollReveal>

            {/* ATF social proof — visible, stacked, never hidden in a carousel */}
            <ScrollReveal delay={0.35}>
              <div className="mt-12 pt-8 border-t border-ivory/12 grid sm:grid-cols-2 gap-8">
                {/* Office logos + quote */}
                <div>
                  <p className="font-mono text-[10px] tracking-[0.24em] uppercase text-ivory/45">
                    {socialProof.logosLabel}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-7 w-20 border border-dashed border-ivory/20 flex items-center justify-center"
                      >
                        <span className="font-mono text-[8px] tracking-widest uppercase text-ivory/30">
                          Logo
                        </span>
                      </div>
                    ))}
                  </div>
                  <blockquote className="mt-5 text-[14px] leading-relaxed text-ivory/70 italic">
                    “{socialProof.quote}”
                    <footer className="mt-2 not-italic font-mono text-[10px] tracking-widest uppercase text-ivory/40">
                      {socialProof.quoteAuthor}
                    </footer>
                  </blockquote>
                </div>

                {/* Stat badge */}
                <div className="flex sm:justify-end">
                  <div className="border border-brass/40 bg-brass/5 px-6 py-5 self-start">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-5xl lg:text-6xl font-medium text-brass-light tabular-nums leading-none">
                        {socialProof.statValue}
                      </span>
                      <span className="font-display text-3xl font-light text-brass-light leading-none">
                        {socialProof.statSuffix}
                      </span>
                    </div>
                    <p className="mt-3 text-[13px] leading-snug text-ivory/70 max-w-[180px]">
                      {socialProof.statLabel}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT — Hero visual: photo → finished video (placeholders) */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.3}>
              <HeroVisual />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Split visual proving the outcome: a raw property PHOTO on the left turns
 * into a finished, branded vertical VIDEO in a social/Hemnet feed on the
 * right — with a "Levererad: 24h" stamp. Both media slots are clearly
 * marked placeholders to drop real assets into.
 */
function HeroVisual() {
  return (
    <div className="relative">
      {/* "Levererad: 24h" stamp */}
      <div className="absolute -top-3 -right-3 z-20 rotate-[4deg] bg-brass text-ink px-3 py-1.5 shadow-[0_12px_24px_-12px_rgba(0,0,0,0.6)]">
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase font-medium">
          Levererad: 24h
        </span>
      </div>

      <div className="grid grid-cols-5 gap-3 items-center">
        {/* PHOTO placeholder (input) */}
        <figure className="col-span-2 relative aspect-[3/4] border border-ivory/20 bg-ink-soft overflow-hidden">
          {/* photo:placeholder — replace with a real property still */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #233248 0%, #16233a 100%)",
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-ivory/40">
            <ImageIcon size={22} strokeWidth={1.3} />
            <span className="font-mono text-[8px] tracking-[0.2em] uppercase text-center px-2">
              Foto
              <br />
              platshållare
            </span>
          </div>
          <figcaption className="absolute bottom-0 inset-x-0 px-2.5 py-2 bg-gradient-to-t from-ink/95 to-transparent">
            <span className="font-mono text-[8px] tracking-widest uppercase text-ivory/60">
              Råmaterial · objektsfoto
            </span>
          </figcaption>
        </figure>

        {/* transform arrow */}
        <div className="col-span-1 flex flex-col items-center gap-1.5 text-brass-light">
          <ArrowRight size={20} strokeWidth={1.5} />
          <span className="font-mono text-[7px] tracking-[0.18em] uppercase text-ivory/40 text-center leading-tight">
            24h
          </span>
        </div>

        {/* VIDEO placeholder (output) — in a feed, branded */}
        <figure className="col-span-2 relative aspect-[9/16] border border-ivory/25 bg-ink-soft overflow-hidden shadow-[0_24px_48px_-24px_rgba(0,0,0,0.7)]">
          {/* video:placeholder — replace with the finished branded reel */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(160deg, #1E2B3F 0%, #0F1B2E 55%, #1A2740 100%)",
            }}
          />
          {/* Branded top bar — office logo + handle */}
          <div className="absolute top-2.5 inset-x-2.5 flex items-center gap-2">
            <span className="h-5 w-5 rounded-full border border-dashed border-ivory/30 flex items-center justify-center">
              <Camera size={9} strokeWidth={1.4} className="text-ivory/40" />
            </span>
            <span className="font-mono text-[8px] tracking-widest uppercase text-ivory/55">
              ert_kontor
            </span>
          </div>

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="float-soft">
              <div className="w-12 h-12 rounded-full bg-brass/95 flex items-center justify-center">
                <Play
                  size={16}
                  strokeWidth={1.5}
                  className="text-ink ml-0.5"
                  fill="currentColor"
                />
              </div>
            </div>
          </div>

          {/* placeholder label */}
          <div className="absolute top-1/2 inset-x-0 mt-10 flex justify-center">
            <span className="font-mono text-[8px] tracking-[0.2em] uppercase text-ivory/35 text-center">
              Video · platshållare
            </span>
          </div>

          {/* Branded bottom strip — caption + brand bar */}
          <div className="absolute bottom-0 inset-x-0 px-2.5 py-2.5 bg-gradient-to-t from-ink/95 to-transparent">
            <span className="font-mono text-[8px] tracking-widest uppercase text-ivory/70">
              Färdig reel · ert varumärke
            </span>
            <div className="mt-1.5 h-0.5 bg-ivory/15 overflow-hidden">
              <div className="h-full w-2/3 bg-brass" />
            </div>
          </div>
        </figure>
      </div>

      <p className="mt-5 font-mono text-[9px] tracking-[0.18em] uppercase text-ivory/35 text-center">
        Visar resultatet ni får — den färdiga videon i flödet
      </p>
    </div>
  );
}
