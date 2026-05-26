const fs = require('fs');

const raw = fs.readFileSync('src/miningData.js', 'utf8');
let jsonStr = raw.replace('export const MINING_MAP_DATA = ', '').trim();
if (jsonStr.endsWith(';')) jsonStr = jsonStr.slice(0, -1);

let data;
try {
  data = JSON.parse(jsonStr);
} catch (e) {
  data = eval('(' + jsonStr + ')');
}

// 1. Trona overlapping
if (data.trona) {
  data.trona.markers.forEach(m => {
    if (m.name === 'Beypazarı') {
      m.offsetX = -8;
      m.offsetY = -12;
      m.align = 'end';
    }
    if (m.name === 'Kahramankazan') {
      m.offsetX = 0;
      m.offsetY = -26;
    }
    if (m.name === 'ANKARA') {
      m.offsetX = 8;
      m.offsetY = -8;
      m.align = 'start';
    }
  });
}

// 2. Bor overlapping
if (data.bor) {
  data.bor.markers.forEach(m => {
    if (m.name === 'Mustafakemalpaşa') {
      m.offsetY = -26;
    }
    if (m.name === 'Eskişehir - Seyitgazi') {
      m.offsetY = -26;
    }
  });
}

// 3. Demir overlapping
if (data.demir) {
  data.demir.markers.forEach(m => {
    if (m.name === 'Hasançelebi') {
      m.offsetY = -26;
    }
    if (m.name === 'Divriği A-B Kafa') {
      m.offsetY = -26;
    }
    if (m.name === 'EREĞLİ') {
      m.offsetY = -26;
    }
  });
}

const newOutput = 'export const MINING_MAP_DATA = ' + JSON.stringify(data, null, 2) + ';';
fs.writeFileSync('src/miningData.js', newOutput, 'utf8');
console.log('Fixed labels successfully');
