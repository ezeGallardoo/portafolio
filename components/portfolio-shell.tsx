"use client";

import Image from "next/image";
import { startTransition, useEffect, useState } from "react";

import { siteContentByLocale, type Locale } from "@/data/site-content";

function SocialIcon({ name }: { name: string }) {
  if (name === "LinkedIn") {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path
          d="M0 1.146C0 .513.526 0 1.175 0H14.825C15.474 0 16 .513 16 1.146V14.854C16 15.487 15.474 16 14.825 16H1.175C.526 16 0 15.487 0 14.854V1.146ZM4.943 13.394V6.169H2.542V13.394H4.943ZM3.742 5.182C4.579 5.182 5.1 4.627 5.1 3.932C5.084 3.222 4.58 2.682 3.758 2.682C2.936 2.682 2.4 3.222 2.4 3.932C2.4 4.627 2.92 5.182 3.726 5.182H3.742ZM6.271 13.394H8.672V9.359C8.672 9.143 8.688 8.928 8.751 8.774C8.924 8.344 9.319 7.9 9.983 7.9C10.852 7.9 11.201 8.559 11.201 9.525V13.394H13.602V9.248C13.602 7.027 12.416 5.993 10.837 5.993C9.564 5.993 9.003 6.693 8.688 7.186H8.704V6.169H6.303C6.334 6.833 6.271 13.394 6.271 13.394Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === "GitHub") {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path
          d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.62C4 14 3.48 13.13 3.32 12.68C3.23 12.45 2.84 11.74 2.5 11.55C2.22 11.4 1.82 11.03 2.49 11.02C3.12 11.01 3.57 11.6 3.72 11.84C4.44 13.05 5.59 12.71 6.05 12.5C6.12 11.98 6.33 11.63 6.56 11.43C4.78 11.23 2.92 10.54 2.92 7.48C2.92 6.61 3.23 5.9 3.74 5.34C3.66 5.14 3.38 4.32 3.82 3.21C3.82 3.21 4.49 3 6 4.02C6.64 3.85 7.32 3.76 8 3.76C8.68 3.76 9.36 3.85 10 4.02C11.51 2.99 12.18 3.21 12.18 3.21C12.62 4.32 12.34 5.14 12.26 5.34C12.77 5.9 13.08 6.6 13.08 7.48C13.08 10.55 11.21 11.23 9.43 11.43C9.72 11.68 9.97 12.16 9.97 12.91C9.97 13.98 9.96 14.84 9.96 15.21C9.96 15.42 10.11 15.67 10.51 15.59C13.7 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <span className="material-symbols-outlined" aria-hidden="true">
      link
    </span>
  );
}

