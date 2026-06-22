---
name: nodejs
description: Entorno de ejecución JavaScript del lado del servidor basado en V8, ideal para APIs, microservicios y herramientas CLI. Úsala cuando el usuario mencione o pregunte sobre javascript, runtime, servidor, api.
---

# Node.js

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** backend
- **Pricing:** gratis
- **License:** MIT
- **Technical Level:** intermedio
- **Compatibility:** Windows, macOS, Linux
- **Official Site:** https://nodejs.org
- **GitHub:** https://github.com/nodejs/node

## Features
- Motor V8 de Google con rendimiento excepcional
- npm: el registro de paquetes más grande del mundo
- Modelo asíncrono no bloqueante con event loop
- Soporte nativo para módulos ES y CommonJS
- API de sistema de archivos y red integrada
- Streams para procesamiento de datos eficiente
- Cluster para escalar en múltiples núcleos

## Steps
### 1. Instalar Node.js y configurar el entorno
Descarga Node.js desde nodejs.org (versión LTS recomendada) o usa un gestor de versiones como nvm o fnm. Verifica la instalación con `node --version` y `npm --version`. El instalador incluye npm automáticamente.

### 2. Crear un proyecto con package.json
Ejecuta `npm init -y` para generar el archivo package.json con la configuración predeterminada. Este archivo define las dependencias, scripts, metadatos y el punto de entrada de tu aplicación.

### 3. Instalar dependencias y crear el servidor
Instala paquetes con `npm install <nombre>`. Crea un archivo `index.js` con un servidor HTTP usando el módulo nativo `http` o un framework como Express. Define rutas, middlewares y lógica de negocio.

### 4. Ejecutar, depurar y desplegar la aplicación
Usa `node index.js` para desarrollo, `node --inspect` para depuración con Chrome DevTools, y `npm run start` en producción. Para producción, usa process managers como PM2 o contenedores Docker.

## When to Use
- **APIs REST y GraphQL de alto rendimiento:** Node.js destaca en aplicaciones con alta concurrencia de I/O, como APIs RESTful con Express, Fastify o GraphQL con Apollo Server. Su modelo asíncrono no bloqueante maneja miles de conexiones simultáneas eficientemente.
- **Aplicaciones en tiempo real con WebSockets:** Usa Socket.IO o WebSockets nativos para chats, notificaciones push, dashboards en vivo y colaboración en tiempo real. El event loop de Node.js es ideal para mantener conexiones persistentes.
- **Herramientas CLI y scripts de automatización:** Node.js es la plataforma estándar para construir herramientas de línea de comandos con paquetes como Commander, Inquirer y Chalk. Todo el ecosistema de herramientas frontend (webpack, vite, eslint) corre sobre Node.js.

## Examples
### Servidor HTTP básico con módulo nativo
```
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ mensaje: 'Hola desde Node.js' }));
});
server.listen(3000, () => console.log('Servidor en http://localhost:3000'));
tput: "Servidor en http://localhost:3000 // Visitando la URL: {\"mensaje\":\"Hola desde Node.js\"}"
```

### API REST con Express
```
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
tput: "GET /api/usuarios -> [] // POST /api/usuarios -> 201 Created"
```

## Tips
- Usa siempre `async/await` en lugar de callbacks anidados. El código es más legible y el manejo de errores con try/catch es más natural que las cadenas de `.then().catch()`.
- Utiliza un process manager como PM2 en producción. Ofrece reinicio automático tras crashes, balanceo de carga entre núcleos y monitoreo de métricas en tiempo real.
- Carga las variables de entorno con `dotenv` en desarrollo y configura las variables directamente en el sistema en producción. Nunca comitees archivos `.env` con secretos al repositorio.
- Implementa compresión con `compression` middleware, rate limiting con `express-rate-limit` y CORS configurado correctamente en tus APIs antes de exponerlas a internet.
- Monitorea el event loop con `process.monitorEventLoopDelay()` y evita bloquearlo con operaciones síncronas como `fs.readFileSync` en servidores en producción.

## FAQ
- **¿Qué versión de Node.js debo usar?** Siempre la versión LTS (Long Term Support) para producción. Las versiones impares son experimentales y tienen soporte limitado. La LTS activa recibe actualizaciones de seguridad y correcciones críticas durante 30 meses.
- **¿Debo usar CommonJS o ES Modules?** ES Modules (`import/export`) es el estándar moderno y el futuro. Si tu proyecto es nuevo, usa ESM configurando `\"type\": \"module\"` en package.json. Si mantienes código legacy o dependencias que requieren `require`, usa CommonJS.
- **¿Express es el mejor framework para Node.js?** Express es el más popular y maduro, ideal para aprender. Para nuevos proyectos considera Fastify (mayor rendimiento, schema validation nativo) o Hono (más ligero, compatible con edge runtimes y multi-plataforma).
- **¿Node.js es adecuado para tareas con uso intensivo de CPU?** No, Node.js no es óptimo para tareas CPU-intensivas como procesamiento de imágenes, machine learning o cálculos pesados. En esos casos usa worker_threads para paralelizar, o delega a servicios en lenguajes como Rust, Go o Python.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://nodejs.org
- **Source Code Issues:** Check the repository at https://github.com/nodejs/node for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
