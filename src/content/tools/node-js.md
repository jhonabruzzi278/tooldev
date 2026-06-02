---
name: Node.js
description: Entorno de ejecución JavaScript del lado del servidor basado en V8, ideal para APIs, microservicios y herramientas CLI.
category: backend
tags: [javascript, runtime, servidor, api, backend, npm]
officialSite: https://nodejs.org
pricing: gratis
openSource: true
license: MIT
technicalLevel: intermedio
compatibility: [Windows, macOS, Linux]
featured: false
features:
  - Motor V8 de Google con rendimiento excepcional
  - "npm: el registro de paquetes más grande del mundo"
  - Modelo asíncrono no bloqueante con event loop
  - Soporte nativo para módulos ES y CommonJS
  - API de sistema de archivos y red integrada
  - Streams para procesamiento de datos eficiente
  - Cluster para escalar en múltiples núcleos
alternatives: []
relatedTools: [docker, supabase, next-js, visual-studio-code]
howToUse:
  - step: 1
    title: "Instalar Node.js y configurar el entorno"
    description: "Descarga Node.js desde nodejs.org (versión LTS recomendada) o usa un gestor de versiones como nvm o fnm. Verifica la instalación con `node --version` y `npm --version`. El instalador incluye npm automáticamente."
  - step: 2
    title: "Crear un proyecto con package.json"
    description: "Ejecuta `npm init -y` para generar el archivo package.json con la configuración predeterminada. Este archivo define las dependencias, scripts, metadatos y el punto de entrada de tu aplicación."
  - step: 3
    title: "Instalar dependencias y crear el servidor"
    description: "Instala paquetes con `npm install <nombre>`. Crea un archivo `index.js` con un servidor HTTP usando el módulo nativo `http` o un framework como Express. Define rutas, middlewares y lógica de negocio."
  - step: 4
    title: "Ejecutar, depurar y desplegar la aplicación"
    description: "Usa `node index.js` para desarrollo, `node --inspect` para depuración con Chrome DevTools, y `npm run start` en producción. Para producción, usa process managers como PM2 o contenedores Docker."
whenToUse:
  - title: "APIs REST y GraphQL de alto rendimiento"
    description: "Node.js destaca en aplicaciones con alta concurrencia de I/O, como APIs RESTful con Express, Fastify o GraphQL con Apollo Server. Su modelo asíncrono no bloqueante maneja miles de conexiones simultáneas eficientemente."
  - title: "Aplicaciones en tiempo real con WebSockets"
    description: "Usa Socket.IO o WebSockets nativos para chats, notificaciones push, dashboards en vivo y colaboración en tiempo real. El event loop de Node.js es ideal para mantener conexiones persistentes."
  - title: "Herramientas CLI y scripts de automatización"
    description: "Node.js es la plataforma estándar para construir herramientas de línea de comandos con paquetes como Commander, Inquirer y Chalk. Todo el ecosistema de herramientas frontend (webpack, vite, eslint) corre sobre Node.js."
examples:
  - title: "Servidor HTTP básico con módulo nativo"
    code: |
      const http = require('http');
      const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ mensaje: 'Hola desde Node.js' }));
      });
      server.listen(3000, () => console.log('Servidor en http://localhost:3000'));
    output: "Servidor en http://localhost:3000 // Visitando la URL: {\"mensaje\":\"Hola desde Node.js\"}"
  - title: "API REST con Express"
    code: |
      const express = require('express');
      const app = express();
      app.use(express.json());

      const usuarios = [];

      app.get('/api/usuarios', (req, res) => res.json(usuarios));
      app.post('/api/usuarios', (req, res) => {
        usuarios.push(req.body);
        res.status(201).json(req.body);
      });

      app.listen(3000);
    output: "GET /api/usuarios -> [] // POST /api/usuarios -> 201 Created"
