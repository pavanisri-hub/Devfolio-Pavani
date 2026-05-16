export type SectionId =
  | "hero"
  | "about"
  | "skills"
  | "projects"
  | "achievements"
  | "contact";

export type NavItem = {
  id: SectionId;
  label: string;
  href: `#${SectionId}`;
};

export const NAV_ITEMS: NavItem[] = [
  { id: "hero", label: "Home", href: "#hero" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "achievements", label: "Achievements", href: "#achievements" },
  { id: "contact", label: "Contact", href: "#contact" },
];
