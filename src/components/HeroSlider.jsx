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

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 20000); // 20 seconds
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (idx) => {
    if (idx === currentIndex) return;
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

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
            onClick={() => goToSlide(idx)}
            aria-label={`Slayt ${idx + 1}`}
          />
        ))}
      </div>

      <div className="slider-track">
        <AnimatePresence initial={false} custom={direction}>
          <motion.a
            key={currentIndex}
            href={slides[currentIndex].link}
            target={slides[currentIndex].link.startsWith('http') ? '_blank' : undefined}
            rel={slides[currentIndex].link.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="slider-slide"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", ease: "easeInOut", duration: 0.7 },
              opacity: { duration: 0.7, ease: "easeInOut" }
            }}
          >
            <img 
              src={slides[currentIndex].file} 
              alt={`Slide ${currentIndex + 1}`} 
              className="slider-image"
              onError={(e) => {
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
