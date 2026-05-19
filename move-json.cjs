const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'public', 'tr-cities.json');
const destPath = path.join(__dirname, 'src', 'tr-cities.json');

try {
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log('Moved tr-cities.json to src directory!');
  } else {
    console.log('public/tr-cities.json not found.');
  }
} catch (err) {
  console.error(err);
}
