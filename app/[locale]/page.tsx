import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PortfolioShell } from "@/components/portfolio-shell";
import { type Locale } from "@/data/site-content";

const locales: Locale[] = ["es", "en"];

const localeMetadata: Record<
  Locale,
  {
    title: string;
    description: string;
    locale: string;
    keywords: string[];
  }
> = {
  es: {
    title: "Ezequiel Gallardo | Desarrollador Web",
    description:
      "Portafolio de Ezequiel Gallardo, desarrollador web y estudiante de Ingeniería en Sistemas. Interfaces claras, experiencias rápidas y productos web con base técnica sólida.",
    locale: "es_AR",
    keywords: [
      "Ezequiel Gallardo",
      "desarrollador web",
      "frontend developer",
      "Next.js portfolio",
      "React developer",
      "portfolio web",
    ],
  },
  en: {
    title: "Ezequiel Gallardo | Web Developer",
    description:
      "Portfolio of Ezequiel Gallardo, web developer and Systems Engineering student. Clear interfaces, fast experiences, and web products built on a solid technical foundation.",
    locale: "en_US",
    keywords: [
      "Ezequiel Gallardo",
      "web developer",
      "frontend developer",
      "Next.js portfolio",
      "React developer",
      "web portfolio",
    ],
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    return {};
  }

  const selectedLocale = locale as Locale;
  const content = localeMetadata[selectedLocale];
  const canonicalPath = selectedLocale === "es" ? "/es" : "/en";

  return {
    title: content.title,
    description: content.description,
    authors: [{ name: "Ezequiel Gallardo", url: "https://ezequielgallardo.dev" }],
    creator: "Ezequiel Gallardo",
    publisher: "Ezequiel Gallardo",
    alternates: {
      canonical: canonicalPath,
      languages: {
        es: "/es",
        en: "/en",
      },
    },
    keywords: content.keywords,
    openGraph: {
      type: "website",
      locale: content.locale,
      url: `https://ezequielgallardo.dev${canonicalPath}`,
      siteName: "Ezequiel Gallardo",
      title: content.title,
      description: content.description,
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const selectedLocale = locale as Locale;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ezequiel Gallardo",
    url: `https://ezequielgallardo.dev/${selectedLocale}`,
    jobTitle: selectedLocale === "es" ? "Desarrollador Web" : "Web Developer",
    email: "contacto@ezequielgallardo.dev",
    sameAs: [
      "https://github.com/ezeGallardoo",
      "https://www.linkedin.com/in/ezequiel-gallardo-5a6162205?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PortfolioShell locale={selectedLocale} />
    </>
  );
}
