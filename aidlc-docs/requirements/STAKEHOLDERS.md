# Stakeholders

> **Fuente:** git config, README, package.json. Proyecto sin documentación formal de stakeholders — reconstruido desde evidencia y marcado donde es supuesto.

## Identificados (real, de la evidencia)

| Rol | Persona/Entidad | Evidencia | Responsabilidad |
|-----|-----------------|-----------|-----------------|
| Owner / Desarrollador / Mantenedor de contenido | **Jonathan Guerra** | git config `JONAHBRUZZI <jon.guerra@duocuc.cl>`; README: github.com/jhonabruzzi278; CLI repo: github.com/jonathanfedev/tooldev | Todo: producto, código, contenido, deploy |
| Usuarios finales | Desarrolladores hispanohablantes (primario) y angloparlantes (secundario) | `.kiro/steering/product.md`: "Contenido primero en español para la comunidad hispanohablante" | Consumen el catálogo, chat y CLI |
| Proveedores de plataforma | Vercel (hosting), OpenAI (chat), Formspree (contacto), SVGL (logos) | `vercel.json`, `.env.example`, CSP en headers, `src/lib/svgl.ts` | Servicios externos de los que depende el producto |

## ⚠️ Pendiente de validación humana

- ¿Existe algún colaborador, comunidad Discord/Reddit, o patrocinador? No hay evidencia en el repo.
- ¿Las herramientas catalogadas son "stakeholders" (¿relación comercial/afiliación?) o es curaduría independiente? El código sugiere curaduría independiente (campo `officialSite` enlaza directo, sin links de afiliado detectados).
- La discrepancia de cuentas GitHub (`jhonabruzzi278` vs `jonathanfedev`) — ¿misma persona, renombre de cuenta, o dos personas?

## Decision Rights (RACI simplificado)

Proyecto unipersonal: Jonathan Guerra es Responsible + Accountable de todas las decisiones. No hay proceso de aprobación externo documentado.
