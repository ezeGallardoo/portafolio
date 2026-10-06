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
      { href: "#process", label: "Proceso" },
      { href: "#skills", label: "Destreza técnica" },
      { href: "#projects", label: "Proyectos" },
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
          text: "Reviso objetivos, contexto del proyecto y necesidades técnicas para entender qué se va a construir y por qué.",
        },
        {
          number: "02",
          title: "Estrategia",
          text: "Defino estructura, flujo, stack y prioridades para que el desarrollo tenga dirección desde el inicio.",
        },
        {
          number: "03",
          title: "Diseño y desarrollo",
          text: "Construyo interfaces consistentes, componentes reutilizables y una experiencia cuidada tanto en desktop como en mobile.",
        },
        {
          number: "04",
          title: "Optimización",
          text: "Ajusto rendimiento, accesibilidad y detalles finales para entregar una web lista para salir a producción.",
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
            "Datos aislados por usuario y contraseñas cifradas con bcrypt.",
            "Dashboard de analítica y tests de la API con Vitest.",
          ],
          tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Vitest"],
          note: "Código privado · disponible a pedido",
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
          href: "https://www.linkedin.com/in/ezequiel-gallardo-5a6162205?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
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
          href: "https://www.linkedin.com/in/ezequiel-gallardo-5a6162205?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
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
      { href: "#process", label: "Process" },
      { href: "#skills", label: "Technical skills" },
      { href: "#projects", label: "Projects" },
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
          text: "I review goals, context, and technical needs to understand what has to be built and why.",
        },
        {
          number: "02",
          title: "Strategy",
          text: "I define structure, user flow, stack, and priorities so development starts with a clear direction.",
        },
        {
          number: "03",
          title: "Design and build",
          text: "I craft consistent interfaces, reusable components, and a polished experience across desktop and mobile.",
        },
        {
          number: "04",
          title: "Optimization",
          text: "I refine performance, accessibility, and final details so the product is ready for production.",
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
            "Per-user data isolation and bcrypt-hashed passwords.",
            "Analytics dashboard and API tests with Vitest.",
          ],
          tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Vitest"],
          note: "Private code · available on request",
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
          href: "https://www.linkedin.com/in/ezequiel-gallardo-5a6162205?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
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
          href: "https://www.linkedin.com/in/ezequiel-gallardo-5a6162205?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        },
        { label: "contacto@ezequielgallardo.dev", href: "mailto:contacto@ezequielgallardo.dev" },
      ],
    },
  },
};
