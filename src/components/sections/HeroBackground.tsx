import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import type { ReactNode } from "react";
import type { TargetAndTransition } from "framer-motion";

import {
  floatMedium,
  floatReverse,
  floatSlow,
  floatTransition,
  glowPulse,
  glowTransition,
} from "@/lib/motion";
import { cn } from "@/lib/utils/cn";

import { Starfield } from "./Starfield";

type FloatingBlobProps = {
  scrollY: MotionValue<number>;
  parallaxRange: [number, number];
  floatVariant: TargetAndTransition;
  duration: number;
  delay?: number;
  className: string;
  reduced: boolean;
};

function FloatingBlob({
  scrollY,
  parallaxRange,
  floatVariant,
  duration,
  delay = 0,
  className,
  reduced,
}: FloatingBlobProps) {
  const parallaxY = useTransform(scrollY, [0, 700], parallaxRange);

  return (
    <motion.div style={{ y: reduced ? 0 : parallaxY }} className="absolute">
      <motion.div
        className={className}
        animate={reduced ? undefined : floatVariant}
        transition={reduced ? undefined : floatTransition(duration, delay)}
      />
    </motion.div>
  );
}

type GlowOrbProps = {
  className: string;
  reduced: boolean;
  delay?: number;
  children?: ReactNode;
};

function GlowOrb({ className, reduced, delay = 0, children }: GlowOrbProps) {
  return (
    <motion.div
      className={className}
      animate={reduced ? undefined : glowPulse}
      transition={reduced ? undefined : glowTransition(7, delay)}
    >
      {children}
    </motion.div>
  );
}

export function HeroBackground() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const gridY = useTransform(
    scrollY,
    [0, 600],
    [0, prefersReducedMotion ? 0 : 30],
  );

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden bg-bg-space",
        "mask-[linear-gradient(to_bottom,black_75%,transparent)]",
      )}
    >
      {/* Deep space base gradient */}
      <motion.div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,oklch(0.18_0.04_264/0.5),transparent_50%)]" />

      <Starfield />

      {/* Subtle tech grid — parallax */}
      <motion.div
        style={{ y: prefersReducedMotion ? 0 : gridY }}
        className="absolute inset-0 opacity-[0.22]"
      >
        <div className="hero-grid absolute inset-0" />
      </motion.div>

      {/* Layered nebula blobs */}
      <FloatingBlob
        scrollY={scrollY}
        parallaxRange={[0, 90]}
        floatVariant={floatSlow}
        duration={16}
        delay={0}
        reduced={!!prefersReducedMotion}
        className="absolute -top-36 left-[5%] h-[min(32rem,85vw)] w-[min(32rem,85vw)] rounded-full bg-accent-purple/30 blur-[120px]"
      />
      <FloatingBlob
        scrollY={scrollY}
        parallaxRange={[0, -70]}
        floatVariant={floatMedium}
        duration={13}
        delay={2}
        reduced={!!prefersReducedMotion}
        className="absolute top-[20%] right-[0%] h-[min(28rem,75vw)] w-[min(28rem,75vw)] rounded-full bg-accent-blue/25 blur-[130px]"
      />
      <FloatingBlob
        scrollY={scrollY}
        parallaxRange={[0, 50]}
        floatVariant={floatReverse}
        duration={18}
        delay={4}
        reduced={!!prefersReducedMotion}
        className="absolute -bottom-24 left-[25%] h-[min(22rem,60vw)] w-[min(22rem,60vw)] rounded-full bg-accent-purple-muted blur-[100px]"
      />

      {/* Accent glow orbs */}
      <GlowOrb
        reduced={!!prefersReducedMotion}
        delay={0}
        className="absolute left-[15%] top-[18%] h-2 w-2 rounded-full bg-accent-blue-soft shadow-[0_0_20px_6px_oklch(0.65_0.14_250/0.5)]"
      />
      <GlowOrb
        reduced={!!prefersReducedMotion}
        delay={2.5}
        className="absolute right-[20%] top-[35%] h-1.5 w-1.5 rounded-full bg-accent-purple-soft shadow-[0_0_16px_4px_oklch(0.62_0.16_290/0.45)]"
      />
      <GlowOrb
        reduced={!!prefersReducedMotion}
        delay={1.2}
        className="absolute bottom-[30%] left-[55%] h-1 w-1 rounded-full bg-white/80 shadow-[0_0_12px_3px_oklch(1_0_0/0.35)]"
      />

      {/* Horizon glow */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_90%_60%_at_50%_100%,oklch(0.55_0.14_250/0.08),transparent_70%)]" />

      {/* Top cinematic vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_0%,oklch(0.62_0.16_290/0.08),transparent_60%)]" />
    </div>
  );
}
