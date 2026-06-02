---
name: Appwrite
description: Plataforma backend-as-a-service open-source con autenticación, bases de datos, almacenamiento y funciones serverless.
category: backend
tags: [baas, backend, serverless, autenticacion, database, storage, api]
officialSite: https://appwrite.io
pricing: freemium
openSource: true
license: BSD-3-Clause
technicalLevel: intermedio
compatibility: ["Web", "iOS", Android, Flutter, React Native]
featured: false
features:
  - Autenticación multi-proveedor (email, OAuth, SMS, magic links)
  - Base de datos en tiempo real con GraphQL y REST
  - Almacenamiento de archivos con previews y transformaciones
  - Funciones serverless con múltiples runtimes
  - Gestión de usuarios y roles con permisos granulares
  - Webhooks y mensajería push
  - SDKs para 9+ lenguajes y frameworks
alternatives: [supabase]
relatedTools: [react, docker, postman, next-js]
howToUse:
  - step: 1
    title: "Crea un proyecto en Appwrite Console"
    description: "Regístrate en Appwrite Cloud o instálalo en tu servidor con Docker Compose. Crea un proyecto y obtén el Project ID y API Endpoint que usarás para conectar tu aplicación."
  - step: 2
    title: "Instala el SDK en tu aplicación"
    description: "Agrega el SDK de Appwrite para tu plataforma (npm install appwrite para web/Node, o el SDK de Flutter, React Native, iOS o Android). Inicializa el cliente Client() con setEndpoint() y setProject()."
  - step: 3
    title: "Configura autenticación y base de datos"
    description: "Desde la consola de Appwrite, habilita proveedores de autenticación (email, Google, GitHub, SMS). Crea colecciones en la base de datos, define atributos y establece reglas de permisos a nivel de documento para controlar quién accede a qué."
  - step: 4
    title: "Crea funciones serverless y despliega"
    description: "Escribe funciones en Node.js, Python, Dart u otros runtimes para lógica backend personalizada. Despliega con el CLI (appwrite deploy function) y asigna triggers por eventos de base de datos, autenticación o peticiones HTTP."
whenToUse:
  - title: "Backend completo para apps móviles y web"
    description: "Cuando necesitas autenticación, base de datos en tiempo real, almacenamiento de archivos y funciones serverless sin escribir infraestructura ni gestionar servidores, especialmente para MVPs y productos en etapa temprana."
  - title: "Alternativa open-source a Firebase"
    description: "Si buscas un BaaS con funcionalidades similares a Firebase pero sin depender de Google Cloud, con la libertad de auto-hospedaje, código abierto bajo licencia BSD-3 y control total sobre tus datos."
  - title: "Prototipado rápido multi-plataforma"
    description: "Para validar ideas rápidamente con un backend funcional que funcione en web, iOS, Android, Flutter y React Native simultáneamente usando los mismos SDKs y APIs desde el día uno."
examples:
  - title: "Autenticación con email y creación de documento"
    code: |
      import { Client, Account, Databases, ID } from 'appwrite';

      const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('tu-project-id');

      const account = new Account(client);
      const session = await account.createEmailPasswordSession(
        'usuario@email.com',
        'contraseña-segura'
      );

      const db = new Databases(client);
      const doc = await db.createDocument(
        'db-id',
        'collection-id',
        ID.unique(),
        { nombre: 'Juan', email: 'usuario@email.com' }
      );
    output: "Usuario autenticado exitosamente y documento creado en la base de datos con ID único generado automáticamente."
