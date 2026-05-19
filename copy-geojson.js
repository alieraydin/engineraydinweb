const fs = require('fs');
const path = require('path');

const srcPath = 'C:\\Users\\alier\\.gemini\\antigravity\\brain\\358fe6c1-428e-438a-8f71-4a8df6699194\\.system_generated\\steps\\279\\content.md';
const destDir = path.join(__dirname, 'public');
const destPath = path.join(destDir, 'tr-cities.json');

try {
  if (!fs.existsSync(srcPath)) {
    console.error('Source file not found at:', srcPath);
    process.exit(1);
  }

  const content = fs.readFileSync(srcPath, 'utf8');
  
  // Find where the JSON starts (first '{')
  const jsonStartIndex = content.indexOf('{');
  if (jsonStartIndex === -1) {
    console.error('Could not find JSON start in content.md');
    process.exit(1);
  }

  const jsonContent = content.substring(jsonStartIndex).trim();

  // Create public directory if not exists
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  fs.writeFileSync(destPath, jsonContent, 'utf8');
  console.log('Successfully created public/tr-cities.json!');
} catch (err) {
  console.error('Error during copying:', err);
}
