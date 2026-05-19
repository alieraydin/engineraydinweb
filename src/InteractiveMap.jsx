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
      { name: "Konya", value: 1520000 },
      { name: "Şanlıurfa", value: 1440000 },
      { name: "Ankara", value: 820000 },
      { name: "Diyarbakır", value: 740000 },
      { name: "Mardin", value: 680000 },
    ]},
  arpa: { name: "Arpa", category: "tahil", unit: "ton", color: "#d97706",
    provinces: [
      { name: "Konya", value: 640000 },
      { name: "Ankara", value: 380000 },
      { name: "Afyonkarahisar", value: 290000 },
      { name: "Sivas", value: 280000 },
      { name: "Aksaray", value: 270000 },
    ]},
  misir: { name: "Mısır", category: "tahil", unit: "ton", color: "#fbbf24",
    provinces: [
      { name: "Konya", value: 1980000 },
      { name: "Şanlıurfa", value: 1150000 },
      { name: "Adana", value: 1080000 },
      { name: "Eskişehir", value: 520000 },
      { name: "Mardin", value: 520000 },
    ]},
  nohut: { name: "Nohut", category: "tahil", unit: "ton", color: "#a16207",
    provinces: [
      { name: "Ankara", value: 55000 },
      { name: "Yozgat", value: 41000 },
      { name: "Konya", value: 32000 },
      { name: "Karaman", value: 30000 },
      { name: "Kırşehir", value: 30000 },
    ]},
  kirmizimercimek: { name: "Kırmızı Mercimek", category: "tahil", unit: "ton", color: "#dc2626",
    provinces: [
      { name: "Şanlıurfa", value: 110000 },
      { name: "Diyarbakır", value: 70000 },
      { name: "Siirt", value: 30000 },
      { name: "Batman", value: 20000 },
      { name: "Mardin", value: 5000 },
    ]},
  yesılmercimek: { name: "Yeşil Mercimek", category: "tahil", unit: "ton", color: "#16a34a",
    provinces: [
      { name: "Yozgat", value: 11800 },
      { name: "Konya", value: 7200 },
      { name: "Kırşehir", value: 3800 },
      { name: "Çorum", value: 2000 },
      { name: "Ankara", value: 1000 },
    ]},
  kurufasulye: { name: "Kuru Fasulye", category: "tahil", unit: "ton", color: "#7c3aed",
    provinces: [
      { name: "Niğde", value: 55000 },
      { name: "Konya", value: 40000 },
      { name: "Bitlis", value: 35000 },
      { name: "Nevşehir", value: 22500 },
      { name: "Karaman", value: 22000 },
    ]},
  celtik: { name: "Çeltik", category: "tahil", unit: "ton", color: "#fde047",
    provinces: [
      { name: "Edirne", value: 400000 },
      { name: "Samsun", value: 180000 },
      { name: "Balıkesir", value: 140000 },
      { name: "Çanakkale", value: 80000 },
      { name: "Çorum", value: 40000 },
    ]},
  susam: { name: "Susam", category: "tahil", unit: "ton", color: "#ca8a04",
    provinces: [
      { name: "Antalya", value: 4900 },
      { name: "Manisa", value: 2500 },
      { name: "Muğla", value: 1600 },
      { name: "Uşak", value: 1400 },
      { name: "Adana", value: 1100 },
    ]},
  soya_fasulyesi: { name: "Soya Fasulyesi", category: "tahil", unit: "ton", color: "#eab308",
    provinces: [
      { name: "Adana", value: 85000 },
      { name: "Mersin", value: 12000 },
      { name: "Kahramanmaraş", value: 11000 },
      { name: "Osmaniye", value: 10500 },
      { name: "Diyarbakır", value: 10000 },
    ]},
  seker_pancar: { name: "Şeker Pancarı", category: "endustri", unit: "ton", color: "#0891b2",
    provinces: [
      { name: "Konya", value: 7200000 },
      { name: "Kayseri", value: 1380000 },
      { name: "Yozgat", value: 1300000 },
      { name: "Aksaray", value: 1120000 },
      { name: "Afyonkarahisar", value: 1100000 },
    ]},
  pamuk: { name: "Pamuk", category: "endustri", unit: "ton", color: "#64748b",
    provinces: [
      { name: "Şanlıurfa", value: 1280000 },
      { name: "Diyarbakır", value: 550000 },
      { name: "Aydın", value: 350000 },
      { name: "Hatay", value: 220000 },
      { name: "İzmir", value: 200000 },
    ]},
  ayçicegi: { name: "Ayçiçeği", category: "endustri", unit: "ton", color: "#eab308",
    provinces: [
      { name: "Konya", value: 290000 },
      { name: "Tekirdağ", value: 220000 },
      { name: "Edirne", value: 170000 },
      { name: "Adana", value: 160000 },
      { name: "Kırklareli", value: 110000 },
    ]},
  cay: { name: "Çay", category: "endustri", unit: "ton", color: "#15803d",
    provinces: [
      { name: "Rize", value: 900000 },
      { name: "Trabzon", value: 280000 },
      { name: "Artvin", value: 150000 },
      { name: "Giresun", value: 30000 },
      { name: "Ordu", value: 1000 },
    ]},
  kanola: { name: "Kanola", category: "endustri", unit: "ton", color: "#fcd34d",
    provinces: [
      { name: "Tekirdağ", value: 43000 },
      { name: "Edirne", value: 18000 },
      { name: "Konya", value: 14000 },
      { name: "İstanbul", value: 14000 },
      { name: "Kırklareli", value: 13000 },
    ]},
  hashas: { name: "Haşhaş", category: "endustri", unit: "ton", color: "#db2777",
    provinces: [
      { name: "Afyonkarahisar", value: 1500 },
      { name: "Uşak", value: 1100 },
      { name: "Konya", value: 850 },
      { name: "Denizli", value: 650 },
      { name: "Amasya", value: 450 },
    ]},
  tutun: { name: "Tütün", category: "endustri", unit: "ton", color: "#c2410c",
    provinces: [
      { name: "Denizli", value: 27000 },
      { name: "Adıyaman", value: 24500 },
      { name: "Manisa", value: 11000 },
      { name: "Uşak", value: 11000 },
      { name: "Batman", value: 8000 },
    ]},
  keten: { name: "Keten", category: "endustri", unit: "ton", color: "#38bdf8",
    provinces: [
      { name: "Uşak", value: 120 },
      { name: "Samsun", value: 60 },
      { name: "İstanbul", value: 15 },
      { name: "Amasya", value: 10 },
      { name: "Tokat", value: 8 },
    ]},
  gul: { name: "Gül", category: "endustri", unit: "ton", color: "#e11d48",
    provinces: [
      { name: "Isparta", value: 12100 },
      { name: "Burdur", value: 1000 },
      { name: "Afyonkarahisar", value: 800 },
      { name: "Mardin", value: 200 },
      { name: "Denizli", value: 100 },
    ]},
  kenevir: { name: "Kenevir", category: "endustri", unit: "ton", color: "#059669",
    provinces: [
      { name: "Konya", value: 415 },
      { name: "Amasya", value: 30 },
      { name: "Çorum", value: 18 },
      { name: "Kütahya", value: 8 },
      { name: "İzmir", value: 5 },
    ]},
  anason: { name: "Anason", category: "endustri", unit: "ton", color: "#0d9488",
    provinces: [
      { name: "Konya", value: 1040 },
      { name: "Denizli", value: 910 },
      { name: "Burdur", value: 730 },
      { name: "Afyonkarahisar", value: 390 },
      { name: "Antalya", value: 360 },
    ]},
  aspir: { name: "Aspir", category: "endustri", unit: "ton", color: "#f59e0b",
    provinces: [
      { name: "Kayseri", value: 11000 },
      { name: "Konya", value: 4900 },
      { name: "Isparta", value: 3200 },
      { name: "Aksaray", value: 2100 },
      { name: "Nevşehir", value: 1100 },
    ]},
  findik: { name: "Fındık", category: "meyve", unit: "ton", color: "#92400e",
    provinces: [
      { name: "Samsun", value: 92000 },
      { name: "Sakarya", value: 68000 },
      { name: "Giresun", value: 66000 },
      { name: "Ordu", value: 65000 },
      { name: "Düzce", value: 54000 },
    ]},
  kivi: { name: "Kivi", category: "meyve", unit: "ton", color: "#84cc16",
    provinces: [
      { name: "Yalova", value: 14000 },
      { name: "Samsun", value: 14000 },
      { name: "Mersin", value: 8500 },
      { name: "Bursa", value: 7200 },
      { name: "Sakarya", value: 7000 },
    ]},
  zeytin: { name: "Zeytin", category: "meyve", unit: "ton", color: "#4d7c0f",
    provinces: [
      { name: "Aydın", value: 460000 },
      { name: "İzmir", value: 400000 },
      { name: "Manisa", value: 310000 },
      { name: "Mersin", value: 220000 },
      { name: "Hatay", value: 210000 },
    ]},
  elma: { name: "Elma", category: "meyve", unit: "ton", color: "#ef4444",
    provinces: [
      { name: "Isparta", value: 800000 },
      { name: "Karaman", value: 380000 },
      { name: "Antalya", value: 280000 },
      { name: "Denizli", value: 130000 },
      { name: "Mersin", value: 80000 },
    ]},
  kayisi: { name: "Kayısı", category: "meyve", unit: "ton", color: "#fb923c",
    provinces: [
      { name: "Mersin", value: 140000 },
      { name: "Hatay", value: 58000 },
      { name: "Iğdır", value: 50000 },
      { name: "Antalya", value: 25000 },
      { name: "Adana", value: 10000 },
    ]},
  antepfistigi: { name: "Antep Fıstığı", category: "meyve", unit: "ton", color: "#65a30d",
    provinces: [
      { name: "Şanlıurfa", value: 49000 },
      { name: "Gaziantep", value: 44000 },
      { name: "Siirt", value: 31000 },
      { name: "Adıyaman", value: 6000 },
      { name: "Mersin", value: 2000 },
    ]},
  incir: { name: "İncir", category: "meyve", unit: "ton", color: "#a855f7",
    provinces: [
      { name: "Aydın", value: 210000 },
      { name: "İzmir", value: 82000 },
      { name: "Bursa", value: 25000 },
      { name: "Mersin", value: 10000 },
      { name: "Balıkesir", value: 2000 },
    ]},
  uzum: { name: "Üzüm", category: "meyve", unit: "ton", color: "#7e22ce",
    provinces: [
      { name: "Manisa", value: 900000 },
      { name: "Mersin", value: 300000 },
      { name: "Denizli", value: 280000 },
      { name: "Gaziantep", value: 120000 },
      { name: "Mardin", value: 120000 },
    ]},
  muz: { name: "Muz", category: "meyve", unit: "ton", color: "#facc15",
    provinces: [
      { name: "Antalya", value: 400000 },
      { name: "Mersin", value: 390000 },
      { name: "Adana", value: 50000 },
      { name: "Hatay", value: 10000 },
      { name: "Muğla", value: 5000 },
    ]},
  yer_fistigi: { name: "Yer Fıstığı", category: "meyve", unit: "ton", color: "#ea580c",
    provinces: [
      { name: "Adana", value: 90000 },
      { name: "Osmaniye", value: 46000 },
      { name: "Şırnak", value: 24000 },
      { name: "Hatay", value: 6000 },
      { name: "Antalya", value: 6000 },
    ]},
  turuncgiller: { name: "Turunçgiller", category: "meyve", unit: "ton", color: "#f97316",
    provinces: [
      { name: "Adana", value: 1950000 },
      { name: "Mersin", value: 1050000 },
      { name: "Hatay", value: 750000 },
      { name: "Antalya", value: 550000 },
      { name: "Muğla", value: 150000 },
    ]},
  avokado: { name: "Avokado", category: "meyve", unit: "ton", color: "#047857",
    provinces: [
      { name: "Antalya", value: 40000 },
      { name: "Mersin", value: 27000 },
      { name: "Adana", value: 1000 },
      { name: "Muğla", value: 500 },
      { name: "Hatay", value: 100 },
    ]},
  patates: { name: "Patates", category: "meyve", unit: "ton", color: "#b45309",
    provinces: [
      { name: "Kayseri", value: 930000 },
      { name: "Niğde", value: 880000 },
      { name: "Konya", value: 840000 },
      { name: "Afyonkarahisar", value: 650000 },
      { name: "Sivas", value: 480000 },
    ]},
  siğir: { name: "Sığır - İnek (Baş)", category: "hayvancilik", unit: "baş", color: "#854d0e",
    provinces: [
      { name: "Konya", value: 960000 },
      { name: "İzmir", value: 920000 },
      { name: "Erzurum", value: 780000 },
      { name: "Ankara", value: 660000 },
      { name: "Balıkesir", value: 610000 },
    ]},
  koyun: { name: "Koyun (Baş)", category: "hayvancilik", unit: "baş", color: "#d4d4d4",
    provinces: [
      { name: "Van", value: 3100000 },
      { name: "Konya", value: 3050000 },
      { name: "Şanlıurfa", value: 2420000 },
      { name: "Diyarbakır", value: 1980000 },
      { name: "Ankara", value: 1880000 },
    ]},
  tavuk: { name: "Kümes - Tavuk (Adet)", category: "hayvancilik", unit: "adet", color: "#f97316",
    provinces: [
      { name: "Manisa", value: 51500000 },
      { name: "Bolu", value: 35000000 },
      { name: "Sakarya", value: 34800000 },
      { name: "Mersin", value: 26000000 },
      { name: "Balıkesir", value: 24000000 },
    ]},
  aricilik: { name: "Arıcılık - Bal", category: "hayvancilik", unit: "ton", color: "#f59e0b",
    provinces: [
      { name: "Ordu", value: 17200 },
      { name: "Adana", value: 11800 },
      { name: "Muğla", value: 7200 },
      { name: "Sivas", value: 4200 },
      { name: "Siirt", value: 3200 },
    ]},
  manda: { name: "Manda (Baş)", category: "hayvancilik", unit: "baş", color: "#475569",
    provinces: [
      { name: "Samsun", value: 19400 },
      { name: "Diyarbakır", value: 17000 },
      { name: "İstanbul", value: 14000 },
      { name: "Kayseri", value: 8800 },
      { name: "Bitlis", value: 8000 },
    ]},
  kil_kecisi: { name: "Kıl Keçisi (Baş)", category: "hayvancilik", unit: "baş", color: "#1f2937",
    provinces: [
      { name: "Mersin", value: 820000 },
      { name: "Antalya", value: 640000 },
      { name: "Siirt", value: 640000 },
      { name: "Şırnak", value: 500000 },
      { name: "Mardin", value: 460000 },
    ]},
  tiftik_kecisi: { name: "Tiftik Keçisi (Baş)", category: "hayvancilik", unit: "baş", color: "#cbd5e1",
    provinces: [
      { name: "Ankara", value: 160000 },
      { name: "Siirt", value: 16500 },
      { name: "Eskişehir", value: 10500 },
      { name: "Mardin", value: 10500 },
      { name: "Bolu", value: 7500 },
    ]},
  ipek_bocegi: { name: "İpek Böceği (Koza)", category: "hayvancilik", unit: "ton", color: "#c084fc",
    provinces: [
      { name: "Diyarbakır", value: 86 },
      { name: "Batman", value: 8 },
      { name: "Muğla", value: 6 },
      { name: "Antalya", value: 5 },
      { name: "İzmir", value: 4 },
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
