---
name: nextjs
description: Framework React full-stack con renderizado híbrido, rutas anidadas y optimización automática. Úsala cuando el usuario mencione o pregunte sobre react, framework, ssr, ssg.
---

# Next.js

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
- **Official Site:** https://nextjs.org
- **GitHub:** https://github.com/vercel/next.js
- **Alternatives:** astro

## Features
- Renderizado híbrido (SSR, SSG, ISR) en una sola aplicación
- File-based routing con layouts anidados
- Server Components y Server Actions
- Optimización automática de imágenes y fuentes
- API Routes para backend integrado
- Turbopack para desarrollo ultrarrápido
- App Router con React 19+

## Steps
### 1. Crear un proyecto Next.js
Ejecuta `npx create-next-app@latest` y elige las opciones de configuración: TypeScript, ESLint, Tailwind CSS, App Router y el directorio src/. Next.js configurará automáticamente todo el proyecto con la estructura recomendada.

### 2. Definir rutas con el sistema de archivos
Crea archivos `page.tsx` dentro de carpetas en `app/` para definir rutas. Usa `layout.tsx` para layouts compartidos, `loading.tsx` para estados de carga y `error.tsx` para manejo de errores por segmento.

### 3. Elegir la estrategia de renderizado adecuada
Por defecto, Next.js usa Server Components. Para datos dinámicos usa `fetch` con `{ cache: 'no-store' }` (SSR), para contenido estático `{ cache: 'force-cache' }` (SSG), y `next.revalidate` para ISR con revalidación programada.

### 4. Desplegar en producción
Conecta tu repositorio a Vercel para despliegues automáticos en cada push. Next.js también se puede desplegar en Node.js, Docker o cualquier plataforma que soporte servidores Node, usando `next build && next start`.

## When to Use
- **Aplicación web con SEO y renderizado del servidor:** Cuando necesitas que los motores de búsqueda indexen correctamente tu contenido dinámico. Next.js renderiza el HTML en el servidor antes de enviarlo al cliente, garantizando SEO óptimo para cada página.
- **Proyecto full-stack con React:** Next.js integra frontend y backend en un solo proyecto. Con Server Actions y API Routes puedes manejar formularios, autenticación y consultas a bases de datos sin necesidad de un servidor externo.
- **Sitio de contenido con actualizaciones periódicas:** Usa Incremental Static Regeneration (ISR) para sitios como blogs, ecommerce o documentación. Las páginas se generan estáticamente y se revalidan en intervalos configurables sin reconstruir todo el sitio.

## Examples
### Página con Server Side Rendering
```
export default async function Pagina() {
  const datos = await fetch('https://api.example.com', {
    cache: 'no-store'
  }).then(res => res.json());
  return <main>{datos.map(d => <p key={d.id}>{d.nombre}</p>)}</main>;
}
tput: "HTML renderizado en el servidor con datos actualizados en cada solicitud"
```

### Server Action para formulario
```
async function crearPost(formData: FormData) {
  'use server';
  const titulo = formData.get('titulo');
  await db.insert(posts).values({ titulo });
}
export default function Formulario() {
  return (
    <form action={crearPost}>
      <input name="titulo" />
      <button type="submit">Crear</button>
    </form>
  );
}
tput: "Formulario procesado en el servidor sin JavaScript en el cliente"
```

## Tips
- Usa Server Components por defecto. Solo añade `'use client'` cuando realmente necesites interactividad, estado o hooks del navegador. Esto reduce el JavaScript enviado al cliente.
- Aprovecha el componente `Image` de Next.js para optimizar automáticamente las imágenes con lazy loading, formatos modernos (WebP, AVIF) y dimensiones correctas según el viewport.
- Utiliza `revalidatePath` y `revalidateTag` en Server Actions para invalidar la caché después de mutaciones, manteniendo los datos siempre actualizados sin esperar al intervalo de ISR.
- Organiza tu proyecto con la carpeta `@/lib` para utilidades, `@/components` para componentes compartidos y `@/hooks` para hooks personalizados. Mantén las rutas de la app limpias con solo lógica de página.
- Configura `next.config.js` para dominios de imágenes externos y redirecciones. Usa `trailingSlash: true` si migras desde otro framework para mantener compatibilidad de URLs.

## FAQ
- **¿Cuál es la diferencia entre App Router y Pages Router?** El App Router (carpeta `app/`) es la nueva arquitectura con Server Components, layouts anidados y streaming por defecto. El Pages Router (carpeta `pages/`) es el sistema anterior. Para nuevos proyectos se recomienda App Router.
- **¿Next.js solo funciona con Vercel?** No. Next.js puede desplegarse en cualquier plataforma que ejecute Node.js, incluyendo Docker, AWS, Google Cloud y self-hosting. Vercel solo ofrece integraciones optimizadas adicionales como ISR y analytics.
- **¿Puedo usar Next.js sin TypeScript?** Sí, Next.js funciona perfectamente con JavaScript puro. Sin embargo, TypeScript es altamente recomendado por el tipado, mejor autocompletado y detección temprana de errores.
- **¿Cómo manejo la autenticación en Next.js?** Usa NextAuth.js (Auth.js) para autenticación con múltiples proveedores. Con middleware en el App Router puedes proteger rutas verificando la sesión antes de renderizar cualquier página.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://nextjs.org
- **Source Code Issues:** Check the repository at https://github.com/vercel/next.js for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
