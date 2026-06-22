---
name: Prometheus
description: Sistema de monitoreo y alerta open source con modelo de datos basado en series temporales y consultas PromQL.
category: devops
tags: [monitoreo, métricas, alertas, series-temporales, devops, open-source]
officialSite: https://prometheus.io
github: https://github.com/prometheus/prometheus
pricing: open-source
openSource: true
license: Apache-2.0
technicalLevel: intermedio
compatibility: [macOS, Linux, Docker]
featured: false
verified: true
features:
  - Modelo de datos multi-dimensional con etiquetas
  - PromQL para consultas flexibles de series temporales
  - Recolección pull por HTTP con exportadores
  - Alertmanager para deduplicación, agrupación y enrutamiento
  - Auto-descubrimiento de targets (Kubernetes, Consul, DNS, EC2)
  - Almacenamiento local eficiente con compresión
  - Integración nativa con Grafana
  - Exportadores oficiales para cientos de sistemas
alternatives: [influxdb, datadog, victoria-metrics]
relatedTools: [grafana, loki, alertmanager, node-exporter]
howToUse:
  - step: 1
    title: "Instala Prometheus"
    description: "Descarga el binario desde prometheus.io/download o usa docker run -p 9090:9090 prom/prometheus. La configuración principal vive en prometheus.yml donde defines los targets a scrape."
  - step: 2
    title: "Configura targets de recolección"
    description: "Agrega job_name y targets en prometheus.yml. Para monitorear el servidor local usa node_exporter (puerto 9100). Prometheus scrapea cada target en intervalos configurables (default 15s)."
  - step: 3
    title: "Explora métricas con PromQL"
    description: "Usa la interfaz web en http://localhost:9090/graph para escribir consultas PromQL. Prueba rate(node_cpu_seconds_total[5m]) para ver uso de CPU o up para ver el estado de todos los targets."
  - step: 4
    title: "Configura reglas de alerta"
    description: "Crea un archivo de reglas con grupos de alertas. Prometheus evalúa las reglas periódicamente y envía alerts firing/resolved a Alertmanager, que las enruta a Slack, email, PagerDuty o cualquier webhook."
whenToUse:
  - title: "Monitoreo de infraestructura dinámica"
    description: "Para entornos Kubernetes, cloud auto-scaling o cualquier infraestructura donde los servidores aparecen y desaparecen. Prometheus descubre targets automáticamente y no requiere configurar IPs manualmente."
  - title: "Métricas de aplicación personalizadas"
    description: "Cuando necesitas instrumentar tu código con métricas de negocio (usuarios activos, pedidos por minuto, latencia por endpoint). Las client libraries de Prometheus permiten exportar métricas desde casi cualquier lenguaje."
  - title: "Alertas basadas en tendencias y ratios"
    description: "Para alertas complejas como 'tasa de error > 5% en los últimos 5 minutos' o 'disco se llenará en 24 horas'. PromQL permite expresar estas condiciones de forma precisa sin falsos positivos."
examples:
  - title: "Monitoreo de CPU por servidor"
    code: |
      # PromQL: Uso de CPU por modo en los últimos 5 minutos
      avg by (instance, mode)(rate(node_cpu_seconds_total{mode!="idle"}[5m])) * 100
    output: "Muestra el porcentaje de CPU usado por instancia y modo (user, system, iowait). Permite identificar servidores con CPU saturada o procesos haciendo I/O excesivo."
  - title: "Alerta de disco próximo a llenarse"
    code: |
      # Regla de alerta
      groups:
        - name: disk
          rules:
            - alert: DiskWillFillIn24Hours
              expr: predict_linear(node_filesystem_free_bytes{mountpoint="/"}[6h], 86400) < 0
              for: 1h
              labels: { severity: warning }
    output: "Predice el espacio libre en disco en 24 horas usando regresión lineal. Si la proyección es negativa, alerta con 1 día de anticipación para que el equipo actúe antes de que el disco se llene."
