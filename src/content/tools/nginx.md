---
name: Nginx
description: Servidor web, reverse proxy y balanceador de carga de alto rendimiento usado por millones de sitios en producción.
category: devops
tags: [servidor-web, proxy, balanceo, devops, rendimiento, open-source]
officialSite: https://nginx.org
github: https://github.com/nginx/nginx
pricing: open-source
openSource: true
license: BSD-2
technicalLevel: intermedio
compatibility: [Windows, macOS, Linux, Docker]
featured: false
features:
  - Servidor HTTP/S estático y dinámico de alto rendimiento
  - Reverse proxy con balanceo de carga (round-robin, least_conn, IP hash)
  - Terminación SSL/TLS con soporte HTTP/2 y HTTP/3
  - Cache de contenido estático y dinámico
  - Limitación de tasa y control de acceso por IP
  - Servicio de archivos estáticos con sendfile optimizado
  - Proxy WebSocket y stream TCP/UDP
  - Rewrites y redirecciones condicionales
alternatives: [apache, caddy, traefik]
relatedTools: [docker, cloudflare, certbot]
howToUse:
  - step: 1
    title: "Instala Nginx"
    description: "Usa apt install nginx (Ubuntu/Debian), brew install nginx (macOS) o descarga el binario desde nginx.org. En producción siempre usa la versión estable del repositorio oficial."
  - step: 2
    title: "Configura un sitio básico"
    description: "Los archivos de configuración viven en /etc/nginx/sites-available/. Crea un archivo con server { listen 80; server_name tudominio.com; root /var/www/sitio; } y actívalo con ln -s a sites-enabled."
  - step: 3
    title: "Agrega HTTPS con Certbot"
    description: "Instala certbot y ejecuta certbot --nginx. Certbot modifica automáticamente tu configuración de Nginx para servir HTTPS con certificados Let's Encrypt y renovación automática."
  - step: 4
    title: "Configura reverse proxy para tu app"
    description: "Agrega location / { proxy_pass http://localhost:3000; proxy_set_header Host $host; proxy_set_header X-Real-IP $remote_addr; } para pasar tráfico a tu aplicación Node.js, Python o cualquier servicio corriendo en un puerto local."
  - step: 5
    title: "Monitorea y optimiza"
    description: "Usa nginx -t para validar config antes de recargar. Monitorea con stub_status o vendors como NGINX Amplify. Ajusta worker_processes y worker_connections según los cores de tu servidor."
whenToUse:
  - title: "Servir sitios estáticos y SPAs"
    description: "Para servir HTML, CSS, JS e imágenes con rendimiento máximo. Nginx maneja archivos estáticos sin necesidad de Node.js o Python, reduciendo la carga del servidor de aplicación."
  - title: "Reverse proxy para microservicios"
    description: "Cuando tienes múltiples servicios (API, frontend, admin) y quieres servirlos todos desde el mismo dominio/puerto con rutas diferentes. Nginx enruta cada /api/* al backend correcto."
  - title: "Balanceo de carga para alta disponibilidad"
    description: "Para distribuir tráfico entre varias instancias de tu aplicación, con health checks automáticos y failover. Ideal para despliegues multi-zona o multi-región."
examples:
  - title: "Reverse proxy con balanceo round-robin"
    code: |
      upstream backend {
        server 10.0.0.1:3000;
        server 10.0.0.2:3000;
        server 10.0.0.3:3000;
      }
      server {
        listen 80;
        server_name api.misitio.com;
        location / {
          proxy_pass http://backend;
          proxy_set_header Host $host;
          proxy_set_header X-Real-IP $remote_addr;
        }
      }
    output: "Distribuye tráfico entre tres servidores backend de forma equitativa. Si uno falla, Nginx automáticamente deja de enviarle tráfico hasta que se recupere."
  - title: "Servir SPA con caché y fallback"
    code: |
      server {
        listen 80;
        server_name app.misitio.com;
        root /var/www/spa;
        index index.html;
        location /assets/ {
          expires 1y;
          add_header Cache-Control "public, immutable";
        }
        location / {
          try_files $uri $uri/ /index.html;
        }
      }
    output: "Sirve la SPA con caché perpetua para assets con hash y redirige todas las rutas a index.html para que React Router las maneje del lado del cliente."
