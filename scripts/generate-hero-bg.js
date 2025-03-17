const fs = require('fs');
const path = require('path');

// Generate a professional dark background SVG
function generateHeroBgSVG() {
  return `<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#000000;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#1a1a1a;stop-opacity:1" />
      </linearGradient>
      <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
        <rect width="30" height="30" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="0.5"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grad1)"/>
    <rect width="100%" height="100%" fill="url(#grid)"/>
    <rect width="100%" height="100%" fill="url(#grad1)" opacity="0.7"/>
  </svg>`;
}

// Create the hero background
const publicDir = path.join(process.cwd(), 'public');
fs.writeFileSync(path.join(publicDir, 'hero-bg.jpg'), generateHeroBgSVG()); 