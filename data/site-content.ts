export type Locale = "es" | "en";

export type SiteContent = {
  brand: string;
  localeLabel: Locale;
  languageLabel: string;
  navigationLabel: string;
  connectLabel: string;
  navigation: Array<{ href: string; label: string }>;
  hero: {
    badge: string;
    title: [string, string, string];
    description: string;
    primaryCta: string;
    secondaryCta: string;
    secondaryHref?: string;
    status: {
      label: string;
      text: string;
      cta: string;
    };
  };
  process: {
    kicker: string;
    title: string;
    description: string;
    steps: Array<{ number: string; title: string; text: string }>;
  };
  skills: {
    title: string;
    description: string;
    cards: Array<{
      title: string;
      text: string;
      tags: string[];
      icon: string;
      featured: boolean;
    }>;
  };
  projects: {
    title: string;
    description: string;
    archiveCta: string;
    archiveHref: string;
    items: Array<{
      title: string;
      period: string;
      text: string;
      highlights: string[];
      tags: string[];
      note: string;
      href?: string;
      image?: {
        src: string;
        alt: string;
      };
    }>;
    statusBadge: string;
    statusTitle: string;
    statusText: string;
  };
  contact: {
    title: [string, string];
    description: string;
    links: Array<{
      label: string;
      href: string;
    }>;
    primaryCta: string;
    secondaryCta: string;
    email: string;
    secondaryHref?: string;
  };
  footer: {
    copy: string;
    links: Array<{
      label: string;
      href: string;
    }>;
  };
};

const currentYear = new Date().getFullYear();

