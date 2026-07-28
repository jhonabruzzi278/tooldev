---
name: snyk
description: >- Úsala cuando el usuario mencione o pregunte sobre seguridad, vulnerabilidades, dependencias, contenedores.
---

# Snyk

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** seguridad
- **Pricing:** freemium
- **License:** Apache-2.0
- **Technical Level:** intermedio
- **Compatibility:** Windows, macOS, Linux, Web
- **Official Site:** https://snyk.io/es/
- **GitHub:** https://github.com/snyk/snyk

## Features
- Escaneo de vulnerabilidades en dependencias open-source (SCA)
- Análisis estático de seguridad del código fuente (SAST)
- Escaneo de imágenes de contenedores Docker y registros
- >-
- Integración nativa con GitHub, GitLab, Bitbucket y CI/CD pipelines
- Fix automático con pull requests que actualizan dependencias vulnerables
- Base de datos de vulnerabilidades propietaria actualizada continuamente

## Steps
### 1. Instala el CLI e inicia sesión
>-

### 2. Escanea tu proyecto en busca de vulnerabilidades
>-

### 3. Corrige vulnerabilidades automáticamente
>-

### 4. Integra en tu pipeline de CI/CD
>-

## When to Use
- **Gestión continua de seguridad en dependencias:** >-
- **DevSecOps integrado en el flujo de desarrollo:** >-
- **Seguridad de contenedores e infraestructura:** >-

## Examples
### Escanear dependencias npm y corregir vulnerabilidades
```
# Instalar y autenticar Snyk
npm install -g snyk
snyk auth
# Escanear dependencias del proyecto
snyk test
# Salida ejemplo:
# Testing /my-project...
# ✗ High severity vuln in lodash (CVE-2021-23337)
#   Path: express > lodash
#   Fix: Upgrade to lodash@4.17.21
# Aplicar correcciones automáticas
snyk fix
# Monitorear continuamente
snyk monitor
tput: >-
Snyk identifica vulnerabilidades en tu árbol de dependencias, muestra la
ruta de dependencia afectada, y puede aplicar correcciones automáticas
actualizando a versiones parcheadas sin romper la compatibilidad.
```

### Integración con GitHub Actions
```
# .github/workflows/security.yml
name: Snyk Security Check
on: [push, pull_request]
jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Snyk to check for vulnerabilities
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
        with:
          args: --severity-threshold=high
tput: >-
Pipeline de CI que bloquea merges cuando se detectan vulnerabilidades de
severidad alta o crítica en las dependencias del proyecto.
```

## Tips
- >-
- >-
- >-
- >-

## FAQ
- **¿Snyk es gratis para proyectos open-source?** >-
- **¿En qué se diferencia Snyk de npm audit?** >-
- **¿Snyk puede escanear imágenes Docker?** >-
- **¿Cómo maneja Snyk los falsos positivos?** >-

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://snyk.io/es/
- **Source Code Issues:** Check the repository at https://github.com/snyk/snyk for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
