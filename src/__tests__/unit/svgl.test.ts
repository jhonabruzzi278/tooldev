import { describe, it, expect } from 'vitest';
import { getSVGUrl } from '@/lib/svgl';
import type { ThemeOptions } from '@/lib/svgl';

describe('svgl utilities', () => {
  it('getSVGUrl should return string route directly', () => {
    expect(getSVGUrl('https://svgl.app/test.svg')).toBe('https://svgl.app/test.svg');
  });

  it('getSVGUrl should return light theme from ThemeOptions', () => {
    const route: ThemeOptions = {
      light: 'https://svgl.app/logo-light.svg',
      dark: 'https://svgl.app/logo-dark.svg',
    };
    expect(getSVGUrl(route)).toBe('https://svgl.app/logo-light.svg');
  });
});
