---
name: nginx
description: >- Úsala cuando el usuario mencione o pregunte sobre servidor-web, proxy, balanceo, devops.
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
>-

### 2. Configura un sitio básico
>-

### 3. Agrega HTTPS con Certbot
>-

### 4. Configura reverse proxy para tu app
>-

### 5. Monitorea y optimiza
>-

## When to Use
- **Servir sitios estáticos y SPAs:** >-
- **Reverse proxy para microservicios:** >-
- **Balanceo de carga para alta disponibilidad:** >-

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
tput: >-
Distribuye tráfico entre tres servidores backend de forma equitativa. Si
uno falla, Nginx automáticamente deja de enviarle tráfico hasta que se
recupere.
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
tput: >-
Sirve la SPA con caché perpetua para assets con hash y redirige todas las
rutas a index.html para que React Router las maneje del lado del cliente.
```

## Tips
- >-
- >-
- >-
- >-

## FAQ
- **¿Nginx es mejor que Apache?** >-
- **¿Nginx Plus vs open source?** >-
- **¿Debo usar Nginx con Node.js?** >-

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://nginx.org
- **Source Code Issues:** Check the repository at https://github.com/nginx/nginx for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
