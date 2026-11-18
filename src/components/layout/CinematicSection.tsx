'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { SITE_CONFIG } from '@/constants';

export default function CinematicSection() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  
  // Parallax effects based on scroll
  const bookY = useTransform(scrollYProgress, [0.8, 1], [100, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Disable animations for reduced motion preference
  const animationConfig = shouldReduceMotion 
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, transition: { duration: 0 } }
    : {};

  // Generate floating pages data
  const floatingPages = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 0.3,
    x: (i % 2 === 0 ? 1 : -1) * (50 + Math.random() * 100),
    rotation: (Math.random() - 0.5) * 30,
    duration: 8 + Math.random() * 4,
  }));

  // Generate birds data (transformed pages)
  const birds = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    delay: 2 + i * 0.5,
    startX: (i % 2 === 0 ? -20 : 120),
    duration: 15 + Math.random() * 5,
  }));

  // Generate particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 4,
  }));

  if (!mounted) return null;

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a1a3e] via-[#1e3a8a] to-[#1e40af] py-16 md:py-20">
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#3b82f6] rounded-full blur-[120px]" />
      </div>

      {/* Floating Particles */}
      {!shouldReduceMotion && particles.slice(0, 15).map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute w-1 h-1 bg-[#60a5fa] rounded-full"
          style={{
            left: `${particle.x}%`,
            top: '70%',
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            y: [-50, -200],
            x: [0, (Math.random() - 0.5) * 50],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Main Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Cinematic Book Scene */}
          <motion.div 
            className="relative h-[250px] md:h-[300px] mb-8"
            style={shouldReduceMotion ? {} : { y: bookY }}
          >
            {/* Open Book Base */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[200px] md:w-[280px] h-[120px] md:h-[160px]">
              {/* Book Shadow */}
              <div className="absolute inset-0 bg-black/40 blur-2xl transform translate-y-8" />
              
              {/* Left Page */}
              <motion.div
                className="absolute left-0 w-[48%] h-full bg-gradient-to-br from-[#f9f6f1] to-[#e8dcc8] rounded-l-lg shadow-2xl"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'perspective(1000px) rotateY(-15deg)',
                }}
                {...(shouldReduceMotion ? {} : {
                  initial: { rotateY: 0 },
                  animate: { rotateY: -15 },
                  transition: { duration: 1, ease: 'easeOut' }
                })}
              >
                {/* Page Lines */}
                <div className="absolute inset-0 p-6 opacity-20">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="h-px bg-gray-400 mb-3" />
                  ))}
                </div>
                {/* Book Spine Shadow */}
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-black/20" />
              </motion.div>

              {/* Right Page */}
              <motion.div
                className="absolute right-0 w-[48%] h-full bg-gradient-to-bl from-[#f9f6f1] to-[#e8dcc8] rounded-r-lg shadow-2xl"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'perspective(1000px) rotateY(15deg)',
                }}
                {...(shouldReduceMotion ? {} : {
                  initial: { rotateY: 0 },
                  animate: { rotateY: 15 },
                  transition: { duration: 1, ease: 'easeOut' }
                })}
              >
                {/* Page Lines */}
                <div className="absolute inset-0 p-6 opacity-20">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="h-px bg-gray-400 mb-3" />
                  ))}
                </div>
                {/* Book Spine Shadow */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-l from-transparent to-black/20" />
              </motion.div>

              {/* Blue Light Emanating from Book */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32"
                {...(shouldReduceMotion ? {} : {
                  initial: { opacity: 0, scale: 0.8 },
                  animate: { 
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.8, 1.1, 0.8],
                  },
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }
                })}
              >
                <div className="absolute inset-0 bg-[#3b82f6] rounded-full blur-2xl" />
              </motion.div>

              {/* Light Rays */}
              {!shouldReduceMotion && [...Array(3)].map((_, i) => (
                <motion.div
                  key={`ray-${i}`}
                  className="absolute left-1/2 bottom-1/2 w-1 bg-gradient-to-t from-[#60a5fa] to-transparent origin-bottom"
                  style={{
                    height: '120px',
                    transform: `translateX(-50%) rotate(${(i - 1) * 20}deg)`,
                  }}
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{
                    opacity: [0, 0.25, 0],
                    scaleY: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                />
              ))}
            </div>

            {/* Floating Pages */}
            {!shouldReduceMotion && floatingPages.slice(0, 5).map((page) => (
              <motion.div
                key={`page-${page.id}`}
                className="absolute left-1/2 bottom-20 w-12 h-16 md:w-14 md:h-20 bg-gradient-to-br from-white to-[#f5f5dc] rounded-sm shadow-xl"
                style={{
                  transformStyle: 'preserve-3d',
                }}
                initial={{
                  x: '-50%',
                  y: 0,
                  rotateX: 0,
                  rotateZ: 0,
                  opacity: 0,
                }}
                animate={{
                  x: `calc(-50% + ${page.x * 0.7}px)`,
                  y: [-150, -350],
                  rotateX: [0, page.rotation],
                  rotateZ: [0, page.rotation * 1.5],
                  opacity: [0, 1, 0.8, 0],
                }}
                transition={{
                  duration: page.duration,
                  delay: page.delay,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              >
                {/* Page texture lines */}
                <div className="absolute inset-0 p-1.5 opacity-30">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-px bg-gray-400 mb-1" />
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Flying Birds (Transformed Pages) */}
            {!shouldReduceMotion && birds.slice(0, 2).map((bird) => (
              <motion.div
                key={`bird-${bird.id}`}
                className="absolute top-10 w-10 h-6"
                initial={{
                  x: `${bird.startX}%`,
                  y: Math.random() * 100,
                  opacity: 0,
                }}
                animate={{
                  x: bird.startX < 50 ? '120%' : '-20%',
                  y: Math.random() * 150,
                  opacity: [0, 0.8, 0.8, 0],
                }}
                transition={{
                  duration: bird.duration,
                  delay: bird.delay,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                {/* Simple bird silhouette with flapping */}
                <motion.svg
                  viewBox="0 0 100 60"
                  className="w-full h-full fill-white drop-shadow-lg"
                  animate={{
                    scaleX: [1, 0.9, 1],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <path d="M50,30 Q30,20 10,30 Q30,25 50,30 Q70,25 90,30 Q70,20 50,30 Z" />
                </motion.svg>
              </motion.div>
            ))}
          </motion.div>

          {/* Branding Text */}
          <motion.div
            className="text-center space-y-3"
            style={shouldReduceMotion ? {} : { opacity: textOpacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {/* Main Heading */}
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight px-4"
              style={{
                textShadow: '0 4px 20px rgba(59, 130, 246, 0.4)',
                letterSpacing: '0.02em',
              }}
              {...(shouldReduceMotion ? {} : {
                initial: { opacity: 0, y: 15 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 1.2 }
              })}
            >
              <span className="bg-gradient-to-r from-[#93c5fd] via-[#60a5fa] to-[#93c5fd] bg-clip-text text-transparent">
                KNOWLEDGE IS THE BEGINNING OF EVERY GREAT JOURNEY
              </span>
            </motion.h2>

            {/* Supporting Text */}
            <motion.p
              className="text-base md:text-lg text-[#93c5fd] max-w-2xl mx-auto px-4"
              style={{
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
              }}
              {...(shouldReduceMotion ? {} : {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.8, delay: 1.5 }
              })}
            >
              Every page you turn brings you one step closer to your dream.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade to Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#0a1f3e]" />
    </section>
  );
}
