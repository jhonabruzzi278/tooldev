# Incident Runbooks

> **Estado: PENDIENTE — proyecto aún no entra a Operations.**
> No hay runbooks existentes. Se documentan aquí los **escenarios de fallo más probables** derivados de la arquitectura real, como punto de partida.

## RB-01 · El chat IA no responde / devuelve error

**Síntomas:** el widget ChatIA muestra error; usuarios reportan que no recomienda.

**Diagnóstico:**
1. Vercel Dashboard → Logs de la función `api/recommend`: ¿5xx? ¿timeout?
2. ¿`OPENAI_API_KEY` configurada y válida en env de producción?
3. ¿Cuota/límite de OpenAI agotada? (dashboard OpenAI → Usage)
4. ¿El caller está siendo rate-limited (429)? — esperado a >5 req/min por IP; verificar que no sea un falso positivo por IPs compartidas (el límite es por `x-forwarded-for`).

**Mitigación:**
- Key inválida/expirada → rotar en Vercel env y redeploy.
- Cuota OpenAI agotada → recargar o cambiar `AI_MODEL` a uno más barato.
- OpenAI caído → el sitio estático sigue funcionando; considerar mensaje de degradación amable (hoy el error es genérico).

**Nota:** el rate limit vive en memoria del worker — un cold start lo resetea. No es un bug, es la decisión documentada en ADR-004.

## RB-02 · Build de Vercel fallando

**Causas probables (en orden):**
1. **Frontmatter inválido/ausente en alguna tool** — Zod rechaza el build. *Estado actual conocido: ~37 tools sin frontmatter (test `tools.test.ts` fallando).* → Completar frontmatter o eliminar archivos.
2. `fetch-logos.mjs` falla por red/SVGL API caída → el prebuild se interrumpe. → Reintentar; considerar hacer el fetch tolerante a fallos (los logos ya commiteados sirven de fallback).
3. Node version mismatch → engines exige >= 22.12.

**Mitigación:** arreglar la causa y push; rollback rápido: Vercel Dashboard → redeploy del último deployment bueno.

## RB-03 · Sitio caído (contenido estático no disponible)

**Diagnóstico:** estado de Vercel (status.vercel.com) → si es outage de plataforma, esperar + comunicar. El sitio no tiene backend propio que pueda caerse.

## RB-04 · Contenido roto o desactualizado publicado

**Escenario:** una tool con datos erróneos, enlace oficial caído, o traducción faltante.
**Mitigación:** fix del markdown + push (rebuild ~7s). No hay caché de aplicación que purgar (CDN de Vercel se invalida por deploy).

## RB-05 · Abuso del endpoint del chat (coste OpenAI)

**Síntomas:** factura OpenAI inesperada.
**Diagnóstico:** OpenAI Usage dashboard; logs Vercel por volumen de invocaciones.
**Mitigación inmediata:** reducir `RATE_LIMIT_MAX_REQUESTS` (hoy 5/min), añadir Vercel KV para límite distribuido, o desactivar temporalmente el endpoint (flag env + guard clause).

## Contactos / escalación

- Owner único: Jonathan Guerra. Sin on-call ni equipo. ⚠️ Validar si existe canal de reporte de usuarios (¿Formspree llega a email monitorizado?).
