---
name: PostgreSQL
description: Sistema de base de datos relacional open source avanzado con soporte para consultas complejas, extensiones y alto rendimiento.
category: backend
tags: [base-de-datos, sql, relacional, backend, open-source, json]
officialSite: https://postgresql.org
github: https://github.com/postgres/postgres
pricing: open-source
openSource: true
license: PostgreSQL
technicalLevel: intermedio
compatibility: [Windows, macOS, Linux, Docker]
featured: false
verified: true
features:
  - Soporte completo de SQL con ventanas, CTE y funciones agregadas
  - Extensiones potentes como PostGIS, pgvector y TimescaleDB
  - Replicación nativa en streaming y lógica
  - Índices avanzados (B-tree, Hash, GiST, GIN, BRIN)
  - JSON nativo con indexación y consultas funcionales
  - MVCC para concurrencia sin bloqueos de lectura
  - Roles, RLS y compliance ACID completo
  - Vistas materializadas y tablas particionadas
alternatives: [mysql, mongodb, sqlite]
relatedTools: [supabase, drizzle-orm, prisma, neon]
howToUse:
  - step: 1
    title: "Instala PostgreSQL"
    description: "Descarga desde postgresql.org o usa brew install postgresql@16 (macOS) / apt install postgresql (Linux). En Windows usa el instalador oficial que incluye pgAdmin."
  - step: 2
    title: "Arranca el servicio y crea una base de datos"
    description: "Ejecuta pg_ctl start (Linux/macOS) o usa Services.msc (Windows). Crea tu base con CREATE DATABASE mibd; desde psql, la CLI interactiva que viene incluida."
  - step: 3
    title: "Conecta desde tu aplicación"
    description: "Instala el driver de tu lenguaje (pg en Node.js, psycopg2 en Python, go-pg en Go) y conéctate con postgresql://usuario:pass@localhost:5432/mibd. Usa pool de conexiones para producción."
  - step: 4
    title: "Ejecuta migraciones y optimiza consultas"
    description: "Usa EXPLAIN ANALYZE para depurar queries lentas. Crea índices estratégicos, particiona tablas grandes y configura VACUUM autónomo para mantener el rendimiento."
whenToUse:
  - title: "Datos relacionales con integridad referencial"
    description: "Para aplicaciones que necesitan transacciones ACID, relaciones entre tablas y consistencia fuerte. Ideal para sistemas financieros, ERP, CRM y cualquier app donde los datos no pueden perderse ni desincronizarse."
  - title: "Consultas analíticas complejas"
    description: "Cuando necesitas ventanas, CTE recursivas, funciones agregadas avanzadas o consultas entre múltiples tablas con millones de registros. PostgreSQL soporta paralelismo de consultas nativo."
  - title: "Datos geoespaciales con PostGIS"
    description: "Para sistemas con datos de ubicación, mapas, rutas o análisis territorial. PostGIS convierte PostgreSQL en un sistema de información geográfica completo con índices espaciales y funciones GIS."
examples:
  - title: "CTE recursiva para jerarquía de empleados"
    code: |
      WITH RECURSIVE organigrama AS (
        SELECT id, nombre, jefe_id, 1 AS nivel
        FROM empleados WHERE jefe_id IS NULL
        UNION ALL
        SELECT e.id, e.nombre, e.jefe_id, o.nivel + 1
        FROM empleados e
        JOIN organigrama o ON e.jefe_id = o.id
      )
      SELECT * FROM organigrama ORDER BY nivel, nombre;
    output: "Devuelve toda la jerarquía organizacional con nivel de profundidad calculado automáticamente, desde el CEO hasta el último reporte."
  - title: "Búsqueda de texto completo con ranking"
    code: |
      SELECT titulo, ts_rank(to_tsvector('spanish', contenido), plainto_tsquery('spanish', 'base de datos robusta')) AS rank
      FROM articulos
      WHERE to_tsvector('spanish', contenido) @@ plainto_tsquery('spanish', 'base de datos robusta')
      ORDER BY rank DESC LIMIT 10;
    output: "Devuelve los 10 artículos más relevantes ordenados por cercanía semántica, usando stemming en español y ranking TF-IDF."
