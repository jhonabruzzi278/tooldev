import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const toolsDir = path.join(root, 'src', 'content', 'tools');
const screenshotsDir = path.join(root, 'public', 'screenshots');

const VIEWPORT = { width: 1280, height: 900 };
const TIMEOUT = 60_000;
const QUALITY = 82;

const ONLY = process.argv.includes('--only')
  ? process.argv[process.argv.indexOf('--only') + 1].split(',').filter(Boolean)
  : null;

function listTools() {
  return fs
    .readdirSync(toolsDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const id = path.basename(f, '.md');
      const filePath = path.join(toolsDir, f);
      const raw = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(raw);
      const hasScreenshots =
        Array.isArray(data.screenshots) && data.screenshots.length > 0;
      const existingPaths = (data.screenshots || []).map((p) =>
        path.join(root, 'public', p.replace(/^\//, ''))
      );
      const allExist = existingPaths.every((p) => fs.existsSync(p));
      return { id, filePath, data, hasScreenshots, allExist };
    });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function capture(browser, tool, attempt = 1, waitUntil = 'load') {
  const outPath = path.join(screenshotsDir, `${tool.id}.webp`);
  const url = tool.data.officialSite;
  if (!url || !url.startsWith('http')) {
    return { ok: false, error: 'missing officialSite', skipped: true };
  }

  const context = await browser.newContext({
    viewport: VIEWPORT,
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 ToolDevBot/1.0',
  });
  const page = await context.newPage();

  try {
    await page.goto(url, {
      waitUntil,
      timeout: TIMEOUT,
    });

    // Scroll al inicio por si acaso
    await page.evaluate(() => window.scrollTo(0, 0));
    await sleep(600);

    // Aceptar banners de cookies comunes (best-effort)
    const cookieSelectors = [
      'button[id*="accept"]',
      'button[class*="accept"]',
      '[data-testid*="cookie"] button',
      'button:has-text("Accept")',
      'button:has-text("Aceptar")',
      'button:has-text("Accept all")',
      'button:has-text("Aceptar todas")',
    ];
    for (const sel of cookieSelectors) {
      try {
        const btn = page.locator(sel).first();
        if (await btn.isVisible({ timeout: 800 }).catch(() => false)) {
          await btn.click({ timeout: 1000 });
          await sleep(300);
        }
      } catch {
        // ignore
      }
    }

    await page.screenshot({
      path: outPath,
      type: 'webp',
      quality: QUALITY,
      fullPage: false,
    });

    await context.close();
    return { ok: true, outPath, bytes: fs.statSync(outPath).size };
  } catch (err) {
    await context.close();
    if (attempt === 1 && waitUntil === 'load') {
      console.log(`  ⚠️ ${tool.id} reintentando con domcontentloaded: ${err.message}`);
      return capture(browser, tool, attempt + 1, 'domcontentloaded');
    }
    if (attempt === 2) {
      console.log(`  ⚠️ ${tool.id} reintentando (${attempt}/2): ${err.message}`);
      await sleep(1500);
      return capture(browser, tool, attempt + 1, 'load');
    }
    return { ok: false, error: err.message };
  }
}

async function main() {
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const tools = listTools();
  let missing = tools.filter((t) => !t.hasScreenshots || !t.allExist);
  if (ONLY && ONLY.length) {
    missing = missing.filter((t) => ONLY.includes(t.id));
    console.log(`Modo --only: ${ONLY.length} IDs solicitados, ${missing.length} faltan`);
  }
  console.log(`Total tools: ${tools.length}`);
  console.log(`Tools sin screenshot: ${missing.length}`);

  if (missing.length === 0) {
    console.log('Nada que capturar.');
    return;
  }

  const browser = await chromium.launch({ headless: true });
  const results = { ok: [], fail: [], skipped: [] };

  for (let i = 0; i < missing.length; i++) {
    const tool = missing[i];
    console.log(`[${i + 1}/${missing.length}] ${tool.id} -> ${tool.data.officialSite}`);
    const res = await capture(browser, tool);
    if (res.ok) {
      // Actualizar frontmatter
      const raw = fs.readFileSync(tool.filePath, 'utf8');
      const parsed = matter(raw);
      parsed.data.screenshots = [`/screenshots/${tool.id}.webp`];
      const updated = matter.stringify(parsed.content, parsed.data);
      fs.writeFileSync(tool.filePath, updated, 'utf8');
      console.log(`  ✅ ${tool.id} (${Math.round(res.bytes / 1024)} KB)`);
      results.ok.push(tool.id);
    } else if (res.skipped) {
      console.log(`  ⚠️ ${tool.id} omitido: ${res.error}`);
      results.skipped.push({ id: tool.id, error: res.error });
    } else {
      console.log(`  ❌ ${tool.id}: ${res.error}`);
      results.fail.push({ id: tool.id, error: res.error });
    }
  }

  await browser.close();

  const reportPath = path.join(root, 'screenshot-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2), 'utf8');

  console.log('\n--- RESUMEN ---');
  console.log(`✅ Capturados: ${results.ok.length}`);
  console.log(`❌ Fallidos: ${results.fail.length}`);
  console.log(`⚠️ Omitidos: ${results.skipped.length}`);
  if (results.fail.length) {
    console.log('Fallos:');
    results.fail.forEach((f) => console.log(`  - ${f.id}: ${f.error}`));
  }
  console.log(`Reporte guardado en ${reportPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
