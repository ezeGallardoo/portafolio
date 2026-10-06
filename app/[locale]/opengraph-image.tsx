import { ImageResponse } from "next/og";

import { siteContentByLocale, type Locale } from "@/data/site-content";

export const alt = "Ezequiel Gallardo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }];
}

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const { brand, hero } = siteContentByLocale[locale];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#0b0d10",
          backgroundImage: "radial-gradient(circle at 85% 15%, rgba(124,255,107,0.22), transparent 45%)",
          color: "#f3f7fb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 4, color: "#7cff6b" }}>{brand}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>
            Ezequiel Gallardo
          </div>
          <div style={{ display: "flex", fontSize: 36, color: "#9ca8b5", maxWidth: 980 }}>
            {`${hero.title[0]} ${hero.title[1]}`}
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 26, color: "#5ee6ff" }}>
          Next.js · React · TypeScript · PostgreSQL · Python
        </div>
      </div>
    ),
    size,
  );
}
