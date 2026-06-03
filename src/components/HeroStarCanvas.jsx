import { useEffect, useRef } from 'react';

export default function HeroStarCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animId;
    let W = canvas.width = canvas.offsetWidth;
    let H = canvas.height = canvas.offsetHeight;

    // ── Stars ──────────────────────────────────────────
    const STAR_COUNT = 220;
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.6 + 0.2,
      alpha: Math.random(),
      dAlpha: (Math.random() * 0.005 + 0.001) * (Math.random() < 0.5 ? 1 : -1),
      color: Math.random() < 0.3 ? '#ffe0a0' : Math.random() < 0.5 ? '#a0d8ff' : '#ffffff',
    }));

    // ── Shooting Stars ──────────────────────────────────
    const SHOOT_COUNT = 4;
    const createShooter = () => ({
      x: Math.random() * W * 0.7,
      y: Math.random() * H * 0.4,
      len: Math.random() * 180 + 100,
      speed: Math.random() * 8 + 5,
      alpha: Math.random() * 0.6 + 0.4,
      angle: Math.PI / 6 + (Math.random() - 0.5) * 0.3,
      progress: 0,
      delay: Math.random() * 180,
      active: false,
    });
    const shooters = Array.from({ length: SHOOT_COUNT }, createShooter);

    function tick() {
      ctx.clearRect(0, 0, W, H);

      // Draw stars
      for (const s of stars) {
        s.alpha += s.dAlpha;
        if (s.alpha > 1 || s.alpha < 0.05) s.dAlpha *= -1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, s.alpha));
        ctx.fill();
      }

      // Draw shooting stars
      ctx.globalAlpha = 1;
      for (const sh of shooters) {
        if (sh.delay > 0) { sh.delay--; continue; }
        sh.active = true;
        sh.progress += sh.speed;

        const dx = Math.cos(sh.angle) * sh.progress;
        const dy = Math.sin(sh.angle) * sh.progress;
        const tailDx = Math.cos(sh.angle) * Math.min(sh.len, sh.progress);
        const tailDy = Math.sin(sh.angle) * Math.min(sh.len, sh.progress);

        const grad = ctx.createLinearGradient(
          sh.x + dx - tailDx, sh.y + dy - tailDy,
          sh.x + dx, sh.y + dy
        );
        grad.addColorStop(0, 'rgba(255,255,255,0)');
        grad.addColorStop(1, `rgba(255,220,120,${sh.alpha})`);

        ctx.beginPath();
        ctx.moveTo(sh.x + dx - tailDx, sh.y + dy - tailDy);
        ctx.lineTo(sh.x + dx, sh.y + dy);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Reset when off-screen
        if (sh.x + dx > W * 1.1 || sh.y + dy > H * 1.1) {
          Object.assign(sh, createShooter());
        }
      }

      animId = requestAnimationFrame(tick);
    }

    tick();

    const onResize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
