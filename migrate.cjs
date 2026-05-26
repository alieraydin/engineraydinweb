const fs = require('fs');

let content = fs.readFileSync('src/InteractiveMap.jsx', 'utf8');
const lines = content.split('\n');

// 1. Remove lines 591 to 701 (0-indexed 590 to 700)
// Actually we can just find "const MINING_MAP_DATA = {" and find the closing "};"
const startIndex = lines.findIndex(l => l.startsWith('const MINING_MAP_DATA = {'));
let endIndex = startIndex;
if (startIndex !== -1) {
  while (endIndex < lines.length && !lines[endIndex].startsWith('};')) {
    endIndex++;
  }
  // remove them
  lines.splice(startIndex, (endIndex - startIndex + 1));
}

// 2. Add import
lines.splice(4, 0, "import { MINING_MAP_DATA } from './miningData';");

// 3. Replace dropdown options
const newOptions = `                      {Object.entries(MINING_MAP_DATA).map(([key, data]) => (
                        <option key={key} value={key}>{data.title.replace('TÜRKİYE ', '').replace(' YATAKLARININ DAĞILIŞI', '')}</option>
                      ))}`;

const opt1 = lines.findIndex(l => l.includes('<option value="uranyum_toryum">'));
if (opt1 !== -1) {
  lines.splice(opt1, 5, newOptions);
}

fs.writeFileSync('src/InteractiveMap.jsx', lines.join('\n'), 'utf8');
console.log("Updated InteractiveMap.jsx");
