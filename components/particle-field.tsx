"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

interface ParticleFieldProps {
  variant?: "primary" | "accent" | "subtle" | "mixed";
  density?: "low" | "medium" | "high";
  speed?: "slow" | "medium" | "fast";
}

export function ParticleField({
  variant = "primary",
  density = "medium",
  speed = "medium",
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    // Configuración de colores según variante
    const getColors = () => {
      switch (variant) {
        case "primary":
          return {
            particle: "59, 130, 246", // Azul brillante
            line: "59, 130, 246",
          };
        case "accent":
          return {
            particle: "251, 146, 60", // Naranja brillante
            line: "251, 146, 60",
          };
        case "subtle":
          return {
            particle: "148, 163, 184", // Gris
            line: "148, 163, 184",
          };
        case "mixed":
          return {
            particle: Math.random() > 0.5 ? "59, 130, 246" : "251, 146, 60",
            line: "148, 163, 184",
          };
      }
    };

    // Configuración de densidad
    const getDensity = () => {
      switch (density) {
        case "low":
          return 30;
        case "medium":
          return 50;
        case "high":
          return 80;
      }
    };

    // Configuración de velocidad
    const getSpeed = () => {
      switch (speed) {
        case "slow":
          return 0.2;
        case "medium":
          return 0.3;
        case "fast":
          return 0.5;
      }
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const createParticles = () => {
      const maxParticles = getDensity();
      const particleCount = Math.min(
        maxParticles,
        Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 15000)
      );
      particles = [];
      const speedMultiplier = getSpeed();

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * speedMultiplier,
          vy: (Math.random() - 0.5) * speedMultiplier,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.4 + 0.2,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Draw particles
      particles.forEach((particle, i) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        const colors =
          i % 2 === 0 || variant !== "mixed"
            ? getColors()
            : { particle: "251, 146, 60", line: "" };
        ctx.fillStyle = `rgba(${colors.particle}, ${particle.opacity})`;
        ctx.fill();
      });

      // Draw connecting lines
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            const colors = getColors();
            ctx.strokeStyle = `rgba(${colors.line}, ${
              0.15 * (1 - distance / 120)
            })`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
    };

    const updateParticles = () => {
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.offsetWidth;
        if (particle.x > canvas.offsetWidth) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.offsetHeight;
        if (particle.y > canvas.offsetHeight) particle.y = 0;
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationId = requestAnimationFrame(animate);
    };

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    resize();
    createParticles();
    animate();

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [variant, density, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ opacity: 0.6 }}
    />
  );
}