export const siteContentByLocale: Record<Locale, SiteContent> = {
  es: {
    brand: "EZEQUIELGALLARDO.DEV",
    localeLabel: "es",
    languageLabel: "Selector de idioma",
    navigationLabel: "Navegación principal",
    connectLabel: "Conectar",
    navigation: [
      { href: "#home", label: "Inicio" },
      { href: "#projects", label: "Proyectos" },
      { href: "#process", label: "Proceso" },
      { href: "#skills", label: "Destreza técnica" },
      { href: "#contact", label: "Contacto" },
    ],
    hero: {
      badge: "Desarrollador web y estudiante de Ingeniería en Sistemas",
      title: ["Desarrollador web con", "visión de producto", "y base técnica sólida"],
      description:
        "Soy Ezequiel Gallardo, desarrollador web y estudiante de Ingeniería en Sistemas. Trabajo en interfaces claras, experiencias rápidas y código mantenible para proyectos que necesitan una base sólida para crecer.",
      primaryCta: "Hablemos del proyecto",
      secondaryCta: "Ver proyectos",
      secondaryHref: "#projects",
      status: {
        label: "LinkedIn",
        text: "Contacto directo para propuestas de trabajo y proyectos.",
        cta: "Abrir perfil",
      },
    },
    process: {
      kicker: "Metodología",
      title: "Mi Proceso de Trabajo",
      description:
        "Una forma de trabajo simple y ordenada para convertir una idea en un producto web claro, funcional y escalable.",
      steps: [
        {
          number: "01",
          title: "Descubrimiento",
          text: "Objetivos, contexto y qué hay que construir.",
        },
        {
          number: "02",
          title: "Estrategia",
          text: "Estructura, flujo, stack y prioridades.",
        },
        {
          number: "03",
          title: "Diseño y desarrollo",
          text: "Interfaces y componentes, en desktop y en mobile.",
        },
        {
          number: "04",
          title: "Optimización",
          text: "Rendimiento, accesibilidad y salida a producción.",
        },
      ],
    },
    skills: {
      title: "Destreza Técnica",
      description:
        "Trabajo con tecnologías enfocadas en crear interfaces rápidas, productos web escalables y experiencias frontend bien construidas.",
      cards: [
        {
          title: "React",
          text: "Desarrollo interfaces dinámicas con componentes reutilizables, estados bien organizados y una experiencia de usuario clara y fluida.",
          tags: ["Componentes", "UI", "Estado"],
          icon: "code",
          featured: false,
        },
        {
          title: "Next.js",
          text: "Construyo aplicaciones y sitios web con una estructura sólida, buen rendimiento y una base lista para crecer en producto.",
          tags: ["SSR", "Routing", "Performance"],
          icon: "terminal",
          featured: true,
        },
        {
          title: "CSS",
          text: "Diseño layouts responsive, sistemas visuales consistentes y detalles de interfaz que mejoran la claridad y la calidad del producto.",
          tags: ["Responsive", "Tailwind", "Layout"],
          icon: "layers",
          featured: false,
        },
      ],
    },
    projects: {
      title: "Últimos Proyectos",
      description:
        "Una selección de proyectos full stack con foco en producto, datos bien modelados y código testeado.",
      archiveCta: "Ver GitHub",
      archiveHref: "https://github.com/ezeGallardoo",
      items: [
        {
          title: "Finza — Finanzas personales",
          period: "2025 – 2026",
          text: "Aplicación multiusuario para registrar ingresos y gastos, administrar cuentas, presupuestos por categoría y metas de ahorro.",
          highlights: [
            "API REST con Route Handlers de Next.js y Prisma sobre PostgreSQL.",
            "Contraseñas cifradas con bcrypt y migraciones automáticas con Prisma.",
            "Dashboard de analítica y tests de la API con Vitest.",
          ],
          tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Vitest"],
          note: "Código privado · disponible a pedido",
        },
        {
          title: "GeoRadar — Demanda comercial",
          period: "En desarrollo",
          text: "Mesa de catastro para Villa María y Villa Nueva. Cruza comercios, el censo 2022, el valor de suelo de IDECOR y la Central de Deudores del BCRA para marcar dónde hay demanda sin local.",
          highlights: [
            "PostgreSQL con PostGIS. La lógica espacial vive en SQL.",
            "Visor con MapLibre GL y deck.gl sobre una grilla de 400 m.",
            "El consumo potencial sale de un modelo de Huff. La ficha aclara que no es facturación.",
          ],
          tags: ["Next.js", "PostGIS", "MapLibre", "deck.gl", "Python"],
          note: "En desarrollo · código público en GitHub",
          href: "https://github.com/ezeGallardoo/geoecon-vm",
          image: {
            src: "/images/projects/georadar-map.svg",
            alt: "",
          },
        },
        {
          title: "Canasta VM — Precios de góndola",
          period: "2026",
          text: "Buscás un producto y ves el precio de lista en cada supermercado de Villa María y Villa Nueva que lo publicó en Precios Claros. La canasta suma solo las sucursales que tienen todos los ítems.",
          highlights: [
            "Lee la API pública de Precios Claros, el catálogo diario del sistema SEPA.",
            "Deja las sucursales de Villa María y Villa Nueva.",
            "Una sucursal entra al total cuando publicó precio para cada producto.",
          ],
          tags: ["JavaScript", "Precios Claros", "SEPA"],
          note: "Código público en GitHub",
          href: "https://github.com/ezeGallardoo/canasta-vm",
          image: {
            src: "/images/projects/canasta.svg",
            alt: "",
          },
        },
      ],
      statusBadge: "En preparación",
      statusTitle: "Más proyectos próximamente",
      statusText:
        "Estoy documentando más proyectos. Mientras tanto, podés revisar mi GitHub o escribirme si querés ver código o ejemplos más cercanos a tu necesidad.",
    },
    contact: {
      title: ["Construyamos", "algo sólido"],
      description:
        "Si estás buscando un desarrollador web para crear o mejorar un producto digital, podemos hablar sobre objetivos, alcance y próximos pasos.",
      links: [
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/ezequiel-gallardo-5a6162205",
        },
        { label: "GitHub", href: "https://github.com/ezeGallardoo" },
      ],
      primaryCta: "Enviar mensaje",
      secondaryCta: "Descargar CV",
      email: "mailto:contacto@ezequielgallardo.dev",
      secondaryHref: "/cv/ezequiel-gallardo-cv-es.pdf",
    },
    footer: {
      copy: `© ${currentYear} EZEQUIEL GALLARDO. TODOS LOS DERECHOS RESERVADOS.`,
      links: [
        { label: "GitHub", href: "https://github.com/ezeGallardoo" },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/ezequiel-gallardo-5a6162205",
        },
        { label: "contacto@ezequielgallardo.dev", href: "mailto:contacto@ezequielgallardo.dev" },
      ],
    },
  },
  en: {
    brand: "EZEQUIELGALLARDO.DEV",
    localeLabel: "en",
    languageLabel: "Language switcher",
    navigationLabel: "Main navigation",
    connectLabel: "Connect",
    navigation: [
      { href: "#home", label: "Home" },
      { href: "#projects", label: "Projects" },
      { href: "#process", label: "Process" },
      { href: "#skills", label: "Technical skills" },
      { href: "#contact", label: "Contact" },
    ],
    hero: {
      badge: "Web developer and Systems Engineering student",
      title: ["Web developer with", "product vision", "and a strong technical foundation"],
      description:
        "I'm Ezequiel Gallardo, a web developer and Systems Engineering student. I focus on clear interfaces, fast experiences, and maintainable code for projects that need a solid foundation to grow.",
      primaryCta: "Let's talk",
      secondaryCta: "View projects",
      secondaryHref: "#projects",
      status: {
        label: "LinkedIn",
        text: "Direct contact for job opportunities and projects.",
        cta: "Open profile",
      },
    },
    process: {
      kicker: "Methodology",
      title: "My Work Process",
      description:
        "A simple and structured way to turn an idea into a clear, functional, and scalable web product.",
      steps: [
        {
          number: "01",
          title: "Discovery",
          text: "Goals, context, and what has to be built.",
        },
        {
          number: "02",
          title: "Strategy",
          text: "Structure, flow, stack, and priorities.",
        },
        {
          number: "03",
          title: "Design and build",
          text: "Interfaces and components, on desktop and mobile.",
        },
        {
          number: "04",
          title: "Optimization",
          text: "Performance, accessibility, and a production release.",
        },
      ],
    },
    skills: {
      title: "Technical Skills",
      description:
        "I work with technologies focused on building fast interfaces, scalable web products, and well-crafted frontend experiences.",
      cards: [
        {
          title: "React",
          text: "I build dynamic interfaces with reusable components, well-structured state, and a clear, smooth user experience.",
          tags: ["Components", "UI", "State"],
          icon: "code",
          featured: false,
        },
        {
          title: "Next.js",
          text: "I develop web apps and websites with solid structure, strong performance, and a foundation that can scale with the product.",
          tags: ["SSR", "Routing", "Performance"],
          icon: "terminal",
          featured: true,
        },
        {
          title: "CSS",
          text: "I design responsive layouts, consistent visual systems, and interface details that improve clarity and overall product quality.",
          tags: ["Responsive", "Tailwind", "Layout"],
          icon: "layers",
          featured: false,
        },
      ],
    },
    projects: {
      title: "Latest Projects",
      description:
        "A selection of full stack projects focused on product, well-modeled data, and tested code.",
      archiveCta: "View GitHub",
      archiveHref: "https://github.com/ezeGallardoo",
      items: [
        {
          title: "Finza — Personal finance",
          period: "2025 – 2026",
          text: "Multi-user app to track income and expenses, manage accounts, category budgets, and savings goals.",
          highlights: [
            "REST API built with Next.js Route Handlers and Prisma on PostgreSQL.",
            "bcrypt-hashed passwords and automatic Prisma migrations.",
            "Analytics dashboard and API tests with Vitest.",
          ],
          tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Vitest"],
          note: "Private code · available on request",
        },
        {
          title: "GeoRadar — Commercial demand",
          period: "In development",
          text: "A commercial cadastre desk for Villa María and Villa Nueva. It crosses businesses, the 2022 census, IDECOR land values, and the BCRA debtor registry to mark where demand has no store.",
          highlights: [
            "PostgreSQL with PostGIS. The spatial logic lives in SQL.",
            "A MapLibre GL and deck.gl viewer over a 400 m grid.",
            "Potential consumption comes from a Huff model. The card states it is not revenue.",
          ],
          tags: ["Next.js", "PostGIS", "MapLibre", "deck.gl", "Python"],
          note: "In development · public code on GitHub",
          href: "https://github.com/ezeGallardoo/geoecon-vm",
          image: {
            src: "/images/projects/georadar-map.svg",
            alt: "",
          },
        },
        {
          title: "Canasta VM — Shelf prices",
          period: "2026",
          text: "Search for a product and see the list price at each Villa María and Villa Nueva supermarket that published it on Precios Claros. The basket total includes only stores that carry every item.",
          highlights: [
            "It reads the public Precios Claros API, the daily SEPA catalog.",
            "It keeps stores in Villa María and Villa Nueva.",
            "A store joins the total when it published a price for every product.",
          ],
          tags: ["JavaScript", "Precios Claros", "SEPA"],
          note: "Public code on GitHub",
          href: "https://github.com/ezeGallardoo/canasta-vm",
          image: {
            src: "/images/projects/canasta.svg",
            alt: "",
          },
        },
      ],
      statusBadge: "In progress",
      statusTitle: "More projects coming soon",
      statusText:
        "I'm documenting more projects. In the meantime, you can check my GitHub or contact me if you want to review code or examples closer to your needs.",
    },
    contact: {
      title: ["Let's build", "something solid"],
      description:
        "If you're looking for a web developer to build or improve a digital product, we can talk about goals, scope, and next steps.",
      links: [
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/ezequiel-gallardo-5a6162205",
        },
        { label: "GitHub", href: "https://github.com/ezeGallardoo" },
      ],
      primaryCta: "Send message",
      secondaryCta: "Download resume",
      email: "mailto:contacto@ezequielgallardo.dev",
      secondaryHref: "/cv/ezequiel-gallardo-cv-en.pdf",
    },
    footer: {
      copy: `© ${currentYear} EZEQUIEL GALLARDO. ALL RIGHTS RESERVED.`,
      links: [
        { label: "GitHub", href: "https://github.com/ezeGallardoo" },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/ezequiel-gallardo-5a6162205",
        },
        { label: "contacto@ezequielgallardo.dev", href: "mailto:contacto@ezequielgallardo.dev" },
      ],
    },
  },
};
