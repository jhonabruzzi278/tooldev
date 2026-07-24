# Acceptance Criteria

> Los criterios de aceptación **formales y completos en formato EARS** viven en los specs de Kiro (fuente de verdad):
> - `.kiro/specs/localstorage-favorites/requirements.md` (4 requisitos, 14 criterios)
> - `.kiro/specs/verified-toggle-npx-installer/requirements.md` (badge verificado + i18n + CLI)
>
> Este documento resume los criterios verificables y mapea cada uno a su test automatizado donde existe.

## US-01 · Favoritos (extracto del spec Kiro)

| # | Criterio (EARS) | Verificación |
|---|-----------------|--------------|
| 1.1 | CUANDO FavoritesList se monta, DEBE leer el array de IDs del Favorites_Store (`localStorage.tooldev-favorites`) | Código `src/lib/favorites.ts` |
| 1.2 | CUANDO el store tiene IDs válidos, DEBE mostrar un Compact_List_Item por cada ID presente en store ∩ catálogo | Código + revisión manual |
| 1.3 | CUANDO el store está vacío, DEBE mostrar Empty_State | Código |
| 1.4 | SI el store contiene un ID inexistente en el catálogo, DEBE omitirlo sin error | Código |
| 3.2 | CUANDO el usuario quita un favorito, DEBE desaparecer inmediatamente SIN diálogo de confirmación | Código |
| 2.3 | El nombre de la herramienta DEBE tener contraste WCAG AA | ⚠️ Sin test automatizado de contraste |

## US-02 · Badge verificado + CLI (extracto del spec Kiro)

| # | Criterio (EARS) | Verificación |
|---|-----------------|--------------|
| 1.1–1.4 | Content_Schema incluye `verified: boolean` default `false`; parsea correctamente true/false/omiso | ✅ `verified-tools.test.tsx` (pasando) |
| 1.5 | SI `verified` tiene valor no-booleano, el schema DEBE rechazar el archivo con error de validación | ✅ Cubierto por Zod + test |
| 2.1 | Traducciones incluyen clave `tools.verified` en `es` y `en` | ✅ `translations.test.ts` (pasando) |
| 3.x | CLI instala skill files y lee `registry.json` | ✅ `cli-package.test.ts` (pasando) |

## US-03 · Chat IA (reconstruidos — sin spec formal)

| # | Criterio | Verificación |
|---|----------|--------------|
| 3.1 | POST con Content-Type no-JSON → 415 | ✅ `security.test.ts` |
| 3.2 | Más de 5 req/min desde una IP → 429 con `Retry-After: 60` | ✅ `security.test.ts` |
| 3.3 | Body sin `message` string → 400 | ✅ `security.test.ts` |
| 3.4 | Input sanitizado: sin HTML, sin caracteres de control, ≤ 500 chars | ✅ `security.test.ts` |
| 3.5 | Timeout a OpenAI a los 15s → respuesta de error controlada | Código `OPENAI_TIMEOUT_MS` |

## Criterios transversales (NFR)

| # | Criterio | Verificación |
|---|----------|--------------|
| X-01 | Todas las tools del catálogo tienen frontmatter válido según el schema | ❌ **`tools.test.ts` FALLANDO** — ~37 tools nuevas sin frontmatter (slack, storybook, supabase, svelte, tailwind-css, tensorflow, terraform, trpc, visual-studio-code, vite, vue, zod, …) |
| X-02 | Headers de seguridad presentes en `vercel.json` (CSP, HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy) | ✅ `vercel-headers.test.ts` |
| X-03 | Traducciones completas y tipadas en ambos locales | ✅ `translations.test.ts` |
| X-04 | Home renderiza secciones clave | ✅ `home.test.ts` |
| X-05 | Categorías consistentes entre `categories.ts` y enum del schema | ✅ `categories.test.ts` |
| X-06 | Componentes de UI (FAQ, AnimateOnScroll, ChatIA, ContactForm, ShareButtons) renderizan correctamente | ✅ 5 test files de componentes |

## Criterios sin cobertura automatizada (gaps)

- Contraste WCAG AA verificado automáticamente (hoy es manual).
- Paridad de contenido ES/EN por herramienta (no hay test que verifique que cada tool tenga contenido en ambos idiomas).
- Build e2e: no hay test que verifique que `astro build` genera las 150 páginas esperadas.
- Comportamiento real del chat contra la API de OpenAI (los tests mockean; no hay contrato de integración).
