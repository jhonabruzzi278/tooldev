---
name: Redis
description: Almacén de estructura de datos en memoria de código abierto usado como caché, base de datos y message broker.
category: backend
tags: [caché, base-de-datos, en-memoria, colas, backend]
officialSite: https://redis.io
github: https://github.com/redis/redis
pricing: open-source
openSource: true
license: Redis Source Available License
technicalLevel: intermedio
compatibility: [macOS, Linux, Windows, Docker]
featured: false
features:
  - "Estructuras de datos nativas: strings, hashes, lists, sets, sorted sets, streams, bitmaps"
  - Persistencia opcional RDB (snapshots) y AOF (append-only file)
  - Replicación primaria/secundaria con conmutación por error
  - Redis Cluster para escalado horizontal automático
  - Pub/Sub para mensajería en tiempo real
  - Transacciones con MULTI/EXEC y Lua scripting
  - Streams para colas de mensajes estilo Kafka
  - "Módulos: RediSearch, RedisJSON, RedisTimeSeries, RedisGraph, RedisBloom"
alternatives: [memcached, valkey, dragonfly, hazelcast]
relatedTools: [nodejs, docker, kafka, bullmq]
howToUse:
  - step: 1
    title: "Instala Redis"
    description: "Usa brew install redis (macOS), apt install redis (Linux) o docker run -p 6379:6379 redis:7-alpine. El servidor arranca en localhost:6379 sin configuración adicional."
  - step: 2
    title: "Almacena y recupera datos"
    description: "Usa SET clave valor y GET clave para strings. Redis responde en menos de 1ms para operaciones simples. Explora tipos avanzados: LPUSH para listas, SADD para sets y HSET para hashes."
  - step: 3
    title: "Usa Redis como caché"
    description: "Implementa caching con EXPIRE para establecer TTL automático. Redis eliminará las claves vencidas. Estrategias comunes: cache-aside (la app verifica caché primero) o cache-through con Redis como capa primaria."
  - step: 4
    title: "Configura persistencia y alta disponibilidad"
    description: "Habilita AOF (appendfsync everysec) para durabilidad. Configura réplica secundaria con REPLICAOF. Para alta disponibilidad usa Redis Sentinel (3 nodes mínimo) que elige automáticamente nueva primaria si la actual falla."
whenToUse:
  - title: "Caché de base de datos y respuestas API"
    description: "Para reducir latencia de consultas frecuentes a PostgreSQL o MongoDB. Redis en caché puede servir respuestas en 1-5ms vs 50-200ms de una base de datos, reduciendo drásticamente la carga de la BD."
  - title: "Colas de tareas y procesamiento asíncrono"
    description: "Con Redis Lists o BullMQ para encolar trabajos (envío de emails, generación de reportes, procesamiento de imágenes). Los workers consumen tareas de la cola y Redis garantiza entrega at-least-once con BRPOPLPUSH."
  - title: "Rate limiting y contadores en tiempo real"
    description: "Para limitar peticiones por usuario/minuto con INCR y EXPIRE. Redis maneja millones de incrementos por segundo en un solo nodo, ideal para APIs que necesitan throttle por API key o IP."
examples:
  - title: "Rate limiter con ventana deslizante"
    code: |
      import redis from 'redis';
      const client = redis.createClient();
      const key = `ratelimit:${userId}`;
      const current = await client.incr(key);
      if (current === 1) await client.expire(key, 60);
      if (current > 100) throw new Error('Rate limit exceeded');
    output: "Permite 100 peticiones por minuto por usuario. Cuando expira la clave, el contador se resetea automáticamente. Redis garantiza atomicidad con INCR para evitar race conditions."
  - title: "Cola de tareas con Redis Lists"
    code: |
      // Productor
      await client.lPush('email:queue', JSON.stringify({ to, subject }));
      // Consumidor
      const task = await client.brPop('email:queue', 0);
      const { to, subject } = JSON.parse(task.element);
      await sendEmail(to, subject);
    output: "Cola FIFO bloqueante. El productor agrega tareas con LPUSH, el consumidor espera con BRPOP (bloqueante hasta que llegue una tarea). Redis maneja concurrencia: múltiples workers pueden consumir sin duplicar."
