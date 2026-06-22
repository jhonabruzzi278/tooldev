import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const skillsDir = resolve(process.cwd(), 'packages/tooldev-skills/skills');
const registryPath = resolve(skillsDir, 'registry.json');

describe('CLI Package - Skills Registry', () => {
  let registry: any[];

  it('registry.json should be valid JSON containing an array', () => {
    expect(existsSync(registryPath)).toBe(true);
    const content = readFileSync(registryPath, 'utf-8');
    registry = JSON.parse(content);
    expect(Array.isArray(registry)).toBe(true);
  });

  it('registry should contain at least 5 entries', () => {
    const content = readFileSync(registryPath, 'utf-8');
    registry = JSON.parse(content);
    expect(registry.length).toBeGreaterThanOrEqual(5);
  });

  it('each entry should have non-empty slug, name, category, description', () => {
    const content = readFileSync(registryPath, 'utf-8');
    registry = JSON.parse(content);
    for (const entry of registry) {
      expect(typeof entry.slug).toBe('string');
      expect(entry.slug.length).toBeGreaterThan(0);
      expect(typeof entry.name).toBe('string');
      expect(entry.name.length).toBeGreaterThan(0);
      expect(typeof entry.category).toBe('string');
      expect(entry.category.length).toBeGreaterThan(0);
      expect(typeof entry.description).toBe('string');
      expect(entry.description.length).toBeGreaterThan(0);
    }
  });

  it('all slugs should be unique', () => {
    const content = readFileSync(registryPath, 'utf-8');
    registry = JSON.parse(content);
    const slugs = registry.map(e => e.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(slugs.length);
  });

  it('each entry should have a corresponding .md skill file', () => {
    const content = readFileSync(registryPath, 'utf-8');
    registry = JSON.parse(content);
    for (const entry of registry) {
      const skillPath = resolve(skillsDir, `${entry.slug}.md`);
      expect(existsSync(skillPath), `Missing skill file: ${entry.slug}.md`).toBe(true);
    }
  });

  it('each skill file should contain required headings', () => {
    const content = readFileSync(registryPath, 'utf-8');
    registry = JSON.parse(content);
    for (const entry of registry) {
      const skillPath = resolve(skillsDir, `${entry.slug}.md`);
      const skillContent = readFileSync(skillPath, 'utf-8');
      expect(skillContent).toContain('## Instructions');
      expect(skillContent).toContain('## Key Information');
      expect(skillContent).toContain('## Features');
    }
  });
});
