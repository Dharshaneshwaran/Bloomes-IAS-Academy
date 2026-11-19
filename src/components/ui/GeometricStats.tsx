'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function GeometricStats() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white relative overflow-hidden">
      {/* Animated Background Shapes - Much More Visible */}
      <motion.div
        animate={{ 
          rotate: 360,
        }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 right-10 w-64 h-64 border-4 border-blue-400/40"
        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
      ></motion.div>

      <motion.div
        animate={{ 
          rotate: -360,
        }}
        transition={{ 
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-10 left-10 w-48 h-48 border-4 border-purple-400/40 rounded-full"
      ></motion.div>

      {/* Additional Floating Shapes */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: [0, 90, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-blue-500/30"
      ></motion.div>

      <motion.div
        animate={{ 
          y: [0, 40, 0],
          x: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4 w-40 h-40 border-4 border-purple-500/30 rounded-full"
      ></motion.div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [0, -100, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2
          }}
          className="absolute w-2 h-2 bg-blue-500/40 rounded-full"
          style={{
            left: `${10 + i * 6}%`,
            top: `${20 + (i % 3) * 30}%`
          }}
        ></motion.div>
      ))}

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{ 
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        ></motion.div>
      </div>

      {/* Large Gradient Orbs */}
      <motion.div
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
      ></motion.div>

      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 right-1/3 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Center 3D Cube Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="text-center mb-12"
          >
            <motion.div 
              animate={{ 
                rotateY: 360,
                rotateX: [0, 15, 0]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-40 h-40 mx-auto mb-6 relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Main rotating cube structure */}
              <div className="absolute inset-0 border-8 border-blue-500/60" 
                   style={{ 
                     transform: 'translateZ(50px)',
                     clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                   }}
              ></div>
              <div className="absolute inset-0 border-8 border-purple-500/60" 
                   style={{ 
                     transform: 'translateZ(-50px)',
                     clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                   }}
              ></div>
              <div className="absolute inset-0 border-8 border-blue-400/40" 
                   style={{ 
                     transform: 'rotateY(90deg) translateZ(50px)',
                     clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                   }}
              ></div>
              <div className="absolute inset-0 border-8 border-purple-400/40" 
                   style={{ 
                     transform: 'rotateY(-90deg) translateZ(50px)',
                     clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                   }}
              ></div>
              
              {/* Center Glow */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-xl"
              ></motion.div>
            </motion.div>
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-black text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-3"
            >
              DIMENSIONS OF SUCCESS
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-600 text-sm"
            >
              Building excellence from every angle
            </motion.p>

            {/* Animated Icons Around Title */}
            <div className="relative mt-8 mb-8 h-20">
              {[
                { icon: '📚', delay: 0, angle: 0 },
                { icon: '🎯', delay: 0.2, angle: 60 },
                { icon: '🏆', delay: 0.4, angle: 120 },
                { icon: '💡', delay: 0.6, angle: 180 },
                { icon: '⭐', delay: 0.8, angle: 240 },
                { icon: '🎓', delay: 1, angle: 300 }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    rotate: 360,
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    delay: item.delay
                  }}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `rotate(${item.angle}deg) translateX(120px)`
                  }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.3, 1],
                      rotate: -360
                    }}
                    transition={{ 
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="text-3xl"
                  >
                    {item.icon}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - Live Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
              }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-blue-600 text-xs font-bold tracking-wider">LIVE STATISTICS</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-green-500 rounded-full"
                ></motion.div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-black text-gray-900">8.2K</div>
                  <div className="text-xs text-gray-600">Active Learners</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-green-600">95%</div>
                  <div className="text-xs text-gray-600">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-blue-600">24/7</div>
                  <div className="text-xs text-gray-600">Support</div>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Live HD Classes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.2)"
              }}
              className="bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 rounded-2xl p-6 shadow-lg text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                </motion.div>
                <div>
                  <div className="font-black text-lg">Live HD Classes</div>
                  <div className="text-xs text-white/70">4K quality streaming</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-6">
                <div>
                  <div className="text-xs text-white/70 mb-1">Tamil Medium</div>
                  <div className="text-sm font-bold">Available</div>
                </div>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                >
                  →
                </motion.div>
              </div>
            </motion.div>

            {/* Card 3 - Progress Tracker */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
              }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
            >
              <div className="text-blue-600 text-xs font-bold tracking-wider mb-4">PROGRESS TRACKER</div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600">Syllabus Coverage</span>
                    <span className="font-bold text-gray-900">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '78%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600">Mock Tests</span>
                    <span className="font-bold text-gray-900">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '92%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                      className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600">Preparation Level</span>
                    <span className="font-bold text-gray-900">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.9 }}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
