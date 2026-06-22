#!/usr/bin/env node

/**
 * generate-skills.mjs
 *
 * Reads all tool markdown files from src/content/tools/,
 * filters verified tools, and generates:
 * - Individual skill .md files in packages/tooldev-skills/skills/
 * - A registry.json with sorted entries
 */

import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync, unlinkSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const toolsDir = resolve(__dirname, '../src/content/tools');
const skillsDir = resolve(__dirname, '../packages/tooldev-skills/skills');

// --- YAML Frontmatter Parser ---

/**
 * Extracts frontmatter string from markdown content (between --- delimiters)
 */
function extractFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  return match[1];
}

/**
 * Simple YAML parser for tool frontmatter.
 * Handles: scalars, inline arrays [], arrays of objects with - key: val,
 * multiline strings with |
 */
function parseYaml(yamlStr) {
  const result = {};
  const lines = yamlStr.split(/\r?\n/);
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Skip empty lines and comments
    if (line.trim() === '' || line.trim().startsWith('#')) {
      i++;
      continue;
    }

    // Top-level key: value
    const keyMatch = line.match(/^(\w[\w\-]*)\s*:\s*(.*)/);
    if (!keyMatch) {
      i++;
      continue;
    }

    const key = keyMatch[1];
    let value = keyMatch[2].trim();

    // Multiline string with |
    if (value === '|') {
      i++;
      let multiline = '';
      while (i < lines.length) {
        const nextLine = lines[i];
        if (nextLine.match(/^\S/) && nextLine.match(/^\w[\w\-]*\s*:/)) break;
        if (nextLine.trim() === '' && i + 1 < lines.length && lines[i + 1].match(/^\w[\w\-]*\s*:/)) break;
        multiline += (multiline ? '\n' : '') + nextLine.replace(/^  /, '');
        i++;
      }
      result[key] = multiline.trimEnd();
      continue;
    }

    // Inline array [item1, item2, ...]
    if (value.startsWith('[') && value.endsWith(']')) {
      const inner = value.slice(1, -1).trim();
      if (inner === '') {
        result[key] = [];
      } else {
        result[key] = inner.split(',').map(s => s.trim().replace(/^["']|["']$/g, ''));
      }
      i++;
      continue;
    }

    // Check if next lines are array items (starting with -)
    if (value === '' || value === undefined) {
      // Could be array of objects or array of strings
      const items = [];
      i++;
      while (i < lines.length) {
        const nextLine = lines[i];
        // Stop if we hit a top-level key
        if (nextLine.match(/^\w[\w\-]*\s*:/) && !nextLine.startsWith(' ') && !nextLine.startsWith('\t')) break;
        if (nextLine.trim() === '') {
          i++;
          continue;
        }
        // Array item: "  - something"
        const itemMatch = nextLine.match(/^\s+-\s+(.*)/);
        if (itemMatch) {
          const itemValue = itemMatch[1].trim();
          // Check if it's "key: value" (object item)
          const objKeyMatch = itemValue.match(/^(\w[\w\-]*)\s*:\s*(.*)/);
          if (objKeyMatch) {
            // Object item - collect all key: value pairs for this item
            const obj = {};
            obj[objKeyMatch[1]] = parseScalar(objKeyMatch[2].trim());
            i++;
            while (i < lines.length) {
              const propLine = lines[i];
              // Next array item or top-level key = stop
              if (propLine.match(/^\s+-\s+\w/) || (propLine.match(/^\w[\w\-]*\s*:/) && !propLine.startsWith(' '))) break;
              if (propLine.trim() === '') { i++; continue; }
              const propMatch = propLine.match(/^\s+(\w[\w\-]*)\s*:\s*(.*)/);
              if (propMatch) {
                let propValue = propMatch[2].trim();
                // Handle multiline value with |
                if (propValue === '|') {
                  i++;
                  let ml = '';
                  // Detect the indentation level of the first content line
                  let baseIndent = -1;
                  while (i < lines.length) {
                    const mlLine = lines[i];
                    // Stop at top-level keys (no leading spaces)
                    if (mlLine.match(/^\w[\w\-]*\s*:/) && !mlLine.startsWith(' ')) break;
                    // Stop at a new array item at the same or higher level (2-space indent)
                    if (mlLine.match(/^  -\s+\w[\w\-]*\s*:/) && baseIndent > 4) break;
                    if (mlLine.trim() === '') {
                      // Empty line — only stop if the *next non-empty* line is a top-level key or array item at same level
                      let j = i + 1;
                      while (j < lines.length && lines[j].trim() === '') j++;
                      if (j < lines.length) {
                        const peek = lines[j];
                        if (peek.match(/^\w[\w\-]*\s*:/) && !peek.startsWith(' ')) break;
                        if (peek.match(/^  -\s+\w[\w\-]*\s*:/) && baseIndent > 4) break;
                      }
                      ml += '\n';
                      i++;
                      continue;
                    }
                    // Detect base indentation from first non-empty line
                    if (baseIndent === -1) {
                      const indentMatch = mlLine.match(/^(\s+)/);
                      baseIndent = indentMatch ? indentMatch[1].length : 0;
                    }
                    // Strip base indentation
                    const stripped = mlLine.length >= baseIndent ? mlLine.slice(baseIndent) : mlLine.trimStart();
                    ml += (ml && !ml.endsWith('\n') ? '\n' : '') + stripped;
                    i++;
                  }
                  obj[propMatch[1]] = ml.trimEnd();
                } else {
                  // Handle quoted strings
                  obj[propMatch[1]] = parseScalar(propValue);
                  i++;
                }
              } else {
                i++;
              }
            }
            items.push(obj);
          } else {
            // Simple string array item
            items.push(parseScalar(itemValue));
            i++;
          }
        } else {
          i++;
        }
      }
      result[key] = items;
      continue;
    }

    // Simple scalar value
    result[key] = parseScalar(value);
    i++;
  }

  return result;
}

/**
 * Parse a scalar YAML value
 */
function parseScalar(value) {
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (value === 'null' || value === '~') return null;
  // Remove surrounding quotes
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }
  // Number
  if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value);
  return value;
}

