import { hero } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProvfilmTrigger } from "@/components/forms/ProvfilmTrigger";
import { Play, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-ink text-ivory pt-36 lg:pt-44 pb-16 overflow-hidden grain grain-on-dark">
      {/* Background — radial wash + giant ghost "24" */}
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
        className="absolute -right-12 lg:right-[-2rem] top-[12%] font-display text-[26rem] lg:text-[34rem] leading-none font-light text-ivory/[0.04] tracking-tighter select-none pointer-events-none"
      >
        24
      </span>

      <div className="relative container-edit">
        {/* Top meta-row */}
        <div className="flex items-center justify-between mb-12 lg:mb-20">
          <div className="flex items-center gap-3 text-ivory/60">
            <span className="font-mono text-[10px] tracking-[0.24em] uppercase">
              01 / Bostadsvideo24
            </span>
            <span className="hidden md:inline h-px w-12 bg-ivory/20" />
            <span className="hidden md:inline font-mono text-[10px] tracking-[0.24em] uppercase">
              För mäklare & husleverantörer
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="live-dot" />
            <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-ivory/60">
              Bokningar öppna
            </span>
          </div>
        </div>

        {/* Headline grid — asymmetric */}
        <div className="grid lg:grid-cols-12 gap-y-12 lg:gap-x-8 items-end">
          {/* LEFT: Big headline */}
          <div className="lg:col-span-8">
            <ScrollReveal>
              <h1 className="font-display font-light text-[3.25rem] sm:text-[4.5rem] lg:text-[6.5rem] xl:text-[7.5rem] leading-[0.92] tracking-tight text-ivory">
                Bostadsvideo
                <br />
                <span className="text-ivory/70">på</span>{" "}
                <span
                  className="text-brass-light italic"
                  style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
                >
                  24
                </span>{" "}
                <span className="text-ivory/70">timmar.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-10 lg:mt-12 grid lg:grid-cols-12 gap-6 max-w-3xl">
                <span className="hidden lg:block lg:col-span-1 mt-2 h-px bg-brass" />
                <p className="lg:col-span-11 text-[17px] lg:text-[19px] leading-relaxed text-ivory/75 max-w-xl">
                  {hero.subheadline}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <ProvfilmTrigger variant="inverse">
                  {hero.primaryCta}
                </ProvfilmTrigger>
                <Button
                  href="/boka"
                  variant="secondary"
                  className="!text-ivory !border-ivory/30 hover:!bg-ivory hover:!text-ink hover:!border-ivory"
                >
                  {hero.secondaryCta}
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: Editorial video card mockup */}
          <div className="lg:col-span-4">
            <ScrollReveal delay={0.35}>
              <div className="relative">
                {/* Stacked card effect */}
                <div className="absolute -inset-2 -z-10" aria-hidden>
                  <div className="absolute inset-0 translate-x-2 translate-y-2 border border-ivory/15" />
                  <div className="absolute inset-0 translate-x-4 translate-y-4 border border-ivory/10" />
                </div>

                <div className="relative bg-ink-soft border border-ivory/20 aspect-[3/4] overflow-hidden">
                  {/* Video frame backdrop */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(140deg, #1E2B3F 0%, #0F1B2E 60%, #1A2740 100%)",
                    }}
                  />
                  {/* Architectural lines suggesting a property */}
                  <svg
                    className="absolute inset-0 w-full h-full opacity-30"
                    viewBox="0 0 300 400"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M40 280 L40 180 L150 100 L260 180 L260 280 L40 280 Z"
                      stroke="#D9B570"
                      strokeWidth="1"
                    />
                    <path
                      d="M150 100 L150 280"
                      stroke="#D9B570"
                      strokeWidth="0.5"
                      strokeDasharray="2 4"
                    />
                    <path
                      d="M40 180 L260 180"
                      stroke="#D9B570"
                      strokeWidth="0.5"
                      strokeDasharray="2 4"
                    />
                    <circle cx="150" cy="220" r="3" fill="#D9B570" />
                  </svg>

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="float-soft">
                      <div className="w-16 h-16 rounded-full bg-brass/95 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 hover:scale-110">
                        <Play
                          size={20}
                          strokeWidth={1.5}
                          className="text-ink ml-0.5"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Top label */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-ivory/70">
                      REEL_01.mp4
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase text-brass-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-brass-light" />
                      4K
                    </span>
                  </div>

                  {/* Bottom strip */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-ink/95 to-transparent">
                    <div className="flex items-center justify-between text-ivory/80">
                      <span className="font-mono text-[10px] tracking-widest uppercase">
                        9:16 · 16:9 · 1:1
                      </span>
                      <span className="font-mono text-[10px] tracking-widest uppercase">
                        00:42
                      </span>
                    </div>
                    <div className="mt-2 h-0.5 bg-ivory/15 overflow-hidden">
                      <div className="h-full w-2/3 bg-brass" />
                    </div>
                  </div>
                </div>

                {/* Floating annotation card */}
                <div className="absolute -bottom-4 -left-6 lg:-left-10 bg-bone text-ink px-4 py-3 max-w-[180px] shadow-[0_18px_30px_-18px_rgba(0,0,0,0.5)] rotate-[-2deg]">
                  <p className="font-mono text-[9px] tracking-widest uppercase text-fog">
                    Leverans
                  </p>
                  <p className="font-display text-lg leading-tight">
                    Inom <span className="italic-display">24h</span>
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Trust strip */}
        <ScrollReveal delay={0.5}>
          <div className="mt-20 lg:mt-28 pt-8 border-t border-ivory/12">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-ivory/50">
                Vad som ingår
              </span>
              <span className="hidden md:flex items-center gap-2 text-ivory/40">
                <ArrowDown size={12} strokeWidth={1.5} />
                <span className="font-mono text-[10px] tracking-[0.24em] uppercase">
                  Rulla för mer
                </span>
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
              {hero.trustBadges.map((badge) => (
                <Badge
                  key={badge.text}
                  icon={badge.icon}
                  text={badge.text}
                  tone="dark"
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