tips:
  - text: "Usa siempre `async/await` en lugar de callbacks anidados. El código es más legible y el manejo de errores con try/catch es más natural que las cadenas de `.then().catch()`."
  - text: "Utiliza un process manager como PM2 en producción. Ofrece reinicio automático tras crashes, balanceo de carga entre núcleos y monitoreo de métricas en tiempo real."
  - text: "Carga las variables de entorno con `dotenv` en desarrollo y configura las variables directamente en el sistema en producción. Nunca comitees archivos `.env` con secretos al repositorio."
  - text: "Implementa compresión con `compression` middleware, rate limiting con `express-rate-limit` y CORS configurado correctamente en tus APIs antes de exponerlas a internet."
  - text: "Monitorea el event loop con `process.monitorEventLoopDelay()` y evita bloquearlo con operaciones síncronas como `fs.readFileSync` en servidores en producción."
faq:
  - question: "¿Qué versión de Node.js debo usar?"
    answer: "Siempre la versión LTS (Long Term Support) para producción. Las versiones impares son experimentales y tienen soporte limitado. La LTS activa recibe actualizaciones de seguridad y correcciones críticas durante 30 meses."
  - question: "¿Debo usar CommonJS o ES Modules?"
    answer: "ES Modules (`import/export`) es el estándar moderno y el futuro. Si tu proyecto es nuevo, usa ESM configurando `\"type\": \"module\"` en package.json. Si mantienes código legacy o dependencias que requieren `require`, usa CommonJS."
  - question: "¿Express es el mejor framework para Node.js?"
    answer: "Express es el más popular y maduro, ideal para aprender. Para nuevos proyectos considera Fastify (mayor rendimiento, schema validation nativo) o Hono (más ligero, compatible con edge runtimes y multi-plataforma)."
  - question: "¿Node.js es adecuado para tareas con uso intensivo de CPU?"
    answer: "No, Node.js no es óptimo para tareas CPU-intensivas como procesamiento de imágenes, machine learning o cálculos pesados. En esos casos usa worker_threads para paralelizar, o delega a servicios en lenguajes como Rust, Go o Python."
publishedAt: 2026-06-01
---

## ¿Qué es?

Node.js es un entorno de ejecución JavaScript construido sobre el motor V8 de Chrome. Permite ejecutar JavaScript fuera del navegador, ideal para construir servidores web, APIs REST, aplicaciones en tiempo real, microservicios, herramientas CLI y automatizaciones.

## ¿Para qué sirve?

Node.js sirve para construir backend de aplicaciones web, APIs RESTful y GraphQL, aplicaciones en tiempo real con WebSockets, herramientas de línea de comandos, scripts de automatización, servidores proxy y aplicaciones IoT.

## Cuándo usarla

- Cuando quieres usar JavaScript tanto en frontend como en backend.
- Para construir APIs de alto rendimiento con I/O intensivo.
- Si necesitas aplicaciones en tiempo real como chats o dashboards.
- Cuando buscas un ecosistema masivo de paquetes con npm.
- Para prototipado rápido de servidores y microservicios.

## Cuándo NO usarla

- Para aplicaciones con uso intensivo de CPU (procesamiento de imágenes, ML).
- Cuando necesitas tipado fuerte nativo (usa Deno o Bun con TS nativo).
- Si tu equipo está más familiarizado con Python, Java o Go.
- Para sistemas embebidos o de recursos limitados.

## Pros

- Ecosistema npm masivo con más de 2 millones de paquetes.
- Modelo asíncrono eficiente para I/O.
- Misma lenguaje que el frontend, compartiendo tipos y lógica.
- Comunidad enorme y recursos educativos abundantes.
- Perfecto para microservicios y arquitecturas serverless.

## Contras

- Callback hell sin async/await (aunque hoy es manejable).
- No apto para tareas intensivas de CPU.
- npm puede tener problemas de dependencias complejas.
- Rendimiento inferior a Go o Rust en benchmarks.
- Madurez del ecosistema varía entre paquetes.
