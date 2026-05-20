import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "secondary";
  href?: string;
  children: React.ReactNode;
  className?: string;
};

export function Button({
  variant = "primary",
  href = "#",
  children,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-sora font-semibold text-sm transition-all duration-200";
  const variants = {
    primary: "bg-gold text-navy hover:brightness-110 shadow-md hover:shadow-lg",
    secondary:
      "border-2 border-navy text-navy hover:bg-navy hover:text-white",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
