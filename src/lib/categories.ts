export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  lightBg: string;
  darkBg: string;
}

export const categories: Category[] = [
  {
    slug: 'frontend',
    name: 'Frontend',
    description: 'Frameworks, librerías y herramientas para construir interfaces de usuario modernas.',
    icon: 'tabler:layout',
    color: 'oklch(0.55 0.22 265)',
    lightBg: 'oklch(0.92 0.04 265 / 0.3)',
    darkBg: 'oklch(0.25 0.08 265 / 0.2)',
  },
  {
    slug: 'backend',
    name: 'Backend',
    description: 'Servidores, APIs, bases de datos y herramientas para la lógica del lado del servidor.',
    icon: 'tabler:server-2',
    color: 'oklch(0.55 0.18 180)',
    lightBg: 'oklch(0.92 0.04 180 / 0.3)',
    darkBg: 'oklch(0.25 0.08 180 / 0.2)',
  },
  {
    slug: 'devops',
    name: 'DevOps',
    description: 'Contenedores, CI/CD, infraestructura como código y herramientas de despliegue.',
    icon: 'tabler:cpu',
    color: 'oklch(0.6 0.18 35)',
    lightBg: 'oklch(0.93 0.04 35 / 0.3)',
    darkBg: 'oklch(0.27 0.08 35 / 0.2)',
  },
  {
    slug: 'ia',
    name: 'IA',
    description: 'Herramientas de inteligencia artificial, asistentes de código y automatización.',
    icon: 'tabler:brain',
    color: 'oklch(0.6 0.2 300)',
    lightBg: 'oklch(0.93 0.04 300 / 0.3)',
    darkBg: 'oklch(0.27 0.08 300 / 0.2)',
  },
  {
    slug: 'diseno',
    name: 'Diseño',
    description: 'Diseño UI/UX, prototipado, gráficos y recursos visuales para productos digitales.',
    icon: 'tabler:palette',
    color: 'oklch(0.6 0.2 350)',
    lightBg: 'oklch(0.93 0.04 350 / 0.3)',
    darkBg: 'oklch(0.27 0.08 350 / 0.2)',
  },
  {
    slug: 'productividad',
    name: 'Productividad',
    description: 'Gestión de proyectos, editores, terminales y herramientas para optimizar tu trabajo.',
    icon: 'tabler:bolt',
    color: 'oklch(0.65 0.18 85)',
    lightBg: 'oklch(0.94 0.04 85 / 0.3)',
    darkBg: 'oklch(0.28 0.08 85 / 0.2)',
  },
  {
    slug: 'agentes',
    name: 'Agentes IA',
    description: 'Asistentes de código, agentes autónomos y editores potenciados con inteligencia artificial.',
    icon: 'tabler:robot',
    color: 'oklch(0.55 0.22 225)',
    lightBg: 'oklch(0.92 0.04 225 / 0.3)',
    darkBg: 'oklch(0.25 0.08 225 / 0.2)',
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryName(slug: string): string {
  return getCategoryBySlug(slug)?.name ?? slug;
}
