import { easing, transition } from "./presets";

/** Single element fade-up reveal */
export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transition.default,
  },
};

/** Parent container — staggers child animations */
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

/** Child item inside a stagger container */
export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transition.default,
  },
};

/** Subtle fade without vertical movement */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transition.fast,
  },
};

/** Cinematic hero entrance — slower, deeper stagger */
export const heroCinematicContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

export const heroCinematicItem = {
  hidden: {
    opacity: 0,
    y: 36,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: easing.outExpo,
    },
  },
};
