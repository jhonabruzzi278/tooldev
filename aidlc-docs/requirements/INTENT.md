# Project Intent

> **Fuente:** Extraído de `README.md`, `.kiro/steering/product.md` (documento real del proyecto) y estructura del código. No es inferencia genérica — el proyecto ya documentaba su propósito en Kiro steering.

## High-Level Purpose

ToolDev es un **directorio curado y bilingüe (ES/EN) para descubrir, comparar y evaluar herramientas de desarrollo**. Los desarrolladores exploran frameworks, librerías, servicios y utilidades organizadas por categoría, con guías honestas que explican no solo *qué es* una herramienta sino *cuándo usarla* y *cuándo evitarla*.

Diferenciador declarado (`.kiro/steering/product.md`):
- Guías prácticas con alternativas y comparativas para decisiones informadas.
- **Contenido primero en español** para la comunidad hispanohablante, con paridad completa en inglés.

## Business Objectives

Extraídos del README y del código (features implementadas):

1. Unificar 100+ herramientas técnicas en una experiencia de navegación clara y bilingüe. ✅ Implementado (102 tools en `src/content/tools/`).
2. Presentar información detallada (features, capturas, FAQ, alternativas, cuándo usar/evitar) sin saturar la interfaz. ✅ Implementado (schema Zod rico en `src/content.config.ts`).
3. Garantizar SEO, accesibilidad y rendimiento en un sitio 100% estático. ✅ Implementado (JSON-LD, sitemap, skip link, `prefers-reduced-motion`).
4. Asistir la elección de herramientas con IA (chat recomendador). ✅ Implementado (`POST /api/recommend` con OpenAI `gpt-4o-mini`).
5. Distribuir "skills" de IA de herramientas verificadas vía CLI (`npx tooldev-skills`). ✅ Implementado (`packages/tooldev-skills` v1.0.0).
6. ⚠️ **Pendiente validación humana:** objetivos de negocio más allá del producto (¿portfolio? ¿monetización? ¿comunidad?) — no documentados en ninguna fuente.

## Success Metrics

**Implementadas/medibles hoy (técnicas):**
- 150 páginas estáticas generadas en build (~7s) — medido en README/build.
- 110 tests automatizados con Vitest (estado real: 109 pasando, 1 fallando — ver `testing/TEST_COVERAGE_REPORT.md`).
- Sitio live: `https://tool-dev-rust.vercel.app`.

**⚠️ Pendientes de definición (negocio):**
- Tráfico/visitas, conversión a clics en sitios oficiales, uso del chat IA, instalaciones del CLI vía npm. No hay analytics configurado en el repo — requiere decisión del owner.

## Constraints

### Technical

Extraídos de `package.json`, `astro.config.mjs`, `vercel.json`:

- **Node.js >= 22.12.0** (engines en package.json).
- **Salida 100% estática pre-renderizada** — única excepción: `POST /api/recommend` (serverless, `prerender = false`).
- **Hosting acoplado a Vercel** (adapter `@astrojs/vercel`, `vercel.json`, `.vercel/`). No es vendor lock-in arquitectónico (Astro permite cambiar adapter), pero el deploy actual depende de Vercel.
- **OpenAI API** como dependencia externa del chat (env vars `OPENAI_API_KEY`, `AI_API_URL`, `AI_MODEL`).
- **Formspree** para el formulario de contacto (tercer servicio externo, reflejado en CSP `connect-src`/`form-action`).
- Rate limiting del chat: 5 req/min por IP, mensajes ≤ 500 chars, timeout 15s a OpenAI (`src/lib/security.ts`).

### Business

- ⚠️ No documentado — requiere input del owner. (Presupuesto de OpenAI API, coste de Vercel, y mantenimiento del contenido de 102 herramientas son constraints implícitos no formalizados.)
