---
name: apache-kafka
description: Plataforma distribuida de streaming de eventos para pipelines de datos en tiempo real y aplicaciones de streaming. Úsala cuando el usuario mencione o pregunte sobre streaming, colas, eventos, mensajería.
---

# Apache Kafka

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** backend
- **Pricing:** open-source
- **License:** Apache-2.0
- **Technical Level:** avanzado
- **Compatibility:** macOS, Linux, Docker, Confluent Cloud
- **Official Site:** https://kafka.apache.org
- **GitHub:** https://github.com/apache/kafka
- **Alternatives:** rabbitmq, redis-streams, nats, pulsar

## Features
- Publicación/suscripción a flujos de registros (topics)
- Almacenamiento durable y replicado en disco
- Escalado horizontal con particionamiento de topics
- Procesamiento de streams con Kafka Streams y ksqlDB
- Garantías de entrega: at-least-once, exactly-once
- Retención configurable por tiempo o tamaño
- Conectores pre-construidos (Kafka Connect) para bases de datos, S3, Elasticsearch
- Compresión, batch y zero-copy para alto throughput

## Steps
### 1. Instala Kafka
Descarga desde kafka.apache.org y ejecuta bin/zookeeper-server-start.sh (Kafka requiere Zookeeper o KRaft mode desde 2.8). Alternativa: docker compose con imagen confluentinc/cp-kafka.

### 2. Crea un topic y produce mensajes
Usa bin/kafka-topics.sh --create --topic pedidos --partitions 3 --replication-factor 1. Luego produce mensajes con bin/kafka-console-producer.sh --topic pedidos.

### 3. Consume mensajes
Usa bin/kafka-console-consumer.sh --topic pedidos --from-beginning. Cada consumidor en un grupo lee particiones distintas. Kafka trackea offsets por consumidor para reanudar desde donde quedó.

### 4. Procesa streams con Kafka Streams
Escribe procesadores en Java o con ksqlDB (SQL para streams). Ejemplo: SELECT usuario, COUNT(*) FROM clicks WINDOW TUMBLING (SIZE 1 HOUR) GROUP BY usuario para contar clics por hora.

## When to Use
- **Pipelines de datos en tiempo real entre sistemas:** Cuando necesitas mover datos entre múltiples sistemas (BD → Kafka → Elasticsearch → S3) con baja latencia y alta confiabilidad. Kafka actúa como cola central inmutable que desacopla productores y consumidores.
- **Procesamiento de eventos y streams:** Para detectar patrones en tiempo real: fraude, alertas de monitoreo, personalización en vivo. Kafka Streams permite unir, filtrar y agregar eventos con ventanas temporales sin almacenamiento intermedio.
- **Desacoplamiento de microservicios:** Cuando los microservicios necesitan comunicarse de forma asíncrona sin dependencias directas. Kafka garantiza que el mensaje no se pierda aunque el consumidor esté caído, reteniéndolo hasta que pueda procesarlo.

## Examples
### Pipeline de datos con Kafka Connect
```
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
tput: "Captura cambios en la tabla pedidos de PostgreSQL y los publica en el topic cdc-pedidos en tiempo real. Debezium envía INSERT, UPDATE y DELETE como eventos JSON."
```

### Procesamiento con Kafka Streams (Java)
```
KStream<String, String> clicks = builder.stream("clicks");
clicks
  .groupBy((key, value) -> extractUserId(value))
  .windowedBy(TimeWindows.ofSizeWithNoGrace(Duration.ofMinutes(5)))
  .count()
  .toStream()
  .foreach((windowed, count) ->
    System.out.println("Usuario " + windowed.key() + ": " + count + " clics en 5min"));
tput: "Cuenta clics por usuario en ventanas de 5 minutos. Cada ventana captura actividad reciente. Kafka Streams maneja el estado local y la tolerancia a fallos automáticamente."
```

## Tips
- Configura retention basada en tiempo (log.retention.hours=168) y tamaño (log.retention.bytes=-1). Kafka no está diseñado como almacenamiento a largo plazo. Usa S3 o HDFS para archivar datos históricos.
- Elige el número de particiones cuidadosamente: más particiones = mayor paralelismo pero más overhead. Regla general: particiones = max consumidores esperados * 2. No puedes reducir particiones después sin recrear el topic.
- Usa Schema Registry con Avro o Protobuf para evolucionar esquemas de mensajes sin romper consumidores. Schema Registry valida compatibilidad hacia adelante y atrás al publicar nuevos esquemas.
- Configura acks=all y min.insync.replicas=2 para exactly-once en producción. Esto garantiza que el mensaje se escriba en todas las réplicas antes de confirmar. El throughput baja pero ganas consistencia.

## FAQ
- **¿Kafka vs RabbitMQ?** RabbitMQ es un message broker tradicional con colas inteligentes y routing flexible. Kafka es una plataforma de streaming con almacenamiento durable, replay de mensajes y alto throughput. RabbitMQ para comunicación entre servicios simple; Kafka para pipelines de datos masivos.
- **¿Kafka necesita Zookeeper?** Desde Kafka 2.8, KRaft mode reemplaza Zookeeper progresivamente. Kafka 3.x+ puede operar sin Zookeeper usando el consenso Raft interno. KRaft simplifica la operación y elimina un punto de fallo.
- **¿Qué tan rápido es Kafka?** Kafka maneja millones de mensajes por segundo en un cluster modesto. Su throughput está limitado por disco y red, no por CPU. Con compresión y batch, un cluster de 3 nodos puede procesar ~1 GB/s. Latencia típica: ~10ms.
- **¿Puedo perder mensajes con Kafka?** Con acks=all y replicación mínima 2, Kafka garantiza zero message loss mientras al menos una réplica esté viva. Kafka replica mensajes entre brokers y mantiene ISR (In-Sync Replicas) para detectar nodos caídos.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://kafka.apache.org
- **Source Code Issues:** Check the repository at https://github.com/apache/kafka for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
