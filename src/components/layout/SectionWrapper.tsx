import type { ReactNode } from "react";

import type { SectionId } from "@/data";
import { cn } from "@/lib/utils/cn";

type SectionWrapperProps = {
  id: SectionId;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  /** Toggle vertical section spacing — off for hero */
  spacing?: boolean;
};

export function SectionWrapper({
  id,
  children,
  className,
  ariaLabel,
  spacing = true,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(spacing && "section-spacing", className)}
    >
      {children}
    </section>
  );
}
