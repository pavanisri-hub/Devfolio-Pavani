import type { ReactNode } from "react";

import { MotionFadeUp } from "@/components/ui/MotionFadeUp";
import { cn } from "@/lib/utils/cn";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
};

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  className,
  children,
}: SectionHeadingProps) {
  return (
    <MotionFadeUp>
      <header
        className={cn(
          "mb-10 md:mb-14",
          align === "center" && "text-center",
          className,
        )}
      >
        <h2 className="font-heading text-3xl font-medium tracking-tight text-text-primary sm:text-4xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-3 max-w-2xl text-base text-text-muted sm:text-lg">
            {subtitle}
          </p>
        ) : null}
        {children}
      </header>
    </MotionFadeUp>
  );
}