// --- Slug derivation ---

function deriveSlug(name) {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

// --- Skill file generation ---

function generateSkillContent(data) {
  const slug = deriveSlug(data.name);
  const tags = data.tags || [];
  const triggerPhrases = tags.slice(0, 4).join(', ');

  let content = '';

  // Frontmatter
  content += '---\n';
  content += `name: ${slug}\n`;
  content += `description: ${data.description || ''} Úsala cuando el usuario mencione o pregunte sobre ${triggerPhrases}.\n`;
  content += '---\n\n';

  // Title
  content += `# ${data.name}\n\n`;

  // Instructions
  content += '## Instructions\n';
  content += '- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.\n';
  content += '- Toda la información está validada contra la documentación oficial y fuentes primarias.\n';
  if (data.openSource) {
    content += '- Es una herramienta open source — verifica la licencia antes de uso comercial.\n';
  }
  content += '\n';

  // Key Information
  content += '## Key Information\n';
  content += `- **Category:** ${data.category || ''}\n`;
  content += `- **Pricing:** ${data.pricing || ''}\n`;
  if (data.license) {
    content += `- **License:** ${data.license}\n`;
  }
  content += `- **Technical Level:** ${data.technicalLevel || ''}\n`;
  const compatibility = Array.isArray(data.compatibility) ? data.compatibility.join(', ') : (data.compatibility || '');
  content += `- **Compatibility:** ${compatibility}\n`;
  content += `- **Official Site:** ${data.officialSite || ''}\n`;
  if (data.github) {
    content += `- **GitHub:** ${data.github}\n`;
  }
  if (data.alternatives && Array.isArray(data.alternatives) && data.alternatives.length > 0) {
    content += `- **Alternatives:** ${data.alternatives.join(', ')}\n`;
  }
  content += '\n';

  // Features
  content += '## Features\n';
  if (Array.isArray(data.features)) {
    for (const feature of data.features) {
      content += `- ${feature}\n`;
    }
  }
  content += '\n';

  // Steps (from howToUse)
  content += '## Steps\n';
  if (Array.isArray(data.howToUse)) {
    for (const step of data.howToUse) {
      const stepNum = step.step || '';
      const title = step.title || '';
      const desc = step.description || '';
      content += `### ${stepNum}. ${title}\n`;
      content += `${desc}\n\n`;
    }
  }

  // When to Use
  content += '## When to Use\n';
  if (Array.isArray(data.whenToUse)) {
    for (const item of data.whenToUse) {
      content += `- **${item.title || ''}:** ${item.description || ''}\n`;
    }
  }
  content += '\n';

  // Examples
  content += '## Examples\n';
  if (Array.isArray(data.examples)) {
    for (const example of data.examples) {
      content += `### ${example.title || ''}\n`;
      content += '```\n';
      content += `${example.code || ''}\n`;
      content += '```\n';
      if (example.output) {
        content += `**Output:** ${example.output}\n`;
      }
      content += '\n';
    }
  }

  // Tips
  content += '## Tips\n';
  if (Array.isArray(data.tips)) {
    for (const tip of data.tips) {
      const text = typeof tip === 'string' ? tip : (tip.text || '');
      content += `- ${text}\n`;
    }
  }
  content += '\n';

  // FAQ
  content += '## FAQ\n';
  if (Array.isArray(data.faq)) {
    for (const item of data.faq) {
      content += `- **${item.question || ''}** ${item.answer || ''}\n`;
    }
  }
  content += '\n';

  // Troubleshooting
  content += '## Troubleshooting\n';
  content += `- **Official Site Unreachable:** Verify the URL at ${data.officialSite || ''}\n`;
  if (data.github) {
    content += `- **Source Code Issues:** Check the repository at ${data.github} for known issues.\n`;
  }
  content += '- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.\n';

  return content;
}

// --- Main ---

function main() {
  // Ensure output directory exists
  if (!existsSync(skillsDir)) {
    mkdirSync(skillsDir, { recursive: true });
  }

  // Clean existing generated skill files (*.md) and registry.json
  try {
    const existing = readdirSync(skillsDir);
    for (const f of existing) {
      if (f.endsWith('.md') || f === 'registry.json') {
        unlinkSync(join(skillsDir, f));
      }
    }
  } catch {
    // Ignore errors during cleanup
  }

  // Read all .md files from tools directory
  let files;
  try {
    files = readdirSync(toolsDir).filter(f => f.endsWith('.md'));
  } catch (err) {
    process.stderr.write(`Error reading tools directory: ${err.message}\n`);
    process.exit(1);
  }

  const registry = [];

  for (const file of files) {
    const filePath = join(toolsDir, file);
    let content;
    try {
      content = readFileSync(filePath, 'utf-8');
    } catch (err) {
      process.stderr.write(`Warning: Could not read ${file}: ${err.message}\n`);
      continue;
    }

    // Extract and parse frontmatter
    const frontmatterStr = extractFrontmatter(content);
    if (!frontmatterStr) {
      process.stderr.write(`Warning: No valid frontmatter in ${file}, skipping.\n`);
      continue;
    }

    let data;
    try {
      data = parseYaml(frontmatterStr);
    } catch (err) {
      process.stderr.write(`Warning: Invalid YAML in ${file}: ${err.message}, skipping.\n`);
      continue;
    }

    // Filter only verified tools
    if (data.verified !== true) {
      continue;
    }

    const slug = deriveSlug(data.name);

    // Generate skill file
    const skillContent = generateSkillContent(data);
    const skillPath = join(skillsDir, `${slug}.md`);
    try {
      writeFileSync(skillPath, skillContent, 'utf-8');
    } catch (err) {
      process.stderr.write(`Error writing skill file ${slug}.md: ${err.message}\n`);
      process.exit(1);
    }

    // Add to registry
    registry.push({
      slug,
      name: data.name,
      category: data.category || '',
      description: data.description || '',
    });
  }

  // Sort registry alphabetically by slug
  registry.sort((a, b) => a.slug.localeCompare(b.slug));

  // Write registry.json
  const registryPath = join(skillsDir, 'registry.json');
  try {
    writeFileSync(registryPath, JSON.stringify(registry, null, 2), 'utf-8');
  } catch (err) {
    process.stderr.write(`Error writing registry.json: ${err.message}\n`);
    process.exit(1);
  }

  const skillCount = registry.length;
  if (skillCount === 0) {
    process.stdout.write('No verified tools found. Generated empty registry.\n');
  } else {
    process.stdout.write(`Generated ${skillCount} skill file(s) and registry.json\n`);
  }

  process.exit(0);
}

main();
