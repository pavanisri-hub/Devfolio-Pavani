/** Easing curves aligned with theme.css motion tokens */
export const easing = {
  outExpo: [0.16, 1, 0.3, 1] as const,
  inOutSmooth: [0.4, 0, 0.2, 1] as const,
} as const;

/** Reusable Framer Motion transition presets */
export const transition = {
  default: {
    duration: 0.55,
    ease: easing.outExpo,
  },
  fast: {
    duration: 0.25,
    ease: easing.inOutSmooth,
  },
  slow: {
    duration: 0.75,
    ease: easing.outExpo,
  },
} as const;
