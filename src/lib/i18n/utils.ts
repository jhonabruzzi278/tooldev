import type { Locale } from './translations';
import type { AstroGlobal } from 'astro';

export function getLocale(Astro: Readonly<AstroGlobal>): Locale {
  return (Astro.currentLocale as Locale) || 'es';
}
