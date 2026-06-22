---
name: prometheus
description: Sistema de monitoreo y alerta open source con modelo de datos basado en series temporales y consultas PromQL. Úsala cuando el usuario mencione o pregunte sobre monitoreo, métricas, alertas, series-temporales.
---

# Prometheus

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** devops
- **Pricing:** open-source
- **License:** Apache-2.0
- **Technical Level:** intermedio
- **Compatibility:** macOS, Linux, Docker
- **Official Site:** https://prometheus.io
- **GitHub:** https://github.com/prometheus/prometheus
- **Alternatives:** influxdb, datadog, victoria-metrics

## Features
- Modelo de datos multi-dimensional con etiquetas
- PromQL para consultas flexibles de series temporales
- Recolección pull por HTTP con exportadores
- Alertmanager para deduplicación, agrupación y enrutamiento
- Auto-descubrimiento de targets (Kubernetes, Consul, DNS, EC2)
- Almacenamiento local eficiente con compresión
- Integración nativa con Grafana
- Exportadores oficiales para cientos de sistemas

## Steps
### 1. Instala Prometheus
Descarga el binario desde prometheus.io/download o usa docker run -p 9090:9090 prom/prometheus. La configuración principal vive en prometheus.yml donde defines los targets a scrape.

### 2. Configura targets de recolección
Agrega job_name y targets en prometheus.yml. Para monitorear el servidor local usa node_exporter (puerto 9100). Prometheus scrapea cada target en intervalos configurables (default 15s).

### 3. Explora métricas con PromQL
Usa la interfaz web en http://localhost:9090/graph para escribir consultas PromQL. Prueba rate(node_cpu_seconds_total[5m]) para ver uso de CPU o up para ver el estado de todos los targets.

### 4. Configura reglas de alerta
Crea un archivo de reglas con grupos de alertas. Prometheus evalúa las reglas periódicamente y envía alerts firing/resolved a Alertmanager, que las enruta a Slack, email, PagerDuty o cualquier webhook.

## When to Use
- **Monitoreo de infraestructura dinámica:** Para entornos Kubernetes, cloud auto-scaling o cualquier infraestructura donde los servidores aparecen y desaparecen. Prometheus descubre targets automáticamente y no requiere configurar IPs manualmente.
- **Métricas de aplicación personalizadas:** Cuando necesitas instrumentar tu código con métricas de negocio (usuarios activos, pedidos por minuto, latencia por endpoint). Las client libraries de Prometheus permiten exportar métricas desde casi cualquier lenguaje.
- **Alertas basadas en tendencias y ratios:** Para alertas complejas como 'tasa de error > 5% en los últimos 5 minutos' o 'disco se llenará en 24 horas'. PromQL permite expresar estas condiciones de forma precisa sin falsos positivos.

## Examples
### Monitoreo de CPU por servidor
```
# PromQL: Uso de CPU por modo en los últimos 5 minutos
avg by (instance, mode)(rate(node_cpu_seconds_total{mode!="idle"}[5m])) * 100
tput: "Muestra el porcentaje de CPU usado por instancia y modo (user, system, iowait). Permite identificar servidores con CPU saturada o procesos haciendo I/O excesivo."
```

### Alerta de disco próximo a llenarse
```
# Regla de alerta
groups:
  - name: disk
    rules:
      - alert: DiskWillFillIn24Hours
        expr: predict_linear(node_filesystem_free_bytes{mountpoint="/"}[6h], 86400) < 0
        for: 1h
        labels: { severity: warning }
tput: "Predice el espacio libre en disco en 24 horas usando regresión lineal. Si la proyección es negativa, alerta con 1 día de anticipación para que el equipo actúe antes de que el disco se llene."
```

## Tips
- Usa recording rules para consultas pesadas que se usan en múltiples dashboards. Prometheus precalcula la consulta cada N segundos y la almacena como una serie temporal, reduciendo la carga en producción.
- Configura retention y tamaño máximo de almacenamiento con --storage.tsdb.retention.time=15d y --storage.tsdb.max-block-duration para evitar que Prometheus consuma todo el disco.
- Monitorea Prometheus con Prometheus: configura un job que scrapee su propio endpoint /metrics. Usa dashboards como 'Prometheus 2.0 Stats' de la comunidad de Grafana.
- Para alta disponibilidad, ejecuta dos instancias de Prometheus con la misma configuración. Prometheus no tiene clustering nativo; la estrategia recomendada es ejecutar réplicas idénticas y consultar cualquiera.

## FAQ
- **¿Prometheus es mejor que InfluxDB?** Son diferentes. Prometheus está diseñado para monitoreo de infraestructura con modelo pull, etiquetas multi-dimensionales y PromQL. InfluxDB es más general con modelo push y SQL-like. Prometheus es el estándar para Kubernetes y cloud nativo.
- **¿Prometheus soporta almacenamiento a largo plazo?** Prometheus está diseñado para datos de corto/mediano plazo (semanas o meses). Para retención de años, usa almacenamiento remoto como Thanos, Cortex o VictoriaMetrics que extienden Prometheus con almacenamiento en object storage.
- **¿Qué es un exportador?** Un exportador es un pequeño servicio que recolecta métricas de un sistema y las expone en formato Prometheus. Hay exportadores oficiales para Linux, MySQL, PostgreSQL, Nginx, Redis, Docker y cientos más. La mayoría son proyectos open source.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://prometheus.io
- **Source Code Issues:** Check the repository at https://github.com/prometheus/prometheus for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
