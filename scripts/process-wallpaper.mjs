import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const assetsDir = path.join(rootDir, 'public', 'assets');

const sourceWallpaper = 'C:/Users/HP/.gemini/antigravity/brain/ea09746b-1063-4abf-8654-91017784d7b8/.user_uploaded/media_1787582849227.jpg';

async function processWallpaper() {
  if (!fs.existsSync(sourceWallpaper)) {
    console.error('Source wallpaper not found at:', sourceWallpaper);
    process.exit(1);
  }

  // 1. WebP version (High quality, ultra-fast load ~100KB)
  await sharp(sourceWallpaper)
    .webp({ quality: 88, effort: 6 })
    .toFile(path.join(assetsDir, 'bliss-wallpaper.webp'));

  // 2. JPEG fallback
  await sharp(sourceWallpaper)
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(path.join(assetsDir, 'bliss-wallpaper.jpg'));

  const webpStats = fs.statSync(path.join(assetsDir, 'bliss-wallpaper.webp'));
  const jpgStats = fs.statSync(path.join(assetsDir, 'bliss-wallpaper.jpg'));

  console.log(`✅ Bliss Wallpaper generated:`);
  console.log(`   - WebP: ${(webpStats.size / 1024).toFixed(1)} KB`);
  console.log(`   - JPEG: ${(jpgStats.size / 1024).toFixed(1)} KB`);
}

processWallpaper().catch(err => {
  console.error('Error processing wallpaper:', err);
  process.exit(1);
});
