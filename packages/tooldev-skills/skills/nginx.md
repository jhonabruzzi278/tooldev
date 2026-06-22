---
name: nginx
description: Servidor web, reverse proxy y balanceador de carga de alto rendimiento usado por millones de sitios en producción. Úsala cuando el usuario mencione o pregunte sobre servidor-web, proxy, balanceo, devops.
---

# Nginx

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** devops
- **Pricing:** open-source
- **License:** BSD-2
- **Technical Level:** intermedio
- **Compatibility:** Windows, macOS, Linux, Docker
- **Official Site:** https://nginx.org
- **GitHub:** https://github.com/nginx/nginx
- **Alternatives:** apache, caddy, traefik

## Features
- Servidor HTTP/S estático y dinámico de alto rendimiento
- Reverse proxy con balanceo de carga (round-robin, least_conn, IP hash)
- Terminación SSL/TLS con soporte HTTP/2 y HTTP/3
- Cache de contenido estático y dinámico
- Limitación de tasa y control de acceso por IP
- Servicio de archivos estáticos con sendfile optimizado
- Proxy WebSocket y stream TCP/UDP
- Rewrites y redirecciones condicionales

## Steps
### 1. Instala Nginx
Usa apt install nginx (Ubuntu/Debian), brew install nginx (macOS) o descarga el binario desde nginx.org. En producción siempre usa la versión estable del repositorio oficial.

### 2. Configura un sitio básico
Los archivos de configuración viven en /etc/nginx/sites-available/. Crea un archivo con server { listen 80; server_name tudominio.com; root /var/www/sitio; } y actívalo con ln -s a sites-enabled.

### 3. Agrega HTTPS con Certbot
Instala certbot y ejecuta certbot --nginx. Certbot modifica automáticamente tu configuración de Nginx para servir HTTPS con certificados Let's Encrypt y renovación automática.

### 4. Configura reverse proxy para tu app
Agrega location / { proxy_pass http://localhost:3000; proxy_set_header Host $host; proxy_set_header X-Real-IP $remote_addr; } para pasar tráfico a tu aplicación Node.js, Python o cualquier servicio corriendo en un puerto local.

### 5. Monitorea y optimiza
Usa nginx -t para validar config antes de recargar. Monitorea con stub_status o vendors como NGINX Amplify. Ajusta worker_processes y worker_connections según los cores de tu servidor.

## When to Use
- **Servir sitios estáticos y SPAs:** Para servir HTML, CSS, JS e imágenes con rendimiento máximo. Nginx maneja archivos estáticos sin necesidad de Node.js o Python, reduciendo la carga del servidor de aplicación.
- **Reverse proxy para microservicios:** Cuando tienes múltiples servicios (API, frontend, admin) y quieres servirlos todos desde el mismo dominio/puerto con rutas diferentes. Nginx enruta cada /api/* al backend correcto.
- **Balanceo de carga para alta disponibilidad:** Para distribuir tráfico entre varias instancias de tu aplicación, con health checks automáticos y failover. Ideal para despliegues multi-zona o multi-región.

## Examples
### Reverse proxy con balanceo round-robin
```
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
tput: "Distribuye tráfico entre tres servidores backend de forma equitativa. Si uno falla, Nginx automáticamente deja de enviarle tráfico hasta que se recupere."
```

### Servir SPA con caché y fallback
```
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
tput: "Sirve la SPA con caché perpetua para assets con hash y redirige todas las rutas a index.html para que React Router las maneje del lado del cliente."
```

## Tips
- Siempre corre nginx -t antes de recargar la configuración. Un error de sintaxis en la config puede dejar tu sitio caído si recargas sin validar.
- Usa map para crear variables condicionales en lugar de múltiples bloques if. Las directivas if en Nginx tienen comportamientos impredecibles y la documentación oficial las desaconseja.
- Habilita gzip con gzip_types text/css application/javascript application/json image/svg+xml para comprimir respuestas de texto. No comprimas imágenes JPEG/PNG que ya vienen comprimidas.
- Configura limit_req para proteger endpoints sensibles (/login, /api) contra fuerza bruta. Un rate limit de 5 req/s por IP detiene la mayoría de ataques sin afectar usuarios legítimos.

## FAQ
- **¿Nginx es mejor que Apache?** Nginx maneja más conexiones concurrentes con menos memoria gracias a su arquitectura basada en eventos. Apache es más flexible con configuraciones por directorio (.htaccess). Para sitios modernos con alto tráfico, Nginx es la recomendación general.
- **¿Nginx Plus vs open source?** Nginx open source cubre la mayoría de casos: reverse proxy, balanceo, SSL, caché. Nginx Plus añade health checks activos, session persistence, API gateway y soporte comercial. Para proyectos personales y startups, la versión open source es suficiente.
- **¿Debo usar Nginx con Node.js?** Sí, es una combinación recomendada. Nginx sirve archivos estáticos directamente y hace proxy al puerto de Node.js para peticiones dinámicas. Así tu app Node.js solo recibe tráfico que realmente necesita procesamiento.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://nginx.org
- **Source Code Issues:** Check the repository at https://github.com/nginx/nginx for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
