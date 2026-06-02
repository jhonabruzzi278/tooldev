---
name: Obsidian
description: Base de conocimiento personal con markdown, graph view, plugins y vinculación bidireccional para pensamiento conectado.
category: productividad
tags: [notas, conocimiento, markdown, grafos, vinculacion, plugin]
officialSite: https://obsidian.md
pricing: gratis
openSource: false
technicalLevel: principiante
compatibility: [Windows, macOS, Linux, iOS, Android]
featured: false
features:
  - Editor markdown con vista previa en vivo
  - Graph view para visualizar conexiones entre notas
  - Backlinks y vinculación bidireccional
  - Canvas para lluvia de ideas visual
  - Plugins comunitarios y temas personalizables
  - Búsqueda全文 con operadores avanzados
  - Sincronización y publicación opcionales (pago)
alternatives: [notion]
relatedTools: [notion, linear, github]
howToUse:
  - step: 1
    title: "Crear un vault y tus primeras notas"
    description: "Abre Obsidian, crea un nuevo vault seleccionando una carpeta en tu disco local y comienza a escribir en Markdown. Usa `Ctrl+N` para nueva nota, `Ctrl+E` para alternar vista de edición/lectura y `Ctrl+P` para abrir la paleta de comandos."
  - step: 2
    title: "Vincular notas con enlaces bidireccionales"
    description: "Escribe `[[nombre de la nota]]` para crear un enlace a otra nota existente o crear una nueva. Los backlinks aparecen automáticamente en el panel derecho, mostrando todas las notas que referencian la nota actual."
  - step: 3
    title: "Explorar conexiones con Graph View"
    description: "Abre Graph View con `Ctrl+G` para visualizar la red de tus notas. Aplica filtros por tags, carpetas o palabras clave. Usa el grafo local para ver solo las conexiones de la nota activa y descubrir relaciones no evidentes."
  - step: 4
    title: "Instalar plugins y personalizar el entorno"
    description: "Ve a Settings > Community Plugins, explora el catálogo e instala plugins según tus necesidades: Dataview para consultas, Calendar para diario, Kanban para tableros, y Excalidraw para diagramas. Activa los plugins uno por uno para evaluar su utilidad."
whenToUse:
  - title: "Second brain y gestión de conocimiento personal"
    description: "Construye un sistema de notas interconectadas donde cada idea, concepto y proyecto está vinculado. Ideal para profesionales que manejan mucha información y necesitan encontrar conexiones entre temas diversos."
  - title: "Investigación académica y escritura"
    description: "Toma notas de papers, libros y cursos con enlaces entre conceptos. Usa tags para categorizar y el grafo para identificar patrones. Exporta a PDF o copia a Word para tus entregables finales."
  - title: "Documentación técnica y notas de desarrollo"
    description: "Centraliza snippets de código, configuraciones, comandos y lecciones aprendidas. Los bloques de código con sintaxis resaltada y el soporte para Mermaid y LaTeX hacen de Obsidian una excelente herramienta para desarrolladores."
examples:
  - title: "Vinculación bidireccional entre notas"
    code: |
      # Nota: React

      React es una biblioteca de [[JavaScript]] para construir interfaces.
      Usa [[JSX]] y [[Virtual DOM]] para renderizado eficiente.

      Relacionado: [[Next.js]], [[Tailwind CSS]]
    output: "Al abrir la nota 'JavaScript', los backlinks mostrarán 'React' como referencia. El grafo visualizará la conexión entre ambas notas."
  - title: "Consulta con Dataview para listar notas por tag"
    code: |
      ```dataview
      LIST FROM #proyecto
      SORT file.ctime DESC
      ```
    output: "Lista todas las notas etiquetadas con #proyecto, ordenadas por fecha de creación descendente"
