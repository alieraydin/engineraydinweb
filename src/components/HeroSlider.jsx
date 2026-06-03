import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './HeroSlider.css';

const slides = [
  { id: 1, file: '/slider/1.png', link: 'https://www.youtube.com/@engineraydincografya', fallback: 'https://placehold.co/1200x600/001f3f/FFFFFF?text=Slide+1' },
  { id: 2, file: '/slider/2.png', link: '#kitaplar',   fallback: 'https://placehold.co/1200x600/001f3f/FFFFFF?text=Slide+2' },
  { id: 3, file: '/slider/3.png', link: '#dokumanlar', fallback: 'https://placehold.co/1200x600/001f3f/FFFFFF?text=Slide+3' },
  { id: 4, file: '/slider/4.png', link: '#harita',     fallback: 'https://placehold.co/1200x600/001f3f/FFFFFF?text=Slide+4' },
];

const AUTO_DELAY = 6000; // ms per slide

export default function HeroSlider() {
  const [current, setCurrent]     = useState(0);
  const [progress, setProgress]   = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart]   = useState(0);
  const [dragDelta, setDragDelta]   = useState(0);

  const timerRef    = useRef(null);
  const rafRef      = useRef(null);
  const startTime   = useRef(null);
  const trackRef    = useRef(null);

  const count = slides.length;

  // ── Auto-advance with progress bar ──────────────────────────
  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    cancelAnimationFrame(rafRef.current);
    startTime.current = performance.now();
    setProgress(0);

    const tick = (now) => {
      const elapsed = now - startTime.current;
      const pct = Math.min((elapsed / AUTO_DELAY) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCurrent(prev => (prev + 1) % count);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [count]);

  useEffect(() => {
    startTimer();
    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, [current, startTimer]);

  const goTo = useCallback((idx) => {
    if (idx === current) return;
    setCurrent(((idx % count) + count) % count);
  }, [current, count]);

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  // ── Drag / swipe support ─────────────────────────────────────
  const onPointerDown = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragDelta(0);
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!isDragging) return;
    setDragDelta(e.clientX - dragStart);
  };
  const onPointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragDelta < -60) next();
    else if (dragDelta > 60) prev();
    setDragDelta(0);
  };

  // pixel offset: slides are 100% wide each
  const baseOffset  = -current * 100;
  const dragPercent = trackRef.current ? (dragDelta / trackRef.current.offsetWidth) * 100 : 0;
  const offset      = baseOffset + (isDragging ? dragPercent : 0);

  return (
    <div className="hs-container">
      {/* ── Slide band ─────────────────────────────────── */}
      <div
        ref={trackRef}
        className="hs-track"
        style={{
          transform: `translateX(${offset}%)`,
          transition: isDragging ? 'none' : 'transform 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {slides.map((slide, idx) => (
          <a
            key={slide.id}
            href={slide.link}
            target={slide.link.startsWith('http') ? '_blank' : undefined}
            rel={slide.link.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="hs-slide"
            draggable={false}
            onClick={(e) => { if (Math.abs(dragDelta) > 5) e.preventDefault(); }}
          >
            <img
              src={slide.file}
              alt={`Slayt ${idx + 1}`}
              className="hs-image"
              draggable={false}
              onError={(e) => {
                if (e.target.src !== slide.fallback) e.target.src = slide.fallback;
              }}
            />
          </a>
        ))}
      </div>

      {/* ── Nav buttons ────────────────────────────────── */}
      <button className="hs-btn hs-prev" onClick={prev} aria-label="Önceki">
        <ChevronLeft size={28} />
      </button>
      <button className="hs-btn hs-next" onClick={next} aria-label="Sonraki">
        <ChevronRight size={28} />
      </button>

      {/* ── Dot indicators + progress ──────────────────── */}
      <div className="hs-dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`hs-dot${idx === current ? ' active' : ''}`}
            onClick={() => goTo(idx)}
            aria-label={`Slayt ${idx + 1}`}
          >
            {idx === current && (
              <span
                className="hs-dot-fill"
                style={{ width: `${progress}%` }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
