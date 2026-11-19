'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function GeometricStats() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white relative overflow-hidden">
      {/* Animated Background Shapes */}
      <motion.div
        animate={{ 
          rotate: 360,
        }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 right-10 w-64 h-64 border-4 border-blue-300/30"
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
        className="absolute bottom-10 left-10 w-48 h-48 border-4 border-purple-300/30 rounded-full"
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
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-32 h-32 mx-auto mb-6 relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 border-8 border-blue-500/40" 
                   style={{ 
                     transform: 'translateZ(40px)',
                     clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                   }}
              ></div>
              <div className="absolute inset-0 border-8 border-purple-500/40" 
                   style={{ 
                     transform: 'translateZ(-40px)',
                     clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                   }}
              ></div>
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-black text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-3">
              DIMENSIONS OF SUCCESS
            </h3>
            <p className="text-gray-600 text-sm">Building excellence from every angle</p>
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
