---
name: Apache Kafka
description: Plataforma distribuida de streaming de eventos para pipelines de datos en tiempo real y aplicaciones de streaming.
category: backend
tags: [streaming, colas, eventos, mensajería, backend, big-data]
officialSite: https://kafka.apache.org
github: https://github.com/apache/kafka
pricing: open-source
openSource: true
license: Apache-2.0
technicalLevel: avanzado
compatibility: [macOS, Linux, Docker, Confluent Cloud]
featured: false
verified: true
features:
  - Publicación/suscripción a flujos de registros (topics)
  - Almacenamiento durable y replicado en disco
  - Escalado horizontal con particionamiento de topics
  - Procesamiento de streams con Kafka Streams y ksqlDB
  - "Garantías de entrega: at-least-once, exactly-once"
  - Retención configurable por tiempo o tamaño
  - Conectores pre-construidos (Kafka Connect) para bases de datos, S3, Elasticsearch
  - Compresión, batch y zero-copy para alto throughput
alternatives: [rabbitmq, redis-streams, nats, pulsar]
relatedTools: [zookeeper, kafka-connect, ksql, schema-registry, docker]
howToUse:
  - step: 1
    title: "Instala Kafka"
    description: "Descarga desde kafka.apache.org y ejecuta bin/zookeeper-server-start.sh (Kafka requiere Zookeeper o KRaft mode desde 2.8). Alternativa: docker compose con imagen confluentinc/cp-kafka."
  - step: 2
    title: "Crea un topic y produce mensajes"
    description: "Usa bin/kafka-topics.sh --create --topic pedidos --partitions 3 --replication-factor 1. Luego produce mensajes con bin/kafka-console-producer.sh --topic pedidos."
  - step: 3
    title: "Consume mensajes"
    description: "Usa bin/kafka-console-consumer.sh --topic pedidos --from-beginning. Cada consumidor en un grupo lee particiones distintas. Kafka trackea offsets por consumidor para reanudar desde donde quedó."
  - step: 4
    title: "Procesa streams con Kafka Streams"
    description: "Escribe procesadores en Java o con ksqlDB (SQL para streams). Ejemplo: SELECT usuario, COUNT(*) FROM clicks WINDOW TUMBLING (SIZE 1 HOUR) GROUP BY usuario para contar clics por hora."
whenToUse:
  - title: "Pipelines de datos en tiempo real entre sistemas"
    description: "Cuando necesitas mover datos entre múltiples sistemas (BD → Kafka → Elasticsearch → S3) con baja latencia y alta confiabilidad. Kafka actúa como cola central inmutable que desacopla productores y consumidores."
  - title: "Procesamiento de eventos y streams"
    description: "Para detectar patrones en tiempo real: fraude, alertas de monitoreo, personalización en vivo. Kafka Streams permite unir, filtrar y agregar eventos con ventanas temporales sin almacenamiento intermedio."
  - title: "Desacoplamiento de microservicios"
    description: "Cuando los microservicios necesitan comunicarse de forma asíncrona sin dependencias directas. Kafka garantiza que el mensaje no se pierda aunque el consumidor esté caído, reteniéndolo hasta que pueda procesarlo."
examples:
  - title: "Pipeline de datos con Kafka Connect"
    code: |
      # Source connector: PostgreSQL → Kafka
      POST /connectors {
        "name": "source-pedidos",
        "config": {
          "connector.class": "io.debezium.connector.postgresql.PostgresConnector",
          "database.hostname": "postgres",
          "database.dbname": "tienda",
          "table.include.list": "public.pedidos",
          "topic.prefix": "cdc-"
        }
      }
    output: "Captura cambios en la tabla pedidos de PostgreSQL y los publica en el topic cdc-pedidos en tiempo real. Debezium envía INSERT, UPDATE y DELETE como eventos JSON."
  - title: "Procesamiento con Kafka Streams (Java)"
    code: |
      KStream<String, String> clicks = builder.stream("clicks");
      clicks
        .groupBy((key, value) -> extractUserId(value))
        .windowedBy(TimeWindows.ofSizeWithNoGrace(Duration.ofMinutes(5)))
        .count()
        .toStream()
        .foreach((windowed, count) ->
          System.out.println("Usuario " + windowed.key() + ": " + count + " clics en 5min"));
    output: "Cuenta clics por usuario en ventanas de 5 minutos. Cada ventana captura actividad reciente. Kafka Streams maneja el estado local y la tolerancia a fallos automáticamente."
