import Link from "next/link";
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
  return (
    <header className="topbar">
      <div className="topbar__inner">
        <a className="topbar__brand" href="#home">
          {brand}
        </a>

        <button
          type="button"
          className="topbar__menu-toggle"
          aria-label={locale === "es" ? "Abrir navegación" : "Open navigation"}
          aria-expanded="false"
          aria-controls="site-navigation"
          data-label-open={locale === "es" ? "Abrir navegación" : "Open navigation"}
          data-label-close={locale === "es" ? "Cerrar navegación" : "Close navigation"}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="site-navigation"
          className="topbar__nav"
          aria-label={languageLabel}
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="topbar__actions">
          <button
            type="button"
            className="theme-toggle"
            aria-label={locale === "es" ? "Cambiar tema" : "Toggle theme"}
            aria-pressed="false"
            title={locale === "es" ? "Cambiar tema" : "Toggle theme"}
          >
            <span className="theme-toggle__track" aria-hidden="true">
              <span className="theme-toggle__thumb">
                <span className="theme-toggle__icon theme-toggle__icon--sun">☀</span>
                <span className="theme-toggle__icon theme-toggle__icon--moon">☾</span>
              </span>
            </span>
          </button>
          <div className="locale-switcher" aria-label={languageLabel}>
            <Link
              href="/es"
              className={locale === "es" ? "is-active" : undefined}
              aria-current={locale === "es" ? "page" : undefined}
            >
              ES
            </Link>
            <Link
              href="/en"
              className={locale === "en" ? "is-active" : undefined}
              aria-current={locale === "en" ? "page" : undefined}
            >
              EN
            </Link>
          </div>
          <a className="topbar__cta" href="#contact">
            {connectLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