tips:
  - text: "Define reglas de permisos a nivel de documento desde el inicio para controlar granularmente quién puede leer, escribir o eliminar cada registro, aprovechando los roles y equipos de Appwrite."
  - text: "Usa el CLI de Appwrite para automatizar despliegues de funciones y gestionar recursos desde la terminal sin depender de la consola web, ideal para flujos CI/CD."
  - text: "Aprovecha los webhooks para conectar Appwrite con servicios externos: notifica en Slack cuando un usuario se registra, envía correos con SendGrid o dispara builds de CI/CD en cada despliegue."
  - text: "Habilita la transformación de imágenes en el almacenamiento para generar automáticamente avatares, thumbnails y versiones optimizadas para web y móvil directamente desde la API."
  - text: "Utiliza variables de entorno en las funciones serverless para gestionar API keys, secretos y configuraciones por entorno sin hardcodear valores sensibles en el código fuente."
faq:
  - question: "¿Puedo migrar desde Firebase a Appwrite?"
    answer: "Sí, Appwrite ofrece una guía de migración y soporta flujos similares de autenticación, base de datos y almacenamiento. La migración implica adaptar los SDKs y posiblemente reestructurar los datos."
  - question: "¿Appwrite usa SQL o NoSQL?"
    answer: "Appwrite usa una base de datos documental (NoSQL) con soporte para GraphQL y REST. Si necesitas consultas SQL relacionales complejas, considera Supabase o complementa Appwrite con una base de datos externa."
  - question: "¿Puedo auto-hospedar Appwrite en mi propio servidor?"
    answer: "Sí, Appwrite es open-source y se puede instalar con Docker Compose en cualquier VPS o servidor dedicado. La guía oficial de instalación cubre configuraciones para producción con SSL y backups."
  - question: "¿Cómo manejo backups de mi base de datos?"
    answer: "En self-hosting debes configurar tus propios backups del volumen de datos y MariaDB. La versión cloud de Appwrite incluye backups automáticos y recuperación punto a punto en planes de pago."
publishedAt: 2026-06-01
---

## ¿Qué es?

Appwrite es una plataforma backend-as-a-service (BaaS) open-source que proporciona todas las herramientas backend que necesitas para construir aplicaciones modernas: autenticación, base de datos, almacenamiento, funciones serverless y más, todo con una API simple y SDKs multi-plataforma.

## ¿Para qué sirve?

Appwrite sirve como backend completo para aplicaciones web, móviles y de escritorio. Reduce drásticamente el tiempo de desarrollo al proveer autenticación, almacenamiento, base de datos y funciones serverless listas para usar.

## Cuándo usarla

- Cuando quieres un backend completo sin escribir código de infraestructura.
- Para aplicaciones que necesitan autenticación multi-proveedor.
- Si buscas una alternativa open-source a Firebase.
- Para equipos que trabajan con múltiples plataformas (web + mobile).
- Cuando necesitas almacenamiento de archivos con transformaciones de imagen.

## Cuándo NO usarla

- Si ya tienes un backend existente y solo necesitas una base de datos.
- Para aplicaciones que requieren queries SQL complejas (mejor Supabase + Postgres).
- Cuando necesitas escalar a miles de millones de usuarios (arquitectura monolítica).
- Si prefieres construir tu backend con herramientas separadas y especializadas.

## Pros

- Open-source con self-hosting posible.
- SDKs para web, iOS, Android, Flutter, React Native y más.
- Panel de administración web completo.
- Funciones serverless con múltiples runtimes.
- Autenticación multi-proveedor lista para usar.

## Contras

- Comunidad más pequeña que Supabase o Firebase.
- La base de datos no es SQL relacional (es document-based).
- Rendimiento puede ser limitado en self-hosting sin optimizar.
- Migración desde otras plataformas puede ser compleja.
- Algunas features avanzadas solo en plan cloud de pago.

## CLI

Appwrite CLI gestiona proyectos, funciones, usuarios y bases de datos desde terminal:

```bash
npm install -g appwrite-cli           # Instalar CLI
appwrite client --endpoint https://cloud.appwrite.io/v1 --key <API_KEY>
appwrite users list                   # Listar usuarios
appwrite databases list               # Listar bases de datos
appwrite functions list               # Listar funciones
appwrite functions create --runtime node-18.0 --name myFunction
appwrite deploy function              # Desplegar función
```
