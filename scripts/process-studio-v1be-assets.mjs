import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const targetDir = path.join(rootDir, 'public', 'assets', 'case-study', 'studio-v1be');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const uploadedBase = 'C:/Users/HP/.gemini/antigravity/brain/ea09746b-1063-4abf-8654-91017784d7b8/.user_uploaded';

const imageMap = [
  // Desktop
  { src: `${uploadedBase}/media_1788191348411.png`, name: 'studio-hero-desktop.webp' },
  { src: `${uploadedBase}/media_1788191348406.png`, name: 'studio-home-scene-02-what-desktop.webp' },
  { src: `${uploadedBase}/media_1788191348404.png`, name: 'studio-home-scene-03-how-desktop.webp' },
  { src: `${uploadedBase}/media_1788191348442.png`, name: 'studio-packages-configurator-desktop.webp' },
  { src: `${uploadedBase}/media_1788191355654.png`, name: 'studio-process-engagement-model-desktop.webp' },
  { src: `${uploadedBase}/media_1788191355657.png`, name: 'studio-process-stage-build-desktop.webp' },
  { src: `${uploadedBase}/media_1788191355659.png`, name: 'studio-work-case-01-v1be-desktop.webp' },
  { src: `${uploadedBase}/media_1788191355662.png`, name: 'studio-about-brand-architecture-desktop.webp' },
  { src: `${uploadedBase}/media_1788191355665.png`, name: 'studio-work-case-02-labs-desktop.webp' },

  // Mobile
  { src: `${uploadedBase}/media_1788191376990.jpg`, name: 'studio-hero-mobile.webp' },
  { src: `${uploadedBase}/media_1788191376989.jpg`, name: 'studio-packages-mobile.webp' },
  { src: `${uploadedBase}/media_1788191376914.jpg`, name: 'studio-process-mobile.webp' },
  { src: `${uploadedBase}/media_1788191376910.jpg`, name: 'studio-work-mobile.webp' },
];

async function run() {
  console.log('Processing Studio v1be screenshots...');
  for (const img of imageMap) {
    if (!fs.existsSync(img.src)) {
      console.error(`Missing file: ${img.src}`);
      continue;
    }
    const dest = path.join(targetDir, img.name);
    // Convert to webp with high visual quality (quality: 90)
    await sharp(img.src)
      .webp({ quality: 90, effort: 4 })
      .toFile(dest);
    
    const stats = fs.statSync(dest);
    console.log(`Saved: ${img.name} (${Math.round(stats.size / 1024)} KB)`);
  }
  console.log('Done!');
}

run().catch(console.error);
