import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const assetsDir = path.join(rootDir, 'public', 'assets');

const operaterSrc = 'C:/Users/HP/.gemini/antigravity/brain/ea09746b-1063-4abf-8654-91017784d7b8/.user_uploaded/media_1787665602439.png';
const v1beSrc = 'C:/Users/HP/.gemini/antigravity/brain/ea09746b-1063-4abf-8654-91017784d7b8/.user_uploaded/media_1787665583025.png';

async function processLogos() {
  if (!fs.existsSync(operaterSrc) || !fs.existsSync(v1beSrc)) {
    console.error('Source logos not found!');
    process.exit(1);
  }

  // 1. Operater Logo (original is 59x60)
  await sharp(operaterSrc)
    .png({ quality: 100 })
    .toFile(path.join(assetsDir, 'operater-logo.png'));
  await sharp(operaterSrc)
    .webp({ quality: 100, lossless: true })
    .toFile(path.join(assetsDir, 'operater-logo.webp'));

  // 2. v1be Logo (original is 1024x1024, resize appropriately or keep high-res 128x128 & original for crisp retina)
  await sharp(v1beSrc)
    .resize(128, 128, { fit: 'contain' })
    .png({ quality: 100 })
    .toFile(path.join(assetsDir, 'v1be-logo.png'));
  await sharp(v1beSrc)
    .resize(128, 128, { fit: 'contain' })
    .webp({ quality: 100, lossless: true })
    .toFile(path.join(assetsDir, 'v1be-logo.webp'));

  console.log('✅ Company logos successfully saved to public/assets/');
}

processLogos().catch(err => {
  console.error('Error processing company logos:', err);
  process.exit(1);
});
