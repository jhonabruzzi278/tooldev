---
name: Playwright
description: Framework de testing E2E multiplataforma de Microsoft para navegadores modernos con una sola API.
category: frontend
tags: [testing, e2e, automation, browser, javascript, typescript, microsoft]
officialSite: https://playwright.dev
github: https://github.com/microsoft/playwright
pricing: gratis
openSource: true
license: Apache-2.0
technicalLevel: intermedio
compatibility: ["Web", Windows, macOS, Linux]
featured: false
verified: true
screenshots:
  - /screenshots/playwright.webp
features:
  - Test en Chromium, Firefox y WebKit con una sola API
  - Espera automática sin timeouts flaky ni sleeps manuales
  - Grabador de tests (codegen) que genera código automáticamente
  - Trazas, videos y screenshots para depuración visual
  - Simulación de dispositivos móviles, geolocalización y permisos
  - Soporte para iframes, pestañas múltiples y popups
  - API de red para interceptar y mockear requests
alternatives: [cypress, selenium, puppeteer]
relatedTools: [visual-studio-code, storybook, react, next-js]
howToUse:
  - step: 1
    title: "Instalar Playwright y los navegadores"
    description: "Ejecuta `npm init playwright@latest` para inicializar el proyecto con TypeScript y configuración predefinida. Luego `npx playwright install` descargará Chromium, Firefox y WebKit. El instalador también descarga las dependencias del sistema necesarias."
  - step: 2
    title: "Escribir el primer test E2E"
    description: "Crea un archivo en la carpeta `tests/` usando el método `test()` de Playwright. Usa `page.goto()` para navegar, los localizadores `page.locator()` para seleccionar elementos, y los assertions `expect()` para verificar el estado esperado de la página."
  - step: 3
    title: "Usar Codegen para grabar tests visualmente"
    description: "Ejecuta `npx playwright codegen <url>` para abrir el grabador. Navega por tu aplicación mientras Playwright genera el código del test automáticamente. Copia el código generado a tu archivo de tests y ajústalo según necesites."
  - step: 4
    title: "Ejecutar tests en CI/CD"
    description: "Configura GitHub Actions, GitLab CI o tu plataforma de CI/CD para ejecutar `npx playwright test` en cada push. Usa el reporter HTML con `--reporter=html` y las trazas `--trace=on` para depurar fallos que solo ocurren en el entorno de CI."
whenToUse:
  - title: "Testing cross-browser de aplicaciones web"
    description: "Playwright ejecuta los mismos tests en Chromium, Firefox y WebKit con una sola configuración. No necesitas código específico por navegador, lo que reduce drásticamente el mantenimiento de la suite de tests."
  - title: "Automatización de flujos web complejos"
    description: "Simula interacciones reales de usuario: clicks, escritura, carga de archivos, manejo de iframes, pestañas múltiples y popups. Playwright espera automáticamente a que los elementos estén listos antes de interactuar con ellos."
  - title: "Pruebas visuales y de accesibilidad"
    description: "Usa `expect(page).toHaveScreenshot()` para pruebas de regresión visual pixel a pixel. Con la API de accesibilidad puedes verificar roles ARIA y estructura semántica, asegurando que tu aplicación sea usable con lectores de pantalla."
examples:
  - title: "Test E2E de navegación y formulario"
    code: |
      import { test, expect } from '@playwright/test';

      test('iniciar sesión exitosamente', async ({ page }) => {
        await page.goto('https://miapp.com/login');
        await page.fill('input[name="email"]', 'usuario@test.com');
        await page.fill('input[name="password"]', 'secreto123');
        await page.click('button[type="submit"]');
        await expect(page.locator('h1')).toContainText('Dashboard');
      });
    output: "Test passed: navegación, llenado de formulario y verificación exitosos"
  - title: "Intercepción de requests para mockear API"
    code: |
      test('mostrar lista de productos mockeada', async ({ page }) => {
        await page.route('**/api/productos', route => {
          route.fulfill({
            status: 200,
            body: JSON.stringify([{ id: 1, nombre: 'Laptop' }])
          });
        });
        await page.goto('https://miapp.com/productos');
        await expect(page.locator('.producto')).toHaveCount(1);
      });
    output: "Test passed: la API fue interceptada y la UI muestra los datos mockeados correctamente"
