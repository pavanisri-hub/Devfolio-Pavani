import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

export type ContainerSize = "narrow" | "app" | "wide";

const sizeClasses: Record<ContainerSize, string> = {
  narrow: "container-narrow",
  app: "container-app",
  wide: "container-wide",
};

type ContainerProps = {
  children: ReactNode;
  size?: ContainerSize;
  className?: string;
};

export function Container({
  children,
  size = "app",
  className,
}: ContainerProps) {
  return <div className={cn(sizeClasses[size], className)}>{children}</div>;
}
