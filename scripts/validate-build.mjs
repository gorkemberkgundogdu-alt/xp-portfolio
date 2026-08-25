import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

console.log('🔍 Starting Pre-Deployment Output Validation...\n');

const REQUIRED_FILES = [
  'index.html',
  'en/index.html',
  '404.html',
  'robots.txt',
  'llms.txt',
  'sitemap-index.xml',
  '.htaccess',
  'favicon.svg',
  'favicon.ico',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'apple-touch-icon.png',
  'assets/og-image.png',
  'assets/gorkem-berk-gundogdu.jpg',
  'assets/bliss-wallpaper.webp',
  'assets/vice-city-icon.webp',
  'assets/operater-logo.webp',
  'assets/v1be-logo.webp',
  'assets/Gorkem_Berk_Gundogdu_CV_2026.pdf',
  'projeler/operater/index.html',
  'en/projects/operater/index.html',
  'makaleler/ai-ile-ui-ux-tasarimi/index.html',
  'en/articles/ai-driven-ui-ux-design/index.html',
];

let hasErrors = false;

// 1. Check all required files exist
for (const relPath of REQUIRED_FILES) {
  const fullPath = path.join(distDir, relPath);
  if (!fs.existsSync(fullPath)) {
    console.error(`❌ Missing required build artifact: dist/${relPath}`);
    hasErrors = true;
  } else {
    const stats = fs.statSync(fullPath);
    if (stats.size === 0) {
      console.error(`❌ Empty required build artifact: dist/${relPath} (0 bytes)`);
      hasErrors = true;
    } else {
      console.log(`✅ Verified artifact: dist/${relPath} (${stats.size} bytes)`);
    }
  }
}

// 2. Validate OG Image dimensions (1200 x 630)
const ogImagePath = path.join(distDir, 'assets', 'og-image.png');
if (fs.existsSync(ogImagePath)) {
  try {
    const metadata = await sharp(ogImagePath).metadata();
    if (metadata.width === 1200 && metadata.height === 630) {
      console.log(`✅ Verified OG Image dimensions: ${metadata.width}x${metadata.height} (${metadata.format})`);
    } else {
      console.error(`❌ Invalid OG Image dimensions: expected 1200x630, got ${metadata.width}x${metadata.height}`);
      hasErrors = true;
    }
  } catch (err) {
    console.error('❌ Failed to read OG Image metadata with sharp:', err);
    hasErrors = true;
  }
}

// 3. Validate HTML metadata in dist/index.html
const indexHtmlPath = path.join(distDir, 'index.html');
if (fs.existsSync(indexHtmlPath)) {
  const htmlContent = fs.readFileSync(indexHtmlPath, 'utf8');

  const checks = [
    { label: 'Canonical URL tag', pattern: /<link[^>]+rel=["']canonical["'][^>]+href=["']https:\/\/gorkemberkgundogdu\.com\/["']/ },
    { label: 'Hreflang TR tag', pattern: /<link[^>]+rel=["']alternate["'][^>]+hreflang=["']tr["']/ },
    { label: 'Hreflang EN tag', pattern: /<link[^>]+rel=["']alternate["'][^>]+hreflang=["']en["']/ },
    { label: 'Open Graph Image tag', pattern: /<meta[^>]+property=["']og:image["'][^>]+content=["']https:\/\/gorkemberkgundogdu\.com\/assets\/og-image\.png["']/ },
    { label: 'Twitter Image tag', pattern: /<meta[^>]+name=["']twitter:image["'][^>]+content=["']https:\/\/gorkemberkgundogdu\.com\/assets\/og-image\.png["']/ },
    { label: 'Twitter Card summary_large_image', pattern: /<meta[^>]+name=["']twitter:card["'][^>]+content=["']summary_large_image["']/ },
  ];

  for (const check of checks) {
    if (check.pattern.test(htmlContent)) {
      console.log(`✅ Verified HTML metadata: ${check.label}`);
    } else {
      console.error(`❌ Missing HTML metadata: ${check.label} in dist/index.html`);
      hasErrors = true;
    }
  }
}

if (hasErrors) {
  console.error('\n🚨 Pre-Deployment Output Validation FAILED!');
  process.exit(1);
} else {
  console.log('\n🎉 Pre-Deployment Output Validation PASSED! Output is ready for FTP deployment.');
}
