---
name: Grafana
description: Plataforma open source de observabilidad y dashboards para métricas, logs y trazas con soporte para múltiples fuentes de datos.
category: devops
tags: [monitoreo, dashboards, métricas, observabilidad, devops, open-source]
officialSite: https://grafana.com
github: https://github.com/grafana/grafana
pricing: open-source
openSource: true
license: AGPL-3.0
technicalLevel: intermedio
compatibility: [Web, Docker, macOS, Linux, Windows]
featured: false
verified: true
features:
  - Dashboards interactivos con paneles personalizables
  - Múltiples fuentes de datos (Prometheus, InfluxDB, Elasticsearch, CloudWatch, SQL)
  - Alertas integradas con notificaciones por Slack, email, PagerDuty
  - Exploración ad-hoc de métricas con consultas visuales
  - Anotaciones para correlacionar eventos con cambios en métricas
  - Paneles dinámicos con variables y templates
  - Soporte para Loki (logs) y Tempo (trazas)
  - Biblioteca de dashboards comunitarios en grafana.com/dashboards
alternatives: [kibana, datadog, new-relic]
relatedTools: [prometheus, loki, tempo, influxdb]
howToUse:
  - step: 1
    title: "Instala Grafana"
    description: "Usa apt install grafana (Linux), brew install grafana (macOS) o docker run -p 3000:3000 grafana/grafana. En producción usa las versiones enterprise con soporte extendido."
  - step: 2
    title: "Conecta una fuente de datos"
    description: "Desde Configuration → Data Sources, agrega Prometheus, InfluxDB o tu fuente preferida. Grafana soporta más de 30 fuentes nativas entre bases de datos, servicios cloud y sistemas de monitoreo."
  - step: 3
    title: "Crea tu primer dashboard"
    description: "Usa el explorador visual para construir queries sin escribir código. Agrega paneles de serie temporal, tablas, gauges y stats. Usa variables como $host o $env para hacer dashboards reutilizables."
  - step: 4
    title: "Configura alertas"
    description: "Define reglas de alerta desde los paneles. Configura canales de notificación por email, Slack, Telegram o PagerDuty. Grafana evalúa las reglas cada 10s por defecto y envía la alerta cuando se cumplen las condiciones."
whenToUse:
  - title: "Monitoreo de infraestructura y aplicaciones"
    description: "Para visualizar métricas de CPU, memoria, disco, redes, latencia de APIs, tasa de errores y cualquier métrica que exportes desde tus sistemas. Combínalo con Prometheus como fuente de datos principal."
  - title: "Centralización de logs y trazas"
    description: "Con Loki para logs y Tempo para trazas distribuidas, Grafana unifica métricas, logs y trazas en una sola interfaz. Ideal para debugging de microservicios donde necesitas seguir el flujo completo de una petición."
  - title: "Dashboards ejecutivos para stakeholders"
    description: "Para crear paneles visuales que muestren KPIs del negocio, SLA de servicios, uso de producto y métricas de crecimiento sin exponer complejidad técnica."
examples:
  - title: "Dashboard de latencia de API por endpoint"
    code: |
      // PromQL query para percentiles de latencia
      histogram_quantile(0.99,
        sum(rate(http_request_duration_seconds_bucket[5m])) by (le, endpoint)
      )
    output: "Panel de serie temporal mostrando el percentil 99 de latencia por endpoint HTTP. Permite identificar APIs lentas antes de que afecten a usuarios."
  - title: "Alerta de alta tasa de errores 5xx"
    code: |
      // Regla de alerta en Grafana
      ALERT HighErrorRate
        IF rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m]) > 0.05
        FOR 5m
        LABELS { severity = "critical" }
        ANNOTATIONS { summary = "Tasa de error superior al 5%" }
    output: "Dispara una alerta crítica si la tasa de errores 5xx supera el 5% durante más de 5 minutos consecutivos, notificando por Slack y email."
tips:
  - text: "Usa dashboard provisioning con archivos YAML para versionar tus dashboards en Git. Almacena los JSON en repositorio y Grafana los carga automáticamente al iniciar."
  - text: "Aprovecha la biblioteca de dashboards comunitarios en grafana.com/dashboards antes de crear uno desde cero. Hay dashboards probados para Kubernetes, Node Exporter, PostgreSQL y cientos de sistemas más."
  - text: "Configura ojos de buey (Sampling de trazas) en producción solo en un porcentaje del tráfico (1-5%). Para debugging dirigido, activa muestreo al 100% por endpoint específico durante ventanas de tiempo limitadas."
  - text: "Usa folders para organizar dashboards por equipo (Frontend, Backend, DevOps) y asigna permisos por folder. Esto evita que equipos modifiquen dashboards de otros."
faq:
  - question: "¿Grafana es gratis?"
    answer: "Grafana open source es completamente gratis. Grafana Enterprise añade soporte comercial, plugins premium, roles avanzados y reportes. Para equipos pequeños y startups, la versión open source es más que suficiente."
  - question: "¿Qué fuente de datos me recomiendas empezar?"
    answer: "Prometheus es la combinación más popular con Grafana para métricas de infraestructura y aplicaciones. Si ya usas AWS, empieza con CloudWatch. Para logs, usa Loki que está diseñado por el mismo equipo de Grafana."
  - question: "¿Grafana reemplaza a Datadog o New Relic?"
    answer: "Grafana stack (Grafana + Prometheus + Loki + Tempo) puede reemplazar a Datadog para la mayoría de casos, pero requiere configuración y mantenimiento propio. Datadog ofrece menor fricción inicial a cambio de costo por host."
publishedAt: 2026-06-01
---

## ¿Qué es?

Grafana es la plataforma de observabilidad open source más popular. Permite crear dashboards interactivos, configurar alertas y explorar métricas, logs y trazas desde una interfaz web unificada con soporte para decenas de fuentes de datos.

## ¿Para qué sirve?

Grafana sirve para monitorear cualquier sistema que produzca métricas: servidores, bases de datos, APIs, aplicaciones, dispositivos IoT. Es el estándar de facto para visualización de métricas en infraestructura moderna, usado por empresas como Uber, PayPal y eBay.

## Cuándo usarla

- Para crear dashboards de monitoreo de infraestructura y apps.
- Cuando necesitas alertas basadas en métricas con múltiples canales de notificación.
- Para centralizar métricas, logs y trazas en una sola interfaz.
- Si buscas una alternativa open source a Datadog o New Relic.
- Para compartir dashboards con stakeholders no técnicos.

## Cuándo NO usarla

- Para monitoreo simple de un solo servidor (netdata o htop basta).
- Si necesitas APM automático sin configuración (Datadog es más plug-and-play).
- Cuando no tienes fuentes de datos para conectar (Grafana sin datos es una interfaz vacía).
- Para logging sin estructura (Loki requiere logs estructurados).

## Pros

- Open source sin límites de métricas ni usuarios.
- Soporte para 30+ fuentes de datos nativas.
- Alertas flexibles con múltiples canales.
- Comunidad activa y dashboards compartidos.
- Interfaz visual rápida y moderna.

## Contras

- La curva de aprendizaje inicial para queries complejas.
- Sin APM automático (requiere instrumentación manual).
- Escalar Prometheus puede ser complejo.
- La versión enterprise tiene funcionalidades que algunos equipos necesitan.

## CLI

```bash
grafana-server                          # Iniciar servidor
grafana-cli plugins install grafana-piechart-panel  # Instalar plugin
```
