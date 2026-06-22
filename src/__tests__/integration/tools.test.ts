import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const toolsDir = join(process.cwd(), 'src', 'content', 'tools');

function getToolFiles(): string[] {
  return readdirSync(toolsDir).filter((f) => f.endsWith('.md'));
}

function parseYamlValue(value: string): any {
  if (value === 'true') return true;
  if (value === 'false') return false;
  return value;
}

describe('Tools content integrity', () => {
  const toolFiles = getToolFiles();

  it(`should have ${toolFiles.length} tool markdown files`, () => {
    expect(toolFiles.length).toBeGreaterThan(0);
    expect(toolFiles.length).toBe(99);
  });

  it('every tool should have valid required frontmatter fields', () => {
    const validCategories = ['frontend', 'backend', 'devops', 'ia', 'diseno', 'productividad'];
    const validPricing = ['gratis', 'freemium', 'pago', 'open-source'];
    const validLevels = ['principiante', 'intermedio', 'avanzado'];
    const failures: string[] = [];

    for (const file of toolFiles) {
      const content = readFileSync(join(toolsDir, file), 'utf-8');
      const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
      if (!fmMatch) { failures.push(`${file}: no frontmatter`); continue; }

      const fm = fmMatch[1];

      const nameMatch = fm.match(/^name:\s*(.+)/m);
      if (!nameMatch) failures.push(`${file}: missing name`);

      const descMatch = fm.match(/^description:\s*(.+)/m);
      if (!descMatch) failures.push(`${file}: missing description`);

      const catMatch = fm.match(/^category:\s*(.+)/m);
      if (!catMatch || !validCategories.includes(catMatch[1])) {
        failures.push(`${file}: invalid category`);
      }

      const pricingMatch = fm.match(/^pricing:\s*(.+)/m);
      if (!pricingMatch || !validPricing.includes(pricingMatch[1])) {
        failures.push(`${file}: invalid pricing`);
      }

      const levelMatch = fm.match(/^technicalLevel:\s*(.+)/m);
      if (!levelMatch || !validLevels.includes(levelMatch[1])) {
        failures.push(`${file}: invalid technicalLevel`);
      }

      const siteMatch = fm.match(/^officialSite:\s*(.+)/m);
      if (!siteMatch || !siteMatch[1].startsWith('http')) {
        failures.push(`${file}: invalid officialSite`);
      }

      const osMatch = fm.match(/^openSource:\s*(.+)/m);
      if (!osMatch || (osMatch[1] !== 'true' && osMatch[1] !== 'false')) {
        failures.push(`${file}: invalid openSource`);
      }
    }

    expect(failures).toEqual([]);
  });

  it('every tool should have howToUse, whenToUse, tips, and faq sections', () => {
    const missing: string[] = [];

    for (const file of toolFiles) {
      const content = readFileSync(join(toolsDir, file), 'utf-8');
      if (!content.includes('howToUse:')) missing.push(`${file}: missing howToUse`);
      if (!content.includes('whenToUse:')) missing.push(`${file}: missing whenToUse`);
      if (!content.includes('tips:')) missing.push(`${file}: missing tips`);
      if (!content.includes('faq:')) missing.push(`${file}: missing faq`);
    }

    expect(missing).toEqual([]);
  });

  it('should have featured tools', () => {
    let featuredCount = 0;
    for (const file of toolFiles) {
      const content = readFileSync(join(toolsDir, file), 'utf-8');
      if (content.match(/^featured:\s*true/m)) featuredCount++;
    }
    expect(featuredCount).toBeGreaterThan(0);
  });

  it('every tool should have features', () => {
    const missing: string[] = [];
    for (const file of toolFiles) {
      const content = readFileSync(join(toolsDir, file), 'utf-8');
      if (!content.match(/^features:/m)) missing.push(file);
    }
    expect(missing).toEqual([]);
  });

  it('every tool should have tags', () => {
    const missing: string[] = [];
    for (const file of toolFiles) {
      const content = readFileSync(join(toolsDir, file), 'utf-8');
      if (!content.match(/^tags:/m)) missing.push(file);
    }
    expect(missing).toEqual([]);
  });
});
