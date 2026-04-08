"use client";

import { useEffect, useState } from "react";

import { siteContentByLocale, type Locale } from "@/data/site-content";

export function PortfolioShell() {
  const [locale, setLocale] = useState<Locale>("es");
  const [activeSection, setActiveSection] = useState("#home");
  const siteContent = siteContentByLocale[locale];
  const contactEmail = siteContent.contact.email.replace(/^mailto:/, "");

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

  return (
    <main className="portfolio-page">
      <header className="topbar">
        <div className="topbar__inner">
          <a className="topbar__brand" href="#home">
            {siteContent.brand}
          </a>

          <nav className="topbar__nav" aria-label={siteContent.languageLabel}>
            {siteContent.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={activeSection === item.href ? "is-active" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="topbar__actions">
            <div className="locale-switcher" aria-label={siteContent.languageLabel}>
              <button
                type="button"
                className={locale === "es" ? "is-active" : undefined}
                onClick={() => setLocale("es")}
              >
                ES
              </button>
              <button
                type="button"
                className={locale === "en" ? "is-active" : undefined}
                onClick={() => setLocale("en")}
              >
                EN
              </button>
            </div>
            <a className="topbar__cta" href="#contact">
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
              <img src={siteContent.hero.image} alt="Ezequiel Gallardo" />
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
                  <img src={project.image} alt={project.title} />
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
                <a key={item.label} href={item.href} className="cta__social">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    {item.icon}
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
              <a key={item} href="#" className={index === 2 ? "is-highlighted" : undefined}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
