import { motion, useReducedMotion } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";

import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils/cn";

type MotionStaggerProps = Omit<ComponentProps<typeof motion.div>, "children"> & {
  children: ReactNode;
};

export function MotionStagger({
  children,
  className,
  ...props
}: MotionStaggerProps) {
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
      variants={staggerContainer}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type MotionStaggerItemProps = Omit<ComponentProps<typeof motion.div>, "children"> & {
  children: ReactNode;
};

export function MotionStaggerItem({
  children,
  className,
  ...props
}: MotionStaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={cn(className)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div className={cn(className)} variants={staggerItem} {...props}>
      {children}
    </motion.div>
  );
}
