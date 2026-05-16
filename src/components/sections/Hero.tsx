import { motion, useReducedMotion } from "framer-motion";

import { Container, SectionWrapper } from "@/components/layout";
import { Button } from "@/components/ui";
import { SITE } from "@/data";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { cn } from "@/lib/utils/cn";

import { HeroBackground } from "./HeroBackground";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="hero"
      spacing={false}
      ariaLabel="Introduction"
      className="relative overflow-hidden"
    >
      <HeroBackground />

      <Container className="relative flex min-h-[100dvh] flex-col justify-center pb-24 pt-28 sm:pt-32">
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.p
            variants={staggerItem}
            className="text-sm font-medium uppercase tracking-[0.2em] text-accent-purple-soft"
          >
            {SITE.title}
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={staggerItem}
            className="mt-5 font-heading text-[clamp(2.5rem,7vw,4.5rem)] font-medium leading-[1.05] tracking-tight"
          >
            <span className="text-text-primary">{SITE.fullName}</span>
          </motion.h1>

          {/* Gradient accent line */}
          <motion.div
            variants={staggerItem}
            className="mt-6 h-px w-24 bg-gradient-to-r from-accent-purple-soft to-accent-blue"
            aria-hidden
          />

          {/* Bio */}
          <motion.p
            variants={staggerItem}
            className="mt-8 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg"
          >
            {SITE.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={staggerItem}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
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
            variants={staggerItem}
            className="mt-16 hidden items-center gap-3 text-text-subtle sm:flex"
            initial={prefersReducedMotion ? false : undefined}
            animate={
              prefersReducedMotion
                ? undefined
                : { opacity: [0.4, 1, 0.4] }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <span className="h-8 w-px bg-border-default" aria-hidden />
            <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom fade into page */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 h-32",
          "bg-gradient-to-t from-bg-base to-transparent",
        )}
      />
    </SectionWrapper>
  );
}
