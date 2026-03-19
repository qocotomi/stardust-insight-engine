import { useEffect, useRef } from "react";

export default function BlackHole() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    interface Particle {
      angle: number;
      radius: number;
      speed: number;
      size: number;
      opacity: number;
      hue: number;
      drift: number;
    }

    const PARTICLE_COUNT = 600;
    const particles: Particle[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const radius = Math.random() * 280 + 40;
      particles.push({
        angle: Math.random() * Math.PI * 2,
        radius,
        speed: (0.2 + Math.random() * 0.6) / (radius * 0.01),
        size: Math.random() * 1.5 + 0.3,
        opacity: Math.random() * 0.8 + 0.2,
        hue: Math.random() > 0.6 ? 260 + Math.random() * 40 : 200 + Math.random() * 30,
        drift: -0.08 - Math.random() * 0.15,
      });
    }

    const draw = (time: number) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const cx = w / 2;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);

      // Accretion disk glow
      const t = time * 0.0003;
      const glowRadius = 160 + Math.sin(t) * 10;

      // Outer glow
      const outerGlow = ctx.createRadialGradient(cx, cy, glowRadius * 0.3, cx, cy, glowRadius * 2);
      outerGlow.addColorStop(0, "hsla(270, 60%, 30%, 0.08)");
      outerGlow.addColorStop(0.4, "hsla(250, 50%, 20%, 0.04)");
      outerGlow.addColorStop(1, "transparent");
      ctx.fillStyle = outerGlow;
      ctx.fillRect(0, 0, w, h);

      // Accretion ring
      for (const p of particles) {
        p.angle += p.speed * 0.008;
        p.radius += p.drift * 0.05;

        if (p.radius < 20) {
          p.radius = 250 + Math.random() * 70;
          p.angle = Math.random() * Math.PI * 2;
          p.opacity = Math.random() * 0.8 + 0.2;
        }

        // Elliptical orbit for 3D perspective
        const x = cx + Math.cos(p.angle) * p.radius;
        const y = cy + Math.sin(p.angle) * p.radius * 0.35;
        const distFactor = 1 - Math.abs(p.radius - 140) / 200;
        const brightness = Math.max(0, distFactor);
        const alpha = p.opacity * brightness * (0.6 + 0.4 * Math.sin(time * 0.002 + p.angle));

        if (alpha < 0.01) continue;

        // Particle glow
        const grad = ctx.createRadialGradient(x, y, 0, x, y, p.size * 4);
        grad.addColorStop(0, `hsla(${p.hue}, 70%, 70%, ${alpha})`);
        grad.addColorStop(1, `hsla(${p.hue}, 70%, 50%, 0)`);
        ctx.beginPath();
        ctx.arc(x, y, p.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 50%, 85%, ${alpha})`;
        ctx.fill();
      }

      // Central black hole
      const holeGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 60);
      holeGrad.addColorStop(0, "rgba(0, 0, 0, 1)");
      holeGrad.addColorStop(0.6, "rgba(0, 0, 0, 0.95)");
      holeGrad.addColorStop(0.85, "rgba(0, 0, 0, 0.4)");
      holeGrad.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(cx, cy, 60, 0, Math.PI * 2);
      ctx.fillStyle = holeGrad;
      ctx.fill();

      // Event horizon rim
      const rimGrad = ctx.createRadialGradient(cx, cy, 35, cx, cy, 55);
      const rimPulse = 0.15 + 0.1 * Math.sin(t * 3);
      rimGrad.addColorStop(0, "transparent");
      rimGrad.addColorStop(0.5, `hsla(270, 80%, 50%, ${rimPulse})`);
      rimGrad.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(cx, cy, 55, 0, Math.PI * 2);
      ctx.fillStyle = rimGrad;
      ctx.fill();

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[2] pointer-events-none"
    />
  );
}
