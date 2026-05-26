export const MINING_MAP_DATA = {
  "uranyum_toryum": {
    "title": "TÜRKİYE URANYUM VE TORYUM YATAKLARININ DAĞILIŞI",
    "legend": [
      {
        "type": "circle",
        "color": "#4ade80",
        "label": "Uranyum Yatakları"
      },
      {
        "type": "circle",
        "color": "#f97316",
        "label": "Toryum Yatakları"
      }
    ],
    "markers": [
      {
        "name": "Manisa - Salihli",
        "coordinates": [28.14, 38.48],
        "type": "uranyum",
        "icon": "circle",
        "color": "#4ade80",
        "offsetX": -8,
        "align": "end"
      },
      {
        "name": "Uşak - Eşme",
        "coordinates": [28.97, 38.4],
        "type": "uranyum",
        "icon": "circle",
        "color": "#4ade80",
        "offsetX": 8,
        "align": "start"
      },
      {
        "name": "Aydın - Demirtepe",
        "coordinates": [27.7, 37.75],
        "type": "uranyum",
        "icon": "circle",
        "color": "#4ade80"
      },
      {
        "name": "Yozgat - Sorgun",
        "coordinates": [35.18, 39.81],
        "type": "uranyum",
        "icon": "circle",
        "color": "#4ade80"
      },
      {
        "name": "Eskişehir - Sivrihisar",
        "coordinates": [31.53, 39.44],
        "type": "toryum",
        "icon": "circle",
        "color": "#f97316"
      }
    ]
  },
  "asfaltit": {
    "title": "TÜRKİYE ASFALTİT YATAKLARININ DAĞILIŞI",
    "legend": [
      {
        "type": "circle",
        "color": "#ef4444",
        "label": "Asfaltit Kuyuları"
      },
      {
        "type": "factory",
        "color": "#475569",
        "label": "Asfaltit Santrali"
      }
    ],
    "markers": [
      {
        "name": "Şırnak",
        "coordinates": [42.45, 37.52],
        "type": "kuyu",
        "icon": "circle",
        "color": "#ef4444",
        "offsetX": -8,
        "align": "end"
      },
      {
        "name": "Hakkari",
        "coordinates": [43.74, 37.57],
        "type": "kuyu",
        "icon": "circle",
        "color": "#ef4444"
      },
      {
        "name": "Silopi",
        "coordinates": [42.47, 37.25],
        "type": "santral",
        "icon": "factory",
        "color": "#475569",
        "offsetX": 8,
        "align": "start"
      }
    ]
  },
  "dogalgaz": {
    "title": "TÜRKİYE DOĞAL GAZ YATAKLARININ DAĞILIŞI",
    "legend": [
      {
        "type": "circle",
        "color": "#ef4444",
        "label": "Doğal Gaz Kuyuları"
      },
      {
        "type": "factory",
        "color": "#8b5cf6",
        "label": "Doğal Gaz Çevrim Santralleri"
      },
      {
        "type": "cylinder",
        "color": "#10b981",
        "label": "Doğal Gaz Depolama Tesisi"
      },
      {
        "type": "circle",
        "color": "#f97316",
        "label": "Yüzer Doğal Gaz Üretim Tesisi (FSRU)"
      }
    ],
    "markers": [
      {
        "name": "Hamitabat",
        "coordinates": [27.22, 41.4],
        "type": "kuyu",
        "icon": "circle",
        "color": "#ef4444",
        "offsetY": -10
      },
      {
        "name": "Hamitabat (Santral)",
        "coordinates": [27.32, 41.4],
        "type": "santral",
        "icon": "factory",
        "color": "#8b5cf6",
        "label": ""
      },
      {
        "name": "Düzce - Akçakoca",
        "coordinates": [31.11, 41.08],
        "type": "kuyu",
        "icon": "circle",
        "color": "#ef4444"
      },
      {
        "name": "Mardin - Çamurlu",
        "coordinates": [40.73, 37.31],
        "type": "kuyu",
        "icon": "circle",
        "color": "#ef4444"
      },
      {
        "name": "Ambarlı",
        "coordinates": [28.68, 40.96],
        "type": "santral",
        "icon": "factory",
        "color": "#8b5cf6",
        "offsetX": 8,
        "align": "start"
      },
      {
        "name": "Bandırma",
        "coordinates": [27.97, 40.35],
        "type": "santral",
        "icon": "factory",
        "color": "#8b5cf6",
        "offsetX": -8,
        "align": "end"
      },
      {
        "name": "Bursa - Ovaakça",
        "coordinates": [29.05, 40.29],
        "type": "santral",
        "icon": "factory",
        "color": "#8b5cf6",
        "offsetX": 8,
        "align": "start"
      },
      {
        "name": "İzmir - Aliağa",
        "coordinates": [26.97, 38.79],
        "type": "santral",
        "icon": "factory",
        "color": "#8b5cf6"
      },
      {
        "name": "Silivri",
        "coordinates": [28.25, 41.07],
        "type": "depo",
        "icon": "cylinder",
        "color": "#10b981",
        "offsetX": -8,
        "align": "end"
      },
      {
        "name": "Tuz Gölü",
        "coordinates": [33.33, 38.73],
        "type": "depo",
        "icon": "cylinder",
        "color": "#10b981"
      },
      {
        "name": "Tuna-1",
        "coordinates": [31.3, 42.4],
        "type": "fsru",
        "icon": "circle",
        "color": "#f97316"
      },
      {
        "name": "Hatay - Dörtyol",
        "coordinates": [36.22, 36.85],
        "type": "fsru",
        "icon": "circle",
        "color": "#f97316"
      }
    ]
  },
  "petrol": {
    "title": "TÜRKİYE PETROL YATAKLARININ DAĞILIŞI",
    "legend": [
      {
        "type": "pumpjack",
        "color": "#1e293b",
        "label": "Petrol Kuyuları"
      },
      {
        "type": "factory",
        "color": "#475569",
        "label": "Petrol Rafinerileri"
      }
    ],
    "markers": [
      {
        "name": "Kırklareli",
        "coordinates": [27.22, 41.73],
        "type": "kuyu",
        "icon": "pumpjack",
        "color": "#1e293b"
      },
      {
        "name": "Adıyaman",
        "coordinates": [38.27, 37.76],
        "type": "kuyu",
        "icon": "pumpjack",
        "color": "#1e293b"
      },
      {
        "name": "Şanlıurfa",
        "coordinates": [38.79, 37.16],
        "type": "kuyu",
        "icon": "pumpjack",
        "color": "#1e293b"
      },
      {
        "name": "Diyarbakır",
        "coordinates": [40.23, 37.91],
        "type": "kuyu",
        "icon": "pumpjack",
        "color": "#1e293b",
        "offsetX": -8,
        "align": "end"
      },
      {
        "name": "Batman",
        "coordinates": [41.13, 37.88],
        "type": "kuyu",
        "icon": "pumpjack",
        "color": "#1e293b",
        "offsetY": -10,
        "offsetX": 8,
        "align": "start"
      },
      {
        "name": "Batman (Rafineri)",
        "coordinates": [41.23, 37.88],
        "type": "rafineri",
        "icon": "factory",
        "color": "#475569",
        "label": ""
      },
      {
        "name": "Mardin",
        "coordinates": [40.73, 37.31],
        "type": "kuyu",
        "icon": "pumpjack",
        "color": "#1e293b"
      },
      {
        "name": "Siirt",
        "coordinates": [41.94, 37.93],
        "type": "kuyu",
        "icon": "pumpjack",
        "color": "#1e293b"
      },
      {
        "name": "Şırnak",
        "coordinates": [42.45, 37.52],
        "type": "kuyu",
        "icon": "pumpjack",
        "color": "#1e293b"
      },
      {
        "name": "İzmit - İpraş",
        "coordinates": [29.74, 40.75],
        "type": "rafineri",
        "icon": "factory",
        "color": "#475569"
      },
      {
        "name": "Kırıkkale - Orta Anadolu",
        "coordinates": [33.51, 39.84],
        "type": "rafineri",
        "icon": "factory",
        "color": "#475569"
      },
      {
        "name": "İzmir - Aliağa",
        "coordinates": [26.97, 38.89],
        "type": "rafineri",
        "icon": "factory",
        "color": "#475569",
        "offsetX": -8,
        "align": "end"
      },
      {
        "name": "İzmir - Star",
        "coordinates": [26.93, 38.65],
        "type": "rafineri",
        "icon": "factory",
        "color": "#475569",
        "offsetX": 8,
        "align": "start"
      },
      {
        "name": "Mersin - Ataş",
        "coordinates": [34.64, 36.8],
        "type": "rafineri",
        "icon": "factory",
        "color": "#475569"
      }
    ]
  },
  "linyit": {
    "title": "TÜRKİYE LİNYİT YATAKLARININ DAĞILIŞI",
    "legend": [
      {
        "type": "circle",
        "color": "#ef4444",
        "label": "Linyit Yatakları"
      },
      {
        "type": "factory",
        "color": "#a16207",
        "label": "Termik Santraller"
      }
    ],
    "markers": [
      {
        "name": "Saray",
        "coordinates": [27.92, 41.44],
        "type": "yatak",
        "icon": "circle",
        "color": "#ef4444"
      },
      {
        "name": "Milas",
        "coordinates": [27.78, 37.31],
        "type": "yatak",
        "icon": "circle",
        "color": "#ef4444"
      },
      {
        "name": "Tavşanlı",
        "coordinates": [29.48, 39.54],
        "type": "yatak",
        "icon": "circle",
        "color": "#ef4444",
        "offsetX": 8,
        "align": "start"
      },
      {
        "name": "Ilgın",
        "coordinates": [31.91, 38.28],
        "type": "yatak",
        "icon": "circle",
        "color": "#ef4444"
      },
      {
        "name": "Beyşehir",
        "coordinates": [31.72, 37.67],
        "type": "yatak",
        "icon": "circle",
        "color": "#ef4444"
      },
      {
        "name": "Beypazarı",
        "coordinates": [31.92, 40.14],
        "type": "yatak",
        "icon": "circle",
        "color": "#ef4444",
        "offsetX": 8,
        "align": "start"
      },
      {
        "name": "Mengen",
        "coordinates": [32.06, 40.88],
        "type": "yatak",
        "icon": "circle",
        "color": "#ef4444"
      },
      {
        "name": "Dodurga",
        "coordinates": [34.72, 40.82],
        "type": "yatak",
        "icon": "circle",
        "color": "#ef4444"
      },
      {
        "name": "Sorgun",
        "coordinates": [35.18, 39.81],
        "type": "yatak",
        "icon": "circle",
        "color": "#ef4444"
      },
      {
        "name": "Gölbaşı",
        "coordinates": [37.82, 37.78],
        "type": "yatak",
        "icon": "circle",
        "color": "#ef4444"
      },
      {
        "name": "Kangal",
        "coordinates": [37.38, 39.23],
        "type": "yatak",
        "icon": "circle",
        "color": "#ef4444"
      },
      {
        "name": "Karlıova",
        "coordinates": [41.01, 39.29],
        "type": "yatak",
        "icon": "circle",
        "color": "#ef4444"
      },
      {
        "name": "Horasan",
        "coordinates": [42.16, 40.04],
        "type": "yatak",
        "icon": "circle",
        "color": "#ef4444"
      },
      {
        "name": "Oltu",
        "coordinates": [41.99, 40.54],
        "type": "yatak",
        "icon": "circle",
        "color": "#ef4444"
      },
      {
        "name": "Çan",
        "coordinates": [27.05, 40.03],
        "type": "yatak",
        "icon": "circle",
        "color": "#ef4444",
        "offsetY": -8,
        "offsetX": -8,
        "align": "end"
      },
      {
        "name": "Çan (Santral)",
        "coordinates": [27.15, 40.03],
        "type": "santral",
        "icon": "factory",
        "color": "#a16207",
        "label": ""
      },
      {
        "name": "Soma",
        "coordinates": [27.6, 39.18],
        "type": "yatak",
        "icon": "circle",
        "color": "#ef4444",
        "offsetY": -8
      },
      {
        "name": "Soma (Santral)",
        "coordinates": [27.7, 39.18],
        "type": "santral",
        "icon": "factory",
        "color": "#a16207",
        "label": ""
      },
      {
        "name": "Seyitömer",
        "coordinates": [29.87, 39.57],
        "type": "yatak",
        "icon": "circle",
        "color": "#ef4444",
        "offsetY": -8,
        "offsetX": 8,
        "align": "start"
      },
      {
        "name": "Seyitömer (Santral)",
        "coordinates": [29.97, 39.57],
        "type": "santral",
        "icon": "factory",
        "color": "#a16207",
        "label": ""
      },
      {
        "name": "Tunçbilek",
        "coordinates": [29.46, 39.62],
        "type": "yatak",
        "icon": "circle",
        "color": "#ef4444",
        "offsetY": -8,
        "offsetX": -8,
        "align": "end"
      },
      {
        "name": "Tunçbilek (Santral)",
        "coordinates": [29.56, 39.62],
        "type": "santral",
        "icon": "factory",
        "color": "#a16207",
        "label": ""
      },
      {
        "name": "Yatağan",
        "coordinates": [28.14, 37.34],
        "type": "yatak",
        "icon": "circle",
        "color": "#ef4444",
        "offsetY": -8
      },
      {
        "name": "Yatağan (Santral)",
        "coordinates": [28.24, 37.34],
        "type": "santral",
        "icon": "factory",
        "color": "#a16207",
        "label": ""
      },
      {
        "name": "Çayırhan",
        "coordinates": [31.7, 40.09],
        "type": "yatak",
        "icon": "circle",
        "color": "#ef4444",
        "offsetY": -8,
        "offsetX": -8,
        "align": "end"
      },
      {
        "name": "Çayırhan (Santral)",
        "coordinates": [31.8, 40.09],
        "type": "santral",
        "icon": "factory",
        "color": "#a16207",
        "label": ""
      },
      {
        "name": "Elbistan",
        "coordinates": [37.19, 38.2],
        "type": "yatak",
        "icon": "circle",
        "color": "#ef4444",
        "offsetY": -8
      },
      {
        "name": "Elbistan (Santral)",
        "coordinates": [37.29, 38.2],
        "type": "santral",
        "icon": "factory",
        "color": "#a16207",
        "label": ""
      }
    ]
  },
  "demir": {
    "title": "TÜRKİYE DEMİR YATAKLARININ DAĞILIŞI",
    "legend": [
      {
        "type": "circle",
        "color": "#f97316",
        "label": "Küçük Demir Yatakları"
      },
      {
        "type": "circle",
        "color": "#ef4444",
        "label": "Büyük Demir Yatakları"
      },
      {
        "type": "factory",
        "color": "#475569",
        "label": "Demir - Çelik Fabrikaları"
      }
    ],
    "markers": [
      {
        "name": "Eymir",
        "coordinates": [27.8, 39.5],
        "type": "kucuk",
        "icon": "circle",
        "color": "#f97316",
        "offsetX": -8,
        "align": "end"
      },
      {
        "name": "Şamlı",
        "coordinates": [27.9, 39.7],
        "type": "kucuk",
        "icon": "circle",
        "color": "#f97316",
        "offsetX": 8,
        "align": "start"
      },
      {
        "name": "Çamdağ",
        "coordinates": [30.6, 40.8],
        "type": "kucuk",
        "icon": "circle",
        "color": "#f97316"
      },
      {
        "name": "Çavdar",
        "coordinates": [27.7, 37.6],
        "type": "kucuk",
        "icon": "circle",
        "color": "#f97316"
      },
      {
        "name": "EREĞLİ",
        "coordinates": [31.4, 41.3],
        "type": "fabrika",
        "icon": "factory",
        "color": "#475569",
        "offsetY": -26
      },
      {
        "name": "KARABÜK",
        "coordinates": [32.6, 41.2],
        "type": "fabrika",
        "icon": "factory",
        "color": "#475569"
      },
      {
        "name": "Kesikköprü",
        "coordinates": [33.4, 39.4],
        "type": "buyuk",
        "icon": "circle",
        "color": "#ef4444"
      },
      {
        "name": "Attepe Feke - Mansurlu Havzası",
        "coordinates": [36, 38],
        "type": "buyuk",
        "icon": "circle",
        "color": "#ef4444"
      },
      {
        "name": "İSKENDERUN",
        "coordinates": [36.2, 36.6],
        "type": "fabrika",
        "icon": "factory",
        "color": "#475569"
      },
      {
        "name": "Divriği A-B Kafa",
        "coordinates": [38.1, 39.4],
        "type": "buyuk",
        "icon": "circle",
        "color": "#ef4444",
        "offsetX": 8,
        "offsetY": -26,
        "align": "start"
      },
      {
        "name": "Hasançelebi",
        "coordinates": [37.8, 38.8],
        "type": "buyuk",
        "icon": "circle",
        "color": "#ef4444",
        "offsetX": -8,
        "offsetY": -26,
        "align": "end"
      },
      {
        "name": "Hekimhan",
        "coordinates": [38.1, 38.8],
        "type": "buyuk",
        "icon": "circle",
        "color": "#ef4444",
        "offsetX": 8,
        "offsetY": 14,
        "align": "start"
      },
      {
        "name": "Avnik",
        "coordinates": [40.5, 38.9],
        "type": "buyuk",
        "icon": "circle",
        "color": "#ef4444",
        "offsetX": 8,
        "align": "start"
      }
    ]
  },
  "bakir": {
    "title": "TÜRKİYE BAKIR YATAKLARININ DAĞILIŞI",
    "legend": [
      {
        "type": "circle",
        "color": "#f97316",
        "label": "Küçük Bakır Yatakları"
      },
      {
        "type": "circle",
        "color": "#ef4444",
        "label": "Büyük Bakır Yatakları"
      },
      {
        "type": "factory",
        "color": "#475569",
        "label": "Bakır İşletmeleri"
      }
    ],
    "markers": [
      {
        "name": "Kastamonu - Küre",
        "coordinates": [33.7, 41.8],
        "type": "buyuk",
        "icon": "circle",
        "color": "#ef4444"
      },
      {
        "name": "SAMSUN",
        "coordinates": [36.3, 41.3],
        "type": "fabrika",
        "icon": "factory",
        "color": "#475569"
      },
      {
        "name": "Hasköy Kurşunlu",
        "coordinates": [34.8, 40.6],
        "type": "kucuk",
        "icon": "circle",
        "color": "#f97316"
      },
      {
        "name": "RİZE Çayeli Madenköy (Yatak)",
        "coordinates": [40.7, 41],
        "type": "kucuk",
        "icon": "circle",
        "color": "#f97316"
      },
      {
        "name": "RİZE Çayeli Madenköy (İşletme)",
        "coordinates": [40.8, 41],
        "type": "fabrika",
        "icon": "factory",
        "color": "#475569",
        "label": ""
      },
      {
        "name": "ARTVİN Murgul (Yatak)",
        "coordinates": [41.6, 41.2],
        "type": "buyuk",
        "icon": "circle",
        "color": "#ef4444"
      },
      {
        "name": "ARTVİN Murgul (İşletme)",
        "coordinates": [41.7, 41.2],
        "type": "fabrika",
        "icon": "factory",
        "color": "#475569",
        "label": ""
      },
      {
        "name": "MADEN Ergani (Yatak)",
        "coordinates": [39.7, 38.3],
        "type": "buyuk",
        "icon": "circle",
        "color": "#ef4444"
      },
      {
        "name": "MADEN Ergani (İşletme)",
        "coordinates": [39.6, 38.3],
        "type": "fabrika",
        "icon": "factory",
        "color": "#475569",
        "label": ""
      },
      {
        "name": "Siirt",
        "coordinates": [42, 38.1],
        "type": "kucuk",
        "icon": "circle",
        "color": "#f97316"
      }
    ]
  },
  "boksit": {
    "title": "TÜRKİYE BOKSİT YATAKLARININ DAĞILIŞI",
    "legend": [
      "Küçük Boksit Yatakları",
      "Büyük Boksit Yatakları",
      "Boksit İşletmeleri"
    ],
    "markers": [
      {
        "name": "Zonguldak",
        "lat": 41.45,
        "lng": 31.79,
        "type": "Büyük Boksit Yatakları"
      },
      {
        "name": "Akseki",
        "lat": 37.05,
        "lng": 31.79,
        "type": "Büyük Boksit Yatakları",
        "offsetX": -8,
        "align": "end"
      },
      {
        "name": "Seydişehir",
        "lat": 37.42,
        "lng": 31.85,
        "type": "Boksit İşletmeleri",
        "offsetX": 8,
        "align": "start"
      },
      {
        "name": "Payas",
        "lat": 36.75,
        "lng": 36.2,
        "type": "Küçük Boksit Yatakları"
      }
    ]
  },
  "krom": {
    "title": "TÜRKİYE KROM YATAKLARININ DAĞILIŞI",
    "legend": [
      "Küçük Krom Yatakları",
      "Büyük Krom Yatakları",
      "Ferro-Krom İşletmeleri"
    ],
    "markers": [
      {
        "name": "Orhaneli",
        "lat": 39.9,
        "lng": 29,
        "type": "Küçük Krom Yatakları",
        "offsetX": -8,
        "align": "end"
      },
      {
        "name": "Harmancık",
        "lat": 39.8,
        "lng": 29.1,
        "type": "Küçük Krom Yatakları",
        "offsetX": 8,
        "align": "start"
      },
      {
        "name": "Eskişehir",
        "lat": 39.77,
        "lng": 30.52,
        "type": "Büyük Krom Yatakları"
      },
      {
        "name": "Muğla - Fethiye",
        "lat": 36.6,
        "lng": 29.1,
        "type": "Büyük Krom Yatakları",
        "offsetX": 8,
        "align": "start"
      },
      {
        "name": "Köyceğiz",
        "lat": 36.9,
        "lng": 28.6,
        "type": "Büyük Krom Yatakları",
        "offsetX": -8,
        "align": "end"
      },
      {
        "name": "ANTALYA",
        "lat": 36.9,
        "lng": 30.7,
        "type": "Ferro-Krom İşletmeleri"
      },
      {
        "name": "Karsantı",
        "lat": 37.6,
        "lng": 35.4,
        "type": "Büyük Krom Yatakları"
      },
      {
        "name": "Kayseri - Pınarbaşı",
        "lat": 38.7,
        "lng": 36,
        "type": "Büyük Krom Yatakları"
      },
      {
        "name": "Gaziantep",
        "lat": 37,
        "lng": 37.3,
        "type": "Küçük Krom Yatakları"
      },
      {
        "name": "Sivas",
        "lat": 39.7,
        "lng": 37,
        "type": "Küçük Krom Yatakları"
      },
      {
        "name": "Erzincan",
        "lat": 39.7,
        "lng": 39.5,
        "type": "Küçük Krom Yatakları"
      },
      {
        "name": "Bayburt - Kopdağı",
        "lat": 40,
        "lng": 40.5,
        "type": "Büyük Krom Yatakları"
      },
      {
        "name": "Elazığ - Guleman",
        "lat": 38.5,
        "lng": 39.8,
        "type": "Büyük Krom Yatakları",
        "offsetX": 8,
        "align": "start"
      },
      {
        "name": "ELAZIĞ",
        "lat": 38.6,
        "lng": 39.2,
        "type": "Ferro-Krom İşletmeleri",
        "offsetX": -8,
        "align": "end"
      }
    ]
  },
  "bor": {
    "title": "TÜRKİYE BOR YATAKLARININ DAĞILIŞI",
    "legend": [
      "Küçük Bor Yatakları",
      "Büyük Bor Yatakları",
      "Boraks İşletmeleri"
    ],
    "markers": [
      {
        "name": "BANDIRMA",
        "lat": 40.35,
        "lng": 27.97,
        "type": "Boraks İşletmeleri",
        "offsetX": 0,
        "offsetY": -26
      },
      {
        "name": "Bigadiç",
        "lat": 39.4,
        "lng": 28.1,
        "type": "Büyük Bor Yatakları",
        "offsetX": -8,
        "offsetY": 14,
        "align": "end"
      },
      {
        "name": "Susurluk",
        "lat": 39.9,
        "lng": 28.1,
        "type": "Büyük Bor Yatakları",
        "offsetX": -8,
        "offsetY": 14,
        "align": "end"
      },
      {
        "name": "Mustafakemalpaşa",
        "lat": 40,
        "lng": 28.4,
        "type": "Küçük Bor Yatakları",
        "offsetX": 8,
        "offsetY": -26,
        "align": "start"
      },
      {
        "name": "Kestelek",
        "lat": 39.9,
        "lng": 28.4,
        "type": "Küçük Bor Yatakları",
        "offsetX": 8,
        "offsetY": 14,
        "align": "start"
      },
      {
        "name": "Kütahya - Emet",
        "lat": 39.3,
        "lng": 29.2,
        "type": "Büyük Bor Yatakları",
        "offsetX": 0,
        "offsetY": -26
      },
      {
        "name": "Eskişehir - Seyitgazi",
        "lat": 39.4,
        "lng": 30.2,
        "type": "Büyük Bor Yatakları",
        "offsetX": -8,
        "offsetY": -26,
        "align": "end"
      },
      {
        "name": "KIRKA",
        "lat": 39.3,
        "lng": 30.3,
        "type": "Boraks İşletmeleri",
        "offsetX": 8,
        "offsetY": 14,
        "align": "start"
      }
    ]
  },
  "mermer": {
    "title": "TÜRKİYE MERMER YATAKLARININ DAĞILIŞI",
    "legend": [
      "Başlıca Mermer Yatakları"
    ],
    "markers": [
      {
        "name": "Marmara Adası",
        "lat": 40.6,
        "lng": 27.6,
        "type": "Başlıca Mermer Yatakları"
      },
      {
        "name": "Balıkesir",
        "lat": 39.6,
        "lng": 27.8,
        "type": "Başlıca Mermer Yatakları"
      },
      {
        "name": "İzmir",
        "lat": 38.4,
        "lng": 27.1,
        "type": "Başlıca Mermer Yatakları"
      },
      {
        "name": "Bilecik",
        "lat": 40.1,
        "lng": 29.9,
        "type": "Başlıca Mermer Yatakları"
      },
      {
        "name": "Eskişehir",
        "lat": 39.7,
        "lng": 30.5,
        "type": "Başlıca Mermer Yatakları"
      },
      {
        "name": "Afyon",
        "lat": 38.7,
        "lng": 30.5,
        "type": "Başlıca Mermer Yatakları"
      },
      {
        "name": "Antalya",
        "lat": 36.9,
        "lng": 30.7,
        "type": "Başlıca Mermer Yatakları"
      },
      {
        "name": "Kırşehir",
        "lat": 39.1,
        "lng": 34.1,
        "type": "Başlıca Mermer Yatakları"
      },
      {
        "name": "Ordu",
        "lat": 40.9,
        "lng": 37.8,
        "type": "Başlıca Mermer Yatakları"
      },
      {
        "name": "Gümüşhane",
        "lat": 40.4,
        "lng": 39.4,
        "type": "Başlıca Mermer Yatakları",
        "offsetX": -8,
        "align": "end"
      },
      {
        "name": "Trabzon",
        "lat": 40.9,
        "lng": 39.8,
        "type": "Başlıca Mermer Yatakları",
        "offsetX": 8,
        "align": "start"
      },
      {
        "name": "Elazığ",
        "lat": 38.6,
        "lng": 39.2,
        "type": "Başlıca Mermer Yatakları"
      },
      {
        "name": "Diyarbakır",
        "lat": 37.9,
        "lng": 40.2,
        "type": "Başlıca Mermer Yatakları"
      }
    ]
  },
  "barit": {
    "title": "TÜRKİYE BARİT YATAKLARININ DAĞILIŞI",
    "legend": [
      "Küçük Barit Yatakları",
      "Büyük Barit Yatakları",
      "Barit Unu İşletmeleri"
    ],
    "markers": [
      {
        "name": "İzmit",
        "lat": 40.7,
        "lng": 29.9,
        "type": "Büyük Barit Yatakları"
      },
      {
        "name": "Eğirdir Gölü",
        "lat": 38,
        "lng": 30.8,
        "type": "Büyük Barit Yatakları",
        "offsetX": -8,
        "align": "end"
      },
      {
        "name": "Beyşehir Gölü",
        "lat": 37.7,
        "lng": 31.5,
        "type": "Büyük Barit Yatakları",
        "offsetX": 8,
        "align": "start"
      },
      {
        "name": "ANTALYA",
        "lat": 36.9,
        "lng": 30.7,
        "type": "Barit Unu İşletmeleri"
      },
      {
        "name": "Alanya",
        "lat": 36.5,
        "lng": 32,
        "type": "Büyük Barit Yatakları"
      },
      {
        "name": "Kahramanmaraş",
        "lat": 37.5,
        "lng": 36.9,
        "type": "Büyük Barit Yatakları",
        "offsetX": 8,
        "align": "start"
      },
      {
        "name": "OSMANİYE",
        "lat": 37,
        "lng": 36.2,
        "type": "Barit Unu İşletmeleri",
        "offsetX": -8,
        "align": "end"
      }
    ]
  },
  "zimpara_tasi": {
    "title": "Zımpara Taşı Yatakları",
    "legend": [
      {
        "label": "Zımpara Taşı Yatakları",
        "icon": "circle",
        "color": "#FF6B6B"
      }
    ],
    "markers": [
      {
        "position": [27.1, 38.4],
        "label": "İzmir",
        "type": "Zımpara Taşı Yatakları"
      },
      {
        "position": [27.8, 37.8],
        "label": "Aydın",
        "type": "Zımpara Taşı Yatakları"
      },
      {
        "position": [27.4, 37],
        "label": "Bodrum",
        "type": "Zımpara Taşı Yatakları",
        "offsetX": -8,
        "align": "end"
      },
      {
        "position": [27.8, 37.3],
        "label": "Milas",
        "type": "Zımpara Taşı Yatakları",
        "offsetX": 8,
        "align": "start"
      },
      {
        "position": [28.3, 36.8],
        "label": "Marmaris",
        "type": "Zımpara Taşı Yatakları"
      },
      {
        "position": [32, 36.5],
        "label": "Alanya",
        "type": "Zımpara Taşı Yatakları"
      }
    ]
  },
  "fosfat": {
    "title": "Fosfat Yatakları",
    "legend": [
      {
        "label": "Fosfat Yatakları",
        "icon": "circle",
        "color": "#FF6B6B"
      },
      {
        "label": "Fosfat İşleme Tesisi",
        "icon": "factory",
        "color": "#8B4513"
      }
    ],
    "markers": [
      {
        "position": [38, 37],
        "label": "Aşağı Fırat Bölgesi",
        "type": "Fosfat Yatakları"
      },
      {
        "position": [41, 38.6],
        "label": "Bingöl - Bitlis Bölgesi",
        "type": "Fosfat Yatakları"
      },
      {
        "position": [40.5, 37.5],
        "label": "Mardin - Mazıdağ Bölgesi",
        "type": "Fosfat Yatakları",
        "offsetX": -8,
        "align": "end"
      },
      {
        "position": [40.6, 37.5],
        "label": "Mazıdağ",
        "type": "Fosfat İşleme Tesisi",
        "offsetX": 8,
        "align": "start"
      }
    ]
  },
  "asbest": {
    "title": "Asbest (Amyant) Yatakları",
    "legend": [
      {
        "label": "Asbest Yatakları",
        "icon": "circle",
        "color": "#FF6B6B"
      }
    ],
    "markers": [
      {
        "position": [27.9, 39.6],
        "label": "Balıkesir",
        "type": "Asbest Yatakları"
      },
      {
        "position": [30.5, 39.8],
        "label": "Eskişehir",
        "type": "Asbest Yatakları"
      },
      {
        "position": [35.8, 40.6],
        "label": "Amasya",
        "type": "Asbest Yatakları"
      },
      {
        "position": [37, 39.7],
        "label": "Sivas",
        "type": "Asbest Yatakları"
      },
      {
        "position": [36.2, 36.2],
        "label": "Hatay",
        "type": "Asbest Yatakları"
      }
    ]
  },
  "altin": {
    "title": "Altın Yatakları",
    "legend": [
      {
        "label": "Altın Yatakları",
        "icon": "circle",
        "color": "#FF6B6B"
      }
    ],
    "markers": [
      {
        "position": [26.7, 40.3],
        "label": "Lapseki",
        "type": "Altın Yatakları"
      },
      {
        "position": [30.2, 40],
        "label": "Söğüt",
        "type": "Altın Yatakları"
      },
      {
        "position": [27.1, 39.1],
        "label": "Ovacık",
        "type": "Altın Yatakları",
        "offsetX": 8,
        "align": "start"
      },
      {
        "position": [27, 39.2],
        "label": "Çukuralan",
        "type": "Altın Yatakları",
        "offsetX": -8,
        "align": "end"
      },
      {
        "position": [27.1, 38.5],
        "label": "Arapdağ",
        "type": "Altın Yatakları",
        "offsetX": 8,
        "align": "start"
      },
      {
        "position": [27, 38.3],
        "label": "Efemçukuru",
        "type": "Altın Yatakları",
        "offsetX": -8,
        "align": "end"
      },
      {
        "position": [28, 38.5],
        "label": "Sart",
        "type": "Altın Yatakları",
        "offsetX": 8,
        "align": "start"
      },
      {
        "position": [29.1, 38.5],
        "label": "Kışladağ",
        "type": "Altın Yatakları",
        "offsetX": 8,
        "align": "start"
      },
      {
        "position": [28.3, 39],
        "label": "Kızıltepe",
        "type": "Altın Yatakları",
        "offsetX": -8,
        "align": "end"
      },
      {
        "position": [31.1, 39.5],
        "label": "Kaymaz",
        "type": "Altın Yatakları"
      },
      {
        "position": [35, 38.9],
        "label": "Himmetdede",
        "type": "Altın Yatakları",
        "offsetX": 8,
        "align": "start"
      },
      {
        "position": [34.9, 38.8],
        "label": "Mahmatlar",
        "type": "Altın Yatakları",
        "offsetX": -8,
        "align": "end"
      },
      {
        "position": [37.5, 40.9],
        "label": "Altıntepe",
        "type": "Altın Yatakları"
      },
      {
        "position": [39.4, 40.4],
        "label": "Midi",
        "type": "Altın Yatakları",
        "offsetX": 8,
        "offsetY": 14,
        "align": "start"
      },
      {
        "position": [39.4, 40.5],
        "label": "Gümüşhane - Mastra",
        "type": "Altın Yatakları",
        "offsetX": -8,
        "offsetY": -26,
        "align": "end"
      },
      {
        "position": [38.5, 39.4],
        "label": "İliç - Çöpler",
        "type": "Altın Yatakları",
        "offsetX": 8,
        "align": "start"
      },
      {
        "position": [38.1, 39.2],
        "label": "Bakırtepe",
        "type": "Altın Yatakları",
        "offsetX": -8,
        "align": "end"
      },
      {
        "position": [41.8, 41.2],
        "label": "Artvin - Cerattepe",
        "type": "Altın Yatakları"
      }
    ]
  },
  "kursun_cinko": {
    "title": "TÜRKİYE KURŞUN - ÇİNKO YATAKLARININ DAĞILIŞI",
    "legend": [
      {
        "label": "Kurşun - Çinko Yatakları",
        "type": "point"
      }
    ],
    "markers": [
      {
        "name": "Handeresi",
        "coordinates": [27.3, 39.8],
        "offsetX": -8,
        "align": "end"
      },
      {
        "name": "Balya",
        "coordinates": [27.5, 39.7],
        "offsetX": 8,
        "align": "start"
      },
      {
        "name": "Amasya - Gümüşhacıköy",
        "coordinates": [35.3, 40.8]
      },
      {
        "name": "Yozgat - Akdağmadeni",
        "coordinates": [35.8, 39.6]
      },
      {
        "name": "Kayseri - Zamantı",
        "coordinates": [35.6, 38.2]
      },
      {
        "name": "Bolkarlar",
        "coordinates": [34.6, 37.4]
      },
      {
        "name": "Koyulhisar",
        "coordinates": [37.8, 40.3],
        "offsetX": -8,
        "align": "end"
      },
      {
        "name": "Köprübaşı",
        "coordinates": [38, 40.8],
        "offsetX": 8,
        "align": "start"
      },
      {
        "name": "Rize - Madenköy",
        "coordinates": [40.7, 40.9]
      },
      {
        "name": "Elazığ - Keban",
        "coordinates": [38.7, 38.8]
      }
    ]
  },
  "trona": {
    "title": "TÜRKİYE TRONA (SODA KÜLÜ) YATAKLARININ DAĞILIŞI",
    "legend": [
      {
        "label": "Trona (Soda Külü) Yatakları",
        "type": "point"
      },
      {
        "label": "Soda Külü İşletmeleri",
        "type": "factory"
      }
    ],
    "markers": [
      {
        "name": "Beypazarı",
        "coordinates": [31.9, 40.1],
        "offsetX": -12,
        "offsetY": 14,
        "align": "end"
      },
      {
        "name": "Sincan",
        "coordinates": [32.5, 39.9],
        "offsetX": -10,
        "offsetY": -26,
        "align": "end"
      },
      {
        "name": "Kahramankazan",
        "coordinates": [32.6, 40.2],
        "offsetX": 8,
        "offsetY": -26,
        "align": "start"
      },
      {
        "name": "ANKARA",
        "coordinates": [32.8, 39.9],
        "type": "factory",
        "offsetX": 12,
        "offsetY": 14,
        "align": "start"
      }
    ]
  },
  "volfram": {
    "title": "TÜRKİYE VOLFRAM (TUNGSTEN) YATAKLARININ DAĞILIŞI",
    "legend": [
      {
        "label": "Wolfram (Tungsten) Yatakları",
        "type": "point"
      }
    ],
    "markers": [
      {
        "name": "Bursa - Uludağ",
        "coordinates": [29.1, 40]
      },
      {
        "name": "Niğde - Gümüşler",
        "coordinates": [34.7, 37.9]
      },
      {
        "name": "Elazığ - Keban",
        "coordinates": [38.7, 38.8]
      }
    ]
  },
  "pomza": {
    "title": "TÜRKİYE POMZA TAŞI YATAKLARININ DAĞILIŞI",
    "legend": [
      {
        "label": "Pomza Taşı Yatakları",
        "type": "point"
      }
    ],
    "markers": [
      {
        "name": "Nevşehir",
        "coordinates": [34.7, 38.6],
        "offsetX": -8,
        "align": "end"
      },
      {
        "name": "Kayseri",
        "coordinates": [35.4, 38.7],
        "offsetX": 8,
        "align": "start"
      },
      {
        "name": "Bitlis",
        "coordinates": [42.1, 38.4],
        "offsetX": -8,
        "align": "end"
      },
      {
        "name": "Tatvan",
        "coordinates": [42.5, 38.8],
        "offsetX": 8,
        "align": "start"
      },
      {
        "name": "Van",
        "coordinates": [43.4, 38.5]
      }
    ]
  },
  "perlit": {
    "title": "TÜRKİYE PERLİT YATAKLARININ DAĞILIŞI",
    "legend": [
      {
        "label": "Perlit Yatakları",
        "type": "point"
      }
    ],
    "markers": [
      {
        "name": "Balıkesir",
        "coordinates": [27.8, 39.6],
        "offsetX": -8,
        "align": "end"
      },
      {
        "name": "Balıkesir",
        "coordinates": [28, 39.8],
        "offsetX": 8,
        "align": "start"
      },
      {
        "name": "İzmir",
        "coordinates": [27.1, 38.4],
        "offsetX": -8,
        "align": "end"
      },
      {
        "name": "İzmir",
        "coordinates": [27.3, 38],
        "offsetX": 8,
        "align": "start"
      },
      {
        "name": "Ankara",
        "coordinates": [32.5, 40],
        "offsetX": -8,
        "align": "end"
      },
      {
        "name": "Ankara",
        "coordinates": [33, 40],
        "offsetX": 8,
        "align": "start"
      },
      {
        "name": "Erzincan",
        "coordinates": [39.5, 39.7]
      },
      {
        "name": "Erzurum",
        "coordinates": [40.8, 40],
        "offsetX": -8,
        "align": "end"
      },
      {
        "name": "Erzurum",
        "coordinates": [41.5, 40.1],
        "offsetX": 8,
        "align": "start"
      },
      {
        "name": "Kars",
        "coordinates": [43.1, 40.6]
      },
      {
        "name": "Bitlis",
        "coordinates": [42.1, 38.4],
        "offsetX": -8,
        "align": "end"
      },
      {
        "name": "Bitlis",
        "coordinates": [42.5, 38.8],
        "offsetX": 8,
        "align": "start"
      },
      {
        "name": "Van",
        "coordinates": [43.4, 38.5]
      }
    ]
  },
  "kukurt_manganez": {
    "title": "TÜRKİYE KÜKÜRT VE MANGANEZ YATAKLARININ DAĞILIŞI",
    "legend": [
      {
        "type": "circle",
        "color": "#84cc16",
        "label": "Kükürt Yatakları"
      },
      {
        "type": "circle",
        "color": "#f97316",
        "label": "Manganez Yatakları"
      }
    ],
    "markers": [
      {
        "name": "Isparta - Keçiborlu",
        "coordinates": [30.29, 37.94],
        "type": "kukurt",
        "icon": "circle",
        "color": "#84cc16"
      },
      {
        "name": "Zonguldak",
        "coordinates": [31.79, 41.45],
        "type": "manganez",
        "icon": "circle",
        "color": "#f97316"
      },
      {
        "name": "Trabzon",
        "coordinates": [39.73, 41],
        "type": "manganez",
        "icon": "circle",
        "color": "#f97316",
        "offsetX": -8,
        "align": "end"
      },
      {
        "name": "Rize",
        "coordinates": [40.52, 41.02],
        "type": "manganez",
        "icon": "circle",
        "color": "#f97316",
        "offsetX": 8,
        "align": "start"
      },
      {
        "name": "Ardahan",
        "coordinates": [42.7, 41.11],
        "type": "manganez",
        "icon": "circle",
        "color": "#f97316"
      },
      {
        "name": "Denizli",
        "coordinates": [29.09, 37.78],
        "type": "manganez",
        "icon": "circle",
        "color": "#f97316"
      }
    ]
  },
  "tas_komuru": {
    "title": "TÜRKİYE TAŞ KÖMÜRÜ YATAKLARININ DAĞILIŞI",
    "legend": [
      {
        "type": "circle",
        "color": "#f97316",
        "label": "Taşkömürü Yatakları"
      },
      {
        "type": "factory",
        "color": "#475569",
        "label": "Termik Santraller"
      }
    ],
    "markers": [
      {
        "name": "Kozlu - Karadon",
        "coordinates": [31.75, 41.42],
        "type": "tas_komuru",
        "icon": "circle",
        "color": "#f97316",
        "offsetX": -8,
        "align": "end"
      },
      {
        "name": "Amasra",
        "coordinates": [32.38, 41.74],
        "type": "tas_komuru",
        "icon": "circle",
        "color": "#f97316"
      },
      {
        "name": "İnebolu",
        "coordinates": [33.76, 41.97],
        "type": "tas_komuru",
        "icon": "circle",
        "color": "#f97316"
      },
      {
        "name": "ZONGULDAK - ÇATALAĞZI",
        "coordinates": [31.89, 41.51],
        "type": "santral",
        "icon": "factory",
        "color": "#475569",
        "offsetX": 8,
        "offsetY": -26,
        "align": "start"
      },
      {
        "name": "ADANA - SUGÖZÜ",
        "coordinates": [35.87, 36.83],
        "type": "santral",
        "icon": "factory",
        "color": "#475569"
      }
    ]
  }
};