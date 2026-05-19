import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from '@vnedyalk0v/react19-simple-maps';
import { motion, AnimatePresence } from 'framer-motion';

import geoData from './tr-cities.json';

const GEO_URL = geoData;

const CATEGORIES = [
  { id: "tahil", label: "Tahıl & Bakliyat", emoji: "🌾" },
  { id: "meyve", label: "Meyve & Sebze", emoji: "🍎" },
  { id: "endustri", label: "Endüstriyel", emoji: "🌿" },
  { id: "hayvancilik", label: "Hayvancılık", emoji: "🐄" },
];

const PRODUCTS = {
  bugday: { name: "Buğday", category: "tahil", unit: "ton", color: "#f59e0b",
    provinces: [
      { name: "Konya", value: 1850000 },
      { name: "Ankara", value: 1200000 },
      { name: "Eskişehir", value: 950000 },
      { name: "Tekirdağ", value: 820000 },
      { name: "Edirne", value: 780000 },
    ]},
  arpa: { name: "Arpa", category: "tahil", unit: "ton", color: "#d97706",
    provinces: [
      { name: "Konya", value: 950000 },
      { name: "Ankara", value: 720000 },
      { name: "Şanlıurfa", value: 650000 },
      { name: "Diyarbakır", value: 580000 },
      { name: "Eskişehir", value: 520000 },
    ]},
  misir: { name: "Mısır", category: "tahil", unit: "ton", color: "#fbbf24",
    provinces: [
      { name: "Şanlıurfa", value: 980000 },
      { name: "Adana", value: 850000 },
      { name: "Samsun", value: 720000 },
      { name: "Hatay", value: 610000 },
      { name: "Konya", value: 590000 },
    ]},
  nohut: { name: "Nohut", category: "tahil", unit: "ton", color: "#a16207",
    provinces: [
      { name: "Konya", value: 120000 },
      { name: "Ankara", value: 95000 },
      { name: "Eskişehir", value: 80000 },
      { name: "Karaman", value: 70000 },
      { name: "Sivas", value: 60000 },
    ]},
  kirmizimercimek: { name: "Kırmızı Mercimek", category: "tahil", unit: "ton", color: "#dc2626",
    provinces: [
      { name: "Şanlıurfa", value: 420000 },
      { name: "Diyarbakır", value: 280000 },
      { name: "Mardin", value: 210000 },
      { name: "Gaziantep", value: 180000 },
      { name: "Adıyaman", value: 140000 },
    ]},
  yesılmercimek: { name: "Yeşil Mercimek", category: "tahil", unit: "ton", color: "#16a34a",
    provinces: [
      { name: "Konya", value: 55000 },
      { name: "Isparta", value: 42000 },
      { name: "Karaman", value: 38000 },
      { name: "Burdur", value: 32000 },
      { name: "Ankara", value: 28000 },
    ]},
  kurufasulye: { name: "Kuru Fasulye", category: "tahil", unit: "ton", color: "#7c3aed",
    provinces: [
      { name: "Konya", value: 45000 },
      { name: "Isparta", value: 38000 },
      { name: "Karaman", value: 32000 },
      { name: "Erzincan", value: 28000 },
      { name: "Kastamonu", value: 24000 },
    ]},
  seker_pancar: { name: "Şeker Pancarı", category: "endustri", unit: "ton", color: "#0891b2",
    provinces: [
      { name: "Konya", value: 4200000 },
      { name: "Ankara", value: 2800000 },
      { name: "Afyonkarahisar", value: 2100000 },
      { name: "Çorum", value: 1850000 },
      { name: "Amasya", value: 1600000 },
    ]},
  pamuk: { name: "Pamuk", category: "endustri", unit: "ton", color: "#64748b",
    provinces: [
      { name: "Şanlıurfa", value: 620000 },
      { name: "Aydın", value: 380000 },
      { name: "İzmir", value: 320000 },
      { name: "Adana", value: 280000 },
      { name: "Diyarbakır", value: 240000 },
    ]},
  ayçicegi: { name: "Ayçiçeği", category: "endustri", unit: "ton", color: "#eab308",
    provinces: [
      { name: "Tekirdağ", value: 480000 },
      { name: "Edirne", value: 420000 },
      { name: "Kırklareli", value: 380000 },
      { name: "Konya", value: 280000 },
      { name: "Bursa", value: 180000 },
    ]},
  findik: { name: "Fındık", category: "meyve", unit: "ton", color: "#92400e",
    provinces: [
      { name: "Samsun", value: 85000 },
      { name: "Sakarya", value: 72000 },
      { name: "Giresun", value: 68000 },
      { name: "Ordu", value: 62000 },
      { name: "Düzce", value: 52000 },
    ]},
  zeytin: { name: "Zeytin", category: "meyve", unit: "ton", color: "#4d7c0f",
    provinces: [
      { name: "İzmir", value: 680000 },
      { name: "Aydın", value: 520000 },
      { name: "Manisa", value: 420000 },
      { name: "Hatay", value: 380000 },
      { name: "Balıkesir", value: 340000 },
    ]},
  elma: { name: "Elma", category: "meyve", unit: "ton", color: "#ef4444",
    provinces: [
      { name: "Isparta", value: 920000 },
      { name: "Karaman", value: 780000 },
      { name: "Konya", value: 620000 },
      { name: "Niğde", value: 480000 },
      { name: "Antalya", value: 420000 },
    ]},
  kayisi: { name: "Kayısı", category: "meyve", unit: "ton", color: "#fb923c",
    provinces: [
      { name: "Malatya", value: 480000 },
      { name: "Erzincan", value: 120000 },
      { name: "Elazığ", value: 95000 },
      { name: "Ankara", value: 72000 },
      { name: "Mersin", value: 60000 },
    ]},
  antepfistigi: { name: "Antep Fıstığı", category: "meyve", unit: "ton", color: "#65a30d",
    provinces: [
      { name: "Gaziantep", value: 185000 },
      { name: "Şanlıurfa", value: 95000 },
      { name: "Siirt", value: 72000 },
      { name: "Adıyaman", value: 58000 },
      { name: "Kilis", value: 45000 },
    ]},
  incir: { name: "İncir", category: "meyve", unit: "ton", color: "#a855f7",
    provinces: [
      { name: "Aydın", value: 180000 },
      { name: "İzmir", value: 95000 },
      { name: "Muğla", value: 62000 },
      { name: "Bursa", value: 42000 },
      { name: "Denizli", value: 35000 },
    ]},
  muz: { name: "Muz", category: "meyve", unit: "ton", color: "#facc15",
    provinces: [
      { name: "Mersin", value: 185000 },
      { name: "Antalya", value: 95000 },
      { name: "Adana", value: 38000 },
      { name: "Hatay", value: 22000 },
      { name: "Muğla", value: 12000 },
    ]},
  siğir: { name: "Sığır (Baş)", category: "hayvancilik", unit: "baş", color: "#854d0e",
    provinces: [
      { name: "Konya", value: 580000 },
      { name: "Erzurum", value: 520000 },
      { name: "Ankara", value: 450000 },
      { name: "Sivas", value: 420000 },
      { name: "Diyarbakır", value: 380000 },
    ]},
  koyun: { name: "Koyun (Baş)", category: "hayvancilik", unit: "baş", color: "#d4d4d4",
    provinces: [
      { name: "Şanlıurfa", value: 3200000 },
      { name: "Konya", value: 2800000 },
      { name: "Erzurum", value: 2200000 },
      { name: "Sivas", value: 1900000 },
      { name: "Ankara", value: 1700000 },
    ]},
  tavuk: { name: "Tavuk (Adet)", category: "hayvancilik", unit: "adet", color: "#f97316",
    provinces: [
      { name: "Bolu", value: 48000000 },
      { name: "Sakarya", value: 42000000 },
      { name: "Bursa", value: 38000000 },
      { name: "Kocaeli", value: 32000000 },
      { name: "Manisa", value: 28000000 },
    ]},
  aricilik: { name: "Arıcılık (Kovan)", category: "hayvancilik", unit: "kovan", color: "#f59e0b",
    provinces: [
      { name: "Muğla", value: 950000 },
      { name: "Ordu", value: 720000 },
      { name: "Sivas", value: 580000 },
      { name: "Erzurum", value: 480000 },
      { name: "Bingöl", value: 420000 },
    ]},
};

