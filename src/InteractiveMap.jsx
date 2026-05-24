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

const FOREIGN_TRADE_DATA = {
  summary: {
    exports: { total: "273,4", change: "%4,4" },
    imports: { total: "365,4", change: "%6,2" },
    deficit: { total: "92,0" }
  },
  exports: {
    share: "29,6",
    color: "#10b981",
    provinces: [
      { name: "Almanya", value: 22.2, display: "22,2" },
      { name: "Birleşik Krallık", value: 16.8, display: "16,8" },
      { name: "ABD", value: 16.3, display: "16,3" },
      { name: "İtalya", value: 13.2, display: "13,2" },
      { name: "Irak", value: 12.4, display: "12,4" }
    ]
  },
  imports: {
    share: "42,7",
    color: "#ef4444",
    provinces: [
      { name: "Çin", value: 49.6, display: "49,6" },
      { name: "Rusya Federasyonu", value: 42.4, display: "42,4" },
      { name: "Almanya", value: 30.1, display: "30,1" },
      { name: "ABD", value: 18.1, display: "18,1" },
      { name: "İsviçre", value: 15.7, display: "15,7" }
    ]
  },
  exportProducts: {
    color: "#3b82f6",
    items: [
      { name: "Motorlu Kara Taşıtları", value: 5 },
      { name: "Kazan ve Makineler", value: 4 },
      { name: "Elektrikli Makine ve Cihazlar", value: 3 },
      { name: "Kıymetli Taşlar Metaller", value: 2 },
      { name: "Mineral Yağlar ve Yakıtlar (Petrol ve Doğal gaz)", value: 1 }
    ]
  },
  importProducts: {
    color: "#8b5cf6",
    items: [
      { name: "Mineral Yağlar ve Yakıtlar (Petrol ve Doğal gaz)", value: 5 },
      { name: "Kazan ve Makineler", value: 4 },
      { name: "Motorlu Kara Taşıtları", value: 3 },
      { name: "Elektrikli Makine ve Cihazlar", value: 2 },
      { name: "Kıymetli Taşlar Metaller", value: 1 }
    ]
  }
};

const POPULATION_DATA = {
  year: "2025",
  topPopulation: [
    { name: "İstanbul",  value: 15754053, display: "15.754.053" },
    { name: "Ankara",    value: 5910320,  display: "5.910.320"  },
    { name: "İzmir",     value: 4504185,  display: "4.504.185"  },
    { name: "Bursa",     value: 3263011,  display: "3.263.011"  },
    { name: "Antalya",   value: 2777677,  display: "2.777.677"  },
  ],
  bottomPopulation: [
    { name: "Bayburt",   value: 82836,  display: "82.836"  },
    { name: "Tunceli",   value: 85083,  display: "85.083"  },
    { name: "Ardahan",   value: 90392,  display: "90.392"  },
    { name: "Gümüşhane", value: 138807, display: "138.807" },
    { name: "Kilis",     value: 157363, display: "157.363" },
  ],
  topMigrationIn: [
    { name: "İstanbul",  value: 396485, display: "396.485" },
    { name: "Ankara",    value: 202402, display: "202.402" },
    { name: "İzmir",     value: 117889, display: "117.889" },
    { name: "Antalya",   value: 96618,  display: "96.618"  },
    { name: "Bursa",     value: 81656,  display: "81.656"  },
  ],
  bottomMigrationIn: [
    { name: "Ardahan",   value: 4570, display: "4.570" },
    { name: "Bayburt",   value: 5644, display: "5.644" },
    { name: "Hakkari",   value: 6479, display: "6.479" },
    { name: "Tunceli",   value: 6739, display: "6.739" },
    { name: "Kilis",     value: 7503, display: "7.503" },
  ],
  topMigrationOut: [
    { name: "İstanbul",  value: 369453, display: "369.453" },
    { name: "Ankara",    value: 150373, display: "150.373" },
    { name: "İzmir",     value: 102040, display: "102.040" },
    { name: "Antalya",   value: 71999,  display: "71.999"  },
    { name: "Bursa",     value: 66440,  display: "66.440"  },
  ],
  bottomMigrationOut: [
    { name: "Ardahan",   value: 6441, display: "6.441" },
    { name: "Kilis",     value: 8041, display: "8.041" },
    { name: "Bayburt",   value: 8639, display: "8.639" },
    { name: "Tunceli",   value: 8868, display: "8.868" },
    { name: "Bartın",    value: 9569, display: "9.569" },
  ],
  turkeyFertilityAvg: 1.42,
  topFertility: [
    { name: "Şanlıurfa",  value: 3.15, display: "3,15" },
    { name: "Şırnak",     value: 2.53, display: "2,53" },
    { name: "Mardin",     value: 2.23, display: "2,23" },
    { name: "Diyarbakır", value: 2.14, display: "2,14" },
    { name: "Siirt",      value: 2.11, display: "2,11" },
  ],
  bottomFertility: [
    { name: "Bartın",     value: 1.09, display: "1,09" },
    { name: "İzmir",      value: 1.10, display: "1,10" },
    { name: "Eskişehir",  value: 1.11, display: "1,11" },
    { name: "Ankara",     value: 1.11, display: "1,11" },
    { name: "Zonguldak",  value: 1.12, display: "1,12" },
  ],
};

const ELECTRICITY_DATA = {
  year: "2024",
  total: "354.570 GWh",
  sources: [
    { id: "komur",        name: "Kömür",                          percent: 34.7, gwh: 123035, color: "#78716c" },
    { id: "yenilenebilir", name: "Yenilenebilir Enerji & Atıklar", percent: 25.2, gwh: 89352,  color: "#22c55e" },
    { id: "hidrolik",     name: "Hidrolik",                       percent: 21.1, gwh: 74815,  color: "#38bdf8" },
    { id: "dogalgaz",     name: "Doğal Gaz",                      percent: 18.9, gwh: 67014,  color: "#f97316" },
    { id: "sivi",         name: "Sıvı Yakıtlar",                  percent: 0.1,  gwh: 355,    color: "#a78bfa" },
  ]
};

