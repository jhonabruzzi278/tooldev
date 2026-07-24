# Test Coverage Report

**Fecha de medición:** 2026-07-23 (actualizado — auditoría original 2026-07-20)

## Cobertura de líneas/ramas (medido — `@vitest/coverage-v8` instalado 2026-07-23)

```
$ npm run test:coverage
Statements   : 49.89% ( 231/463 )
Branches     : 36.33% ( 117/322 )
Functions    : 35.41% ( 51/144 )
Lines        : 52.42% ( 216/412 )
```

Umbral configurado en `vitest.config.ts` (`coverage.thresholds`) y verificado en CI (`.github/workflows/test.yml`):

| Métrica | Umbral CI | Real actual |
|---------|-----------|-------------|
| Statements | 45% | 49.89% |
| Branches | 30% | 36.33% |
| Functions | 30% | 35.41% |
| Lines | 48% | 52.42% |

⚠️ **No es el 80% de la política estándar del equipo.** El umbral se fijó ligeramente por debajo de lo medido (piso anti-regresión), no en el objetivo. Subir a 80% requiere testear los componentes UI listados abajo — trabajo pendiente, no ejecutado en esta sesión para no bloquear otras tareas solicitadas (CI, commit, revisión de frontend).

## Cobertura por archivo (áreas en 0%, principal gap real)

| Área | Cobertura | Nota |
|------|-----------|------|
| `src/components/layout/*` (LanguageSwitcher, MobileMenu, ThemeToggle) | 0% | Sin tests |
| `src/components/tools/ShareButton`, `FavoritesList`, `LicenseToggle`, `InstallBadge`, `ScreenshotGallery` | 0% | Sin tests |
| `src/components/ui/*` (badge, dialog, separator, tooltip, HeroReveal, StaggerReveal) | 0–18% | shadcn/ui, sin tests directos |
| `src/lib/svgl.ts` | 12.9% | Parcial — solo `getSVGUrl` cubierto |
| `src/lib/i18n/utils.ts` | 0% | Sin tests (no confundir con `src/lib/utils.ts`, cubierto) |
| `src/content.config.ts` | 0% | Schema Zod — sin test dedicado (validado indirectamente por `tools.test.ts`) |

## Cobertura cualitativa (inventario real de tests — medido)

| Área | Tests | Estado |
|------|-------|--------|
| Seguridad del chat (rate limit, sanitize, validaciones) | `security.test.ts` | ✅ |
| Headers de seguridad de Vercel | `vercel-headers.test.ts` | ✅ |
| i18n (paridad de claves ES/EN) | `translations.test.ts` | ✅ |
| Categorías (consistencia con schema) | `categories.test.ts` | ✅ |
| Badge verificado (lógica) | `verified-badge.test.ts` | ✅ |
| Tools verificadas (integración con colección) | `verified-tools.test.tsx` | ✅ |
| Home (secciones) | `home.test.ts` | ✅ |
| SVGL (logos) | `svgl.test.ts` | ✅ |
| Paquete CLI (estructura, bin, registry) | `cli-package.test.ts` | ✅ |
| Componentes React (5) | `*.test.tsx` en components/ | ✅ |
| **Frontmatter de las 102 tools** | `tools.test.ts` | ✅ **arreglado 2026-07-23** — causa real: BOM UTF-8 en 67 archivos rompía el regex `^---`, no frontmatter faltante. Se removió el BOM de los 67 archivos. |
| Favoritos (`src/lib/favorites.ts`) | `favorites.test.ts` (nuevo) | ✅ |
| Licencias (`src/lib/licenses.ts`) | `licenses.test.ts` (nuevo) | ✅ |
| Utilidad `cn()` (`src/lib/utils.ts`) | `utils.test.ts` (nuevo) | ✅ |

**Totales medidos:** 131 ✅ / 0 ❌ de 131 tests (18 archivos) — ejecución real 2026-07-23.

## Módulos sin tests correspondientes (gaps de cobertura cualitativa restantes)

- `src/components/layout/{LanguageSwitcher,MobileMenu,ThemeToggle}.tsx` — sin tests.
- `src/components/tools/{ToolShareButton,FavoritesList,LicenseToggle,InstallBadge,ScreenshotGallery}.tsx` — sin tests.
- `src/components/ui/*` (shadcn/ui) — sin tests directos.
- `src/lib/svgl.ts` — solo `getSVGUrl` cubierto; `getSVGProps`/lógica de tema sin cubrir.
- `src/pages/api/recommend.ts` — endpoint serverless sin test de integración (seguridad sí testeada vía `security.ts`).
- `scripts/fetch-logos.mjs`, `scripts/generate-skills.mjs` — scripts de prebuild sin tests.
- `packages/tooldev-skills/bin/tooldev-skills.mjs` — testeado parcialmente vía `cli-package.test.ts`.

## Historial

| Fecha | Tests | Resultado | Fuente |
|-------|-------|-----------|--------|
| 2026-07-23 | 131 | 131 pass / 0 fail, coverage 49.89% stmts | Ejecución real — fix BOM + CI + 3 nuevos test files |
| 2026-07-20 | 110 | 109 pass / 1 fail | Auditoría original |
| (anterior, README) | 43 | "todos pasando" | README desactualizado — el suite creció 43 → 110 → 131 |
