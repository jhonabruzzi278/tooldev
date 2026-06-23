---
name: Neon
description: Base de datos serverless PostgreSQL con branching, escalado automático y storage separado de cómputo.
category: backend
tags: [database, postgresql, serverless, sql, cloud]
officialSite: https://neon.tech
pricing: freemium
openSource: true
license: Apache-2.0
technicalLevel: intermedio
compatibility: ["Web", API, SQL]
featured: false
screenshots:
  - /screenshots/neon.webp
features:
  - Postgres serverless con escalado automático a cero
  - Branching de bases de datos como ramas de git
  - Storage y cómputo separados para escalado independiente
  - Instantaneas y restauración point-in-time
  - Pooler de conexiones integrado (PgBouncer)
  - Réplicas de lectura para escalar consultas
  - Interfaz web con editor SQL y monitoreo
alternatives: [supabase]
relatedTools: [drizzle-orm, prisma, postman]
howToUse:
  - step: 1
    title: "Crear una cuenta y configurar tu proyecto"
    description: "Regístrate en neon.tech, crea un proyecto y elige la región más cercana. Neon generará automáticamente una base de datos PostgreSQL lista para conectar en segundos, con panel de monitoreo y SQL Editor incluidos en la interfaz web."
  - step: 2
    title: "Conectar la base de datos a tu aplicación"
    description: "Copia la connection string desde el dashboard y configúrala como variable de entorno. Para aplicaciones serverless, usa el pooler de conexiones (PgBouncer integrado) que evita problemas de límites de conexiones simultáneas."
  - step: 3
    title: "Crear y gestionar branches de base de datos"
    description: "Usa `neonctl branches create` o el dashboard para crear branches aislados. Cada branch es una copia independiente de tus datos que puedes usar para desarrollo, staging y preview deployments sin afectar producción."
  - step: 4
    title: "Monitorear consultas y optimizar rendimiento"
    description: "Revisa el Query Performance Dashboard para identificar consultas lentas, usa EXPLAIN ANALYZE en el SQL Editor y ajusta las unidades de cómputo según las métricas de uso en tiempo real."
whenToUse:
  - title: "Aplicaciones serverless con tráfico impredecible"
    description: "Neon escala a cero cuando no hay tráfico, ideal para proyectos con picos de uso variables. Solo pagas por los recursos consumidos, perfecto para startups y side projects que buscan minimizar costos de infraestructura."
  - title: "Entornos de preview por cada Pull Request"
    description: "Crea un branch de base de datos por cada PR en Vercel o Netlify. Cada preview deployment accede a datos aislados para pruebas sin riesgo de dañar la base de datos de producción."
  - title: "Migración desde PostgreSQL tradicional"
    description: "Compatible con pg_dump, pg_restore y todas las herramientas estándar de Postgres. Migra desde Heroku, RDS o cualquier instancia auto-gestionada sin cambiar tu stack de ORM o drivers."
examples:
  - title: "Conexión con Drizzle ORM"
    code: |
      import { drizzle } from 'drizzle-orm/neon-http';
      import { neon } from '@neondatabase/serverless';

      const sql = neon(process.env.DATABASE_URL!);
      const db = drizzle({ client: sql });

      const usuarios = await db.select().from(tablaUsuarios);
      console.log(usuarios);
    output: "[{ id: 1, nombre: 'Ana' }, ...]"
  - title: "Branching con la CLI de Neon"
    code: |
      neonctl branches create --parent main --name feature-auth
      neonctl connection-string feature-auth
    output: "Branch creado. Connection string: postgresql://..."
