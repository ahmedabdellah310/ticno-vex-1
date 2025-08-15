import React, { useEffect, useRef } from 'react';

export default function WebBackground() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const settingsRef = useRef({
    count: 90,            // number of points
    maxLinkDist: 140,     // link distance
    baseSpeed: 0.25,      // movement speed
    lineColor: 'rgba(255,255,255,0.15)',
    nodeColor: 'rgba(255,255,255,0.35)',
    accentColor: 'rgba(34,229,132,0.12)', // subtle brand tint on stronger links
    background: 'transparent'
  });

  // Init / resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createParticles = () => {
      const { count, baseSpeed } = settingsRef.current;
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * baseSpeed,
        vy: (Math.random() - 0.5) * baseSpeed,
        r: Math.random() * 1.5 + 0.3
      }));
    };

    const step = () => {
      const { maxLinkDist, lineColor, nodeColor, accentColor } = settingsRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move
      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
        if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;
      }

      // Links (spider web effect)
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const a = particlesRef.current[i];
          const b = particlesRef.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxLinkDist) {
            const t = 1 - dist / maxLinkDist; // 0..1
            ctx.strokeStyle = t > 0.75 ? accentColor : lineColor;
            ctx.globalAlpha = 0.2 + t * 0.5;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      // Nodes
      for (const p of particlesRef.current) {
        ctx.fillStyle = nodeColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(step);
    };

    resize();
    createParticles();
    step();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    }, { passive: true });

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        background: 'transparent'
      }}
    />
  );
}
