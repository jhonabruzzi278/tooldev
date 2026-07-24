# SLA Definition

> **Estado: PENDIENTE — proyecto aún no entra a Operations.**
> No existe SLA/SLO formal documentado en el repo. Lo siguiente es una **propuesta inicial** basada en la arquitectura real, pendiente de validación del owner.

## Contexto del servicio

- Sitio estático en Vercel (CDN global) — la disponibilidad del contenido depende casi enteramente del SLA de Vercel.
- Un endpoint serverless (`/api/recommend`) que depende de OpenAI API — el componente más frágil.

## SLOs propuestos (⚠️ pendiente validación humana)

| Indicador | Objetivo propuesto | Justificación |
|-----------|--------------------|--------------------|
| Disponibilidad del sitio estático | ≥ 99.9% mensual | Delegada a Vercel; el contenido es estático |
| Disponibilidad del chat (`/api/recommend`) | ≥ 99% mensual | Dependencia externa (OpenAI) + rate limiting propio |
| Latencia p95 del chat | < 16s (timeout 15s + margen) | Acotado por `OPENAI_TIMEOUT_MS = 15_000` en `security.ts` |
| LCP (Web Vital) | < 2.5s | Sitio estático pre-renderizado; build optimizado |
| Tasa de error 5xx | < 0.5% | Sin backend propio salvo 1 endpoint |

## Compensaciones / penalizaciones

N/A — proyecto personal/portfolio sin usuarios de pago (inferido; ⚠️ validar).

## Dependencias de terceros y sus límites

- Vercel (hosting) — SLA según plan (⚠️ plan no documentado, probablemente Hobby).
- OpenAI API — sin SLA contractual detectado; riesgo mitigado parcialmente con timeout de 15s.
- Formspree (contacto) — degradación aceptable: el sitio funciona sin él.

## Qué falta para formalizar

1. Definir si existe compromiso real con usuarios (¿hay audiencia que lo exija?).
2. Medir línea base: uptime y latencia reales (requiere monitoring — ver MONITORING_SETUP.md).
3. Decidir error budget y política de respuesta a incidentes (ver INCIDENT_RUNBOOKS.md).
