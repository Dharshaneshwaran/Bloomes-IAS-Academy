'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { SITE_CONFIG } from '@/constants';

export default function CinematicSection() {
  const [mounted, setMounted] = useState(false);
  const [floatingPages, setFloatingPages] = useState<any[]>([]);
  const [particles, setParticles] = useState<any[]>([]);
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  
  // Smoother parallax effects
  const bookY = useTransform(scrollYProgress, [0.8, 1], [50, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  
  useEffect(() => {
    setMounted(true);
    
    // Generate floating pages with better distribution
    setFloatingPages(Array.from({ length: 6 }, (_, i) => ({
      id: i,
      delay: i * 0.8,
      x: (i % 2 === 0 ? 1 : -1) * (60 + Math.random() * 80),
      rotation: (Math.random() - 0.5) * 25,
      duration: 10 + Math.random() * 4,
    })));
    
    // Fewer, smoother particles
    setParticles(Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 6 + Math.random() * 3,
    })));
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a1a3e] via-[#1e3a8a] to-[#1e40af] py-16 md:py-20">
      {/* Ambient Background Glow - Softer */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#3b82f6] rounded-full blur-[150px]" />
      </div>

      {/* Smoother Floating Particles */}
      {!shouldReduceMotion && particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute w-1.5 h-1.5 bg-[#60a5fa]/60 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: '75%',
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [-80, -280],
            x: [0, (Math.random() - 0.5) * 40],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: [0.4, 0.0, 0.2, 1], // Smooth cubic-bezier easing
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
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[220px] md:w-[300px] h-[130px] md:h-[180px]">
              {/* Softer Book Shadow */}
              <div className="absolute inset-0 bg-black/30 blur-3xl transform translate-y-10" />
              
              {/* Left Page with Page Flip Animation */}
              <motion.div
                className="absolute left-0 w-[48%] h-full bg-gradient-to-br from-[#fdfbf7] to-[#eee5d6] rounded-l-lg shadow-2xl"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'perspective(1200px) rotateY(-12deg)',
                  transformOrigin: 'right center',
                }}
                {...(shouldReduceMotion ? {} : {
                  initial: { rotateY: 0 },
                  animate: { 
                    rotateY: [-12, -15, -12],
                  },
                  transition: { 
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    repeatType: 'mirror',
                  }
                })}
              >
                {/* Page Lines */}
                <div className="absolute inset-0 p-6 opacity-15">
                  {[...Array(10)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      className="h-px bg-gray-500 mb-3"
                      initial={{ opacity: 0.15 }}
                      animate={{ opacity: [0.15, 0.25, 0.15] }}
                      transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                    />
                  ))}
                </div>
                {/* Book Spine Shadow */}
                <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-r from-transparent via-black/10 to-black/20" />
              </motion.div>

              {/* Right Page with Page Flip Animation */}
              <motion.div
                className="absolute right-0 w-[48%] h-full bg-gradient-to-bl from-[#fdfbf7] to-[#eee5d6] rounded-r-lg shadow-2xl"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'perspective(1200px) rotateY(12deg)',
                  transformOrigin: 'left center',
                }}
                {...(shouldReduceMotion ? {} : {
                  initial: { rotateY: 0 },
                  animate: { 
                    rotateY: [12, 15, 12],
                  },
                  transition: { 
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    repeatType: 'mirror',
                  }
                })}
              >
                {/* Page Lines */}
                <div className="absolute inset-0 p-6 opacity-15">
                  {[...Array(10)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      className="h-px bg-gray-500 mb-3"
                      initial={{ opacity: 0.15 }}
                      animate={{ opacity: [0.15, 0.25, 0.15] }}
                      transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                    />
                  ))}
                </div>
                {/* Book Spine Shadow */}
                <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-l from-transparent via-black/10 to-black/20" />
              </motion.div>

              {/* Smoother Blue Light Emanating from Book */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-36 md:h-36"
                {...(shouldReduceMotion ? {} : {
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { 
                    opacity: [0.25, 0.5, 0.25],
                    scale: [0.9, 1.15, 0.9],
                  },
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }
                })}
              >
                <div className="absolute inset-0 bg-[#3b82f6] rounded-full blur-3xl" />
              </motion.div>

              {/* Softer Light Rays */}
              {!shouldReduceMotion && [...Array(5)].map((_, i) => (
                <motion.div
                  key={`ray-${i}`}
                  className="absolute left-1/2 bottom-1/2 w-0.5 bg-gradient-to-t from-[#60a5fa]/40 to-transparent origin-bottom"
                  style={{
                    height: '140px',
                    transform: `translateX(-50%) rotate(${(i - 2) * 15}deg)`,
                  }}
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{
                    opacity: [0, 0.3, 0],
                    scaleY: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4,
                    delay: i * 0.4,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                />
              ))}
            </div>

            {/* Floating Pages with Page Flip Animation */}
            {!shouldReduceMotion && floatingPages.map((page) => (
              <motion.div
                key={`page-${page.id}`}
                className="absolute left-1/2 bottom-24 w-14 h-18 md:w-16 md:h-22 bg-gradient-to-br from-white/90 to-[#f5f5dc]/80 rounded shadow-2xl"
                style={{
                  transformStyle: 'preserve-3d',
                }}
                initial={{
                  x: '-50%',
                  y: 0,
                  rotateX: 0,
                  rotateY: 0,
                  rotateZ: 0,
                  opacity: 0,
                }}
                animate={{
                  x: `calc(-50% + ${page.x * 0.6}px)`,
                  y: [-120, -320],
                  rotateX: [0, page.rotation, page.rotation * 1.2],
                  rotateY: [0, page.rotation * 2, page.rotation * 3], // Page flipping effect
                  rotateZ: [0, page.rotation * 0.5, page.rotation * 0.8],
                  opacity: [0, 0.9, 0.7, 0],
                }}
                transition={{
                  duration: page.duration,
                  delay: page.delay,
                  repeat: Infinity,
                  ease: [0.4, 0.0, 0.2, 1], // Smooth easing
                }}
              >
                {/* Page texture lines */}
                <div className="absolute inset-0 p-2 opacity-25">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-px bg-gray-400 mb-1.5" />
                  ))}
                </div>
                {/* Page shadow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-black/10 rounded" />
              </motion.div>
            ))}
          </motion.div>

          {/* Branding Text with Smoother Animation */}
          <motion.div
            className="text-center space-y-4"
            style={shouldReduceMotion ? {} : { opacity: textOpacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
          >
            {/* Main Heading */}
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight px-4"
              style={{
                textShadow: '0 4px 25px rgba(59, 130, 246, 0.5)',
                letterSpacing: '0.03em',
              }}
              {...(shouldReduceMotion ? {} : {
                initial: { opacity: 0, y: 15 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 1, delay: 1.2, ease: [0.4, 0.0, 0.2, 1] }
              })}
            >
              <span className="bg-gradient-to-r from-[#a5d8ff] via-[#74c0fc] to-[#a5d8ff] bg-clip-text text-transparent">
                KNOWLEDGE IS THE BEGINNING OF EVERY GREAT JOURNEY
              </span>
            </motion.h2>

            {/* Supporting Text */}
            <motion.p
              className="text-base md:text-lg text-[#a5d8ff]/90 max-w-2xl mx-auto px-4"
              style={{
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.4)',
              }}
              {...(shouldReduceMotion ? {} : {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 1, delay: 1.6, ease: [0.4, 0.0, 0.2, 1] }
              })}
            >
              Every page you turn brings you one step closer to your dream.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Smoother Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#0a1f3e]" />
    </section>
  );
}
