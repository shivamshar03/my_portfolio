'use client';

import { useEffect, useRef } from 'react';

interface Trail {
  x: number;
  y: number;
  alpha: number;
  size: number;
}

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trails = useRef<Trail[]>([]);
  const mousePos = useRef({ x: -100, y: -100 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    if ('ontouchstart' in window) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Add trail particles on movement
      for (let i = 0; i < 2; i++) {
        trails.current.push({
          x: e.clientX + (Math.random() - 0.5) * 8,
          y: e.clientY + (Math.random() - 0.5) * 8,
          alpha: 0.6,
          size: Math.random() * 3 + 1,
        });
      }

      // Limit trail length
      if (trails.current.length > 50) {
        trails.current = trails.current.slice(-50);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and fade trails
      trails.current = trails.current.filter((t) => {
        t.alpha -= 0.015;
        t.size *= 0.97;

        if (t.alpha <= 0) return false;

        ctx.beginPath();
        ctx.arc(t.x, t.y, t.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${t.alpha})`;
        ctx.fill();

        // Glow effect
        ctx.beginPath();
        ctx.arc(t.x, t.y, t.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${t.alpha * 0.15})`;
        ctx.fill();

        return true;
      });

      animRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9998]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
