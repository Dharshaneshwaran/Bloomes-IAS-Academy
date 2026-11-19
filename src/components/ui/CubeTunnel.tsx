'use client';

import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function CubeTunnel() {
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || shouldReduceMotion) {
    return <div className="relative w-full h-[180px] bg-white" />;
  }

  return (
    <div className="relative w-full h-[180px] overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white flex items-center justify-center perspective-[1000px]">
      {/* 3D Rotating Cubes */}
      {[...Array(8)].map((_, i) => {
        const scale = 1 - i * 0.12;
        const opacity = 1 - i * 0.1;
        
        return (
          <motion.div
            key={`cube-${i}`}
            className="absolute"
            style={{
              width: `${80 + i * 20}px`,
              height: `${80 + i * 20}px`,
              transformStyle: 'preserve-3d',
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              scale: [scale, scale * 1.1, scale],
            }}
            transition={{
              duration: 20 - i * 2,
              delay: i * 0.3,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* Cube faces */}
            <motion.div
              className="absolute inset-0 border-2 border-blue-400/30 bg-blue-400/5"
              style={{
                transform: `translateZ(${40 + i * 10}px)`,
                opacity,
              }}
              animate={{
                borderColor: ['rgba(59, 130, 246, 0.3)', 'rgba(96, 165, 250, 0.5)', 'rgba(59, 130, 246, 0.3)'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute inset-0 border-2 border-blue-400/30 bg-blue-400/5"
              style={{
                transform: `rotateY(90deg) translateZ(${40 + i * 10}px)`,
                opacity,
              }}
            />
            <motion.div
              className="absolute inset-0 border-2 border-blue-400/30 bg-blue-400/5"
              style={{
                transform: `rotateY(180deg) translateZ(${40 + i * 10}px)`,
                opacity,
              }}
            />
            <motion.div
              className="absolute inset-0 border-2 border-blue-400/30 bg-blue-400/5"
              style={{
                transform: `rotateY(-90deg) translateZ(${40 + i * 10}px)`,
                opacity,
              }}
            />
            <motion.div
              className="absolute inset-0 border-2 border-blue-400/30 bg-blue-400/5"
              style={{
                transform: `rotateX(90deg) translateZ(${40 + i * 10}px)`,
                opacity,
              }}
            />
            <motion.div
              className="absolute inset-0 border-2 border-blue-400/30 bg-blue-400/5"
              style={{
                transform: `rotateX(-90deg) translateZ(${40 + i * 10}px)`,
                opacity,
              }}
            />
          </motion.div>
        );
      })}

      {/* Center text overlay */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0, 1, 0],
          scale: [0.8, 1, 1.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="text-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-lg">
          <p className="text-blue-600 text-base font-bold tracking-wide">
            DIMENSIONS OF SUCCESS
          </p>
        </div>
      </motion.div>

      {/* Energy particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-blue-400 rounded-full"
          style={{
            left: `${50}%`,
            top: `${50}%`,
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 400],
            y: [0, (Math.random() - 0.5) * 200],
            opacity: [1, 0],
            scale: [1, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.15,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}
