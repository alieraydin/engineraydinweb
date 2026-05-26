const fs = require('fs');
const lines = fs.readFileSync('src/InteractiveMap.jsx', 'utf8').split('\n');

const startIndex = lines.findIndex(l => l.includes('{activeTab === "madenler_enerji" && ('));
const endIndex = lines.findIndex((l, i) => i > startIndex && l.trim() === '</AnimatePresence>');

if (startIndex !== -1 && endIndex !== -1) {
  const newUI = fs.readFileSync('new_ui.jsx', 'utf8');
  // keep everything up to startIndex
  const before = lines.slice(0, startIndex);
  // keep everything from endIndex
  const after = lines.slice(endIndex);
  
  const newContent = [...before, newUI, ...after].join('\n');
  fs.writeFileSync('src/InteractiveMap.jsx', newContent);
  console.log("Lines replaced successfully!");
} else {
  console.log("Could not find start or end index", startIndex, endIndex);
}
