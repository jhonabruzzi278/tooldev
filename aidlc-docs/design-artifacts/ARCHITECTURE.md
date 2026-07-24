# Architecture Overview

## Estructura del Proyecto (árbol real, anotado)

```
ToolDev/
├── src/
│   ├── content.config.ts      # Schema Zod del agregado Tool (fuente de verdad del dominio)
│   ├── content/tools/         # 102 herramientas en markdown (el "datos" del sitio)
│   ├── pages/                 # Rutas ES: index, about, agents, contact, favorites, skills
│   │   ├── api/recommend.ts   # ÚNICO endpoint serverless (POST chat IA)
│   │   ├── categories/        # Listados por categoría
│   │   ├── tools/[slug]       # Detalle de herramienta (rutas dinámicas SSG)
│   │   └── en/                # Réplica de rutas en inglés
│   ├── components/            # 109 archivos de componentes
│   │   ├── home/              # Hero, CategoryGrid, ToolShowcase, Benefits
│   │   ├── layout/            # Header, Footer, ThemeToggle, MobileMenu, LanguageSwitcher
│   │   ├── logos/             # 62 logos SVG como componentes Astro
│   │   ├── pages/             # Layouts de página (About, Contact, Categories, Tools)
│   │   ├── shared/            # ContactForm, SEOHead
│   │   ├── tools/             # ToolCard, ToolLogo, AnimatedFAQ, ScreenshotGallery, Share…
│   │   └── ui/                # shadcn/ui + HeroReveal, AnimateOnScroll
│   ├── layouts/               # BaseLayout
│   ├── lib/                   # categories, favorites, licenses, security, svgl, utils
│   │   └── i18n/              # translations.ts (diccionario ES/EN tipado)
│   ├── styles/                # global.css (Tailwind v4 + light-dark())
│   └── __tests__/             # unit/ integration/ components/ (15 archivos, 110 tests)
├── packages/tooldev-skills/   # CLI npm independiente (bin + skills generados + registry.json)
├── scripts/                   # fetch-logos.mjs + generate-skills.mjs (prebuild)
├── public/                    # icons, logos, screenshots, robots.txt
├── .kiro/                     # specs por feature (requirements/design/tasks) + steering docs
├── astro.config.mjs           # site, adapter Vercel, integraciones
├── vercel.json                # build config + security headers (CSP, HSTS…)
└── vitest.config.ts           # jsdom, coverage v8
```

## Tech Stack por capa

| Layer | Tech | Justificación (inferida del código/commits) | Fuente |
|-------|------|----------------------------------------------|--------|
| Presentación | Astro 6 SSG + islas React 19 | SEO + performance de sitio estático con interactividad puntual | astro.config, componentes `client:load` |
| Contenido | Markdown + Content Collections + Zod | Escalar a nuevas herramientas sin tocar código; validación fail-fast en build | README "Arquitectura por páginas" |
| Estilos | Tailwind v4 + shadcn/ui + `light-dark()` | Theming dual nativo CSS sin runtime JS de tema | global.css, commits de dark mode |
| API | 1 route serverless Vercel | Ocultar OPENAI_API_KEY; rate limiting propio | recommend.ts, security.ts |
| Distribución skills | Paquete npm CLI | Canal `npx` nativo del ecosistema dev | packages/tooldev-skills |
| Hosting | Vercel | Deploy desde Git + serverless integrado | vercel.json, adapter |

## Decisiones Arquitectónicas Detectadas

1. **Monolito estático + 1 función serverless** — no microservicios. El 99% del sitio es pre-renderizado; solo el chat necesita servidor. → ADR-001
2. **Contenido en Git, no en CMS/DB** — el catálogo es código; las "migraciones" son commits; la validación es el schema Zod en build. → ADR-002
3. **i18n por duplicación de rutas + diccionario central** (no librería de i18n en runtime). → ADR-003
4. **Seguridad aplicada en dos niveles**: headers HTTP declarativos (vercel.json) + políticas en código (security.ts). → ADR-004
5. **CLI como paquete separado** en `packages/` con su propio versionado, desacoplado del sitio. → ADR-005
6. **Sin base de datos ni backend propio** — servicios externos puntuales (OpenAI, Formspree) tras una fachada mínima.

## Flujo de build y deploy (real)

```
git push ──► Vercel (integración Git, inferida ⚠️)
               │
               ├─ prebuild: fetch-logos.mjs (SVGs → src/components/logos + public/logos)
               │            generate-skills.mjs (tools verified → packages/.../skills + registry.json)
               ├─ astro build ──► dist/ (~150 páginas estáticas, ~7s)
               └─ /api/recommend ──► función serverless (Node 22)
```

## Riesgos arquitectónicos

- **Sin CI gate:** Vercel despliega el push directamente; el test roto actual (frontmatter) pudo llegar a producción.
- **Acoplamiento suave a Vercel:** adapter + vercel.json; migrable gracias a Astro pero no trivial (headers CSP habría que reimplementarlos).
- **Rate limit en memoria del serverless:** se resetea entre cold starts/instancias — efectivo como freno básico, no como protección robusta.
- **Contenido sin frontmatter (37 tools):** riesgo inmediato de build roto o páginas faltantes.
