import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils/cn";

/**
 * Pure CSS starfield — three parallax layers, zero canvas/DOM stars.
 * Respects prefers-reduced-motion (static layers only).
 */
export function Starfield() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <motion.div
        className={cn("starfield-layer starfield-far", !prefersReducedMotion && "starfield-drift-slow")}
        animate={prefersReducedMotion ? undefined : { opacity: [0.35, 0.55, 0.35] }}
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <motion.div
        className={cn("starfield-layer starfield-mid", !prefersReducedMotion && "starfield-drift-mid")}
        animate={prefersReducedMotion ? undefined : { opacity: [0.45, 0.7, 0.45] }}
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
        }
      />
      <motion.div
        className={cn("starfield-layer starfield-near", !prefersReducedMotion && "starfield-drift-fast")}
      />
    </div>
  );
}