export function PortfolioShell() {
  const [locale, setLocale] = useState<Locale>("es");
  const [activeSection, setActiveSection] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const siteContent = siteContentByLocale[locale];
  const contactEmail = siteContent.contact.email.replace(/^mailto:/, "");
  const getLinkProps = (href: string) =>
    href.startsWith("http")
      ? {
          target: "_blank" as const,
          rel: "noreferrer",
        }
      : {};

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
  }, [activeSection, locale]);

  return (
    <main className="portfolio-page">
      <header className="topbar">
        <div className="topbar__inner">
          <a className="topbar__brand" href="#home">
            {siteContent.brand}
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
            aria-label={siteContent.languageLabel}
          >
            {siteContent.navigation.map((item) => (
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
            <div className="locale-switcher" aria-label={siteContent.languageLabel}>
              <button
                type="button"
                className={locale === "es" ? "is-active" : undefined}
                onClick={() => {
                  startTransition(() => setLocale("es"));
                }}
              >
                ES
              </button>
              <button
                type="button"
                className={locale === "en" ? "is-active" : undefined}
                onClick={() => {
                  startTransition(() => setLocale("en"));
                }}
              >
                EN
              </button>
            </div>
            <a className="topbar__cta" href="#contact" onClick={() => setIsMenuOpen(false)}>
              {siteContent.connectLabel}
            </a>
          </div>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero__leak" aria-hidden="true" />
        <div className="shell hero__grid">
          <div className="hero__content">
            <div className="hero__badge">{siteContent.hero.badge}</div>
            <h1>
              {siteContent.hero.title[0]} <span>{siteContent.hero.title[1]}</span>
              <br />
              <strong>{siteContent.hero.title[2]}</strong>
            </h1>
            <p>{siteContent.hero.description}</p>

            <div className="hero__buttons">
              <a className="button button--primary" href="#contact">
                {siteContent.hero.primaryCta}
                <span className="material-symbols-outlined" aria-hidden="true">
                  arrow_forward
                </span>
              </a>
              <a className="button button--ghost" href={siteContent.hero.secondaryHref}>
                {siteContent.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="hero__media">
            <div className="hero__image-frame">
              <Image
                src={siteContent.hero.image}
                alt="Ezequiel Gallardo portrait"
                fill
                priority
                sizes="(max-width: 760px) 100vw, (max-width: 1080px) 70vw, 32vw"
              />
            </div>
            <div className="hero__status">
              <p>{siteContent.hero.statusTitle}</p>
              <strong>{siteContent.hero.statusText}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="process" id="process">
        <div className="shell">
          <div className="section-heading section-heading--split">
            <div>
              <span>{siteContent.process.kicker}</span>
              <h2>{siteContent.process.title}</h2>
            </div>
            <p>{siteContent.process.description}</p>
          </div>

          <div className="process-grid">
            {siteContent.process.steps.map((step) => (
              <article key={step.number} className="process-card">
                <span className="process-card__index">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="shell">
          <div className="section-heading section-heading--center">
            <h2>{siteContent.skills.title}</h2>
            <p>{siteContent.skills.description}</p>
          </div>

          <div className="skills-grid">
            {siteContent.skills.cards.map((card) => (
              <article
                key={card.title}
                className={`skill-card${card.featured ? " skill-card--featured" : ""}`}
              >
                <span className="skill-card__icon material-symbols-outlined" aria-hidden="true">
                  {card.icon}
                </span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <ul className="skill-card__tags">
                  {card.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="shell">
          <div className="section-heading section-heading--split section-heading--projects">
            <h2>{siteContent.projects.title}</h2>
            <div>
              <p>{siteContent.projects.description}</p>
              <a href={siteContent.projects.archiveHref}>
                <span>{siteContent.projects.archiveCta}</span>
                <span className="material-symbols-outlined" aria-hidden="true">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          <div className="projects-grid">
            {siteContent.projects.items.map((project, index) => (
              <article
                key={project.title}
                className={`project-card${index === 1 ? " project-card--offset" : ""}`}
              >
                <div className="project-card__image">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 760px) 100vw, (max-width: 1080px) 70vw, 42vw"
                  />
                </div>
                <div className="project-card__meta">
                  <div>
                    <span>{project.label}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <div className="project-card__arrow">
                    <span className="material-symbols-outlined" aria-hidden="true">
                      north_east
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="cta__leak" aria-hidden="true" />
        <div className="shell cta__inner">
          <h2>
            {siteContent.contact.title[0]}
            <br />
            <span>{siteContent.contact.title[1]}</span>
          </h2>
          <div className="cta__copy">
            <p>{siteContent.contact.description}</p>
            <a className="cta__email" href={siteContent.contact.email}>
              {contactEmail}
            </a>
            <div className="cta__links">
              {siteContent.contact.links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="cta__social"
                  aria-label={item.label}
                  {...getLinkProps(item.href)}
                >
                  <span className="cta__social-icon" aria-hidden="true">
                    <SocialIcon name={item.label} />
                  </span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="cta__buttons">
            <a className="button button--primary" href={siteContent.contact.email}>
              {siteContent.contact.primaryCta}
            </a>
            {siteContent.contact.secondaryHref ? (
              <a className="button button--ghost" href={siteContent.contact.secondaryHref}>
                {siteContent.contact.secondaryCta}
              </a>
            ) : (
              <button type="button" className="button button--ghost">
                {siteContent.contact.secondaryCta}
              </button>
            )}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer__inner">
          <p>{siteContent.footer.copy}</p>
          <div className="footer__links">
            {siteContent.footer.links.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={index === 2 ? "is-highlighted" : undefined}
                {...getLinkProps(item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