tips:
  - text: "Habilita pg_stat_statements en postgresql.conf para identificar las queries lentas. Es la herramienta más efectiva para encontrar cuellos de botella sin herramientas externas."
  - text: "Usa connection pooling con PgBouncer en producción. PostgreSQL crea un proceso por conexión, y más de 200 conexiones simultáneas degradan el rendimiento significativamente."
  - text: "Configura VACUUM autónomo con valores agresivos en tablas con alta tasa de UPDATE/DELETE para evitar bloat y mantener el tamaño de la tabla bajo control."
  - text: "Para backups en caliente usa pg_dump para bases pequeñas y pg_basebackup para bases grandes. Combínalo con WAL archiving continuo para Point-In-Time Recovery."
faq:
  - question: "¿PostgreSQL es mejor que MySQL?"
    answer: "Depende del caso. PostgreSQL tiene mejor soporte de SQL avanzado (CTE, ventanas, JSON funcional), extensiones como PostGIS, y mejor manejo de concurrencia. MySQL es más simple de configurar y tiene mejor ecosistema de hosting compartido. Para aplicaciones nuevas, PostgreSQL es la recomendación general."
  - question: "¿PostgreSQL soporta datos JSON?"
    answer: "Sí, con los tipos JSON y JSONB. JSONB está indexado internamente y permite consultas funcionales con operadores como @>, ? y #>>. Es tan rápido como MongoDB para muchos casos de uso de documentos."
  - question: "¿Cómo escalo PostgreSQL?"
    answer: "Verticalmente (más RAM/CPU) es lo más común. Para escalado horizontal usa replicación en streaming con lectura en réplicas, particionamiento nativo (declarative partitioning), o soluciones como Citus para sharding distribuido."
publishedAt: 2026-06-01
---

## ¿Qué es?

PostgreSQL es un sistema de base de datos relacional open source con más de 30 años de desarrollo activo. Es conocido por su confiabilidad, robustez y soporte de SQL avanzado que compite con bases de datos comerciales como Oracle.

## ¿Para qué sirve?

PostgreSQL sirve para almacenar, consultar y analizar datos estructurados y semi-estructurados. Es la base de datos principal de innumerables aplicaciones web, sistemas financieros, plataformas geoespaciales y herramientas de análisis de datos.

## Cuándo usarla

- Para aplicaciones que requieren transacciones ACID e integridad referencial.
- Cuando necesitas consultas analíticas complejas con CTE y ventanas.
- Para datos geoespaciales con PostGIS.
- Si trabajas con datos JSON y necesitas consultas funcionales.
- Como base de datos principal de cualquier proyecto nuevo donde no haya razones para escoger otra.

## Cuándo NO usarla

- Para almacenamiento clave-valor simple (Redis es mejor).
- Para documentos puros sin relaciones (MongoDB puede ser más simple).
- Cuando solo necesitas una base de datos embebida sin servidor (SQLite es mejor).
- Para OLAP puro con terabytes de datos (ClickHouse o Snowflake son mejores).

## Pros

- SQL avanzado con CTE, ventanas y funciones agregadas.
- Extensiones potentes (PostGIS, pgvector, TimescaleDB).
- Comunidad grande y madura con 30+ años de desarrollo.
- Licencia open source sin restricciones comerciales.
- Replicación nativa y Point-In-Time Recovery.

## Contras

- Mayor consumo de recursos que SQLite para cargas ligeras.
- Configuración de replicación y clustering más compleja que soluciones managed.
- La replicación física no permite escribir en réplicas.
- El tuning de rendimiento requiere conocimiento especializado.

## CLI

```bash
psql -U usuario -d mibd              # Conectar a base de datos
psql -c "SELECT * FROM tabla;"       # Ejecutar query directa
pg_dump mibd > backup.sql            # Backup de base de datos
pg_restore -d mibd backup.sql        # Restaurar backup
createdb mibd_nueva                  # Crear base de datos
dropdb mibd_vieja                    # Eliminar base de datos
```
