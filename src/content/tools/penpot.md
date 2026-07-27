---
name: Penpot
description: Diseño de interfaces y prototipado open source con colaboración en tiempo real y handoff para desarrollo.
category: diseno
tags: [ui-design, prototype, open-source, collaboration, svg]
officialSite: https://penpot.app
github: https://github.com/penpot/penpot
license: MPL-2.0
pricing: open-source
openSource: true
technicalLevel: intermedio
compatibility: [Web]
featured: false
verified: false
features:
  - Diseño de interfaces basado en SVG nativo
  - Prototipado interactivo con flujos y transiciones
  - Colaboración en tiempo real entre diseño y desarrollo
  - Sistema de componentes, variantes y design tokens
  - Inspector de código con CSS, SVG y markup listo para handoff
  - Layout flexible con Flex Layout y Grid Layout reales
  - Opción self-hosted para control total de los archivos
alternatives: [figma, canva]
relatedTools: [tldraw, fontshare]
howToUse:
  - step: 1
    title: "Crear el equipo y el primer proyecto"
    description: "Regístrate en penpot.app, crea un equipo y un proyecto. Los archivos se organizan por proyecto y puedes invitar a diseñadores y desarrolladores con distintos permisos."
  - step: 2
    title: "Diseñar con componentes y layouts"
    description: "Crea pantallas usando Flex y Grid Layout que se comportan como CSS real. Convierte elementos repetidos en componentes con variantes y define design tokens de color y tipografía."
  - step: 3
    title: "Prototipar y entregar a desarrollo"
    description: "Conecta pantallas con interacciones para crear prototipos navegables. Comparte el enlace con desarrollo, que inspecciona medidas, tokens y código CSS o SVG directamente desde el modo inspect."
whenToUse:
  - title: "Equipos que quieren una alternativa open source a Figma"
    description: "Cuando la soberanía de los archivos de diseño importa: Penpot es open source, self-hosteable y guarda los diseños en SVG estándar."
  - title: "Handoff real entre diseño y desarrollo"
    description: "Ideal si tu equipo quiere diseños basados en estándares web: los layouts se comportan como CSS y el inspector entrega código usable."
  - title: "Organizaciones con requisitos de self-hosting"
    description: "Si tu empresa exige que los archivos de diseño residan en infraestructura propia, Penpot se despliega con Docker."
tips:
  - text: "Aprovecha Flex y Grid Layout en lugar de posicionar todo a mano: tus diseños responderán de forma parecida al CSS que recibirá desarrollo."
  - text: "Define design tokens desde el inicio (colores, tipografías, espaciados) y reutilízalos: facilitan la consistencia y el handoff."
  - text: "Usa las variantes de componentes para estados de botones e inputs en lugar de duplicar elementos: mantienen el archivo limpio."
  - text: "Si self-hosteas, programa backups de la base de datos y del almacenamiento de archivos: la instancia es tuya y también su custodia."
faq:
  - question: "¿Qué incluye el plan gratuito de Penpot?"
    answer: "El plan Professional cuesta 0 $ e incluye hasta 8 miembros, viewers y archivos ilimitados, 10 GB de almacenamiento y 7 días de historial. La versión self-hosted es gratuita sin límites."
  - question: "¿Penpot es compatible con archivos de Figma?"
    answer: "Penpot usa SVG nativo como formato y no abre archivos .fig directamente. Existen plugins y flujos de migración parcial, pero conviene asumir que la migración desde Figma requiere trabajo manual."
  - question: "¿Puedo self-hostear Penpot?"
    answer: "Sí, Penpot se distribuye con Docker Compose bajo licencia MPL-2.0. Necesitas un servidor con Docker y una base de datos PostgreSQL, y la documentación oficial guía el despliegue."
  - question: "¿Penpot sirve para prototipos complejos?"
    answer: "Soporta flujos con interacciones, overlays y transiciones suficientes para validar navegación. Para micro-interacciones avanzadas o animaciones detalladas, herramientas especializadas siguen siendo mejores."
publishedAt: 2026-07-21
---

## ¿Qué es?

Penpot es la primera herramienta de diseño de interfaces y prototipado open source. Trabaja con SVG nativo y layouts basados en estándares web, con colaboración en tiempo real y un handoff pensado para desarrolladores.

## ¿Para qué sirve?

Sirve para diseñar interfaces de producto, crear sistemas de diseño con componentes y tokens, prototipar flujos interactivos y entregar a desarrollo especificaciones y código directamente aprovechables.

## Cuándo usarla

- Cuando buscas una alternativa open source y self-hosteable a Figma.
- Si el handoff diseño-desarrollo con estándares web es prioritario.
- Para equipos que valoran formatos abiertos y soberanía de datos.
- Cuando el presupuesto exige una herramienta profesional gratuita.

## Cuándo NO usarla

- Si tu equipo depende del ecosistema de plugins de Figma.
- Cuando necesitas migrar archivos .fig existentes sin fricción.
- Para ilustración compleja o diseño gráfico generalista: no es su foco.

## Pros

- Open source bajo licencia MPL-2.0 con self-hosting completo.
- Formatos y layouts basados en estándares web (SVG, Flex, Grid).
- Plan Professional gratuito con archivos ilimitados.
- Handoff con inspector de código útil para desarrollo.

## Contras

- Ecosistema de plugins y comunidad menor que Figma.
- Sin importación directa de archivos de Figma.
- Algunas funciones avanzadas aún maduran frente a líderes del mercado.
