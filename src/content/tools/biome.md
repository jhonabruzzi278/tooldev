---
name: Biome
description: Linter y formatter unificado escrito en Rust, compatible con ESLint y Prettier, con velocidad 10x más rápida.
category: frontend
tags: [linter, formatter, rust, javascript, typescript, tooling]
officialSite: https://biomejs.dev
pricing: gratis
openSource: true
license: MIT
technicalLevel: intermedio
compatibility: ["Web"]
featured: false
features:
  - Linter y formatter en una sola herramienta sin configuración
  - Soporte nativo para TypeScript, JSX, TSX, JSON y CSS
  - Migración automática desde ESLint y Prettier
  - Análisis de rendimiento 10x más rápido que herramientas legacy
  - Reglas de linter agrupadas por severidad y categoría
  - Formateo consistente con opciones de configuración mínimas
  - Integración con editores vía LSP (VS Code, Neovim, etc.)
alternatives: [eslint, prettier]
relatedTools: [visual-studio-code, tailwind-css, next-js]
howToUse:
  - step: 1
    title: "Inicializa Biome en tu proyecto"
    description: "Ejecuta npx @biomejs/biome init en la raíz de tu proyecto para generar un archivo biome.json con la configuración recomendada. Biome comienza a funcionar de inmediato con defaults sensatos incluso sin este archivo."
  - step: 2
    title: "Ejecuta linting y formateo unificado"
    description: "Usa npx @biomejs/biome check . para analizar todo el proyecto: Biome aplica reglas de linting (errores lógicos, malas prácticas, estilo) y verifica el formateo del código en un solo comando."
  - step: 3
    title: "Aplica correcciones automáticas"
    description: "Ejecuta npx @biomejs/biome check --write . para que Biome corrija automáticamente los problemas solucionables: formatea el código, arregla imports no usados, simplifica expresiones y aplica fixes de las reglas activadas."
  - step: 4
    title: "Integra con tu editor y CI/CD"
    description: "Instala la extensión oficial de Biome en VS Code o configura el LSP en NeoVim/Zed. Agrega npx @biomejs/biome ci . en GitHub Actions o pipelines CI/CD para rechazar automáticamente código que no cumpla las reglas."
whenToUse:
  - title: "Reemplazo de ESLint y Prettier en una sola herramienta"
    description: "Cuando tu equipo quiere consolidar linting y formateo en una sola dependencia que es 10-20x más rápida, eliminando conflictos entre ESLint y Prettier y simplificando las configuraciones."
  - title: "Proyectos TypeScript con JSX/TSX"
    description: "Para aplicaciones React, Next.js o cualquier stack moderno donde necesitas análisis rápido de TypeScript y soporte nativo para JSX/TSX sin instalar plugins, presets ni configuraciones adicionales."
  - title: "Aceleración de pipelines de CI/CD"
    description: "Cuando el linting en CI/CD se ha convertido en un cuello de botella y cada segundo cuenta. Biome escrito en Rust reduce drásticamente el tiempo de validación comparado con ESLint."
examples:
  - title: "Configuración recomendada de biome.json"
    code: |
      {
        "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
        "formatter": {
          "enabled": true,
          "indentStyle": "space",
          "indentWidth": 2,
          "lineWidth": 100
        },
        "linter": {
          "enabled": true,
          "rules": {
            "recommended": true,
            "suspicious": { "noConsoleLog": "warn" },
            "style": { "useConst": "error" }
          }
        },
        "javascript": {
          "formatter": { "quoteStyle": "single" }
        }
      }
    output: "Biome formatea con comillas simples, indentación de 2 espacios, líneas de 100 caracteres, activa todas las reglas recomendadas y advierte sobre console.log."
