# Generated Code Log

> Registro de generación asistida por IA. **Evidencia real:** el proyecto usa Kiro (`.kiro/specs/`, `.kiro/steering/`) y tiene configuraciones de agentes en `.opencode/` y `.agents/skills/` — el desarrollo es AI-asistido de forma declarada. Este log reconstruye los "Bolts" (ciclos rápidos AI-DLC) desde el historial de commits.

## Bolts reconstruidos desde git log

| Bolt (commit) | Unit entregado | Artefactos IA asociados |
|---------------|----------------|--------------------------|
| `3388643` / `ef3fcbf` | MVP inicial: Astro + Tailwind + shadcn, bilingüe, dark mode | — |
| `1f11b8a` | README + MIT LICENSE | — |
| `e2a0c0b`→`4f4d65c`→`30871ed` | Deploy config Vercel (3 iteraciones de fix) | Iteración rápida típica de Bolt |
| `c9852c5`→`8ec4550` | Sistema de logos: prebuild fetch + componentes SVG + fallback | `scripts/fetch-logos.mjs` |
| `39ab053` | 10 tools nuevas + Formspree + LicenseToggle + About redesign | — |
| `b8a00a4` | 9 tools nuevas (Squoosh, Fontsource, Tabler, SVGL, Flowbite…) | — |
| `c30c1d0` | **Chat IA con OpenAI** (ChatIA + API serverless) | — |
| `9546e42` | **Seguridad del chatbot + suite de tests completa** | Spec-driven hardening |
| `cd6ec79` | CopyForAI → formato Anthropic SKILL.md | Integración con ecosistema de agentes |
| `47ae492` | Favoritos + dark mode automático | `.kiro/specs/localstorage-favorites/` (requirements/design/tasks) |
| `aa44da6` | **Verified badge + CLI npx + 22 tools** | `.kiro/specs/verified-toggle-npx-installer/` |
| `f9e3b40` | "agentes" — categoría Agentes IA | — |
| `28bb467`→`dfc87f7` | Consistencia de diseño, fix theme toggle, contraste | — |
| `d7b0a69` | Screenshots, URLs, mejoras UI/UX | HEAD actual |

## Proceso AI-asistido detectado

1. **Specs antes de código** (Kiro): las features complejas tienen `requirements.md` (EARS) → `design.md` → `tasks.md` antes de implementarse. Ejemplos reales: favoritos, verified+CLI.
2. **Steering docs** (`.kiro/steering/`): `product.md`, `structure.md`, `tech.md` mantienen contexto persistente para los agentes.
3. **Skills instaladas en el repo** (`.agents/skills/`): accessibility, astro, frontend-design, nodejs-*, seo, shadcn, tailwind-*, terraform, typescript-advanced-types, vercel-* — usadas como contexto experto durante la construcción.
4. **Ciclos cortos:** los commits muestran entregas de horas/días (Bolts), no sprints semanales.

## ⚠️ Pendiente

- No existía un log formal de prompts por sesión hasta `aidlc-docs/prompts.md` (creado en esta auditoría).
- Los Bolts anteriores a la adopción de specs Kiro no tienen requirements documentados (reconstruidos aquí retroactivamente).
