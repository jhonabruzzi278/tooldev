---
name: Drizzle ORM
description: ORM TypeScript ligero y tipado con SQL-like API, rendimiento nativo y zero-dependency runtime.
category: backend
tags: [orm, database, typescript, sql, postgresql, mysql, sqlite]
officialSite: https://orm.drizzle.team
github: https://github.com/drizzle-team/drizzle-orm
pricing: gratis
openSource: true
license: Apache-2.0
technicalLevel: intermedio
compatibility: ["Web", Node.js, Deno, Bun]
featured: false
verified: true
features:
  - ORM TypeScript tipado con inferencia completa
  - SQL-like API que se siente como escribir SQL nativo
  - Soporte para Postgres, MySQL, SQLite y Turso
  - Migraciones auto-generadas y versionables
  - Relaciones con joins tipados automáticos
  - Zero dependencies en runtime
  - Drizzle Kit para gestión visual de esquemas
alternatives: [prisma]
relatedTools: [neon, supabase, node-js, bun]
howToUse:
  - step: 1
    title: "Instalar Drizzle ORM y el driver de base de datos"
    description: "Instala drizzle-orm junto con el driver correspondiente a tu base de datos (pg para Postgres, mysql2 para MySQL, better-sqlite3 para SQLite) y drizzle-kit como dependencia de desarrollo para gestionar migraciones."
  - step: 2
    title: "Definir el esquema de la base de datos"
    description: "Crea un archivo schema.ts donde defines las tablas usando las funciones de Drizzle (pgTable, mysqlTable, sqliteTable). Define columnas con tipos específicos, claves primarias, valores por defecto y relaciones entre tablas."
  - step: 3
    title: "Generar y ejecutar migraciones"
    description: "Ejecuta drizzle-kit generate para crear archivos de migración SQL a partir de los cambios en tu esquema. Usa drizzle-kit migrate para aplicar las migraciones pendientes en la base de datos. Las migraciones son archivos SQL versionables."
  - step: 4
    title: "Realizar consultas tipadas"
    description: "Importa tu instancia de drizzle y el esquema para ejecutar consultas con tipado completo. Usa select(), insert(), update() y delete() con la API SQL-like. Tus consultas tienen tipos inferidos automáticamente de tu esquema de base de datos."
whenToUse:
  - title: "TypeScript con tipado completo de base de datos"
    description: "Cuando quieres que TypeScript conozca exactamente la estructura de tus tablas y los tipos de retorno de cada consulta, sin necesidad de generar tipos manualmente o usar herramientas externas."
  - title: "Rendimiento SQL nativo sin abstracción pesada"
    description: "Drizzle genera SQL eficiente y cercano al que escribirías manualmente. Si el rendimiento de las consultas es crítico y no quieres que el ORM añada overhead innecesario, Drizzle es la mejor opción."
  - title: "Migraciones versionables en Git"
    description: "Las migraciones son archivos SQL planos que puedes revisar, modificar y versionar en Git. Esto da control total sobre los cambios en el esquema, a diferencia de ORMs que generan migraciones opacas."
examples:
  - title: "Esquema de usuarios y posts con relaciones"
    code: |
      import { pgTable, serial, text, varchar, integer } from 'drizzle-orm/pg-core'
      import { relations } from 'drizzle-orm'

      export const users = pgTable('users', {
        id: serial('id').primaryKey(),
        name: varchar('name', { length: 255 }).notNull(),
        email: varchar('email', { length: 255 }).unique().notNull(),
      })

      export const posts = pgTable('posts', {
        id: serial('id').primaryKey(),
        title: text('title').notNull(),
        userId: integer('user_id').references(() => users.id),
      })

      export const usersRelations = relations(users, ({ many }) => ({
        posts: many(posts),
      }))
    output: "Define tablas de usuarios y posts con sus columnas tipadas, clave foránea y relaciones. Drizzle infiere los tipos automáticamente para usar en consultas."
  - title: "Consulta con join y filtro tipado"
    code: |
      import { eq } from 'drizzle-orm'
      import { db } from './db'
      import { users, posts } from './schema'

      const results = await db
        .select()
        .from(users)
        .leftJoin(posts, eq(users.id, posts.userId))
        .where(eq(users.email, 'usuario@email.com'))
    output: "results tiene el tipo inferido automáticamente con todas las columnas de users y posts (nullable por el leftJoin). El filtro where es completamente tipado y verificado en tiempo de compilación."
