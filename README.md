# ToolDev

Descubre y compara herramientas de desarrollo. Plataforma bilingüe (ES/EN) construida con Astro para explorar frameworks, librerías, servicios y utilidades técnicas organizadas por categorías.

## Descripción del Proyecto

ToolDev es un sitio estático orientado a desarrolladores que buscan descubrir, comparar y elegir las mejores herramientas para su stack técnico. El proyecto organiza cada herramienta con información detallada: features, capturas, precios, nivel técnico, alternativas y preguntas frecuentes.

### El Desafío

- Unificar decenas de herramientas técnicas en una experiencia de navegación clara y bilingüe.
- Presentar información detallada (features, capturas, FAQ, alternativas) sin saturar la interfaz.
- Mantener consistencia visual entre 64 herramientas distribuidas en 6 categorías.
- Garantizar SEO, accesibilidad y rendimiento en un sitio 100% estático.

### La Solución

- **Arquitectura por páginas** con colecciones de contenido Astro para escalar nuevas herramientas sin tocar código.
- **Componentes reutilizables** (ToolCard, ToolLogo, AnimatedFAQ, ScreenshotGallery, ToolShareButtons) que mantienen consistencia técnica y visual.
- **Sistema bilingüe** ES/EN con traducciones centralizadas y rutas internacionalizadas (`/tools/`, `/en/tools/`).
- **SEO completo** con JSON-LD, Open Graph, Twitter Cards, Sitemap y robots.txt.
- **Modo oscuro** con `light-dark()` y CSS variables para adaptación automática de colores.
- **Catálogo de logos** con 64 logos SVG de herramientas como componentes Astro reutilizables.

### Resultados

- **150 páginas generadas** en build estático (~7s), incluyendo versiones en ambos idiomas.
- **43 tests automatizados** (unitarios, integración, componentes) con Vitest.
- **Navegación intuitiva** entre categorías (Frontend, Backend, DevOps, IA, Diseño, Productividad).
- **64 herramientas documentadas** con capturas, features, alternativas y FAQ.
- **SEO optimizado** con metadatos, sitemap y datos estructurados.
- **100% responsivo** con Tailwind CSS v4 y componentes shadcn/ui.

## Tecnologías

- **Astro 6** — Static site generator con islands architecture
- **React** — Componentes interactivos (FAQ, galería, formularios)
- **TypeScript** — Tipado completo en componentes y lógica
- **Tailwind CSS v4** — Estilos utilitarios con motor `light-dark()`
- **shadcn/ui** — Biblioteca de componentes base UI
- **Motion** — Animaciones declarativas para React
- **Vitest** — Testing unitario, integración y componentes
- **Astro Content Collections** — Gestión de contenido tipado
- **@iconify/tabler** — Sistema unificado de iconos
- **HTML5 + CSS3** — Estándares web modernos

## Mejoras Aplicadas

### UX/UI y Conversión

- **Modo oscuro completo**: Todos los componentes se adaptan automáticamente con `light-dark()` y variables CSS.
- **SEO completo**: Canonical URLs, Open Graph, Twitter Cards, JSON-LD (Organization), Sitemap.
- **Skip link**: Navegación por teclado con `#main-content`.
- **aria-current**: Navegación con estado de página activa.
- **prefers-reduced-motion**: Respeto de preferencias de accesibilidad.
- **Sistema bilingüe**: Traducciones ES/EN con tipado completo y rutas internacionalizadas.

### Performance y Responsive

- **Imágenes optimizadas**: Lazy loading, `loading="lazy"`, `decoding="async"`.
- **ToolLogo adaptativo**: Soporte de temas claro/oscuro con imágenes separadas (`light`/`dark`).
- **Cards optimizadas**: Capturas con lazy loading y tamaños fluidos.
- **Build estático puro**: 100% pre-renderizado, sin JavaScript de servidor.

### Técnico y Estabilidad

- **Content Collections**: Migradas a `src/content.config.ts` (formato Astro v6).
- **Render API**: Actualizado a `render(entry)` para Astro v6.
- **Rutas dinámicas**: `[slug]` generadas correctamente en `static` output.
- **i18n centralizado**: Traducciones en `src/lib/i18n/translations.ts` con tipado completo.
- **Tests**: 43 tests (unitarios, integración, componentes) con Vitest.

### Estado Técnico

- ✅ Build validado: **150 páginas generadas** (~7s).
- ✅ Rutas dinámicas `[slug]` generadas correctamente.
- ✅ Content Collections migradas a Astro v6.
- ✅ SEO completo (canonical, OG, Twitter, JSON-LD, Sitemap).
- ✅ Modo oscuro adaptativo en todos los componentes.
- ✅ i18n ES/EN con rutas internacionalizadas.
- ✅ Tests: 9 suites, 43 tests — todos pasando.
- ✅ Accesibilidad: skip link, aria-current, prefers-reduced-motion.

## Estructura del Proyecto

```
/
├── public/
│   ├── icons/          # Iconos SVG personalizados
│   ├── logos/          # Logos locales de herramientas
│   ├── screenshots/    # Capturas de herramientas
│   └── robots.txt
├── src/
│   ├── __tests__/      # Tests (unit, integration, components)
│   ├── components/
│   │   ├── home/       # Home: Hero, CategoryGrid, ToolShowcase, Benefits
│   │   ├── layout/     # Header, Footer, ThemeToggle, MobileMenu, LanguageSwitcher
│   │   ├── logos/      # 64 logos SVG como componentes Astro
│   │   ├── pages/      # Layouts de página (About, Contact, Categories, Tools)
│   │   ├── shared/     # ContactForm, SEOHead
│   │   ├── tools/      # ToolCard, ToolLogo, AnimatedFAQ, ScreenshotGallery, etc.
│   │   └── ui/         # shadcn/ui components + HeroReveal, AnimateOnScroll
│   ├── content/
│   │   ├── config.ts   # Content Collections schema
│   │   └── tools/      # 64 herramientas en markdown
│   ├── layouts/        # BaseLayout
│   ├── lib/
│   │   ├── i18n/       # Traducciones ES/EN
│   │   ├── categories.ts
│   │   ├── svgl.ts     # API de logos SVG
│   │   └── utils.ts    # cn() utility
│   ├── pages/          # Rutas: index, categories, tools, about, contact + /en/
│   └── styles/         # global.css
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── vitest.config.ts
```

## Requisitos

- **Node.js** >= 22.12.0
- **npm** >= 10

## Comandos

| Comando | Acción |
|---------|--------|
| `npm install` | Instala dependencias |
| `npm run dev` | Inicia servidor local en `localhost:4321` |
| `npm run build` | Genera build de producción en `./dist/` |
| `npm run preview` | Previsualiza la build localmente |
| `npm test` | Ejecuta tests con Vitest |
| `npm run test:watch` | Tests en modo watch |
| `npm run test:coverage` | Tests con cobertura |

## Puesta en Marcha

```bash
npm install
npm run dev
```

## Licencia

MIT — Ver [LICENSE](./LICENSE) para más detalles.

Hecho con ❤️ por [Jonathan Guerra](https://github.com/jhonabruzzi278)
