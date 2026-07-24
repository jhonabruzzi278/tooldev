# User Stories

> **Fuente principal:** el proyecto mantiene specs formales por feature en `.kiro/specs/` (metodología Kiro: requirements → design → tasks), con historias de usuario y criterios de aceptación en formato EARS. Este documento los consolida y añade las stories reconstruidas retroactivamente desde commits/código para features sin spec.

## Stories con spec formal (real — ver `.kiro/specs/`)

### US-01 · Favoritos en localStorage — `.kiro/specs/localstorage-favorites/`
> Como usuario, quiero ver mis herramientas favoritas en la página `/favorites` para acceder a ellas rápidamente.

Sub-stories documentadas en el spec:
1. Renderizar favoritos leyendo IDs desde `localStorage` (`tooldev-favorites`) y cruzándolos con el catálogo pasado por props en build-time.
2. Layout de lista compacta (nombre, badge de categoría, descripción truncada, enlace al detalle) escaneable sin scroll excesivo.
3. Eliminación en tiempo real: quitar favorito sin diálogo de confirmación, actualizando UI y store instantáneamente.
4. Paso de datos Astro → React (`client:load`) en tiempo de build.

**Estado:** ✅ Implementado (`src/lib/favorites.ts`, `src/pages/favorites.astro`, commit `47ae492`).

### US-02 · Sistema de verificación + CLI npx — `.kiro/specs/verified-toggle-npx-installer/`
> Como mantenedor de contenido, quiero marcar herramientas como verificadas, para distinguir las que tienen documentación validada.
> Como desarrollador usuario, quiero instalar skills de IA vía `npx tooldev-skills`, para usar archivos SKILL.md con mis asistentes de código.

Sub-stories documentadas en el spec:
1. Campo `verified: boolean` (default `false`) en el Content Schema con rechazo de valores no-booleanos.
2. Traducciones i18n del badge en ambos locales (`es`/`en`).
3. Paquete CLI `tooldev-skills` con skills pregenerados desde tools verificadas + `registry.json`.

**Estado:** ✅ Implementado (commit `aa44da6` — badge + CLI + 22 tools nuevas; tests `verified-badge.test.ts`, `verified-tools.test.tsx`, `cli-package.test.ts`).

## Stories reconstruidas retroactivamente (de commits y código — sin spec formal)

### US-03 · Chat IA recomendador
> Como desarrollador, quiero describir mi necesidad en un chat y recibir recomendaciones de herramientas del catálogo, para elegir más rápido.

- Endpoint serverless `POST /api/recommend` con OpenAI (`gpt-4o-mini`), contexto del catálogo cacheado en memoria.
- Seguridad: rate limit 5 req/min/IP, sanitización, 500 chars máx, timeout 15s.
- **Evidencia:** commits `c30c1d0` (chat), `9546e42` (seguridad + tests). Código: `src/pages/api/recommend.ts`, `src/components/ChatIA*`.
- **Estado:** ✅ Implementado.

### US-04 · Modo oscuro
> Como usuario, quiero cambiar entre tema claro/oscuro/sistema, para usar el sitio cómodamente según mi entorno.

- **Evidencia:** commits `47ae492` (dark mode automático), `dfc87f7` (toggle sol/luna/sistema).
- **Estado:** ✅ Implementado.

### US-05 · Contenido bilingüe ES/EN
> Como usuario hispanohablante o angloparlante, quiero todo el contenido en mi idioma con rutas dedicadas.

- **Evidencia:** `src/pages/en/`, `src/lib/i18n/translations.ts`, commit inicial `3388643`.
- **Estado:** ✅ Implementado.

### US-06 · CopyForAI / formato SKILL.md
> Como usuario de asistentes IA, quiero copiar la ficha de una herramienta en formato SKILL.md, para pegarla en mi agente.

- **Evidencia:** commit `cd6ec79` ("CopyForAI now generates Anthropic SKILL.md format").
- **Estado:** ✅ Implementado (`CopyForAI.tsx`).

### US-07 · Contacto
> Como visitante, quiero contactar al mantenedor vía formulario, para sugerir herramientas o reportar errores.

- **Evidencia:** commit `39ab053` (Formspree), `ContactForm.tsx` + `ContactForm.test.tsx`.
- **Estado:** ✅ Implementado.

## Stories potenciales no implementadas (detectadas como gaps)

- ⚠️ **US-F01 · Visibilidad de uso:** como owner, quiero analytics de visitas y de uso del chat, para medir los objetivos del producto. *No hay evidencia de implementación.*
- ⚠️ **US-F02 · CI gate:** como maintainer, quiero que los tests corran antes de cada deploy, para no publicar builds rotos. *No existe pipeline CI en el repo.*
