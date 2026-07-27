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
  {
    slug: 'hosting',
    name: 'Hosting',
    description: 'Plataformas de hosting y despliegue para publicar aplicaciones web en minutos.',
    icon: 'tabler:cloud-upload',
    color: 'oklch(0.6 0.18 200)',
    lightBg: 'oklch(0.92 0.04 200 / 0.3)',
    darkBg: 'oklch(0.26 0.08 200 / 0.2)',
  },
  {
    slug: 'auth',
    name: 'Auth',
    description: 'Autenticación, gestión de usuarios e identidad para tus aplicaciones.',
    icon: 'tabler:lock',
    color: 'oklch(0.6 0.18 155)',
    lightBg: 'oklch(0.92 0.04 155 / 0.3)',
    darkBg: 'oklch(0.26 0.08 155 / 0.2)',
  },
  {
    slug: 'email',
    name: 'Email',
    description: 'Email transaccional, marketing y backends para formularios.',
    icon: 'tabler:mail',
    color: 'oklch(0.62 0.2 25)',
    lightBg: 'oklch(0.93 0.04 25 / 0.3)',
    darkBg: 'oklch(0.27 0.08 25 / 0.2)',
  },
  {
    slug: 'observabilidad',
    name: 'Observabilidad',
    description: 'Monitorización, uptime, logs y tracing para aplicaciones en producción.',
    icon: 'tabler:activity',
    color: 'oklch(0.65 0.18 145)',
    lightBg: 'oklch(0.93 0.04 145 / 0.3)',
    darkBg: 'oklch(0.27 0.08 145 / 0.2)',
  },
  {
    slug: 'cicd',
    name: 'CI/CD',
    description: 'Integración continua, despliegue continuo y calidad de código.',
    icon: 'tabler:git-branch',
    color: 'oklch(0.6 0.2 255)',
    lightBg: 'oklch(0.92 0.04 255 / 0.3)',
    darkBg: 'oklch(0.26 0.08 255 / 0.2)',
  },
  {
    slug: 'seguridad',
    name: 'Seguridad',
    description: 'Análisis de vulnerabilidades, secretos y protección de tu stack.',
    icon: 'tabler:shield-lock',
    color: 'oklch(0.6 0.22 15)',
    lightBg: 'oklch(0.93 0.04 15 / 0.3)',
    darkBg: 'oklch(0.27 0.08 15 / 0.2)',
  },
  {
    slug: 'analytics',
    name: 'Analítica',
    description: 'Analítica web y de producto para entender a tus usuarios.',
    icon: 'tabler:chart-bar',
    color: 'oklch(0.65 0.18 110)',
    lightBg: 'oklch(0.94 0.04 110 / 0.3)',
    darkBg: 'oklch(0.28 0.08 110 / 0.2)',
  },
  {
    slug: 'apis',
    name: 'APIs',
    description: 'APIs, mocks, clientes y automatización para integrar servicios.',
    icon: 'tabler:api',
    color: 'oklch(0.58 0.2 285)',
    lightBg: 'oklch(0.92 0.04 285 / 0.3)',
    darkBg: 'oklch(0.26 0.08 285 / 0.2)',
  },
  {
    slug: 'cms',
    name: 'CMS',
    description: 'CMS headless y gestión de contenido estructurado.',
    icon: 'tabler:news',
    color: 'oklch(0.6 0.19 325)',
    lightBg: 'oklch(0.93 0.04 325 / 0.3)',
    darkBg: 'oklch(0.27 0.08 325 / 0.2)',
  },
  {
    slug: 'media',
    name: 'Media',
    description: 'Almacenamiento, optimización y entrega de imágenes y vídeo.',
    icon: 'tabler:photo',
    color: 'oklch(0.62 0.18 60)',
    lightBg: 'oklch(0.94 0.04 60 / 0.3)',
    darkBg: 'oklch(0.28 0.08 60 / 0.2)',
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryName(slug: string): string {
  return getCategoryBySlug(slug)?.name ?? slug;
}
