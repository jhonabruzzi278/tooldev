---
name: grafana
description: >- Úsala cuando el usuario mencione o pregunte sobre monitoreo, dashboards, métricas, observabilidad.
---

# Grafana

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** observabilidad
- **Pricing:** open-source
- **License:** AGPL-3.0
- **Technical Level:** intermedio
- **Compatibility:** Web, Docker, macOS, Linux, Windows
- **Official Site:** https://grafana.com
- **GitHub:** https://github.com/grafana/grafana
- **Alternatives:** kibana, datadog, new-relic

## Features
- Dashboards interactivos con paneles personalizables
- >-
- Alertas integradas con notificaciones por Slack, email, PagerDuty
- Exploración ad-hoc de métricas con consultas visuales
- Anotaciones para correlacionar eventos con cambios en métricas
- Paneles dinámicos con variables y templates
- Soporte para Loki (logs) y Tempo (trazas)
- Biblioteca de dashboards comunitarios en grafana.com/dashboards

## Steps
### 1. Instala Grafana
>-

### 2. Conecta una fuente de datos
>-

### 3. Crea tu primer dashboard
>-

### 4. Configura alertas
>-

## When to Use
- **Monitoreo de infraestructura y aplicaciones:** >-
- **Centralización de logs y trazas:** >-
- **Dashboards ejecutivos para stakeholders:** >-

## Examples
### Dashboard de latencia de API por endpoint
```
// PromQL query para percentiles de latencia
histogram_quantile(0.99,
  sum(rate(http_request_duration_seconds_bucket[5m])) by (le, endpoint)
)
tput: >-
Panel de serie temporal mostrando el percentil 99 de latencia por endpoint
HTTP. Permite identificar APIs lentas antes de que afecten a usuarios.
```

### Alerta de alta tasa de errores 5xx
```
// Regla de alerta en Grafana
ALERT HighErrorRate
  IF rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m]) > 0.05
  FOR 5m
  LABELS { severity = "critical" }
  ANNOTATIONS { summary = "Tasa de error superior al 5%" }
tput: >-
Dispara una alerta crítica si la tasa de errores 5xx supera el 5% durante
más de 5 minutos consecutivos, notificando por Slack y email.
```

## Tips
- >-
- >-
- >-
- >-

## FAQ
- **¿Grafana es gratis?** >-
- **¿Qué fuente de datos me recomiendas empezar?** >-
- **¿Grafana reemplaza a Datadog o New Relic?** >-

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://grafana.com
- **Source Code Issues:** Check the repository at https://github.com/grafana/grafana for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
