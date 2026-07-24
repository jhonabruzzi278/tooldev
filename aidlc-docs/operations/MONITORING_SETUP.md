# Monitoring Setup

> **Estado: PENDIENTE — el proyecto aún no entra formalmente a Operations.**
> El sitio está live en Vercel (`https://tool-dev-rust.vercel.app`) pero **no hay monitoring, logging centralizado ni alerting configurados** (verificado: no existen configs de Prometheus/Datadog/Sentry/analytics en el repo).

## Lo que existe hoy (implícito, no configurado por el proyecto)

| Capacidad | Disponible vía | Estado |
|-----------|----------------|--------|
| Logs de la función serverless | Vercel Dashboard → Logs | Disponible pero sin retención/alertas configuradas |
| Métricas de deployment | Vercel Dashboard | Implícito |
| Analytics de tráfico | — | ❌ No instalado (ni Vercel Analytics, ni GA, ni Plausible) |
| Error tracking | — | ❌ No existe (sin Sentry ni similar) |
| Uptime monitoring | — | ❌ No existe |

## Qué falta para entrar a Operations (recomendación priorizada)

1. **Vercel Analytics + Speed Insights** — mínimo esfuerzo (paquetes oficiales), cubre tráfico y Web Vitals del sitio estático.
2. **Error tracking del endpoint `/api/recommend`** — Sentry o Vercel Log Drains; hoy un fallo de OpenAI es invisible.
3. **Uptime check externo** (UptimeRobot/Checkly gratis) sobre `/` y un POST de prueba al endpoint.
4. **Alerta de cuota OpenAI** — usage limits en el dashboard de OpenAI + revisión mensual del rate limit real.
5. **Dashboard de métricas de negocio** — una vez definidas (ver INTENT.md → Success Metrics ⚠️).

## Señales a monitorear (cuando se configure)

- Disponibilidad del sitio estático (target: ver SLA_DEFINITION.md).
- Tasa de 429/500 del endpoint del chat.
- Latencia p95 del endpoint (timeout interno actual: 15s a OpenAI).
- Coste mensual de OpenAI API.
- Build failures en Vercel.
