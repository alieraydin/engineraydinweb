import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './HeroSlider.css';

const slides = [
  { id: 1, file: '/slider/1.png', link: 'https://www.youtube.com/@engineraydincografya', fallback: 'https://placehold.co/1200x600/001f3f/FFFFFF?text=Resim+1+(Haritalar)' },
  { id: 2, file: '/slider/2.png', link: '#kitaplar', fallback: 'https://placehold.co/1200x600/001f3f/FFFFFF?text=Resim+2+(Kitaplar)' },
  { id: 3, file: '/slider/3.png', link: '#dokumanlar', fallback: 'https://placehold.co/1200x600/001f3f/FFFFFF?text=Resim+3+(Dokumanlar)' },
  { id: 4, file: '/slider/4.png', link: '#harita', fallback: 'https://placehold.co/1200x600/001f3f/FFFFFF?text=Resim+4+(Haritalar)' }
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 20000); // 20 seconds
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="hero-slider-container">
      <button className="slider-nav-btn prev" onClick={prevSlide}>
        <ChevronLeft size={36} />
      </button>
      <button className="slider-nav-btn next" onClick={nextSlide}>
        <ChevronRight size={36} />
      </button>

      <div className="slider-dots">
        {slides.map((_, idx) => (
          <button 
            key={idx} 
            className={`slider-dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Slayt ${idx + 1}`}
          />
        ))}
      </div>

      <div className="slider-track">
        <AnimatePresence mode="wait">
          <motion.a
            key={currentIndex}
            href={slides[currentIndex].link}
            target={slides[currentIndex].link.startsWith('http') ? '_blank' : undefined}
            rel={slides[currentIndex].link.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="slider-slide"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <img 
              src={slides[currentIndex].file} 
              alt={`Slide ${currentIndex + 1}`} 
              className="slider-image"
              onError={(e) => {
                // If the file doesn't exist yet, show fallback
                if (e.target.src !== slides[currentIndex].fallback) {
                  e.target.src = slides[currentIndex].fallback;
                }
              }}
            />
          </motion.a>
        </AnimatePresence>
      </div>
    </div>
  );
}
