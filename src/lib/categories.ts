export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    slug: 'frontend',
    name: 'Frontend',
    description: 'Frameworks, librerías y herramientas para construir interfaces de usuario modernas y responsivas.',
    icon: 'lucide:layout',
  },
  {
    slug: 'backend',
    name: 'Backend',
    description: 'Servidores, APIs, bases de datos y herramientas para la lógica del lado del servidor.',
    icon: 'lucide:server',
  },
  {
    slug: 'devops',
    name: 'DevOps',
    description: 'Contenedores, CI/CD, infraestructura como código y herramientas de despliegue.',
    icon: 'lucide:container',
  },
  {
    slug: 'ia',
    name: 'IA',
    description: 'Herramientas de inteligencia artificial, asistentes de código y automatización con ML.',
    icon: 'lucide:brain',
  },
  {
    slug: 'diseno',
    name: 'Diseño',
    description: 'Herramientas de diseño UI/UX, prototipado, gráficos y recursos visuales.',
    icon: 'lucide:palette',
  },
  {
    slug: 'productividad',
    name: 'Productividad',
    description: 'Gestión de proyectos, editores, terminales y herramientas para optimizar tu flujo de trabajo.',
    icon: 'lucide:zap',
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryName(slug: string): string {
  return getCategoryBySlug(slug)?.name ?? slug;
}
