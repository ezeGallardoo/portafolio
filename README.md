# Portafolio

Portafolio personal desarrollado con Next.js 15, React 19 y TypeScript.

El proyecto está armado como una landing single-page con soporte en español e inglés, contenido centralizado y assets locales para imagen de perfil y proyectos de ejemplo.

## Stack

- Next.js 15
- React 19
- TypeScript
- CSS global custom

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
  globals.css
  layout.tsx
  page.tsx

components/
  portfolio-shell.tsx

data/
  site-content.ts

public/
  images/
    profile/
      perfil.png
    projects/
      admin-dashboard.svg
      service-landing.svg
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
- contenido en español e inglés

### UI y layout

La estructura principal de la página está en:

- `components/portfolio-shell.tsx`

Los estilos globales están en:

- `app/globals.css`

### Imágenes

La foto de perfil está en:

- `public/images/profile/perfil.png`

Las imágenes de proyectos están en:

- `public/images/projects/`

## Notas

- El botón `Descargar CV` actualmente se muestra, pero no ejecuta ninguna acción.
- El correo visible y de contacto actual es `contacto@ezequielgallardo.dev`.
- El portfolio usa assets locales para evitar dependencias externas innecesarias.
