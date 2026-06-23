---
name: PocketBase
description: Backend open-source todo-en-uno con base de datos SQLite embebida, autenticación, archivos y UI admin.
category: backend
tags: [backend, baas, sqlite, go, api, realtime, self-hosted]
officialSite: https://pocketbase.io
pricing: gratis
openSource: true
license: MIT
technicalLevel: intermedio
compatibility: ["Web", API]
featured: false
screenshots:
  - /screenshots/pocketbase.webp
  - /screenshots/pocketbase-2.webp
  - /screenshots/pocketbase-3.webp
features:
  - Base de datos SQLite embebida (sin dependencias externas)
  - Autenticación con email, OAuth2, OIDC y magic links
  - API REST generada automáticamente desde el schema
  - Subscripciones en tiempo real vía Server-Sent Events (SSE)
  - Panel de administración web UI/UX moderno
  - Almacenamiento de archivos con thumbnails
  - Colecciones con permisos granulares por usuario y rol
alternatives: [supabase, appwrite, firebase]
relatedTools: [go, docker, next-js, react, svelte]
howToUse:
  - step: 1
    title: "Descargar y ejecutar PocketBase"
    description: "Descarga el binario para tu sistema desde pocketbase.io. Ejecuta `./pocketbase serve` para iniciar el servidor en el puerto 8090. Accede al panel de administración en `http://127.0.0.1:8090/_/` y crea una cuenta de administrador en el primer inicio."
  - step: 2
    title: "Definir colecciones desde el admin UI"
    description: "En el panel admin, crea colecciones con campos de diferentes tipos: texto, número, booleano, email, URL, fecha, relación y archivo. Configura reglas de API por operación (list, view, create, update, delete) para controlar quién puede acceder a qué datos."
  - step: 3
    title: "Conectar desde tu frontend con el SDK"
    description: "Instala `pocketbase` desde npm e inicializa el cliente con la URL de tu servidor. Usa `pb.collection().getList()`, `pb.collection().create()` y demás métodos para interactuar con tus colecciones. El SDK maneja autenticación, tiempo real y carga de archivos."
  - step: 4
    title: "Configurar autenticación y permisos"
    description: "Habilita los métodos de autenticación que necesites: email/contraseña, OAuth2 (Google, GitHub, etc.), OIDC y magic links. Define reglas de acceso por colección usando el query builder integrado para filtrar datos según el usuario autenticado."
whenToUse:
  - title: "Prototipo rápido con backend completo"
    description: "En minutos tienes base de datos, API REST, autenticación multi-proveedor, almacenamiento de archivos y panel admin. Ideal para hackathons, MVPs y proyectos donde la velocidad de desarrollo es prioritaria sobre la escalabilidad masiva."
  - title: "Aplicación con actualizaciones en tiempo real"
    description: "Suscríbete a cambios en colecciones con `pb.collection().subscribe()`. PocketBase usa Server-Sent Events para notificar al frontend en tiempo real cuando los datos cambian, perfecto para chats, dashboards en vivo y colaboración."
  - title: "Self-hosting sin dependencias complejas"
    description: "PocketBase es un solo binario compilado en Go con SQLite embebida. No necesitas instalar Postgres, Redis o configurar contenedores. Ejecútalo en un VPS de $5, Raspberry Pi o incluso localmente para desarrollo."
examples:
  - title: "Listar y crear registros con JavaScript SDK"
    code: |
      import PocketBase from 'pocketbase';
      const pb = new PocketBase('http://127.0.0.1:8090');

      // Listar registros
      const tareas = await pb.collection('tareas').getList(1, 20, {
        filter: 'completado = false',
        sort: '-created'
      });
      console.log(tareas.items);

      // Crear nuevo registro
      const nueva = await pb.collection('tareas').create({
        titulo: 'Aprender PocketBase',
        completado: false
      });
    output: "Registros listados y nueva tarea creada con ID y timestamps automáticos"
  - title: "Suscripción a cambios en tiempo real"
    code: |
      pb.collection('tareas').subscribe('*', (e) => {
        console.log(`Evento: ${e.action}`, e.record);
      });
    output: "Evento: create { titulo: 'Nueva tarea', ... }\nEvento: update { titulo: 'Tarea editada', ... }"