tips:
  - text: "Usa `page.waitForSelector()` con moderación. Playwright ya tiene espera automática en la mayoría de acciones como `click()`, `fill()` y `expect()`. Agregar waits manuales suele ser innecesario y genera tests más lentos."
  - text: "Agrupa tests con `test.describe()` y comparte estado con `test.use()` dentro del bloque describe. Para tests independientes, usa el aislamiento por defecto de Playwright que crea un nuevo contexto de navegador por cada test."
  - text: "Habilita las trazas con `--trace on` en CI. Cuando un test falle, descarga el archivo trace.zip y ábrelo con `npx playwright show-trace trace.zip` para ver exactamente qué pasó paso a paso, con capturas de pantalla y logs de red."
  - text: "Usa `page.route()` para mockear APIs externas en lugar de depender de servicios reales en tests. Esto hace los tests más rápidos, predecibles y evita falsos fallos por indisponibilidad de servicios de terceros."
  - text: "Configura `globalSetup` para autenticarte una sola vez y reutilizar el estado (cookies, localStorage) en todos los tests. Esto evita repetir el flujo de login en cada test, ahorrando tiempo de ejecución significativamente."
faq:
  - question: "¿Playwright o Cypress? ¿Cuál debería elegir?"
    answer: "Playwright ofrece mejor soporte multi-navegador real, espera automática más inteligente, mayor velocidad y funcionalidades avanzadas como grabación de tests y trazas. Cypress tiene una curva de aprendizaje más suave y mejor documentación para principiantes. Para proyectos nuevos en 2026, Playwright es la opción más recomendada."
  - question: "¿Playwright reemplaza pruebas unitarias y de integración?"
    answer: "No, Playwright es para tests end-to-end que validan flujos completos desde la perspectiva del usuario. Las pruebas unitarias (Vitest, Jest) y de integración (Testing Library) son complementarias y más rápidas para validar lógica y componentes aislados."
  - question: "¿Cómo ejecuto tests en paralelo para que sean más rápidos?"
    answer: "Playwright ejecuta tests en paralelo por defecto usando múltiples workers. Cada worker ejecuta un test en un contexto de navegador aislado. Configura `workers` en playwright.config.ts para controlar el paralelismo según los recursos de tu máquina o CI."
  - question: "¿Puedo testear aplicaciones móviles con Playwright?"
    answer: "No directamente apps nativas, pero Playwright emula dispositivos móviles en navegadores con viewport, user agent, geolocalización y touch events. Para apps nativas, necesitas herramientas como Appium o Detox. Para PWAs y responsive web, Playwright es ideal."
publishedAt: 2026-06-01
---

## ¿Qué es?

Playwright es un framework de testing E2E de código abierto creado por Microsoft que permite automatizar navegadores Chromium, Firefox y WebKit con una sola API. Ofrece espera automática, grabación de tests, depuración visual y soporte multiplataforma.

## ¿Para qué sirve?

Playwright sirve para escribir y ejecutar tests end-to-end confiables en aplicaciones web modernas. Es ideal para equipos que necesitan cubrir múltiples navegadores con un solo código de test, con herramientas integradas para depuración y trazabilidad.

## Cuándo usarla

- Cuando necesitas tests E2E confiables sin flakiness.
- Para cubrir múltiples navegadores con una sola base de código.
- Si quieres generar tests automáticamente con el grabador.
- Cuando necesitas interceptar y mockear requests de red.
- Para tests que requieren simulación de dispositivos móviles.

## Cuándo NO usarla

- Para tests unitarios o de integración simples (Vitest o Jest).
- Si solo necesitas testing de componentes aislados (Testing Library).
- Cuando el equipo prefiere la sintaxis de Cypress.
- Para proyectos muy pequeños sin necesidad de E2E.

## Pros

- Soporte para Chromium, Firefox y WebKit en una API.
- Auto-waiting elimina la mayoría de tests flaky.
- Codegen para generar tests visualmente.
- Trazas y videos integrados para debugging.
- API de red potente para mocking.

## Contras

- Mayor curva de aprendizaje que Cypress.
- No tiene su propio runner de tests (usa el del framework).
- Debugging en CI puede ser complejo sin las trazas.
- Requiere Node.js 16+.

## CLI

Playwright CLI cubre instalación, generación de tests, debugging y reportes:

```bash
npm init playwright@latest           # Inicializar proyecto
npx playwright install               # Instalar navegadores
npx playwright test                  # Ejecutar todos los tests
npx playwright test --ui             # Modo UI interactivo
npx playwright codegen               # Abrir grabador de tests
npx playwright show-report           # Abrir reporte HTML
npx playwright test --debug          # Modo debug con inspector
npx playwright install-deps          # Instalar dependencias del sistema
```
