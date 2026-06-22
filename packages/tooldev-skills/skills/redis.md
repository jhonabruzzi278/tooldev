---
name: redis
description: Almacén de estructura de datos en memoria de código abierto usado como caché, base de datos y message broker. Úsala cuando el usuario mencione o pregunte sobre caché, base-de-datos, en-memoria, colas.
---

# Redis

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** backend
- **Pricing:** open-source
- **License:** Redis Source Available License
- **Technical Level:** intermedio
- **Compatibility:** macOS, Linux, Windows, Docker
- **Official Site:** https://redis.io
- **GitHub:** https://github.com/redis/redis
- **Alternatives:** memcached, valkey, dragonfly, hazelcast

## Features
- Estructuras de datos nativas: strings, hashes, lists, sets, sorted sets, streams, bitmaps
- Persistencia opcional RDB (snapshots) y AOF (append-only file)
- Replicación primaria/secundaria con conmutación por error
- Redis Cluster para escalado horizontal automático
- Pub/Sub para mensajería en tiempo real
- Transacciones con MULTI/EXEC y Lua scripting
- Streams para colas de mensajes estilo Kafka
- Módulos: RediSearch, RedisJSON, RedisTimeSeries, RedisGraph, RedisBloom

## Steps
### 1. Instala Redis
Usa brew install redis (macOS), apt install redis (Linux) o docker run -p 6379:6379 redis:7-alpine. El servidor arranca en localhost:6379 sin configuración adicional.

### 2. Almacena y recupera datos
Usa SET clave valor y GET clave para strings. Redis responde en menos de 1ms para operaciones simples. Explora tipos avanzados: LPUSH para listas, SADD para sets y HSET para hashes.

### 3. Usa Redis como caché
Implementa caching con EXPIRE para establecer TTL automático. Redis eliminará las claves vencidas. Estrategias comunes: cache-aside (la app verifica caché primero) o cache-through con Redis como capa primaria.

### 4. Configura persistencia y alta disponibilidad
Habilita AOF (appendfsync everysec) para durabilidad. Configura réplica secundaria con REPLICAOF. Para alta disponibilidad usa Redis Sentinel (3 nodes mínimo) que elige automáticamente nueva primaria si la actual falla.

## When to Use
- **Caché de base de datos y respuestas API:** Para reducir latencia de consultas frecuentes a PostgreSQL o MongoDB. Redis en caché puede servir respuestas en 1-5ms vs 50-200ms de una base de datos, reduciendo drásticamente la carga de la BD.
- **Colas de tareas y procesamiento asíncrono:** Con Redis Lists o BullMQ para encolar trabajos (envío de emails, generación de reportes, procesamiento de imágenes). Los workers consumen tareas de la cola y Redis garantiza entrega at-least-once con BRPOPLPUSH.
- **Rate limiting y contadores en tiempo real:** Para limitar peticiones por usuario/minuto con INCR y EXPIRE. Redis maneja millones de incrementos por segundo en un solo nodo, ideal para APIs que necesitan throttle por API key o IP.

## Examples
### Rate limiter con ventana deslizante
```
import redis from 'redis';
const client = redis.createClient();
const key = `ratelimit:${userId}`;
const current = await client.incr(key);
if (current === 1) await client.expire(key, 60);
if (current > 100) throw new Error('Rate limit exceeded');
tput: "Permite 100 peticiones por minuto por usuario. Cuando expira la clave, el contador se resetea automáticamente. Redis garantiza atomicidad con INCR para evitar race conditions."
```

### Cola de tareas con Redis Lists
```
// Productor
await client.lPush('email:queue', JSON.stringify({ to, subject }));
// Consumidor
const task = await client.brPop('email:queue', 0);
const { to, subject } = JSON.parse(task.element);
await sendEmail(to, subject);
tput: "Cola FIFO bloqueante. El productor agrega tareas con LPUSH, el consumidor espera con BRPOP (bloqueante hasta que llegue una tarea). Redis maneja concurrencia: múltiples workers pueden consumir sin duplicar."
```

## Tips
- No uses Redis como base de datos primaria para datos que no puedes perder. Aunque AOF + RDB dan durabilidad, Redis es principalmente un caché. Siempre ten una fuente de verdad (PostgreSQL, MySQL) y Redis como capa de aceleración.
- Elige estructuras de datos correctas: Hashes para objetos, Sets para membresía/unicidad, Sorted Sets para leaderboards/límites de velocidad, Streams para colas duraderas. La estructura incorrecta desperdicia memoria y CPU.
- Monitorea el hit rate de tu caché: INFO stats muestra keyspace_hits y keyspace_misses. Hit rate bajo (<80%) indica que el caché no está siendo efectivo y necesitas ajustar TTL o tamaño.
- Usa SCAN en vez de KEYS en producción. KEYS bloquea Redis y puede colapsar el servidor si hay millones de claves. SCAN itera incrementalmente sin bloquear. Lo mismo aplica para FLUSHALL y SMEMBERS en sets grandes.

## FAQ
- **¿Redis vs Memcached?** Redis es superior en casi todos los casos: soporta tipos de datos avanzados, persistencia, replicación, pub/sub y Lua scripting. Memcached es más simple y usa menos memoria overhead, pero solo maneja strings. Elige Memcached solo para caching clave-valor ultra simple.
- **¿Redis es rápido?** Redis sirve operaciones en microsegundos porque todo vive en RAM. Un nodo Redis single-threaded maneja ~100,000 operaciones/segundo. Redis Cluster escala a millones ops/s distribuyendo claves entre nodos.
- **¿Puedo perder datos con Redis?** Sin persistencia configurada, sí. Con AOF everysec, pierdes máximo 1 segundo de datos si el servidor falla. Con RDB, pierdes hasta el último snapshot. Para cero pérdida, usa Redis en modo cluster con replicación y AOF always.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://redis.io
- **Source Code Issues:** Check the repository at https://github.com/redis/redis for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