const formatValue = (value, unit) => {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M ${unit}`;
  if (value >= 1000) return `${(value / 1000).toFixed(0)}B ${unit}`;
  return `${value} ${unit}`;
};

const normalizeProvinceName = (name) => {
  if (!name) return "";
  let n = name.toString().toLowerCase()
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .trim();
  
  if (n.includes("afyon")) return "afyon";
  if (n.includes("kocael")) return "kocaeli";
  if (n.includes("elazig")) return "elazig";
  if (n.includes("marasis") || n.includes("kahramanmaras") || n.includes("maras")) return "maras";
  if (n.includes("sanliurfa") || n.includes("urfa")) return "urfa";
  if (n.includes("gaziantep") || n.includes("antep")) return "antep";
  return n;
};

export default function InteractiveMap() {
  const [selectedCategory, setSelectedCategory] = useState("tahil");
  const [selectedProduct, setSelectedProduct] = useState("bugday");
  const [clickedProv, setClickedProv] = useState(null);

  useEffect(() => {
    setClickedProv(null);
  }, [selectedProduct]);

  const product = PRODUCTS[selectedProduct];
  const maxValue = product.provinces[0].value;

  const getProvinceColor = (geoName) => {
    const normGeoName = normalizeProvinceName(geoName);
    const rank = product.provinces.findIndex(
      p => geoName && normalizeProvinceName(p.name) === normGeoName
    );
    if (rank === -1) return "#1e1e3a";
    const intensities = ["ff", "dd", "bb", "99", "77"];
    return product.color + intensities[rank];
  };

  const filteredProducts = Object.entries(PRODUCTS).filter(
    ([, p]) => p.category === selectedCategory
  );

  return (
    <section id="harita" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <h2>İnteraktif Tarım & Hayvancılık Haritası</h2>
          <p>TÜİK 2025 verileriyle Türkiye'de üretim dağılımını keşfedin</p>
        </motion.div>

        <div className="imap-wrapper">
          {/* LEFT PANEL */}
          <div className="imap-left">
            <div className="imap-cats">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  className={`imap-cat-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    const first = Object.entries(PRODUCTS).find(([, p]) => p.category === cat.id);
                    if (first) setSelectedProduct(first[0]);
                  }}
                >
                  <span>{cat.emoji}</span> {cat.label}
                </button>
              ))}
            </div>

            <div className="imap-select-wrap">
              <label>Ürün Seçin</label>
              <select
                className="imap-select"
                value={selectedProduct}
                onChange={e => setSelectedProduct(e.target.value)}
              >
                {filteredProducts.map(([key, p]) => (
                  <option key={key} value={key}>{p.name}</option>
                ))}
              </select>
            </div>

            {/* Bar Chart */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProduct}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="imap-cols-container"
              >
                <div className="imap-bars-title">İlk 5 İl</div>
                <div className="imap-cols">
                  {product.provinces.map((prov, i) => (
                    <motion.div
                      key={prov.name}
                      className="imap-col-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <span className="imap-col-val">{formatValue(prov.value, product.unit)}</span>
                      <div className="imap-col-track">
                        <motion.div
                          className="imap-col-fill"
                          style={{ background: product.color }}
                          initial={{ height: 0 }}
                          animate={{ height: `${(prov.value / maxValue) * 100}%` }}
                          transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                        />
                      </div>
                      <div className="imap-col-label">
                        <span className="imap-rank">#{i + 1}</span>
                        <span className="imap-col-name" title={prov.name}>{prov.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT PANEL - MAP */}
          <div className="imap-right">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProduct}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="imap-map-container"
              >
                <div className="imap-product-badge" style={{ borderColor: product.color, color: product.color }}>
                  {product.name} — 2025
                </div>

                <AnimatePresence>
                  {clickedProv && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 10 }}
                      className="imap-tooltip glass-card"
                      style={{ borderLeft: `4px solid ${clickedProv.color}` }}
                    >
                      <button className="imap-tooltip-close" onClick={() => setClickedProv(null)}>×</button>
                      <div className="imap-tooltip-title" style={{ color: clickedProv.color }}>{clickedProv.name}</div>
                      <div className="imap-tooltip-val" style={{ color: clickedProv.color }}>
                        {clickedProv.value}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <ComposableMap
                  projection="geoMercator"
                  projectionConfig={{ scale: 2300, center: [35.5, 39] }}
                  width={800}
                  height={420}
                  style={{ width: "100%", height: "100%" }}
                >
                  <Geographies geography={GEO_URL}>
                    {({ geographies }) =>
                      geographies.map(geo => {
                        const name = geo.properties?.name || geo.properties?.NAME || "";
                        const color = getProvinceColor(name);
                        const isHighlighted = product.provinces.some(
                          p => normalizeProvinceName(p.name) === normalizeProvinceName(name)
                        );
                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={color}
                            stroke="#2d2d5e"
                            strokeWidth={0.5}
                            onClick={() => {
                              const normGeoName = normalizeProvinceName(name);
                              const provData = product.provinces.find(p => normalizeProvinceName(p.name) === normGeoName);
                              if (provData) {
                                setClickedProv({ name: provData.name, value: formatValue(provData.value, product.unit), color: product.color });
                              } else {
                                setClickedProv({ name: geo.properties.name || name, value: "İlk 5'te Değil", color: "#aaaaaa" });
                              }
                            }}
                            style={{
                              default: { outline: "none" },
                              hover: { fill: isHighlighted ? color : "#2a2a5a", outline: "none", cursor: "pointer" },
                              pressed: { outline: "none" },
                            }}
                          />
                        );
                      })
                    }
                  </Geographies>
                </ComposableMap>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