tips:
  - text: "Usa recording rules para consultas pesadas que se usan en múltiples dashboards. Prometheus precalcula la consulta cada N segundos y la almacena como una serie temporal, reduciendo la carga en producción."
  - text: "Configura retention y tamaño máximo de almacenamiento con --storage.tsdb.retention.time=15d y --storage.tsdb.max-block-duration para evitar que Prometheus consuma todo el disco."
  - text: "Monitorea Prometheus con Prometheus: configura un job que scrapee su propio endpoint /metrics. Usa dashboards como 'Prometheus 2.0 Stats' de la comunidad de Grafana."
  - text: "Para alta disponibilidad, ejecuta dos instancias de Prometheus con la misma configuración. Prometheus no tiene clustering nativo; la estrategia recomendada es ejecutar réplicas idénticas y consultar cualquiera."
faq:
  - question: "¿Prometheus es mejor que InfluxDB?"
    answer: "Son diferentes. Prometheus está diseñado para monitoreo de infraestructura con modelo pull, etiquetas multi-dimensionales y PromQL. InfluxDB es más general con modelo push y SQL-like. Prometheus es el estándar para Kubernetes y cloud nativo."
  - question: "¿Prometheus soporta almacenamiento a largo plazo?"
    answer: "Prometheus está diseñado para datos de corto/mediano plazo (semanas o meses). Para retención de años, usa almacenamiento remoto como Thanos, Cortex o VictoriaMetrics que extienden Prometheus con almacenamiento en object storage."
  - question: "¿Qué es un exportador?"
    answer: "Un exportador es un pequeño servicio que recolecta métricas de un sistema y las expone en formato Prometheus. Hay exportadores oficiales para Linux, MySQL, PostgreSQL, Nginx, Redis, Docker y cientos más. La mayoría son proyectos open source."
publishedAt: 2026-06-01
---

## ¿Qué es?

Prometheus es un sistema de monitoreo open source originalmente creado en SoundCloud y ahora parte de CNCF. Es el estándar de facto para monitoreo en el ecosistema Kubernetes y cloud nativo, con un modelo de datos basado en series temporales etiquetadas.

## ¿Para qué sirve?

Prometheus sirve para recolectar, almacenar y consultar métricas de infraestructura y aplicaciones. Es la columna vertebral del stack de monitoreo moderno, alimentando dashboards en Grafana y disparando alertas cuando algo falla.

## Cuándo usarla

- Para monitorear infraestructura Kubernetes.
- Cuando necesitas un sistema de métricas open source probado.
- Para instrumentar aplicaciones con métricas personalizadas.
- Si necesitas alertas precisas basadas en tendencias.
- Como fuente de datos principal de Grafana.

## Cuándo NO usarla

- Para eventos o logs no estructurados (usa Loki o Elasticsearch).
- Para datos financieros con alta precisión decimal.
- Cuando necesitas almacenamiento de métricas a largo plazo sin configurar Thanos/Cortex.
- Si prefieres un modelo push sobre pull (InfluxDB o Graphite).

## Pros

- Estándar de facto en cloud nativo (CNCF graduated).
- PromQL es expresivo y eficiente para consultas de monitoreo.
- Auto-descubrimiento nativo para Kubernetes y cloud.
- Ecosistema enorme de exportadores.
- Integración perfecta con Grafana.

## Contras

- No tiene clustering nativo (HA requiere réplicas).
- Almacenamiento a largo plazo requiere componentes adicionales.
- Curva de aprendizaje de PromQL.
- Mayor consumo de recursos que soluciones SaaS ligeras.

## CLI

```bash
prometheus --config.file=prometheus.yml   # Iniciar con configuración
promtool check rules rules.yml            # Validar reglas de alerta
promtool check config prometheus.yml      # Validar configuración
curl http://localhost:9090/api/v1/query?query=up  # Consultar API
```
