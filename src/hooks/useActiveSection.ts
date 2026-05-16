import { useEffect, useState } from "react";

import type { SectionId } from "@/data";

const DEFAULT_SECTION: SectionId = "hero";

export function useActiveSection(sectionIds: SectionId[]) {
  const [activeSection, setActiveSection] =
    useState<SectionId>(DEFAULT_SECTION);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        const mostVisible = visible.reduce((current, next) =>
          next.intersectionRatio > current.intersectionRatio ? next : current,
        );

        setActiveSection(mostVisible.target.id as SectionId);
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.15, 0.35, 0.55, 0.75, 1],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
