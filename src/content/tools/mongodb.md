---
name: MongoDB
description: Base de datos NoSQL orientada a documentos con escalabilidad horizontal, consultas flexibles y alta disponibilidad.
category: backend
tags: [base-datos, nosql, documental, mongodb, escalable]
officialSite: https://www.mongodb.com
pricing: freemium
openSource: true
license: SSPL
technicalLevel: intermedio
compatibility: [Windows, macOS, Linux]
featured: false
features:
  - Modelo de datos flexible con documentos JSON-like
  - Consultas ad-hoc con aggregation pipeline
  - Índices secundarios y text search
  - Replica sets para alta disponibilidad
  - Sharding para escalabilidad horizontal
  - "Atlas: base de datos cloud multi-cloud"
  - Change streams para eventos en tiempo real
alternatives: [supabase]
relatedTools: [node-js, prisma, docker]
howToUse:
  - step: 1
    title: "Instalar MongoDB localmente o en la nube"
    description: "Para desarrollo local, instala MongoDB Community Server o usa `docker run -p 27017:27017 mongo`. Para producción, crea un clúster gratuito en MongoDB Atlas (cloud.mongodb.com) con un solo clic y obtén la cadena de conexión."
  - step: 2
    title: "Conectarse y realizar operaciones CRUD"
    description: "Conéctate con el driver de tu lenguaje (`npm install mongodb`, `pip install pymongo`). Crea una base de datos, inserta documentos con `insertOne`/`insertMany`, consulta con `find` y filtros, actualiza con `updateOne` usando operadores como `$set`, y elimina con `deleteOne`."
  - step: 3
    title: "Crear índices para optimizar consultas"
    description: "Usa `createIndex({ campo: 1 })` para índices ascendentes o `-1` para descendentes. Para búsquedas de texto usa índices `text`. Monitorea el rendimiento con `explain()` para verificar que tus consultas usen los índices adecuados."
  - step: 4
    title: "Usar el aggregation pipeline para análisis"
    description: "Construye pipelines de agregación con stages como `$match` (filtrar), `$group` (agrupar), `$sort` (ordenar), `$project` (seleccionar campos) y `$lookup` (unir colecciones). Esto reemplaza la necesidad de joins SQL tradicionales."
whenToUse:
  - title: "Aplicaciones con esquemas flexibles y evolución rápida"
    description: "Cuando tu modelo de datos cambia frecuentemente, tienes documentos con campos opcionales o necesitas almacenar datos semiestructurados. MongoDB no requiere migraciones de esquema, lo que acelera el desarrollo iterativo."
  - title: "Catálogos de productos y sistemas de contenido"
    description: "Para ecommerce, CMS, catálogos o cualquier sistema donde cada documento puede tener una estructura diferente (productos con atributos variables, artículos con metadatos diversos). El modelo de documentos se adapta naturalmente."
  - title: "Aplicaciones en tiempo real con Change Streams"
    description: "Si necesitas notificaciones en tiempo real, sincronización entre servicios o feeds de actividad basados en cambios en la base de datos. Change Streams emite eventos cuando los documentos se insertan, actualizan o eliminan."
examples:
  - title: "Inserción y consulta de documentos"
    code: |
      db.productos.insertMany([
        { nombre: "Laptop", precio: 1200, stock: 15, specs: { ram: "16GB", cpu: "i7" } },
        { nombre: "Monitor", precio: 350, stock: 30, specs: { tamaño: "27\"", res: "4K" } }
      ])

      db.productos.find({ precio: { $lt: 1000 } }, { nombre: 1, precio: 1 })
    output: "Inserta dos documentos con estructuras flexibles en la colección productos. La consulta devuelve solo el Monitor (precio < 1000) mostrando únicamente nombre y precio."
  - title: "Aggregation pipeline con agrupación"
    code: |
      db.ventas.aggregate([
        { $match: { fecha: { $gte: ISODate("2024-01-01") } } },
        { $group: { _id: "$categoria", total: { $sum: "$monto" }, cantidad: { $count: {} } } },
        { $sort: { total: -1 } }
      ])
    output: "Agrupa las ventas del año 2024 por categoría, calcula el total vendido y la cantidad de transacciones, ordenando de mayor a menor ingreso total."
