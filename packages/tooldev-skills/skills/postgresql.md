---
name: postgresql
description: Sistema de base de datos relacional open source avanzado con soporte para consultas complejas, extensiones y alto rendimiento. Úsala cuando el usuario mencione o pregunte sobre base-de-datos, sql, relacional, backend.
---

# PostgreSQL

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** backend
- **Pricing:** open-source
- **License:** PostgreSQL
- **Technical Level:** intermedio
- **Compatibility:** Windows, macOS, Linux, Docker
- **Official Site:** https://postgresql.org
- **GitHub:** https://github.com/postgres/postgres
- **Alternatives:** mysql, mongodb, sqlite

## Features
- Soporte completo de SQL con ventanas, CTE y funciones agregadas
- Extensiones potentes como PostGIS, pgvector y TimescaleDB
- Replicación nativa en streaming y lógica
- Índices avanzados (B-tree, Hash, GiST, GIN, BRIN)
- JSON nativo con indexación y consultas funcionales
- MVCC para concurrencia sin bloqueos de lectura
- Roles, RLS y compliance ACID completo
- Vistas materializadas y tablas particionadas

## Steps
### 1. Instala PostgreSQL
Descarga desde postgresql.org o usa brew install postgresql@16 (macOS) / apt install postgresql (Linux). En Windows usa el instalador oficial que incluye pgAdmin.

### 2. Arranca el servicio y crea una base de datos
Ejecuta pg_ctl start (Linux/macOS) o usa Services.msc (Windows). Crea tu base con CREATE DATABASE mibd; desde psql, la CLI interactiva que viene incluida.

### 3. Conecta desde tu aplicación
Instala el driver de tu lenguaje (pg en Node.js, psycopg2 en Python, go-pg en Go) y conéctate con postgresql://usuario:pass@localhost:5432/mibd. Usa pool de conexiones para producción.

### 4. Ejecuta migraciones y optimiza consultas
Usa EXPLAIN ANALYZE para depurar queries lentas. Crea índices estratégicos, particiona tablas grandes y configura VACUUM autónomo para mantener el rendimiento.

## When to Use
- **Datos relacionales con integridad referencial:** Para aplicaciones que necesitan transacciones ACID, relaciones entre tablas y consistencia fuerte. Ideal para sistemas financieros, ERP, CRM y cualquier app donde los datos no pueden perderse ni desincronizarse.
- **Consultas analíticas complejas:** Cuando necesitas ventanas, CTE recursivas, funciones agregadas avanzadas o consultas entre múltiples tablas con millones de registros. PostgreSQL soporta paralelismo de consultas nativo.
- **Datos geoespaciales con PostGIS:** Para sistemas con datos de ubicación, mapas, rutas o análisis territorial. PostGIS convierte PostgreSQL en un sistema de información geográfica completo con índices espaciales y funciones GIS.

## Examples
### CTE recursiva para jerarquía de empleados
```
WITH RECURSIVE organigrama AS (
  SELECT id, nombre, jefe_id, 1 AS nivel
  FROM empleados WHERE jefe_id IS NULL
  UNION ALL
  SELECT e.id, e.nombre, e.jefe_id, o.nivel + 1
  FROM empleados e
  JOIN organigrama o ON e.jefe_id = o.id
)
SELECT * FROM organigrama ORDER BY nivel, nombre;
tput: "Devuelve toda la jerarquía organizacional con nivel de profundidad calculado automáticamente, desde el CEO hasta el último reporte."
```

### Búsqueda de texto completo con ranking
```
SELECT titulo, ts_rank(to_tsvector('spanish', contenido), plainto_tsquery('spanish', 'base de datos robusta')) AS rank
FROM articulos
WHERE to_tsvector('spanish', contenido) @@ plainto_tsquery('spanish', 'base de datos robusta')
ORDER BY rank DESC LIMIT 10;
tput: "Devuelve los 10 artículos más relevantes ordenados por cercanía semántica, usando stemming en español y ranking TF-IDF."
```

## Tips
- Habilita pg_stat_statements en postgresql.conf para identificar las queries lentas. Es la herramienta más efectiva para encontrar cuellos de botella sin herramientas externas.
- Usa connection pooling con PgBouncer en producción. PostgreSQL crea un proceso por conexión, y más de 200 conexiones simultáneas degradan el rendimiento significativamente.
- Configura VACUUM autónomo con valores agresivos en tablas con alta tasa de UPDATE/DELETE para evitar bloat y mantener el tamaño de la tabla bajo control.
- Para backups en caliente usa pg_dump para bases pequeñas y pg_basebackup para bases grandes. Combínalo con WAL archiving continuo para Point-In-Time Recovery.

## FAQ
- **¿PostgreSQL es mejor que MySQL?** Depende del caso. PostgreSQL tiene mejor soporte de SQL avanzado (CTE, ventanas, JSON funcional), extensiones como PostGIS, y mejor manejo de concurrencia. MySQL es más simple de configurar y tiene mejor ecosistema de hosting compartido. Para aplicaciones nuevas, PostgreSQL es la recomendación general.
- **¿PostgreSQL soporta datos JSON?** Sí, con los tipos JSON y JSONB. JSONB está indexado internamente y permite consultas funcionales con operadores como @>, ? y #>>. Es tan rápido como MongoDB para muchos casos de uso de documentos.
- **¿Cómo escalo PostgreSQL?** Verticalmente (más RAM/CPU) es lo más común. Para escalado horizontal usa replicación en streaming con lectura en réplicas, particionamiento nativo (declarative partitioning), o soluciones como Citus para sharding distribuido.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://postgresql.org
- **Source Code Issues:** Check the repository at https://github.com/postgres/postgres for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
