import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ezequielgallardo.dev";
  const lastModified = new Date();
  const languages = {
    es: `${baseUrl}/es`,
    en: `${baseUrl}/en`,
    "x-default": `${baseUrl}/es`,
  };

  return [
    {
      url: `${baseUrl}/es`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages },
    },
  ];
}
