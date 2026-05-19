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
  Download
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
import { motion } from 'framer-motion';
import enginImg from './assets/engin-eraydin-transparent.png';
import eventEskisehirImg from './assets/events/eskisehir_fuar.jpg';
import kpssThumb from './assets/playlist-kpss-2026.png';
import hizliTekrarThumb from './assets/playlist-hizli-tekrar.jpg';
import haritalarThumb from './assets/playlist-haritalar.png';
import denemeThumb from './assets/playlist-deneme.jpg';
import gorsellerleThumb from './assets/playlist-gorsellerle.jpg';
import garantiThumb from './assets/playlist-garanti.jpg';
import deneme20Thumb from './assets/playlist-deneme-20.png';
import { Analytics } from '@vercel/analytics/react';
import InteractiveMap from './InteractiveMap';
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
    videoCount: 8,
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

const BOOKS = [
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
    link: "https://drive.google.com/file/d/1OfJl99RUVUDVMHExdezvOBplH2rEx08I/view?usp=drive_link"
  },
  {
    id: 6,
    title: "TÜRKİYE'NİN DAĞLARI",
    subtitle: "Oluşum ve Dağılış Haritaları",
    link: "https://drive.google.com/file/d/1TFixuiIO3NlNDooE9_TgqgJ1u6-gqA5c/view?usp=drive_link"
  },
  {
    id: 7,
    title: "TÜRKİYE'NİN PLATOLARI",
    subtitle: "Bölgesel Dağılım ve Özellikler",
    link: "https://drive.google.com/file/d/1ycIA8flvN8cp1fa3LJnEbQ5JGInD0BNP/view?usp=drive_link"
  },
  {
    id: 8,
    title: "TÜRKİYE'NİN OVALARI",
    subtitle: "Delta ve Tektonik Ovalar Rehberi",
    link: "https://drive.google.com/file/d/1KTZXd9Bnu_wduceez-teKD7JdFvFvdFU/view?usp=drive_link"
  },
  {
    id: 9,
    title: "TÜRKİYE'NİN BİTKİLERİ",
    subtitle: "Flora Çeşitliliği ve Dağılışı",
    link: "https://drive.google.com/file/d/1J6t2yX8pvVlF0m1FkhAMiHP13z_Toylm/view?usp=drive_link"
  },
  {
    id: 10,
    title: "TÜRKİYE'DE TOPRAK",
    subtitle: "Toprak Tipleri ve Verimlilik Analizi",
    link: "https://drive.google.com/file/d/1Y2F5aLZ3BgQSl2lmolH6J2Zj0HshVeER/view?usp=drive_link"
  }
];

const EXAMS = [
  { name: "YKS-TYT", date: new Date("2026-06-20T10:00:00") },
  { name: "YKS-AYT", date: new Date("2026-06-21T10:00:00") },
  { name: "MEB-AGS", date: new Date("2026-07-12T10:00:00") },
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

  return (
    <div className="countdown-card glass-card">
      <div className="exam-info">
        <h3>{exam.name}</h3>
        <p className="exam-date">
          <Calendar size={14} /> {exam.date.toLocaleDateString('tr-TR')}
        </p>
      </div>
      <div className="day-counter">
        <span className="days">{timeLeft}</span>
        <span className="label">GÜN KALDI</span>
      </div>
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);

  return (
    <div className="app">
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
        <div className="hero-overlay"></div>
        
        {/* 3D Decorative Background Globe */}
        <div className="hero-bg-globe">
          <div className="sphere-wrapper">
            <div className="sphere">
              {/* Meridians */}
              {[0, 30, 60, 90, 120, 150].map(deg => (
                <div key={deg} className="meridian" style={{ transform: `rotateY(${deg}deg)` }}></div>
              ))}
              {/* Latitudes */}
              <div className="latitude" style={{ transform: 'rotateX(90deg) translateZ(120px) scale(0.6)' }}></div>
              <div className="latitude" style={{ transform: 'rotateX(90deg) translateZ(60px) scale(0.92)' }}></div>
              <div className="latitude" style={{ transform: 'rotateX(90deg) translateZ(0) scale(1)' }}></div>
              <div className="latitude" style={{ transform: 'rotateX(90deg) translateZ(-60px) scale(0.92)' }}></div>
              <div className="latitude" style={{ transform: 'rotateX(90deg) translateZ(-120px) scale(0.6)' }}></div>
            </div>
          </div>
        </div>

        <div className="container hero-content">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="hero-text"
          >
            <motion.span variants={fadeInUp} className="badge">Türkiye'nin Coğrafya Hocası</motion.span>
            <motion.h1 variants={fadeInUp}>Engin Eraydın ile Sınavlara <span>Yön Verin.</span></motion.h1>
            <motion.p variants={fadeInUp}>Engin Eraydın ile KPSS, TYT ve AYT sınavlarına en güncel ve en kapsamlı şekilde hazırlanın. Haritalarla coğrafyayı seveceksiniz.</motion.p>
            <motion.div variants={fadeInUp} className="hero-btns">
              <a href="https://www.youtube.com/@engineraydincografya" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Derslere Başla <ChevronRight size={20} /></a>
              <a href="#kitaplar" className="btn btn-outline">Kitapları İncele <ChevronRight size={20} color="#ff851b" /></a>
              <a href="#harita" className="btn btn-success">İnteraktif Haritalar <ChevronRight size={20} /></a>
            </motion.div>
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
               {PLAYLISTS.map(playlist => (
                 <motion.a 
                   variants={fadeInUp}
                   whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.2 } }}
                   whileTap={{ scale: 0.98 }}
                   href={playlist.link} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   key={playlist.id} 
                   className="playlist-card glass-card"
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
               ))}
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
            {BOOKS.map(book => (
              <motion.div 
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.03 }} 
                key={book.id} 
                className="book-card glass-card"
              >
                <img src={book.image} alt={book.title} />
                <div className="book-info">
                  <h4>{book.title}</h4>
                  <a href={book.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Kitaba Git</a>
                </div>
              </motion.div>
            ))}
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
            {DOCUMENTS.map(doc => (
              <motion.div key={doc.id} variants={fadeInUp} whileHover={{ y: -12 }} className="doc-card glass-card">
                <div className="doc-icon"><FileText size={40} /></div>
                <h3>{doc.title}</h3>
                <p>{doc.subtitle}</p>
                <a 
                  href={doc.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary btn-sm"
                >
                  <Download size={16} /> İndir
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }} 
              className="event-card glass-card"
            >
              <div className="event-date-badge">
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
