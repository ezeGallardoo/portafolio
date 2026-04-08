"use client";

import { useEffect } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";

function syncThemeToggle(toggle: HTMLButtonElement | null, theme: Theme) {
  if (!toggle) {
    return;
  }

  const isDark = theme === "dark";
  toggle.classList.toggle("is-dark", isDark);
  toggle.setAttribute("aria-pressed", String(isDark));
}

export function PortfolioEnhancements() {
  useEffect(() => {
    const root = document.documentElement;
    const topbar = document.querySelector<HTMLElement>(".topbar");
    const menuToggle = document.querySelector<HTMLButtonElement>(".topbar__menu-toggle");
    const navigation = document.querySelector<HTMLElement>(".topbar__nav");
    const actions = document.querySelector<HTMLElement>(".topbar__actions");
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".topbar__nav a"));
    const themeToggle = document.querySelector<HTMLButtonElement>(".theme-toggle");
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const sectionIds = ["home", "process", "skills", "projects", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const setMenuOpen = (isOpen: boolean) => {
      menuToggle?.classList.toggle("is-open", isOpen);
      navigation?.classList.toggle("is-open", isOpen);
      actions?.classList.toggle("is-open", isOpen);
      menuToggle?.setAttribute("aria-expanded", String(isOpen));
      menuToggle?.setAttribute(
        "aria-label",
        isOpen
          ? menuToggle?.dataset.labelClose ?? "Close navigation"
          : menuToggle?.dataset.labelOpen ?? "Open navigation",
      );
    };

    const currentTheme = root.dataset.theme === "dark" ? "dark" : "light";
    syncThemeToggle(themeToggle, currentTheme);

    const handleThemeToggle = () => {
      const nextTheme: Theme = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = nextTheme;
      window.localStorage.setItem(STORAGE_KEY, nextTheme);
      syncThemeToggle(themeToggle, nextTheme);
    };

    themeToggle?.addEventListener("click", handleThemeToggle);

    const handleMenuToggle = () => {
      const isOpen = menuToggle?.classList.contains("is-open") ?? false;
      setMenuOpen(!isOpen);
    };

    menuToggle?.addEventListener("click", handleMenuToggle);

    const closeMenu = () => setMenuOpen(false);
    navLinks.forEach((link) => link.addEventListener("click", closeMenu));
    actions
      ?.querySelectorAll<HTMLAnchorElement>("a")
      .forEach((link) => link.addEventListener("click", closeMenu));

    const syncScrollState = () => {
      topbar?.classList.toggle("is-scrolled", window.scrollY > 18);
    };

    syncScrollState();
    window.addEventListener("scroll", syncScrollState, { passive: true });

    let sectionObserver: IntersectionObserver | null = null;

    if (sections.length > 0) {
      sectionObserver = new IntersectionObserver(
        (entries) => {
          const visibleEntries = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

          if (visibleEntries.length === 0) {
            return;
          }

          const activeHref = `#${visibleEntries[0].target.id}`;
          navLinks.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === activeHref);
          });

          closeMenu();
        },
        {
          rootMargin: "-20% 0px -45% 0px",
          threshold: [0.2, 0.35, 0.5, 0.7],
        },
      );

      sections.forEach((section) => sectionObserver?.observe(section));
    }

    let revealObserver: IntersectionObserver | null = null;

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && revealItems.length > 0) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              if ((entry.target as HTMLElement).dataset.revealOnce === "true") {
                revealObserver?.unobserve(entry.target);
              }
              return;
            }

            entry.target.classList.remove("is-visible");
          });
        },
        {
          threshold: 0.18,
          rootMargin: "0px 0px -10% 0px",
        },
      );

      revealItems.forEach((item) => revealObserver?.observe(item));
    }

    return () => {
      themeToggle?.removeEventListener("click", handleThemeToggle);
      menuToggle?.removeEventListener("click", handleMenuToggle);
      navLinks.forEach((link) => link.removeEventListener("click", closeMenu));
      actions
        ?.querySelectorAll<HTMLAnchorElement>("a")
        .forEach((link) => link.removeEventListener("click", closeMenu));
      window.removeEventListener("scroll", syncScrollState);
      sectionObserver?.disconnect();
      revealObserver?.disconnect();
    };
  }, []);

  return null;
}
