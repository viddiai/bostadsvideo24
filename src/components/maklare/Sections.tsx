import * as LucideIcons from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Check } from "lucide-react";
import {
  problem,
  solution,
  videoEffect,
  howItWorks,
  wallOfLove,
  packages,
  salesPitch,
  riskReversal,
  finalCta,
} from "./data";
import { CtaBlock, KickoffButton, RiskBadges } from "./Cta";

type IconCmp = React.ComponentType<{
  size?: number;
  className?: string;
  strokeWidth?: number;
}>;
const Icons = LucideIcons as unknown as Record<string, IconCmp>;

function Icon({
  name,
  size = 18,
  className = "",
  strokeWidth = 1.5,
}: {
  name: string;
  size?: number;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = Icons[name];
  return Cmp ? (
    <Cmp size={size} className={className} strokeWidth={strokeWidth} />
  ) : null;
}

/* Shared section eyebrow / index label */
function SectionLabel({
  index,
  eyebrow,
  tone = "light",
}: {
  index: string;
  eyebrow: string;
  tone?: "light" | "dark";
}) {
  const color = tone === "dark" ? "text-ivory/55" : "text-fog";
  const accent = tone === "dark" ? "bg-ivory/25" : "bg-ink/25";
  return (
    <div className={`flex items-center gap-3 ${color}`}>
      <span className="font-mono text-[10px] tracking-[0.24em] uppercase">
        {index} / {eyebrow}
      </span>
      <span className={`h-px w-12 ${accent}`} />
    </div>
  );
}

/* ── 01 · Problem ──────────────────────────────────────────── */
export function Problem() {
  return (
    <section id="problemet" className="bg-bone py-24 lg:py-32 grain">
      <div className="container-edit">
        <ScrollReveal>
          <SectionLabel index={problem.index} eyebrow={problem.eyebrow} />
        </ScrollReveal>
        <div className="mt-8 grid lg:grid-cols-12 gap-y-8 lg:gap-x-12 items-start">
          <ScrollReveal className="lg:col-span-7" delay={0.05}>
            <h2 className="font-display font-light text-[2.1rem] sm:text-[2.75rem] lg:text-[3.4rem] leading-[1.02] tracking-tight text-ink">
              {problem.headline}
            </h2>
          </ScrollReveal>
          <ScrollReveal className="lg:col-span-5 lg:pt-3" delay={0.12}>
            <p className="text-[16px] lg:text-[18px] leading-relaxed text-fog">
              {problem.body}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ── 02 · Solution ─────────────────────────────────────────── */
export function Solution() {
  return (
    <section
      id="losningen"
      className="bg-ink text-ivory py-24 lg:py-32 grain grain-on-dark relative overflow-hidden"
    >
      <span
        aria-hidden
        className="absolute -left-10 bottom-[-4rem] font-display text-[20rem] leading-none font-light text-ivory/[0.03] select-none pointer-events-none"
      >
        02
      </span>
      <div className="container-edit relative">
        <ScrollReveal>
          <SectionLabel
            index={solution.index}
            eyebrow={solution.eyebrow}
            tone="dark"
          />
        </ScrollReveal>
        <div className="mt-8 grid lg:grid-cols-12 gap-y-8 lg:gap-x-12 items-end">
          <ScrollReveal className="lg:col-span-8" delay={0.05}>
            <h2 className="font-display font-light text-[2.1rem] sm:text-[2.75rem] lg:text-[3.6rem] leading-[1.0] tracking-tight text-ivory">
              Vi blir er interna videoavdelning —{" "}
              <span
                className="italic text-brass-light"
                style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
              >
                utan att ni anställer någon.
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal className="lg:col-span-4" delay={0.12}>
            <p className="text-[16px] lg:text-[18px] leading-relaxed text-ivory/70">
              {solution.body}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ── 03 · Video effect — wall of numbers ───────────────────── */
export function VideoEffect() {
  return (
    <section id="effekten" className="bg-ivory py-24 lg:py-32 grain">
      <div className="container-edit">
        <ScrollReveal>
          <SectionLabel index={videoEffect.index} eyebrow={videoEffect.eyebrow} />
          <h2 className="mt-7 font-display font-light text-[2.1rem] sm:text-[2.75rem] lg:text-[3.4rem] leading-[1.02] tracking-tight text-ink max-w-3xl">
            {videoEffect.headline}
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {videoEffect.stats.map((stat, i) => (
            <ScrollReveal key={i} delay={0.04 * i}>
              <div className="group relative pt-6 border-t border-ink/15">
                <span className="absolute -top-px left-0 h-px w-12 bg-brass transition-all duration-700 group-hover:w-24" />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-fog">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon name={stat.icon} size={18} className="text-brass-deep" />
                </div>

                {stat.value !== null ? (
                  <div className="mt-4 flex items-baseline gap-0.5">
                    {stat.prefix && (
                      <span className="font-display text-2xl font-light text-fog leading-none">
                        {stat.prefix}
                      </span>
                    )}
                    <span className="font-display text-5xl lg:text-6xl font-medium text-ink tabular-nums tracking-tight leading-none">
                      {stat.value.toLocaleString("sv-SE")}
                    </span>
                    <span className="font-display text-3xl font-light text-brass leading-none">
                      {stat.suffix}
                    </span>
                  </div>
                ) : (
                  <h3 className="mt-4 font-display text-2xl lg:text-[28px] leading-tight text-ink">
                    {stat.headline}
                  </h3>
                )}

                <p className="mt-4 text-[14px] leading-relaxed text-fog max-w-[260px]">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 04 · How it works — three steps ───────────────────────── */
export function HowItWorks() {
  return (
    <section id="sa-funkar-det" className="bg-bone py-24 lg:py-32 grain">
      <div className="container-edit">
        <ScrollReveal>
          <SectionLabel index={howItWorks.index} eyebrow={howItWorks.eyebrow} />
          <h2 className="mt-7 font-display font-light text-[2.1rem] sm:text-[2.75rem] lg:text-[3.4rem] leading-[1.02] tracking-tight text-ink max-w-3xl">
            {howItWorks.headline}
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid md:grid-cols-3 gap-px bg-ink/12 border border-ink/12">
          {howItWorks.steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={0.08 * i}>
              <div className="h-full bg-bone p-8 lg:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl font-light text-brass/40 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-11 h-11 border border-ink/20 flex items-center justify-center">
                    <Icon name={step.icon} size={18} className="text-brass-deep" />
                  </div>
                </div>
                <h3 className="mt-8 font-display text-2xl leading-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-fog">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-12">
            <CtaBlock />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ── 05 · Wall of love ─────────────────────────────────────── */
export function WallOfLove() {
  return (
    <section className="bg-ivory py-24 lg:py-32 grain">
      <div className="container-edit">
        <ScrollReveal>
          <SectionLabel index={wallOfLove.index} eyebrow={wallOfLove.eyebrow} />
          <h2 className="mt-7 font-display font-light text-[2.1rem] sm:text-[2.75rem] lg:text-[3.4rem] leading-[1.02] tracking-tight text-ink max-w-3xl">
            {wallOfLove.headline}
          </h2>
          <p className="mt-5 font-mono text-[10px] tracking-[0.18em] uppercase text-fog">
            {wallOfLove.note}
          </p>
        </ScrollReveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {wallOfLove.items.map((item, i) => (
            <ScrollReveal key={i} delay={0.08 * i}>
              <article className="h-full border border-dashed border-ink/25 bg-paper/60 p-7 flex flex-col">
                <div className="flex items-center gap-2.5 text-brass-deep">
                  <Icon name={item.icon} size={16} />
                  <span className="font-mono text-[10px] tracking-widest uppercase">
                    {item.type}
                  </span>
                </div>
                <p className="mt-6 text-[15px] leading-relaxed text-ink/80 flex-1">
                  {item.body}
                </p>
                <footer className="mt-6 pt-4 border-t border-ink/10 font-mono text-[10px] tracking-widest uppercase text-fog">
                  {item.author}
                </footer>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 06 · Packages ─────────────────────────────────────────── */
export function Packages() {
  return (
    <section id="paket" className="bg-bone py-24 lg:py-32 grain">
      <div className="container-edit">
        <ScrollReveal>
          <SectionLabel index={packages.index} eyebrow={packages.eyebrow} />
          <h2 className="mt-7 font-display font-light text-[2.1rem] sm:text-[2.75rem] lg:text-[3.4rem] leading-[1.02] tracking-tight text-ink max-w-3xl">
            {packages.headline}
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid lg:grid-cols-3 gap-6 items-start">
          {packages.items.map((pkg, i) => {
            const highlight = pkg.highlight;
            return (
              <ScrollReveal key={pkg.name} delay={0.06 * i}>
                <article
                  className={`group relative flex flex-col h-full border transition-all duration-500 ease-out hover:-translate-y-1 ${
                    highlight
                      ? "bg-ink text-ivory border-ink lg:-translate-y-4"
                      : "bg-paper border-ink/12 hover:border-ink/30"
                  }`}
                >
                  {pkg.tag && (
                    <div
                      className={`absolute -top-3 left-7 px-3 py-1 font-mono text-[10px] tracking-[0.18em] uppercase ${
                        highlight
                          ? "bg-brass text-ink"
                          : "bg-ink/90 text-ivory"
                      }`}
                    >
                      {pkg.tag}
                    </div>
                  )}

                  <div
                    className={`p-7 border-b ${
                      highlight ? "border-ivory/15" : "border-ink/10"
                    }`}
                  >
                    <span
                      className={`font-mono text-[11px] tracking-widest uppercase ${
                        highlight ? "text-brass-light" : "text-fog"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")} / Paket
                    </span>
                    <h3
                      className={`mt-5 font-display text-2xl md:text-[28px] leading-tight ${
                        highlight ? "text-ivory" : "text-ink"
                      }`}
                    >
                      {pkg.name}
                    </h3>
                    <div className="mt-5 flex items-baseline gap-2">
                      <span
                        className={`font-display text-4xl md:text-5xl font-medium tracking-tight ${
                          highlight ? "text-ivory" : "text-ink"
                        }`}
                      >
                        {pkg.price}
                      </span>
                    </div>
                    <p
                      className={`mt-1.5 font-mono text-[10px] tracking-widest uppercase ${
                        highlight ? "text-ivory/50" : "text-fog"
                      }`}
                    >
                      {pkg.unit} · exkl. moms
                    </p>
                    <p
                      className={`mt-5 text-[14px] leading-relaxed ${
                        highlight ? "text-ivory/75" : "text-fog"
                      }`}
                    >
                      {pkg.intro}
                    </p>
                  </div>

                  <ul className="p-7 space-y-3 flex-1">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start gap-3 text-[14px] leading-relaxed ${
                          highlight ? "text-ivory/85" : "text-fog"
                        }`}
                      >
                        <span
                          className={`mt-2 h-px w-3 flex-shrink-0 ${
                            highlight ? "bg-brass-light" : "bg-brass"
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="p-7 pt-0">
                    <KickoffButton
                      tone={highlight ? "dark" : "light"}
                      className="w-full"
                    />
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

/* ── 07 · Win the sales pitch ──────────────────────────────── */
export function SalesPitch() {
  return (
    <section className="bg-ivory py-24 lg:py-32 grain">
      <div className="container-edit">
        <div className="grid lg:grid-cols-12 gap-y-8 lg:gap-x-12 items-start">
          <ScrollReveal className="lg:col-span-8">
            <SectionLabel index={salesPitch.index} eyebrow={salesPitch.eyebrow} />
            <h2 className="mt-7 font-display font-light text-[1.9rem] sm:text-[2.4rem] lg:text-[3rem] leading-[1.08] tracking-tight text-ink">
              {salesPitch.headline}
            </h2>
          </ScrollReveal>
          <ScrollReveal className="lg:col-span-4 lg:pt-16" delay={0.1}>
            <p className="text-[16px] lg:text-[18px] leading-relaxed text-fog">
              {salesPitch.body}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ── 08 · Risk reversal ────────────────────────────────────── */
export function RiskReversal() {
  return (
    <section className="bg-bone py-20 lg:py-24 grain">
      <div className="container-edit">
        <ScrollReveal>
          <SectionLabel index={riskReversal.index} eyebrow={riskReversal.eyebrow} />
          <h2 className="mt-7 font-display font-light text-[2.1rem] sm:text-[2.75rem] lg:text-[3.4rem] leading-[1.02] tracking-tight text-ink">
            {riskReversal.headline}
          </h2>
        </ScrollReveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-ink/12 border border-ink/12">
          {riskReversal.points.map((point, i) => (
            <ScrollReveal key={point} delay={0.05 * i}>
              <div className="h-full bg-bone p-6 flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 flex-shrink-0 bg-brass/15 flex items-center justify-center">
                  <Check size={12} strokeWidth={2} className="text-brass-deep" />
                </span>
                <span className="text-[14px] leading-snug text-ink/85">
                  {point}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 09 · Final CTA ────────────────────────────────────────── */
export function FinalCta() {
  return (
    <section
      id="kickoff"
      className="bg-ink text-ivory py-28 lg:py-36 grain grain-on-dark relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(70% 60% at 50% 30%, rgba(182,138,79,0.18) 0%, transparent 60%)",
        }}
      />
      <div className="container-edit relative text-center flex flex-col items-center">
        <ScrollReveal>
          <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-ivory/55">
            {finalCta.index} / {finalCta.eyebrow}
          </span>
          <h2 className="mt-7 font-display font-light text-[2.4rem] sm:text-[3.25rem] lg:text-[4.25rem] leading-[1.0] tracking-tight text-ivory max-w-4xl">
            {finalCta.headline}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.12}>
          <div className="mt-12 flex flex-col items-center">
            <KickoffButton tone="dark" />
            <RiskBadges tone="dark" className="mt-7 justify-center max-w-2xl" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
