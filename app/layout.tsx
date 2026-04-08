import type { Metadata, Viewport } from "next";
import { Inter, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const labelFont = Inter({
  variable: "--font-label",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ezequielgallardo.dev"),
  title: {
    default: "Ezequiel Gallardo | Desarrollador Web",
    template: "%s | Ezequiel Gallardo",
  },
  description:
    "Portafolio de Ezequiel Gallardo, desarrollador web y estudiante de Ingeniería en Sistemas. Interfaces claras, experiencias rápidas y productos web con base técnica sólida.",
  applicationName: "Ezequiel Gallardo Portfolio",
  authors: [{ name: "Ezequiel Gallardo", url: "https://ezequielgallardo.dev" }],
  creator: "Ezequiel Gallardo",
  publisher: "Ezequiel Gallardo",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Ezequiel Gallardo",
    "desarrollador web",
    "frontend developer",
    "Next.js portfolio",
    "React developer",
    "portfolio web",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://ezequielgallardo.dev",
    siteName: "Ezequiel Gallardo",
    title: "Ezequiel Gallardo | Desarrollador Web",
    description:
      "Portafolio de Ezequiel Gallardo, desarrollador web y estudiante de Ingeniería en Sistemas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezequiel Gallardo | Desarrollador Web",
    description:
      "Portafolio de Ezequiel Gallardo, desarrollador web y estudiante de Ingeniería en Sistemas.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f0f0f",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className={`${displayFont.variable} ${bodyFont.variable} ${labelFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
