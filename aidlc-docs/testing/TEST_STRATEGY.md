# Test Strategy

## Framework Detectado

| Componente | Valor real | Fuente |
|-----------|-----------|--------|
| Runner | **Vitest ^4.1.8** | package.json, vitest.config.ts |
| Entorno | jsdom (happy-dom también instalado) | vitest.config.ts |
| Componentes | @testing-library/react ^16.3.2 + jest-dom | package.json |
| Setup global | `src/__tests__/setup.ts` | vitest.config.ts |
| Coverage | provider **v8**, configurado | vitest.config.ts |
| Scripts | `test`, `test:watch`, `test:coverage` | package.json |

## Estructura de tests (real)

```
src/__tests__/
├── setup.ts
├── unit/          categories.test.ts, security.test.ts, svgl.test.ts,
│                  translations.test.ts, verified-badge.test.ts, home.test.ts,
│                  vercel-headers.test.ts, cli-package.test.ts
├── integration/   tools.test.ts, verified-tools.test.tsx
└── components/    AnimatedFAQ, AnimateOnScroll, ChatIA, ContactForm,
                   ToolShareButtons (.test.tsx)
```

**15 archivos de test, 110 tests** (medido ejecutando `npx vitest run` el 2026-07-20).

## Estado actual (ejecución real, 2026-07-23 — actualizado desde auditoría 2026-07-20)

| Métrica | Valor |
|---------|-------|
| Test files | 18 passed (18) |
| Tests | 131 passed (131) |
| Duración | ~17s |
| Coverage | 49.89% stmts / 36.33% branches / 35.41% funcs / 52.42% lines (ver `TEST_COVERAGE_REPORT.md`) |

### Fallo anterior — resuelto 2026-07-23

El test `tools.test.ts` fallaba porque **67 archivos de `src/content/tools/*.md` tenían un BOM UTF-8 (`EF BB BF`) al inicio**, lo que rompía el regex `/^---\r?\n.../` del test (el `^` matcheaba justo antes del BOM, no antes de `---`). **No era frontmatter faltante** — el contenido ya era válido y completo; era un problema de encoding. Se removieron los 3 bytes de BOM de los 67 archivos afectados. Verificado: `npm run build` sigue generando las 150 páginas correctamente tras el fix.

Además se agregaron 3 archivos de test nuevos para código previamente sin cobertura: `favorites.test.ts`, `licenses.test.ts`, `utils.test.ts` (21 tests nuevos, todos pasando).

## Tipos de tests y cobertura funcional

| Tipo | Qué cubre | Estado |
|------|-----------|--------|
| Unit | categorías, seguridad (rate limit/sanitize), svgl, traducciones, badge verificado, home, headers vercel, paquete CLI | ✅ Pasando |
| Integración | validez de frontmatter de las 102 tools, tools verificadas | ❌ 1 fallando (tools.test.ts) |
| Componentes | 5 componentes React interactivos (FAQ, scroll, chat, contacto, share) | ✅ Pasando |

## Gaps Identificados

1. **Coverage no medible actualmente** — ver `TEST_COVERAGE_REPORT.md`.
2. **Sin CI:** los tests no corren automáticamente en push/PR → el fallo actual llegó a main sin bloquear.
3. **Sin tests E2E** (Playwright/Cypress): flujos completos (navegar categoría → detalle → favorito) no verificados end-to-end.
4. **Sin tests de contrato para OpenAI** en el endpoint (mockeado o ausente).
5. **Sin tests de accesibilidad automatizados** (axe) pese a criterios WCAG en specs.
6. **Páginas `.astro` excluidas de coverage** por configuración (`exclude: src/pages/**`) — decisión razonable para SSG, pero el endpoint `api/recommend.ts` queda fuera de medición.
7. Componentes `.astro` (la mayoría de la UI) no son testeables directamente con Vitest — solo los islas React tienen tests.

## Comandos

```bash
npm test                # 110 tests
npm run test:watch      # watch
npm run test:coverage   # requiere instalar @vitest/coverage-v8 primero
```