tips:
  - text: "Siempre crea índices para los campos que usas en filtros, ordenamientos y agregaciones. Sin índices, MongoDB hace collection scan (revisa todos los documentos), lo que degrada drásticamente el rendimiento en colecciones grandes."
  - text: "Usa el operador `$lookup` con moderación. A diferencia de los JOINs SQL, `$lookup` puede ser costoso. Si necesitas joins frecuentes entre colecciones, considera si MongoDB es la base de datos correcta o si debes desnormalizar los datos."
  - text: "Configura replica sets incluso en desarrollo. Te acostumbrarás a trabajar con el topology correcto y podrás probar Change Streams y transacciones, que solo funcionan en replica sets."
  - text: "No uses ObjectId como único identificador de negocio. Agrega un campo `slug` o `externalId` para referencias legibles por humanos y URLs amigables."
  - text: "Monitorea el tamaño de tus documentos con `Object.bsonsize(db.collection.findOne())`. Documentos muy grandes (>16MB) no se pueden insertar. Si tus documentos crecen indefinidamente (logs, arrays), usa colecciones separadas o bucketing."
faq:
  - question: "¿MongoDB vs PostgreSQL, cuál elegir?"
    answer: "Elige MongoDB cuando tus datos son semiestructurados, el esquema cambia frecuentemente, o necesitas escalabilidad horizontal nativa. Elige PostgreSQL cuando necesitas integridad referencial estricta, joins complejos, transacciones ACID robustas o consultas relacionales avanzadas. PostgreSQL también tiene soporte JSON así que en muchos casos modernos PostgreSQL es suficiente."
  - question: "¿MongoDB soporta transacciones ACID?"
    answer: "Sí, desde la versión 4.0 MongoDB soporta transacciones multi-documento ACID. Sin embargo, requieren replica sets y tienen un costo de rendimiento mayor que las operaciones atómicas de un solo documento. No abuses de las transacciones: modela tus datos para minimizarlas."
  - question: "¿Cómo funciona el sharding en MongoDB?"
    answer: "El sharding distribuye datos entre múltiples servidores (shards) usando una shard key. Cada shard contiene un subconjunto de los datos. Las consultas que incluyen la shard key se enrutan al shard correcto. Una mala elección de shard key puede causar hotspots y degradar el rendimiento."
  - question: "¿La licencia SSPL es un problema para mi empresa?"
    answer: "Para la mayoría de empresas que usan MongoDB como servicio (MongoDB Atlas) o internamente sin ofrecer MongoDB como servicio a terceros, la SSPL no es un problema. Si planeas ofrecer MongoDB como servicio cloud, la SSPL te obligaría a abrir el código de tu infraestructura de gestión. Considera alternativas como AWS DocumentDB."
publishedAt: 2026-06-01
---

## ¿Qué es?

MongoDB es la base de datos NoSQL más popular del mundo. Almacena datos en documentos JSON-like flexibles (BSON) en lugar de tablas rígidas, permitiendo esquemas dinámicos que evolucionan con la aplicación.

## ¿Para qué sirve?

MongoDB sirve para almacenar y consultar datos de aplicaciones web y móviles, catálogos de productos, sistemas de contenido, gaming, IoT, análisis en tiempo real y cualquier aplicación que requiera escalabilidad horizontal y esquemas flexibles.

## Cuándo usarla

- Cuando tus datos no tienen un esquema fijo o cambian frecuentemente.
- Para aplicaciones que necesitan escalar horizontalmente con sharding.
- Si trabajas con datos JSON y quieres almacenarlos de forma natural.
- Para prototipado rápido donde la flexibilidad del esquema es clave.
- Cuando necesitas alta disponibilidad con replica sets.

## Cuándo NO usarla

- Para aplicaciones con relaciones complejas y transacciones ACID pesadas.
- Cuando los joins y las restricciones de integridad son críticos.
- Si tu equipo solo tiene experiencia en SQL y bases relacionales.
- Para reporting y analytics con consultas altamente complejas.
- Cuando el tamaño de los documentos es muy grande y afecta rendimiento.

## Pros

- Esquema flexible que acelera el desarrollo.
- Escalabilidad horizontal nativa con sharding.
- Aggregation pipeline muy potente para análisis.
- Atlas cloud con despliegue en segundos.
- Gran ecosistema de drivers y herramientas.

## Contras

- Sin joins nativos (hay que hacerlos en aplicación).
- Rendimiento inferior a SQL en consultas relacionales complejas.
- La licencia SSPL genera controversia.
- Consumo de memoria alto comparado con bases SQL.
- Transacciones ACID limitadas comparado con PostgreSQL.
