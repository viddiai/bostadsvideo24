import * as LucideIcons from "lucide-react";

type BadgeProps = {
  icon: string;
  text: string;
  tone?: "light" | "dark";
};

export function Badge({ icon, text, tone = "dark" }: BadgeProps) {
  const Icon = (
    LucideIcons as unknown as Record<
      string,
      React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>
    >
  )[icon];

  const styles =
    tone === "dark"
      ? "border-ivory/15 text-ivory/90"
      : "border-ink/15 text-ink/90 bg-ivory/40";

  return (
    <div
      className={`flex items-center gap-2 border ${styles} backdrop-blur-sm px-3 py-1.5 text-[12px] font-mono tracking-wider uppercase`}
    >
      {Icon && (
        <Icon
          size={12}
          strokeWidth={1.6}
          className={tone === "dark" ? "text-brass-light" : "text-brass-deep"}
        />
      )}
      <span>{text}</span>
    </div>
  );
}
