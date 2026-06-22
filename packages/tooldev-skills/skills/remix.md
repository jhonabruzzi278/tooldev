---
name: remix
description: Framework web full-stack con estándares web, renderizado híbrido y experiencias de usuario rápidas y resilientes. Úsala cuando el usuario mencione o pregunte sobre react, framework, fullstack, ssr.
---

# Remix

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** frontend
- **Pricing:** gratis
- **License:** MIT
- **Technical Level:** intermedio
- **Compatibility:** Web
- **Official Site:** https://remix.run
- **GitHub:** https://github.com/remix-run/remix
- **Alternatives:** next-js

## Features
- Enrutamiento anidado con layouts por archivo
- Cargas de datos paralelas con Loaders y Actions
- Formularios progresivos con mejora gradual
- Renderizado híbrido (SSR + SPA + SSG)
- Estándares web: Fetch, Request, Response nativos
- Deploy en cualquier entorno (Node.js, Deno, Cloudflare)
- Optimización de rendimiento con streaming SSR

## Steps
### 1. Crea un proyecto Remix
Ejecuta npx create-remix@latest y sigue el asistente interactivo. Selecciona el adaptador de deploy (Vercel, Cloudflare, Netlify, Node.js), TypeScript y si quieres incluir Tailwind CSS. Remix configura la estructura de carpetas y dependencias.

### 2. Define rutas con loaders y actions
Cada ruta exporta un loader para datos del servidor y un action para mutaciones. Los loaders se ejecutan en paralelo en rutas anidadas. Las actions procesan formularios con mejora progresiva, funcionando con o sin JavaScript.

### 3. Construye formularios progresivos
Usa el componente <Form> de Remix en lugar de <form> HTML. Las actions del servidor procesan el POST sin necesidad de JavaScript. Añade useNavigation() para estados de carga y useActionData() para validación del servidor.

### 4. Despliega en producción
Ejecuta npm run build y despliega según tu adaptador. En Vercel o Netlify, el deploy es automático desde Git. En Node.js, ejecuta npm start con el servidor de producción integrado. Configura dominios y SSL en tu plataforma.

## When to Use
- **Aplicaciones web con formularios complejos:** Cuando tu aplicación tiene formularios multi-paso, validaciones del lado del servidor, y necesitas que funcionen sin JavaScript para accesibilidad y rendimiento.
- **Aplicaciones con rutas anidadas y layouts:** Para dashboards, paneles de administración y aplicaciones con navegación anidada donde cada sección carga sus propios datos de forma independiente.
- **Equipos que prefieren estándares web:** Remix usa Fetch, Request y Response nativos en lugar de APIs propietarias. Si tu equipo valora usar estándares web que son transferibles entre frameworks y entornos, Remix es la mejor opción.

## Examples
### Loader con datos del servidor
```
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
export const loader = async () => {
  const posts = await fetch("https://api.example.com/posts");
  return json({ posts: await posts.json() });
};
export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();
  return <ul>{posts.map(p => <li key={p.id}>{p.title}</li>)}</ul>;
}
tput: "Lista de posts renderizada en el servidor con datos cargados durante SSR."
```

### Action con validación de formulario
```
export const action = async ({ request }) => {
  const form = await request.formData();
  const email = form.get("email");
  if (!email || !email.includes("@")) {
    return json({ error: "Email inválido" }, { status: 400 });
  }
  return redirect("/gracias");
};
tput: "Si el email es válido, redirige a /gracias. Si no, retorna error que se muestra en el formulario."
```

## Tips
- Usa useNavigation() para mostrar estados de carga en formularios sin necesidad de manejar estado manualmente; Remix trackea automáticamente el estado de cada transición.
- Estructura las rutas en archivos y carpetas siguiendo la convención de Remix: _layout.tsx para layouts sin segmento de ruta, ($param).tsx para rutas dinámicas opcionales.
- Aprovecha la mejora progresiva: tus formularios deben funcionar sin JavaScript. Luego añade transiciones suaves y validación del lado del cliente como mejora, no como requisito.
- Usa useFetcher() para acciones que no requieren navegación, como marcar favoritos, seguir usuarios o cualquier mutación que no cambie la URL.
- Organiza los loaders para devolver solo los datos necesarios para cada ruta; los loaders anidados de Remix se ejecutan en paralelo, optimizando la carga de datos automáticamente.

## FAQ
- **¿Cuál es la diferencia principal entre Remix y Next.js?** Remix se basa en estándares web nativos (Fetch, Request, Response) y enfatiza la mejora progresiva donde los formularios funcionan sin JavaScript. Next.js tiene un ecosistema más grande, más plugins y mejor soporte para SSG/ISR. Remix es preferido por equipos que valoran simplicidad y estándares web.
- **¿Remix soporta generación de sitios estáticos (SSG)?** Remix no tiene SSG nativo como Next.js. Puedes hacer pre-renderizado de rutas específicas con headers de caché y CDN, pero para sitios puramente estáticos sin servidor, Astro o Next.js son mejores opciones.
- **¿Puedo usar Tailwind CSS con Remix?** Sí, Tailwind es una de las opciones recomendadas al crear un proyecto Remix. Se configura automáticamente con PostCSS. También puedes añadirlo después con npx remix reveal o manualmente siguiendo la documentación.
- **¿Cómo manejo autenticación en Remix?** Usa cookies de sesión en los loaders y actions. Verifica la sesión en cada loader que requiera autenticación y redirige si no es válida. Remix no impone una solución específica; puedes usar remix-auth, supabase-js o tu propia implementación con iron-session.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://remix.run
- **Source Code Issues:** Check the repository at https://github.com/remix-run/remix for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
