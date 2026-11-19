'use client';

import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function ParticleConstellation() {
  const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState<any[]>([]);
  const [connections, setConnections] = useState<any[]>([]);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);

    // Generate constellation stars
    const generatedStars = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 3,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
    }));
    setStars(generatedStars);

    // Generate connections between nearby stars
    const generatedConnections: any[] = [];
    generatedStars.forEach((star1, i) => {
      generatedStars.slice(i + 1).forEach((star2, j) => {
        const distance = Math.sqrt(
          Math.pow(star2.x - star1.x, 2) + Math.pow(star2.y - star1.y, 2)
        );
        if (distance < 20) {
          generatedConnections.push({
            id: `${i}-${j}`,
            x1: star1.x,
            y1: star1.y,
            x2: star2.x,
            y2: star2.y,
            delay: Math.random() * 3,
          });
        }
      });
    });
    setConnections(generatedConnections);
  }, []);

  if (!mounted || shouldReduceMotion) {
    return <div className="relative w-full h-[150px] bg-gradient-to-b from-gray-50 to-white" />;
  }

  return (
    <div className="relative w-full h-[150px] overflow-hidden bg-gradient-to-b from-blue-50/30 to-white">
      <svg className="absolute inset-0 w-full h-full">
        {/* Draw connections */}
        {connections.map((conn) => (
          <motion.line
            key={conn.id}
            x1={`${conn.x1}%`}
            y1={`${conn.y1}%`}
            x2={`${conn.x2}%`}
            y2={`${conn.y2}%`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              delay: conn.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Draw stars */}
        {stars.map((star) => (
          <motion.circle
            key={star.id}
            cx={`${star.x}%`}
            cy={`${star.y}%`}
            r={star.size}
            fill="#3b82f6"
            initial={{ opacity: 0.3 }}
            animate={{
              opacity: [0.3, 1, 0.3],
              r: [star.size, star.size * 1.5, star.size],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Gradient definition */}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 0.7, 0], y: [20, 0, -20] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <div className="text-center">
          <p className="text-blue-600/50 text-sm font-medium tracking-widest">
            CONNECTING DREAMS TO REALITY
          </p>
        </div>
      </motion.div>

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/20 to-transparent"
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}
