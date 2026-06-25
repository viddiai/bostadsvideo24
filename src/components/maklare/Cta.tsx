"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import * as LucideIcons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import {
  CTA_LABEL,
  CAL_LINK,
  CAL_NAMESPACE,
  CAL_CONFIG,
  riskBadges,
} from "./data";

type IconCmp = React.ComponentType<{
  size?: number;
  className?: string;
  strokeWidth?: number;
}>;
const Icons = LucideIcons as unknown as Record<string, IconCmp>;

type Tone = "light" | "dark";
type Size = "sm" | "md";

const base =
  "group inline-flex items-center justify-center gap-2 font-sans font-medium tracking-tight transition-all duration-300 ease-out relative overflow-hidden cursor-pointer";
const sizeCx: Record<Size, string> = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-6 py-3.5 text-sm",
};
// tone "light" → ink button (on light bg); tone "dark" → ivory button (on dark bg)
const toneCx: Record<Tone, string> = {
  light:
    "bg-ink text-ivory hover:bg-ink-soft border border-ink hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_rgba(15,27,46,0.55)]",
  dark:
    "bg-ivory text-ink border border-ivory hover:bg-brass hover:border-brass hover:text-ink hover:-translate-y-0.5",
};

/**
 * Primary kickoff CTA. Opens the Cal.com booking as a popup on click
 * (element-click embed) rather than navigating away.
 */
export function KickoffButton({
  tone = "light",
  size = "md",
  className = "",
}: {
  tone?: Tone;
  size?: Size;
  className?: string;
}) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#241d7b" },
          dark: { "cal-brand": "#fafafa" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <button
      type="button"
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-link={CAL_LINK}
      data-cal-config={CAL_CONFIG}
      className={`${base} ${sizeCx[size]} ${toneCx[tone]} ${className}`}
    >
      <span className="relative z-10">{CTA_LABEL}</span>
      <ArrowUpRight
        size={15}
        strokeWidth={1.6}
        className="relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </button>
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
