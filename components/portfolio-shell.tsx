import { PortfolioEnhancements } from "@/components/portfolio-enhancements";
import { PortfolioHeader } from "@/components/portfolio-header";
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

  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.62C4 14 3.48 13.13 3.32 12.68C3.23 12.45 2.84 11.74 2.5 11.55C2.22 11.4 1.82 11.03 2.49 11.02C3.12 11.01 3.57 11.6 3.72 11.84C4.44 13.05 5.59 12.71 6.05 12.5C6.12 11.98 6.33 11.63 6.56 11.43C4.78 11.23 2.92 10.54 2.92 7.48C2.92 6.61 3.23 5.9 3.74 5.34C3.66 5.14 3.38 4.32 3.82 3.21C3.82 3.21 4.49 3 6 4.02C6.64 3.85 7.32 3.76 8 3.76C8.68 3.76 9.36 3.85 10 4.02C11.51 2.99 12.18 3.21 12.18 3.21C12.62 4.32 12.34 5.14 12.26 5.34C12.77 5.9 13.08 6.6 13.08 7.48C13.08 10.55 11.21 11.23 9.43 11.43C9.72 11.68 9.97 12.16 9.97 12.91C9.97 13.98 9.96 14.84 9.96 15.21C9.96 15.42 10.11 15.67 10.51 15.59C13.7 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M4.25 10H13.64L9.57 5.93L11 4.5L17.5 11L11 17.5L9.57 16.07L13.64 12H4.25V10Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SkillIcon({ icon }: { icon: string }) {
  if (icon === "terminal") {
    return (
      <svg viewBox="0 0 96 96" aria-hidden="true">
        <path
          d="M18 24H78C81.314 24 84 26.686 84 30V66C84 69.314 81.314 72 78 72H18C14.686 72 12 69.314 12 66V30C12 26.686 14.686 24 18 24ZM27.75 39.75L38.25 48L27.75 56.25L31.5 61.5L48.75 48L31.5 34.5L27.75 39.75ZM51 57H69V51H51V57Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (icon === "layers") {
    return (
      <svg viewBox="0 0 96 96" aria-hidden="true">
        <path
          d="M48 18L15 36L48 54L81 36L48 18ZM24.75 45.75L15 51L48 69L81 51L71.25 45.75L48 58.5L24.75 45.75ZM24.75 60.75L15 66L48 84L81 66L71.25 60.75L48 73.5L24.75 60.75Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 96 96" aria-hidden="true">
      <path
        d="M34.5 31.5L18 48L34.5 64.5L40.5 58.5L30 48L40.5 37.5L34.5 31.5ZM61.5 31.5L55.5 37.5L66 48L55.5 58.5L61.5 64.5L78 48L61.5 31.5Z"
        fill="currentColor"
      />
      <path d="M45.1 72H54.1L64.9 24H55.9L45.1 72Z" fill="currentColor" />
    </svg>
  );
}

export function PortfolioShell({ locale }: { locale: Locale }) {
  const siteContent = siteContentByLocale[locale];
  const contactEmail = siteContent.contact.email.replace(/^mailto:/, "");
  const linkedInLink = siteContent.contact.links.find((item) => item.label === "LinkedIn")?.href;
  const getLinkProps = (href: string) =>
    href.startsWith("http")
      ? {
          target: "_blank" as const,
          rel: "noreferrer",
        }
      : {};

  return (
    <main className="portfolio-page">
      <PortfolioEnhancements />
      <PortfolioHeader
        brand={siteContent.brand}
        connectLabel={siteContent.connectLabel}
        languageLabel={siteContent.languageLabel}
        locale={locale}
        navigation={siteContent.navigation}
        navigationLabel={siteContent.navigationLabel}
      />

      <section className="hero" id="home">
        <div className="hero__leak" aria-hidden="true" />
        <div className="shell hero__grid">
          <div className="hero__content">
            <div
              className="hero__badge"
              data-reveal
              data-reveal-variant="fade-up"
              data-reveal-once="true"
            >
              {siteContent.hero.badge}
            </div>
            <h1
              data-reveal
              data-reveal-variant="hero-title"
              data-reveal-once="true"
              style={{ ["--reveal-delay" as string]: "60ms" }}
            >
              {siteContent.hero.title[0]} <span>{siteContent.hero.title[1]}</span>
              <br />
              <strong>{siteContent.hero.title[2]}</strong>
            </h1>
            <p
              data-reveal
              data-reveal-variant="fade-up"
              data-reveal-once="true"
              style={{ ["--reveal-delay" as string]: "120ms" }}
            >
              {siteContent.hero.description}
            </p>

            <div
              className="hero__buttons"
              data-reveal
              data-reveal-variant="fade-up"
              data-reveal-once="true"
              style={{ ["--reveal-delay" as string]: "190ms" }}
            >
              <a className="button button--primary" href="#contact">
                {siteContent.hero.primaryCta}
                <span className="button__icon" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </a>
              <a className="button button--ghost" href={siteContent.hero.secondaryHref}>
                {siteContent.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="hero__media">
            <div
              className="hero__image-frame"
              data-reveal
              data-reveal-variant="hero-media"
              data-reveal-once="true"
              style={{ ["--reveal-delay" as string]: "110ms" }}
            >
              <picture>
                <source
                  srcSet="/images/profile/perfil-960.jpg 960w, /images/profile/perfil-1440.jpg 1440w"
                  sizes="(max-width: 760px) 100vw, (max-width: 1080px) 70vw, 32vw"
                  type="image/jpeg"
                />
                <img
                  src="/images/profile/perfil-960.jpg"
                  srcSet="/images/profile/perfil-960.jpg 960w, /images/profile/perfil-1440.jpg 1440w"
                  sizes="(max-width: 760px) 100vw, (max-width: 1080px) 70vw, 32vw"
                  alt={locale === "es" ? "Retrato de Ezequiel Gallardo" : "Portrait of Ezequiel Gallardo"}
                  width={960}
                  height={953}
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                />
              </picture>
            </div>
            {linkedInLink ? (
              <a
                className="hero__status"
                href={linkedInLink}
                data-reveal
                data-reveal-variant="card-rise"
                data-reveal-once="true"
                style={{ ["--reveal-delay" as string]: "220ms" }}
                {...getLinkProps(linkedInLink)}
              >
                <span className="hero__status-head">
                  <span className="hero__status-badge" aria-hidden="true">
                    <SocialIcon name="LinkedIn" />
                  </span>
                  <p>{siteContent.hero.status.label}</p>
                </span>
                <strong>{siteContent.hero.status.text}</strong>
                <span className="hero__status-link">
                  {siteContent.hero.status.cta}
                </span>
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="shell">
          <div
            className="section-heading section-heading--split section-heading--projects"
            data-reveal
            data-reveal-variant="fade-up"
            data-reveal-once="true"
          >
            <h2>{siteContent.projects.title}</h2>
            <div>
              <p>{siteContent.projects.description}</p>
              <a href={siteContent.projects.archiveHref} {...getLinkProps(siteContent.projects.archiveHref)}>
                <span>{siteContent.projects.archiveCta}</span>
                <span className="button__icon button__icon--inline" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </a>
            </div>
          </div>

          {siteContent.projects.items.map((project) => (
            <article
              key={project.title}
              className="skill-card featured-project"
              data-reveal
              data-reveal-variant="feature-rise"
            >
              <div className="featured-project__copy">
                <span className="featured-project__period">{project.period}</span>
                <div className="featured-project__heading">
                  {project.image ? (
                    <img
                      className="featured-project__mark"
                      src={project.image.src}
                      alt=""
                      width={40}
                      height={40}
                    />
                  ) : null}
                  <h3>{project.title}</h3>
                </div>
                <p>{project.text}</p>
                <ul className="skill-card__tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              <div className="featured-project__details">
                <ul className="featured-project__highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                {project.href ? (
                  <a
                    className="featured-project__note"
                    href={project.href}
                    {...getLinkProps(project.href)}
                  >
                    {project.note}
                  </a>
                ) : (
                  <p className="featured-project__note">{project.note}</p>
                )}
              </div>
            </article>
          ))}

          {/*
          <article
            className="projects-soon"
            data-reveal
            data-reveal-variant="feature-rise"
            style={{ ["--reveal-delay" as string]: "80ms" }}
          >
            <div className="projects-soon__visual" aria-hidden="true">
              <span className="projects-soon__ring projects-soon__ring--outer" />
              <span className="projects-soon__ring projects-soon__ring--inner" />
              <span className="projects-soon__core" />
            </div>
            <div className="projects-soon__copy">
              <span>{siteContent.projects.statusBadge}</span>
              <h3>{siteContent.projects.statusTitle}</h3>
              <p>{siteContent.projects.statusText}</p>
            </div>
            <a
              href={siteContent.projects.archiveHref}
              className="button button--primary"
              {...getLinkProps(siteContent.projects.archiveHref)}
            >
              {siteContent.projects.archiveCta}
              <span className="button__icon" aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
          </article>
          */}
        </div>
      </section>

      <section className="process" id="process">
        <div className="shell">
          <div
            className="section-heading section-heading--split"
            data-reveal
            data-reveal-variant="fade-up"
            data-reveal-once="true"
          >
            <div>
              <span>{siteContent.process.kicker}</span>
              <h2>{siteContent.process.title}</h2>
            </div>
            <p>{siteContent.process.description}</p>
          </div>

          <div className="process-grid">
            {siteContent.process.steps.map((step) => (
              <article
                key={step.number}
                className="process-card"
                data-reveal
                data-reveal-variant="card-rise"
                style={{ ["--reveal-delay" as string]: `${Number(step.number) * 45}ms` }}
              >
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
          <div
            className="section-heading section-heading--center"
            data-reveal
            data-reveal-variant="fade-up"
            data-reveal-once="true"
          >
            <h2>{siteContent.skills.title}</h2>
            <p>{siteContent.skills.description}</p>
          </div>

          <div className="skills-grid">
            {siteContent.skills.cards.map((card, index) => (
              <article
                key={card.title}
                className={`skill-card${card.featured ? " skill-card--featured" : ""}`}
                data-reveal
                data-reveal-variant="card-rise"
                style={{ ["--reveal-delay" as string]: `${index * 55}ms` }}
              >
                <span className="skill-card__icon" aria-hidden="true">
                  <SkillIcon icon={card.icon} />
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

      <section className="cta" id="contact">
        <div className="cta__leak" aria-hidden="true" />
        <div className="shell cta__inner" data-reveal data-reveal-variant="cta-rise">
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
              <a
                className="button button--ghost"
                href={siteContent.contact.secondaryHref}
                target="_blank"
                rel="noreferrer"
              >
                {siteContent.contact.secondaryCta}
              </a>
            ) : (
              <button
                type="button"
                className="button button--ghost button--disabled"
                aria-disabled="true"
                title={locale === "es" ? "Disponible próximamente" : "Coming soon"}
              >
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
