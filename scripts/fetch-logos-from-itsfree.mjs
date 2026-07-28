import { writeFileSync, mkdirSync, existsSync, readdirSync, readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const __dirname = dirname(fileURLToPath(import.meta.url));
const toolsDir = resolve(__dirname, '../src/content/tools');
const logosDir = resolve(__dirname, '../public/logos');

const ITSFREE_BASE = 'https://itsfree.dev/favicons';
const EXTENSIONS = ['webp', 'svg', 'png', 'ico'];

const FORCE = process.argv.includes('--force');

function sanitizeFilename(name) {
  return name.replace(/[\\?%*:|"<>]/g, '-').trim();
}

function getDomain(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}

function listTools() {
  return readdirSync(toolsDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const id = f.slice(0, -3);
      const raw = readFileSync(resolve(toolsDir, f), 'utf-8');
      const { data } = matter(raw);
      return { id, name: data.name, officialSite: data.officialSite };
    });
}

async function tryDownload(domain, ext) {
  const url = `${ITSFREE_BASE}/${domain}.${ext}`;
  const res = await fetch(url, {
    headers: {
      Accept: 'image/*',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    },
  });
  if (!res.ok) return null;
  const contentType = res.headers.get('content-type') || '';
  if (!contentType.startsWith('image/')) return null;
  const buffer = Buffer.from(await res.arrayBuffer());
  if (buffer.length < 100) return null; // too small / placeholder
  return { ext, buffer, contentType };
}

async function fetchGoogleFavicon(domain) {
  const url = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`;
  const res = await fetch(url, {
    headers: {
      Accept: 'image/*',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    },
  });
  if (!res.ok) return null;
  const contentType = res.headers.get('content-type') || '';
  if (!contentType.startsWith('image/')) return null;
  const buffer = Buffer.from(await res.arrayBuffer());
  if (buffer.length < 100) return null;
  // Google returns PNG for most domains
  return { ext: 'png', buffer, contentType };
}

async function fetchLogo(tool) {
  const domain = getDomain(tool.officialSite);
  if (!domain) {
    return { status: 'skipped', reason: 'no officialSite' };
  }

  const safeName = sanitizeFilename(tool.name);

  // Check if any logo already exists for this tool name
  if (!FORCE) {
    for (const ext of EXTENSIONS) {
      const existingPath = resolve(logosDir, `${safeName}.${ext}`);
      if (existsSync(existingPath)) {
        return { status: 'skipped', reason: 'existing logo' };
      }
    }
  }

  // Try itsfree.dev favicons for the domain
  for (const ext of EXTENSIONS) {
    const result = await tryDownload(domain, ext);
    if (result) {
      const destPath = resolve(logosDir, `${safeName}.${result.ext}`);
      writeFileSync(destPath, result.buffer);
      return { status: 'ok', source: 'itsfree', ext: result.ext, domain };
    }
  }

  // Fallback: try without www.
  if (domain.startsWith('www.')) {
    const naked = domain.slice(4);
    for (const ext of EXTENSIONS) {
      const result = await tryDownload(naked, ext);
      if (result) {
        const destPath = resolve(logosDir, `${safeName}.${result.ext}`);
        writeFileSync(destPath, result.buffer);
        return { status: 'ok', source: 'itsfree', ext: result.ext, domain: naked };
      }
    }
  }

  // Final fallback: Google Favicon API
  const googleResult = await fetchGoogleFavicon(domain);
  if (googleResult) {
    const destPath = resolve(logosDir, `${safeName}.${googleResult.ext}`);
    writeFileSync(destPath, googleResult.buffer);
    return { status: 'ok', source: 'google', ext: googleResult.ext, domain };
  }

  return { status: 'missing', domain };
}

async function main() {
  if (!existsSync(logosDir)) mkdirSync(logosDir, { recursive: true });

  const tools = listTools();
  console.log(`Fetching logos from itsfree.dev for ${tools.length} tools...\n`);

  let ok = 0;
  let missing = 0;
  let skipped = 0;
  const missingList = [];

  for (let i = 0; i < tools.length; i++) {
    const tool = tools[i];
    process.stdout.write(`[${i + 1}/${tools.length}] ${tool.name} ... `);
    const result = await fetchLogo(tool);

    if (result.status === 'ok') {
      ok++;
      console.log(`OK (${result.ext})`);
    } else if (result.status === 'skipped') {
      skipped++;
      console.log(`SKIP (${result.reason})`);
    } else {
      missing++;
      missingList.push(`${tool.name} (${tool.officialSite})`);
      console.log(`MISSING (${result.domain})`);
    }
  }

  console.log(`\nDone: ${ok} downloaded, ${missing} missing, ${skipped} skipped`);
  if (missingList.length) {
    console.log('\nMissing logos:');
    missingList.forEach((m) => console.log(`  - ${m}`));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
