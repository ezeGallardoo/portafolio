"use client";

import { useEffect } from "react";

export function PortfolioEnhancements() {
  useEffect(() => {
    const root = document.documentElement;
    const topbar = document.querySelector<HTMLElement>(".topbar");
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".topbar__nav a"));
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const sections = ["home", "process", "skills", "projects", "contact"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    root.dataset.motion = "enhanced";

    let rafId = 0;

    const syncScrollState = () => {
      rafId = 0;
      topbar?.classList.toggle("is-scrolled", window.scrollY > 18);
    };

    const requestScrollSync = () => {
      if (rafId !== 0) {
        return;
      }

      rafId = window.requestAnimationFrame(syncScrollState);
    };

    syncScrollState();
    window.addEventListener("scroll", requestScrollSync, { passive: true });

    const revealObserver =
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches && revealItems.length > 0
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                const target = entry.target as HTMLElement;

                if (entry.isIntersecting) {
                  target.classList.add("is-visible");
                  if (target.dataset.revealOnce === "true") {
                    revealObserver?.unobserve(target);
                  }
                  return;
                }

                if (target.dataset.revealOnce !== "true") {
                  target.classList.remove("is-visible");
                }
              });
            },
            {
              threshold: 0.18,
              rootMargin: "0px 0px -12% 0px",
            },
          )
        : null;

    revealItems.forEach((item) => revealObserver?.observe(item));

    const sectionObserver =
      sections.length > 0
        ? new IntersectionObserver(
            (entries) => {
              const visibleEntry = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

              if (!visibleEntry) {
                return;
              }

              const activeHref = `#${visibleEntry.target.id}`;
              navLinks.forEach((link) => {
                link.classList.toggle("is-active", link.getAttribute("href") === activeHref);
              });
            },
            {
              rootMargin: "-18% 0px -48% 0px",
              threshold: [0.2, 0.35, 0.5, 0.7],
            },
          )
        : null;

    sections.forEach((section) => sectionObserver?.observe(section));

    return () => {
      root.dataset.motion = "base";
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", requestScrollSync);
      revealObserver?.disconnect();
      sectionObserver?.disconnect();
    };
  }, []);

  return null;
}
