const fs = require('fs');
const path = require('path');

const projectImages = [
  'crypto-tracker.jpg',
  'ecommerce.jpg',
  'chat-app.jpg',
  'portfolio.jpg',
  'weather-app.jpg',
  'expense-tracker.jpg'
];

const achievementImages = [
  'opensource.jpg',
  'hackathon.jpg',
  'blog.jpg',
  'community.jpg',
  'certification.jpg',
  'project.jpg',
  'research.jpg',
  'award.jpg',
  'mentorship.jpg'
];

// Create directories if they don't exist
const publicDir = path.join(process.cwd(), 'public');
const projectsDir = path.join(publicDir, 'projects');
const achievementsDir = path.join(publicDir, 'achievements');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir);
}
if (!fs.existsSync(achievementsDir)) {
  fs.mkdirSync(achievementsDir);
}

// Generate a simple SVG placeholder
function generatePlaceholderSVG(text, bgColor = '#1e40af') {
  return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${bgColor}"/>
    <text x="50%" y="50%" font-family="Arial" font-size="48" fill="white" text-anchor="middle" dy=".3em">${text}</text>
  </svg>`;
}

// Create project placeholders
projectImages.forEach(filename => {
  const filepath = path.join(projectsDir, filename);
  const text = filename.replace('.jpg', '').split('-').join(' ');
  fs.writeFileSync(filepath, generatePlaceholderSVG(text));
});

// Create achievement placeholders
achievementImages.forEach(filename => {
  const filepath = path.join(achievementsDir, filename);
  const text = filename.replace('.jpg', '').split('-').join(' ');
  fs.writeFileSync(filepath, generatePlaceholderSVG(text, '#2563eb'));
}); 