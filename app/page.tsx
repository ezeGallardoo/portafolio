import { PortfolioShell } from "@/components/portfolio-shell";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ezequiel Gallardo",
    url: "https://ezequielgallardo.dev",
    jobTitle: "Desarrollador Web",
    email: "contacto@ezequielgallardo.dev",
    sameAs: [
      "https://github.com/ezeGallardoo",
      "https://www.linkedin.com/in/ezequiel-gallardo-5a6162205?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Ingeniería en Sistemas",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PortfolioShell />
    </>
  );
}
