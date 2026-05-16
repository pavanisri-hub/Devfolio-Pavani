import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils/cn";

export function HeroBackground() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const blobAY = useTransform(scrollY, [0, 600], [0, prefersReducedMotion ? 0 : 80]);
  const blobBY = useTransform(scrollY, [0, 600], [0, prefersReducedMotion ? 0 : -60]);
  const blobCY = useTransform(scrollY, [0, 600], [0, prefersReducedMotion ? 0 : 40]);

  return (
    <motion.div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        "mask-[linear-gradient(to_bottom,black_70%,transparent)]",
      )}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(oklch(1 0 0 / 0.03) 1px, transparent 1px),
            linear-gradient(90deg, oklch(1 0 0 / 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Gradient blobs */}
      <motion.div
        style={{ y: blobAY }}
        className="absolute -top-32 left-[10%] h-[min(28rem,70vw)] w-[min(28rem,70vw)] rounded-full bg-accent-purple/25 blur-[100px]"
      />
      <motion.div
        style={{ y: blobBY }}
        className="absolute top-1/3 right-[5%] h-[min(24rem,60vw)] w-[min(24rem,60vw)] rounded-full bg-accent-blue/20 blur-[110px]"
      />
      <motion.div
        style={{ y: blobCY }}
        className="absolute -bottom-20 left-1/3 h-[min(20rem,50vw)] w-[min(20rem,50vw)] rounded-full bg-accent-purple-muted blur-[90px]"
      />

      {/* Radial vignette */}
      <motion.div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.62_0.16_290/0.12),transparent_55%)]" />
    </motion.div>
  );
}
