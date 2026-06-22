---
name: elasticsearch
description: Motor de búsqueda y análisis distribuido basado en Lucene para datos estructurados, no estructurados, logs y búsqueda全文. Úsala cuando el usuario mencione o pregunte sobre búsqueda, análisis, logs, lucene.
---

# Elasticsearch

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** backend
- **Pricing:** open-source
- **License:** Elastic License 2.0
- **Technical Level:** avanzado
- **Compatibility:** macOS, Linux, Windows, Docker
- **Official Site:** https://elastic.co/elasticsearch
- **GitHub:** https://github.com/elastic/elasticsearch
- **Alternatives:** meilisearch, typesense, algolia, solr

## Features
- Búsqueda全文 con análisis de lenguaje natural en múltiples idiomas
- Indexación invertida para búsquedas de baja latencia
- Agregaciones en tiempo real para análisis de datos
- Escalado horizontal con sharding y replicación automática
- Soporte para datos geoespaciales con queries de distancia
- API RESTful con JSON como formato nativo
- Integración con Logstash y Kibana (ELK Stack)
- Machine Learning para detección de anomalías

## Steps
### 1. Instala Elasticsearch
Descarga desde elastic.co o usa docker run -p 9200:9200 docker.elastic.co/elasticsearch/elasticsearch. En producción usa el operador oficial de Elastic para Kubernetes o el servicio Elastic Cloud.

### 2. Indexa documentos
Envía documentos JSON via API REST: POST /productos/_doc/ { título, descripción, precio }. Elasticsearch los indexa automáticamente y están disponibles para búsqueda en ~1 segundo.

### 3. Ejecuta búsquedas
Usa GET /productos/_search con query body para búsqueda全文, filtros y agregaciones. El motor scoring de Lucene ordena resultados por relevancia usando TF-IDF y BM25.

### 4. Escala para producción
Configura índices con múltiples shards primarios y de réplica. Usa ILM (Index Lifecycle Management) para rotar índices y optimizar almacenamiento. Monitorea con Elastic APM y Kibana.

## When to Use
- **Búsqueda全文 para aplicaciones:** Para agregar búsqueda rápida y relevante en e-commerce, documentación, blogs o cualquier catálogo. Elasticsearch entiende tildes, sinónimos, prefijos y errores tipográficos.
- **Centralización y análisis de logs:** Como parte del ELK Stack para recolectar, procesar y visualizar logs de servidores, aplicaciones y servicios. Ideal para debugging y monitoreo de sistemas distribuidos.
- **Análisis en tiempo real de datos estructurados:** Para agregaciones rápidas sobre millones de documentos: ventas por hora, usuarios activos por región, latencia promedio por servicio. Elasticsearch responde en milisegundos sin pre-agregar.

## Examples
### Búsqueda全文 con filtros y scoring
```
GET /productos/_search
{
  "query": {
    "bool": {
      "must": { "match": { "título": "laptop gaming" } },
      "filter": [
        { "term": { "categoría": "electrónica" } },
        { "range": { "precio": { "gte": 500, "lte": 3000 } } }
      ]
    }
  },
  "aggs": {
    "por_marca": { "terms": { "field": "marca" } }
  }
}
tput: "Devuelve laptops gaming entre $500 y $3000 ordenadas por relevancia, con un agregado de cuántas hay por marca."
```

### Análisis de logs con agregación temporal
```
GET /logs-nginx/_search
{
  "size": 0,
  "aggs": {
    "errores_por_hora": {
      "date_histogram": { "field": "@timestamp", "interval": "hour" },
      "aggs": {
        "top_endpoints": {
          "terms": { "field": "endpoint.keyword", "size": 5 }
        }
      }
    }
  }
}
tput: "Agrupa errores HTTP por hora y muestra los 5 endpoints con más errores en cada ventana de tiempo."
```

## Tips
- Define mapeos explícitos para tus índices en lugar de dejar que Elasticsearch los infiera. Un mapeo incorrecto puede causar resultados de búsqueda pobres y no se puede cambiar sin reindexar.
- Usa índices basados en tiempo (logs-2026-06) con ILM para rotar automáticamente: shards calientes en SSD, tibios en HDD y fríos eliminados después de N días. Reduce costos drásticamente.
- Monitorea el heap de JVM: Elasticsearch funciona mejor con 50% de RAM para heap y 50% para el sistema operativo (file system cache). Nunca configures heap por encima de 32GB (compresión de punteros).
- Para búsqueda en español, configura el analyzer con stemmer español, stop words y synonyms para mejorar la relevancia. Sin analyzer, búsqueda de 'corriendo' no encontraría 'correr'.

## FAQ
- **¿Elasticsearch es gratis?** Elasticsearch es open source con licencia Elastic License 2.0. Incluye todas las funcionalidades básicas de búsqueda y análisis. Las características avanzadas como Machine Learning, seguridad y alertas requieren suscripción Elastic (parte del stack gratis en despliegues pequeños).
- **¿Cuándo usar Elasticsearch vs PostgreSQL?** Elasticsearch para búsqueda全文 y análisis en tiempo real sobre grandes volúmenes de datos no estructurados. PostgreSQL para datos relacionales con integridad transaccional. Se complementan: PostgreSQL como fuente de verdad, Elasticsearch para búsqueda.
- **¿Qué diferencia hay entre Elasticsearch y Meilisearch?** Elasticsearch es más potente y flexible: agregaciones, geo, ML, cluster multi-nodo. Meilisearch es más simple y rápido de configurar con buenos defaults, ideal para búsqueda en proyectos más pequeños. Elasticsearch requiere más expertise operacional.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://elastic.co/elasticsearch
- **Source Code Issues:** Check the repository at https://github.com/elastic/elasticsearch for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
