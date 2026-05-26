const fs = require('fs');

const raw = fs.readFileSync('src/miningData.js', 'utf8');
// remove "export const MINING_MAP_DATA = "
let jsonStr = raw.replace('export const MINING_MAP_DATA = ', '').trim();
if (jsonStr.endsWith(';')) jsonStr = jsonStr.slice(0, -1);

let data;
try {
  data = JSON.parse(jsonStr);
} catch (e) {
  // If there are JS trailing commas or things that break JSON.parse, we can use eval
  data = eval('(' + jsonStr + ')');
}

const colorMap = {
  kucuk: '#fca5a5',
  buyuk: '#ef4444',
  isletme: '#475569',
  default: '#f97316'
};

for (const key in data) {
  const mapData = data[key];
  
  // Fix legend
  if (Array.isArray(mapData.legend) && typeof mapData.legend[0] === 'string') {
    mapData.legend = mapData.legend.map(str => {
      const lower = str.toLowerCase();
      let type = 'circle';
      let color = colorMap.default;
      
      if (lower.includes('işletme') || lower.includes('fabrika') || lower.includes('santral')) {
        type = 'factory';
        color = colorMap.isletme;
      } else if (lower.includes('küçük')) {
        color = colorMap.kucuk;
      } else if (lower.includes('büyük') || lower.includes('başlıca')) {
        color = colorMap.buyuk;
      }
      
      return { type, color, label: str };
    });
  } else if (Array.isArray(mapData.legend)) {
    // maybe it has objects but missing properties?
    mapData.legend.forEach(item => {
      if (!item.color) item.color = '#ef4444';
      if (!item.type) item.type = 'circle';
    });
  }

  // Fix markers
  if (Array.isArray(mapData.markers)) {
    mapData.markers.forEach(marker => {
      if (!marker.coordinates) {
        if (marker.lng !== undefined && marker.lat !== undefined) {
          marker.coordinates = [marker.lng, marker.lat];
        } else if (marker.coordinates && typeof marker.coordinates === 'string') {
          // just in case
          marker.coordinates = [0, 0];
        } else {
          marker.coordinates = [35.0, 39.0]; // fallback
        }
      }
      
      // Determine icon
      if (!marker.icon) {
        const typeStr = (marker.type || marker.label || '').toLowerCase();
        const nameStr = (marker.name || '').toLowerCase();
        if (typeStr.includes('işletme') || typeStr.includes('fabrika') || typeStr.includes('santral') || nameStr.includes('işletme')) {
          marker.icon = 'factory';
        } else {
          marker.icon = 'circle';
        }
      }
      
      // Determine color
      if (!marker.color) {
        const typeStr = (marker.type || '').toLowerCase();
        if (typeStr.includes('işletme') || typeStr.includes('fabrika') || typeStr.includes('santral')) {
          marker.color = colorMap.isletme;
        } else if (typeStr.includes('küçük')) {
          marker.color = colorMap.kucuk;
        } else if (typeStr.includes('büyük') || typeStr.includes('başlıca')) {
          marker.color = colorMap.buyuk;
        } else {
          marker.color = colorMap.default;
        }
      }
      
      // Fix label rendering correctly (some might have just name)
      if (marker.name && marker.label === undefined) {
        marker.label = marker.name;
      }
    });
  }
}

const newOutput = 'export const MINING_MAP_DATA = ' + JSON.stringify(data, null, 2) + ';';
fs.writeFileSync('src/miningData.js', newOutput, 'utf8');
console.log('Fixed miningData.js');
