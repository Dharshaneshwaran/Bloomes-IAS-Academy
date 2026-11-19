'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function MatrixEducationRain() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
    if (shouldReduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = 200; // Gap height

    // Education symbols instead of Matrix characters
    const educationSymbols = [
      '📚', '✏️', '🎓', '📖', '🏆', '⭐', '✓', '📝', 
      'A+', 'IAS', 'TNPSC', '100', '✨', '🎯', '💡', '🌟'
    ];

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    // Animation loop
    const draw = () => {
      // Fade effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Blue gradient text
      ctx.fillStyle = '#3b82f6';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const symbol = educationSymbols[Math.floor(Math.random() * educationSymbols.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(symbol, x, y);

        // Reset drop randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 200;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [shouldReduceMotion]);

  if (!mounted || shouldReduceMotion) return null;

  return (
    <div className="relative w-full h-[200px] overflow-hidden bg-white">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />
      
      {/* Overlay gradient to blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      
      {/* Floating text overlay */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <p className="text-blue-600/40 text-lg font-semibold tracking-wider">
          Where Knowledge Flows Continuously
        </p>
      </motion.div>
    </div>
  );
}
