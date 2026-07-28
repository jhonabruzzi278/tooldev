import { readdirSync, existsSync } from 'node:fs';

const LOGO_EXTENSIONS = ['svg', 'webp', 'png', 'jpg', 'jpeg', 'ico', 'gif'];
const LOGOS_DIR = 'public/logos';

let cachedMap: Record<string, string> | null = null;

export function getLogoMap(): Record<string, string> {
  if (cachedMap) return cachedMap;

  const map: Record<string, string> = {};
  if (existsSync(LOGOS_DIR)) {
    for (const file of readdirSync(LOGOS_DIR)) {
      const extIdx = file.lastIndexOf('.');
      if (extIdx <= 0) continue;
      const ext = file.slice(extIdx + 1).toLowerCase();
      if (LOGO_EXTENSIONS.includes(ext)) {
        const name = file.slice(0, extIdx);
        map[name] = `/logos/${encodeURIComponent(file)}`;
      }
    }
  }

  cachedMap = map;
  return map;
}
