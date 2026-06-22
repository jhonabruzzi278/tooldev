---
name: drizzle-orm
description: ORM TypeScript ligero y tipado con SQL-like API, rendimiento nativo y zero-dependency runtime. Úsala cuando el usuario mencione o pregunte sobre orm, database, typescript, sql.
---

# Drizzle ORM

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** backend
- **Pricing:** gratis
- **License:** Apache-2.0
- **Technical Level:** intermedio
- **Compatibility:** Web, Node.js, Deno, Bun
- **Official Site:** https://orm.drizzle.team
- **GitHub:** https://github.com/drizzle-team/drizzle-orm
- **Alternatives:** prisma

## Features
- ORM TypeScript tipado con inferencia completa
- SQL-like API que se siente como escribir SQL nativo
- Soporte para Postgres, MySQL, SQLite y Turso
- Migraciones auto-generadas y versionables
- Relaciones con joins tipados automáticos
- Zero dependencies en runtime
- Drizzle Kit para gestión visual de esquemas

## Steps
### 1. Instalar Drizzle ORM y el driver de base de datos
Instala drizzle-orm junto con el driver correspondiente a tu base de datos (pg para Postgres, mysql2 para MySQL, better-sqlite3 para SQLite) y drizzle-kit como dependencia de desarrollo para gestionar migraciones.

### 2. Definir el esquema de la base de datos
Crea un archivo schema.ts donde defines las tablas usando las funciones de Drizzle (pgTable, mysqlTable, sqliteTable). Define columnas con tipos específicos, claves primarias, valores por defecto y relaciones entre tablas.

### 3. Generar y ejecutar migraciones
Ejecuta drizzle-kit generate para crear archivos de migración SQL a partir de los cambios en tu esquema. Usa drizzle-kit migrate para aplicar las migraciones pendientes en la base de datos. Las migraciones son archivos SQL versionables.

### 4. Realizar consultas tipadas
Importa tu instancia de drizzle y el esquema para ejecutar consultas con tipado completo. Usa select(), insert(), update() y delete() con la API SQL-like. Tus consultas tienen tipos inferidos automáticamente de tu esquema de base de datos.

## When to Use
- **TypeScript con tipado completo de base de datos:** Cuando quieres que TypeScript conozca exactamente la estructura de tus tablas y los tipos de retorno de cada consulta, sin necesidad de generar tipos manualmente o usar herramientas externas.
- **Rendimiento SQL nativo sin abstracción pesada:** Drizzle genera SQL eficiente y cercano al que escribirías manualmente. Si el rendimiento de las consultas es crítico y no quieres que el ORM añada overhead innecesario, Drizzle es la mejor opción.
- **Migraciones versionables en Git:** Las migraciones son archivos SQL planos que puedes revisar, modificar y versionar en Git. Esto da control total sobre los cambios en el esquema, a diferencia de ORMs que generan migraciones opacas.

## Examples
### Esquema de usuarios y posts con relaciones
```
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
tput: "Define tablas de usuarios y posts con sus columnas tipadas, clave foránea y relaciones. Drizzle infiere los tipos automáticamente para usar en consultas."
```

### Consulta con join y filtro tipado
```
import { eq } from 'drizzle-orm'
import { db } from './db'
import { users, posts } from './schema'
const results = await db
  .select()
  .from(users)
  .leftJoin(posts, eq(users.id, posts.userId))
  .where(eq(users.email, 'usuario@email.com'))
tput: "results tiene el tipo inferido automáticamente con todas las columnas de users y posts (nullable por el leftJoin). El filtro where es completamente tipado y verificado en tiempo de compilación."
```

## Tips
- Usa drizzle-kit studio para explorar visualmente tu base de datos durante el desarrollo; es una GUI que se ejecuta en el navegador y permite ver y editar datos en tiempo real.
- Define los tipos de tu base de datos con $inferSelect e $inferInsert para obtener tipos TypeScript precisos de cada tabla sin duplicar definiciones.
- Aprovecha el modo push de drizzle-kit (npx drizzle-kit push) durante el prototipado para aplicar cambios de esquema directamente sin generar archivos de migración.
- Para consultas complejas que Drizzle no puede expresar, usa db.execute() para ejecutar SQL crudo manteniendo la misma conexión y pool de la base de datos.
- Organiza el archivo de esquema separando tablas en módulos (users.ts, posts.ts) y unificándolos en un index.ts para mantener el código limpio en proyectos grandes.

## FAQ
- **¿Drizzle ORM es más rápido que Prisma?** Sí, en benchmarks Drizzle ORM muestra menor latencia y overhead porque genera SQL más eficiente y no tiene una capa de engine separada como Prisma. En operaciones de lectura/escritura intensivas, Drizzle suele ser más rápido.
- **¿Puedo usar Drizzle con bases de datos existentes?** Sí, usa drizzle-kit introspect para generar automáticamente el esquema de Drizzle a partir de una base de datos existente. Esto lee las tablas, columnas y relaciones y genera los archivos TypeScript correspondientes.
- **¿Drizzle soporta migraciones automáticas en producción?** No se recomienda el modo push en producción. El flujo recomendado es generar migraciones SQL con drizzle-kit generate, revisarlas manualmente, versionarlas en Git y aplicarlas con drizzle-kit migrate en los entornos de despliegue.
- **¿Cómo manejo transacciones con Drizzle?** Usa db.transaction() que recibe un callback asíncrono. Todas las operaciones dentro del callback se ejecutan en una transacción atómica. Si alguna falla, todas se revierten automáticamente.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://orm.drizzle.team
- **Source Code Issues:** Check the repository at https://github.com/drizzle-team/drizzle-orm for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
