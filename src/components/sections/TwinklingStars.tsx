import { motion, useReducedMotion } from "framer-motion";

/** Fixed positions — no runtime randomness, stable across renders */
const TWINKLE_STARS = [
  { left: "8%", top: "12%", size: 1, delay: 0 },
  { left: "22%", top: "28%", size: 2, delay: 0.6 },
  { left: "38%", top: "8%", size: 1, delay: 1.2 },
  { left: "52%", top: "22%", size: 1, delay: 0.3 },
  { left: "68%", top: "15%", size: 2, delay: 1.8 },
  { left: "82%", top: "32%", size: 1, delay: 0.9 },
  { left: "92%", top: "18%", size: 1, delay: 2.1 },
  { left: "15%", top: "48%", size: 1, delay: 1.4 },
  { left: "45%", top: "42%", size: 2, delay: 0.2 },
  { left: "72%", top: "55%", size: 1, delay: 2.5 },
  { left: "88%", top: "62%", size: 1, delay: 0.7 },
  { left: "30%", top: "68%", size: 1, delay: 1.1 },
  { left: "58%", top: "72%", size: 1, delay: 1.6 },
  { left: "5%", top: "78%", size: 2, delay: 2.8 },
  { left: "95%", top: "45%", size: 1, delay: 0.4 },
  { left: "48%", top: "58%", size: 1, delay: 2.2 },
  { left: "76%", top: "38%", size: 1, delay: 1.9 },
  { left: "18%", top: "85%", size: 1, delay: 0.5 },
] as const;

export function TwinklingStars() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div aria-hidden className="pointer-events-none absolute inset-0">
      {TWINKLE_STARS.map((star, index) => (
        <span
          key={index}
          className={
            prefersReducedMotion
              ? "star-twinkle-dot-static"
              : "star-twinkle-dot"
          }
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </motion.div>
  );
}
