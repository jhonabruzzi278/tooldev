# Infrastructure as Code

## Estado actual

**No existe IaC formal** (sin Terraform, Pulumi, ni Vercel Terraform provider). La infraestructura está definida de forma **declarativa pero parcial** en archivos de configuración del repo:

| Recurso | Definido en | Tipo |
|---------|-------------|------|
| Proyecto Vercel + build | `vercel.json` | Config declarativa (framework, buildCommand, outputDirectory) |
| Security headers (7) | `vercel.json` → `headers` | Config declarativa — CSP, HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy |
| Adaptador serverless | `astro.config.mjs` → `vercel()` | Código |
| Función serverless | `src/pages/api/recommend.ts` | Código (convención Astro → Vercel Function) |
| Variables de entorno | `.env.example` (documentación) | ⚠️ Los valores reales viven SOLO en el dashboard de Vercel — fuera de IaC |
| Dominio | `astro.config.mjs` → `site` | Código (URL de Vercel, sin dominio custom detectado) |

## Recursos NO codificados (viven solo en dashboards)

- Variables de entorno de producción (`OPENAI_API_KEY`, `AI_API_URL`, `AI_MODEL`).
- Configuración del proyecto Vercel (Git integration, Node version, region).
- ⚠️ Validar: ¿dominio `tooldev.dev` configurado en Vercel? El CLI lo referencia como homepage pero el site configurado es `tool-dev-rust.vercel.app`.

## Riesgos

- **Recreación manual:** si el proyecto Vercel se pierde, reconstruirlo depende de memoria/dashboard, no de código.
- **Drift:** cambios de headers/env en dashboard no quedan registrados en Git (mitigado parcialmente: headers sí están en vercel.json).

## Recomendación (para fase Operations)

1. Mantener `vercel.json` como fuente de verdad de headers (ya es así).
2. Considerar **Vercel Terraform provider** o al menos un `docs/VERCEL_SETUP.md` con la lista exacta de env vars y settings.
3. Si se añade KV para rate limiting o analytics, codificarlo desde el inicio.
4. Nota: el repo tiene instalada la skill `terraform` en `.agents/skills/` — disponible cuando se decida adoptar IaC formal.
