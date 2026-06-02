import { describe, it, expect } from 'vitest';
import { categories, getCategoryBySlug, getCategoryName } from '@/lib/categories';

describe('categories', () => {
  it('should have exactly 6 categories', () => {
    expect(categories).toHaveLength(6);
  });

  it('should have all required properties on each category', () => {
    for (const cat of categories) {
      expect(cat).toHaveProperty('slug');
      expect(cat).toHaveProperty('name');
      expect(cat).toHaveProperty('description');
      expect(cat).toHaveProperty('icon');
      expect(cat).toHaveProperty('color');
      expect(cat).toHaveProperty('lightBg');
      expect(cat).toHaveProperty('darkBg');
    }
  });

  it('should have valid tabler icon names', () => {
    const icons = categories.map((c) => c.icon);
    for (const icon of icons) {
      expect(icon).toMatch(/^tabler:/);
    }
  });

  it('should have valid category slugs', () => {
    const slugs = categories.map((c) => c.slug);
    expect(slugs).toContain('frontend');
    expect(slugs).toContain('backend');
    expect(slugs).toContain('devops');
    expect(slugs).toContain('ia');
    expect(slugs).toContain('diseno');
    expect(slugs).toContain('productividad');
  });

  it('getCategoryBySlug should return correct category', () => {
    const frontend = getCategoryBySlug('frontend');
    expect(frontend?.name).toBe('Frontend');
    expect(frontend?.icon).toBe('tabler:layout');
  });

  it('getCategoryBySlug should return undefined for unknown slug', () => {
    expect(getCategoryBySlug('nonexistent')).toBeUndefined();
  });

  it('getCategoryName should return name for valid slug', () => {
    expect(getCategoryName('ia')).toBe('IA');
    expect(getCategoryName('devops')).toBe('DevOps');
  });

  it('getCategoryName should return slug for unknown slug', () => {
    expect(getCategoryName('unknown')).toBe('unknown');
  });

  it('should have unique slugs', () => {
    const slugs = categories.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
