import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ezequielgallardo.dev"),
  applicationName: "Ezequiel Gallardo Portfolio",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0d10",
  colorScheme: "dark light",
};

const uiBootScript = `
(() => {
  const storageKey = "portfolio-theme";
  document.documentElement.dataset.motion = "base";
  const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
  };

  try {
    const savedTheme = window.localStorage.getItem(storageKey);
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const theme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : systemTheme;
    applyTheme(theme);
  } catch {
    applyTheme("light");
  }

  const init = () => {
    const root = document.documentElement;
    const menuToggle = document.querySelector(".topbar__menu-toggle");
    const navigation = document.querySelector(".topbar__nav");
    const actions = document.querySelector(".topbar__actions");
    const themeToggle = document.querySelector(".theme-toggle");
    const closeTargets = [
      ...document.querySelectorAll(".topbar__nav a"),
      ...document.querySelectorAll(".topbar__actions a"),
    ];

    const syncThemeToggle = () => {
      if (!themeToggle) {
        return;
      }

      const isDark = root.dataset.theme === "dark";
      themeToggle.classList.toggle("is-dark", isDark);
      themeToggle.setAttribute("aria-pressed", String(isDark));
    };

    const setMenuOpen = (isOpen) => {
      if (!menuToggle) {
        return;
      }

      menuToggle.classList.toggle("is-open", isOpen);
      navigation?.classList.toggle("is-open", isOpen);
      actions?.classList.toggle("is-open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen
          ? menuToggle.dataset.labelClose ?? "Close navigation"
          : menuToggle.dataset.labelOpen ?? "Open navigation",
      );
    };

    syncThemeToggle();

    themeToggle?.addEventListener("click", () => {
      const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      window.localStorage.setItem(storageKey, nextTheme);
      syncThemeToggle();
    });

    menuToggle?.addEventListener("click", () => {
      setMenuOpen(!menuToggle.classList.contains("is-open"));
    });

    closeTargets.forEach((link) => {
      link.addEventListener("click", () => setMenuOpen(false), { passive: true });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
`;

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params?: Promise<{ locale?: string }>;
}>) {
  const resolvedParams = (await params) ?? {};
  const locale = resolvedParams.locale === "en" ? "en" : "es";

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: uiBootScript }} />
      </head>
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
