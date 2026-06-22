---
name: grafana
description: Plataforma open source de observabilidad y dashboards para métricas, logs y trazas con soporte para múltiples fuentes de datos. Úsala cuando el usuario mencione o pregunte sobre monitoreo, dashboards, métricas, observabilidad.
---

# Grafana

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** devops
- **Pricing:** open-source
- **License:** AGPL-3.0
- **Technical Level:** intermedio
- **Compatibility:** Web, Docker, macOS, Linux, Windows
- **Official Site:** https://grafana.com
- **GitHub:** https://github.com/grafana/grafana
- **Alternatives:** kibana, datadog, new-relic

## Features
- Dashboards interactivos con paneles personalizables
- Múltiples fuentes de datos (Prometheus, InfluxDB, Elasticsearch, CloudWatch, SQL)
- Alertas integradas con notificaciones por Slack, email, PagerDuty
- Exploración ad-hoc de métricas con consultas visuales
- Anotaciones para correlacionar eventos con cambios en métricas
- Paneles dinámicos con variables y templates
- Soporte para Loki (logs) y Tempo (trazas)
- Biblioteca de dashboards comunitarios en grafana.com/dashboards

## Steps
### 1. Instala Grafana
Usa apt install grafana (Linux), brew install grafana (macOS) o docker run -p 3000:3000 grafana/grafana. En producción usa las versiones enterprise con soporte extendido.

### 2. Conecta una fuente de datos
Desde Configuration → Data Sources, agrega Prometheus, InfluxDB o tu fuente preferida. Grafana soporta más de 30 fuentes nativas entre bases de datos, servicios cloud y sistemas de monitoreo.

### 3. Crea tu primer dashboard
Usa el explorador visual para construir queries sin escribir código. Agrega paneles de serie temporal, tablas, gauges y stats. Usa variables como $host o $env para hacer dashboards reutilizables.

### 4. Configura alertas
Define reglas de alerta desde los paneles. Configura canales de notificación por email, Slack, Telegram o PagerDuty. Grafana evalúa las reglas cada 10s por defecto y envía la alerta cuando se cumplen las condiciones.

## When to Use
- **Monitoreo de infraestructura y aplicaciones:** Para visualizar métricas de CPU, memoria, disco, redes, latencia de APIs, tasa de errores y cualquier métrica que exportes desde tus sistemas. Combínalo con Prometheus como fuente de datos principal.
- **Centralización de logs y trazas:** Con Loki para logs y Tempo para trazas distribuidas, Grafana unifica métricas, logs y trazas en una sola interfaz. Ideal para debugging de microservicios donde necesitas seguir el flujo completo de una petición.
- **Dashboards ejecutivos para stakeholders:** Para crear paneles visuales que muestren KPIs del negocio, SLA de servicios, uso de producto y métricas de crecimiento sin exponer complejidad técnica.

## Examples
### Dashboard de latencia de API por endpoint
```
// PromQL query para percentiles de latencia
histogram_quantile(0.99,
  sum(rate(http_request_duration_seconds_bucket[5m])) by (le, endpoint)
)
tput: "Panel de serie temporal mostrando el percentil 99 de latencia por endpoint HTTP. Permite identificar APIs lentas antes de que afecten a usuarios."
```

### Alerta de alta tasa de errores 5xx
```
// Regla de alerta en Grafana
ALERT HighErrorRate
  IF rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m]) > 0.05
  FOR 5m
  LABELS { severity = "critical" }
  ANNOTATIONS { summary = "Tasa de error superior al 5%" }
tput: "Dispara una alerta crítica si la tasa de errores 5xx supera el 5% durante más de 5 minutos consecutivos, notificando por Slack y email."
```

## Tips
- Usa dashboard provisioning con archivos YAML para versionar tus dashboards en Git. Almacena los JSON en repositorio y Grafana los carga automáticamente al iniciar.
- Aprovecha la biblioteca de dashboards comunitarios en grafana.com/dashboards antes de crear uno desde cero. Hay dashboards probados para Kubernetes, Node Exporter, PostgreSQL y cientos de sistemas más.
- Configura ojos de buey (Sampling de trazas) en producción solo en un porcentaje del tráfico (1-5%). Para debugging dirigido, activa muestreo al 100% por endpoint específico durante ventanas de tiempo limitadas.
- Usa folders para organizar dashboards por equipo (Frontend, Backend, DevOps) y asigna permisos por folder. Esto evita que equipos modifiquen dashboards de otros.

## FAQ
- **¿Grafana es gratis?** Grafana open source es completamente gratis. Grafana Enterprise añade soporte comercial, plugins premium, roles avanzados y reportes. Para equipos pequeños y startups, la versión open source es más que suficiente.
- **¿Qué fuente de datos me recomiendas empezar?** Prometheus es la combinación más popular con Grafana para métricas de infraestructura y aplicaciones. Si ya usas AWS, empieza con CloudWatch. Para logs, usa Loki que está diseñado por el mismo equipo de Grafana.
- **¿Grafana reemplaza a Datadog o New Relic?** Grafana stack (Grafana + Prometheus + Loki + Tempo) puede reemplazar a Datadog para la mayoría de casos, pero requiere configuración y mantenimiento propio. Datadog ofrece menor fricción inicial a cambio de costo por host.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://grafana.com
- **Source Code Issues:** Check the repository at https://github.com/grafana/grafana for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