tips:
  - text: "Establece una convención de nombres para tus notas desde el principio. Usa prefijos como `PROY-`, `NOTA-` o `IDEA-` si manejas muchas notas, o simplemente nombres descriptivos en español claro y consistente."
  - text: "No instales demasiados plugins al inicio. Comienza con el flujo básico de vinculación y añade plugins solo cuando identifiques una necesidad real. Demasiados plugins pueden ralentizar Obsidian y complicar tu flujo de trabajo."
  - text: "Usa tags anidados como `#proyecto/activo` y `#proyecto/completado` para crear jerarquías. Las búsquedas con tags son más flexibles que depender solo de carpetas para organizar tus notas."
  - text: "Activa la sincronización de tu vault con Git, Syncthing o cualquier servicio de archivos en la nube. Al ser archivos Markdown planos, no hay riesgo de corrupción y tienes historial completo de cambios."
  - text: "Crea templates para notas recurrentes como daily notes, meetings o revisiones de proyecto. Usa variables como `{{date}}` y `{{title}}` para autocompletar metadatos al crear nuevas notas desde una plantilla."
faq:
  - question: "¿Cómo sincronizo Obsidian entre dispositivos?"
    answer: "Tienes tres opciones: Obsidian Sync (pago, $4/mes, nativo y encriptado), servicios cloud como iCloud, Google Drive o OneDrive (gratis, colocando el vault en la carpeta sincronizada), o Git con el plugin Obsidian Git (gratis, control de versiones completo)."
  - question: "¿Obsidian es gratuito para uso comercial?"
    answer: "Sí, Obsidian es completamente gratuito para uso personal y comercial. Solo se requiere licencia de pago ($50/año) si trabajas en una empresa con más de 2 empleados o generas ingresos superiores a $1M USD anuales."
  - question: "¿Puedo publicar mis notas como sitio web?"
    answer: "Sí, con Obsidian Publish (servicio de pago, $8/mes) puedes publicar notas seleccionadas como un sitio web navegable con graph view incluido. Alternativas gratuitas incluyen Quartz o MkDocs con plugins de la comunidad."
  - question: "¿Cómo evito el vendor lock-in con Obsidian?"
    answer: "Tus notas son archivos Markdown planos en tu disco local. Incluso sin Obsidian, puedes leerlas y editarlas con cualquier editor de texto. Los plugins añaden sintaxis especial, pero el contenido base siempre es Markdown estándar y portable."
publishedAt: 2026-06-01
---

## ¿Qué es?

Obsidian es una aplicación de base de conocimiento personal que funciona con archivos Markdown locales. Su enfoque en vinculación bidireccional y graph visualization permite construir redes de conocimiento interconectadas, ideal para second brain y pensamiento conectado.

## ¿Para qué sirve?

Obsidian sirve para tomar notas interconectadas, construir una base de conocimiento personal, gestionar proyectos, escribir documentación técnica, llevar un diario, investigar temas complejos y organizar información con enlaces bidireccionales.

## Cuándo usarla

- Cuando quieres construir un second brain con notas interconectadas.
- Para investigación donde las conexiones entre ideas son importantes.
- Si prefieres archivos markdown locales sin vendor lock-in.
- Cuando valoras la privacidad y el control total de tus datos.
- Para personalizar tu flujo de trabajo con plugins y temas.

## Cuándo NO usarla

- Para edición colaborativa en tiempo real (Notion es mejor).
- Si necesitas una base de datos visual tipo Airtable.
- Cuando prefieres sincronización cloud sin configuración.
- Para equipos grandes que necesitan permisos y roles.
- Si buscas una herramienta todo-en-uno con calendario y email.

## Pros

- Archivos markdown locales, portables y sin vendor lock-in.
- Graph view visualmente impresionante y útil.
- Ecosistema masivo de plugins comunitarios.
- Rápido y ligero, incluso con miles de notas.
- Privacidad total: tus datos nunca salen de tu dispositivo.

## Contras

- Sincronización entre dispositivos es de pago o manual.
- Curva de aprendizaje para aprovechar plugins avanzados.
- Sin colaboración en tiempo real nativa.
- La versión gratuita es muy completa pero las features cloud son de pago.
- Puede ser abrumador por la cantidad de opciones de personalización.
