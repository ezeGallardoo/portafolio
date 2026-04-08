"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import type { Locale } from "@/data/site-content";

type NavigationItem = {
  href: string;
  label: string;
};

type PortfolioHeaderProps = {
  brand: string;
  connectLabel: string;
  languageLabel: string;
  locale: Locale;
  navigation: NavigationItem[];
};

export function PortfolioHeader({
  brand,
  connectLabel,
  languageLabel,
  locale,
  navigation,
}: PortfolioHeaderProps) {
  const [activeSection, setActiveSection] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ["home", "process", "skills", "projects", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(`#${visibleEntries[0].target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [activeSection]);

  return (
    <header className="topbar">
      <div className="topbar__inner">
        <a className="topbar__brand" href="#home">
          {brand}
        </a>

        <button
          type="button"
          className={`topbar__menu-toggle${isMenuOpen ? " is-open" : ""}`}
          aria-label={isMenuOpen ? "Cerrar navegación" : "Abrir navegación"}
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="site-navigation"
          className={`topbar__nav${isMenuOpen ? " is-open" : ""}`}
          aria-label={languageLabel}
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={activeSection === item.href ? "is-active" : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className={`topbar__actions${isMenuOpen ? " is-open" : ""}`}>
          <div className="locale-switcher" aria-label={languageLabel}>
            <Link
              href="/es"
              className={locale === "es" ? "is-active" : undefined}
              aria-current={locale === "es" ? "page" : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              ES
            </Link>
            <Link
              href="/en"
              className={locale === "en" ? "is-active" : undefined}
              aria-current={locale === "en" ? "page" : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              EN
            </Link>
          </div>
          <a className="topbar__cta" href="#contact" onClick={() => setIsMenuOpen(false)}>
            {connectLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
