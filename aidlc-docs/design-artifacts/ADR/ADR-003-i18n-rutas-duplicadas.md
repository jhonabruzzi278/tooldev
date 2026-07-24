# ADR-003: i18n por rutas estáticas duplicadas + diccionario central tipado

**Estado:** Aceptado (implementado)
**Fecha:** Reconstruido — commit inicial `3388643` ("bilingual (ES/EN)")
**Contexto:** Requisito de producto: contenido primero en español con paridad completa en inglés, en un sitio 100% estático con SEO por idioma.

## Decisión

- Duplicar el árbol de rutas: `src/pages/` (ES, raíz) y `src/pages/en/` (EN).
- Diccionario central en `src/lib/i18n/translations.ts` con tipado completo.
- `LanguageSwitcher` en el layout para alternar.
- **Sin** librería de i18n en runtime ni detección automática de locale del navegador.

## Consecuencias

**Positivas:**
- URLs estáticas por idioma (`/tools/x`, `/en/tools/x`) → SEO limpio (canonical + hreflang posible).
- Cero runtime de i18n: traducciones resueltas en build.
- Type-safety del diccionario (test `translations.test.ts` verifica paridad de claves).

**Negativas:**
- Duplicación estructural de páginas (cada ruta nueva se crea dos veces).
- El contenido largo de cada herramienta (cuerpo markdown) no tiene un mecanismo verificado de paridad ES/EN — gap sin test (ver ACCEPTANCE_CRITERIA.md).

## Alternativas consideradas (inferidas)

- Integración oficial de i18n de Astro / astro-i18n: descartada probablemente por simplicidad con solo 2 locales.
- Detección por `Accept-Language` con redirect: descartada a favor de SEO y control del usuario.
