const fs = require('fs');

const oldFile = fs.readFileSync('src/miningData.js', 'utf8');
// It looks like: export const MINING_MAP_DATA = { ... };

const batchFiles = [
  'src/data_batch_1.json',
  '../src/data_batch_2.json', // this one was placed outside by mistake
  'src/data_batch_3.json',
  'src/data_batch_4.json',
  'src/data_batch_5.json'
];

let allNewData = {};

for (const bf of batchFiles) {
  try {
    const raw = fs.readFileSync(bf, 'utf8');
    // Subagents might have saved it with markdown codeblocks
    const cleanRaw = raw.replace(/^```json/m, '').replace(/```$/m, '').trim();
    const data = JSON.parse(cleanRaw);
    Object.assign(allNewData, data);
  } catch (err) {
    console.error(`Failed to load or parse ${bf}:`, err.message);
  }
}

// Convert allNewData to a string (without the outer braces so we can inject it)
let newDataString = JSON.stringify(allNewData, null, 2);
newDataString = newDataString.substring(1, newDataString.length - 1); // remove { }

// Insert into miningData.js right before the last closing brace
const insertPos = oldFile.lastIndexOf('}');
if (insertPos !== -1) {
  const newContent = oldFile.substring(0, insertPos) + ",\n" + newDataString + "\n" + oldFile.substring(insertPos);
  fs.writeFileSync('src/miningData.js', newContent, 'utf8');
  console.log("Successfully combined data into miningData.js");
} else {
  console.log("Could not find insertion point.");
}
