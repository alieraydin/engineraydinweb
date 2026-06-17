import React, { useState, useEffect } from 'react';
import { 
  Video, 
  BookOpen, 
  Calendar, 
  Share2, 
  ExternalLink, 
  Menu, 
  X, 
  Award,
  Map,
  ChevronRight,
  Clock,
  ArrowUp,
  FileText,
  PieChart,
  BarChart,
  Download,
  Globe
} from 'lucide-react';

// Custom Brand Icons (Since Lucide deprecated them)
const YoutubeIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
  </svg>
);

const InstagramIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
import { motion, AnimatePresence } from 'framer-motion';
import enginImg from './assets/engin-eraydin-transparent.png';
import eventEskisehirImg from './assets/events/eskisehir_fuar.jpg';
import eventDiyarbakirImg from '/diyarbakir-kamp.jpg';
import kpssThumb from './assets/playlist-kpss-2026.png';
import hizliTekrarThumb from './assets/playlist-hizli-tekrar.jpg';
import haritalarThumb from './assets/playlist-haritalar.png';
import denemeThumb from './assets/playlist-deneme.jpg';
import gorsellerleThumb from './assets/playlist-gorsellerle.jpg';
import garantiThumb from './assets/playlist-garanti.jpg';
import deneme20Thumb from './assets/playlist-deneme-20.png';
import { Analytics } from '@vercel/analytics/react';
import InteractiveMap from './InteractiveMap';
import HeroSlider from './components/HeroSlider';
import QuizModal from './components/QuizModal';
import quizData from './data/quizData.json';
import yerSekilleriQuizData from './data/yerSekilleriQuizData.json';
import iklimQuizData from './data/iklimQuizData.json';
import bolgelerQuizData from './data/bolgelerQuizData.json';
import maden_enerjiQuizData from './data/maden_enerjiQuizData.json';
import sanayi_ticaretQuizData from './data/sanayi_ticaretQuizData.json';
import tarim_hayvancilikQuizData from './data/tarim_hayvancilikQuizData.json';
import ulasim_turizmQuizData from './data/ulasim_turizmQuizData.json';
import beseri_cografyaQuizData from './data/beseri_cografyaQuizData.json';
import toprak_su_bitkiQuizData from './data/toprak_su_bitkiQuizData.json';
import cevre_afetlerQuizData from './data/cevre_afetlerQuizData.json';
import './App.css';




const PLAYLISTS = [
  { 
    id: 1, 
    title: "2026 YENİ KPSS - AGS - Coğrafya Konu Anlatımı Videoları", 
    thumbnail: kpssThumb, 
    videoCount: 92,
    link: "https://www.youtube.com/playlist?list=PLPlLdubQ1fMs-O0_vwxL7bH-S7Bi4jKsu" 
  },
  { 
    id: 2, 
    title: "2026 KPSS & AGS - Coğrafya Hızlı Tekrar ve Soru Çözümü", 
    thumbnail: hizliTekrarThumb, 
    videoCount: 11,
    link: "https://www.youtube.com/playlist?list=PLgW2uP-bSUO1FTyQm4eTIDKdFzEFy6063" 
  },
  { 
    id: 3, 
    title: "2026 KPSS - AGS - Haritalarla Genel Tekrar", 
    thumbnail: haritalarThumb, 
    videoCount: 10,
    link: "https://www.youtube.com/playlist?list=PLgW2uP-bSUO0nClVbVLn2Hph2roOx-N0S" 
  },
  { 
    id: 4, 
    title: "2026 KPSS & AGS - Coğrafya Branş Denemeleri", 
    thumbnail: denemeThumb, 
    videoCount: 15,
    link: "https://www.youtube.com/playlist?list=PLgW2uP-bSUO3n2hcwignzoH1aAvT1rwze" 
  },
  { 
    id: 5, 
    title: "Paraf Akademi - TYT Görsellerle Coğrafya", 
    thumbnail: gorsellerleThumb, 
    videoCount: 20,
    link: "https://www.youtube.com/playlist?list=PLgW2uP-bSUO0vZa3f5D1o-GOAeIxUim79" 
  },
  { 
    id: 6, 
    title: "Paraf Akademi - TYT Konu Özetli Soru Bankası", 
    thumbnail: garantiThumb, 
    videoCount: 20,
    link: "https://www.youtube.com/playlist?list=PLgW2uP-bSUO04sFZpBvpsxWiSnqymtA88" 
  },
  { 
    id: 7, 
    title: "Paraf Akademi - TYT Sosyal Bilimler 20 Deneme Çözümleri", 
    thumbnail: deneme20Thumb, 
    videoCount: 13,
    link: "https://www.youtube.com/playlist?list=PLgW2uP-bSUO2-AKyXzy3GW7eEPiY3W_8v" 
  },
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const ColoredEarthIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="#3b82f6" />
    <path fill="#22c55e" d="M32 2C21.7 2 12.6 7.1 7.2 14.6c2.8 1.4 6 2 9.3 1.6 3.6-.4 6.8-2.2 8.9-5 1.5 1.7 3.8 2.8 6.2 2.8 5.2 0 9.4-4.2 9.4-9.4 0-.9-.1-1.8-.4-2.6h-8.6z"/>
    <path fill="#22c55e" d="M57.6 16.5c-2.3-4.6-5.8-8.5-10.1-11.2 1.4 2.8.9 6.2-1.3 8.5-2.8 2.9-7.2 3-10.2.3-2.1-1.9-5.1-2.5-7.9-1.5-3.8 1.4-6.2 5.1-6.2 9.1 0 3.3 1.9 6.2 4.9 7.7 3.6 1.8 7.9 1.6 11.3-.6 2.3-1.5 4.9-2 7.6-1.5 4.8.9 8.7 4 10.3 8.6 1.4 3.9.7 8.1-1.7 11.5-2 2.9-5 5-8.4 6-2.5.7-5.1.5-7.5-.6-3.8-1.7-6.5-5.2-7.1-9.3-.5-3.3.4-6.6 2.6-9.1 2.5-2.8 6.4-3.8 9.9-2.5 1.7.6 3.6.4 5.2-.6 2.4-1.5 3.6-4.4 2.8-7.2-.6-2.3-2.6-4.1-5-4.5-3.6-.6-7.1.6-9.3 3.1-2.8 3.1-4.2 7.4-3.7 11.6.4 3.5 2 6.7 4.5 9 1.9 1.8 4.3 3 6.9 3.5 1.7.3 3.5.4 5.2.2 13.9-1.5 24.6-13.3 24.6-27.6 0-3-.4-5.9-1.2-8.6z"/>
    <path fill="#22c55e" d="M12.6 49.3c-4.2-4.1-7.1-9.5-8.3-15.5.9 2.5 2.6 4.7 4.9 6 3 1.7 6.6 1.8 9.7.3 2.6-1.2 4.5-3.5 5.2-6.3.7-2.7.2-5.5-1.3-7.8-1.5-2.3-3.9-3.9-6.6-4.4-2.8-.5-5.6.1-8 1.6-1.3.8-2.3 1.8-3.1 3-1.1-6.1.1-12.4 3.4-17.7C3.3 14.3.4 22.8.4 32c0 11.8 6.8 22 16.7 27-2.6-2.5-4.3-5.9-4.5-9.7z"/>
  </svg>
);

const ColoredMountainIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="12" fill="#bfdbfe"/>
    <polygon points="10,52 28,20 46,52" fill="#94a3b8"/>
    <polygon points="26,52 42,24 58,52" fill="#64748b"/>
    <polygon points="28,20 24,32 32,32" fill="white"/>
    <polygon points="42,24 38,35 46,35" fill="white"/>
    <polygon points="4,58 22,16 40,58" fill="#92400e"/>
    <polygon points="22,16 17,30 27,30" fill="white"/>
    <rect x="0" y="54" width="64" height="10" rx="0" fill="#4ade80"/>
  </svg>
);

{/* ☁️ İklim */}
const ColoredClimateIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="12" fill="#e0f2fe"/>
    {/* Sun */}
    <circle cx="44" cy="20" r="10" fill="#fbbf24"/>
    <line x1="44" y1="6" x2="44" y2="2" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="44" y1="38" x2="44" y2="34" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="58" y1="20" x2="62" y2="20" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="30" y1="20" x2="26" y2="20" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="54" y1="10" x2="57" y2="7" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="34" y1="30" x2="31" y2="33" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Cloud */}
    <ellipse cx="26" cy="36" rx="16" ry="10" fill="white"/>
    <ellipse cx="36" cy="34" rx="12" ry="9" fill="white"/>
    <ellipse cx="20" cy="38" rx="10" ry="7" fill="#bfdbfe"/>
    <ellipse cx="32" cy="40" rx="18" ry="10" fill="#93c5fd"/>
    {/* Rain */}
    <line x1="22" y1="52" x2="20" y2="60" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
    <line x1="32" y1="52" x2="30" y2="60" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
    <line x1="42" y1="52" x2="40" y2="60" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

{/* 🗺️ Bölgeler */}
const ColoredRegionsIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="12" fill="#f3e8ff"/>
    <rect x="4" y="4" width="56" height="56" rx="8" fill="#e9d5ff"/>
    {/* Map regions */}
    <path d="M4 4 L32 4 L32 30 L4 30 Z" fill="#a78bfa"/>
    <path d="M32 4 L60 4 L60 20 L32 20 Z" fill="#8b5cf6"/>
    <path d="M32 20 L60 20 L60 40 L40 40 L32 30 Z" fill="#7c3aed"/>
    <path d="M4 30 L32 30 L40 40 L20 50 L4 60 Z" fill="#6d28d9"/>
    <path d="M40 40 L60 40 L60 60 L20 60 L20 50 Z" fill="#5b21b6"/>
    {/* Grid lines */}
    <line x1="32" y1="4" x2="32" y2="60" stroke="white" strokeWidth="1.5" opacity="0.5"/>
    <line x1="4" y1="30" x2="60" y2="30" stroke="white" strokeWidth="1.5" opacity="0.5"/>
    {/* Pin */}
    <circle cx="46" cy="14" r="5" fill="#fbbf24"/>
    <circle cx="46" cy="14" r="2.5" fill="white"/>
  </svg>
);

{/* ⛏️ Maden & Enerji */}
const ColoredMiningIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="12" fill="#f1f5f9"/>
    {/* Lightning bolt */}
    <polygon points="36,4 20,34 30,34 28,60 44,30 34,30" fill="#f59e0b"/>
    <polygon points="36,4 20,34 30,34 28,60 44,30 34,30" fill="#fbbf24" opacity="0.6"/>
    {/* Coal/rock */}
    <ellipse cx="16" cy="52" rx="12" ry="8" fill="#475569"/>
    <ellipse cx="16" cy="50" rx="10" ry="6" fill="#64748b"/>
    <ellipse cx="14" cy="49" rx="4" ry="3" fill="#94a3b8" opacity="0.4"/>
  </svg>
);

{/* 🏭 Sanayi & Ticaret */}
const ColoredIndustryIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="12" fill="#fff7ed"/>
    {/* Factory building */}
    <rect x="4" y="36" width="56" height="24" rx="2" fill="#f97316"/>
    <rect x="4" y="44" width="56" height="16" rx="2" fill="#ea580c"/>
    {/* Chimneys */}
    <rect x="10" y="24" width="8" height="16" rx="2" fill="#64748b"/>
    <rect x="24" y="20" width="8" height="20" rx="2" fill="#475569"/>
    <rect x="38" y="26" width="8" height="14" rx="2" fill="#64748b"/>
    {/* Smoke */}
    <circle cx="14" cy="20" r="4" fill="#d1d5db" opacity="0.7"/>
    <circle cx="16" cy="14" r="3" fill="#e5e7eb" opacity="0.5"/>
    <circle cx="28" cy="16" r="4" fill="#d1d5db" opacity="0.7"/>
    <circle cx="42" cy="22" r="3" fill="#e5e7eb" opacity="0.5"/>
    {/* Windows */}
    <rect x="10" y="48" width="8" height="12" rx="1" fill="#fbbf24"/>
    <rect x="28" y="48" width="8" height="12" rx="1" fill="#fbbf24"/>
    <rect x="46" y="48" width="10" height="12" rx="1" fill="#fbbf24"/>
  </svg>
);

