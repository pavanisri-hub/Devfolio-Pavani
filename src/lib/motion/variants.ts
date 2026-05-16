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

/** Cinematic hero entrance — layered choreography */
export const heroCinematicContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.45,
    },
  },
};

export const heroCinematicItem = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.95,
      ease: easing.outExpo,
    },
  },
};

export const heroEyebrowReveal = {
  hidden: { opacity: 0, y: 16, x: -12 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.8, ease: easing.outExpo },
  },
};

export const heroNameReveal = {
  hidden: { opacity: 0, y: 52, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.15,
      ease: easing.outExpo,
    },
  },
};

export const heroLineReveal = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 1, ease: easing.outExpo, delay: 0.05 },
  },
};

export const heroCtaReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easing.outExpo },
  },
};

export const navbarEntrance = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easing.outExpo, delay: 0.15 },
  },
};
