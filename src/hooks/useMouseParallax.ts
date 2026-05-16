import { useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

type UseMouseParallaxOptions = {
  /** Multiplier for raw mouse delta (-1 to 1 range) */
  strength?: number;
  stiffness?: number;
  damping?: number;
};

/**
 * Smooth spring-based mouse parallax. Disabled when `enabled` is false.
 */
export function useMouseParallax(
  enabled: boolean,
  { strength = 1, stiffness = 40, damping = 24 }: UseMouseParallaxOptions = {},
) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness, damping });
  const y = useSpring(rawY, { stiffness, damping });

  useEffect(() => {
    if (!enabled) {
      rawX.set(0);
      rawY.set(0);
      return;
    }

    const onMove = (event: MouseEvent) => {
      const nx = (event.clientX / window.innerWidth - 0.5) * 2;
      const ny = (event.clientY / window.innerHeight - 0.5) * 2;
      rawX.set(nx * strength);
      rawY.set(ny * strength);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled, rawX, rawY, strength]);

  return { x, y };
}
