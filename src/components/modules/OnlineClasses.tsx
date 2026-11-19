'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function OnlineClasses() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-white relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT SECTION - Personal Message */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Personal Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-bold"
              >
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Join 8,000+ TNPSC Aspirants
              </motion.div>

              {/* Main Heading - More Personal */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-6xl font-black text-gray-900 leading-tight"
              >
                Your TNPSC success story
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                  starts here
                </span>
              </motion.h2>

              {/* Personal Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                We understand your dream of serving Tamil Nadu. That's why we've helped 2000+ candidates like you crack TNPSC exams with personalized guidance, expert faculty, and proven strategies.
              </motion.p>

              {/* Benefits List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4"
              >
                {[
                  { icon: '🎯', text: 'Personalized study plans designed for YOUR success' },
                  { icon: '👨‍🏫', text: 'Learn from faculty who cracked TNPSC themselves' },
                  { icon: '💪', text: 'Practice with 1000+ real exam pattern tests' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="text-3xl">{item.icon}</div>
                    <p className="text-gray-700 font-medium">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-4 rounded-xl text-lg flex items-center gap-3 shadow-lg"
                >
                  <span>Start Your Journey</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-900 font-bold px-8 py-4 rounded-xl text-lg border-2 border-gray-200 hover:border-blue-600 transition-colors"
                >
                  Talk to Our Mentor
                </motion.button>
              </motion.div>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex items-center gap-2 text-sm text-gray-500"
              >
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No hidden fees • Cancel anytime • 7-day money back guarantee</span>
              </motion.div>
            </motion.div>

            {/* RIGHT SECTION - Visual Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="space-y-6">
                
                {/* Success Stories Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex -space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full border-4 border-white flex items-center justify-center text-white font-bold">R</div>
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full border-4 border-white flex items-center justify-center text-white font-bold">P</div>
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full border-4 border-white flex items-center justify-center text-white font-bold">A</div>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-black text-lg">Real Success Stories</h4>
                      <p className="text-gray-500 text-sm">From students like you</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                      <p className="text-gray-800 font-semibold mb-2">"I cleared Group I in my first attempt!"</p>
                      <p className="text-gray-600 text-sm">— Priya, Chennai</p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
                      <p className="text-gray-800 font-semibold mb-2">"The faculty made complex topics so easy"</p>
                      <p className="text-gray-600 text-sm">— Rajesh, Coimbatore</p>
                    </div>
                  </div>
                </motion.div>

                {/* Live Classes Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 rounded-3xl p-8 shadow-2xl text-white"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                    >
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                      </svg>
                    </motion.div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-white/80 text-sm font-bold">LIVE NOW</span>
                      </div>
                      <h4 className="text-white font-black text-xl">350+ students watching</h4>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">Group I - Polity</span>
                        <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Tamil</span>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">Group II - History</span>
                        <span className="text-sm bg-white/20 px-3 py-1 rounded-full">English</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-white/80 text-sm">4K HD Quality • Tamil & English • Lifetime Access</p>
                  </div>
                </motion.div>

                {/* Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
                >
                  <h4 className="text-gray-900 font-black text-xl mb-6">Your Success is Our Mission</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">95%</div>
                      <div className="text-gray-600 text-sm font-medium">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">24/7</div>
                      <div className="text-gray-600 text-sm font-medium">Mentor Support</div>
                    </div>
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
