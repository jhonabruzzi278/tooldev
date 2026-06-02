---
name: Prisma
description: ORM moderno para TypeScript y Node.js con schema declarativo, migraciones, y cliente autogenerado type-safe.
category: backend
tags: [orm, base-datos, typescript, nodejs, schema, migraciones]
officialSite: https://www.prisma.io
pricing: freemium
openSource: true
license: Apache-2.0
technicalLevel: intermedio
compatibility: [Windows, macOS, Linux]
featured: false
features:
  - Schema declarativo con modelo de datos visual
  - Cliente autogenerado con tipos TypeScript completos
  - Migraciones con versionado y rollback
  - Prisma Studio para explorar datos visualmente
  - Soporte para PostgreSQL, MySQL, SQLite, SQL Server, MongoDB
  - Relaciones eager loading con include y select
  - Prisma Accelerate para caché y conexiones optimizadas
alternatives: []
relatedTools: [node-js, supabase, docker]
howToUse:
  - step: 1
    title: "Define tu schema de datos"
    description: "Crea el archivo schema.prisma definiendo el datasource (PostgreSQL, MySQL, etc.), el generator (prisma-client-js) y los modelos con sus campos, tipos, relaciones y restricciones."
  - step: 2
    title: "Ejecuta migraciones"
    description: "Usa npx prisma migrate dev --name init para generar la primera migración. Prisma compara el schema con la base de datos y crea los archivos SQL necesarios en la carpeta prisma/migrations."
  - step: 3
    title: "Genera y usa el cliente type-safe"
    description: "Ejecuta npx prisma generate para crear el cliente tipado. Importa PrismaClient en tu código y accede a los datos con autocompletado completo de TypeScript, incluyendo relaciones con include."
whenToUse:
  - title: "Aplicaciones TypeScript con bases de datos relacionales"
    description: "Cuando tu proyecto usa TypeScript y necesitas type safety desde la base de datos hasta el frontend, eliminando errores por queries mal escritas o campos inexistentes."
  - title: "Proyectos con migraciones versionadas"
    description: "Para equipos que necesitan un historial claro de cambios en el schema de la base de datos, con la capacidad de aplicar, revertir y trackear migraciones en el repositorio."
  - title: "Prototipado rápido con múltiples bases de datos"
    description: "Cuando necesitas cambiar de SQLite en desarrollo local a PostgreSQL en producción sin modificar el código de acceso a datos."
examples:
  - title: "Schema con relaciones uno a muchos"
    code: |
      model User {
        id    Int    @id @default(autoincrement())
        email String @unique
        name  String
        posts Post[]
      }
      model Post {
        id       Int    @id @default(autoincrement())
        title    String
        content  String?
        author   User   @relation(fields: [authorId], references: [id])
        authorId Int
      }
    output: "Migración generada: CREATE TABLE \"User\"... CREATE TABLE \"Post\"..."
  - title: "Consulta con include de relaciones"
    code: |
      const user = await prisma.user.findUnique({
        where: { email: "user@example.com" },
        include: { posts: { orderBy: { createdAt: "desc" } } }
      });
    output: "{ id: 1, email: 'user@example.com', posts: [{ title: 'Mi post', ... }] }"
tips:
  - text: "Usa npx prisma studio para explorar y editar datos visualmente durante el desarrollo; es más rápido que escribir queries SQL a mano."
  - text: "Define relaciones explícitamente con @relation para evitar ambigüedades cuando hay múltiples relaciones entre los mismos modelos."
  - text: "Aprovecha los enums de Prisma para campos con valores fijos; se mapean a tipos nativos de TypeScript y mejoran la legibilidad."
  - text: "Usa select en lugar de include cuando solo necesitas algunos campos; reduce la cantidad de datos transferidos y mejora el rendimiento."
  - text: "Ejecuta npx prisma validate en tu pipeline CI/CD para verificar que el schema es válido antes de hacer deploy."
faq:
  - question: "¿Prisma reemplaza completamente escribir SQL?"
    answer: "No completamente. Prisma maneja la mayoría de operaciones CRUD y queries comunes, pero para queries muy complejas con CTEs, window functions o full-text search avanzado, puedes usar $queryRaw para ejecutar SQL puro con type safety parcial."
  - question: "¿Cómo manejo migraciones en producción sin downtime?"
    answer: "Usa npx prisma migrate deploy que solo aplica migraciones pendientes sin generar nuevas. Crea migraciones en desarrollo, comitéalas, y aplica con deploy en producción. Para cambios de schema que requieren pasos intermedios, usa migraciones personalizadas."
  - question: "¿Puedo usar Prisma con bases de datos existentes?"
    answer: "Sí, ejecuta npx prisma db pull para introspectar una base de datos existente y generar automáticamente el archivo schema.prisma con todos los modelos y relaciones detectados."
  - question: "¿Prisma funciona con serverless y edge functions?"
    answer: "Sí, Prisma Accelerate optimiza conexiones para entornos serverless y edge. Sin Accelerate, necesitas configurar connection pooling externo como PgBouncer para PostgreSQL."
publishedAt: 2026-06-01
---

## ¿Qué es?

Prisma es un ORM (Object-Relational Mapping) moderno para Node.js y TypeScript. En lugar de escribir SQL o usar modelos tradicionales, defines tu schema en un archivo declarativo y Prisma genera un cliente type-safe con autocompletado y validación de tipos.

## ¿Para qué sirve?

Prisma sirve para interactuar con bases de datos desde aplicaciones Node.js y TypeScript de forma segura y productiva. Genera queries optimizadas, maneja migraciones, y proporciona un explorador visual (Prisma Studio) para ver y editar datos.

## Cuándo usarla

- Cuando trabajas con TypeScript y quieres type safety en la base de datos.
- Para proyectos que requieren migraciones de base de datos versionadas.
- Si buscas una alternativa moderna a TypeORM o Sequelize.
- Cuando necesitas soporte para múltiples bases de datos con la misma API.
- Para equipos que valoran DX y productividad.

## Cuándo NO usarla

- Si necesitas queries SQL extremadamente optimizadas y específicas.
- Para proyectos muy pequeños con una sola tabla simple.
- Cuando trabajas con bases de datos no relacionales complejas.
- Si prefieres raw SQL o query builders como Kysely.

## Pros

- Type safety completo desde el schema hasta el cliente.
- Experiencia de desarrollo excelente con autocompletado.
- Migraciones seguras y versionadas.
- Prisma Studio para debugging visual.
- Documentación excelente y ejemplos prácticos.

## Contras

- Performance overhead comparado con SQL puro en queries complejas.
- Curva de aprendizaje para modelado relacional avanzado.
- Dependencia del CLI y generación de código.
- Algunas features avanzadas de SQL no están soportadas.
- La versión cloud (Accelerate) tiene costo adicional.
