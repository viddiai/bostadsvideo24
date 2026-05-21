import * as LucideIcons from "lucide-react";

type StepIndicatorProps = {
  icon: string;
  title: string;
  description: string;
  stepNumber: number;
  isLast?: boolean;
};

export function StepIndicator({
  icon,
  title,
  description,
  stepNumber,
}: StepIndicatorProps) {
  const Icon = (
    LucideIcons as unknown as Record<
      string,
      React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>
    >
  )[icon];

  return (
    <div className="group relative">
      {/* Step number — oversized editorial */}
      <div className="flex items-baseline justify-between mb-6">
        <span className="font-display text-7xl md:text-8xl font-light leading-none text-ink tabular-nums">
          {String(stepNumber).padStart(2, "0")}
        </span>
        <div className="w-10 h-10 border border-ink/20 flex items-center justify-center transition-colors duration-500 group-hover:bg-ink group-hover:border-ink">
          {Icon && (
            <Icon
              size={16}
              strokeWidth={1.4}
              className="text-ink transition-colors duration-500 group-hover:text-ivory"
            />
          )}
        </div>
      </div>

      <div className="h-px w-full bg-ink/15 mb-5 origin-left transition-transform duration-500 group-hover:bg-brass" />

      <h3 className="font-display text-xl md:text-[22px] text-ink leading-tight">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-fog max-w-[260px]">
        {description}
      </p>
    </div>
  );
}
