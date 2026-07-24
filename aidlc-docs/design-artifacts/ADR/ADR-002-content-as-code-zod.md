# ADR-002: Contenido como código con Content Collections + validación Zod

**Estado:** Aceptado (implementado) — con deuda activa
**Fecha:** Reconstruido — commit inicial; migrado a formato Astro v6 (`src/content.config.ts`)
**Contexto:** 102 herramientas con metadatos ricos y heterogéneos (features, FAQ, ejemplos, cuándo usar, screenshots). Se necesita consistencia sin base de datos ni panel de administración.

## Decisión

El catálogo vive en **markdown dentro del repo** (`src/content/tools/*.md`) y se valida en build con un **schema Zod** (`src/content.config.ts`): enums cerrados para categoría/pricing/nivel, URLs validadas, booleanos con default, fechas coerceadas.

## Consecuencias

**Positivas:**
- Fail-fast: un frontmatter inválido rompe el build antes de llegar a producción.
- Versionado del contenido junto al código (diffs, reviews, rollback con Git).
- Tipado end-to-end del contenido en componentes.
- Sin coste ni complejidad de CMS/DB.

**Negativas / deuda:**
- **Deuda activa HOY:** ~37 herramientas nuevas sin frontmatter → test de integración `tools.test.ts` fallando. El schema solo protege lo que tiene frontmatter; archivos sin él quedan en zona gris.
- Curaduría manual: cada herramienta es trabajo humano (o asistido por IA) de redacción.
- No apto si editores no-técnicos necesitaran publicar (requiere saber markdown + Git).

## Alternativas consideradas (inferidas)

- Headless CMS (Sanity/Contentful): descartado por coste/complejidad y por la naturaleza de contenido curado de baja frecuencia.
- JSON/YAML por herramienta: markdown elegido por permitir cuerpo de texto libre además del frontmatter.
