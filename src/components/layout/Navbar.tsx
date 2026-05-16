import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { NAV_ITEMS, SITE } from "@/data";
import { useActiveSection, useScrolled } from "@/hooks";
import { transition } from "@/lib/motion";
import { cn } from "@/lib/utils/cn";

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-4 w-5" aria-hidden>
      <span
        className={cn(
          "absolute left-0 h-0.5 w-5 rounded-full bg-text-primary transition-all duration-300",
          open ? "top-[7px] rotate-45" : "top-0",
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-text-primary transition-all duration-300",
          open ? "opacity-0" : "opacity-100",
        )}
      />
      <span
        className={cn(
          "absolute left-0 h-0.5 w-5 rounded-full bg-text-primary transition-all duration-300",
          open ? "top-[7px] -rotate-45" : "top-[14px]",
        )}
      />
    </span>
  );
}

type NavLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
};

function NavLink({ href, label, isActive, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "relative px-3 py-1.5 text-sm font-medium transition-colors duration-200",
        isActive ? "text-text-primary" : "text-text-muted hover:text-text-secondary",
      )}
    >
      {label}
      {isActive ? (
        <motion.span
          layoutId="nav-active-indicator"
          className="absolute inset-x-1 -bottom-0.5 h-px bg-gradient-to-r from-accent-purple-soft to-accent-blue"
          transition={transition.default}
        />
      ) : null}
    </a>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();
  const activeSection = useActiveSection(SECTION_IDS);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Main navigation"
        className={cn(
          "glass-nav mx-auto flex max-w-5xl items-center justify-between rounded-2xl px-4 py-3 sm:px-5",
          scrolled && "glass-nav-scrolled",
        )}
      >
        {/* Brand */}
        <a
          href="#hero"
          className="font-heading text-lg font-semibold tracking-tight text-text-primary transition-opacity hover:opacity-80"
          onClick={closeMenu}
        >
          {SITE.brand}
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.filter((item) => item.id !== "hero").map((item) => (
            <li key={item.id}>
              <NavLink
                href={item.href}
                label={item.label}
                isActive={activeSection === item.id}
              />
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle text-text-primary transition-colors hover:bg-bg-elevated md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              className="fixed inset-0 z-40 bg-bg-overlay md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : transition.fast}
              onClick={closeMenu}
            />
            <motion.div
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="glass-nav fixed inset-x-4 top-[4.5rem] z-50 overflow-hidden rounded-2xl md:hidden"
              initial={prefersReducedMotion ? false : { opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8, scale: 0.98 }}
              transition={transition.default}
            >
              <ul className="flex flex-col p-2">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                        activeSection === item.id
                          ? "bg-accent-purple-muted text-text-primary"
                          : "text-text-secondary hover:bg-bg-elevated hover:text-text-primary",
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
