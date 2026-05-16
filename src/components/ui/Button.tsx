import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </a>
  );
}
