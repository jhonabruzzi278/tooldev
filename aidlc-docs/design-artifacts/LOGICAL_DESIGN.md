# Logical Design

> Traducción del Domain Model a patrones técnicos + NFRs. Todo extraído de archivos de configuración y código reales.

## Patterns Detectados en el Código

| Patrón | Dónde | Evidencia |
|--------|-------|-----------|
| **Islands Architecture** | Todo el sitio | Astro 6: HTML estático + islas React con `client:load` (FAQ, galería, formulario, chat, favoritos, toggles) |
| **Content-as-Code / Headless CMS embebido** | `src/content/` | Content Collections + Zod; el contenido vive en Git, se valida en build |
| **Static Site Generation (SSG)** | Build | 150 páginas pre-renderizadas; `prerender = false` solo en `/api/recommend` |
| **Serverless API (BFF ligero)** | `src/pages/api/recommend.ts` | Un único endpoint POST que actúa de backend-for-frontend hacia OpenAI, ocultando la API key |
| **Repository (read-only)** | `getCollection('tools')` | Abstracción de acceso a contenido |
| **Cache-in-module** | `cachedToolsContext` | Memoización del catálogo serializado en el worker serverless |
| **Rate Limiting (token bucket por ventana)** | `src/lib/security.ts` | Map en memoria IP → {count, resetAt}; 5 req/60s |
| **Strategy de theming** | CSS `light-dark()` + variables | Tema claro/oscuro sin JS de cambio de clases en la mayoría de componentes |
| **Generación de artefactos en prebuild** | `scripts/` | fetch-logos (descarga SVGs) + generate-skills (SKILL.md + registry.json) |
| **i18n por rutas duplicadas** | `src/pages/en/` | Estrategia de rutas estáticas paralelas + diccionario central tipado (`translations.ts`) |
| **Monorepo ligero (2 packages)** | `/` + `packages/tooldev-skills` | Sin workspaces de npm — paquete CLI independiente con versionado propio (1.0.0) |

**No presentes (decisión consciente o gap):** sin estado de servidor, sin base de datos, sin autenticación, sin event-driven, sin CQRS — coherentes con un directorio de contenido estático.

## Stack Tecnológico (detectado)

| Componente | Tecnología | Versión | Fuente |
|-----------|-----------|---------|--------|
| SSG / Framework | Astro | ^6.4.2 | package.json |
| UI interactiva | React | ^19.2.6 | package.json |
| Lenguaje | TypeScript | ^6.0.3 | package.json |
| Estilos | Tailwind CSS | ^4.2.4 (`@tailwindcss/vite`) | package.json |
| Componentes base | shadcn/ui + @base-ui/react | ^4.9.0 / ^1.5.0 | package.json, components.json |
| Animaciones | Motion (framer) | ^12.40.0 | package.json |
| Testing | Vitest + Testing Library | ^4.1.8 / ^16.3.2 | package.json, vitest.config.ts |
| Cobertura | v8 provider | configurado | vitest.config.ts |
| IA | openai SDK | ^6.41.0 | package.json |
| Hosting/Adapter | Vercel (`@astrojs/vercel`) | ^10.0.8 | package.json, astro.config.mjs |
| SEO | @astrojs/sitemap | ^3.7.3 | package.json |
| Iconos | astro-icon + @iconify (tabler) | ^1.1.5 | package.json |
| Tipografía | @fontsource-variable/inter | ^5.2.8 | package.json |
| Runtime | Node.js | >= 22.12.0 | package.json engines |

## Servicios Externos Detectados

| Servicio | Uso | Evidencia | Variables/config |
|----------|-----|-----------|------------------|
| **OpenAI API** | Chat recomendador | `src/pages/api/recommend.ts`, `.env.example` | `OPENAI_API_KEY`, `AI_API_URL` (default api.openai.com), `AI_MODEL=gpt-4o-mini` |
| **Formspree** | Formulario de contacto | CSP `form-action`/`connect-src` en vercel.json; ContactForm | endpoint en componente |
| **SVGL API** | Descarga de logos en prebuild | `src/lib/svgl.ts`, `scripts/fetch-logos.mjs`, CSP `img-src https://api.svgl.app` | — |
| **Vercel** | Hosting + serverless | `vercel.json`, `.vercel/`, adapter | site: `tool-dev-rust.vercel.app` |
| **npm registry** | Distribución del CLI | `packages/tooldev-skills/package.json` | `npx tooldev-skills` |

## NFRs → Implementación técnica

| NFR | Mecanismo real |
|-----|----------------|
| Performance | SSG puro; imágenes `loading="lazy"` + `decoding="async"`; build ~7s / 150 páginas |
| Seguridad transporte | HSTS preload, CSP estricta, X-Frame-Options DENY, nosniff, Permissions-Policy (vercel.json) |
| Seguridad aplicación | sanitización de input, rate limit, timeout, validación Content-Type (security.ts) |
| Accesibilidad | skip link `#main-content`, `aria-current`, `prefers-reduced-motion`, contraste WCAG AA (criterio en spec) |
| SEO | canonical, OG, Twitter Cards, JSON-LD Organization, sitemap, robots.txt |
| Confiabilidad del contenido | Validación Zod en build — un frontmatter inválido rompe el build (fail-fast) |
| Privacidad | Favoritos solo en localStorage del cliente; sin cuentas, sin tracking propio (y sin analytics — ver gaps) |
