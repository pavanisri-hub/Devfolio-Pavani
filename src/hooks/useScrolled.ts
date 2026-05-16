import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 24;

export function useScrolled(threshold = SCROLL_THRESHOLD) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
