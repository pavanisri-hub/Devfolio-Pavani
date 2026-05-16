/** Default viewport config — animate once when ~20% visible */
export const viewportOnce = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -80px 0px",
} as const;

/** Viewport config for hero / above-the-fold content */
export const viewportHero = {
  once: true,
  amount: 0.1,
} as const;

/** Create a custom viewport config with sensible defaults */
export function createViewport(
  options: Partial<typeof viewportOnce> = {},
) {
  return {
    ...viewportOnce,
    ...options,
  };
}
