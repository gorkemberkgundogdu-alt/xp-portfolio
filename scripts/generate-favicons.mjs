import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

const svgPath = path.join(publicDir, 'favicon.svg');
const svgBuffer = fs.readFileSync(svgPath);

async function generateFavicons() {
  console.log('Generating favicon assets...');
  
  // 16x16 PNG
  await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toFile(path.join(publicDir, 'favicon-16x16.png'));

  // 32x32 PNG
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'));

  // 48x48 PNG
  await sharp(svgBuffer)
    .resize(48, 48)
    .png()
    .toFile(path.join(publicDir, 'favicon-48x48.png'));

  // 180x180 Apple Touch Icon
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  // Favicon.ico (we can copy the 32x32 PNG as favicon.ico or write ICO format)
  // Modern browsers support PNG inside ICO or reading 32x32 PNG directly
  const icon32Buffer = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icon32Buffer);

  console.log('Favicon assets generated successfully in public/');
}

generateFavicons().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
