---
name: elasticsearch
description: >- Úsala cuando el usuario mencione o pregunte sobre búsqueda, análisis, logs, lucene.
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
- Búsqueda con análisis de lenguaje natural en múltiples idiomas
- Indexación invertida para búsquedas de baja latencia
- Agregaciones en tiempo real para análisis de datos
- Escalado horizontal con sharding y replicación automática
- Soporte para datos geoespaciales con queries de distancia
- API RESTful con JSON como formato nativo
- Integración con Logstash y Kibana (ELK Stack)
- Machine Learning para detección de anomalías

## Steps
### 1. Instala Elasticsearch
>-

### 2. Indexa documentos
>-

### 3. Ejecuta búsquedas
>-

### 4. Escala para producción
>-

## When to Use
- **Búsqueda para aplicaciones:** >-
- **Centralización y análisis de logs:** >-
- **Análisis en tiempo real de datos estructurados:** >-

## Examples
### Búsqueda con filtros y scoring
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
tput: >-
Devuelve laptops gaming entre $500 y $3000 ordenadas por relevancia, con
un agregado de cuántas hay por marca.
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
tput: >-
Agrupa errores HTTP por hora y muestra los 5 endpoints con más errores en
cada ventana de tiempo.
```

## Tips
- >-
- >-
- >-
- >-

## FAQ
- **¿Elasticsearch es gratis?** >-
- **¿Cuándo usar Elasticsearch vs PostgreSQL?** >-
- **¿Qué diferencia hay entre Elasticsearch y Meilisearch?** >-

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://elastic.co/elasticsearch
- **Source Code Issues:** Check the repository at https://github.com/elastic/elasticsearch for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
