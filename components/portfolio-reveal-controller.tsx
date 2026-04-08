"use client";

import { useEffect } from "react";

export function PortfolioRevealController() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (revealItems.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if ((entry.target as HTMLElement).dataset.revealOnce === "true") {
              observer.unobserve(entry.target);
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

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