const TOURISM_DATA = {
  year: "2025",
  total: "52.775.055",
  sources: [
    { id: "rusya",       name: "Rusya",       percent: 13.1, count: 6903981, color: "#ef4444" },
    { id: "almanya",     name: "Almanya",     percent: 12.8, count: 6745190, color: "#f59e0b" },
    { id: "ingiltere",   name: "İngiltere",   percent: 8.1,  count: 4270036, color: "#3b82f6" },
    { id: "iran",        name: "İran",        percent: 5.8,  count: 3050195, color: "#10b981" },
    { id: "bulgaristan", name: "Bulgaristan", percent: 5.3,  count: 2808357, color: "#8b5cf6" },
    { id: "polonya",     name: "Polonya",     percent: 3.6,  count: 1914958, color: "#ec4899" },
    { id: "diger",       name: "Diğerleri",   percent: 51.3, count: 27082338, color: "#94a3b8" },
  ]
};

const MINING_CATEGORIES = [
  { id: "metalik", label: "Metalik Madenler", emoji: "⛏️" },
  { id: "enerji", label: "Enerji Kaynakları", emoji: "⚡" },
];

const MINING_PRODUCTS = {
  demir: { name: "Demir", category: "metalik", unit: "rezerv", color: "#dc2626",
    provinces: [
      { name: "Sivas", value: 100 },
      { name: "Malatya", value: 95 },
      { name: "Kayseri", value: 80 },
      { name: "Adana", value: 70 },
      { name: "Balıkesir", value: 60 }
    ]},
  bakir: { name: "Bakır", category: "metalik", unit: "rezerv", color: "#d97706",
    provinces: [
      { name: "Artvin", value: 100 },
      { name: "Kastamonu", value: 90 },
      { name: "Elazığ", value: 85 },
      { name: "Rize", value: 80 },
      { name: "Giresun", value: 60 }
    ]},
  krom: { name: "Krom", category: "metalik", unit: "rezerv", color: "#64748b",
    provinces: [
      { name: "Elazığ", value: 100 },
      { name: "Muğla", value: 95 },
      { name: "Erzincan", value: 85 },
      { name: "Bayburt", value: 80 },
      { name: "Adana", value: 70 }
    ]},
  boksit: { name: "Boksit (Alüminyum)", category: "metalik", unit: "rezerv", color: "#94a3b8",
    provinces: [
      { name: "Konya", value: 100 },
      { name: "Antalya", value: 90 },
      { name: "Gaziantep", value: 70 },
      { name: "Muğla", value: 60 },
      { name: "Hatay", value: 60 }
    ]},
  kursun_cinko: { name: "Kurşun-Çinko", category: "metalik", unit: "rezerv", color: "#475569",
    provinces: [
      { name: "Elazığ", value: 100 },
      { name: "Kayseri", value: 90 },
      { name: "Yozgat", value: 85 },
      { name: "Giresun", value: 75 },
      { name: "Niğde", value: 70 }
    ]},
  altin: { name: "Altın", category: "metalik", unit: "rezerv", color: "#fbbf24",
    provinces: [
      { name: "Uşak", value: 100 },
      { name: "Erzincan", value: 95 },
      { name: "İzmir", value: 90 },
      { name: "Gümüşhane", value: 80 },
      { name: "Artvin", value: 70 }
    ]},
  linyit: { name: "Linyit", category: "enerji", unit: "rezerv", color: "#3f3f46",
    provinces: [
      { name: "Kahramanmaraş", value: 100 },
      { name: "Manisa", value: 95 },
      { name: "Kütahya", value: 90 },
      { name: "Muğla", value: 85 },
      { name: "Ankara", value: 80 }
    ]},
  taskomuru: { name: "Taşkömürü", category: "enerji", unit: "rezerv", color: "#18181b",
    provinces: [
      { name: "Zonguldak", value: 100 },
      { name: "Bartın", value: 90 }
    ]},
  petrol: { name: "Petrol", category: "enerji", unit: "rezerv", color: "#000000",
    provinces: [
      { name: "Batman", value: 100 },
      { name: "Adıyaman", value: 90 },
      { name: "Diyarbakır", value: 85 },
      { name: "Siirt", value: 70 },
      { name: "Şırnak", value: 60 }
    ]},
  dogalgaz: { name: "Doğalgaz", category: "enerji", unit: "rezerv", color: "#0ea5e9",
    provinces: [
      { name: "Kırklareli", value: 100 },
      { name: "Düzce", value: 90 },
      { name: "Tekirdağ", value: 80 },
      { name: "Sakarya", value: 70 }
    ]},
  asfaltit: { name: "Asfaltit", category: "enerji", unit: "rezerv", color: "#27272a",
    provinces: [
      { name: "Şırnak", value: 100 },
      { name: "Mardin", value: 90 }
    ]}
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
  const [activeTab, setActiveTab] = useState("tarim_hayvancilik");
  const [dtSubTab, setDtSubTab] = useState("exp_country");
  const [nufusSubTab, setNufusSubTab] = useState("piramit");
  const [selectedCategory, setSelectedCategory] = useState("tahil");
  const [selectedProduct, setSelectedProduct] = useState("bugday");
  const [madenCategory, setMadenCategory] = useState("metalik");
  const [madenProduct, setMadenProduct] = useState("demir");
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
          <h2>İnteraktif Haritalı Veriler</h2>
          <p>TÜİK verileriyle Türkiye'deki coğrafi ve istatistiksel dağılımları keşfedin</p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="imap-tabs-container">
          <button
            className={`imap-tab-btn ${activeTab === "tarim_hayvancilik" ? "active" : ""}`}
            onClick={() => setActiveTab("tarim_hayvancilik")}
          >
            <span className="imap-tab-emoji">🌾🐄</span>
            Tarım & Hayvancılık
          </button>
          <button
            className={`imap-tab-btn ${activeTab === "dis_ticaret" ? "active" : ""}`}
            onClick={() => setActiveTab("dis_ticaret")}
          >
            <span className="imap-tab-emoji">📈</span>
            Dış Ticaret
          </button>
          <button
            className={`imap-tab-btn ${activeTab === "elektrik_uretimi" ? "active" : ""}`}
            onClick={() => setActiveTab("elektrik_uretimi")}
          >
            <span className="imap-tab-emoji">⚡</span>
            Elektrik Üretimi
          </button>
          <button
            className={`imap-tab-btn ${activeTab === "turizm" ? "active" : ""}`}
            onClick={() => setActiveTab("turizm")}
          >
            <span className="imap-tab-emoji">🧳</span>
            Turizm
          </button>
          <button
            className={`imap-tab-btn ${activeTab === "nufus_yerlesme" ? "active" : ""}`}
            onClick={() => setActiveTab("nufus_yerlesme")}
          >
            <span className="imap-tab-emoji">👥</span>
            Nüfus & Yerleşme
          </button>
          {/* Line break — Madenler goes to its own row */}
          <div className="imap-tabs-break" />
          <button
            className={`imap-tab-btn ${activeTab === "madenler_enerji" ? "active" : ""}`}
            onClick={() => setActiveTab("madenler_enerji")}
          >
            <span className="imap-tab-emoji">🪨</span>
            Madenler
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "tarim_hayvancilik" && (
            <motion.div
              key="tarim_hayvancilik"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="imap-wrapper"
            >
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
                          geographies.map((geo, index) => {
                            const name = geo.properties?.name || geo.properties?.NAME || "";
                            const color = getProvinceColor(name);
                            const isHighlighted = product.provinces.some(
                              p => normalizeProvinceName(p.name) === normalizeProvinceName(name)
                            );
                            return (
                              <Geography
                                key={geo.rsmKey || geo.id || `geo-${index}`}
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
            </motion.div>
          )}

          {activeTab === "dis_ticaret" && (
            <motion.div
              key="dis_ticaret"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="dt-wrapper"
            >
              {/* Summary Cards */}
              <div className="dt-summary-grid">
                <div className="dt-card">
                  <span className="dt-card-label">Toplam İhracat (2025)</span>
                  <div className="dt-card-val exports">
                    {FOREIGN_TRADE_DATA.summary.exports.total} Milyar $
                  </div>
                  <div className="dt-card-change up">
                    ▲ {FOREIGN_TRADE_DATA.summary.exports.change} (Geçen yıla göre)
                  </div>
                </div>

                <div className="dt-card">
                  <span className="dt-card-label">Toplam İthalat (2025)</span>
                  <div className="dt-card-val imports">
                    {FOREIGN_TRADE_DATA.summary.imports.total} Milyar $
                  </div>
                  <div className="dt-card-change warning">
                    ▲ {FOREIGN_TRADE_DATA.summary.imports.change} (Geçen yıla göre)
                  </div>
                </div>

                <div className="dt-card">
                  <span className="dt-card-label">Dış Ticaret Açığı (2025)</span>
                  <div className="dt-card-val deficit">
                    {FOREIGN_TRADE_DATA.summary.deficit.total} Milyar $
                  </div>
                  <div className="dt-card-change" style={{ color: 'var(--text-muted)' }}>
                    İthalat ile İhracat farkı
                  </div>
                </div>
              </div>

              {/* Side-by-Side Charts */}
              <div className="dt-layout-grid">
                {/* Sidebar Navigation */}
                <div className="dt-sidebar">
                  <div className="imap-select-wrap">
                    <label>Veri Seçin</label>
                    <select
                      className="imap-select"
                      value={dtSubTab}
                      onChange={(e) => setDtSubTab(e.target.value)}
                    >
                      <option value="exp_country">🟢 İHRACAT — En Fazla Satış Yapılan 5 Ülke</option>
                      <option value="imp_country">🔴 İTHALAT — En Fazla Alım Yapılan 5 Ülke</option>
                      <option value="exp_product">📦 En Çok İhracat Yapılan 5 Ürün</option>
                      <option value="imp_product">🛒 En Çok İthalat Yapılan 5 Ürün</option>
                    </select>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="dt-content">
                  {dtSubTab === 'exp_country' && (
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="dt-chart-container">
                      <h4 className="dt-section-title">
                        <span style={{ color: '#10b981' }}>🟢</span> İHRACAT — En Fazla Satış Yapılan 5 Ülke
                      </h4>
                      <div className="dt-bars-list">
                        {FOREIGN_TRADE_DATA.exports.provinces.map((item, idx) => {
                          const maxVal = FOREIGN_TRADE_DATA.exports.provinces[0].value;
                          const percent = (item.value / maxVal) * 100;
                          return (
                            <div key={item.name} className="dt-bar-row">
                              <span className="dt-bar-rank">#{idx + 1}</span>
                              <span className="dt-bar-country">{item.name}</span>
                              <div className="dt-bar-track-wrap">
                                <div className="dt-bar-track">
                                  <motion.div
                                    className="dt-bar-fill"
                                    style={{ background: FOREIGN_TRADE_DATA.exports.color }}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${percent}%` }}
                                    transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                                  />
                                </div>
                              </div>
                              <span className="dt-bar-val">{item.display} Milyar $</span>
                            </div>
                          );
                        })}
                      </div>
                      
                      {/* Share indicator */}
                      <div className="dt-share-card">
                        <div className="dt-share-info">
                          <span className="dt-share-label">İlk 5 Ülkenin Toplam Payı</span>
                          <span className="dt-share-desc">Türkiye'nin toplam ihracatı içindeki oranı</span>
                        </div>
                        <span className="dt-share-badge">%{FOREIGN_TRADE_DATA.exports.share}</span>
                      </div>
                    </motion.div>
                  )}

                  {dtSubTab === 'imp_country' && (
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="dt-chart-container">
                      <h4 className="dt-section-title">
                        <span style={{ color: '#ef4444' }}>🔴</span> İTHALAT — En Fazla Alım Yapılan 5 Ülke
                      </h4>
                      <div className="dt-bars-list">
                        {FOREIGN_TRADE_DATA.imports.provinces.map((item, idx) => {
                          const maxVal = FOREIGN_TRADE_DATA.imports.provinces[0].value;
                          const percent = (item.value / maxVal) * 100;
                          return (
                            <div key={item.name} className="dt-bar-row">
                              <span className="dt-bar-rank">#{idx + 1}</span>
                              <span className="dt-bar-country">{item.name}</span>
                              <div className="dt-bar-track-wrap">
                                <div className="dt-bar-track">
                                  <motion.div
                                    className="dt-bar-fill"
                                    style={{ background: FOREIGN_TRADE_DATA.imports.color }}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${percent}%` }}
                                    transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                                  />
                                </div>
                              </div>
                              <span className="dt-bar-val">{item.display} Milyar $</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Share indicator */}
                      <div className="dt-share-card">
                        <div className="dt-share-info">
                          <span className="dt-share-label">İlk 5 Ülkenin Toplam Payı</span>
                          <span className="dt-share-desc">Türkiye'nin toplam ithalatı içindeki oranı</span>
                        </div>
                        <span className="dt-share-badge">%{FOREIGN_TRADE_DATA.imports.share}</span>
                      </div>
                    </motion.div>
                  )}

                  {dtSubTab === 'exp_product' && (
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="dt-chart-container">
                      <h4 className="dt-section-title">
                        <span style={{ color: '#3b82f6' }}>📦</span> En Çok İhracat Yapılan 5 Ürün
                      </h4>
                      <div className="dt-bars-list">
                        {FOREIGN_TRADE_DATA.exportProducts.items.map((item, idx) => {
                          const maxVal = FOREIGN_TRADE_DATA.exportProducts.items[0].value;
                          const percent = (item.value / maxVal) * 100;
                          return (
                            <div key={item.name} className="dt-bar-row">
                              <span className="dt-bar-rank">#{idx + 1}</span>
                              <span className="dt-bar-country product-mode">{item.name}</span>
                              <div className="dt-bar-track-wrap">
                                <div className="dt-bar-track">
                                  <motion.div
                                    className="dt-bar-fill"
                                    style={{ background: FOREIGN_TRADE_DATA.exportProducts.color }}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${percent}%` }}
                                    transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                                  />
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {dtSubTab === 'imp_product' && (
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="dt-chart-container">
                      <h4 className="dt-section-title">
                        <span style={{ color: '#8b5cf6' }}>🛒</span> En Çok İthalat Yapılan 5 Ürün
                      </h4>
                      <div className="dt-bars-list">
                        {FOREIGN_TRADE_DATA.importProducts.items.map((item, idx) => {
                          const maxVal = FOREIGN_TRADE_DATA.importProducts.items[0].value;
                          const percent = (item.value / maxVal) * 100;
                          return (
                            <div key={item.name} className="dt-bar-row">
                              <span className="dt-bar-rank">#{idx + 1}</span>
                              <span className="dt-bar-country product-mode">{item.name}</span>
                              <div className="dt-bar-track-wrap">
                                <div className="dt-bar-track">
                                  <motion.div
                                    className="dt-bar-fill"
                                    style={{ background: FOREIGN_TRADE_DATA.importProducts.color }}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${percent}%` }}
                                    transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                                  />
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
              

            </motion.div>
          )}

          {activeTab === "elektrik_uretimi" && (
            <motion.div
              key="elektrik_uretimi"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="elec-wrapper"
            >
              {/* Header */}
              <div className="elec-header">
                <div className="elec-header-title">
                  <span className="elec-emoji">⚡</span>
                  <div>
                    <h3>Türkiye Elektrik Üretimi</h3>
                  </div>
                </div>
                <div className="elec-total-badge">
                  <span className="elec-total-label">Toplam Üretim</span>
                  <span className="elec-total-val">{ELECTRICITY_DATA.total}</span>
                </div>
              </div>

              <div className="elec-body">
                {/* --- Horizontal Bar Chart --- */}
                <div className="elec-bars-section">
                  <h4 className="elec-section-title">Kaynak Payları (% ve GWh)</h4>
                  <div className="elec-bars-list">
                    {ELECTRICITY_DATA.sources.map((src, idx) => (
                      <div key={src.id} className="elec-bar-row">
                        <div className="elec-bar-meta">
                          <span className="elec-bar-name">{src.name}</span>
                          <div className="elec-bar-nums">
                            <span className="elec-bar-pct" style={{ color: src.color }}>%{src.percent}</span>
                            <span className="elec-bar-gwh">{src.gwh.toLocaleString('tr-TR')} GWh</span>
                          </div>
                        </div>
                        <div className="elec-bar-track">
                          <motion.div
                            className="elec-bar-fill"
                            style={{ background: src.color }}
                            initial={{ width: 0 }}
                            animate={{ width: `${src.percent}%` }}
                            transition={{ duration: 0.9, delay: idx * 0.12, ease: "easeOut" }}
                          />
                          <span className="elec-bar-pct-inline" style={{ color: src.color }}>{src.percent}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* --- Pie Chart with label lines --- */}
                <div className="elec-pie-section">
                  <h4 className="elec-section-title">Pasta Grafik</h4>
                  <div className="elec-pie-wrapper">
                    <svg
                      viewBox="-115 -115 230 230"
                      className="elec-pie-svg"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {(() => {
                        const R = 110;
                        const toRad = deg => (deg * Math.PI) / 180;
                        let angle = -90;
                        return ELECTRICITY_DATA.sources.map((src) => {
                          const slice = (src.percent / 100) * 360;
                          const startA = angle;
                          const endA   = angle + slice;
                          angle = endA;
                          const largeArc = slice > 180 ? 1 : 0;
                          const x1 = Math.cos(toRad(startA)) * R;
                          const y1 = Math.sin(toRad(startA)) * R;
                          const x2 = Math.cos(toRad(endA)) * R;
                          const y2 = Math.sin(toRad(endA)) * R;

                          return (
                            <path
                              key={src.id}
                              d={`M 0 0 L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${R} ${R} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z`}
                              fill={src.color}
                              stroke="#fff"
                              strokeWidth="1.5"
                            />
                          );
                        });
                      })()}
                    </svg>
                    <div className="elec-pie-legend">
                      {ELECTRICITY_DATA.sources.map(src => (
                        <div key={src.id} className="elec-legend-item">
                          <span className="elec-legend-color" style={{ background: src.color }}></span>
                          <span className="elec-legend-label">{src.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {activeTab === "turizm" && (
            <motion.div
              key="turizm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="elec-wrapper"
            >
              {/* Header */}
              <div className="elec-header">
                <div className="elec-header-title">
                  <span className="elec-emoji">🧳</span>
                  <div>
                    <h3>Türkiye Turizm Verileri ({TOURISM_DATA.year})</h3>
                  </div>
                </div>
                <div className="elec-total-badge">
                  <span className="elec-total-label">Toplam Turist</span>
                  <span className="elec-total-val">{TOURISM_DATA.total}</span>
                </div>
              </div>

              <div className="elec-body">
                {/* --- Horizontal Bar Chart --- */}
                <div className="elec-bars-section">
                  <h4 className="elec-section-title">En Çok Turist Gönderen Ülkeler</h4>
                  <div className="elec-bars-list">
                    {TOURISM_DATA.sources.map((src, idx) => (
                      <div key={src.id} className="elec-bar-row">
                        <div className="elec-bar-meta">
                          <span className="elec-bar-name">{src.name}</span>
                          <div className="elec-bar-nums">
                            <span className="elec-bar-pct" style={{ color: src.color }}>%{src.percent}</span>
                            <span className="elec-bar-gwh">{src.count.toLocaleString('tr-TR')} Kişi</span>
                          </div>
                        </div>
                        <div className="elec-bar-track">
                          <motion.div
                            className="elec-bar-fill"
                            style={{ background: src.color }}
                            initial={{ width: 0 }}
                            animate={{ width: `${src.percent}%` }}
                            transition={{ duration: 0.9, delay: idx * 0.12, ease: "easeOut" }}
                          />
                          <span className="elec-bar-pct-inline" style={{ color: src.color }}>{src.percent}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* --- Pie Chart with label lines --- */}
                <div className="elec-pie-section">
                  <h4 className="elec-section-title">Turist Dağılımı (Pasta Grafik)</h4>
                  <div className="elec-pie-wrapper">
                    <svg
                      viewBox="-115 -115 230 230"
                      className="elec-pie-svg"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {(() => {
                        const R = 110;
                        const toRad = deg => (deg * Math.PI) / 180;
                        let angle = -90;
                        return TOURISM_DATA.sources.map((src) => {
                          const slice = (src.percent / 100) * 360;
                          const startA = angle;
                          const endA   = angle + slice;
                          angle = endA;
                          const largeArc = slice > 180 ? 1 : 0;
                          const x1 = Math.cos(toRad(startA)) * R;
                          const y1 = Math.sin(toRad(startA)) * R;
                          const x2 = Math.cos(toRad(endA)) * R;
                          const y2 = Math.sin(toRad(endA)) * R;

                          return (
                            <path
                              key={src.id}
                              d={`M 0 0 L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${R} ${R} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z`}
                              fill={src.color}
                              stroke="#fff"
                              strokeWidth="1.5"
                            />
                          );
                        });
                      })()}
                    </svg>
                    <div className="elec-pie-legend">
                      {TOURISM_DATA.sources.map(src => (
                        <div key={src.id} className="elec-legend-item">
                          <span className="elec-legend-color" style={{ background: src.color }}></span>
                          <span className="elec-legend-label">{src.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
          {activeTab === "nufus_yerlesme" && (
            <motion.div
              key="nufus_yerlesme"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="elec-wrapper"
            >
              {/* Header */}
              <div className="elec-header">
                <div className="elec-header-title">
                  <span className="elec-emoji">👥</span>
                  <div>
                    <h3>Türkiye Nüfus &amp; Yerleşme ({POPULATION_DATA.year})</h3>
                  </div>
                </div>
                <div className="elec-total-badge">
                  <span className="elec-total-label">Toplam Nüfus</span>
                  <span className="elec-total-val">86.092.168</span>
                </div>
              </div>

              {/* Layout: sidebar + content */}
              <div className="dt-layout-grid">
                {/* Sidebar */}
                <div className="dt-sidebar">
                  <div className="imap-select-wrap">
                    <label>Veri Seçin</label>
                    <select
                      className="imap-select"
                      value={nufusSubTab}
                      onChange={(e) => setNufusSubTab(e.target.value)}
                    >
                      <option value="piramit">📊 Nüfus Piramidi</option>
                      <option value="yas_gruplari">👶 Yaş Gruplarına Göre Dağılım</option>
                      <option value="top_pop">🏙️ Nüfusu En Çok 5 İl</option>
                      <option value="bot_pop">🌾 Nüfusu En Az 5 İl</option>
                      <option value="top_mig">📈 En Fazla Göç Alan 5 İl</option>
                      <option value="bot_mig">📉 En Az Göç Alan 5 İl</option>
                      <option value="top_mig_out">📤 En Fazla Göç Veren 5 İl</option>
                      <option value="bot_mig_out">📥 En Az Göç Veren 5 İl</option>
                      <option value="top_fert">🔺 Doğurganlık Hızı En Yüksek 5 İl</option>
                      <option value="bot_fert">🔻 Doğurganlık Hızı En Düşük 5 İl</option>
                    </select>
                  </div>
                </div>

                {/* Content */}
                <div className="dt-content">

                  {nufusSubTab === 'yas_gruplari' && (
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="dt-chart-container" style={{padding:'1.5rem'}}>
                      <h4 className="dt-section-title"><span>👶</span> Yaş Gruplarına Göre Nüfus (2025)</h4>
                      <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-muted)' }}>Milyon kişi</p>
                      <div className="dt-bars-list">
                        {[
                          { label: "0-14 yaş", value: 17.5, max: 60, color: "#059669" },
                          { label: "15-64 yaş", value: 59.0, max: 60, color: "#22c55e" },
                          { label: "65+ yaş", value: 9.6, max: 60, color: "#a3e635" }
                        ].map((item, idx) => (
                          <div key={item.label} className="dt-bar-row">
                            <span className="dt-bar-country" style={{ minWidth: '80px' }}>{item.label}</span>
                            <div className="dt-bar-track-wrap">
                              <div className="dt-bar-track" style={{ height: '32px', borderRadius: '4px' }}>
                                <motion.div className="dt-bar-fill" style={{background: item.color, borderRadius: '4px'}}
                                  initial={{width:0}} animate={{width:`${(item.value / item.max) * 100}%`}}
                                  transition={{duration:0.9, delay: idx*0.12, ease:"easeOut"}} />
                              </div>
                            </div>
                            <span className="dt-bar-val" style={{ fontWeight: 'bold' }}>{item.value.toLocaleString('tr-TR', { minimumFractionDigits: 1 })}</span>
                          </div>
                        ))}
                      </div>
                      <p className="elec-source-note" style={{marginTop:'2rem', fontSize:'1.1rem', fontWeight:'600'}}>Nüfus Artış Hızı Binde 5.0</p>
                    </motion.div>
                  )}

                  {nufusSubTab === 'top_pop' && (() => {
                    const data = POPULATION_DATA.topPopulation;
                    const color = "#3b82f6";
                    return (
                      <motion.div initial={{opacity:0}} animate={{opacity:1}} className="dt-chart-container">
                        <h4 className="dt-section-title"><span style={{color}}>🏙️</span> Nüfusu En Çok 5 İl</h4>
                        <div className="dt-bars-list">
                          {data.map((item, idx) => (
                            <div key={item.name} className="dt-bar-row">
                              <span className="dt-bar-rank">#{idx + 1}</span>
                              <span className="dt-bar-country">{item.name}</span>
                              <div className="dt-bar-track-wrap">
                                <div className="dt-bar-track">
                                  <motion.div className="dt-bar-fill" style={{background: color}}
                                    initial={{width:0}} animate={{width:`${(item.value / data[0].value) * 100}%`}}
                                    transition={{duration:0.9, delay: idx*0.12, ease:"easeOut"}} />
                                </div>
                              </div>
                              <span className="dt-bar-val">{item.display} kişi</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })()}

                  {nufusSubTab === 'bot_pop' && (() => {
                    const data = POPULATION_DATA.bottomPopulation;
                    const color = "#f59e0b";
                    return (
                      <motion.div initial={{opacity:0}} animate={{opacity:1}} className="dt-chart-container">
                        <h4 className="dt-section-title"><span style={{color}}>🌾</span> Nüfusu En Az 5 İl</h4>
                        <div className="dt-bars-list">
                          {data.map((item, idx) => (
                            <div key={item.name} className="dt-bar-row">
                              <span className="dt-bar-rank">#{idx + 1}</span>
                              <span className="dt-bar-country">{item.name}</span>
                              <div className="dt-bar-track-wrap">
                                <div className="dt-bar-track">
                                  <motion.div className="dt-bar-fill" style={{background: color}}
                                    initial={{width:0}} animate={{width:`${(item.value / data[data.length - 1].value) * 100}%`}}
                                    transition={{duration:0.9, delay: idx*0.12, ease:"easeOut"}} />
                                </div>
                              </div>
                              <span className="dt-bar-val">{item.display} kişi</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })()}

                  {nufusSubTab === 'top_mig' && (() => {
                    const data = POPULATION_DATA.topMigrationIn;
                    const color = "#10b981";
                    return (
                      <motion.div initial={{opacity:0}} animate={{opacity:1}} className="dt-chart-container">
                        <h4 className="dt-section-title"><span style={{color}}>📈</span> En Fazla Göç Alan 5 İl</h4>
                        <div className="dt-bars-list">
                          {data.map((item, idx) => (
                            <div key={item.name} className="dt-bar-row">
                              <span className="dt-bar-rank">#{idx + 1}</span>
                              <span className="dt-bar-country">{item.name}</span>
                              <div className="dt-bar-track-wrap">
                                <div className="dt-bar-track">
                                  <motion.div className="dt-bar-fill" style={{background: color}}
                                    initial={{width:0}} animate={{width:`${(item.value / data[0].value) * 100}%`}}
                                    transition={{duration:0.9, delay: idx*0.12, ease:"easeOut"}} />
                                </div>
                              </div>
                              <span className="dt-bar-val">{item.display} kişi</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })()}

                  {nufusSubTab === 'bot_mig' && (() => {
                    const data = POPULATION_DATA.bottomMigrationIn;
                    const color = "#ef4444";
                    return (
                      <motion.div initial={{opacity:0}} animate={{opacity:1}} className="dt-chart-container">
                        <h4 className="dt-section-title"><span style={{color}}>📉</span> En Az Göç Alan 5 İl</h4>
                        <div className="dt-bars-list">
                          {data.map((item, idx) => (
                            <div key={item.name} className="dt-bar-row">
                              <span className="dt-bar-rank">#{idx + 1}</span>
                              <span className="dt-bar-country">{item.name}</span>
                              <div className="dt-bar-track-wrap">
                                <div className="dt-bar-track">
                                  <motion.div className="dt-bar-fill" style={{background: color}}
                                    initial={{width:0}} animate={{width:`${(item.value / data[data.length - 1].value) * 100}%`}}
                                    transition={{duration:0.9, delay: idx*0.12, ease:"easeOut"}} />
                                </div>
                              </div>
                              <span className="dt-bar-val">{item.display} kişi</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })()}

                  {nufusSubTab === 'top_mig_out' && (() => {
                    const data = POPULATION_DATA.topMigrationOut;
                    const color = "#8b5cf6";
                    return (
                      <motion.div initial={{opacity:0}} animate={{opacity:1}} className="dt-chart-container">
                        <h4 className="dt-section-title"><span style={{color}}>📤</span> En Fazla Göç Veren 5 İl</h4>
                        <div className="dt-bars-list">
                          {data.map((item, idx) => (
                            <div key={item.name} className="dt-bar-row">
                              <span className="dt-bar-rank">#{idx + 1}</span>
                              <span className="dt-bar-country">{item.name}</span>
                              <div className="dt-bar-track-wrap">
                                <div className="dt-bar-track">
                                  <motion.div className="dt-bar-fill" style={{background: color}}
                                    initial={{width:0}} animate={{width:`${(item.value / data[0].value) * 100}%`}}
                                    transition={{duration:0.9, delay: idx*0.12, ease:"easeOut"}} />
                                </div>
                              </div>
                              <span className="dt-bar-val">{item.display} kişi</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })()}

                  {nufusSubTab === 'bot_mig_out' && (() => {
                    const data = POPULATION_DATA.bottomMigrationOut;
                    const color = "#f97316";
                    return (
                      <motion.div initial={{opacity:0}} animate={{opacity:1}} className="dt-chart-container">
                        <h4 className="dt-section-title"><span style={{color}}>📥</span> En Az Göç Veren 5 İl</h4>
                        <div className="dt-bars-list">
                          {data.map((item, idx) => (
                            <div key={item.name} className="dt-bar-row">
                              <span className="dt-bar-rank">#{idx + 1}</span>
                              <span className="dt-bar-country">{item.name}</span>
                              <div className="dt-bar-track-wrap">
                                <div className="dt-bar-track">
                                  <motion.div className="dt-bar-fill" style={{background: color}}
                                    initial={{width:0}} animate={{width:`${(item.value / data[data.length - 1].value) * 100}%`}}
                                    transition={{duration:0.9, delay: idx*0.12, ease:"easeOut"}} />
                                </div>
                              </div>
                              <span className="dt-bar-val">{item.display} kişi</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })()}
                  {nufusSubTab === 'top_fert' && (() => {
                    const data = POPULATION_DATA.topFertility;
                    const avg = POPULATION_DATA.turkeyFertilityAvg;
                    const color = "#f97316";
                    return (
                      <motion.div initial={{opacity:0}} animate={{opacity:1}} className="dt-chart-container">
                        <h4 className="dt-section-title"><span style={{color}}>🔺</span> Toplam Doğurganlık Hızı En Yüksek 5 İl</h4>
                        <div className="dt-bars-list">
                          {data.map((item, idx) => (
                            <div key={item.name} className="dt-bar-row">
                              <span className="dt-bar-rank">#{idx + 1}</span>
                              <span className="dt-bar-country">{item.name}</span>
                              <div className="dt-bar-track-wrap">
                                <div className="dt-bar-track">
                                  <motion.div className="dt-bar-fill" style={{background: color}}
                                    initial={{width:0}} animate={{width:`${(item.value / data[0].value) * 100}%`}}
                                    transition={{duration:0.9, delay: idx*0.12, ease:"easeOut"}} />
                                </div>
                              </div>
                              <span className="dt-bar-val">{item.display}</span>
                            </div>
                          ))}
                        </div>
                        <div className="dt-fertility-avg">
                          <span>📊</span> Türkiye Ortalaması: <strong>{avg}</strong> çocuk/kadın
                        </div>
                      </motion.div>
                    );
                  })()}

                  {nufusSubTab === 'bot_fert' && (() => {
                    const data = POPULATION_DATA.bottomFertility;
                    const avg = POPULATION_DATA.turkeyFertilityAvg;
                    const color = "#8b5cf6";
                    return (
                      <motion.div initial={{opacity:0}} animate={{opacity:1}} className="dt-chart-container">
                        <h4 className="dt-section-title"><span style={{color}}>🔻</span> Toplam Doğurganlık Hızı En Düşük 5 İl</h4>
                        <div className="dt-bars-list">
                          {data.map((item, idx) => (
                            <div key={item.name} className="dt-bar-row">
                              <span className="dt-bar-rank">#{idx + 1}</span>
                              <span className="dt-bar-country">{item.name}</span>
                              <div className="dt-bar-track-wrap">
                                <div className="dt-bar-track">
                                  <motion.div className="dt-bar-fill" style={{background: color}}
                                    initial={{width:0}} animate={{width:`${(item.value / data[data.length - 1].value) * 100}%`}}
                                    transition={{duration:0.9, delay: idx*0.12, ease:"easeOut"}} />
                                </div>
                              </div>
                              <span className="dt-bar-val">{item.display}</span>
                            </div>
                          ))}
                        </div>
                        <div className="dt-fertility-avg">
                          <span>📊</span> Türkiye Ortalaması: <strong>{avg}</strong> çocuk/kadın
                        </div>
                      </motion.div>
                    );
                  })()}

                  {nufusSubTab === 'piramit' && (
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="dt-chart-container" style={{padding:'1.5rem'}}>
                      <h4 className="dt-section-title"><span>📊</span> Türkiye Nüfus Piramidi (2025)</h4>
                      <div className="pyramid-legend">
                        <div className="pyramid-legend-item">
                          <span className="pyramid-legend-dot" style={{background:"#e91e8c"}}></span>
                          <span>♀️ Kadın</span>
                        </div>
                        <div className="pyramid-legend-title">Yaş Grubu</div>
                        <div className="pyramid-legend-item">
                          <span className="pyramid-legend-dot" style={{background:"#1565c0"}}></span>
                          <span>Erkek ♂️</span>
                        </div>
                      </div>
                      <div className="pyramid-axis-row">
                        <div className="pyramid-axis-labels">{[10,8,6,4,2,0].map(v=><span key={v}>{v}</span>)}</div>
                        <div className="pyramid-age-spacer"></div>
                        <div className="pyramid-axis-labels">{[0,2,4,6,8,10].map(v=><span key={v}>{v}</span>)}</div>
                      </div>
                      <div className="pyramid-bars">
                        {[
                          { age:"85+",  f:0.9, m:0.5 },
                          { age:"80-84",f:1.2, m:0.8 },
                          { age:"75-79",f:1.6, m:1.2 },
                          { age:"70-74",f:2.2, m:1.8 },
                          { age:"65-69",f:2.8, m:2.4 },
                          { age:"60-64",f:3.4, m:3.1 },
                          { age:"55-59",f:3.9, m:3.7 },
                          { age:"50-54",f:4.1, m:4.0 },
                          { age:"45-49",f:4.3, m:4.2 },
                          { age:"40-44",f:4.7, m:4.6 },
                          { age:"35-39",f:5.2, m:5.2 },
                          { age:"30-34",f:5.5, m:5.6 },
                          { age:"25-29",f:5.3, m:5.5 },
                          { age:"20-24",f:4.8, m:5.0 },
                          { age:"15-19",f:4.4, m:4.6 },
                          { age:"10-14",f:4.7, m:4.9 },
                          { age:"5-9",  f:4.5, m:4.7 },
                          { age:"0-4",  f:4.1, m:4.3 },
                        ].map((row, idx) => (
                          <motion.div key={row.age} className="pyramid-row"
                            initial={{opacity:0}} animate={{opacity:1}}
                            transition={{duration:0.4, delay:idx*0.04}}>
                            <div className="pyramid-side pyramid-left">
                              <motion.div className="pyramid-bar pyramid-bar-female"
                                initial={{width:0}} animate={{width:`${(row.f/10)*100}%`}}
                                transition={{duration:0.8, delay:idx*0.04, ease:"easeOut"}} />
                              <span className="pyramid-pct">{row.f.toFixed(1)}%</span>
                            </div>
                            <div className="pyramid-age-label">{row.age}</div>
                            <div className="pyramid-side pyramid-right">
                              <motion.div className="pyramid-bar pyramid-bar-male"
                                initial={{width:0}} animate={{width:`${(row.m/10)*100}%`}}
                                transition={{duration:0.8, delay:idx*0.04, ease:"easeOut"}} />
                              <span className="pyramid-pct">{row.m.toFixed(1)}%</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      <div className="pyramid-axis-row">
                        <div className="pyramid-axis-labels">{[10,8,6,4,2,0].map(v=><span key={v}>{v}</span>)}</div>
                        <div className="pyramid-age-spacer"></div>
                        <div className="pyramid-axis-labels">{[0,2,4,6,8,10].map(v=><span key={v}>{v}</span>)}</div>
                      </div>
                      <div className="pyramid-axis-unit">(%)</div>
                      <p className="elec-source-note" style={{marginTop:'0.8rem', fontSize:'1.1rem', fontWeight:'600'}}>Ortanca Yaş 34,9</p>
                    </motion.div>
                  )}

                </div>
              </div>
            </motion.div>
          )}
          {activeTab === "madenler_enerji" && (
            <motion.div
              key="madenler_enerji"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="imap-wrapper"
            >
              <div className="imap-left">
                <div className="imap-cats">
                  {MINING_CATEGORIES.map(cat => (
                    <button
                      key={cat.id}
                      className={`imap-cat-btn ${madenCategory === cat.id ? 'active' : ''}`}
                      onClick={() => {
                        setMadenCategory(cat.id);
                        const firstProduct = Object.keys(MINING_PRODUCTS).find(
                          k => MINING_PRODUCTS[k].category === cat.id
                        );
                        if (firstProduct) setMadenProduct(firstProduct);
                      }}
                    >
                      <span>{cat.emoji}</span>
                      {cat.label}
                    </button>
                  ))}
                </div>
                
                <div className="imap-select-wrap">
                  <label>Maden / Enerji Türü</label>
                  <select
                    className="imap-select"
                    value={madenProduct}
                    onChange={(e) => setMadenProduct(e.target.value)}
                  >
                    {Object.keys(MINING_PRODUCTS)
                      .filter(k => MINING_PRODUCTS[k].category === madenCategory)
                      .map(k => (
                        <option key={k} value={k}>
                          {MINING_PRODUCTS[k].name}
                        </option>
                      ))
                    }
                  </select>
                </div>

                <div className="imap-cols-container">
                  <div className="imap-bars-title">Rezerv Potansiyeli</div>
                  <div className="imap-cols">
                    {MINING_PRODUCTS[madenProduct].provinces
                      .sort((a, b) => b.value - a.value)
                      .slice(0, 5)
                      .map((prov, idx) => {
                        const maxVal = Math.max(...MINING_PRODUCTS[madenProduct].provinces.map(p => p.value));
                        const heightPct = (prov.value / maxVal) * 100;
                        return (
                          <div key={prov.name} className="imap-col-item">
                            <div className="imap-col-track">
                              <motion.div 
                                className="imap-col-fill"
                                style={{ backgroundColor: MINING_PRODUCTS[madenProduct].color }}
                                initial={{ height: 0 }}
                                animate={{ height: `${heightPct}%` }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                              />
                            </div>
                            <div className="imap-col-label">
                              <span className="imap-rank">#{idx + 1}</span>
                              <span className="imap-col-name" title={prov.name}>{prov.name}</span>
                            </div>
                          </div>
                        );
                    })}
                  </div>
                </div>
              </div>

              <div className="imap-right">
                <div className="imap-product-badge" style={{ borderColor: MINING_PRODUCTS[madenProduct].color, color: MINING_PRODUCTS[madenProduct].color }}>
                  {MINING_PRODUCTS[madenProduct].name} Haritası
                </div>
                <div className="imap-map-container">
                  <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{
                      scale: 2300,
                      center: [35.2433, 38.9637]
                    }}
                    width={800}
                    height={400}
                  >
                    <Geographies geography={GEO_URL}>
                      {({ geographies }) =>
                        geographies.map((geo) => {
                          const provName = geo.properties.name;
                          const found = MINING_PRODUCTS[madenProduct].provinces.find(
                            p => normalizeProvinceName(p.name) === normalizeProvinceName(provName)
                          );
                          const isClicked = clickedProv === provName;
                          let fillColor = "rgba(0,0,0,0.03)";
                          if (found) {
                            const maxVal = Math.max(...MINING_PRODUCTS[madenProduct].provinces.map(p => p.value));
                            const opacity = Math.max(0.25, found.value / maxVal);
                            const hex = MINING_PRODUCTS[madenProduct].color;
                            const r = parseInt(hex.slice(1,3), 16);
                            const g = parseInt(hex.slice(3,5), 16);
                            const b = parseInt(hex.slice(5,7), 16);
                            fillColor = `rgba(${r},${g},${b},${opacity})`;
                          }

                          return (
                            <Geography
                              key={geo.rsmKey}
                              geography={geo}
                              fill={isClicked ? "#001f3f" : fillColor}
                              stroke="#ffffff"
                              strokeWidth={0.8}
                              style={{
                                default: { outline: "none", transition: "all 250ms" },
                                hover: { fill: "#fbbf24", outline: "none", cursor: "pointer", stroke: "#fff", strokeWidth: 1.5 },
                                pressed: { fill: "#001f3f", outline: "none" }
                              }}
                              onMouseEnter={() => setClickedProv(provName)}
                              onMouseLeave={() => setClickedProv(null)}
                            />
                          );
                        })
                      }
                    </Geographies>
                  </ComposableMap>
                </div>

                <AnimatePresence>
                  {clickedProv && (
                    <motion.div 
                      className="imap-tooltip"
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    >
                      <button className="imap-tooltip-close" onClick={() => setClickedProv(null)}>×</button>
                      <div className="imap-tooltip-title">{clickedProv}</div>
                      {(() => {
                        const product = MINING_PRODUCTS[madenProduct];
                        const found = product.provinces.find(p => normalizeProvinceName(p.name) === normalizeProvinceName(clickedProv));
                        if (found) {
                          return (
                            <>
                              <div className="imap-tooltip-val" style={{ color: product.color }}>
                                {found.value} Puan
                              </div>
                              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                {product.name} Potansiyeli
                              </div>
                            </>
                          );
                        } else {
                          return <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Belirgin bir rezerv bulunmuyor.</div>;
                        }
                      })()}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}