tips:
  - text: "Siempre corre nginx -t antes de recargar la configuración. Un error de sintaxis en la config puede dejar tu sitio caído si recargas sin validar."
  - text: "Usa map para crear variables condicionales en lugar de múltiples bloques if. Las directivas if en Nginx tienen comportamientos impredecibles y la documentación oficial las desaconseja."
  - text: "Habilita gzip con gzip_types text/css application/javascript application/json image/svg+xml para comprimir respuestas de texto. No comprimas imágenes JPEG/PNG que ya vienen comprimidas."
  - text: "Configura limit_req para proteger endpoints sensibles (/login, /api) contra fuerza bruta. Un rate limit de 5 req/s por IP detiene la mayoría de ataques sin afectar usuarios legítimos."
faq:
  - question: "¿Nginx es mejor que Apache?"
    answer: "Nginx maneja más conexiones concurrentes con menos memoria gracias a su arquitectura basada en eventos. Apache es más flexible con configuraciones por directorio (.htaccess). Para sitios modernos con alto tráfico, Nginx es la recomendación general."
  - question: "¿Nginx Plus vs open source?"
    answer: "Nginx open source cubre la mayoría de casos: reverse proxy, balanceo, SSL, caché. Nginx Plus añade health checks activos, session persistence, API gateway y soporte comercial. Para proyectos personales y startups, la versión open source es suficiente."
  - question: "¿Debo usar Nginx con Node.js?"
    answer: "Sí, es una combinación recomendada. Nginx sirve archivos estáticos directamente y hace proxy al puerto de Node.js para peticiones dinámicas. Así tu app Node.js solo recibe tráfico que realmente necesita procesamiento."
publishedAt: 2026-06-01
---

## ¿Qué es?

Nginx es un servidor web de código abierto conocido por su alto rendimiento, estabilidad y bajo consumo de recursos. Originalmente creado para resolver el problema C10K (10,000 conexiones simultáneas), hoy es el servidor web más utilizado en sitios de alto tráfico.

## ¿Para qué sirve?

Nginx sirve para servir contenido web estático y dinámico, actuar como reverse proxy para aplicaciones backend, balancear carga entre servidores, terminar SSL/TLS y cachear respuestas. Es la puerta de entrada estándar para aplicaciones web en producción.

## Cuándo usarla

- Para servir sitios estáticos y SPAs con alto rendimiento.
- Como reverse proxy delante de Node.js, Python, Ruby o Go.
- Para balancear carga entre múltiples instancias de tu aplicación.
- Cuando necesitas terminar SSL en un punto centralizado.
- Para cachear contenido y reducir carga en tu servidor de aplicación.

## Cuándo NO usarla

- Para desarrollo local simple (http-server o vite dev server basta).
- Cuando necesitas configuración dinámica por API (Caddy o Traefik son mejores).
- Para aplicaciones que requieren WebSocket nativo sin proxy (aunque Nginx lo soporta).
- Si buscas la configuración más simple posible (Caddy tiene HTTPS automático más sencillo).

## Pros

- Rendimiento excepcional con bajo consumo de memoria.
- Configuración clara y predecible.
- Maduro, probado en los sitios más grandes del mundo.
- Amplia comunidad y documentación.
- Sin dependencias externas.

## Contras

- Configuración sin recarga en caliente (requiere reload).
- Sin interfaz gráfica oficial.
- Las directivas if tienen comportamientos confusos.
- No tiene scripting nativo (no como Apache mod_*).

## CLI

```bash
nginx -t                         # Validar configuración
nginx -s reload                  # Recargar configuración
nginx -s stop                    # Detener Nginx
systemctl status nginx           # Ver estado (Linux)
tail -f /var/log/nginx/access.log  # Ver logs en tiempo real
```