tips:
  - text: "No uses Redis como base de datos primaria para datos que no puedes perder. Aunque AOF + RDB dan durabilidad, Redis es principalmente un caché. Siempre ten una fuente de verdad (PostgreSQL, MySQL) y Redis como capa de aceleración."
  - text: "Elige estructuras de datos correctas: Hashes para objetos, Sets para membresía/unicidad, Sorted Sets para leaderboards/límites de velocidad, Streams para colas duraderas. La estructura incorrecta desperdicia memoria y CPU."
  - text: "Monitorea el hit rate de tu caché: INFO stats muestra keyspace_hits y keyspace_misses. Hit rate bajo (<80%) indica que el caché no está siendo efectivo y necesitas ajustar TTL o tamaño."
  - text: "Usa SCAN en vez de KEYS en producción. KEYS bloquea Redis y puede colapsar el servidor si hay millones de claves. SCAN itera incrementalmente sin bloquear. Lo mismo aplica para FLUSHALL y SMEMBERS en sets grandes."
faq:
  - question: "¿Redis vs Memcached?"
    answer: "Redis es superior en casi todos los casos: soporta tipos de datos avanzados, persistencia, replicación, pub/sub y Lua scripting. Memcached es más simple y usa menos memoria overhead, pero solo maneja strings. Elige Memcached solo para caching clave-valor ultra simple."
  - question: "¿Redis es rápido?"
    answer: "Redis sirve operaciones en microsegundos porque todo vive en RAM. Un nodo Redis single-threaded maneja ~100,000 operaciones/segundo. Redis Cluster escala a millones ops/s distribuyendo claves entre nodos."
  - question: "¿Puedo perder datos con Redis?"
    answer: "Sin persistencia configurada, sí. Con AOF everysec, pierdes máximo 1 segundo de datos si el servidor falla. Con RDB, pierdes hasta el último snapshot. Para cero pérdida, usa Redis en modo cluster con replicación y AOF always."
publishedAt: 2026-06-01
---

## ¿Qué es?

Redis es un almacén de estructura de datos en memoria que funciona como caché, base de datos y message broker. Es famoso por su velocidad extrema (microsegundos por operación) y su soporte para múltiples tipos de datos más allá del simple clave-valor.

## ¿Para qué sirve?

Redis sirve para acelerar aplicaciones con caching, manejar sesiones de usuario, implementar colas de tareas, rate limiting, líderes en tiempo real, pub/sub para mensajería y cualquier escenario que requiera acceso a datos en tiempo real con latencia mínima.

## Cuándo usarla

- Para caching de consultas y respuestas API.
- Para manejo de sesiones de usuario distribuidas.
- Para colas de tareas asíncronas.
- Para rate limiting y contadores atómicos.
- Para leaderboards, chat en tiempo real y pub/sub.

## Cuándo NO usarla

- Como base de datos principal transaccional.
- Para datos mayores a la RAM disponible.
- Para almacenar datos que requieren consultas complejas (PostgreSQL).
- Para persistencia de datos críticos sin respaldo en otra BD.

## Pros

- Velocidad extrema (~100k ops/s por nodo).
- Múltiples estructuras de datos avanzadas.
- Persistencia configurable (RDB + AOF).
- Cluster nativo para escalado horizontal.
- Ecosistema de módulos: búsqueda, JSON, timeseries.

## Contras

- Limitado por RAM disponible.
- No es transaccional como una BD relacional.
- Single-threaded para comandos (multi-threaded solo para I/O).
- La licencia cambió a SSPL (alternativa: Valkey).

## CLI

```bash
redis-server                                # Iniciar servidor
redis-cli                                   # Cliente interactivo
SET clave "hola"                            # Guardar string
GET clave                                   # Recuperar string
INFO stats                                  # Estadísticas de uso
```
