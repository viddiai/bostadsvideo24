type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  tone?: "paper" | "ivory" | "ink";
};

export function Card({
  children,
  className = "",
  hover = true,
  tone = "paper",
}: CardProps) {
  const tones = {
    paper: "bg-paper border-ink/10",
    ivory: "bg-ivory border-ink/10",
    ink: "bg-ink text-ivory border-ivory/10",
  };

  return (
    <div
      className={`relative ${tones[tone]} border p-7 ${
        hover
          ? "transition-all duration-500 ease-out hover:-translate-y-1 hover:border-ink/30 hover:shadow-[0_24px_40px_-28px_rgba(15,27,46,0.35)]"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
