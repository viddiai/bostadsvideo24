"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "inverse";
type Size = "sm" | "md";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  showArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type AsLink = CommonProps & {
  href: string;
  type?: never;
  onClick?: never;
  disabled?: never;
};

type AsButton = CommonProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

type ButtonProps = AsLink | AsButton;

const base =
  "group inline-flex items-center justify-center gap-2 font-sans font-medium tracking-tight transition-all duration-300 ease-out relative overflow-hidden cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-6 py-3.5 text-sm",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-ivory hover:bg-ink-soft border border-ink hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_rgba(15,27,46,0.55)]",
  secondary:
    "bg-transparent text-ink border border-ink/30 hover:border-ink hover:bg-ink hover:text-ivory",
  ghost:
    "bg-transparent text-ink border-b border-ink/40 hover:border-ink rounded-none px-0 py-1",
  inverse:
    "bg-ivory text-ink border border-ivory hover:bg-brass hover:border-brass hover:text-ink hover:-translate-y-0.5",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    showArrow = true,
    className = "",
    children,
  } = props;

  const cn = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const arrow =
    showArrow && variant !== "ghost" ? (
      <ArrowUpRight
        size={15}
        className="relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={1.6}
      />
    ) : null;

  if (props.href !== undefined) {
    return (
      <Link href={props.href} className={cn}>
        <span className="relative z-10">{children}</span>
        {arrow}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={cn}
    >
      <span className="relative z-10">{children}</span>
      {arrow}
    </button>
  );
}
