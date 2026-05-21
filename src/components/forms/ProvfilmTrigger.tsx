"use client";

import { Button } from "@/components/ui/Button";
import { useProvfilm } from "./ProvfilmContext";

type Variant = "primary" | "secondary" | "ghost" | "inverse";
type Size = "sm" | "md";

type Props = {
  variant?: Variant;
  size?: Size;
  className?: string;
  showArrow?: boolean;
  children?: React.ReactNode;
};

export function ProvfilmTrigger({
  variant = "primary",
  size = "md",
  className = "",
  showArrow = true,
  children = "Beställ provfilm",
}: Props) {
  const { open } = useProvfilm();
  return (
    <Button
      type="button"
      onClick={open}
      variant={variant}
      size={size}
      className={className}
      showArrow={showArrow}
    >
      {children}
    </Button>
  );
}
