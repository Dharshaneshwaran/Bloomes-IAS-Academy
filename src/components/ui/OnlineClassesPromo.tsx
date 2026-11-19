'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function OnlineClassesPromo() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-100 via-white to-purple-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Card - Live HD Classes Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 rounded-3xl p-8 mb-8 shadow-2xl"
          >
            <div className="flex items-start gap-6">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0"
              >
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </motion.div>
              
              <div className="flex-1">
                <h3 className="text-3xl font-black text-white mb-2">Live HD Classes</h3>
                <p className="text-white/80 text-lg font-medium mb-6">4K quality streaming</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-bold">Tamil Medium</span>
                      <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold">Available</span>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-bold">English Medium</span>
                      <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold">Available</span>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-bold">Recorded Sessions</span>
                      <span className="bg-blue-400 text-white text-xs px-3 py-1 rounded-full font-bold">Lifetime</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonials Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 mb-8 shadow-xl border border-gray-200"
          >
            <h3 className="text-2xl font-black text-gray-900 mb-6">Student Success Stories</h3>
            
            <div className="space-y-6">
              {/* Testimonial 1 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-black text-xl">
                  R
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl rounded-tl-none p-4 mb-2">
                    <p className="font-bold">Excellent! Best faculty and materials. 💯</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 text-sm font-medium">Rajesh, Group II Aspirant</p>
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-black">
                      P
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs mt-1">Priya, Group I Selected</p>
                </div>
              </motion.div>

              {/* Testimonial 2 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-black text-xl">
                  A
                </div>
                <div className="flex-1">
                  <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-tl-none p-4 mb-2">
                    <p className="font-bold">The mock tests really helped! 🎯</p>
                  </div>
                  <p className="text-gray-600 text-sm font-medium">Arun, Group IV Selected</p>
                </div>
              </motion.div>

              {/* Question */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center py-4"
              >
                <p className="text-gray-700 text-lg font-bold">How do you find the TNPSC classes?</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom Card - All over Tamil Nadu */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-3xl p-10 shadow-xl border border-gray-200 text-center"
          >
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
            >
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">All over Tamil Nadu</h3>
            <p className="text-gray-600 text-lg font-medium max-w-2xl mx-auto">
              Join 8,000+ students learning across Tamil Nadu with our comprehensive TNPSC preparation programs
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 max-w-3xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">8000+</div>
                <div className="text-sm text-gray-600 font-medium mt-1">Students</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">32</div>
                <div className="text-sm text-gray-600 font-medium mt-1">Districts</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">2000+</div>
                <div className="text-sm text-gray-600 font-medium mt-1">Selections</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
