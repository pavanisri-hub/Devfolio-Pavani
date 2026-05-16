import { motion, useReducedMotion } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";

import { fadeUp, transition, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils/cn";

type MotionFadeUpProps = Omit<ComponentProps<typeof motion.div>, "children"> & {
  children: ReactNode;
  delay?: number;
};

export function MotionFadeUp({
  children,
  className,
  delay = 0,
  ...props
}: MotionFadeUpProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={cn(className)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{ ...transition.default, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
