import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils/cn";

import { TwinklingStars } from "./TwinklingStars";

/**
 * Multi-layer CSS starfield + twinkling accent stars.
 * All motion is CSS or lightweight opacity — no canvas.
 */
export function Starfield() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {/* Deepest layer */}
      <div
        className={cn(
          "starfield-layer starfield-far",
          !prefersReducedMotion && "starfield-drift-slow starfield-twinkle-layer",
        )}
      />

      {/* Dense mid-field */}
      <div
        className={cn(
          "starfield-layer starfield-dense",
          !prefersReducedMotion && "starfield-drift-mid",
        )}
      />

      {/* Coloured mid layer */}
      <motion.div
        className={cn(
          "starfield-layer starfield-mid",
          !prefersReducedMotion && "starfield-drift-mid-reverse",
        )}
        animate={
          prefersReducedMotion ? undefined : { opacity: [0.5, 0.85, 0.5] }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }
      />

      {/* Near bright stars */}
      <div
        className={cn(
          "starfield-layer starfield-near",
          !prefersReducedMotion && "starfield-drift-fast",
        )}
      />

      {/* Individual twinkling accents */}
      <TwinklingStars />
    </div>
  );
}
