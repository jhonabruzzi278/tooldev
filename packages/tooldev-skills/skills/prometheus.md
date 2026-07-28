---
name: prometheus
description: >- Úsala cuando el usuario mencione o pregunte sobre monitoreo, métricas, alertas, series-temporales.
---

# Prometheus

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** observabilidad
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
>-

### 2. Configura targets de recolección
>-

### 3. Explora métricas con PromQL
>-

### 4. Configura reglas de alerta
>-

## When to Use
- **Monitoreo de infraestructura dinámica:** >-
- **Métricas de aplicación personalizadas:** >-
- **Alertas basadas en tendencias y ratios:** >-

## Examples
### Monitoreo de CPU por servidor
```
>
```
**Output:** >-

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
tput: >-
Predice el espacio libre en disco en 24 horas usando regresión lineal. Si
la proyección es negativa, alerta con 1 día de anticipación para que el
equipo actúe antes de que el disco se llene.
```

## Tips
- >-
- >-
- >-
- >-

## FAQ
- **¿Prometheus es mejor que InfluxDB?** >-
- **¿Prometheus soporta almacenamiento a largo plazo?** >-
- **¿Qué es un exportador?** >-

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://prometheus.io
- **Source Code Issues:** Check the repository at https://github.com/prometheus/prometheus for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
