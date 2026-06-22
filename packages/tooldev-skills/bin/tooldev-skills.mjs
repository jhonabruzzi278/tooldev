#!/usr/bin/env node

import { readFileSync, mkdirSync, copyFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import process from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const skillsDir = join(__dirname, '..', 'skills');
const registryPath = join(skillsDir, 'registry.json');

const [,, command, ...args] = process.argv;

function showHelp() {
  console.log(`Usage: tooldev-skills <command> [options]

Commands:
  install <slug>   Install a skill file to your project
  list             List all available skills
  search <query>   Search skills by keyword

Examples:
  npx tooldev-skills install astro
  npx tooldev-skills list
  npx tooldev-skills search frontend`);
}

function loadRegistry() {
  try {
    const content = readFileSync(registryPath, 'utf-8');
    return JSON.parse(content);
  } catch {
    console.error('Error: Registry file is missing or corrupt.');
    process.exit(1);
  }
}

function formatTable(entries) {
  if (entries.length === 0) return;

  const maxSlug = Math.max(...entries.map(e => e.slug.length));
  const maxName = Math.max(...entries.map(e => e.name.length));
  const maxCategory = Math.max(...entries.map(e => e.category.length));

  for (const entry of entries) {
    const slug = entry.slug.padEnd(maxSlug);
    const name = entry.name.padEnd(maxName);
    const category = entry.category.padEnd(maxCategory);
    console.log(`  ${slug}  ${name}  ${category}`);
  }
}

function install(slug) {
  if (!slug) {
    console.error('Usage: tooldev-skills install <slug>');
    process.exit(1);
  }

  const registry = loadRegistry();
  const entry = registry.find(e => e.slug === slug);

  if (!entry) {
    console.error(`Error: Skill "${slug}" not found.`);
    const suggestions = registry.filter(e => e.slug.includes(slug));
    if (suggestions.length > 0) {
      console.error('\nDid you mean:');
      for (const s of suggestions) {
        console.error(`  - ${s.slug}`);
      }
    }
    process.exit(1);
  }

  const sourcePath = join(skillsDir, `${slug}.md`);
  const destDir = join(process.cwd(), '.agents', 'skills', slug);
  const destPath = join(destDir, 'SKILL.md');

  try {
    mkdirSync(destDir, { recursive: true });
    copyFileSync(sourcePath, destPath);
  } catch (err) {
    console.error(`Error: Could not write to ${destPath}`);
    console.error(err.message);
    process.exit(1);
  }

  console.log(`Installed "${entry.name}" skill to ${destPath}`);
  process.exit(0);
}

function list() {
  const registry = loadRegistry();

  if (registry.length === 0) {
    console.log('No skills available.');
    process.exit(0);
  }

  const sorted = [...registry].sort((a, b) => a.slug.localeCompare(b.slug));
  formatTable(sorted);
  console.log(`\nTotal: ${sorted.length} skills`);
  process.exit(0);
}

function search(query) {
  if (!query) {
    console.error('Usage: tooldev-skills search <query>');
    process.exit(1);
  }

  const registry = loadRegistry();
  const lowerQuery = query.toLowerCase();

  const matches = registry.filter(entry =>
    entry.slug.toLowerCase().includes(lowerQuery) ||
    entry.name.toLowerCase().includes(lowerQuery) ||
    entry.category.toLowerCase().includes(lowerQuery) ||
    entry.description.toLowerCase().includes(lowerQuery)
  );

  if (matches.length > 0) {
    const sorted = [...matches].sort((a, b) => a.slug.localeCompare(b.slug));
    formatTable(sorted);
    console.log(`\n${sorted.length} skill(s) matched.`);
    process.exit(0);
  } else {
    console.log(`No skills matched '${query}'.`);
    process.exit(0);
  }
}

switch (command) {
  case 'install':
    install(args[0]);
    break;
  case 'list':
    list();
    break;
  case 'search':
    search(args[0]);
    break;
  default:
    showHelp();
    break;
}
