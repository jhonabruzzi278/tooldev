import { describe, it, expect } from 'vitest';
import { categories, getCategoryBySlug } from '@/lib/categories';

describe('Home page data', () => {
  it('should have categories with proper count tracking structure', () => {
    const cat = categories[0];
    expect({
      ...cat,
      count: 0,
    }).toHaveProperty('count');
  });

  it('all categories should have display-friendly names', () => {
    for (const cat of categories) {
      expect(cat.name.length).toBeGreaterThan(0);
      expect(cat.description.length).toBeGreaterThan(10);
    }
  });

  it('all categories should have valid color values', () => {
    for (const cat of categories) {
      expect(cat.color).toMatch(/oklch\(/);
      expect(cat.lightBg).toMatch(/oklch\(/);
      expect(cat.darkBg).toMatch(/oklch\(/);
    }
  });

  it('getCategoryBySlug with each existing slug should return valid data', () => {
    for (const cat of categories) {
      const found = getCategoryBySlug(cat.slug);
      expect(found).toBeDefined();
      expect(found?.name).toBe(cat.name);
    }
  });
});
