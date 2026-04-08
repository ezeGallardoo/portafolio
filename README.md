# Portafolio

Portafolio personal desarrollado con Next.js 15, React 19 y TypeScript.

El proyecto está armado como una landing single-page con soporte en español e inglés mediante rutas por idioma, contenido centralizado, animaciones de reveal al hacer scroll y assets locales para foto de perfil.

## Stack

- Next.js 15
- React 19
- TypeScript
- CSS global custom
- `next/image` para imágenes optimizadas

## Scripts

```bash
npm install
npm run dev
```

Scripts disponibles:

- `npm run dev`: inicia el entorno local
- `npm run build`: genera la build de producción
- `npm run start`: levanta la build generada
- `npm run lint`: ejecuta lint si se configura en el proyecto

## Estructura

```text
app/
  [locale]/
    page.tsx
  globals.css
  layout.tsx
  loading.tsx
  page.tsx
  robots.ts
  sitemap.ts

components/
  portfolio-shell.tsx

data/
  site-content.ts

public/
  favicon.svg
  images/
    profile/
      perfil.png
```

## Dónde editar

### Contenido

El contenido principal del portfolio está en:

- `data/site-content.ts`

Ahí se editan:

- textos del hero
- navegación
- sección `Mi Proceso de Trabajo`
- `Destreza Técnica`
- proyectos
- contacto
- footer
- contenido en español e inglés

### UI y layout

La estructura principal de la página está en:

- `components/portfolio-shell.tsx`

Los estilos globales están en:

- `app/globals.css`

### SEO y metadata

La metadata principal del sitio está en:

- `app/layout.tsx`

La metadata localizada por idioma y el JSON-LD estructurado están en:

- `app/[locale]/page.tsx`

Los archivos SEO técnicos están en:

- `app/robots.ts`
- `app/sitemap.ts`

### Imágenes

La foto de perfil está en:

- `public/images/profile/perfil.png`

El favicon está en:

- `public/favicon.svg`

## Características actuales

- landing responsive
- rutas por idioma: `/es` y `/en`
- selector de idioma `ES / EN`
- header móvil con menú colapsable
- animaciones de reveal al hacer scroll
- SEO base con metadata, Open Graph, Twitter y JSON-LD
- `robots.txt` y `sitemap.xml`
- imágenes optimizadas con `next/image`
- pantalla de carga inicial en `app/loading.tsx`

## Notas

- El CTA secundario de contacto muestra `CV próximamente` porque todavía no hay un archivo real para enlazar.
- La sección de proyectos está en estado `próximamente` con un bloque visual en lugar de proyectos de ejemplo.
- El correo visible y de contacto actual es `contacto@ezequielgallardo.dev`.
- El portfolio usa assets locales para evitar dependencias externas innecesarias.
