---
name: postgresql
description: >- Úsala cuando el usuario mencione o pregunte sobre base-de-datos, sql, relacional, backend.
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
>-

### 2. Arranca el servicio y crea una base de datos
>-

### 3. Conecta desde tu aplicación
>-

### 4. Ejecuta migraciones y optimiza consultas
>-

## When to Use
- **Datos relacionales con integridad referencial:** >-
- **Consultas analíticas complejas:** >-
- **Datos geoespaciales con PostGIS:** >-

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
tput: >-
Devuelve toda la jerarquía organizacional con nivel de profundidad
calculado automáticamente, desde el CEO hasta el último reporte.
```

### Búsqueda de texto completo con ranking
```
>
```
**Output:** >-

## Tips
- >-
- >-
- >-
- >-

## FAQ
- **¿PostgreSQL es mejor que MySQL?** >-
- **¿PostgreSQL soporta datos JSON?** >-
- **¿Cómo escalo PostgreSQL?** >-

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://postgresql.org
- **Source Code Issues:** Check the repository at https://github.com/postgres/postgres for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
