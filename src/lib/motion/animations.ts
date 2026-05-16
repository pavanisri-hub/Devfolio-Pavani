import type { TargetAndTransition, Transition } from "framer-motion";

import { easing } from "./presets";

/** Slow ambient float for nebula blobs */
export const floatSlow: TargetAndTransition = {
  y: [0, -42, 0],
  x: [0, 24, 0],
  scale: [1, 1.1, 1],
};

export const floatMedium: TargetAndTransition = {
  y: [0, 32, 0],
  x: [0, -28, 0],
  scale: [1, 1.07, 1],
};

export const floatReverse: TargetAndTransition = {
  y: [0, 22, 0],
  x: [0, -16, 0],
  opacity: [0.5, 0.9, 0.5],
};

export const floatWide: TargetAndTransition = {
  y: [0, -18, 0],
  x: [0, 30, 0],
  scale: [0.95, 1.05, 0.95],
};

export const glowPulse: TargetAndTransition = {
  opacity: [0.35, 0.9, 0.35],
  scale: [1, 1.2, 1],
};

export const nebulaBreath: TargetAndTransition = {
  opacity: [0.45, 0.75, 0.45],
  scale: [1, 1.08, 1],
};

export const floatTransition = (duration = 14, delay = 0): Transition => ({
  duration,
  repeat: Infinity,
  ease: easing.inOutSmooth,
  delay,
});

export const glowTransition = (duration = 5, delay = 0): Transition => ({
  duration,
  repeat: Infinity,
  ease: "easeInOut",
  delay,
});

export const nebulaTransition = (duration = 10, delay = 0): Transition => ({
  duration,
  repeat: Infinity,
  ease: easing.inOutSmooth,
  delay,
});