tips:
  - text: "Configura retention basada en tiempo (log.retention.hours=168) y tamaño (log.retention.bytes=-1). Kafka no está diseñado como almacenamiento a largo plazo. Usa S3 o HDFS para archivar datos históricos."
  - text: "Elige el número de particiones cuidadosamente: más particiones = mayor paralelismo pero más overhead. Regla general: particiones = max consumidores esperados * 2. No puedes reducir particiones después sin recrear el topic."
  - text: "Usa Schema Registry con Avro o Protobuf para evolucionar esquemas de mensajes sin romper consumidores. Schema Registry valida compatibilidad hacia adelante y atrás al publicar nuevos esquemas."
  - text: "Configura acks=all y min.insync.replicas=2 para exactly-once en producción. Esto garantiza que el mensaje se escriba en todas las réplicas antes de confirmar. El throughput baja pero ganas consistencia."
faq:
  - question: "¿Kafka vs RabbitMQ?"
    answer: "RabbitMQ es un message broker tradicional con colas inteligentes y routing flexible. Kafka es una plataforma de streaming con almacenamiento durable, replay de mensajes y alto throughput. RabbitMQ para comunicación entre servicios simple; Kafka para pipelines de datos masivos."
  - question: "¿Kafka necesita Zookeeper?"
    answer: "Desde Kafka 2.8, KRaft mode reemplaza Zookeeper progresivamente. Kafka 3.x+ puede operar sin Zookeeper usando el consenso Raft interno. KRaft simplifica la operación y elimina un punto de fallo."
  - question: "¿Qué tan rápido es Kafka?"
    answer: "Kafka maneja millones de mensajes por segundo en un cluster modesto. Su throughput está limitado por disco y red, no por CPU. Con compresión y batch, un cluster de 3 nodos puede procesar ~1 GB/s. Latencia típica: ~10ms."
  - question: "¿Puedo perder mensajes con Kafka?"
    answer: "Con acks=all y replicación mínima 2, Kafka garantiza zero message loss mientras al menos una réplica esté viva. Kafka replica mensajes entre brokers y mantiene ISR (In-Sync Replicas) para detectar nodos caídos."
publishedAt: 2026-06-01
---

## ¿Qué es?

Apache Kafka es una plataforma distribuida de streaming de eventos de código abierto. Originalmente creada en LinkedIn, ahora es el estándar de la industria para construir pipelines de datos en tiempo real y aplicaciones de streaming.

## ¿Para qué sirve?

Kafka sirve para publicar, almacenar, procesar y suscribirse a flujos de eventos en tiempo real. Es la columna vertebral para pipelines de datos, desacoplamiento de microservicios, procesamiento de streams, captura de cambios en bases de datos (CDC) y análisis en tiempo real.

## Cuándo usarla

- Para pipelines de datos en tiempo real entre microservicios.
- Para captura de cambios en bases de datos (CDC) con Debezium.
- Para procesamiento de streams de eventos a gran escala.
- Para sistemas de mensajería con alta throughput.
- Para almacenar y reproducir eventos (event sourcing).

## Cuándo NO usarla

- Para comunicación request/response síncrona (usa HTTP/gRPC).
- Para colas de tareas simples con pocos mensajes (Redis o RabbitMQ).
- Cuando el equipo no tiene experiencia operando sistemas distribuidos.
- Para datos que requieren baja latencia < 5ms (Kafka opera en ~10ms).

## Pros

- Throughput masivo: millones de msg/s.
- Almacenamiento durable con replay de eventos.
- Escalado horizontal lineal.
- Ecosistema rico: Kafka Connect, Streams, ksqlDB, Schema Registry.
- Exactly-once semantics.

## Contras

- Operación compleja (requiere expertise).
- Latencia ~10ms (no apto para baja latencia extrema).
- No es un message broker tradicional (no tiene colas con ACK).
- Consumo alto de recursos (disco, red, RAM).

## CLI

```bash
bin/kafka-topics.sh --create --topic mi-topic --partitions 3 --replication-factor 1
bin/kafka-console-producer.sh --topic mi-topic
bin/kafka-console-consumer.sh --topic mi-topic --from-beginning
bin/kafka-consumer-groups.sh --group mi-grupo --describe
```
