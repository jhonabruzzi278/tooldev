---
name: MongoDB
description: Base de datos NoSQL documental orientada a objetos JSON flexibles con escalado horizontal nativo.
category: backend
tags: [base-de-datos, nosql, documental, backend, json]
officialSite: https://mongodb.com
github: https://github.com/mongodb/mongo
pricing: open-source
openSource: true
license: MongoDB Server Side Public License (SSPL)
technicalLevel: intermedio
compatibility: [macOS, Linux, Windows, Docker, MongoDB Atlas]
featured: false
features:
  - Documentos JSON/BSON con esquema flexible
  - Índices secundarios, compuestos, geoespaciales y de texto
  - Aggregation Pipeline para transformaciones complejas
  - Replica Sets con failover automático
  - Sharding para escalado horizontal distribuido
  - Change Streams para reaccionar a cambios en tiempo real
  - Transacciones multi-documento ACID
  - "MongoDB Atlas: base de datos como servicio multi-cloud"
alternatives: [firestore, couchbase, postgresql-json, arangodb]
relatedTools: [mongoose, compass, atlas, redis]
howToUse:
  - step: 1
    title: "Instala MongoDB"
    description: "Usa brew install mongodb-community (macOS), apt install mongodb (Linux) o docker run -p 27017:27017 mongo:7. Alternativamente, crea un cluster gratis en MongoDB Atlas (500MB, sin tarjeta)."
  - step: 2
    title: "Inserta documentos"
    description: "Conecta con mongosh o tu driver favorito e inserta: db.usuarios.insertOne({ nombre: 'Ana', email: 'ana@mail.com', roles: ['admin'] }). MongoDB asigna automáticamente un _id único."
  - step: 3
    title: "Consulta con filtros"
    description: "Usa db.usuarios.find({ edad: { $gte: 18 }, roles: 'admin' }) con operadores: $gt, $regex, $in, $exists. Los índices aceleran las consultas drásticamente."
  - step: 4
    title: "Agrega y transforma datos"
    description: "Usa el aggregation pipeline con stages $match, $group, $sort, $project. Ejemplo: db.pedidos.aggregate([{ $match: { total: { $gte: 100 } } }, { $group: { _id: '$usuarioId', total: { $sum: '$total' } } }])"
whenToUse:
  - title: "Aplicaciones con esquemas evolutivos"
    description: "Cuando los documentos varían en estructura: perfiles de usuario con diferentes campos, catálogos de productos con atributos variables (categoría, SKU, reviews, etc.). MongoDB no requiere migraciones ALTER TABLE."
  - title: "Prototipado y startups en fase temprana"
    description: "MongoDB permite iterar rápido porque cambiar el esquema es tan simple como agregar un campo al JSON. No necesitas definir esquemas ni ejecutar migraciones. Ideal cuando los requirements cambian semanalmente."
  - title: "Catálogos, logs y datos de series temporales"
    description: "Para datos que son naturalmente agrupados en documentos: pedidos con items, posts con comentarios, logs con metadata. La aggregation pipeline permite análisis complejos sin joins."
examples:
  - title: "Agregación de ventas por categoría"
    code: |
      db.ventas.aggregate([
        { $match: { fecha: { $gte: ISODate('2026-01-01') } } },
        { $unwind: '$items' },
        { $group: { _id: '$items.categoria', total: { $sum: '$items.precio' }, count: { $sum: 1 } } },
        { $sort: { total: -1 } }
      ]);
    output: "Agrupa ventas del año por categoría, sumando el total y contando items, ordenado de mayor a menor. Devuelve arrays con categoría, total y cantidad."
  - title: "Esquema flexible de producto"
    code: |
      db.productos.insertMany([
        { nombre: 'Laptop', precio: 1500, especs: { ram: '32GB', cpu: 'i7' } },
        { nombre: 'Camiseta', precio: 25, tallas: ['S','M','L','XL'], color: 'rojo' }
      ]);
    output: "Documentos de productos con campos completamente distintos. MongoDB no exige que todos los documentos en una colección tengan el mismo esquema. El primer producto tiene especs, el segundo tallas y color."
tips:
  - text: "Diseña tus documentos para que las consultas más frecuentes lean un solo documento (embedding en vez de references). MongoDB es más rápido leyendo un documento grande que haciendo joins (lookups) entre colecciones."
  - text: "Usa índices compuestos que coincidan exactamente con tus patrones de consulta. Usa explain() para ver si tus queries usan índices. Una collection sin índices hace collection scan en cada consulta."
  - text: "Mantén los documentos pequeños: < 1MB recomendado. Documentos muy grandes (> 10MB) degradan el rendimiento. Si un documento crece sin límite (ej: array de comentarios), refactoriza a colección separada."
  - text: "Configura réplica set siempre, incluso en desarrollo. Con replica set habilitas change streams y transacciones. Además, replica set = failover automático. Un solo nodo no es producción."
faq:
  - question: "¿MongoDB es ACID?"
    answer: "Sí, desde MongoDB 4.0 soporta transacciones multi-documento ACID dentro de una réplica set, y desde 4.2 en sharded clusters. Las transacciones garantizan atomicidad, consistencia, aislamiento y durabilidad."
  - question: "¿MongoDB vs PostgreSQL?"
    answer: "PostgreSQL es mejor para datos relacionales, joins complejos, integridad referencial y transacciones pesadas. MongoDB es mejor para esquemas flexibles, datos jerárquicos, escalado horizontal nativo y prototipado rápido."
  - question: "¿MongoDB es gratis?"
    answer: "MongoDB Community Server es open source. MongoDB Enterprise tiene más features (LDAP, Kerberos, auditoría, encriptación). MongoDB Atlas (cloud) tiene tier gratis de 512MB. La licencia SSPL limita su uso como servicio gestionado."
publishedAt: 2026-06-01
---

## ¿Qué es?

MongoDB es la base de datos NoSQL documental más popular del mundo. En lugar de tablas y filas, usa documentos JSON flexibles que pueden tener estructuras diferentes dentro de una misma colección.

## ¿Para qué sirve?

MongoDB sirve para almacenar datos con esquemas variables, prototipar aplicaciones rápidamente, manejar catálogos de productos, datos jerárquicos, logs y cualquier escenario donde la flexibilidad del esquema sea más importante que las relaciones rígidas.

## Cuándo usarla

- Cuando los datos no tienen un esquema fijo.
- Para prototipado rápido y startups.
- Para datos jerárquicos (posts con comentarios, pedidos con items).
- Cuando necesitas escalar horizontalmente.
- Para aplicaciones que requieren alta velocidad de escritura.

## Cuándo NO usarla

- Para datos con relaciones complejas y joins frecuentes.
- Cuando la integridad referencial es crítica (usa PostgreSQL).
- Para aplicaciones financieras con transacciones pesadas.
- Si el equipo no está familiarizado con modelado documental.

## Pros

- Esquema flexible sin migraciones.
- Escalado horizontal nativo con sharding.
- Aggregation Pipeline muy potente.
- Transacciones ACID multi-documento.
- MongoDB Atlas (DBaaS) multi-cloud.

## Contras

- Sin joins nativos (usa $lookup que es más lento).
- Documentos limitados a 16MB.
- Modelado documental requiere diseño cuidadoso.
- Licencia SSPL restrictiva para SaaS.

## CLI

```bash
mongod                                        # Iniciar servidor
mongosh                                       # Cliente interactivo
use mi_bd                                     # Seleccionar/crear BD
db.usuarios.find({ edad: { $gte: 18 } })      # Consultar
db.usuarios.createIndex({ email: 1 })         # Crear índice
```
