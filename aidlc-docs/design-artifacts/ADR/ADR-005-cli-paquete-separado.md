# ADR-005: `tooldev-skills` como paquete npm independiente en `packages/`

**Estado:** Aceptado (implementado — v1.0.0)
**Fecha:** Reconstruido — commit `aa44da6` ("verified badge system, npx skills CLI, 22 new tools")
**Contexto:** La feature "verified tools" genera archivos SKILL.md (formato Anthropic) que los desarrolladores instalan en sus propios proyectos para usarlos con asistentes IA. El canal natural de distribución es `npx`.

## Decisión

- Crear `packages/tooldev-skills/` como paquete npm **independiente** (versionado propio, `bin/tooldev-skills.mjs`, sin dependencias).
- Los skills se **generan en prebuild** del sitio (`scripts/generate-skills.mjs`) desde las tools con `verified: true`, junto a un `registry.json`.
- **Sin npm workspaces**: el paquete vive en el mismo repo pero se publica/versiona por separado.

## Consecuencias

**Positivas:**
- `npx tooldev-skills` funciona sin instalación global; cero dependencias → instalación instantánea.
- Los skills siempre están sincronizados con el catálogo (se regeneran en cada build).
- El sitio y el CLI evolucionan con versionados independientes.

**Negativas / riesgos:**
- Sin workspaces ni pipeline de publicación automatizado → publicar a npm es manual. ⚠️ No hay evidencia de que el paquete esté publicado en npm registry todavía (validar con `npm view tooldev-skills`).
- Node >= 18 en el CLI vs >= 22.12 en el sitio: matriz de soporte dual a mantener.

## Alternativas consideradas (inferidas)

- Skills descargables como ZIP desde el sitio: peor UX que `npx`.
- Monorepo con workspaces (pnpm/turborepo): innecesario para 2 paquetes con cero dependencias compartidas.
