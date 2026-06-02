export interface ThemeOptions {
  light: string;
  dark: string;
}

interface SVGLItem {
  id: number;
  title: string;
  category: string | string[];
  route: string | ThemeOptions;
  url: string;
  wordmark?: string | ThemeOptions;
  brandUrl?: string;
}

let _svgMap: Map<string, SVGLItem> | null = null;

async function fetchSVGLData(): Promise<SVGLItem[]> {
  try {
    const res = await fetch('https://api.svgl.app');
    if (!res.ok) return [];
    const data = await res.json();
    if (Array.isArray(data)) return data;
    if (data && typeof data === 'object' && 'value' in data && Array.isArray(data.value)) return data.value;
    if (data && typeof data === 'object' && 'data' in data && Array.isArray(data.data)) return data.data;
    return [];
  } catch {
    return [];
  }
}

async function buildMap(): Promise<Map<string, SVGLItem>> {
  if (_svgMap) return _svgMap;
  const items = await fetchSVGLData();
  _svgMap = new Map();
  for (const item of items) {
    const key = item.title.toLowerCase();
    if (!_svgMap.has(key)) {
      _svgMap.set(key, item);
    }
  }
  return _svgMap;
}

export async function getToolLogo(toolName: string): Promise<{ route: string | ThemeOptions } | null> {
  const map = await buildMap();
  const item = map.get(toolName.toLowerCase());
  if (!item) return null;
  return { route: item.route };
}

export function getSVGUrl(route: string | ThemeOptions): string {
  if (typeof route === 'string') return route;
  return route.light;
}