{/* 🌾 Tarım & Hayvancılık */}
const ColoredAgricultureIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="12" fill="#f0fdf4"/>
    {/* Ground */}
    <rect x="0" y="50" width="64" height="14" rx="0" fill="#86efac"/>
    <rect x="0" y="54" width="64" height="10" rx="0" fill="#4ade80"/>
    {/* Wheat stalks */}
    <line x1="16" y1="54" x2="16" y2="28" stroke="#92400e" strokeWidth="2"/>
    <ellipse cx="16" cy="22" rx="4" ry="7" fill="#fbbf24" transform="rotate(-10 16 22)"/>
    <ellipse cx="12" cy="26" rx="3" ry="5" fill="#fbbf24" transform="rotate(-25 12 26)"/>
    <ellipse cx="20" cy="26" rx="3" ry="5" fill="#fbbf24" transform="rotate(15 20 26)"/>

    <line x1="32" y1="54" x2="32" y2="22" stroke="#92400e" strokeWidth="2"/>
    <ellipse cx="32" cy="16" rx="4" ry="7" fill="#f59e0b"/>
    <ellipse cx="27" cy="20" rx="3" ry="5" fill="#f59e0b" transform="rotate(-20 27 20)"/>
    <ellipse cx="37" cy="20" rx="3" ry="5" fill="#f59e0b" transform="rotate(20 37 20)"/>

    <line x1="48" y1="54" x2="48" y2="26" stroke="#92400e" strokeWidth="2"/>
    <ellipse cx="48" cy="20" rx="4" ry="7" fill="#fbbf24" transform="rotate(5 48 20)"/>
    <ellipse cx="43" cy="24" rx="3" ry="5" fill="#fbbf24" transform="rotate(-15 43 24)"/>
    <ellipse cx="53" cy="24" rx="3" ry="5" fill="#fbbf24" transform="rotate(15 53 24)"/>
  </svg>
);

{/* 🚗 Ulaşım & Turizm */}
const ColoredTransportIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="12" fill="#e0f2fe"/>
    {/* Road */}
    <path d="M0 52 L64 52 L64 64 L0 64 Z" fill="#64748b"/>
    <path d="M0 52 L64 52 L64 58 L0 58 Z" fill="#475569"/>
    <rect x="8" y="54" width="12" height="2" rx="1" fill="white" opacity="0.6"/>
    <rect x="28" y="54" width="12" height="2" rx="1" fill="white" opacity="0.6"/>
    <rect x="48" y="54" width="12" height="2" rx="1" fill="white" opacity="0.6"/>
    {/* Plane */}
    <path d="M8 20 L56 8 L50 22 L30 26 L24 38 L18 36 L22 24 Z" fill="#0ea5e9"/>
    <path d="M38 18 L50 14 L48 22 Z" fill="#7dd3fc"/>
    <path d="M8 20 L24 30 L22 24 Z" fill="#7dd3fc"/>
  </svg>
);

{/* 👥 Beşeri Coğrafya */}
const ColoredHumanIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="12" fill="#fdf2f8"/>
    {/* Person 1 */}
    <circle cx="20" cy="18" r="8" fill="#ec4899"/>
    <path d="M6 44 Q6 30 20 30 Q34 30 34 44 Z" fill="#ec4899"/>
    {/* Person 2 */}
    <circle cx="44" cy="20" r="7" fill="#f9a8d4"/>
    <path d="M32 46 Q32 34 44 34 Q56 34 56 46 Z" fill="#f9a8d4"/>
    {/* Ground line */}
    <rect x="4" y="54" width="56" height="3" rx="1.5" fill="#fce7f3"/>
    {/* Connecting dots - population growth */}
    <circle cx="20" cy="56" r="2" fill="#ec4899"/>
    <circle cx="30" cy="56" r="2" fill="#ec4899"/>
    <circle cx="40" cy="56" r="2" fill="#ec4899"/>
    <circle cx="50" cy="56" r="2" fill="#ec4899"/>
  </svg>
);

{/* 🌿 Toprak, Su, Bitki */}
const ColoredNatureIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="12" fill="#ecfdf5"/>
    {/* Water */}
    <path d="M0 48 Q16 42 32 48 Q48 54 64 48 L64 64 L0 64 Z" fill="#60a5fa"/>
    <path d="M0 52 Q16 46 32 52 Q48 58 64 52 L64 64 L0 64 Z" fill="#3b82f6"/>
    {/* Tree trunk */}
    <rect x="28" y="32" width="8" height="20" rx="2" fill="#92400e"/>
    {/* Tree canopy */}
    <circle cx="32" cy="22" r="16" fill="#22c55e"/>
    <circle cx="20" cy="28" r="10" fill="#16a34a"/>
    <circle cx="44" cy="28" r="10" fill="#16a34a"/>
    <circle cx="32" cy="14" r="10" fill="#4ade80"/>
  </svg>
);

{/* 🌊 Çevre & Doğal Afetler */}
const ColoredDisasterIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="12" fill="#fef2f2"/>
    {/* Warning triangle */}
    <polygon points="32,6 4,58 60,58" fill="#fca5a5"/>
    <polygon points="32,12 8,56 56,56" fill="#f87171"/>
    {/* Exclamation */}
    <rect x="29" y="24" width="6" height="18" rx="3" fill="white"/>
    <circle cx="32" cy="48" r="3.5" fill="white"/>
    {/* Lightning on side */}
    <polygon points="8,14 2,26 8,24 4,38 14,22 8,24" fill="#fbbf24"/>
    <polygon points="56,14 50,26 56,24 52,38 62,22 56,24" fill="#fbbf24"/>
  </svg>
);

