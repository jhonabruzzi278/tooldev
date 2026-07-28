#!/usr/bin/env node

/**
 * generate-icon-subset.mjs
 *
 * Scans src/**\/*.tsx for `tabler:icon-name` references used with
 * @iconify/react's <Icon>, and writes a minimal offline IconifyJSON
 * subset to src/lib/icons-offline.json. This lets @iconify/react
 * render icons via addCollection() without a runtime fetch to the
 * Iconify API, which the site's CSP does not allow.
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcDir = resolve(__dirname, '../src');
const fullSetPath = resolve(__dirname, '../node_modules/@iconify-json/tabler/icons.json');
const outputPath = resolve(__dirname, '../src/lib/icons-offline.json');

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      walk(full, files);
    } else if (entry.endsWith('.tsx')) {
      files.push(full);
    }
  }
  return files;
}

const tsxFiles = walk(srcDir);
const iconNames = new Set();
const pattern = /tabler:([a-z0-9-]+)/g;

for (const file of tsxFiles) {
  const content = readFileSync(file, 'utf-8');
  let match;
  while ((match = pattern.exec(content)) !== null) {
    iconNames.add(match[1]);
  }
}

const fullSet = JSON.parse(readFileSync(fullSetPath, 'utf-8'));
const subsetIcons = {};
const missing = [];

for (const name of iconNames) {
  if (fullSet.icons[name]) {
    subsetIcons[name] = fullSet.icons[name];
  } else {
    missing.push(name);
  }
}

if (missing.length > 0) {
  process.stderr.write(`Warning: icon(s) not found in @iconify-json/tabler: ${missing.join(', ')}\n`);
}

const subset = {
  prefix: fullSet.prefix,
  icons: subsetIcons,
  width: fullSet.width,
  height: fullSet.height,
};

writeFileSync(outputPath, JSON.stringify(subset), 'utf-8');
process.stdout.write(`Generated icons-offline.json with ${Object.keys(subsetIcons).length} icon(s)\n`);