tips:
  - text: "Usa npx @biomejs/biome migrate eslint para convertir automáticamente tus configuraciones de ESLint (.eslintrc) y Prettier (.prettierrc) a reglas equivalentes en biome.json."
  - text: "Configura formatter.ignore y linter.ignore en biome.json para excluir archivos generados (dist/, node_modules/, coverage/) y evitar falsos positivos en código que no controlas."
  - text: "Ejecuta npx @biomejs/biome check --apply-unsafe para aplicar correcciones potencialmente riesgosas (cambios de lógica) que requieren revisión manual posterior para verificar que no alteran el comportamiento."
  - text: "Integra Biome con git hooks (Lefthook, Husky) para formatear y validar código automáticamente en cada commit, evitando que código inconsistente llegue al repositorio."
  - text: "Revisa las release notes de Biome regularmente; cada versión agrega nuevas reglas de linting y mejoras de rendimiento. Puedes activar reglas experimentales bajo linter.rules para probarlas antes de que sean estables."
faq:
  - question: "¿Biome es compatible con los plugins de ESLint?"
    answer: "No. Biome tiene su propio conjunto de reglas implementadas en Rust que cubren la mayoría de los casos comunes, pero no ejecuta plugins de ESLint escritos por la comunidad. Si dependes de un plugin específico, mantén ESLint para esa regla puntual."
  - question: "¿Puedo usar Biome y ESLint juntos en el mismo proyecto?"
    answer: "Es posible pero no recomendable. Genera redundancia, posibles conflictos entre reglas y duplica el tiempo de análisis. Lo ideal es migrar completamente a Biome o mantener ESLint si dependes de plugins imprescindibles."
  - question: "¿Biome formatea CSS y JSON?"
    answer: "Sí, Biome soporta formateo y linting para JavaScript, TypeScript, JSX, TSX, JSON y CSS de forma nativa. El soporte para más lenguajes como HTML y Markdown está en desarrollo activo."
  - question: "¿Cómo afecta Biome al rendimiento en monorepos grandes?"
    answer: "Biome procesa típicamente cientos de miles de líneas en menos de un segundo. En monorepos con miles de archivos, la diferencia con ESLint es drástica: donde ESLint tarda 30-60 segundos, Biome tarda 1-3 segundos."
publishedAt: 2026-06-01
---

## ¿Qué es?

Biome es una herramienta unificada de linting y formateo para JavaScript, TypeScript, JSX, TSX, JSON y CSS. Escrito en Rust, ofrece rendimiento 10x superior a ESLint y Prettier combinados, con migración automática desde configuraciones existentes y cero configuración para empezar.

## ¿Para qué sirve?

Biome sirve para mantener la calidad y consistencia del código en proyectos web modernos. Reemplaza ESLint, Prettier y otras herramientas similares con una sola dependencia que es órdenes de magnitud más rápida, ideal para equipos que buscan simplicidad y velocidad.

## Cuándo usarla

- Cuando quieres un linter + formatter en una sola herramienta rápida.
- Para migrar desde ESLint y/o Prettier sin cambiar tu flujo de trabajo.
- Si trabajas con TypeScript, JSX o TSX y necesitas análisis rápido.
- En CI/CD donde los segundos de linting importan.
- Para equipos que quieren configuración mínima con defaults sensatos.

## Cuándo NO usarla

- Si dependes de plugins de ESLint no soportados por Biome.
- Cuando necesitas reglas de linter muy específicas que Biome no cubre.
- Si tu proyecto usa herramientas legacy que solo existen como plugins ESLint.
- Para análisis de código con reglas personalizadas muy complejas.

## Pros

- Velocidad 10-20x más rápida que ESLint + Prettier.
- Sin configuración requerida para empezar.
- Migración automática desde ESLint/Prettier.
- Linter y formatter integrados, una sola herramienta.
- Soporte nativo para TypeScript sin plugins extra.

## Contras

- Ecosistema de plugins aún en crecimiento.
- No soporta plugins de ESLint directamente.
- Compatibilidad limitada con configuraciones ESLint muy personalizadas.
- Comunidad más pequeña que ESLint.

## CLI

Biome CLI ofrece comandos para linting, formateo y verificación:

```bash
npx @biomejs/biome init              # Crear configuración biome.json
npx @biomejs/biome check .           # Lint + formateo en un solo comando
npx @biomejs/biome lint .            # Solo linting
npx @biomejs/biome format .          # Solo formateo
npx @biomejs/biome ci .              # Modo CI (falla si hay errores)
npx @biomejs/biome migrate           # Migrar desde ESLint/Prettier
npx @biomejs/biome --version         # Versión instalada
```
