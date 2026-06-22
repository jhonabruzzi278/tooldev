import { writeFileSync, mkdirSync, existsSync, readFileSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const logosDir = resolve(__dirname, '../public/logos');
const iconsDir = resolve(__dirname, '../public/icons');

// Maps our content data.name -> SVGL API title
const NAME_MAP = {
  'Biome': 'Biomejs',
  'Claude': 'Claude AI',
  'PocketBase': 'Pocketbase',
  'shadcn-ui': 'shadcn/ui',
  'Vue.js': 'Vue',
  'Apache Kafka': 'Apache Kafka',
  'Anime.js': 'Anime',
};

// Tools not found in SVGL at all; use existing icons if available
const MISSING_TOOLS = [
  'Ansible', 'ChatGPT', 'Coolify', 'Excalidraw', 'GSAP', 'Jenkins', 'PyTorch', 'Rive',
  '21st.dev', 'Shader Gradient', 'React Bits', 'Motion Sites', 'ClaudeKit',
  'Footer.design', 'Brave Brand', 'Higgsfield AI', 'Fireworks AI', 'Luma Labs',
  'Wispr Flow', 'FreeConvert', 'Osmo', 'ImprovMX', 'Land-book', 'Jitter',
];

function sanitizeFilename(name) {
  return name.replace(/[/\\?%*:|"<>]/g, '-');
}

async function fetchSVGLData() {
  const res = await fetch('https://api.svgl.app');
  if (!res.ok) throw new Error(`SVGL API returned ${res.status}`);
  return res.json();
}

async function downloadSVG(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  const svg = await res.text();
  writeFileSync(destPath, svg, 'utf-8');
}

async function main() {
  if (!existsSync(logosDir)) mkdirSync(logosDir, { recursive: true });

  const items = await fetchSVGLData();
  if (!Array.isArray(items)) throw new Error('Expected array from SVGL API');

  const map = new Map();
  for (const item of items) {
    const key = item.title.toLowerCase().trim();
    if (!map.has(key)) map.set(key, item);
  }

  const TOOL_NAMES = [
    'Appwrite','Astro','Biome','Bun','Canva','Claude','Clerk','Cloudflare',
    'DeepSeek','Deno','Docker','Drizzle ORM','Figma','Framer','GitHub',
    'GitHub Copilot','GitLab','Hono','Hugging Face','Kubernetes','LangChain',
    'Linear','LottieFiles','Midjourney','MongoDB','Motion','Neon','Next.js',
    'Node.js','Notion','Obsidian','OpenAI','Playwright','PocketBase','Postman',
    'Prisma','Qwik','Railway','Raycast','Redis','Remix','Sentry','shadcn-ui',
    'Slack','Storybook','Supabase','Svelte','Tailwind CSS','TensorFlow',
    'Terraform','tRPC','Visual Studio Code','Vite','Vue.js','Zod',
    // Missing from SVGL — may use fallback below
    'Ansible','Apache Kafka','ChatGPT','Coolify','Docker','Elasticsearch',
    'Excalidraw','Grafana','GSAP','Jenkins','MongoDB','Nginx','PostgreSQL',
    'Prometheus','PyTorch','Redis','Rive','Terraform',
    // 9 new tools
    'Squoosh','Fontsource','Tabler Icons','SVGL','Flowbite','BG.Ibelick','Shots.so','Magic UI','HTMLrev',
    // 22 new tools
    '21st.dev','Anime.js','Shader Gradient','React Bits','Motion Sites','ClaudeKit',
    'Spline','Jitter','SVGator','Dribbble','Behance','Land-book','Footer.design','Brave Brand',
    'Higgsfield AI','Fireworks AI','Luma Labs','Snyk','Wispr Flow','FreeConvert','Osmo','ImprovMX',
  ];

  // Copy existing icons from public/icons/ as fallback
  if (existsSync(iconsDir)) {
    const iconFiles = readdirSync(iconsDir).filter(f => f.endsWith('.svg'));
    for (const file of iconFiles) {
      let name = file.replace('.svg', '').toLowerCase();
      // Map icon filenames to expected logo names
      const nameMap = {
        'squosh': 'Squoosh',
        'fontsource': 'Fontsource',
        'flowbite': 'Flowbite',
        'coolify': 'Coolify',
        'jenkins': 'Jenkins',
        'rive': 'Rive',
        'prometheus-logo.7aa022e5': 'Prometheus',
        'jenkins-logo-svg_001': 'Jenkins',
      };
      const logoName = nameMap[name] || name.charAt(0).toUpperCase() + name.slice(1);
      const destPath = resolve(logosDir, `${logoName}.svg`);
      if (!existsSync(destPath)) {
        const srcPath = resolve(iconsDir, file);
        writeFileSync(destPath, readFileSync(srcPath, 'utf-8'));
        console.log(`  COPY: ${logoName} from public/icons/`);
      }
    }
  }

  let downloaded = 0, missing = 0, skipped = 0;
  for (const name of TOOL_NAMES) {
    const svgName = sanitizeFilename(name);
    const destPath = resolve(logosDir, `${svgName}.svg`);

    // Skip if already saved (from fallback copies above)
    if (existsSync(destPath)) continue;

    const svglKey = (NAME_MAP[name] || name).toLowerCase().trim();
    const item = map.get(svglKey);

    if (!item) {
      missing++;
      continue;
    }

    const route = item.route;
    const url = typeof route === 'string' ? route : route?.light;

    if (!url) {
      skipped++;
      continue;
    }

    try {
      await downloadSVG(url, destPath);
      downloaded++;
      console.log(`  OK: ${name}.svg`);
    } catch (err) {
      missing++;
      console.error(`  FAILED: ${name} — ${err.message}`);
    }
  }

  console.log(`\nDone: ${downloaded} downloaded, ${missing} missing, ${skipped} skipped`);
}

main().catch((err) => {
  console.error('fetch-logos: ' + err.message + ' (logos will use existing local files)');
  process.exit(0); // Don't block the build
});
