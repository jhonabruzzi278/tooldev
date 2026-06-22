---
name: playwright
description: Framework de testing E2E multiplataforma de Microsoft para navegadores modernos con una sola API. Úsala cuando el usuario mencione o pregunte sobre testing, e2e, automation, browser.
---

# Playwright

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** frontend
- **Pricing:** gratis
- **License:** Apache-2.0
- **Technical Level:** intermedio
- **Compatibility:** Web, Windows, macOS, Linux
- **Official Site:** https://playwright.dev
- **GitHub:** https://github.com/microsoft/playwright
- **Alternatives:** cypress, selenium, puppeteer

## Features
- Test en Chromium, Firefox y WebKit con una sola API
- Espera automática sin timeouts flaky ni sleeps manuales
- Grabador de tests (codegen) que genera código automáticamente
- Trazas, videos y screenshots para depuración visual
- Simulación de dispositivos móviles, geolocalización y permisos
- Soporte para iframes, pestañas múltiples y popups
- API de red para interceptar y mockear requests

## Steps
### 1. Instalar Playwright y los navegadores
Ejecuta `npm init playwright@latest` para inicializar el proyecto con TypeScript y configuración predefinida. Luego `npx playwright install` descargará Chromium, Firefox y WebKit. El instalador también descarga las dependencias del sistema necesarias.

### 2. Escribir el primer test E2E
Crea un archivo en la carpeta `tests/` usando el método `test()` de Playwright. Usa `page.goto()` para navegar, los localizadores `page.locator()` para seleccionar elementos, y los assertions `expect()` para verificar el estado esperado de la página.

### 3. Usar Codegen para grabar tests visualmente
Ejecuta `npx playwright codegen <url>` para abrir el grabador. Navega por tu aplicación mientras Playwright genera el código del test automáticamente. Copia el código generado a tu archivo de tests y ajústalo según necesites.

### 4. Ejecutar tests en CI/CD
Configura GitHub Actions, GitLab CI o tu plataforma de CI/CD para ejecutar `npx playwright test` en cada push. Usa el reporter HTML con `--reporter=html` y las trazas `--trace=on` para depurar fallos que solo ocurren en el entorno de CI.

## When to Use
- **Testing cross-browser de aplicaciones web:** Playwright ejecuta los mismos tests en Chromium, Firefox y WebKit con una sola configuración. No necesitas código específico por navegador, lo que reduce drásticamente el mantenimiento de la suite de tests.
- **Automatización de flujos web complejos:** Simula interacciones reales de usuario: clicks, escritura, carga de archivos, manejo de iframes, pestañas múltiples y popups. Playwright espera automáticamente a que los elementos estén listos antes de interactuar con ellos.
- **Pruebas visuales y de accesibilidad:** Usa `expect(page).toHaveScreenshot()` para pruebas de regresión visual pixel a pixel. Con la API de accesibilidad puedes verificar roles ARIA y estructura semántica, asegurando que tu aplicación sea usable con lectores de pantalla.

## Examples
### Test E2E de navegación y formulario
```
import { test, expect } from '@playwright/test';
test('iniciar sesión exitosamente', async ({ page }) => {
  await page.goto('https://miapp.com/login');
  await page.fill('input[name="email"]', 'usuario@test.com');
  await page.fill('input[name="password"]', 'secreto123');
  await page.click('button[type="submit"]');
  await expect(page.locator('h1')).toContainText('Dashboard');
});
tput: "Test passed: navegación, llenado de formulario y verificación exitosos"
```

### Intercepción de requests para mockear API
```
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
tput: "Test passed: la API fue interceptada y la UI muestra los datos mockeados correctamente"
```

## Tips
- Usa `page.waitForSelector()` con moderación. Playwright ya tiene espera automática en la mayoría de acciones como `click()`, `fill()` y `expect()`. Agregar waits manuales suele ser innecesario y genera tests más lentos.
- Agrupa tests con `test.describe()` y comparte estado con `test.use()` dentro del bloque describe. Para tests independientes, usa el aislamiento por defecto de Playwright que crea un nuevo contexto de navegador por cada test.
- Habilita las trazas con `--trace on` en CI. Cuando un test falle, descarga el archivo trace.zip y ábrelo con `npx playwright show-trace trace.zip` para ver exactamente qué pasó paso a paso, con capturas de pantalla y logs de red.
- Usa `page.route()` para mockear APIs externas en lugar de depender de servicios reales en tests. Esto hace los tests más rápidos, predecibles y evita falsos fallos por indisponibilidad de servicios de terceros.
- Configura `globalSetup` para autenticarte una sola vez y reutilizar el estado (cookies, localStorage) en todos los tests. Esto evita repetir el flujo de login en cada test, ahorrando tiempo de ejecución significativamente.

## FAQ
- **¿Playwright o Cypress? ¿Cuál debería elegir?** Playwright ofrece mejor soporte multi-navegador real, espera automática más inteligente, mayor velocidad y funcionalidades avanzadas como grabación de tests y trazas. Cypress tiene una curva de aprendizaje más suave y mejor documentación para principiantes. Para proyectos nuevos en 2026, Playwright es la opción más recomendada.
- **¿Playwright reemplaza pruebas unitarias y de integración?** No, Playwright es para tests end-to-end que validan flujos completos desde la perspectiva del usuario. Las pruebas unitarias (Vitest, Jest) y de integración (Testing Library) son complementarias y más rápidas para validar lógica y componentes aislados.
- **¿Cómo ejecuto tests en paralelo para que sean más rápidos?** Playwright ejecuta tests en paralelo por defecto usando múltiples workers. Cada worker ejecuta un test en un contexto de navegador aislado. Configura `workers` en playwright.config.ts para controlar el paralelismo según los recursos de tu máquina o CI.
- **¿Puedo testear aplicaciones móviles con Playwright?** No directamente apps nativas, pero Playwright emula dispositivos móviles en navegadores con viewport, user agent, geolocalización y touch events. Para apps nativas, necesitas herramientas como Appium o Detox. Para PWAs y responsive web, Playwright es ideal.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://playwright.dev
- **Source Code Issues:** Check the repository at https://github.com/microsoft/playwright for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
