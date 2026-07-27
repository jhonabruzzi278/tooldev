---
name: CockroachDB
description: SQL distribuido para aplicaciones resistentes y disponibles globalmente.
category: backend
tags: [sql, distributed, database, postgres-compatible, resilience]
officialSite: https://www.cockroachlabs.com
github: https://github.com/cockroachdb/cockroach
pricing: freemium
openSource: true
license: BSL 1.1
technicalLevel: avanzado
compatibility: [Web, API]
featured: false
verified: false
features:
  - Base de datos SQL distribuida compatible con PostgreSQL
  - Replicación y supervivencia automática ante caídas de nodos
  - Escalado horizontal añadiendo nodos sin re-sharding manual
  - Despliegues multi-región con data domiciliation
  - Transacciones ACID distribuidas con serializabilidad
  - CockroachDB Cloud serverless con escalado a demanda
  - Compatibilidad con ORMs y drivers de PostgreSQL
alternatives: [postgresql, neon, turso]
relatedTools: [prisma, aiven]
howToUse:
  - step: 1
    title: "Crear un clúster en CockroachDB Cloud"
    description: "Regístrate en cockroachlabs.com, crea un clúster Basic gratuito eligiendo el proveedor cloud y la región, y espera unos minutos a que se provisione."
  - step: 2
    title: "Conectar tu aplicación"
    description: "Descarga el certificado del clúster, copia la cadena de conexión y usa cualquier driver u ORM de PostgreSQL (pg, Prisma, TypeORM, Django) apuntando al clúster."
  - step: 3
    title: "Modelar el esquema y escalar"
    description: "Crea tus tablas con SQL estándar, sigue las buenas prácticas de diseño de claves primarias de CockroachDB y aumenta las request units cuando lo necesites."
whenToUse:
  - title: "Alta disponibilidad real ante fallos"
    description: "Cuando tu aplicación no puede permitirse caídas y necesitas que la base de datos sobreviva a la pérdida de nodos o incluso de una región."
  - title: "Aplicaciones globales multi-región"
    description: "Para servir usuarios en varios continentes con datos particionados por región y cumplimiento de residencia de datos."
tips:
  - text: "Usa claves primarias con UUID o valores no secuenciales para evitar hotspots de escritura en rangos concretos del clúster."
  - text: "Aprovecha la compatibilidad con PostgreSQL para migrar con herramientas y ORMs existentes, pero revisa las diferencias documentadas."
  - text: "Empieza en el plan Basic y pasa a planes superiores solo cuando necesites control de regiones o rendimiento predecible."
faq:
  - question: "¿Qué incluye el plan gratuito de CockroachDB?"
    answer: "El plan Basic de CockroachDB Cloud ofrece hasta 10 GiB de almacenamiento y 50 millones de request units al mes sin coste."
  - question: "¿CockroachDB es realmente compatible con PostgreSQL?"
    answer: "Soporta el protocolo wire, gran parte del SQL y los drivers de PostgreSQL, aunque algunas funciones avanzadas tienen soporte limitado."
  - question: "¿Puedo autoalojarlo?"
    answer: "Sí, el núcleo es open source bajo licencia BSL 1.1 y puedes desplegar CockroachDB en tus propios servidores o Kubernetes."
  - question: "¿Qué son las request units?"
    answer: "Son la unidad de consumo de CockroachDB Cloud serverless que mide el uso de cómputo y E/S; en el plan Basic tienes 50 millones gratis al mes."
publishedAt: 2026-07-21
---

## ¿Qué es?

CockroachDB es una base de datos SQL distribuida, compatible con PostgreSQL, diseñada para sobrevivir a fallos de nodos y regiones sin intervención manual. Escala horizontalmente y mantiene transacciones ACID en todo el clúster.

## ¿Para qué sirve?

Sirve para aplicaciones críticas que necesitan alta disponibilidad, despliegues multi-región y escalado elástico sin re-sharding manual, manteniendo la familiaridad del SQL de PostgreSQL.

## Cuándo usarla

- Cuando la disponibilidad es crítica y los fallos deben auto-recuperarse.
- Para apps globales con datos distribuidos por región.
- Si quieres escalar SQL horizontalmente sin sharding manual.

## Cuándo NO usarla

- Para proyectos simples donde un PostgreSQL gestionado normal basta.
- Si dependes de funciones muy específicas de PostgreSQL no soportadas.

## Pros

- Resiliencia real ante caídas de nodos y regiones.
- Escalado horizontal transparente.
- Plan Basic gratuito para empezar sin tarjeta.

## Contras

- Complejidad conceptual mayor que una base de datos tradicional.
- La compatibilidad con PostgreSQL no es total al 100%.
