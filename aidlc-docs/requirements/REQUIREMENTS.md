# Requirements

> **Fuentes:** reconstruido retroactivamente desde features implementadas en el código, commits de git, specs de Kiro (`.kiro/specs/`) y README. Cada requisito referencia su evidencia real.

## Functional Requirements

### Catálogo de herramientas (core)

| ID | Requisito | Estado | Evidencia |
|----|-----------|--------|-----------|
| FR-01 | Catalogar herramientas como contenido markdown con schema tipado (nombre, descripción, categoría, tags, pricing, nivel técnico, features, alternativas, FAQ, screenshots, cuándo usar, ejemplos, tips) | ✅ Implementado | `src/content.config.ts` (schema Zod), 102 archivos en `src/content/tools/` |
| FR-02 | Organizar herramientas en 7 categorías: frontend, backend, devops, ia, diseno, productividad, agentes | ✅ Implementado | `src/lib/categories.ts` |
| FR-03 | Página de detalle por herramienta con galería de capturas, FAQ animado, botones de compartir, herramientas relacionadas | ✅ Implementado | `src/pages/tools/[slug].astro`, `src/components/tools/` |
| FR-04 | Listado y filtrado por categoría | ✅ Implementado | `src/pages/categories/`, `src/components/pages/` |
| FR-05 | Badge de "verificado" para herramientas curadas | ✅ Implementado | Campo `verified` en schema, commits `aa44da6`, `verified-badge.test.ts` |
| FR-06 | Búsqueda/showcase de herramientas en home | ✅ Implementado | `src/components/home/ToolShowcase*` |

### Internacionalización

| ID | Requisito | Estado | Evidencia |
|----|-----------|--------|-----------|
| FR-07 | Contenido bilingüe ES/EN con rutas internacionalizadas (`/tools/`, `/en/tools/`) | ✅ Implementado | `src/pages/en/`, `src/lib/i18n/translations.ts` |
| FR-08 | Selector de idioma en el layout | ✅ Implementado | `src/components/layout/LanguageSwitcher*` |

### Chat IA recomendador

| ID | Requisito | Estado | Evidencia |
|----|-----------|--------|-----------|
| FR-09 | Chat asistente que recomienda herramientas del catálogo usando OpenAI | ✅ Implementado | `src/components/ChatIA*`, `src/pages/api/recommend.ts` |
| FR-10 | Seguridad del endpoint: rate limit por IP (5/min), sanitización de input, límite 500 chars, timeout 15s, validación de Content-Type | ✅ Implementado | `src/lib/security.ts`, commit `9546e42`, `security.test.ts` |

### CLI de skills

| ID | Requisito | Estado | Evidencia |
|----|-----------|--------|-----------|
| FR-11 | Paquete npm `tooldev-skills` que instala archivos de skill (formato SKILL.md) de herramientas verificadas en el proyecto del usuario | ✅ Implementado v1.0.0 | `packages/tooldev-skills/`, `cli-package.test.ts` |
| FR-12 | Generación automática de skills + `registry.json` en prebuild desde tools verificadas | ✅ Implementado | `scripts/generate-skills.mjs`, `package.json` script `prebuild` |

### UX

| ID | Requisito | Estado | Evidencia |
|----|-----------|--------|-----------|
| FR-13 | Modo oscuro/claro con `light-dark()` y toggle (ciclo sol/luna/sistema) | ✅ Implementado | commits `47ae492`, `dfc87f7`, `ThemeToggle` |
| FR-14 | Sistema de favoritos persistente en localStorage | ✅ Implementado | `src/lib/favorites.ts`, `src/pages/favorites.astro`, spec `.kiro/specs/localstorage-favorites/` |
| FR-15 | Formulario de contacto vía Formspree | ✅ Implementado | `src/components/shared/ContactForm*` |
| FR-16 | Logos SVG locales de herramientas (descargados en prebuild, con fallback) | ✅ Implementado | `scripts/fetch-logos.mjs`, `src/components/logos/` (62 componentes) |
| FR-17 | Animaciones con respeto a `prefers-reduced-motion` | ✅ Implementado | `motion`, `AnimateOnScroll`, `HeroReveal` |

## Non-Functional Requirements

| ID | Requisito | Estado | Evidencia |
|----|-----------|--------|-----------|
| NFR-01 | Sitio 100% estático pre-renderizado (sin JS de servidor salvo 1 endpoint) | ✅ | `astro.config.mjs` + adapter Vercel; `prerender = false` solo en `/api/recommend` |
| NFR-02 | SEO: canonical, Open Graph, Twitter Cards, JSON-LD, sitemap, robots.txt | ✅ | `SEOHead`, `@astrojs/sitemap`, `public/robots.txt` |
| NFR-03 | Accesibilidad: skip link, aria-current, prefers-reduced-motion, navegación por teclado | ✅ | README + componentes layout |
| NFR-04 | Security headers: CSP, HSTS, X-Frame-Options DENY, nosniff, Referrer-Policy, Permissions-Policy | ✅ | `vercel.json`, test `vercel-headers.test.ts` |
| NFR-05 | Performance: imágenes lazy (`loading="lazy"`, `decoding="async"`), build ~7s | ✅ | README (build medido), componentes |
| NFR-06 | Secrets fuera del repo | ✅ | `.env` no trackeado (verificado: solo `.env.example` en git) |
| NFR-07 | Tests automatizados con Vitest (unit, integración, componentes) | ⚠️ Parcial | 110 tests, **1 fallando** (frontmatter faltante en ~37 tools nuevas — ver testing/) |
| NFR-08 | CI/CD automatizado | ❌ Falta | No existe `.github/workflows` ni `.gitlab-ci.yml`; deploy depende de integración Git de Vercel (inferido, ⚠️ validar) |
| NFR-09 | Monitoring/alerting en producción | ❌ Falta | Sin configs de monitoring en el repo |

## Riesgos y Constraints conocidos

- **R-01:** 1 test de integración roto indica que ~37 herramientas nuevas (slack, storybook, supabase, svelte, tailwind-css, tensorflow, terraform, trpc, vscode, vite, vue, zod, etc.) carecen de frontmatter válido → **el build de contenido tipado puede fallar o esas páginas no se generan**. Prioridad alta.
- **R-02:** Dependencia de OpenAI API sin fallback — si la key expira o se agota el rate limit de OpenAI, el chat deja de funcionar (el sitio estático sigue OK).
- **R-03:** Contenido de 102 herramientas mantenido manualmente — riesgo de desactualización.
- **R-04:** Sin CI → los tests rotos pueden llegar a producción (Vercel despliega en push sin gate de tests). ⚠️ Validar si Vercel tiene checks configurados fuera del repo.
- **R-05:** Sin analytics → imposible medir objetivos de negocio actualmente.
