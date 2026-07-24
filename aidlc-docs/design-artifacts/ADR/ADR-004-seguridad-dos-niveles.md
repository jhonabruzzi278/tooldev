# ADR-004: Seguridad en dos niveles — headers declarativos + políticas en código

**Estado:** Aceptado (implementado)
**Fecha:** Reconstruido — commits `e2a0c0b`/`30871ed` (vercel.json) y `9546e42` ("agregar seguridad al chatbot y pruebas completas")
**Contexto:** Sitio estático con un endpoint serverless que llama a OpenAI con una API key secreta, expuesto a internet.

## Decisión

**Nivel 1 — Headers HTTP (vercel.json, declarativo):** CSP estricta (`default-src 'self'`, connect-src limitado a Formspree/SVGL), HSTS con preload, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` restrictiva.

**Nivel 2 — Políticas del endpoint (src/lib/security.ts):**
- Rate limit: 5 req/min por IP (Map en memoria del worker).
- Sanitización: strip HTML + caracteres de control, máx 500 chars.
- Validación estricta de Content-Type (415), body (400), timeout a OpenAI 15s.
- API key solo en servidor (env var), nunca en el bundle del cliente.

## Consecuencias

**Positivas:**
- Cobertura verificada por tests automatizados (`security.test.ts`, `vercel-headers.test.ts`) — ambos pasando.
- El chat no puede usarse como proxy libre de OpenAI (rate limit + sanitización).

**Negativas / riesgos:**
- **Rate limit en memoria:** se resetea con cold starts y no es compartido entre instancias serverless → mitigación básica, no robusta. Mejora futura: Vercel KV/Upstash.
- CSP permite `'unsafe-inline'` en script/style (requerido por Astro/Tailwind actual) — endurecer con nonces sería una mejora.
- Sin WAF ni protección DDoS propia (delegado implícitamente a Vercel).

## Alternativas consideradas (inferidas)

- Upstash/Vercel KV para rate limiting distribuido: no implementado (coste/complejidad vs. tráfico esperado).
- Cloudflare delante: no hay evidencia de su uso.
