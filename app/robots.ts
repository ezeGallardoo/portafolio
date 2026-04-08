import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://ezequielgallardo.dev/sitemap.xml",
    host: "https://ezequielgallardo.dev",
  };
}
