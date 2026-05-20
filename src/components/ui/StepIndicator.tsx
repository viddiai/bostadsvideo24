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
  isLast = false,
}: StepIndicatorProps) {
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[icon];

  return (
    <div className="flex flex-col items-center text-center relative">
      <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mb-4">
        {Icon && <Icon size={24} className="text-navy" />}
      </div>
      <span className="text-xs font-sora font-semibold text-gold mb-1">
        Steg {stepNumber}
      </span>
      <h3 className="font-sora font-semibold text-navy text-base">{title}</h3>
      <p className="text-sm text-slate mt-1 max-w-[200px]">{description}</p>
      {!isLast && (
        <div className="hidden lg:block absolute top-7 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-slate/20" />
      )}
    </div>
  );
}