const BOOKS = [
  {
    id: 12,
    title: "2026 KPSS Coğrafya Konu Konu Kritik 10ar Soru +5 Kritik Deneme Sınavı",
    price: "79,50 TL",
    image: "/kritik-deneme.jpeg",
    link: "https://www.yargiyayinevi.com/yargi-yayinlari-2026-kpss-cografya-konu-konu-kritik-10ar-soru-5-kritik-deneme-sinavi"
  },
  {
    id: 1,
    title: "2026 KPSS Coğrafya Konu Anlatımı (Engin Eraydın)",
    price: "195,00 TL",
    image: "https://www.yargiyayinevi.com/yargi-yayinlari-62826-58-B.jpg",
    link: "https://www.yargiyayinevi.com/yargi-yayinlari-2026-kpss-genel-kultur-cografya-konu-anlatimi-engin-eraydin"
  },
  {
    id: 2,
    title: "2026 MEB-AGS Coğrafya Konu Anlatımı (Engin Eraydın)",
    price: "195,00 TL",
    image: "https://www.yargiyayinevi.com/yargi-yayinlari-62820-58-B.jpg",
    link: "https://www.yargiyayinevi.com/yargi-yayinlari-2026-meb-ags-cografya-konu-anlatimi-engin-eraydin"
  },
  {
    id: 3,
    title: "2026 MEB-AGS Coğrafya Seti (3'lü Set)",
    price: "666,50 TL",
    image: "https://www.yargiyayinevi.com/yargi-yayinlari-62796-58-B.jpg",
    link: "https://www.yargiyayinevi.com/yargi-yayinlari-2026-meb-ags-cografya-soru-bankasi-video-ders-notlari-haritalarla-cografya-seti-engin-eraydin"
  },
  {
    id: 4,
    title: "2026 MEB-AGS Coğrafya Soru Bankası ve Ders Notları",
    price: "455,70 TL",
    image: "https://www.yargiyayinevi.com/yargi-yayinlari-62669-58-B.jpg",
    link: "https://www.yargiyayinevi.com/yargi-yayinlari-2026-meb-ags-ogretmen-adaylari-icin-cografya-soru-bankasi-video-ders-notlari-seti-engin-eraydin"
  },
  {
    id: 5,
    title: "2026 MEB-AGS Coğrafya Video Ders Notları",
    price: "243,75 TL",
    image: "https://www.yargiyayinevi.com/yargi-yayinlari-62666-58-B.jpg",
    link: "https://www.yargiyayinevi.com/yargi-yayinlari-2026-meb-ags-ogretmen-adaylari-icin-cografya-video-ders-notlari-engin-eraydin"
  },
  {
    id: 6,
    title: "2026 KPSS Coğrafya Full Set (Soru-Deneme-Ders-Harita)",
    price: "833,90 TL",
    image: "https://www.yargiyayinevi.com/yargi-yayinlari-62645-58-B.jpg",
    link: "https://www.yargiyayinevi.com/yargi-yayinlari-2026-kpss-genel-kultur-cografya-soru-deneme-video-ders-harita-seti-engin-eraydin"
  },
  {
    id: 7,
    title: "2026 KPSS Coğrafya Soru Bankası - Deneme - Ders Notları",
    price: "623,10 TL",
    image: "https://www.yargiyayinevi.com/yargi-yayinlari-62644-58-B.jpg",
    link: "https://www.yargiyayinevi.com/yargi-yayinlari-2026-kpss-genel-kultur-cografya-soru-bankasi-33-deneme-video-ders-notlari-seti-engin-eraydin"
  },
  {
    id: 8,
    title: "2026 KPSS Coğrafya Soru Bankası ve Ders Notları Seti",
    price: "480,50 TL",
    image: "https://www.yargiyayinevi.com/yargi-yayinlari-62643-58-B.jpg",
    link: "https://www.yargiyayinevi.com/yargi-yayinlari-2026-kpss-genel-kultur-cografya-soru-bankasi-ve-video-ders-notlari-seti-engin-eraydin"
  },
  {
    id: 9,
    title: "TYT Coğrafya Garanti Konular Soru Bankası",
    price: "249,00 TL",
    image: "https://wsrv.nl/?url=https://cdn.bkmkitap.com/tyt-cografya-garanti-konular-soru-bankasi-13917832-93-B.jpg",
    link: "https://www.bkmkitap.com/tyt-cografya-garanti-konular-soru-bankasi"
  },
  {
    id: 10,
    title: "TYT Sosyal Bilimler 20 Deneme",
    price: "349,00 TL",
    image: "https://wsrv.nl/?url=https://cdn.bkmkitap.com/tyt-sosyal-bilimler-20-deneme-945897-14006371-94-B.jpg",
    link: "https://www.bkmkitap.com/tyt-sosyal-bilimler-20-deneme-945897"
  },
  {
    id: 11,
    title: "TYT Görsellerle Coğrafya Video Ders Kitabı",
    price: "249,00 TL",
    image: "https://wsrv.nl/?url=https://cdn.bkmkitap.com/tyt-gorsellerle-cografya-video-ders-kitabi-13998052-93-B.jpg",
    link: "https://www.bkmkitap.com/tyt-gorsellerle-cografya-video-ders-kitabi"
  }
];

const DOCUMENTS = [
  {
    id: 1,
    title: "2026 KPSS - AGS ENGİN ERAYDIN COĞRAFYA HARİTALARLA GENEL TEKRAR",
    subtitle: "Haritalarla Coğrafya Pdf'i",
    link: "https://drive.google.com/file/d/18MU78pzeV-epWZAPk4JTUIrGyTFaQFVa/view"
  },
  {
    id: 2,
    title: "2026 KPSS - AGS ENGİN ERAYDIN COĞRAFYA HIZLI TEKRAR & SORU ÇÖZÜMÜ",
    subtitle: "Konu Anlatım Pdf'leri",
    link: "https://drive.google.com/file/d/128XEy7Ti7u_8hXu3-JGGYkzVx6alEPF8/view?usp=drive_link"
  },
  {
    id: 3,
    title: "2026 KPSS - AGS ENGİN ERAYDIN COĞRAFYA HIZLI TEKRAR & SORU ÇÖZÜMÜ",
    subtitle: "Soru Çözüm Pdf'leri",
    link: "https://drive.google.com/file/d/140L_AcmigMQJY10mQupySx1T_7vCkRnG/view?usp=drive_link"
  },
  {
    id: 4,
    title: "TÜİK 2025 TARIM İSTATİSTİKLERİ",
    subtitle: "Güncel Veriler ve Grafikler",
    link: "https://drive.google.com/file/d/1-qRQrGQqYJS8i8yXpT_fzHLUGkchTCpN/view?usp=drive_link"
  },
  {
    id: 5,
    title: "TÜRKİYE'NİN COĞRAFİ KONUMU",
    subtitle: "Konu Özetleri ve Haritalar",
    link: "https://drive.google.com/file/d/1OfJl99RUVUDVMHExdezvOBplH2rEx08I/view?usp=drive_link",
    infographic: "/cografi_konum_infografik.png"
  },
  {
    id: 6,
    title: "TÜRKİYE'NİN DAĞLARI",
    subtitle: "Oluşum ve Dağılış Haritaları",
    link: "https://drive.google.com/file/d/1TFixuiIO3NlNDooE9_TgqgJ1u6-gqA5c/view?usp=drive_link",
    infographic: "/daglar_infografik.png"
  },
  {
    id: 7,
    title: "TÜRKİYE'NİN PLATOLARI",
    subtitle: "Bölgesel Dağılım ve Özellikler",
    link: "https://drive.google.com/file/d/1ycIA8flvN8cp1fa3LJnEbQ5JGInD0BNP/view?usp=drive_link",
    infographic: "/platolar_infografik.png"
  },
  {
    id: 8,
    title: "TÜRKİYE'NİN OVALARI",
    subtitle: "Delta ve Tektonik Ovalar Rehberi",
    link: "https://drive.google.com/file/d/1KTZXd9Bnu_wduceez-teKD7JdFvFvdFU/view?usp=drive_link",
    infographic: "/ovalar_infografik.png"
  },
  {
    id: 9,
    title: "TÜRKİYE'NİN BİTKİLERİ",
    subtitle: "Flora Çeşitliliği ve Dağılışı",
    link: "https://drive.google.com/file/d/1J6t2yX8pvVlF0m1FkhAMiHP13z_Toylm/view?usp=drive_link",
    infographic: "/bitkiler_infografik.png"
  },
  {
    id: 10,
    title: "TÜRKİYE'DE TOPRAK",
    subtitle: "Toprak Tipleri ve Verimlilik Analizi",
    link: "https://drive.google.com/file/d/1Y2F5aLZ3BgQSl2lmolH6J2Zj0HshVeER/view?usp=drive_link",
    infographic: "/infografik.png"
  }
];

