import * as LucideIcons from "lucide-react";

type BadgeProps = {
  icon: string;
  text: string;
};

export function Badge({ icon, text }: BadgeProps) {
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[icon];

  return (
    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white">
      {Icon && <Icon size={16} className="text-gold" />}
      <span>{text}</span>
    </div>
  );
}
