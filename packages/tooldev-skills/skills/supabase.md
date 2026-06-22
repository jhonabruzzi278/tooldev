---
name: supabase
description: Plataforma open source que reemplaza Firebase con PostgreSQL, autenticación, almacenamiento y funciones serverless. Úsala cuando el usuario mencione o pregunte sobre base-datos, postgresql, backend, serverless.
---

# Supabase

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** backend
- **Pricing:** freemium
- **License:** Apache 2.0
- **Technical Level:** intermedio
- **Compatibility:** Web, iOS, Android
- **Official Site:** https://supabase.com
- **GitHub:** https://github.com/supabase/supabase

## Features
- Base de datos PostgreSQL con API REST y Realtime
- Autenticación integrada con múltiples proveedores
- Almacenamiento de archivos con políticas de seguridad
- Edge Functions para lógica serverless
- Realtime subscriptions para datos en vivo
- Dashboard web para gestión visual
- CLI y SDK para múltiples lenguajes

## Steps
### 1. Crear un proyecto en Supabase
Regístrate en supabase.com, crea un nuevo proyecto y selecciona la región. Supabase provisionará una base de datos PostgreSQL, almacenamiento y autenticación automáticamente.

### 2. Obtener credenciales y configurar el SDK
Copia la URL del proyecto y la anon key desde el dashboard. Instala @supabase/supabase-js en tu frontend e inicializa el cliente con estas credenciales.

### 3. Diseñar el esquema de base de datos
Usa el Table Editor visual en el dashboard o escribe SQL directamente para crear tablas, definir relaciones, índices y políticas de seguridad (Row Level Security).

### 4. Implementar autenticación y consultas
Configura proveedores de autenticación (email, Google, GitHub, etc.), implementa sign-up/login en tu app y usa el cliente de Supabase para consultas, inserciones y suscripciones en tiempo real.

## When to Use
- **Backend completo para startups:** Cuando necesitas lanzar un MVP rápidamente con base de datos, autenticación y almacenamiento sin configurar servidores ni escribir APIs REST desde cero.
- **Aplicaciones con datos en tiempo real:** Ideal para apps de chat, dashboards en vivo, colaboración en tiempo real y cualquier funcionalidad que requiera sincronización instantánea entre usuarios.
- **Alternativa open source a Firebase:** Si quieres los beneficios de un BaaS pero prefieres PostgreSQL sobre NoSQL y valoras la posibilidad de auto-hospedar para evitar vendor lock-in.

## Examples
### Consulta con Realtime en JavaScript
```
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
supabase
  .channel('cambios')
  .on('postgres_changes', { event: '*', schema: 'public', table: 'tareas' }, (payload) => {
    console.log('Cambio detectado:', payload);
  })
  .subscribe();
tput: "La aplicación recibe actualizaciones en tiempo real cada vez que la tabla tareas cambia, sin polling ni websockets manuales."
```

## Tips
- Habilita Row Level Security (RLS) en todas las tablas desde el inicio y define políticas granulares para quién puede leer, insertar, actualizar o eliminar cada fila.
- Usa el CLI de Supabase (npx supabase init) para versionar el esquema de base de datos con migraciones SQL y compartir la configuración con todo el equipo.
- Aprovecha los tipos TypeScript generados automáticamente con supabase gen types typescript para tener IntelliSense completo en todas las consultas.
- Configura backups automáticos y point-in-time recovery en proyectos de producción para proteger los datos contra eliminaciones accidentales.
- Usa Edge Functions para lógica que requiere secretos (como Stripe o envío de emails) que no pueden ejecutarse de forma segura en el frontend.

## FAQ
- **¿Supabase reemplaza completamente un backend?** Para la mayoría de aplicaciones, sí. Provee base de datos, autenticación, almacenamiento y Edge Functions. Solo necesitas un backend separado para lógica de negocio muy compleja o integraciones muy específicas.
- **¿Cuánto cuesta Supabase?** El plan gratuito incluye 500 MB de base de datos, 5 GB de almacenamiento y 50,000 usuarios activos. El plan Pro ($25/mes) escala estos límites y agrega backups diarios y sin límite de peticiones API.
- **¿Puedo migrar desde Firebase?** Sí, Supabase ofrece una guía de migración. La diferencia principal es el modelo de datos: pasas de NoSQL (Firestore) a SQL (PostgreSQL), lo que requiere rediseñar el esquema pero ofrece mayor potencia de consultas.
- **¿Qué pasa si Supabase tiene una caída?** Supabase tiene SLA de 99.95% en planes de pago. Al ser open source y basado en PostgreSQL, puedes configurar réplicas externas y tener un plan de disaster recovery independiente del proveedor.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://supabase.com
- **Source Code Issues:** Check the repository at https://github.com/supabase/supabase for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
