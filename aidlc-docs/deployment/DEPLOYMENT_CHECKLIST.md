# Deployment Checklist

**Deployment Unit:** sitio estático `dist/` + 1 función serverless (`/api/recommend`) en Vercel.
**URL producción:** `https://tool-dev-rust.vercel.app`
**Estado auditado:** 2026-07-20

## Pre-Deployment

- [x] **Tests pasando** — estado 2026-07-23: ✅ **131/131** (fix: BOM UTF-8 en 67 tools rompía el parseo de frontmatter en el test, no era contenido faltante — ver `testing/TEST_COVERAGE_REPORT.md`).
- [x] **CI/CD configurado** — estado 2026-07-23: ✅ `.github/workflows/test.yml` — corre `npm run test:coverage` en push/PR a `main`, sube el reporte de coverage como artefacto. Umbral de coverage en `vitest.config.ts` (45%/30%/30%/48%, no bloquea aún el deploy de Vercel — solo el workflow de GitHub Actions).
- [x] **Secrets no commiteados** — verificado: `git ls-files` solo muestra `.env.example`; `.env` fuera del repo y en `.gitignore`. `OPENAI_API_KEY` solo en env de Vercel (⚠️ verificar en dashboard que esté configurada).
- [x] **Build local validado** — `npm run build` documentado: 150 páginas, ~7s. Incluye prebuild (fetch-logos + generate-skills).
- [x] **Security headers** — vercel.json con CSP/HSTS/etc., cubierto por `vercel-headers.test.ts`.
- [x] **Node version** — engines `>=22.12.0` alineado con Vercel Node 22.
- [ ] **Coverage revisado** — ❌ no medible (falta `@vitest/coverage-v8`).
- [x] **Sitemap/SEO** — `@astrojs/sitemap` + robots.txt + canonical configurados.

## Infraestructura Detectada

| Pieza | Archivo | Notas |
|-------|---------|-------|
| Hosting config | `vercel.json` | framework astro, build `npm run build`, output `dist`, 7 security headers |
| Adapter | `astro.config.mjs` → `@astrojs/vercel` | site fijado a `tool-dev-rust.vercel.app` |
| Proyecto Vercel | `.vercel/` | enlazado (deploys existentes) |
| Serverless | `src/pages/api/recommend.ts` | `prerender = false`, Node runtime |
| Env vars requeridas | `.env.example` | `OPENAI_API_KEY`, `AI_API_URL`, `AI_MODEL` |
| IaC formal (Terraform/Pulumi) | — | ❌ No existe — ver INFRASTRUCTURE_AS_CODE.md |

## Pasos de deploy actuales (reconstruidos)

1. Push a `main` → Vercel build automático (⚠️ inferido de la integración; confirmar en dashboard).
2. Vercel ejecuta `npm run build` (prebuild incluido).
3. Salida `dist/` publicada; función `/api/recommend` desplegada como serverless.
4. Sin smoke test post-deploy automatizado. ❌

## Rollback

- Vercel permite redeploy de un deployment anterior desde el dashboard (mecanismo disponible, no documentado en el repo).
- Git revert como fallback.

## Post-Deployment (pendientes para entrar a Operations)

- [ ] Health check / uptime monitoring (Vercel Analytics, Checkly, UptimeRobot…).
- [ ] Alertas de errores de la función serverless (Vercel logs → alerta).
- [ ] Smoke test post-deploy en CI.
- [ ] Monitoreo de cuota/coste de OpenAI API.
