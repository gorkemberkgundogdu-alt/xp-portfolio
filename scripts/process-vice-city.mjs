import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const assetsDir = path.join(rootDir, 'public', 'assets');

const sourceLogo = 'C:/Users/HP/.gemini/antigravity/brain/ea09746b-1063-4abf-8654-91017784d7b8/.user_uploaded/media_1787583589292.png';

async function processViceCity() {
  if (!fs.existsSync(sourceLogo)) {
    console.error('Source logo not found at:', sourceLogo);
    process.exit(1);
  }

  // 1. High-quality 256x256 PNG
  await sharp(sourceLogo)
    .png({ quality: 95, compressionLevel: 8 })
    .toFile(path.join(assetsDir, 'vice-city-icon.png'));

  // 2. WebP version
  await sharp(sourceLogo)
    .webp({ quality: 95 })
    .toFile(path.join(assetsDir, 'vice-city-icon.webp'));

  console.log('✅ Vice City logo processed and saved to public/assets/vice-city-icon.png');
}

processViceCity().catch(err => {
  console.error('Error processing Vice City logo:', err);
  process.exit(1);
});
