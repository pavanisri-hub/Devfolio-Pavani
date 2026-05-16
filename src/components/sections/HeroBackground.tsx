import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import type { TargetAndTransition } from "framer-motion";

import { useMouseParallax } from "@/hooks";
import {
  floatMedium,
  floatReverse,
  floatSlow,
  floatTransition,
  floatWide,
  glowPulse,
  glowTransition,
  nebulaBreath,
  nebulaTransition,
} from "@/lib/motion";
import { cn } from "@/lib/utils/cn";

import { Starfield } from "./Starfield";

type FloatingBlobProps = {
  scrollY: MotionValue<number>;
  parallaxRange: [number, number];
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  mouseStrength: number;
  floatVariant: TargetAndTransition;
  duration: number;
  delay?: number;
  className: string;
  reduced: boolean;
};

function FloatingBlob({
  scrollY,
  parallaxRange,
  mouseX,
  mouseY,
  mouseStrength,
  floatVariant,
  duration,
  delay = 0,
  className,
  reduced,
}: FloatingBlobProps) {
  const scrollParallaxY = useTransform(scrollY, [0, 800], parallaxRange);
  const mouseOffsetX = useTransform(mouseX, (v) => v * mouseStrength);
  const mouseOffsetY = useTransform(mouseY, (v) => v * mouseStrength);
  const combinedY = useTransform(
    [scrollParallaxY, mouseOffsetY],
    ([scroll, mouse]) => (reduced ? 0 : (scroll as number) + (mouse as number)),
  );
  const combinedX = useTransform(mouseOffsetX, (v) => (reduced ? 0 : v));

  return (
    <motion.div
      style={{ y: combinedY, x: combinedX }}
      className="absolute will-change-transform"
    >
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
};

function GlowOrb({ className, reduced, delay = 0 }: GlowOrbProps) {
  return (
    <motion.div
      className={className}
      animate={reduced ? undefined : glowPulse}
      transition={reduced ? undefined : glowTransition(4.5, delay)}
    />
  );
}

export function HeroBackground() {
  const prefersReducedMotion = useReducedMotion();
  const reduced = !!prefersReducedMotion;
  const { scrollY } = useScroll();
  const { x: mouseX, y: mouseY } = useMouseParallax(!reduced, {
    strength: 1,
    stiffness: 35,
    damping: 22,
  });

  const gridY = useTransform(scrollY, [0, 600], [0, reduced ? 0 : 40]);
  const gridMouseX = useTransform(mouseX, (v) => (reduced ? 0 : v * 8));
  const gridMouseY = useTransform(mouseY, (v) => (reduced ? 0 : v * 8));
  const gridCombinedY = useTransform(
    [gridY, gridMouseY],
    ([scroll, mouse]) => (reduced ? 0 : (scroll as number) + (mouse as number)),
  );

  const nebulaMouseX = useTransform(mouseX, (v) => (reduced ? 0 : v * -18));
  const nebulaMouseY = useTransform(mouseY, (v) => (reduced ? 0 : v * -12));

  return (
    <motion.div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden bg-bg-space",
        "mask-[linear-gradient(to_bottom,black_78%,transparent)]",
      )}
    >
      {/* Animated deep-space base */}
      <motion.div
        className="absolute inset-0"
        animate={reduced ? undefined : nebulaBreath}
        transition={reduced ? undefined : nebulaTransition(14)}
        style={{
          background:
            "radial-gradient(ellipse 130% 90% at 50% -25%, oklch(0.2 0.05 264 / 0.65), transparent 55%)",
        }}
      />

      {/* Secondary animated nebula wash */}
      <motion.div
        className="absolute inset-0"
        style={{ x: nebulaMouseX, y: nebulaMouseY }}
        animate={
          reduced
            ? undefined
            : {
                opacity: [0.35, 0.6, 0.35],
              }
        }
        transition={
          reduced ? undefined : { duration: 11, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_20%,oklch(0.55_0.14_250/0.12),transparent_50%)]" />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_15%_60%,oklch(0.62_0.16_290/0.1),transparent_55%)]"
          animate={reduced ? undefined : nebulaBreath}
          transition={reduced ? undefined : nebulaTransition(16, 3)}
        />
      </motion.div>

      <Starfield />

      {/* Parallax grid */}
      <motion.div
        style={{ y: gridCombinedY, x: gridMouseX }}
        className="absolute inset-0 opacity-[0.2]"
      >
        <div className="hero-grid absolute inset-0" />
      </motion.div>

      {/* Nebula blobs — float + scroll + mouse parallax */}
      <FloatingBlob
        scrollY={scrollY}
        parallaxRange={[0, 100]}
        mouseX={mouseX}
        mouseY={mouseY}
        mouseStrength={28}
        floatVariant={floatSlow}
        duration={18}
        delay={0}
        reduced={reduced}
        className="absolute -top-40 left-[0%] h-[min(36rem,90vw)] w-[min(36rem,90vw)] rounded-full bg-accent-purple/35 blur-[130px]"
      />
      <FloatingBlob
        scrollY={scrollY}
        parallaxRange={[0, -85]}
        mouseX={mouseX}
        mouseY={mouseY}
        mouseStrength={-22}
        floatVariant={floatMedium}
        duration={15}
        delay={2}
        reduced={reduced}
        className="absolute top-[15%] -right-[5%] h-[min(30rem,80vw)] w-[min(30rem,80vw)] rounded-full bg-accent-blue/30 blur-[140px]"
      />
      <FloatingBlob
        scrollY={scrollY}
        parallaxRange={[0, 55]}
        mouseX={mouseX}
        mouseY={mouseY}
        mouseStrength={18}
        floatVariant={floatReverse}
        duration={20}
        delay={4}
        reduced={reduced}
        className="absolute -bottom-28 left-[20%] h-[min(24rem,65vw)] w-[min(24rem,65vw)] rounded-full bg-accent-purple-muted blur-[110px]"
      />
      <FloatingBlob
        scrollY={scrollY}
        parallaxRange={[0, -40]}
        mouseX={mouseX}
        mouseY={mouseY}
        mouseStrength={-14}
        floatVariant={floatWide}
        duration={22}
        delay={6}
        reduced={reduced}
        className="absolute top-[45%] left-[45%] h-[min(18rem,50vw)] w-[min(18rem,50vw)] rounded-full bg-accent-blue/15 blur-[100px]"
      />

      {/* Twinkling glow orbs */}
      <GlowOrb
        reduced={reduced}
        delay={0}
        className="absolute left-[12%] top-[16%] h-2 w-2 rounded-full bg-accent-blue-soft shadow-[0_0_24px_8px_oklch(0.65_0.14_250/0.55)]"
      />
      <GlowOrb
        reduced={reduced}
        delay={1.2}
        className="absolute right-[18%] top-[30%] h-1.5 w-1.5 rounded-full bg-accent-purple-soft shadow-[0_0_20px_6px_oklch(0.62_0.16_290/0.5)]"
      />
      <GlowOrb
        reduced={reduced}
        delay={2.4}
        className="absolute bottom-[35%] left-[58%] h-1 w-1 rounded-full bg-white shadow-[0_0_14px_4px_oklch(1_0_0/0.4)]"
      />
      <GlowOrb
        reduced={reduced}
        delay={0.8}
        className="absolute left-[75%] top-[55%] h-1.5 w-1.5 rounded-full bg-accent-blue-soft/90 shadow-[0_0_18px_5px_oklch(0.65_0.14_250/0.4)]"
      />
      <GlowOrb
        reduced={reduced}
        delay={3}
        className="absolute left-[35%] top-[75%] h-1 w-1 rounded-full bg-accent-purple-soft shadow-[0_0_16px_4px_oklch(0.62_0.16_290/0.35)]"
      />

      {/* Horizon + top vignette */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[55%]"
        animate={
          reduced
            ? undefined
            : { opacity: [0.6, 0.9, 0.6] }
        }
        transition={
          reduced ? undefined : { duration: 9, repeat: Infinity, ease: "easeInOut" }
        }
        style={{
          background:
            "radial-gradient(ellipse 95% 65% at 50% 100%, oklch(0.55 0.14 250 / 0.1), transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-5%,oklch(0.62_0.16_290/0.1),transparent_55%)]" />

      {/* Cinematic edge fade */}
      <motion.div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,transparent_40%,oklch(0_0_0/0.4)_100%)]" />
    </motion.div>
  );
}
