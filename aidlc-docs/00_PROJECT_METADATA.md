# Project Metadata

**Project Name:** ToolDev (`tooldev` en package.json)
**Owner:** Jonathan Guerra (git config: `JONAHBRUZZI` — GitHub README: [@jhonabruzzi278](https://github.com/jhonabruzzi278); repo CLI apunta a `github.com/jonathanfedev/tooldev`)
**Analyzed On:** 2026-07-20
**Current Phase:** LATE CONSTRUCTION (listo para transición a Operations)
**Last Updated:** 2026-07-27 (importación itsfree.dev: 102 → 196 tools, 422 páginas, 131/131 tests ✅, build validado)

## Status

- [x] Inception Phase — **completo (reconstruido retroactivamente)** — intent, requirements y stakeholders existían dispersos (README, `.kiro/steering/`, specs) y fueron formalizados en `requirements/` y `story-artifacts/`.
- [x] Construction Phase — **~92%** — código funcional, **catálogo ampliado a 196 tools** (94 importadas de itsfree.dev el 2026-07-27, ver `prompts.md`), 131 tests pasando, CI configurado (`.github/workflows/test.yml`), coverage medido y con umbral en CI (45% stmts / 30% branches / 30% funcs / 48% lines — no es el 80% objetivo de la política estándar, ver `testing/TEST_COVERAGE_REPORT.md`). Falta: subir coverage de componentes UI a 80%.
- [ ] Operations Phase — **pendiente** — el sitio está live en producción (`https://tool-dev-rust.vercel.app`) pero no hay monitoring, alerting, SLA ni runbooks configurados. Documentos placeholder generados en `operations/`.

## Quick Links

- Requirements: [aidlc-docs/requirements/](./requirements/)
- User Stories: [aidlc-docs/story-artifacts/](./story-artifacts/)
- Architecture: [aidlc-docs/design-artifacts/ARCHITECTURE.md](./design-artifacts/ARCHITECTURE.md)
- Testing: [aidlc-docs/testing/TEST_STRATEGY.md](./testing/TEST_STRATEGY.md)
- Deployment: [aidlc-docs/deployment/](./deployment/)
- Operations (pendiente): [aidlc-docs/operations/](./operations/)

## Notas del Análisis Automático

Supuestos documentados (marcados ⚠️ donde aparecen en los documentos):

1. **Stakeholders:** Solo hay evidencia de un desarrollador/owner (Jonathan Guerra). Se asume proyecto personal/portfolio sin stakeholders externos documentados. Marcado para validación.
2. **Fase:** El sitio está desplegado y accesible públicamente en Vercel, pero no hay artefactos de Operations (monitoring, SLA, runbooks, alerting). Según el flujo de detección AI-DLC, esto clasifica como **LATE CONSTRUCTION** con el sitio ya live, no como Operations completo.
3. **Owner/GitHub:** El README enlaza a `jhonabruzzi278` pero el `packages/tooldev-skills/package.json` apunta a `jonathanfedev/tooldev`. Se asume que son el mismo autor con dos cuentas/renombre. ⚠️ Validar.
4. **Métricas de negocio:** No existen analytics config en el repo (ni Vercel Analytics, ni GA, ni Plausible). Success metrics de negocio marcadas como pendientes de definición.
5. **README desactualizado:** El README afirmaba "64 herramientas, 6 categorías, 43 tests — todos pasando". Corregido en esta auditoría. **Actualización 2026-07-21:** tras la importación desde itsfree.dev el estado real es **196 herramientas, 7 categorías, 131 tests (todos pasando), 422 páginas en build, CI con GitHub Actions + coverage**.
