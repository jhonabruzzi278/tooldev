---
name: mongodb
description: Base de datos NoSQL documental orientada a objetos JSON flexibles con escalado horizontal nativo. Úsala cuando el usuario mencione o pregunte sobre base-de-datos, nosql, documental, backend.
---

# MongoDB

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** backend
- **Pricing:** open-source
- **License:** MongoDB Server Side Public License (SSPL)
- **Technical Level:** intermedio
- **Compatibility:** macOS, Linux, Windows, Docker, MongoDB Atlas
- **Official Site:** https://mongodb.com
- **GitHub:** https://github.com/mongodb/mongo
- **Alternatives:** firestore, couchbase, postgresql-json, arangodb

## Features
- Documentos JSON/BSON con esquema flexible
- Índices secundarios, compuestos, geoespaciales y de texto
- Aggregation Pipeline para transformaciones complejas
- Replica Sets con failover automático
- Sharding para escalado horizontal distribuido
- Change Streams para reaccionar a cambios en tiempo real
- Transacciones multi-documento ACID
- MongoDB Atlas: base de datos como servicio multi-cloud

## Steps
### 1. Instala MongoDB
Usa brew install mongodb-community (macOS), apt install mongodb (Linux) o docker run -p 27017:27017 mongo:7. Alternativamente, crea un cluster gratis en MongoDB Atlas (500MB, sin tarjeta).

### 2. Inserta documentos
Conecta con mongosh o tu driver favorito e inserta: db.usuarios.insertOne({ nombre: 'Ana', email: 'ana@mail.com', roles: ['admin'] }). MongoDB asigna automáticamente un _id único.

### 3. Consulta con filtros
Usa db.usuarios.find({ edad: { $gte: 18 }, roles: 'admin' }) con operadores: $gt, $regex, $in, $exists. Los índices aceleran las consultas drásticamente.

### 4. Agrega y transforma datos
Usa el aggregation pipeline con stages $match, $group, $sort, $project. Ejemplo: db.pedidos.aggregate([{ $match: { total: { $gte: 100 } } }, { $group: { _id: '$usuarioId', total: { $sum: '$total' } } }])

## When to Use
- **Aplicaciones con esquemas evolutivos:** Cuando los documentos varían en estructura: perfiles de usuario con diferentes campos, catálogos de productos con atributos variables (categoría, SKU, reviews, etc.). MongoDB no requiere migraciones ALTER TABLE.
- **Prototipado y startups en fase temprana:** MongoDB permite iterar rápido porque cambiar el esquema es tan simple como agregar un campo al JSON. No necesitas definir esquemas ni ejecutar migraciones. Ideal cuando los requirements cambian semanalmente.
- **Catálogos, logs y datos de series temporales:** Para datos que son naturalmente agrupados en documentos: pedidos con items, posts con comentarios, logs con metadata. La aggregation pipeline permite análisis complejos sin joins.

## Examples
### Agregación de ventas por categoría
```
db.ventas.aggregate([
  { $match: { fecha: { $gte: ISODate('2026-01-01') } } },
  { $unwind: '$items' },
  { $group: { _id: '$items.categoria', total: { $sum: '$items.precio' }, count: { $sum: 1 } } },
  { $sort: { total: -1 } }
]);
tput: "Agrupa ventas del año por categoría, sumando el total y contando items, ordenado de mayor a menor. Devuelve arrays con categoría, total y cantidad."
```

### Esquema flexible de producto
```
db.productos.insertMany([
  { nombre: 'Laptop', precio: 1500, especs: { ram: '32GB', cpu: 'i7' } },
  { nombre: 'Camiseta', precio: 25, tallas: ['S','M','L','XL'], color: 'rojo' }
]);
tput: "Documentos de productos con campos completamente distintos. MongoDB no exige que todos los documentos en una colección tengan el mismo esquema. El primer producto tiene especs, el segundo tallas y color."
```

## Tips
- Diseña tus documentos para que las consultas más frecuentes lean un solo documento (embedding en vez de references). MongoDB es más rápido leyendo un documento grande que haciendo joins (lookups) entre colecciones.
- Usa índices compuestos que coincidan exactamente con tus patrones de consulta. Usa explain() para ver si tus queries usan índices. Una collection sin índices hace collection scan en cada consulta.
- Mantén los documentos pequeños: < 1MB recomendado. Documentos muy grandes (> 10MB) degradan el rendimiento. Si un documento crece sin límite (ej: array de comentarios), refactoriza a colección separada.
- Configura réplica set siempre, incluso en desarrollo. Con replica set habilitas change streams y transacciones. Además, replica set = failover automático. Un solo nodo no es producción.

## FAQ
- **¿MongoDB es ACID?** Sí, desde MongoDB 4.0 soporta transacciones multi-documento ACID dentro de una réplica set, y desde 4.2 en sharded clusters. Las transacciones garantizan atomicidad, consistencia, aislamiento y durabilidad.
- **¿MongoDB vs PostgreSQL?** PostgreSQL es mejor para datos relacionales, joins complejos, integridad referencial y transacciones pesadas. MongoDB es mejor para esquemas flexibles, datos jerárquicos, escalado horizontal nativo y prototipado rápido.
- **¿MongoDB es gratis?** MongoDB Community Server es open source. MongoDB Enterprise tiene más features (LDAP, Kerberos, auditoría, encriptación). MongoDB Atlas (cloud) tiene tier gratis de 512MB. La licencia SSPL limita su uso como servicio gestionado.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://mongodb.com
- **Source Code Issues:** Check the repository at https://github.com/mongodb/mongo for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
