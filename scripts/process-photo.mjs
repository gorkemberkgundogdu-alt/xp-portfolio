import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const assetsDir = path.join(rootDir, 'public', 'assets');

const sourcePhoto = 'C:/Users/HP/.gemini/antigravity/brain/ea09746b-1063-4abf-8654-91017784d7b8/.user_uploaded/media_1787581540551.jpg';

async function processPhoto() {
  if (!fs.existsSync(sourcePhoto)) {
    console.error('Source photo not found at:', sourcePhoto);
    process.exit(1);
  }

  // 1. Full portrait photo
  await sharp(sourcePhoto)
    .jpeg({ quality: 90 })
    .toFile(path.join(assetsDir, 'gorkem-berk-gundogdu-full.jpg'));

  // 2. Square cropped avatar (focused on face: top: 220, height: 576, width: 576)
  await sharp(sourcePhoto)
    .extract({ left: 0, top: 220, width: 576, height: 576 })
    .resize(400, 400)
    .jpeg({ quality: 92 })
    .toFile(path.join(assetsDir, 'gorkem-berk-gundogdu.jpg'));

  // 3. Webp version
  await sharp(sourcePhoto)
    .extract({ left: 0, top: 220, width: 576, height: 576 })
    .resize(400, 400)
    .webp({ quality: 92 })
    .toFile(path.join(assetsDir, 'gorkem-berk-gundogdu.webp'));

  console.log('✅ Profile photo processed and saved to public/assets/gorkem-berk-gundogdu.jpg');
}

processPhoto().catch(err => {
  console.error('Error processing photo:', err);
  process.exit(1);
});
