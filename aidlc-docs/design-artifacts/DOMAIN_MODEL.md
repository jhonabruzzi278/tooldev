# Domain Model (DDD)

> **Método:** extracción retroactiva del código real. Fuentes: `src/content.config.ts` (schema Zod = modelo de dominio de facto), `src/lib/categories.ts`, `src/lib/favorites.ts`, `packages/tooldev-skills/`. El proyecto es un sitio de contenido — el dominio es mayormente de solo lectura, sin eventos ni persistencia de servidor.

## Bounded Context: Catálogo de Herramientas de Desarrollo

Contexto único dominante. Dentro de él hay 3 sub-contextos débilmente acoplados: **Catálogo** (contenido), **Asistente IA** (recomendación efímera) y **Distribución de Skills** (CLI npm).

### Aggregate Root: `Tool`

Definido por el schema Zod en `src/content.config.ts`. Identidad: **slug** (derivado del nombre de archivo markdown).

**Atributos (todos reales del schema):**

| Campo | Tipo | Clasificación DDD |
|-------|------|-------------------|
| `name`, `description` | string | Atributos del agregado |
| `category` | enum(7) | **Value Object** `Category` (referencia por slug) |
| `tags` | string[] | Value Objects `Tag` |
| `officialSite`, `github` | URL | Value Objects `Url` |
| `pricing` | enum(gratis, freemium, pago, open-source) | **Value Object** `Pricing` |
| `openSource`, `license` | boolean / string? | Atributos |
| `technicalLevel` | enum(principiante, intermedio, avanzado) | **Value Object** `TechnicalLevel` |
| `compatibility` | string[] | Value Objects |
| `featured`, `verified` | boolean (default false) | Atributos de curaduría — `verified` es la marca de calidad del dominio |
| `screenshots` | string[]? | Value Objects (rutas a imágenes) |
| `features`, `alternatives`, `relatedTools` | string[]? | Value Objects; `relatedTools`/`alternatives` referencian otros Tools por slug (relación intra-agregado por identidad, sin cascada) |
| `howToUse` | {step, title, description}[]? | **Value Objects** `HowToStep` (ordenados por `step`) |
| `whenToUse` | {title, description}[]? | Value Objects — núcleo de la propuesta de valor ("cuándo usar / cuándo evitar") |
| `examples` | {title, code, output?}[]? | Value Objects `CodeExample` |
| `tips` | {text}[]? | Value Objects |
| `faq` | {question, answer}[]? | Value Objects `FaqItem` |
| `publishedAt` | Date | Atributo temporal |

**Invariantes del agregado (forzadas por Zod):**
- `category` ∈ {frontend, backend, devops, ia, diseno, productividad, agentes}
- `officialSite` debe ser URL válida; `github` opcional pero URL si existe
- `verified` debe ser boolean o el archivo es rechazado (criterio 1.5 del spec Kiro)

### Entity: `Category`

`src/lib/categories.ts`. Identidad: `slug`. Atributos de presentación del dominio: `name`, `description`, `icon` (tabler), `color`, `lightBg`, `darkBg` (theming dual). Es catálogo de referencia — ciclo de vida acoplado al código, no al contenido.

### Repository (patrón)

- **`ToolsRepository` (implícito):** Astro Content Collections con `glob` loader sobre `src/content/tools/**/*.md`. Es un repositorio de solo lectura; la "persistencia" es el sistema de archivos + Git. Consulta vía `getCollection('tools')`.
- **Cache de contexto para IA:** `cachedToolsContext` en `src/pages/api/recommend.ts` — snapshot inmutable del catálogo en memoria del serverless worker.

### Sub-contexto: Asistente IA (transient, sin agregados persistentes)

- **`RecommendationRequest`** (Value Object): `message` sanitizado (≤500 chars, sin HTML/control chars).
- **Políticas de dominio:** `RateLimitPolicy` (5 req/min/IP, ventana 60s), `SanitizationPolicy`, `TimeoutPolicy` (15s) — `src/lib/security.ts`.
- **Servicio de dominio:** recomendación delegada a OpenAI (`AI_API_URL`, `AI_MODEL=gpt-4o-mini`) con el catálogo como contexto. Sin estado conversacional persistido (cada request es independiente).

### Sub-contexto: Distribución de Skills

- **Entity: `SkillFile`** — artefacto markdown en formato Anthropic SKILL.md (frontmatter name/description + secciones), generado desde Tools con `verified = true` por `scripts/generate-skills.mjs`.
- **Value Object: `SkillsRegistry`** — `registry.json` (slug → {name, category, description}) para consulta del CLI.
- **Servicio: `tooldev-skills` CLI** (`packages/tooldev-skills/bin/`) — instala SkillFiles en el proyecto del usuario final.

### Sub-contexto: Preferencias de Usuario (client-side)

- **`FavoritesStore`** — colección de slugs de Tool persistida en `localStorage` (`tooldev-favorites`). Sin entidad User: la identidad es el navegador. Invariante: IDs huérfanos se omiten silenciosamente (criterio 1.4 del spec).

### Domain Events

**Ninguno.** No hay bus de eventos, pub/sub ni side effects reactivos — consistente con un sitio estático de contenido. La única "señal" temporal es la ejecución del prebuild (fetch-logos + generate-skills).

### Diagrama textual

```
Tool (aggregate, 102 instancias en markdown)
 ├── Category ────────────── entity de referencia (7)
 ├── SkillFile ◄──────────── generado si verified=true (prebuild)
 │    └── SkillsRegistry ── consumido por CLI npx
 ├──◄ FavoritesStore ────── slugs en localStorage del navegador
 └──◄ RecommendationRequest ─ el chat consulta el catálogo vía snapshot cacheado
```
