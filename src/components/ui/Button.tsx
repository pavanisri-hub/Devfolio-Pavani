import { motion, useReducedMotion } from "framer-motion";
import type { MouseEventHandler, ReactNode } from "react";

import { transition } from "@/lib/motion";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  variant?: ButtonVariant;
  href: string;
  children: ReactNode;
  className?: string;
  download?: boolean;
  target?: string;
  rel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
};

export function Button({
  variant = "primary",
  className,
  children,
  href,
  download,
  target,
  rel,
  onClick,
}: ButtonProps) {
  const prefersReducedMotion = useReducedMotion();
  const classes = cn(variantClasses[variant], className);

  if (prefersReducedMotion) {
    return (
      <a
        className={classes}
        href={href}
        download={download}
        target={target}
        rel={rel}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <motion.a
      className={classes}
      href={href}
      download={download}
      target={target}
      rel={rel}
      onClick={onClick}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={transition.fast}
    >
      {children}
    </motion.a>
  );
}