const EXAMS = [
  { name: "YKS-TYT", date: new Date("2026-06-20T10:00:00") },
  { name: "YKS-AYT", date: new Date("2026-06-21T10:00:00") },
  { name: "MEB-AGS", date: new Date("2026-07-26T10:00:00") },
  { name: "KPSS-LİSANS (GK-GY)", date: new Date("2026-09-06T10:00:00") },
  { name: "KPSS-ALAN BİLGİSİ", date: new Date("2026-09-12T10:00:00") },
  { name: "KPSS-ÖNLİSANS", date: new Date("2026-10-04T10:00:00") },
  { name: "KPSS-ORTAÖĞRETİM", date: new Date("2026-10-25T10:00:00") },
  { name: "KPSS-DHBT", date: new Date("2026-11-01T10:00:00") },
];

function CountdownCard({ exam }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +exam.date - +new Date();
    if (difference > 0) {
      return Math.floor(difference / (1000 * 60 * 60 * 24));
    }
    return 0;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000 * 60 * 60); // Update every hour is enough now
    return () => clearInterval(timer);
  }, []);

  const getDayColor = (days) => {
    if (days >= 100) return '#22c55e';   // yeşil
    if (days >= 50)  return '#f97316';   // turuncu
    return '#ef4444';                    // kırmızı
  };

  return (
    <div className="countdown-card glass-card">
      <div className="exam-info">
        <h3>{exam.name}</h3>
        <p className="exam-date">
          <Calendar size={14} /> {exam.date.toLocaleDateString('tr-TR')}
        </p>
      </div>
      <div className="day-counter">
        {timeLeft > 0 ? (
          <>
            <span className="days" style={{ color: getDayColor(timeLeft) }}>{timeLeft}</span>
            <span className="label">GÜN KALDI</span>
          </>
        ) : (
          <span className="label" style={{ color: '#ef4444', fontSize: '1.1rem', fontWeight: 'bold' }}>Sınav Yapıldı</span>
        )}
      </div>
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);
  const [showDiyarbakirModal, setShowDiyarbakirModal] = useState(false);
  const [infographicModal, setInfographicModal] = useState(null);
  const [showPromoPopup, setShowPromoPopup] = useState(() => {
    // Sadece ilk girişte göster (oturum başına bir kez)
    return !sessionStorage.getItem('promoSeen');
  });
  const [activeQuiz, setActiveQuiz] = useState(null);

  const closePromoPopup = () => {
    sessionStorage.setItem('promoSeen', '1');
    setShowPromoPopup(false);
  };

  return (
    <div className="app">
      {/* ── Promo Popup (ilk giriş) ── */}
      <AnimatePresence>
        {showPromoPopup && (
          <motion.div
            className="promo-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePromoPopup}
          >
            <motion.div
              className="promo-box"
              initial={{ scale: 0.82, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 22 } }}
              exit={{ scale: 0.88, opacity: 0, y: 20 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Kapat butonu */}
              <button className="promo-close" onClick={closePromoPopup} aria-label="Kapat">
                <X size={20} />
              </button>

              {/* Resme tıklayınca kitap sayfasına git */}
              <a
                href="https://www.yargiyayinevi.com/yargi-yayinlari-2026-kpss-cografya-konu-konu-kritik-10ar-soru-5-kritik-deneme-sinavi"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closePromoPopup}
                className="promo-link"
              >
                <img
                  src="/konu-konu-promo.jpg"
                  alt="2026 KPSS Coğrafya Konu Konu Kritik 10'ar Soru +5 Kritik Deneme"
                  className="promo-img"
                />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Infographic Modal */}
      <AnimatePresence>
        {infographicModal && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setInfographicModal(null)}
            style={{ zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
          >
            <motion.div 
              className="modal-content glass-card"
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '600px', maxHeight: '85vh', overflow: 'auto', padding: '1rem', position: 'relative' }}
            >
              <button 
                className="modal-close"
                onClick={() => setInfographicModal(null)}
                style={{ position: 'absolute', top: '10px', left: '10px', background: 'var(--primary)', color: 'white', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, cursor: 'pointer', border: 'none' }}
              >
                <X size={20} />
              </button>
              <img src={infographicModal} alt="İnfografik" style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', display: 'block', borderRadius: '8px' }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">
            <Map className="logo-icon" />
            <span>Engin <strong>ERAYDIN</strong></span>
          </div>
          
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#hero" onClick={() => setIsMenuOpen(false)}>Ana Sayfa</a></li>
            <li><a href="#videolar" onClick={() => setIsMenuOpen(false)}>Videolar</a></li>
            <li><a href="#kitaplar" onClick={() => setIsMenuOpen(false)}>Kitaplar</a></li>
            <li><a href="#dokumanlar" onClick={() => setIsMenuOpen(false)}>Dökümanlar</a></li>
            <li><a href="#testler" onClick={() => setIsMenuOpen(false)}>Test Çöz</a></li>
            <li><a href="#harita" onClick={() => setIsMenuOpen(false)}>Haritalı Veriler</a></li>
            <li><a href="#etkinlikler" onClick={() => setIsMenuOpen(false)}>Etkinlikler</a></li>
            <li><a href="#hakkinda" onClick={() => setIsMenuOpen(false)}>Hakkında</a></li>
            <li><a href="#social" className="btn btn-secondary" onClick={() => setIsMenuOpen(false)}>Sosyal Medya</a></li>
          </ul>

          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Back to Top Button */}
      <motion.button 
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp size={24} />
        <span>BAŞA DÖN</span>
      </motion.button>

      {/* Hero Section */}
      <section id="hero" className="hero">

        <div className="container hero-content">
          <motion.div 
            initial="hidden"
            animate="visible"
            className="hero-text"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <div className="hero-slider-wrapper" style={{ width: '100%', aspectRatio: '16/9', position: 'relative', zIndex: 10 }}>
              <HeroSlider />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-image"
          >
            <div className="image-container hero-photo-wrapper">
               <img src={enginImg} alt="Engin Eraydın" className="hero-photo" />
               <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="photo-accent"
               ></motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="countdowns">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="countdown-grid"
          >
            {EXAMS.map((exam, index) => (
              <motion.div key={index} variants={scaleIn}>
                <CountdownCard exam={exam} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videolar" className="section">
        <div className="container">
          <div className="playlists-section">
             <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeInUp}
               className="section-title"
             >
               <h2>Eğitim Videoları ve Oynatma Listeleri</h2>
               <p>Engin Eraydın YouTube kanalındaki en güncel videolar ve oynatma listeleri</p>
             </motion.div>
             <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={staggerContainer}
               className="playlist-grid"
             >
               {(() => {
                 const playlistColors = ['#ef4444','#f59e0b','#06b6d4','#8b5cf6','#f97316','#ec4899','#10b981'];
                 return PLAYLISTS.map((playlist, idx) => (
                 <motion.a 
                   variants={fadeInUp}
                   whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.2 } }}
                   whileTap={{ scale: 0.98 }}
                   href={playlist.link} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   key={playlist.id} 
                   className="playlist-card glass-card"
                   style={{ borderColor: playlistColors[idx % playlistColors.length], borderWidth: '2px', borderStyle: 'solid' }}
                 >
                   <div className="playlist-thumbnail">
                     <img src={playlist.thumbnail} alt={playlist.title} />
                     <div className="video-count-overlay">
                       <span className="v-number">{playlist.videoCount}</span>
                       <span className="v-text">VİDEO</span>
                     </div>
                   </div>
                   <div className="playlist-info">
                     <h4>{playlist.title}</h4>
                     <div className="playlist-footer">
                        <span>Oynatma Listesini İncele</span>
                        <ChevronRight size={16} />
                     </div>
                   </div>
                 </motion.a>
               ));
               })()}
             </motion.div>
          </div>
        </div>
      </section>


      {/* Books Section */}
      <section id="kitaplar" className="section bg-light">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="section-title"
          >
            <h2>Yayınlar ve Kitaplar</h2>
            <p>Sınav başarınızı artıracak özel hazırlanmış kaynaklar.</p>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="books-grid"
          >
            {(() => {
              const bookColors = ['#3b82f6','#f59e0b','#06b6d4','#8b5cf6','#f97316','#ec4899','#10b981','#ef4444','#84cc16','#0ea5e9','#a78bfa'];
              return BOOKS.map((book, idx) => (
                <motion.div 
                  variants={scaleIn}
                  whileHover={{ y: -10, scale: 1.03 }} 
                  key={book.id} 
                  className="book-card glass-card"
                  style={{ borderColor: bookColors[idx % bookColors.length], borderWidth: '2px', borderStyle: 'solid' }}
                >
                  <img src={book.image} alt={book.title} />
                  <div className="book-info">
                    <h4>{book.title}</h4>
                    <a href={book.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Kitaba Git</a>
                  </div>
                </motion.div>
              ));
            })()}
          </motion.div>
        </div>
      </section>

      {/* Documents Section */}
      <section id="dokumanlar" className="section bg-light">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="section-title"
          >
            <h2>Dosya ve Dökümanlar</h2>
            <p>Engin Eraydın tarafından oluşturulan dosyalara ve istatistik verilerine buradan ulaşabilirsiniz.</p>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: "0px 0px -50px 0px" }}
            variants={staggerContainer}
            className="docs-grid"
          >
            {(() => {
              const docColors = ['#3b82f6','#f59e0b','#06b6d4','#8b5cf6','#f97316','#ec4899','#10b981','#ef4444','#84cc16','#0ea5e9'];
              return DOCUMENTS.map((doc, idx) => (
              <motion.div key={doc.id} variants={fadeInUp} whileHover={{ y: -12 }} className="doc-card glass-card"
                style={{ borderColor: docColors[idx % docColors.length], borderWidth: '2px', borderStyle: 'solid' }}>
                <div className="doc-icon"><FileText size={40} /></div>
                <h3>{doc.title}</h3>
                <p>{doc.subtitle}</p>
                <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a 
                    href={doc.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary btn-sm"
                  >
                    <Download size={16} /> İndir
                  </a>
                  {doc.infographic && (
                    <button 
                      className="btn btn-secondary btn-sm"
                      onClick={() => setInfographicModal(doc.infographic)}
                    >
                      <PieChart size={16} /> İnfografik
                    </button>
                  )}
                </div>
              </motion.div>
              ));
            })()}
          </motion.div>
        </div>
      </section>

      {/* Tests Section */}
      <section id="testler" className="section bg-light">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="section-title"
          >
            <h2>Online Testler</h2>
            <p>Konuları pekiştirmeniz için özenle hazırlanmış interaktif testler.</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: "0px 0px -50px 0px" }}
            variants={staggerContainer}
            className="docs-grid"
          >
            <motion.div variants={fadeInUp} whileHover={{ y: -12 }} className="doc-card glass-card" style={{ borderColor: 'var(--primary)', borderWidth: '2px', borderStyle: 'solid' }}>
              <div className="doc-icon" style={{ background: 'transparent' }}><ColoredEarthIcon size={48} /></div>
              <h3>Coğrafi Konum</h3>
              <p>Türkiye'nin matematik ve özel konumu ile ilgili 30 soruluk pekiştirme testi.</p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
                <button 
                  className="btn btn-primary"
                  style={{ background: '#22c55e', borderColor: '#22c55e', width: '100%' }}
                  onClick={() => setActiveQuiz(quizData)}
                >
                  <Award size={18} style={{ marginRight: '8px' }} /> Teste Başla
                </button>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ y: -12 }} className="doc-card glass-card" style={{ borderColor: '#f59e0b', borderWidth: '2px', borderStyle: 'solid' }}>
              <div className="doc-icon" style={{ background: 'transparent' }}><ColoredMountainIcon size={48} /></div>
              <h3>Yer Şekilleri</h3>
              <p>Türkiye'nin dağları, ovaları, platoları ve yeryüzü şekilleri ile ilgili 45 soruluk pekiştirme testi.</p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
                <button className="btn btn-primary" style={{ background: '#22c55e', borderColor: '#22c55e', width: '100%' }} onClick={() => setActiveQuiz(yerSekilleriQuizData)}>
                  <Award size={18} style={{ marginRight: '8px' }} /> Teste Başla
                </button>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ y: -12 }} className="doc-card glass-card" style={{ borderColor: '#06b6d4', borderWidth: '2px', borderStyle: 'solid' }}>
              <div className="doc-icon" style={{ background: 'transparent' }}><ColoredClimateIcon size={48} /></div>
              <h3>Türkiye İklimi</h3>
              <p>Türkiye'deki iklim türleri, yağış rejimleri ve sıcaklık özellikleri ile ilgili 24 soruluk test.</p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
                <button className="btn btn-primary" style={{ background: '#22c55e', borderColor: '#22c55e', width: '100%' }} onClick={() => setActiveQuiz(iklimQuizData)}>
                  <Award size={18} style={{ marginRight: '8px' }} /> Teste Başla
                </button>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ y: -12 }} className="doc-card glass-card" style={{ borderColor: '#8b5cf6', borderWidth: '2px', borderStyle: 'solid' }}>
              <div className="doc-icon" style={{ background: 'transparent' }}><ColoredRegionsIcon size={48} /></div>
              <h3>Bölgeler</h3>
              <p>Türkiye'nin coğrafi ve istatistiki bölgeleri, bölgesel kalkınma projeleri ile ilgili 23 soruluk test.</p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
                <button className="btn btn-primary" style={{ background: '#22c55e', borderColor: '#22c55e', width: '100%' }} onClick={() => setActiveQuiz(bolgelerQuizData)}>
                  <Award size={18} style={{ marginRight: '8px' }} /> Teste Başla
                </button>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ y: -12 }} className="doc-card glass-card" style={{ borderColor: '#64748b', borderWidth: '2px', borderStyle: 'solid' }}>
              <div className="doc-icon" style={{ background: 'transparent' }}><ColoredMiningIcon size={48} /></div>
              <h3>Maden ve Enerji</h3>
              <p>Türkiye'nin madenler, enerji kaynakları ve enerji potansiyeli ile ilgili 20 soruluk test.</p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
                <button className="btn btn-primary" style={{ background: '#22c55e', borderColor: '#22c55e', width: '100%' }} onClick={() => setActiveQuiz(maden_enerjiQuizData)}>
                  <Award size={18} style={{ marginRight: '8px' }} /> Teste Başla
                </button>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ y: -12 }} className="doc-card glass-card" style={{ borderColor: '#f97316', borderWidth: '2px', borderStyle: 'solid' }}>
              <div className="doc-icon" style={{ background: 'transparent' }}><ColoredIndustryIcon size={48} /></div>
              <h3>Sanayi ve Ticaret</h3>
              <p>Türkiye'nin sanayi kolları, ticaret merkezleri ve dış ticaret dengesi ile ilgili 20 soruluk test.</p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
                <button className="btn btn-primary" style={{ background: '#22c55e', borderColor: '#22c55e', width: '100%' }} onClick={() => setActiveQuiz(sanayi_ticaretQuizData)}>
                  <Award size={18} style={{ marginRight: '8px' }} /> Teste Başla
                </button>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ y: -12 }} className="doc-card glass-card" style={{ borderColor: '#84cc16', borderWidth: '2px', borderStyle: 'solid' }}>
              <div className="doc-icon" style={{ background: 'transparent' }}><ColoredAgricultureIcon size={48} /></div>
              <h3>Tarım ve Hayvancılık</h3>
              <p>Türkiye'nin tarım ürünleri, hayvancılık bölgeleri ve sulu tarım alanında 20 soruluk test.</p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
                <button className="btn btn-primary" style={{ background: '#22c55e', borderColor: '#22c55e', width: '100%' }} onClick={() => setActiveQuiz(tarim_hayvancilikQuizData)}>
                  <Award size={18} style={{ marginRight: '8px' }} /> Teste Başla
                </button>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ y: -12 }} className="doc-card glass-card" style={{ borderColor: '#0ea5e9', borderWidth: '2px', borderStyle: 'solid' }}>
              <div className="doc-icon" style={{ background: 'transparent' }}><ColoredTransportIcon size={48} /></div>
              <h3>Ulaşım ve Turizm</h3>
              <p>Türkiye'nin ulaşım ağları, limanı ve turizm bölgeleri ile ilgili 28 soruluk test.</p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
                <button className="btn btn-primary" style={{ background: '#22c55e', borderColor: '#22c55e', width: '100%' }} onClick={() => setActiveQuiz(ulasim_turizmQuizData)}>
                  <Award size={18} style={{ marginRight: '8px' }} /> Teste Başla
                </button>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ y: -12 }} className="doc-card glass-card" style={{ borderColor: '#ec4899', borderWidth: '2px', borderStyle: 'solid' }}>
              <div className="doc-icon" style={{ background: 'transparent' }}><ColoredHumanIcon size={48} /></div>
              <h3>Beşeri Coğrafya</h3>
              <p>Türkiye'nin nüfus, göç, yerleşme ve kültürel coğrafya özelliklerine yönelik 40 soruluk test.</p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
                <button className="btn btn-primary" style={{ background: '#22c55e', borderColor: '#22c55e', width: '100%' }} onClick={() => setActiveQuiz(beseri_cografyaQuizData)}>
                  <Award size={18} style={{ marginRight: '8px' }} /> Teste Başla
                </button>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ y: -12 }} className="doc-card glass-card" style={{ borderColor: '#10b981', borderWidth: '2px', borderStyle: 'solid' }}>
              <div className="doc-icon" style={{ background: 'transparent' }}><ColoredNatureIcon size={48} /></div>
              <h3>Toprak, Su ve Bitki</h3>
              <p>Türkiye'nin toprak tipleri, akarsu sistemleri ve bitki örtüsü ile ilgili 24 soruluk test.</p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
                <button className="btn btn-primary" style={{ background: '#22c55e', borderColor: '#22c55e', width: '100%' }} onClick={() => setActiveQuiz(toprak_su_bitkiQuizData)}>
                  <Award size={18} style={{ marginRight: '8px' }} /> Teste Başla
                </button>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ y: -12 }} className="doc-card glass-card" style={{ borderColor: '#ef4444', borderWidth: '2px', borderStyle: 'solid' }}>
              <div className="doc-icon" style={{ background: 'transparent' }}><ColoredDisasterIcon size={48} /></div>
              <h3>Çevre ve Doğal Afetler</h3>
              <p>Türkiye'deki depremler, seller, heyelanlar ve çevre sorunlarına yönelik 20 soruluk test.</p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
                <button className="btn btn-primary" style={{ background: '#22c55e', borderColor: '#22c55e', width: '100%' }} onClick={() => setActiveQuiz(cevre_afetlerQuizData)}>
                  <Award size={18} style={{ marginRight: '8px' }} /> Teste Başla
                </button>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Quiz Modal */}
      <AnimatePresence>
        {activeQuiz && (
          <QuizModal 
            quizData={activeQuiz} 
            onClose={() => setActiveQuiz(null)} 
          />
        )}
      </AnimatePresence>

      {/* Interactive Map Section */}
      <InteractiveMap />

      {/* Events Section */}
      <section id="etkinlikler" className="section">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="section-title"
          >
            <h2>Etkinlikler ve Konferanslar</h2>
            <p>Söyleşi, konferans ve imza günü etkinliklerinden haberdar olun.</p>
          </motion.div>
          <div className="events-grid">
            {/* Diyarbakır Kampı */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }} 
              className="event-card glass-card"
            >
              <div className="event-date-badge">
                <span className="full-date">22 Haziran 2026</span>
              </div>
              <div className="event-info">
                <h4>Ateş Yargı Akademi - 2026 KPSS Genel Tekrar Kampı</h4>
                <p><Calendar size={14} /> 22 Haziran Pazartesi | Diyarbakır</p>
                <p className="description">Dicle Üniversitesi'nde Engin Eraydın ile Coğrafya Genel Tekrar Kampı. Kayıt için: 0554 930 99 89</p>
                <button 
                  className="btn btn-outline"
                  onClick={() => setShowDiyarbakirModal(true)}
                >
                  Detaylar
                </button>
              </div>
            </motion.div>

            {/* Eskişehir */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }} 
              className="event-card glass-card"
            >
              <div className="event-date-badge" style={{ background: '#9ca3af' }}>
                <span className="full-date">16 Mayıs 2026</span>
              </div>
              <div className="event-info">
                <h4>Eskişehir Kitap Fuarı - İmza & Söyleşi</h4>
                <p><Calendar size={14} /> 16 Mayıs Cumartesi | Saat: 13:00</p>
                <p className="description">Eskişehir Ticaret Odası - TÜYAP Fuar Merkezi, Yargı Yayınevi stant no: 135'te imza, fotoğraf ve söyleşi etkinliğinde buluşalım.</p>
                <button 
                  className="btn btn-outline"
                  onClick={() => setShowEventModal(true)}
                >
                  Detaylar
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Modal */}
      {showEventModal && (
        <div className="modal-overlay" onClick={() => setShowEventModal(false)}>
          <motion.div 
            className="modal-content"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setShowEventModal(false)}>
              <X size={24} />
            </button>
            <img src={eventEskisehirImg} alt="Eskişehir Kitap Fuarı" className="modal-img" />
          </motion.div>
        </div>
      )}

      {/* Diyarbakır Kamp Modal */}
      {showDiyarbakirModal && (
        <div className="modal-overlay" onClick={() => setShowDiyarbakirModal(false)}>
          <motion.div 
            className="modal-content"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setShowDiyarbakirModal(false)}>
              <X size={24} />
            </button>
            <img src={eventDiyarbakirImg} alt="Ateş Yargı Akademi Diyarbakır Kampı" className="modal-img" />
          </motion.div>
        </div>
      )}

      {/* Social Media Section */}
      <section id="social" className="section bg-light">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="section-title"
          >
            <h2>Sosyal Medya Kanalları</h2>
            <p>Eğitim videoları ve güncel paylaşımlar için takipte kalın.</p>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="social-grid"
          >
            <motion.a 
              variants={fadeInUp}
              whileHover={{ y: -15, scale: 1.05, transition: { duration: 0.2 } }}
              href="https://www.youtube.com/@engineraydincografya" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-card youtube glass-card"
            >
              <div className="social-icon">
                <YoutubeIcon size={48} />
              </div>
              <div className="social-text">
                <h4>YouTube</h4>
                <p>Engin Eraydın Coğrafya</p>
                <span className="subscribe-btn">Abone Ol</span>
              </div>
            </motion.a>
            <motion.a 
              variants={fadeInUp}
              whileHover={{ y: -15, scale: 1.05, transition: { duration: 0.2 } }}
              href="https://www.instagram.com/engin_eraydinc/?hl=tr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-card instagram glass-card"
            >
              <div className="social-icon">
                <InstagramIcon size={48} />
              </div>
              <div className="social-text">
                <h4>Instagram</h4>
                <p>@engin_eraydinc</p>
                <span className="follow-btn">Takip Et</span>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkinda" className="section">
        <div className="container">
          <div className="about-content">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="about-image"
            >
              <div className="image-card glass-card">
                <img src={enginImg} alt="Engin Eraydın" />
                <div className="experience-badge">
                  <strong>15+</strong>
                  <span>Yıllık Tecrübe</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="about-text"
            >
              <span className="badge">Eğitimci & Yazar</span>
              <h2>Engin Eraydın <span>Kimdir?</span></h2>
              <p>Engin Eraydın, lisans eğitimini <strong>Ankara Üniversitesi Coğrafya Bölümü'nde</strong> tamamladıktan sonra yüksek lisansını Karabük Üniversitesi'nde gerçekleştirmiştir.</p>
              <p>Coğrafya dersini sadece bir "ezber" dersi olmaktan çıkarıp, hafıza teknikleri, kodlamalar ve görsel materyallerle kalıcı bir öğrenme sürecine dönüştüren vizyonuyla tanınır. Türkiye genelinde binlerce adayın KPSS, TYT ve AYT sınavlarında coğrafya branşında başarıya ulaşmasında öncü bir rol üstlenmiştir.</p>
              
              <div className="stats-grid">
                <div className="stat-item">
                  <Award size={24} />
                  <div>
                    <h5>Yüzbinlerce Öğrenci</h5>
                    <p>YouTube ve dijital platformlar</p>
                  </div>
                </div>
                <div className="stat-item">
                  <BookOpen size={24} />
                  <div>
                    <h5>100+ Yayın</h5>
                    <p>Soru bankaları ve konu anlatımları</p>
                  </div>
                </div>
              </div>

              <div className="about-extra">
                <p>Bugün hem dijital platformlarda hem de basılı yayınlarıyla eğitim camiasına değer katmaya devam etmektedir. "Coğrafya her yerde!" sloganıyla öğrencilerine sadece sınav kazandırmayı değil, doğayı ve dünyayı anlamayı da aşılamaktadır.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-logo">
            <div className="logo">
              <Map className="logo-icon" />
              <span>Engin <strong>ERAYDIN</strong></span>
            </div>
            <div className="footer-social">
              <a href="https://www.youtube.com/@engineraydincografya" target="_blank" rel="noopener noreferrer"><YoutubeIcon size={18} /></a>
              <a href="https://www.instagram.com/engin_eraydinc/?hl=tr" target="_blank" rel="noopener noreferrer"><InstagramIcon size={18} /></a>
            </div>
          </div>
          
          <nav className="footer-nav">
            <ul>
              <li><a href="#hero">Ana Sayfa</a></li>
              <li><a href="#videolar">Videolar</a></li>
              <li><a href="#kitaplar">Kitaplar</a></li>
              <li><a href="#dokumanlar">Dökümanlar</a></li>
              <li><a href="#testler">Test Çöz</a></li>
              <li><a href="#harita">Haritalı Veriler</a></li>
              <li><a href="#etkinlikler">Etkinlikler</a></li>
              <li><a href="#hakkinda">Hakkında</a></li>
              <li><a href="#social">Sosyal Medya</a></li>
            </ul>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Engin Eraydın. Tüm Hakları Saklıdır.</p>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}

export default App;