tips:
  - text: "Usa el admin UI para prototipar el schema de datos rápidamente. Una vez estabilizado, exporta la configuración como `pb_schema.json` para versionarlo en git y recrear el esquema en otros entornos."
  - text: "Implementa la lógica de negocio en Go extendiendo PocketBase con hooks. Los hooks `OnRecordCreate`, `OnRecordUpdate` y `OnRecordDelete` te permiten validar, transformar datos y disparar acciones personalizadas del lado del servidor."
  - text: "Configura CORS y el dominio permitido en el admin UI antes de conectar tu frontend. Sin la configuración correcta, las solicitudes desde el navegador serán bloqueadas por políticas de mismo origen."
  - text: "Para producción, ejecuta PocketBase detrás de un reverse proxy como Caddy o Nginx con HTTPS. El binario por sí mismo solo sirve HTTP. Un reverse proxy también permite balanceo de carga y compresión gzip."
  - text: "Versiona el archivo `pb_schema.json` en tu repositorio pero nunca comitees `pb_data/`. El directorio data contiene la base de datos SQLite y archivos sensibles que no deben exponerse en control de versiones."
faq:
  - question: "¿PocketBase es adecuado para producción?"
    answer: "Sí, para aplicaciones pequeñas y medianas. SQLite maneja bien cargas moderadas (~1000 escrituras/segundo, millones de lecturas). Para aplicaciones con decenas de miles de usuarios concurrentes, considera Supabase con Postgres u otras soluciones escalables horizontalmente."
  - question: "¿Cómo despliego PocketBase en producción?"
    answer: "La forma más simple es subir el binario a un VPS (Hetzner, DigitalOcean), ejecutarlo con systemd o supervisor, y poner Nginx/Caddy delante para HTTPS. También puedes usar Docker con el volumen `pb_data` persistente. Existen templates para Fly.io y Railway."
  - question: "¿Puedo usar PocketBase con React, Vue, Svelte u otros frameworks?"
    answer: "Sí, el SDK de JavaScript/TypeScript funciona con cualquier framework o incluso vanilla JS. PocketBase expone una API REST estándar y SSE, así que puedes integrarlo con cualquier lenguaje que soporte HTTP: Python, Go, Rust, Swift, Kotlin, etc."
  - question: "¿Qué limitaciones tiene SQLite en PocketBase?"
    answer: "SQLite solo permite un escritor a la vez, lo que puede convertirse en cuello de botella con muchas escrituras concurrentes. No soporta réplicas nativas ni sharding. Para aplicaciones que crecerán masivamente, considera migrar los datos a Postgres con pgloader cuando sea necesario."
publishedAt: 2026-06-01
---

## ¿Qué es?

PocketBase es un backend open-source que combina base de datos SQLite embebida, autenticación, almacenamiento de archivos, API REST y panel de administración en un solo binario. Escrito en Go, se despliega como un único ejecutable sin dependencias externas.

## ¿Para qué sirve?

PocketBase sirve como backend completo para aplicaciones web y móviles. Reemplaza Firebase, Supabase o un backend custom con una solución self-hosted que es increíblemente simple de configurar y desplegar.

## Cuándo usarla

- Cuando quieres un backend completo en minutos sin escribir código.
- Para proyectos personales y prototipos que necesitan backend rápido.
- Si buscas una alternativa self-hosted a Firebase o Supabase.
- Para aplicaciones que necesitan tiempo real con SSE.
- Cuando quieres un solo binario que incluya DB, auth, API y admin UI.

## Cuándo NO usarla

- Para aplicaciones que requieren escalado masivo SQL (mejor Postgres con Supabase).
- Si necesitas queries SQL complejas con joins avanzados (SQLite tiene límites).
- Para equipos que prefieren backend-as-a-service sin self-hosting.
- Cuando la alta disponibilidad y replicación son críticas.

## Pros

- Solo binario, sin dependencias (Go + SQLite).
- Panel admin UI moderno incluido.
- API REST y tiempo real automáticos.
- Autenticación multi-proveedor.
- Licencia MIT, self-hosted.

## Contras

- SQLite no escala como Postgres.
- Sin replicación nativa.
- Comunidad más pequeña que Supabase.
- Menos extensiones y plugins que Firebase.
- Go como lenguaje de extensión (no JavaScript/TypeScript).

## CLI

PocketBase CLI maneja la ejecución del servidor, migraciones y gestión:

```bash
# Descargar binario desde https://pocketbase.io/docs/
pocketbase serve                     # Iniciar servidor (puerto 8090)
pocketbase admin create "admin@example.com" "password123"
pocketbase migrate                   # Ejecutar migraciones
pocketbase migrate create "name"     # Crear nueva migración
pocketbase --version                 # Versión instalada
pocketbase --help                    # Ayuda general
```
