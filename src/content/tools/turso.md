---
name: Turso
description: Bases SQLite en el edge con réplicas cerca de tus usuarios.
category: backend
tags: [sqlite, edge, database, distributed, libsql]
officialSite: https://turso.tech
github: https://github.com/tursodatabase/libsql
pricing: freemium
openSource: true
license: MIT
technicalLevel: intermedio
compatibility: [Web, API]
featured: false
verified: false
features:
  - SQLite distribuido basado en libsql, fork abierto de SQLite
  - Réplicas de lectura en múltiples regiones del edge
  - Embedded replicas para lecturas locales con latencia cero
  - Compatible con Drizzle, Prisma y los SDKs de SQLite
  - Branching de bases de datos para desarrollo
  - Backups automáticos y restauración a un punto en el tiempo
  - CLI y API para gestionar bases de datos
alternatives: [neon, supabase, upstash]
relatedTools: [drizzle-orm, prisma]
howToUse:
  - step: 1
    title: "Instalar la CLI y crear la base de datos"
    description: "Instala la CLI de Turso desde turso.tech, autentícate con turso auth login y crea tu base de datos con turso db create mi-db."
  - step: 2
    title: "Conectar tu aplicación"
    description: "Obtén la URL con turso db show y un token con turso db tokens create, instala el cliente @libsql/client y conéctate desde tu app con esas credenciales."
  - step: 3
    title: "Añadir réplicas y migraciones"
    description: "Crea réplicas en otras regiones con turso db replicate para acercar las lecturas a tus usuarios y gestiona el esquema con migraciones de Drizzle o SQL plano."
whenToUse:
  - title: "Apps globales con lecturas rápidas"
    description: "Cuando tus usuarios están repartidos por el mundo y necesitas lecturas de base de datos con baja latencia desde el edge."
  - title: "Arquitecturas multi-tenant"
    description: "Para crear una base de datos por cliente u organización aprovechando el bajo coste por base de datos del modelo SQLite."
  - title: "Funciones serverless y edge"
    description: "Ideal junto a Cloudflare Workers, Vercel o Deno Deploy, donde las conexiones TCP persistentes no son una opción."
tips:
  - text: "Usa embedded replicas en móvil o edge para leer de una copia local sincronizada y escribir contra la primaria."
  - text: "Aprovecha el branching de bases de datos para probar migraciones y seeds sin tocar producción."
  - text: "Combina Turso con Drizzle ORM: la integración es de las más pulidas y te da tipado extremo a extremo."
faq:
  - question: "¿Qué incluye el plan gratuito de Turso?"
    answer: "El plan gratuito incluye 100 bases de datos, 5 GB de almacenamiento total, 500 millones de filas leídas y 10 millones de filas escritas al mes."
  - question: "¿Qué diferencia hay entre Turso y SQLite normal?"
    answer: "Turso usa libsql, un fork open source de SQLite, y lo ofrece como servicio gestionado con acceso por HTTP, réplicas en el edge y backups automáticos."
  - question: "¿Puedo usar Prisma o Drizzle con Turso?"
    answer: "Sí, Turso es compatible con Drizzle y Prisma a través del driver de libsql, además de sus SDKs para JavaScript, TypeScript, Rust, Go y Python."
  - question: "¿Sirve para escrituras intensivas?"
    answer: "Las escrituras van siempre a la primaria, por lo que en cargas muy intensivas de escritura una base cliente-servidor como PostgreSQL puede encajar mejor."
publishedAt: 2026-07-21
---

## ¿Qué es?

Turso es una base de datos SQLite distribuida construida sobre libsql, un fork open source de SQLite. Ofrece bases de datos como servicio con réplicas de lectura en el edge y latencias muy bajas para usuarios globales.

## ¿Para qué sirve?

Sirve para dar persistencia SQL a aplicaciones serverless y edge, replicar datos cerca de los usuarios para lecturas rápidas y crear arquitecturas multi-tenant con una base de datos por cliente.

## Cuándo usarla

- En apps desplegadas en el edge que necesitan SQL con baja latencia.
- Para multi-tenancy con una base de datos por tenant.
- Si quieres SQLite gestionado con réplicas y backups.

## Cuándo NO usarla

- Para cargas de escritura muy intensivas y centralizadas (mejor PostgreSQL).
- Si necesitas extensiones avanzadas de PostgreSQL o procedimientos almacenados.

## Pros

- Lecturas de latencia mínima gracias a las réplicas edge.
- Plan gratuito amplio con 100 bases de datos.
- Compatible con el ecosistema SQLite y ORMs populares.

## Contras

- Escrituras limitadas a la región primaria.
- SQLite no cubre funcionalidades avanzadas de PostgreSQL.
