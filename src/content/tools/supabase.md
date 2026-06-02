---
name: Supabase
description: Plataforma open source que reemplaza Firebase con PostgreSQL, autenticación, almacenamiento y funciones serverless.
category: backend
tags: [base-datos, postgresql, backend, serverless, autenticacion, baas]
officialSite: https://supabase.com
github: https://github.com/supabase/supabase
pricing: freemium
openSource: true
license: Apache 2.0
technicalLevel: intermedio
compatibility: [Web, iOS, Android]
featured: false
features:
  - Base de datos PostgreSQL con API REST y Realtime
  - Autenticación integrada con múltiples proveedores
  - Almacenamiento de archivos con políticas de seguridad
  - Edge Functions para lógica serverless
  - Realtime subscriptions para datos en vivo
  - Dashboard web para gestión visual
  - CLI y SDK para múltiples lenguajes
alternatives: []
relatedTools: [docker, postman]
howToUse:
  - step: 1
    title: "Crear un proyecto en Supabase"
    description: "Regístrate en supabase.com, crea un nuevo proyecto y selecciona la región. Supabase provisionará una base de datos PostgreSQL, almacenamiento y autenticación automáticamente."
  - step: 2
    title: "Obtener credenciales y configurar el SDK"
    description: "Copia la URL del proyecto y la anon key desde el dashboard. Instala @supabase/supabase-js en tu frontend e inicializa el cliente con estas credenciales."
  - step: 3
    title: "Diseñar el esquema de base de datos"
    description: "Usa el Table Editor visual en el dashboard o escribe SQL directamente para crear tablas, definir relaciones, índices y políticas de seguridad (Row Level Security)."
  - step: 4
    title: "Implementar autenticación y consultas"
    description: "Configura proveedores de autenticación (email, Google, GitHub, etc.), implementa sign-up/login en tu app y usa el cliente de Supabase para consultas, inserciones y suscripciones en tiempo real."
whenToUse:
  - title: "Backend completo para startups"
    description: "Cuando necesitas lanzar un MVP rápidamente con base de datos, autenticación y almacenamiento sin configurar servidores ni escribir APIs REST desde cero."
  - title: "Aplicaciones con datos en tiempo real"
    description: "Ideal para apps de chat, dashboards en vivo, colaboración en tiempo real y cualquier funcionalidad que requiera sincronización instantánea entre usuarios."
  - title: "Alternativa open source a Firebase"
    description: "Si quieres los beneficios de un BaaS pero prefieres PostgreSQL sobre NoSQL y valoras la posibilidad de auto-hospedar para evitar vendor lock-in."
examples:
  - title: "Consulta con Realtime en JavaScript"
    code: |
      import { createClient } from '@supabase/supabase-js';
      const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      supabase
        .channel('cambios')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'tareas' }, (payload) => {
          console.log('Cambio detectado:', payload);
        })
        .subscribe();
    output: "La aplicación recibe actualizaciones en tiempo real cada vez que la tabla tareas cambia, sin polling ni websockets manuales."
tips:
  - text: "Habilita Row Level Security (RLS) en todas las tablas desde el inicio y define políticas granulares para quién puede leer, insertar, actualizar o eliminar cada fila."
  - text: "Usa el CLI de Supabase (npx supabase init) para versionar el esquema de base de datos con migraciones SQL y compartir la configuración con todo el equipo."
  - text: "Aprovecha los tipos TypeScript generados automáticamente con supabase gen types typescript para tener IntelliSense completo en todas las consultas."
  - text: "Configura backups automáticos y point-in-time recovery en proyectos de producción para proteger los datos contra eliminaciones accidentales."
  - text: "Usa Edge Functions para lógica que requiere secretos (como Stripe o envío de emails) que no pueden ejecutarse de forma segura en el frontend."
faq:
  - question: "¿Supabase reemplaza completamente un backend?"
    answer: "Para la mayoría de aplicaciones, sí. Provee base de datos, autenticación, almacenamiento y Edge Functions. Solo necesitas un backend separado para lógica de negocio muy compleja o integraciones muy específicas."
  - question: "¿Cuánto cuesta Supabase?"
    answer: "El plan gratuito incluye 500 MB de base de datos, 5 GB de almacenamiento y 50,000 usuarios activos. El plan Pro ($25/mes) escala estos límites y agrega backups diarios y sin límite de peticiones API."
  - question: "¿Puedo migrar desde Firebase?"
    answer: "Sí, Supabase ofrece una guía de migración. La diferencia principal es el modelo de datos: pasas de NoSQL (Firestore) a SQL (PostgreSQL), lo que requiere rediseñar el esquema pero ofrece mayor potencia de consultas."
  - question: "¿Qué pasa si Supabase tiene una caída?"
    answer: "Supabase tiene SLA de 99.95% en planes de pago. Al ser open source y basado en PostgreSQL, puedes configurar réplicas externas y tener un plan de disaster recovery independiente del proveedor."
publishedAt: 2026-06-01
---

## ¿Qué es?

Supabase es una alternativa open source a Firebase que proporciona una base de datos PostgreSQL completamente administrada, autenticación, almacenamiento de archivos y funciones serverless. Se destaca por usar tecnologías estándar y open source, permitiendo tanto auto-hosting como su servicio en la nube.

## ¿Para qué sirve?

Supabase sirve para construir el backend completo de aplicaciones web y móviles sin necesidad de configurar servidores, crear APIs REST automáticas desde tu esquema de base de datos, manejar autenticación de usuarios y almacenar archivos con políticas de seguridad granulares.

## Cuándo usarla

- Cuando necesitas un backend completo sin gestionar servidores.
- Para proyectos que requieren PostgreSQL con capacidades en tiempo real.
- Si buscas una alternativa open source a Firebase.
- Cuando quieres escalar desde prototipo a producción sin migrar.
- Para equipos que prefieren SQL sobre NoSQL.

## Cuándo NO usarla

- Si ya tienes una infraestructura backend existente funcionando bien.
- Cuando necesitas una base de datos NoSQL (usa MongoDB o Firebase).
- Para proyectos que requieren capacidades globales de baja latencia (Cloudflare D1 puede ser mejor).
- Si prefieres construir tu API manualmente con tu stack favorito.

## Pros

- Open source con licencia Apache 2.0, evita vendor lock-in.
- PostgreSQL es una base de datos madura y poderosa.
- API REST y GraphQL generadas automáticamente.
- Realtime subscriptions para apps en vivo.
- Dashboard intuitivo para gestión visual de datos.

## Contras

- Ecosistema más pequeño comparado con Firebase.
- Edge Functions menos maduras que AWS Lambda.
- Los planes gratuitos tienen limitaciones en almacenamiento.
- La consola puede ser más lenta que otros servicios.
- Documentación en crecimiento pero aún incompleta en algunas áreas.
