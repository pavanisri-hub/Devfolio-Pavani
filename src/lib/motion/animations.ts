import type { TargetAndTransition, Transition } from "framer-motion";

import { easing } from "./presets";

/** Slow ambient float for blobs and decorative elements */
export const floatSlow: TargetAndTransition = {
  y: [0, -28, 0],
  x: [0, 14, 0],
  scale: [1, 1.06, 1],
};

export const floatMedium: TargetAndTransition = {
  y: [0, 20, 0],
  x: [0, -18, 0],
  scale: [1, 1.04, 1],
};

export const floatReverse: TargetAndTransition = {
  y: [0, 16, 0],
  x: [0, -12, 0],
  opacity: [0.55, 0.85, 0.55],
};

export const glowPulse: TargetAndTransition = {
  opacity: [0.4, 0.75, 0.4],
  scale: [1, 1.12, 1],
};

export const floatTransition = (duration = 14, delay = 0): Transition => ({
  duration,
  repeat: Infinity,
  ease: easing.inOutSmooth,
  delay,
});

export const glowTransition = (duration = 6, delay = 0): Transition => ({
  duration,
  repeat: Infinity,
  ease: "easeInOut",
  delay,
});
