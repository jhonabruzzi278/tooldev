---
name: Elasticsearch
description: Motor de búsqueda y análisis distribuido basado en Lucene para datos estructurados, no estructurados, logs y búsqueda.
category: backend
tags: [búsqueda, análisis, logs, lucene, backend, open-source]
officialSite: https://elastic.co/elasticsearch
github: https://github.com/elastic/elasticsearch
pricing: open-source
openSource: true
license: Elastic License 2.0
technicalLevel: avanzado
compatibility: [macOS, Linux, Windows, Docker]
featured: false
verified: true
features:
  - Búsqueda con análisis de lenguaje natural en múltiples idiomas
  - Indexación invertida para búsquedas de baja latencia
  - Agregaciones en tiempo real para análisis de datos
  - Escalado horizontal con sharding y replicación automática
  - Soporte para datos geoespaciales con queries de distancia
  - API RESTful con JSON como formato nativo
  - Integración con Logstash y Kibana (ELK Stack)
  - Machine Learning para detección de anomalías
alternatives: [meilisearch, typesense, algolia, solr]
relatedTools: [kibana, logstash, grafana, loki]
howToUse:
  - step: 1
    title: "Instala Elasticsearch"
    description: "Descarga desde elastic.co o usa docker run -p 9200:9200 docker.elastic.co/elasticsearch/elasticsearch. En producción usa el operador oficial de Elastic para Kubernetes o el servicio Elastic Cloud."
  - step: 2
    title: "Indexa documentos"
    description: "Envía documentos JSON via API REST: POST /productos/_doc/ { título, descripción, precio }. Elasticsearch los indexa automáticamente y están disponibles para búsqueda en ~1 segundo."
  - step: 3
    title: "Ejecuta búsquedas"
    description: "Usa GET /productos/_search con query body para búsqueda, filtros y agregaciones. El motor scoring de Lucene ordena resultados por relevancia usando TF-IDF y BM25."
  - step: 4
    title: "Escala para producción"
    description: "Configura índices con múltiples shards primarios y de réplica. Usa ILM (Index Lifecycle Management) para rotar índices y optimizar almacenamiento. Monitorea con Elastic APM y Kibana."
whenToUse:
  - title: "Búsqueda para aplicaciones"
    description: "Para agregar búsqueda rápida y relevante en e-commerce, documentación, blogs o cualquier catálogo. Elasticsearch entiende tildes, sinónimos, prefijos y errores tipográficos."
  - title: "Centralización y análisis de logs"
    description: "Como parte del ELK Stack para recolectar, procesar y visualizar logs de servidores, aplicaciones y servicios. Ideal para debugging y monitoreo de sistemas distribuidos."
  - title: "Análisis en tiempo real de datos estructurados"
    description: "Para agregaciones rápidas sobre millones de documentos: ventas por hora, usuarios activos por región, latencia promedio por servicio. Elasticsearch responde en milisegundos sin pre-agregar."
examples:
  - title: "Búsqueda con filtros y scoring"
    code: |
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
    output: "Devuelve laptops gaming entre $500 y $3000 ordenadas por relevancia, con un agregado de cuántas hay por marca."
  - title: "Análisis de logs con agregación temporal"
    code: |
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
    output: "Agrupa errores HTTP por hora y muestra los 5 endpoints con más errores en cada ventana de tiempo."
tips:
  - text: "Define mapeos explícitos para tus índices en lugar de dejar que Elasticsearch los infiera. Un mapeo incorrecto puede causar resultados de búsqueda pobres y no se puede cambiar sin reindexar."
  - text: "Usa índices basados en tiempo (logs-2026-06) con ILM para rotar automáticamente: shards calientes en SSD, tibios en HDD y fríos eliminados después de N días. Reduce costos drásticamente."
  - text: "Monitorea el heap de JVM: Elasticsearch funciona mejor con 50% de RAM para heap y 50% para el sistema operativo (file system cache). Nunca configures heap por encima de 32GB (compresión de punteros)."
  - text: "Para búsqueda en español, configura el analyzer con stemmer español, stop words y synonyms para mejorar la relevancia. Sin analyzer, búsqueda de 'corriendo' no encontraría 'correr'."
faq:
  - question: "¿Elasticsearch es gratis?"
    answer: "Elasticsearch es open source con licencia Elastic License 2.0. Incluye todas las funcionalidades básicas de búsqueda y análisis. Las características avanzadas como Machine Learning, seguridad y alertas requieren suscripción Elastic (parte del stack gratis en despliegues pequeños)."
  - question: "¿Cuándo usar Elasticsearch vs PostgreSQL?"
    answer: "Elasticsearch para búsqueda y análisis en tiempo real sobre grandes volúmenes de datos no estructurados. PostgreSQL para datos relacionales con integridad transaccional. Se complementan: PostgreSQL como fuente de verdad, Elasticsearch para búsqueda."
  - question: "¿Qué diferencia hay entre Elasticsearch y Meilisearch?"
    answer: "Elasticsearch es más potente y flexible: agregaciones, geo, ML, cluster multi-nodo. Meilisearch es más simple y rápido de configurar con buenos defaults, ideal para búsqueda en proyectos más pequeños. Elasticsearch requiere más expertise operacional."
publishedAt: 2026-06-01
---

## ¿Qué es?

Elasticsearch es un motor de búsqueda y análisis distribuido construido sobre Apache Lucene. Permite almacenar, buscar y analizar grandes volúmenes de datos en tiempo real con una API RESTful. Es el corazón del ELK Stack (Elasticsearch, Logstash, Kibana).

## ¿Para qué sirve?

Elasticsearch sirve para búsqueda en aplicaciones (e-commerce, documentación, SaaS), centralización de logs y métricas, análisis en tiempo real de datos estructurados, y detección de anomalías con machine learning.

## Cuándo usarla

- Para agregar búsqueda rápida y relevante a tu aplicación.
- Para centralizar logs de múltiples servidores y servicios.
- Cuando necesitas análisis en tiempo real de datos.
- Para búsqueda geoespacial.
- Si trabajas con datos no estructurados que necesitas consultar flexiblemente.

## Cuándo NO usarla

- Como base de datos principal transaccional (usa PostgreSQL).
- Para almacenamiento clave-valor simple (Redis).
- Para proyectos pequeños donde Meilisearch o Typesense son suficientes.
- Cuando los datos son puramente relacionales sin necesidad de búsqueda.

## Pros

- Búsqueda ultra rápida con scoring BM25.
- Escalado horizontal casi lineal.
- API RESTful sencilla.
- Ecosistema ELK completo para logs.
- Agregaciones potentes en tiempo real.

## Contras

- Operación compleja: JVM tuning, sharding, rebalanceo.
- Consumo alto de RAM.
- No es una base de datos transaccional.
- La licencia Elastic License tiene restricciones.

## CLI

```bash
curl -X GET "localhost:9200/"                    # Ver estado del cluster
curl -X PUT "localhost:9200/mi-indice"           # Crear índice
curl -X POST "localhost:9200/mi-indice/_doc"    # Indexar documento
curl -X GET "localhost:9200/mi-indice/_search"  # Buscar
```
