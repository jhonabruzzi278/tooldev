---
name: apache-kafka
description: >- Úsala cuando el usuario mencione o pregunte sobre streaming, colas, eventos, mensajería.
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
- >-
- Compresión, batch y zero-copy para alto throughput

## Steps
### 1. Instala Kafka
>-

### 2. Crea un topic y produce mensajes
>-

### 3. Consume mensajes
>-

### 4. Procesa streams con Kafka Streams
>-

## When to Use
- **Pipelines de datos en tiempo real entre sistemas:** >-
- **Procesamiento de eventos y streams:** >-
- **Desacoplamiento de microservicios:** >-

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
tput: >-
Captura cambios en la tabla pedidos de PostgreSQL y los publica en el
topic cdc-pedidos en tiempo real. Debezium envía INSERT, UPDATE y DELETE
como eventos JSON.
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
tput: >-
Cuenta clics por usuario en ventanas de 5 minutos. Cada ventana captura
actividad reciente. Kafka Streams maneja el estado local y la tolerancia a
fallos automáticamente.
```

## Tips
- >-
- >-
- >-
- >-

## FAQ
- **¿Kafka vs RabbitMQ?** >-
- **¿Kafka necesita Zookeeper?** >-
- **¿Qué tan rápido es Kafka?** >-
- **¿Puedo perder mensajes con Kafka?** >-

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://kafka.apache.org
- **Source Code Issues:** Check the repository at https://github.com/apache/kafka for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
