import { motion, useReducedMotion, useTransform } from "framer-motion";

import { Container, SectionWrapper } from "@/components/layout";
import { Button } from "@/components/ui";
import { SITE } from "@/data";
import { useMouseParallax } from "@/hooks";
import {
  heroCinematicContainer,
  heroCinematicItem,
  heroCtaReveal,
  heroEyebrowReveal,
  heroLineReveal,
  heroNameReveal,
} from "@/lib/motion";
import { cn } from "@/lib/utils/cn";

import { HeroBackground } from "./HeroBackground";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const reduced = !!prefersReducedMotion;
  const { x: mouseX, y: mouseY } = useMouseParallax(!reduced, {
    strength: 1,
    stiffness: 30,
    damping: 20,
  });

  const contentX = useTransform(mouseX, (v) => (reduced ? 0 : v * 10));
  const contentY = useTransform(mouseY, (v) => (reduced ? 0 : v * 8));
  const glowX = useTransform(mouseX, (v) => (reduced ? 0 : v * -20));
  const glowY = useTransform(mouseY, (v) => (reduced ? 0 : v * -16));

  return (
    <SectionWrapper
      id="hero"
      spacing={false}
      ariaLabel="Introduction"
      className="relative overflow-hidden bg-bg-space"
    >
      <HeroBackground />

      <Container className="relative z-10 flex min-h-[100dvh] flex-col justify-center pb-24 pt-28 sm:pt-32">
        {/* Ambient glow — mouse-reactive */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -left-16 top-[20%] h-72 w-72 rounded-full bg-accent-purple/15 blur-[90px]"
          style={{ x: glowX, y: glowY }}
          animate={
            reduced
              ? undefined
              : { opacity: [0.25, 0.55, 0.25], scale: [1, 1.2, 1] }
          }
          transition={
            reduced
              ? undefined
              : { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-8 top-[35%] h-56 w-56 rounded-full bg-accent-blue/10 blur-[70px]"
          style={{ x: glowX, y: glowY }}
          animate={
            reduced
              ? undefined
              : { opacity: [0.2, 0.45, 0.2], scale: [1, 1.15, 1] }
          }
          transition={
            reduced
              ? undefined
              : { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }
          }
        />

        <motion.div
          style={{ x: contentX, y: contentY }}
          initial={reduced ? false : "hidden"}
          animate="visible"
          variants={heroCinematicContainer}
          className="relative max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div variants={heroEyebrowReveal}>
            <p className="glass-pill inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-accent-purple-soft sm:text-sm">
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-accent-blue shadow-[0_0_10px_3px_var(--color-accent-blue)]"
                aria-hidden
                animate={
                  reduced
                    ? undefined
                    : { opacity: [0.6, 1, 0.6], scale: [1, 1.3, 1] }
                }
                transition={
                  reduced
                    ? undefined
                    : { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                }
              />
              {SITE.title}
            </p>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={heroNameReveal}
            className="mt-7 font-heading text-[clamp(2.5rem,7vw,4.85rem)] font-medium leading-[1.02] tracking-tight"
          >
            <span className="text-glow text-text-primary">{SITE.fullName}</span>
          </motion.h1>

          {/* Gradient rule */}
          <motion.div
            variants={heroLineReveal}
            className="mt-7 flex origin-left items-center gap-4"
          >
            <span
              className="h-px w-20 bg-gradient-to-r from-accent-purple-soft via-accent-blue to-transparent"
              aria-hidden
            />
            <span
              className="h-px flex-1 max-w-[140px] bg-gradient-to-r from-transparent via-border-default/80 to-transparent"
              aria-hidden
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={heroCinematicItem}
            className="mt-8 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg"
          >
            {SITE.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={heroCtaReveal}
            className="mt-11 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button
              href={SITE.resumeUrl}
              variant="secondary"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </Button>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            variants={heroCinematicItem}
            className="mt-20 hidden items-center gap-3 text-text-subtle sm:flex"
            animate={
              reduced
                ? undefined
                : { opacity: [0.3, 0.85, 0.3], y: [0, 6, 0] }
            }
            transition={
              reduced
                ? undefined
                : { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <span
              className="h-10 w-px bg-gradient-to-b from-accent-purple-soft/60 to-transparent"
              aria-hidden
            />
            <span className="text-xs uppercase tracking-[0.2em]">Scroll to explore</span>
          </motion.div>
        </motion.div>
      </Container>

      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 z-10 h-44",
          "bg-gradient-to-t from-bg-base via-bg-base/85 to-transparent",
        )}
      />
    </SectionWrapper>
  );
}
