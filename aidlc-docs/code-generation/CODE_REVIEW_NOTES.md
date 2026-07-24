# Code Review Notes

> Notas de la revisión estática realizada durante la auditoría AI-DLC (2026-07-20). No sustituye un PR review — es el estado observado del código en `main`.

## Proceso de review actual (detectado)

- **Sin evidencia de PRs/branch protection en el repo local:** historial lineal en `main`, commits directos. Proyecto unipersonal → review = auto-revisión + agentes IA.
- **Sin CI:** no hay checks automáticos en push (no existe `.github/workflows`).
- Calidad apoyada en: tipado estricto (TS 6), validación Zod en build, suite Vitest, y agentes con skills de proyecto.

## Hallazgos de la revisión (2026-07-20)

### 🔴 Bloqueantes

1. ~~**`tools.test.ts` fallando en main**~~ — **✅ Resuelto 2026-07-23.** Causa real: 67 archivos en `src/content/tools/` tenían BOM UTF-8 al inicio, rompiendo el regex de detección de frontmatter del test (no era contenido faltante). Se removió el BOM de los 67 archivos afectados. Build (`npm run build`) verificado post-fix: 150 páginas generadas sin cambios.

### 🟡 Mejoras recomendadas

2. **README desactualizado:** afirma 64 tools / 6 categorías / 43 tests; realidad: 102 / 7 / 110. Actualizar métricas.
3. **Rate limit del chat en memoria:** se pierde entre cold starts serverless. Considerar Vercel KV/Upstash si el chat escala.
4. **CSP con `'unsafe-inline'`** en script-src/style-src — valorar nonces (Astro soporta parcialmente).
5. **Sin coverage medido** — falta `@vitest/coverage-v8` en devDependencies (comando documentado en `testing/TEST_COVERAGE_REPORT.md`).
6. **Discrepancia de identidad GitHub:** README → `jhonabruzzi278`, CLI package.json → `jonathanfedev/tooldev`. Unificar.
7. **`engines` divergentes:** sitio requiere Node >= 22.12, CLI >= 18 — intencional (ADR-005), pero conviene testear el CLI en Node 18 en CI.

### 🟢 Fortalezas observadas

- Schema Zod estricto con enums cerrados → dominio consistente.
- Seguridad del endpoint bien cubierta por tests (415/400/429, sanitización, timeout).
- Headers de seguridad completos y verificados por test.
- i18n con paridad de claves verificada automáticamente.
- Separación limpia: contenido / componentes / lib / CLI.
- Accesibilidad considerada (skip link, aria-current, reduced-motion, criterio WCAG AA en spec).

## Convenciones del proyecto (para futuros agentes)

- Componentes Astro para UI estática, React solo en islas interactivas.
- Traducciones SIEMPRE en ambos locales al añadir claves (test lo fuerza).
- Nueva herramienta = markdown con frontmatter completo + logo + screenshots + entrada ES/EN.
- Features complejas: crear spec en `.kiro/specs/` antes de implementar.
