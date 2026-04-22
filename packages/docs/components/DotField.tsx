'use client';

import { useEffect, useRef } from 'react';

const GRID_SIZE = 24;
const DOT_RADIUS = 1;
const BASE_OPACITY = 0.14;
const HOVER_OPACITY = 0.42;
const HOVER_RADIUS = 180;
const DRIFT_X_AMPLITUDE = 3;
const DRIFT_Y_AMPLITUDE = 3;
const DRIFT_X_PERIOD_MS = 18000;
const DRIFT_Y_PERIOD_MS = 25000;

/**
 * Ambient dot field — replaces the CSS radial-gradient background on the homepage.
 * Dots drift on a slow sine path and brighten around the cursor within a soft radius.
 * Respects prefers-reduced-motion (static grid, no drift or cursor reaction).
 */
export function DotField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    const start = performance.now();

    function draw(now: number) {
      const reduced = reducedMotionQuery.matches;
      const t = now - start;
      const w = window.innerWidth;
      const h = window.innerHeight;

      const dx = reduced ? 0 : Math.sin((t / DRIFT_X_PERIOD_MS) * 2 * Math.PI) * DRIFT_X_AMPLITUDE;
      const dy = reduced ? 0 : Math.cos((t / DRIFT_Y_PERIOD_MS) * 2 * Math.PI) * DRIFT_Y_AMPLITUDE;

      const fg = getComputedStyle(document.documentElement).getPropertyValue('--color-foreground').trim() || '#0F0E0C';

      ctx!.clearRect(0, 0, w, h);
      ctx!.fillStyle = fg;

      const p = reduced ? null : pointerRef.current;
      const hoverRadiusSq = HOVER_RADIUS * HOVER_RADIUS;

      for (let y = -GRID_SIZE; y < h + GRID_SIZE; y += GRID_SIZE) {
        for (let x = -GRID_SIZE; x < w + GRID_SIZE; x += GRID_SIZE) {
          const px = x + dx;
          const py = y + dy;

          let opacity = BASE_OPACITY;
          if (p) {
            const ddx = px - p.x;
            const ddy = py - p.y;
            const distSq = ddx * ddx + ddy * ddy;
            if (distSq < hoverRadiusSq) {
              const t01 = 1 - Math.sqrt(distSq) / HOVER_RADIUS;
              opacity = BASE_OPACITY + (HOVER_OPACITY - BASE_OPACITY) * (t01 * t01);
            }
          }

          ctx!.globalAlpha = opacity;
          ctx!.beginPath();
          ctx!.arc(px, py, DOT_RADIUS, 0, Math.PI * 2);
          ctx!.fill();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    function onPointerMove(e: PointerEvent) {
      pointerRef.current = { x: e.clientX, y: e.clientY };
    }
    function onPointerLeave() {
      pointerRef.current = null;
    }
    function onVisibilityChange() {
      if (document.hidden) {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      } else {
        rafRef.current = requestAnimationFrame(draw);
      }
    }

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerleave', onPointerLeave);
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}
