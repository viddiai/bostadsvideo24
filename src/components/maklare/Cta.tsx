import * as LucideIcons from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CTA_LABEL, CTA_HREF, riskBadges } from "./data";

type IconCmp = React.ComponentType<{
  size?: number;
  className?: string;
  strokeWidth?: number;
}>;

const Icons = LucideIcons as unknown as Record<string, IconCmp>;

type Tone = "light" | "dark";

/** Primary kickoff CTA button. Always points to the booking flow. */
export function KickoffButton({
  tone = "light",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  return (
    <Button
      href={CTA_HREF}
      variant={tone === "dark" ? "inverse" : "primary"}
      className={className}
    >
      {CTA_LABEL}
    </Button>
  );
}

/** Risk-reversal badges shown directly under each CTA. */
export function RiskBadges({
  tone = "light",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  const text = tone === "dark" ? "text-ivory/80" : "text-ink/75";
  const accent = tone === "dark" ? "text-brass-light" : "text-brass-deep";

  return (
    <ul
      className={`flex flex-wrap items-center gap-x-5 gap-y-2.5 ${className}`}
    >
      {riskBadges.map((badge) => {
        const Icon = Icons[badge.icon];
        return (
          <li
            key={badge.text}
            className={`flex items-center gap-2 font-mono text-[11px] tracking-wider uppercase ${text}`}
          >
            {Icon && <Icon size={13} strokeWidth={1.6} className={accent} />}
            <span>{badge.text}</span>
          </li>
        );
      })}
    </ul>
  );
}

/** Convenience: CTA button with badges stacked beneath it. */
export function CtaBlock({
  tone = "light",
  align = "start",
}: {
  tone?: Tone;
  align?: "start" | "center";
}) {
  return (
    <div className={align === "center" ? "flex flex-col items-center" : ""}>
      <KickoffButton tone={tone} />
      <RiskBadges
        tone={tone}
        className={`mt-6 ${align === "center" ? "justify-center" : ""}`}
      />
    </div>
  );
}
