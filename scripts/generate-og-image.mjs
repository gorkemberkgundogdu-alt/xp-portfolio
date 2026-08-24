import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const assetsDir = path.join(rootDir, 'public', 'assets');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// 1200 x 630 exact Open Graph raster generation
const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <!-- Sky Gradient -->
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1856CB" />
      <stop offset="35%" stop-color="#3478E3" />
      <stop offset="70%" stop-color="#6DA3F8" />
      <stop offset="100%" stop-color="#93BEFC" />
    </linearGradient>

    <!-- Sun Radial Glow -->
    <radialGradient id="sunGlow" cx="30%" cy="25%" r="60%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.45" />
      <stop offset="50%" stop-color="#FFFFFF" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
    </radialGradient>

    <!-- Back Hill Gradient -->
    <linearGradient id="backHill" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#74BA24" />
      <stop offset="60%" stop-color="#4E9512" />
      <stop offset="100%" stop-color="#387309" />
    </linearGradient>

    <!-- Front Hill Gradient -->
    <linearGradient id="frontHill" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8CE02E" />
      <stop offset="45%" stop-color="#60B018" />
      <stop offset="100%" stop-color="#3F850C" />
    </linearGradient>

    <!-- Luna Blue Titlebar -->
    <linearGradient id="lunaBlue" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0058EE" />
      <stop offset="10%" stop-color="#2F82FF" />
      <stop offset="85%" stop-color="#0055EA" />
      <stop offset="100%" stop-color="#0045B8" />
    </linearGradient>

    <!-- Soft Drop Shadows -->
    <filter id="windowShadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#001848" flood-opacity="0.45" />
    </filter>

    <filter id="textShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="1" dy="2" stdDeviation="2" flood-color="#001F60" flood-opacity="0.6" />
    </filter>
  </defs>

  <!-- Base Sky -->
  <rect width="1200" height="630" fill="url(#skyGrad)" />
  <rect width="1200" height="630" fill="url(#sunGlow)" />

  <!-- Bliss Back Hill -->
  <path d="M-100 480 Q 250 320, 800 440 T 1300 390 L 1300 630 L -100 630 Z" fill="url(#backHill)" opacity="0.95" />

  <!-- Bliss Front Hill (Lush Rolling Curve) -->
  <path d="M-50 630 L -50 510 Q 300 370, 750 490 Q 1000 550, 1250 460 L 1250 630 Z" fill="url(#frontHill)" />

  <!-- ================= LEFT COLUMN: HERO TEXT & BRANDING ================= -->
  <!-- Main Heading: GÖRKEM BERK GÜNDOĞDU -->
  <g filter="url(#textShadow)">
    <text x="70" y="140" font-family="system-ui, -apple-system, 'Segoe UI', Arial, sans-serif" font-weight="900" font-size="52" fill="#FFFFFF" letter-spacing="1">GÖRKEM</text>
    <text x="70" y="198" font-family="system-ui, -apple-system, 'Segoe UI', Arial, sans-serif" font-weight="900" font-size="52" fill="#FFFFFF" letter-spacing="1">BERK</text>
    <text x="70" y="256" font-family="system-ui, -apple-system, 'Segoe UI', Arial, sans-serif" font-weight="900" font-size="52" fill="#FFFFFF" letter-spacing="1">GÜNDOĞDU</text>
  </g>

  <!-- Tagline Pill / Subtitle -->
  <g filter="url(#textShadow)">
    <text x="70" y="305" font-family="system-ui, -apple-system, 'Segoe UI', Arial, sans-serif" font-weight="800" font-size="18" fill="#8CE02E" letter-spacing="1.5">
      UI/UX DESIGNER &amp; FRONT-END BUILDER
    </text>
  </g>

  <!-- Supporting statement -->
  <g filter="url(#textShadow)">
    <text x="70" y="350" font-family="system-ui, -apple-system, 'Segoe UI', Arial, sans-serif" font-weight="500" font-size="20" fill="#F0F6FF" opacity="0.95">
      Building digital experiences
    </text>
    <text x="70" y="380" font-family="system-ui, -apple-system, 'Segoe UI', Arial, sans-serif" font-weight="500" font-size="20" fill="#F0F6FF" opacity="0.95">
      with design, code and AI.
    </text>
  </g>

  <!-- Bottom Links / Safe Area Pills -->
  <g transform="translate(70, 535)">
    <!-- Pill 1: Domain -->
    <rect x="0" y="0" width="220" height="38" rx="19" fill="#0A2D73" fill-opacity="0.7" stroke="#3D7AF5" stroke-width="1.5" />
    <circle cx="20" cy="19" r="7" fill="#3D7AF5" />
    <text x="36" y="24" font-family="system-ui, -apple-system, 'Segoe UI', Arial, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">gorkemberkgundogdu.com</text>

    <!-- Pill 2: LinkedIn -->
    <rect x="235" y="0" width="240" height="38" rx="19" fill="#0A2D73" fill-opacity="0.7" stroke="#3D7AF5" stroke-width="1.5" />
    <rect x="250" y="11" width="16" height="16" rx="3" fill="#0A66C2" />
    <text x="254" y="23" font-family="sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF">in</text>
    <text x="274" y="24" font-family="system-ui, -apple-system, 'Segoe UI', Arial, sans-serif" font-size="13" font-weight="600" fill="#FFFFFF">/in/gorkemberkgundogdu</text>

    <!-- Pill 3: GitHub -->
    <rect x="490" y="0" width="220" height="38" rx="19" fill="#0A2D73" fill-opacity="0.7" stroke="#3D7AF5" stroke-width="1.5" />
    <circle cx="508" cy="19" r="8" fill="#181717" />
    <text x="504" y="23" font-family="sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF">🐙</text>
    <text x="525" y="24" font-family="system-ui, -apple-system, 'Segoe UI', Arial, sans-serif" font-size="13" font-weight="600" fill="#FFFFFF">/gorkemberkgundogdu-alt</text>
  </g>

  <!-- ================= RIGHT COLUMN: XP PROJECTS EXPLORER ================= -->
  <g transform="translate(560, 50)" filter="url(#windowShadow)">
    <!-- Window Outer Shell (570 x 440) -->
    <rect x="0" y="0" width="570" height="440" rx="8" fill="#ECE9D8" stroke="#0055EA" stroke-width="2" />

    <!-- Titlebar -->
    <path d="M 1 7 C 1 3 4 1 8 1 L 562 1 C 566 1 569 3 569 7 L 569 30 L 1 30 Z" fill="url(#lunaBlue)" />
    
    <!-- Titlebar Icon & Text -->
    <rect x="10" y="8" width="15" height="14" rx="2" fill="#E8B004" />
    <text x="32" y="21" font-family="'Segoe UI', Tahoma, Arial, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">Projects</text>

    <!-- Titlebar Window Controls (_ □ ✕) -->
    <g transform="translate(485, 6)">
      <!-- Minimize -->
      <rect x="0" y="0" width="22" height="18" rx="3" fill="#2A75F3" stroke="#FFFFFF" stroke-opacity="0.6" />
      <rect x="6" y="12" width="10" height="2" fill="#FFFFFF" />
      <!-- Maximize -->
      <rect x="27" y="0" width="22" height="18" rx="3" fill="#2A75F3" stroke="#FFFFFF" stroke-opacity="0.6" />
      <rect x="32" y="4" width="12" height="10" fill="none" stroke="#FFFFFF" stroke-width="2" />
      <!-- Close -->
      <rect x="54" y="0" width="24" height="18" rx="3" fill="#D9381E" stroke="#FFFFFF" stroke-opacity="0.6" />
      <text x="61" y="14" font-family="sans-serif" font-size="12" font-weight="bold" fill="#FFFFFF">✕</text>
    </g>

    <!-- Menu Bar (File Edit View Favorites Tools Help) -->
    <rect x="1" y="30" width="568" height="22" fill="#ECE9D8" border-bottom="1px solid #D4D0C8" />
    <text x="12" y="45" font-family="Tahoma, Arial, sans-serif" font-size="11" fill="#222222">
      <tspan font-weight="bold">F</tspan>ile&#160;&#160;&#160;&#160;
      <tspan font-weight="bold">E</tspan>dit&#160;&#160;&#160;&#160;
      <tspan font-weight="bold">V</tspan>iew&#160;&#160;&#160;&#160;
      <tspan font-weight="bold">F</tspan>avorites&#160;&#160;&#160;&#160;
      <tspan font-weight="bold">T</tspan>ools&#160;&#160;&#160;&#160;
      <tspan font-weight="bold">H</tspan>elp
    </text>

    <!-- Toolbar (Back, Search, Folders) -->
    <rect x="1" y="52" width="568" height="34" fill="#EBE7D8" stroke="#D4D0C8" stroke-width="1" />
    <g transform="translate(10, 58)">
      <!-- Back button -->
      <rect x="0" y="0" width="60" height="22" rx="3" fill="#F4F4F0" stroke="#7F9DB9" />
      <circle cx="12" cy="11" r="7" fill="#4CAF50" />
      <path d="M 14 7 L 9 11 L 14 15 Z" fill="#FFFFFF" />
      <text x="24" y="15" font-family="Tahoma, sans-serif" font-size="11" fill="#333333">Back</text>

      <!-- Search button -->
      <rect x="70" y="0" width="70" height="22" rx="3" fill="#F4F4F0" stroke="#7F9DB9" />
      <text x="76" y="15" font-family="Tahoma, sans-serif" font-size="11" fill="#333333">🔍 Search</text>

      <!-- Folders button -->
      <rect x="150" y="0" width="70" height="22" rx="3" fill="#F4F4F0" stroke="#7F9DB9" />
      <text x="156" y="15" font-family="Tahoma, sans-serif" font-size="11" fill="#333333">📁 Folders</text>
    </g>

    <!-- Window Body: 2-Column Split -->
    <!-- Left Pane: Folders Tree (width 210) -->
    <rect x="6" y="90" width="200" height="320" fill="#F7F7F4" stroke="#7F9DB9" stroke-width="1" />
    <g transform="translate(14, 105)">
      <!-- Tree Header -->
      <text x="0" y="10" font-family="Tahoma, sans-serif" font-size="11" font-weight="bold" fill="#0A246A">📁 All Projects</text>
      
      <!-- Category 1: App Design -->
      <text x="15" y="32" font-family="Tahoma, sans-serif" font-size="11" font-weight="bold" fill="#1E52BF">▾ 📁 App Design</text>
      <text x="35" y="52" font-family="Tahoma, sans-serif" font-size="11" fill="#333333">📄 Operater.io</text>
      <text x="35" y="72" font-family="Tahoma, sans-serif" font-size="11" fill="#333333">📄 v1be SaaS</text>

      <!-- Category 2: Web Design & Development -->
      <text x="15" y="102" font-family="Tahoma, sans-serif" font-size="11" font-weight="bold" fill="#2E7D32">▾ 📁 Web Design &amp; Dev</text>
      <text x="35" y="122" font-family="Tahoma, sans-serif" font-size="11" fill="#333333">📄 Studio v1be</text>
      <text x="35" y="142" font-family="Tahoma, sans-serif" font-size="11" fill="#333333">📄 Rook AI</text>
      <text x="35" y="162" font-family="Tahoma, sans-serif" font-size="11" fill="#333333">📄 MyNessa Media</text>
    </g>

    <!-- Right Pane: File Table (width 345) -->
    <rect x="212" y="90" width="350" height="320" fill="#FFFFFF" stroke="#7F9DB9" stroke-width="1" />
    <!-- Table Header -->
    <rect x="213" y="91" width="348" height="22" fill="#ECE9D8" stroke="#D4D0C8" stroke-width="1" />
    <text x="225" y="106" font-family="Tahoma, sans-serif" font-size="11" font-weight="bold" fill="#444444">Name</text>
    <text x="430" y="106" font-family="Tahoma, sans-serif" font-size="11" font-weight="bold" fill="#444444">Type</text>

    <!-- Table Rows -->
    <g transform="translate(225, 125)">
      <!-- Row 1: Operater.io -->
      <circle cx="10" cy="10" r="8" fill="#0055EA" />
      <text x="7" y="14" font-family="sans-serif" font-size="10" font-weight="bold" fill="#FFFFFF">O</text>
      <text x="26" y="14" font-family="Tahoma, sans-serif" font-size="12" font-weight="bold" fill="#111827">Operater.io</text>
      <text x="205" y="14" font-family="Tahoma, sans-serif" font-size="11" fill="#666666">App Design</text>

      <!-- Row 2: v1be SaaS -->
      <circle cx="10" cy="40" r="8" fill="#43A047" />
      <text x="6" y="44" font-family="sans-serif" font-size="9" font-weight="bold" fill="#FFFFFF">v1</text>
      <text x="26" y="44" font-family="Tahoma, sans-serif" font-size="12" font-weight="bold" fill="#111827">v1be SaaS</text>
      <text x="205" y="44" font-family="Tahoma, sans-serif" font-size="11" fill="#666666">App Design</text>

      <!-- Row 3: Studio v1be -->
      <circle cx="10" cy="70" r="8" fill="#8E24AA" />
      <text x="5" y="74" font-family="sans-serif" font-size="9" font-weight="bold" fill="#FFFFFF">SV</text>
      <text x="26" y="74" font-family="Tahoma, sans-serif" font-size="12" font-weight="bold" fill="#111827">Studio v1be</text>
      <text x="205" y="74" font-family="Tahoma, sans-serif" font-size="11" fill="#666666">Web Design &amp; Dev</text>

      <!-- Row 4: Rook AI -->
      <circle cx="10" cy="100" r="8" fill="#E65100" />
      <text x="6" y="104" font-family="sans-serif" font-size="10" font-weight="bold" fill="#FFFFFF">R</text>
      <text x="26" y="104" font-family="Tahoma, sans-serif" font-size="12" font-weight="bold" fill="#111827">Rook AI</text>
      <text x="205" y="104" font-family="Tahoma, sans-serif" font-size="11" fill="#666666">Web Design &amp; Dev</text>

      <!-- Row 5: MyNessa Media -->
      <circle cx="10" cy="130" r="8" fill="#D81B60" />
      <text x="5" y="134" font-family="sans-serif" font-size="9" font-weight="bold" fill="#FFFFFF">M</text>
      <text x="26" y="134" font-family="Tahoma, sans-serif" font-size="12" font-weight="bold" fill="#111827">MyNessa Media</text>
      <text x="205" y="134" font-family="Tahoma, sans-serif" font-size="11" fill="#666666">Web Design &amp; Dev</text>
    </g>

    <!-- Status Bar (5 Items | My Computer) -->
    <rect x="1" y="414" width="568" height="24" fill="#ECE9D8" stroke="#D4D0C8" stroke-width="1" />
    <text x="12" y="430" font-family="Tahoma, sans-serif" font-size="11" fill="#555555">5 Items</text>
    <text x="475" y="430" font-family="Tahoma, sans-serif" font-size="11" fill="#555555">💻 My Computer</text>
  </g>
</svg>
`;

async function generateOgImage() {
  console.log('Generating Open Graph 1200x630 image...');
  const svgBuffer = Buffer.from(ogSvg.trim());
  const outputPath = path.join(assetsDir, 'og-image.png');

  await sharp(svgBuffer)
    .resize(1200, 630)
    .png({ quality: 95, compressionLevel: 8 })
    .toFile(outputPath);

  console.log('Generated og-image.png at:', outputPath);
}

generateOgImage().catch(err => {
  console.error('Error generating OG image:', err);
  process.exit(1);
});