tips:
  - text: "Usa siempre el connection pooler en entornos serverless como Vercel o AWS Lambda para evitar saturar el límite de conexiones directas a PostgreSQL."
  - text: "Crea un branch de staging antes de aplicar migraciones en producción. Si la migración falla, eliminas el branch sin consecuencias."
  - text: "Habilita las réplicas de lectura si tu aplicación tiene muchas consultas SELECT. Distribuye las lecturas a las réplicas y concentra las escrituras en el nodo principal."
  - text: "Revisa periódicamente el consumo de almacenamiento. Cada branch duplica los datos heredados del padre, lo que puede multiplicar el uso con muchos branches activos."
  - text: "Configura alertas de uso en el dashboard para recibir notificaciones antes de alcanzar los límites del plan gratuito (500MB de almacenamiento, 10 branches)."
faq:
  - question: "¿Neon es compatible con Prisma y otros ORMs?"
    answer: "Sí, completamente. Neon funciona con Prisma, Drizzle, Knex, TypeORM y cualquier librería que use conexiones PostgreSQL estándar vía TCP, HTTP o WebSocket."
  - question: "¿Qué ocurre con mis datos cuando la base escala a cero?"
    answer: "Los datos permanecen íntegros en el almacenamiento. Solo se apaga el cómputo. La próxima consulta reactiva el cómputo automáticamente con un cold start de 500ms a 2 segundos."
  - question: "¿Puedo migrar una base de datos PostgreSQL existente a Neon?"
    answer: "Sí, usando pg_dump y pg_restore estándar. El dashboard también ofrece una herramienta de migración que se conecta directamente a tu base de datos de origen."
  - question: "¿El plan gratuito es suficiente para proyectos en producción?"
    answer: "El plan gratuito incluye 500MB de almacenamiento, 10 branches y 1GB de transferencia. Es adecuado para proyectos pequeños y prototipos. Para producción con tráfico real se recomienda el plan Pro."
publishedAt: 2026-06-01
---

## ¿Qué es?

Neon es una base de datos serverless PostgreSQL que separa el cómputo del almacenamiento. Ofrece branching similar a git, escalado automático a cero cuando no se usa y soporte nativo para el ecosistema Postgres con drivers estándar.

## ¿Para qué sirve?

Neon sirve como base de datos principal para aplicaciones web modernas, especialmente aquellas con cargas de trabajo variables. Es ideal para equipos que quieren Postgres sin gestionar servidores, con branching para entornos de desarrollo y preview.

## Cuándo usarla

- Cuando quieres Postgres serverless con escalado automático.
- Para equipos que necesitan bases de datos por branch para desarrollo y preview.
- Si buscas una alternativa serverless a RDS o Aurora.
- Para proyectos con tráfico variable que se benefician de escalado a cero.
- Cuando usas Prisma o Drizzle ORM con Postgres.

## Cuándo NO usarla

- Si necesitas compatibilidad total con todas las extensiones de Postgres.
- Para cargas de trabajo con latencia ultra baja (el cold start puede afectar).
- Cuando prefieres una base de datos tradicional siempre activa.
- Si tu workload requiere escrituras masivas y constantes sin pausas.

## Pros

- Escalado automático a cero sin gestión de servidores.
- Branching de bases de datos como ramas de git.
- Pooler de conexiones integrado.
- Restauración point-in-time y backups automáticos.
- Compatible con herramientas Postgres estándar (psql, pg_dump).

## Contras

- Cold start en conexiones después de inactividad.
- No soporta todas las extensiones de Postgres.
- Latencia de red mayor que Postgres auto-gestionado.
- Dependencia de servicio cloud (aunque hay self-hosted en desarrollo).
- Límites en el plan gratuito (10 proyectos, 500MB).

## CLI

Neon CLI (`neonctl`) permite gestionar proyectos, branches y bases de datos desde terminal:

```bash
npm i -g neonctl                      # Instalar CLI
neonctl auth                          # Autenticación vía navegador
neonctl projects list                 # Listar proyectos
neonctl branches create --name dev    # Crear branch
neonctl databases create --name mydb  # Crear base de datos
neonctl connection-string dev         # Obtener string de conexión
neonctl me --output json              # Info del usuario en JSON
```
