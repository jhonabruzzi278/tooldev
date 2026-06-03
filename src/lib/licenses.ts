export interface LicenseInfo {
  name: string;
  explanation: string;
  type: 'permissive' | 'weak-copyleft' | 'strong-copyleft' | 'source-available' | 'propietaria';
  url: string;
}

const licenseMap: Record<string, LicenseInfo> = {
  'MIT': {
    name: 'MIT',
    explanation: 'Puedes usar, copiar, modificar y distribuir el software libremente, incluso en proyectos comerciales. Solo debes incluir el aviso de copyright original. Es la licencia más simple y permisiva.',
    type: 'permissive',
    url: 'https://opensource.org/licenses/MIT',
  },
  'Apache-2.0': {
    name: 'Apache 2.0',
    explanation: 'Puedes usar, modificar y distribuir el software libremente, incluso comercialmente. Debes incluir el aviso de copyright y los cambios significativos. Además, concede una licencia de patentes implícita para protegerte de demandas.',
    type: 'permissive',
    url: 'https://opensource.org/licenses/Apache-2.0',
  },
  'Apache 2.0': {
    name: 'Apache 2.0',
    explanation: 'Puedes usar, modificar y distribuir el software libremente, incluso comercialmente. Debes incluir el aviso de copyright y los cambios significativos. Además, concede una licencia de patentes implícita para protegerte de demandas.',
    type: 'permissive',
    url: 'https://opensource.org/licenses/Apache-2.0',
  },
  'AGPL-3.0': {
    name: 'AGPL 3.0',
    explanation: 'Puedes usar y modificar el software, pero si lo modificas y lo pones a disposición como servicio web (SaaS), debes publicar el código fuente completo de tus modificaciones. Es la licencia copyleft más estricta.',
    type: 'strong-copyleft',
    url: 'https://www.gnu.org/licenses/agpl-3.0.html',
  },
  'GPL-3.0': {
    name: 'GPL 3.0',
    explanation: 'Puedes usar y modificar el software libremente. Si distribuyes versiones modificadas, debes publicar el código fuente bajo la misma licencia GPL. Protege la libertad del software obligando a compartir mejoras.',
    type: 'strong-copyleft',
    url: 'https://www.gnu.org/licenses/gpl-3.0.html',
  },
  'BSD-2': {
    name: 'BSD 2-Cláusulas',
    explanation: 'Puedes usar, modificar y distribuir el software libremente, incluso comercialmente. Solo debes incluir el aviso de copyright. Similar a MIT pero con redacción diferente.',
    type: 'permissive',
    url: 'https://opensource.org/licenses/BSD-2-Clause',
  },
  'BSD-3-Clause': {
    name: 'BSD 3-Cláusulas',
    explanation: 'Igual que BSD-2, pero además prohíbe usar el nombre de los autores para promocionar productos derivados sin permiso explícito. Es la versión más común de BSD.',
    type: 'permissive',
    url: 'https://opensource.org/licenses/BSD-3-Clause',
  },
  'BSD': {
    name: 'BSD',
    explanation: 'Puedes usar, modificar y distribuir el software libremente, incluso comercialmente. Solo debes incluir el aviso de copyright. Es una licencia permisiva similar a MIT.',
    type: 'permissive',
    url: 'https://opensource.org/licenses/BSD-2-Clause',
  },
  'PostgreSQL': {
    name: 'PostgreSQL',
    explanation: 'Puedes usar, modificar y distribuir PostgreSQL libremente, incluso comercialmente. Es una licencia permisiva muy similar a MIT y BSD. Solo debes incluir el aviso de copyright.',
    type: 'permissive',
    url: 'https://opensource.org/licenses/PostgreSQL',
  },
  'MongoDB Server Side Public License (SSPL)': {
    name: 'SSPL',
    explanation: 'Puedes usar y modificar MongoDB libremente. Si ofreces MongoDB como un servicio gestionado a terceros, debes publicar el código fuente completo de toda la plataforma, no solo de MongoDB. Por esto no es considerada open source por OSI.',
    type: 'source-available',
    url: 'https://www.mongodb.com/licensing/server-side-public-license',
  },
  'Elastic License 2.0': {
    name: 'Elastic 2.0',
    explanation: 'Puedes usar, modificar y distribuir el software libremente. No puedes ofrecerlo como un servicio SaaS gestionado sin una licencia adicional. Es una licencia de código disponible (source-available), no open source estricta.',
    type: 'source-available',
    url: 'https://www.elastic.co/licensing/elastic-license',
  },
  'BUSL-1.1 (antes MPL-2.0)': {
    name: 'BUSL 1.1',
    explanation: 'BUSL (Business Source License) permite uso libre para desarrollo, pruebas y producción limitada. Tras 3-4 años pasa a una licencia open source (en este caso MPL 2.0). MPL 2.0 permite usar el código en proyectos propietarios si los cambios al archivo original se publican.',
    type: 'source-available',
    url: 'https://mariadb.com/bsl11/',
  },
  'Redis Source Available License': {
    name: 'RSAL',
    explanation: 'Puedes usar y modificar Redis libremente. No puedes ofrecer Redis como un servicio de base de datos gestionada a terceros. Es una licencia de código disponible (source-available). Alternativa open source: Valkey.',
    type: 'source-available',
    url: 'https://redis.com/legal/redis-source-available-license/',
  },
  'Propietaria': {
    name: 'Propietaria',
    explanation: 'El software no es de código abierto. No puedes ver, modificar ni distribuir el código fuente. Su uso está sujeto a los términos de la licencia comercial del proveedor. Revisa los términos de uso oficiales para más detalles.',
    type: 'propietaria',
    url: '',
  },
  'Standard': {
    name: 'Estándar',
    explanation: 'Licencia estándar del proveedor. Revisa el sitio oficial para conocer los términos específicos de uso, distribución y modificación.',
    type: 'propietaria',
    url: '',
  },
};

export function getLicenseInfo(license: string): LicenseInfo | null {
  return licenseMap[license] ?? null;
}

export function getLicenseExplanation(license: string): string | null {
  return licenseMap[license]?.explanation ?? null;
}
