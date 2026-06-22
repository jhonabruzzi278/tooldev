---
name: snyk
description: Plataforma de seguridad para desarrolladores que encuentra y corrige vulnerabilidades en código, dependencias, contenedores e infraestructura como código. Úsala cuando el usuario mencione o pregunte sobre seguridad, vulnerabilidades, dependencias, contenedores.
---

# Snyk

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** devops
- **Pricing:** freemium
- **License:** Apache-2.0
- **Technical Level:** intermedio
- **Compatibility:** Windows, macOS, Linux, Web
- **Official Site:** https://snyk.io
- **GitHub:** https://github.com/snyk/snyk

## Features
- Escaneo de vulnerabilidades en dependencias open-source (SCA)
- Análisis estático de seguridad del código fuente (SAST)
- Escaneo de imágenes de contenedores Docker y registros
- Detección de misconfiguraciones en infraestructura como código (Terraform, K8s)
- Integración nativa con GitHub, GitLab, Bitbucket y CI/CD pipelines
- Fix automático con pull requests que actualizan dependencias vulnerables
- Base de datos de vulnerabilidades propietaria actualizada continuamente

## Steps
### 1. Instala el CLI e inicia sesión
Instala Snyk globalmente con npm install -g snyk y ejecuta snyk auth para autenticarte via navegador. Alternativamente, conecta tu repositorio directamente desde la interfaz web de Snyk sin instalación local.

### 2. Escanea tu proyecto en busca de vulnerabilidades
Ejecuta snyk test en la raíz de tu proyecto para analizar dependencias, o snyk code test para análisis de código fuente. Snyk mostrará vulnerabilidades encontradas con severidad, ruta de dependencia y remediation disponible.

### 3. Corrige vulnerabilidades automáticamente
Ejecuta snyk fix para aplicar parches automáticos o actualizaciones de versión que resuelvan vulnerabilidades sin romper compatibilidad. Desde la web, Snyk puede crear PRs automáticos con las correcciones.

### 4. Integra en tu pipeline de CI/CD
Añade snyk test como paso en tu pipeline (GitHub Actions, Jenkins, GitLab CI). Configura políticas para bloquear builds con vulnerabilidades críticas y recibir alertas cuando se descubran nuevas vulnerabilidades en dependencias ya deployadas.

## When to Use
- **Gestión continua de seguridad en dependencias:** Cuando tu proyecto tiene decenas o cientos de dependencias npm, pip, Maven u otros ecosistemas y necesitas visibilidad continua sobre vulnerabilidades conocidas, con alertas automáticas cuando se publican nuevos CVEs.
- **DevSecOps integrado en el flujo de desarrollo:** Para incorporar seguridad como parte del workflow de desarrollo sin crear fricción. Snyk se integra en PR reviews, editores IDE y pipelines CI para dar feedback de seguridad donde los desarrolladores ya trabajan.
- **Seguridad de contenedores e infraestructura:** Cuando necesitas escanear imágenes Docker antes del deploy y validar que tus configuraciones de Terraform, Kubernetes o CloudFormation no tienen misconfiguraciones de seguridad.

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
tput: "Snyk identifica vulnerabilidades en tu árbol de dependencias, muestra la ruta de dependencia afectada, y puede aplicar correcciones automáticas actualizando a versiones parcheadas sin romper la compatibilidad."
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
tput: "Pipeline de CI que bloquea merges cuando se detectan vulnerabilidades de severidad alta o crítica en las dependencias del proyecto."
```

## Tips
- Usa snyk monitor después de cada deploy para mantener un registro continuo de vulnerabilidades y recibir alertas cuando se descubran nuevos CVEs en tus dependencias ya deployadas.
- Configura --severity-threshold=high en CI para evitar bloquear builds por vulnerabilidades de baja severidad que pueden no ser explotables en tu contexto.
- Aprovecha las políticas de ignore (.snyk) para marcar falsos positivos o vulnerabilidades no aplicables, documentando la razón para auditorías futuras.
- Integra la extensión de Snyk en VS Code o IntelliJ para ver vulnerabilidades directamente en el editor mientras desarrollas, antes de hacer commit.

## FAQ
- **¿Snyk es gratis para proyectos open-source?** Sí, Snyk ofrece un plan gratuito generoso para proyectos open-source con tests ilimitados. Para proyectos privados, el plan gratuito permite hasta 200 tests mensuales con funcionalidad completa de escaneo de dependencias.
- **¿En qué se diferencia Snyk de npm audit?** Snyk tiene una base de datos de vulnerabilidades más completa y actualizada que el advisory database de npm, ofrece fix automático más inteligente que respeta semver, y cubre mucho más que solo npm: Python, Java, Go, Ruby, contenedores e IaC.
- **¿Snyk puede escanear imágenes Docker?** Sí, con snyk container test <imagen> puedes escanear imágenes de contenedores para detectar vulnerabilidades en paquetes del sistema operativo y dependencias de la aplicación. Se integra con Docker Hub, ECR, GCR y otros registros.
- **¿Cómo maneja Snyk los falsos positivos?** Puedes marcar vulnerabilidades como no aplicables usando archivos de política .snyk o desde la interfaz web. Snyk también proporciona contexto de explotabilidad para ayudarte a priorizar qué vulnerabilidades son realmente riesgosas en tu contexto específico.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://snyk.io
- **Source Code Issues:** Check the repository at https://github.com/snyk/snyk for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.
