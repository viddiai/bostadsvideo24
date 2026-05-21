import { forAgents } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Smartphone, Camera, Film, Briefcase } from "lucide-react";

const channelIcons = [
  { Icon: Camera, label: "Reels" },
  { Icon: Smartphone, label: "TikTok" },
  { Icon: Film, label: "Facebook" },
  { Icon: Briefcase, label: "LinkedIn" },
];

export function ForAgents() {
  return (
    <section
      id="maklare"
      className="relative py-24 lg:py-36 bg-bone grain"
    >
      <div className="relative container-edit">
        {/* Header */}
        <div className="flex items-center gap-3 mb-12 lg:mb-16">
          <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-brass-deep">
            06 / För mäklare
          </span>
          <span className="h-px flex-1 max-w-[120px] bg-ink/30" />
        </div>

        <div className="grid lg:grid-cols-12 gap-y-16 lg:gap-x-12 items-start">
          {/* LEFT — Editorial copy block */}
          <div className="lg:col-span-6 xl:col-span-5">
            <ScrollReveal>
              <h2 className="font-display font-light text-[2.25rem] sm:text-[3rem] lg:text-[4rem] leading-[0.95] tracking-tight text-ink">
                Allt mäklaren behöver för{" "}
                <span
                  className="italic-display text-brass-deep"
                  style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
                >
                  starkare
                </span>{" "}
                synlighet.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="dropcap mt-10 text-[16px] lg:text-[17px] leading-relaxed text-ink/80 max-w-prose">
                {forAgents.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <ul className="mt-10 space-y-0 divide-y divide-ink/15 border-y border-ink/15">
                {forAgents.features.map((feature, i) => (
                  <li
                    key={feature}
                    className="group flex items-center gap-5 py-4"
                  >
                    <span className="font-mono text-[10px] tracking-widest uppercase text-fog w-6 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] lg:text-base text-ink/90 leading-snug">
                      {feature}
                    </span>
                    <span className="ml-auto h-px w-4 bg-ink/20 group-hover:bg-brass group-hover:w-10 transition-all duration-500" />
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* RIGHT — Phone mockup composition */}
          <div className="lg:col-span-6 xl:col-span-7 lg:pl-8">
            <ScrollReveal delay={0.25}>
              <div className="relative">
                {/* Three phones stacked at angles */}
                <div className="relative h-[420px] lg:h-[560px]">
                  {/* Phone 1 - back */}
                  <div
                    className="absolute top-0 left-[10%] w-[180px] lg:w-[240px] aspect-[9/16] bg-ink border border-ink rotate-[-8deg] shadow-[0_30px_50px_-30px_rgba(15,27,46,0.45)]"
                    aria-hidden
                  >
                    <div
                      className="absolute inset-1 border border-ivory/15"
                      style={{
                        backgroundImage:
                          "linear-gradient(160deg, #1E2B3F 0%, #0F1B2E 70%)",
                      }}
                    />
                    <span className="absolute top-3 left-3 font-mono text-[8px] tracking-widest uppercase text-ivory/50">
                      Reel
                    </span>
                  </div>

                  {/* Phone 2 - middle (highlighted) */}
                  <div className="absolute top-[8%] left-[35%] w-[200px] lg:w-[270px] aspect-[9/16] bg-paper border border-ink/20 shadow-[0_40px_60px_-30px_rgba(15,27,46,0.4)] rotate-[2deg]">
                    {/* Mock video frame */}
                    <div
                      className="absolute inset-1.5"
                      style={{
                        backgroundImage:
                          "linear-gradient(170deg, #F1EAD7 0%, #D9B570 100%)",
                      }}
                    />
                    {/* Suggested floor plan / property silhouette */}
                    <svg
                      className="absolute inset-0 w-full h-full opacity-40"
                      viewBox="0 0 100 180"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M20 130 L20 80 L50 50 L80 80 L80 130 L20 130 Z"
                        stroke="#0F1B2E"
                        strokeWidth="0.5"
                        fill="none"
                      />
                    </svg>
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="font-mono text-[8px] tracking-widest uppercase text-ink/60">
                        Story
                      </span>
                      <span className="font-mono text-[8px] tracking-widest text-ink/60">
                        9:16
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="font-display text-sm leading-tight text-ink">
                        Solrosgatan 14
                      </p>
                      <p className="font-mono text-[8px] tracking-widest uppercase text-ink/60 mt-0.5">
                        Möllevången · 3 rok
                      </p>
                    </div>
                  </div>

                  {/* Phone 3 - front (ad format) */}
                  <div className="absolute bottom-0 right-[5%] w-[170px] lg:w-[220px] aspect-[1/1] bg-ink-soft border border-ivory/10 rotate-[5deg] shadow-[0_30px_50px_-30px_rgba(15,27,46,0.5)]">
                    <div
                      className="absolute inset-1"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 30% 30%, #B68A4F 0%, transparent 60%), linear-gradient(180deg, #1E2B3F 0%, #0F1B2E 100%)",
                      }}
                    />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-ivory/70">
                      <span className="font-mono text-[8px] tracking-widest uppercase">
                        Annons
                      </span>
                      <span className="font-mono text-[8px] tracking-widest">
                        1:1
                      </span>
                    </div>
                  </div>
                </div>

                {/* Channel strip */}
                <div className="mt-8 lg:mt-12 grid grid-cols-4 gap-3 lg:gap-6 border-t border-ink/15 pt-6">
                  {channelIcons.map(({ Icon, label }) => (
                    <div
                      key={label}
                      className="flex flex-col items-center gap-2 group"
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.4}
                        className="text-ink/70 group-hover:text-brass-deep transition-colors duration-300"
                      />
                      <span className="font-mono text-[10px] tracking-widest uppercase text-fog">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
