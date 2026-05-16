import { motion, useReducedMotion } from "framer-motion";

import { Container, SectionWrapper } from "@/components/layout";
import { Button } from "@/components/ui";
import { SITE } from "@/data";
import { heroCinematicContainer, heroCinematicItem } from "@/lib/motion";
import { cn } from "@/lib/utils/cn";

import { HeroBackground } from "./HeroBackground";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="hero"
      spacing={false}
      ariaLabel="Introduction"
      className="relative overflow-hidden bg-bg-space"
    >
      <HeroBackground />

      <Container className="relative z-10 flex min-h-[100dvh] flex-col justify-center pb-24 pt-28 sm:pt-32">
        {/* Ambient text glow */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-accent-purple/10 blur-[80px]"
          animate={
            prefersReducedMotion
              ? undefined
              : { opacity: [0.3, 0.6, 0.3], scale: [1, 1.15, 1] }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 7, repeat: Infinity, ease: "easeInOut" }
          }
        />

        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
          variants={heroCinematicContainer}
          className="relative max-w-3xl"
        >
          {/* Eyebrow — glass pill */}
          <motion.div variants={heroCinematicItem}>
            <p className="glass-pill inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-accent-purple-soft sm:text-sm">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent-blue shadow-[0_0_8px_2px_var(--color-accent-blue)]"
                aria-hidden
              />
              {SITE.title}
            </p>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={heroCinematicItem}
            className="mt-7 font-heading text-[clamp(2.5rem,7vw,4.75rem)] font-medium leading-[1.02] tracking-tight"
          >
            <span className="text-glow text-text-primary">{SITE.fullName}</span>
          </motion.h1>

          {/* Gradient rule */}
          <motion.div variants={heroCinematicItem} className="mt-7 flex items-center gap-4">
            <span
              className="h-px w-16 bg-gradient-to-r from-accent-purple-soft via-accent-blue to-transparent"
              aria-hidden
            />
            <span
              className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent via-border-default to-transparent"
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
            variants={heroCinematicItem}
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
              prefersReducedMotion
                ? undefined
                : { opacity: [0.35, 0.9, 0.35], y: [0, 4, 0] }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <span className="h-10 w-px bg-gradient-to-b from-accent-purple-soft/50 to-transparent" aria-hidden />
            <span className="text-xs uppercase tracking-[0.2em]">Scroll to explore</span>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom fade into page */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40",
          "bg-gradient-to-t from-bg-base via-bg-base/80 to-transparent",
        )}
      />
    </SectionWrapper>
  );
}