tips:
  - text: "Usa drizzle-kit studio para explorar visualmente tu base de datos durante el desarrollo; es una GUI que se ejecuta en el navegador y permite ver y editar datos en tiempo real."
  - text: "Define los tipos de tu base de datos con $inferSelect e $inferInsert para obtener tipos TypeScript precisos de cada tabla sin duplicar definiciones."
  - text: "Aprovecha el modo push de drizzle-kit (npx drizzle-kit push) durante el prototipado para aplicar cambios de esquema directamente sin generar archivos de migración."
  - text: "Para consultas complejas que Drizzle no puede expresar, usa db.execute() para ejecutar SQL crudo manteniendo la misma conexión y pool de la base de datos."
  - text: "Organiza el archivo de esquema separando tablas en módulos (users.ts, posts.ts) y unificándolos en un index.ts para mantener el código limpio en proyectos grandes."
faq:
  - question: "¿Drizzle ORM es más rápido que Prisma?"
    answer: "Sí, en benchmarks Drizzle ORM muestra menor latencia y overhead porque genera SQL más eficiente y no tiene una capa de engine separada como Prisma. En operaciones de lectura/escritura intensivas, Drizzle suele ser más rápido."
  - question: "¿Puedo usar Drizzle con bases de datos existentes?"
    answer: "Sí, usa drizzle-kit introspect para generar automáticamente el esquema de Drizzle a partir de una base de datos existente. Esto lee las tablas, columnas y relaciones y genera los archivos TypeScript correspondientes."
  - question: "¿Drizzle soporta migraciones automáticas en producción?"
    answer: "No se recomienda el modo push en producción. El flujo recomendado es generar migraciones SQL con drizzle-kit generate, revisarlas manualmente, versionarlas en Git y aplicarlas con drizzle-kit migrate en los entornos de despliegue."
  - question: "¿Cómo manejo transacciones con Drizzle?"
    answer: "Usa db.transaction() que recibe un callback asíncrono. Todas las operaciones dentro del callback se ejecutan en una transacción atómica. Si alguna falla, todas se revierten automáticamente."
publishedAt: 2026-06-01
---

## ¿Qué es?

Drizzle ORM es un ORM TypeScript que prioriza el tipado completo, el rendimiento y la experiencia SQL-like. A diferencia de otros ORMs no abstrae SQL sino que lo mejora con tipos inferidos automáticamente, generando queries eficientes sin overhead.

## ¿Para qué sirve?

Drizzle ORM sirve para interactuar con bases de datos SQL desde TypeScript de forma tipada y eficiente. Genera migraciones, maneja relaciones y ejecuta queries con total seguridad de tipos sin sacrificar rendimiento.

## Cuándo usarla

- Cuando quieres un ORM TypeScript con tipado completo y rendimiento nativo.
- Para proyectos Postgres, MySQL o SQLite que necesitan migraciones.
- Si prefieres escribir SQL en lugar de aprender una API de ORM abstracta.
- Para equipos que valoran el rendimiento sobre la abstracción.
- Cuando trabajas con Neon, Turso o Supabase.

## Cuándo NO usarla

- Si prefieres una API más abstracta como Prisma con schema declarativo.
- Para proyectos que dependen mucho de relaciones automáticas eager loading.
- Cuando tu equipo no está familiarizado con SQL.
- Si necesitas soporte avanzado de MongoDB (usa Mongoose).

## Pros

- Tipado completo con inferencia automática de tipos de base de datos.
- Rendimiento casi nativo sin overhead de abstracción.
- Migraciones auto-generadas y versionables.
- API SQL-like que no oculta lo que hace.
- Zero dependencies en producción.

## Contras

- Curva de aprendizaje si no sabes SQL.
- Menos ecosistema de plugins que Prisma.
- Documentación puede ser menos accesible para principiantes.
- Las relaciones no cargan automáticamente (hay que hacer joins explícitos).
- Comunidad más pequeña que Prisma.

## CLI

Drizzle Kit es el CLI companion para migraciones y gestión de esquemas:

```bash
npm install -D drizzle-kit            # Instalar como dev dependency
npx drizzle-kit generate              # Generar migraciones SQL
npx drizzle-kit push                  # Push directo a DB (prototipado)
npx drizzle-kit migrate               # Ejecutar migraciones pendientes
npx drizzle-kit studio                # GUI browser para explorar DB
npx drizzle-kit introspect            # Generar schema desde DB existente
npx drizzle-kit up                    # Actualizar snapshots de schema
```
