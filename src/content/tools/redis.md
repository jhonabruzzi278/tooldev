---
name: Redis
description: Almacén de estructuras de datos en memoria, usado como caché, base de datos y message broker de alto rendimiento.
category: backend
tags: [backend, cache, base-de-datos, rendimiento, colas, mensajeria]
officialSite: https://redis.io
pricing: open-source
openSource: true
license: BSD-3-Clause
technicalLevel: intermedio
compatibility: [Linux, macOS, Windows, Docker]
featured: false
features:
  - "Estructuras de datos: strings, hashes, lists, sets, sorted sets"
  - Persistencia opcional (RDB y AOF)
  - Replicación maestro-esclavo y cluster
  - Pub/Sub para mensajería en tiempo real
  - Transacciones y Lua scripting
  - Expiración automática de claves (TTL)
  - "Redis Stack: JSON, Search, TimeSeries, Bloom"
alternatives: [mongodb]
relatedTools: [docker, node-js, bun, prisma]
howToUse:
  - step: 1
    title: "Instala y conecta Redis"
    description: "Instala Redis localmente con Docker (docker run -d -p 6379:6379 redis) o usa un servicio cloud como Redis Cloud o Upstash. Conéctate con redis-cli para comandos directos o usa una librería cliente en tu lenguaje."
  - step: 2
    title: "Operaciones básicas con estructuras de datos"
    description: "Usa SET/GET para strings, HSET/HGET para hashes, LPUSH/LRANGE para listas, SADD/SMEMBERS para sets y ZADD/ZRANGE para sorted sets. Cada estructura tiene comandos específicos optimizados para su caso de uso."
  - step: 3
    title: "Configura expiración y políticas de caché"
    description: "Usa EXPIRE key segundos para eliminar datos automáticamente. Configura maxmemory y maxmemory-policy (allkeys-lru, volatile-ttl) para que Redis maneje la memoria automáticamente sin intervención manual."
  - step: 4
    title: "Implementa Pub/Sub para mensajería en tiempo real"
    description: "Usa PUBLISH canal mensaje para enviar y SUBSCRIBE canal para recibir. Ideal para notificaciones en tiempo real, chats y comunicación entre microservicios sin polling."
whenToUse:
  - title: "Caché de consultas frecuentes"
    description: "Cuando tu aplicación hace las mismas consultas a la base de datos repetidamente. Almacena los resultados en Redis con un TTL de segundos o minutos para reducir la carga en PostgreSQL/MySQL drásticamente."
  - title: "Rate limiting y contadores"
    description: "Usa INCR y EXPIRE para implementar rate limiting por usuario o IP. Redis maneja operaciones atómicas a nivel de microsegundos, ideal para limitar requests en APIs públicas."
  - title: "Sesiones de usuario y datos temporales"
    description: "Para almacenar sesiones de usuario, carritos de compra temporales, tokens de verificación y cualquier dato que necesite expirar automáticamente."
examples:
  - title: "Caché con TTL en Node.js"
    code: |
      const redis = require("redis");
      const client = redis.createClient();
      
      async function getCached(key, fetchFn, ttl = 300) {
        const cached = await client.get(key);
        if (cached) return JSON.parse(cached);
        const data = await fetchFn();
        await client.setEx(key, ttl, JSON.stringify(data));
        return data;
      }
    output: "Primera llamada: fetchFn() ejecutado. Segunda llamada: datos del caché."
  - title: "Pub/Sub en tiempo real"
    code: |
      # Terminal 1: Suscriptor
      redis-cli SUBSCRIBE notificaciones
      
      # Terminal 2: Publicador
      redis-cli PUBLISH notificaciones "Hola mundo"
    output: "Terminal 1 recibe: 1) 'message' 2) 'notificaciones' 3) 'Hola mundo'"
tips:
  - text: "Usa nombres de claves con prefijos y dos puntos (user:123:profile) para organizar datos y facilitar el escaneo con SCAN en lugar de KEYS."
  - text: "Nunca uses KEYS en producción; usa SCAN con cursor para iterar sobre claves sin bloquear el servidor."
  - text: "Activa la persistencia RDB para backups puntuales y AOF para durabilidad en tiempo real; evalúa la compensación entre rendimiento y seguridad de datos."
  - text: "Configura maxmemory-policy allkeys-lru para que Redis elimine automáticamente las claves menos usadas cuando se llena la memoria."
  - text: "Usa pipelines o comandos MSET/MGET para enviar múltiples operaciones en una sola conexión; reduce la latencia de red significativamente en operaciones batch."
faq:
  - question: "¿Redis es solo para caché o puedo usarlo como base de datos principal?"
    answer: "Redis puede ser base de datos principal para ciertos casos de uso como leaderboards, colas de mensajes, contadores en tiempo real y datos con estructuras complejas. Sin embargo, no es recomendable como base de datos transaccional principal por sus limitaciones en persistencia y consistencia ACID."
  - question: "¿Cuánta memoria RAM necesito para Redis?"
    answer: "Depende de tus datos. Una estimación: strings ocupan ~50 bytes de overhead + el tamaño del valor. Un millón de claves simples puede ocupar entre 50-100MB. Monitorea con INFO memory y configura maxmemory para evitar OOM."
  - question: "¿Qué es Redis Cluster y cuándo lo necesito?"
    answer: "Redis Cluster distribuye datos automáticamente entre múltiples nodos (sharding horizontal). Lo necesitas cuando tus datos exceden la RAM de una sola máquina o cuando requieres alta disponibilidad con failover automático entre nodos maestro y réplica."
  - question: "¿Cómo integro Redis con una aplicación serverless?"
    answer: "Usa servicios Redis cloud como Upstash (serverless-first, pago por uso) o Redis Cloud de Redis Labs. Las conexiones tradicionales no funcionan bien en serverless por el límite de conexiones; Upstash usa HTTP/REST además del protocolo Redis nativo."
publishedAt: 2026-06-01
---

## ¿Qué es?

Redis es un almacén de estructuras de datos en memoria de código abierto, utilizado como base de datos, caché y message broker. Es conocido por su velocidad extrema y su soporte para estructuras de datos versátiles.

## ¿Para qué sirve?

Redis sirve como caché para acelerar aplicaciones, cola de mensajes con Pub/Sub, almacenamiento de sesiones de usuario, rate limiting, ranking con sorted sets, colas de tareas con lists y almacenamiento de datos temporales con TTL.

## Cuándo usarla

- Para cachear consultas frecuentes a base de datos.
- Cuando necesitas un message broker ligero y rápido.
- Para manejar sesiones de usuario en aplicaciones web.
- Si necesitas rate limiting o contadores atómicos.
- Para implementar colas de tareas simples.

## Cuándo NO usarla

- Como base de datos principal de una aplicación transaccional.
- Para datos que requieren SQL complejo con joins.
- Cuando los datos exceden la memoria disponible.
- Si necesitas persistencia fuerte estilo PostgreSQL.
- Para aplicaciones que requieren consistencia transaccional ACID.

## Pros

- Velocidad extremadamente rápida (operaciones en microsegundos).
- Estructuras de datos versátiles más allá de key-value.
- Redis Stack añade JSON, búsqueda y TimeSeries.
- Clustering nativo para escalabilidad horizontal.
- Ecosistema maduro con clientes para todos los lenguajes.

## Contras

- Limitado por la memoria RAM disponible.
- Sin SQL ni joins complejos.
- Persistencia no garantizada (in-memory primero).
- Configuración de cluster compleja.
- Operaciones de administración menos maduras que bases SQL.
