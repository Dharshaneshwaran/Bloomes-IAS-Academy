'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PricingCards() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Animated Background Orbs - Much Larger */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
      ></motion.div>
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"
      ></motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="text-center mb-12"
        >
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full text-xs font-bold tracking-wider mb-4 shadow-lg"
          >
            <motion.span 
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-white rounded-full"
            ></motion.span>
            BLOOMS+ COURSES
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 tracking-tight">
            Choose Your <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">Success Path</span>
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Flexible plans designed for TNPSC aspirants at every stage
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          
          {/* LEFT CARD - Foundation Batch */}
          <motion.div 
            initial={{ opacity: 0, x: -100, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5,
              transition: { duration: 0.4 }
            }}
            className="group relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 p-8 rounded-2xl overflow-hidden shadow-2xl"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Floating shapes - Much Larger and More Animated */}
            <motion.div 
              animate={{ 
                scale: [1, 2, 1],
                x: [0, 50, 0],
                y: [0, -50, 0],
                opacity: [0.05, 0.15, 0.05]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"
            ></motion.div>
            <motion.div 
              animate={{ 
                scale: [1, 1.8, 1],
                x: [0, -30, 0],
                y: [0, 30, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"
            ></motion.div>

            {/* Popular Badge */}
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute top-6 right-6"
            >
              <motion.span 
                animate={{ 
                  scale: [1, 1.1, 1],
                  boxShadow: ["0 0 0 0px rgba(255,255,255,0.3)", "0 0 0 10px rgba(255,255,255,0)", "0 0 0 0px rgba(255,255,255,0)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold block"
              >
                POPULAR
              </motion.span>
            </motion.div>

            {/* Icon */}
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.6 }}
              className="mb-6"
            >
              <motion.div 
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 360,
                  transition: { duration: 0.6 }
                }}
                className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20"
              >
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </motion.div>
            </motion.div>

            {/* Title */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6"
            >
              <h3 className="text-white text-2xl font-black mb-2 tracking-tight">
                Foundation Batch
              </h3>
              <p className="text-white/70 text-sm font-medium">
                GROUP II-A • Perfect for Beginners
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-6 mb-6 pb-6 border-b border-white/10"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="text-white text-2xl font-black">2000+</div>
                <div className="text-white/60 text-xs font-medium">Students</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="text-white text-2xl font-black">800+</div>
                <div className="text-white/60 text-xs font-medium">Selections</div>
              </motion.div>
            </motion.div>

            {/* Features */}
            <div className="space-y-3 mb-6">
              {[
                'Study Materials (Tamil & English)',
                'Weekly Mock Tests',
                'Doubt Clearing Sessions',
                'Current Affairs Updates'
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  className="flex items-start gap-2"
                >
                  <motion.svg 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + i * 0.1, type: "spring", bounce: 0.6 }}
                    className="w-5 h-5 text-white flex-shrink-0 mt-0.5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </motion.svg>
                  <span className="text-white/90 text-sm font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Price */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1, type: "spring", bounce: 0.5 }}
              className="mb-6"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-white">₹24,995</span>
                <span className="text-white/60 font-bold text-sm">/year</span>
              </div>
              <p className="text-white/60 text-xs mt-1">One-time payment • Lifetime updates</p>
            </motion.div>

            {/* Button */}
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255,255,255,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-xl transition-all duration-200"
            >
              Enroll Now →
            </motion.button>
          </motion.div>

          {/* RIGHT CARD - Complete Program */}
          <motion.div 
            initial={{ opacity: 0, x: 100, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            whileHover={{ 
              scale: 1.05, 
              rotateY: -5,
              transition: { duration: 0.4 }
            }}
            className="group relative bg-white p-8 rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Gradient Glow - Much Larger */}
            <motion.div 
              animate={{ 
                scale: [1, 2.5, 1],
                rotate: [0, 180, 360],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
            ></motion.div>

            {/* Limited Seats Badge */}
            <motion.div 
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute top-6 right-6"
            >
              <motion.span 
                animate={{ 
                  scale: [1, 1.15, 1],
                  boxShadow: [
                    "0 0 0 0px rgba(239, 68, 68, 0.4)",
                    "0 0 0 15px rgba(239, 68, 68, 0)",
                    "0 0 0 0px rgba(239, 68, 68, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold block"
              >
                8 SEATS LEFT
              </motion.span>
            </motion.div>

            {/* Icon */}
            <motion.div 
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.6 }}
              className="mb-6"
            >
              <motion.div 
                whileHover={{ 
                  scale: 1.2, 
                  rotate: -360,
                  transition: { duration: 0.6 }
                }}
                className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center"
              >
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </motion.div>
            </motion.div>

            {/* Title */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6"
            >
              <h3 className="text-gray-900 text-2xl font-black mb-2 tracking-tight">
                Complete Mastery
              </h3>
              <p className="text-gray-600 text-sm font-medium">
                GROUP I & II • Full Preparation Package
              </p>
            </motion.div>

            {/* Feature Grid */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200"
            >
              <motion.div 
                whileHover={{ 
                  scale: 1.15, 
                  rotate: 5,
                  transition: { type: "spring", stiffness: 400 }
                }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-3 rounded-xl"
              >
                <div className="text-blue-600 text-xl font-black">1000+</div>
                <div className="text-gray-600 text-xs font-medium">Mock Tests</div>
              </motion.div>
              <motion.div 
                whileHover={{ 
                  scale: 1.15, 
                  rotate: -5,
                  transition: { type: "spring", stiffness: 400 }
                }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-3 rounded-xl"
              >
                <div className="text-purple-600 text-xl font-black">24/7</div>
                <div className="text-gray-600 text-xs font-medium">Support</div>
              </motion.div>
            </motion.div>

            {/* Features */}
            <div className="space-y-3 mb-6">
              {[
                'Personalized Study Plan',
                'Expert Faculty (Tamil & English)',
                'Daily Mock Tests & Analysis',
                'Interview Preparation',
                'One-on-One Mentorship',
                'Complete Syllabus Coverage'
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  whileHover={{ x: -10, transition: { duration: 0.2 } }}
                  className="flex items-start gap-2"
                >
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + i * 0.1, type: "spring", bounce: 0.6 }}
                    className="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-500 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <span className="text-gray-700 text-sm font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Price */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1, type: "spring", bounce: 0.5 }}
              className="mb-6"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">₹49,995</span>
                <span className="text-gray-500 font-bold text-sm">/year</span>
              </div>
              <p className="text-gray-500 text-xs mt-1">Includes everything • Lifetime access</p>
            </motion.div>

            {/* Buttons */}
            <div className="flex gap-3">
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200"
              >
                Get Started
              </motion.button>
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ 
                  scale: 1.1,
                  borderColor: "rgb(59, 130, 246)",
                  color: "rgb(59, 130, 246)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-5 border-2 border-gray-200 text-gray-700 font-bold rounded-xl transition-all duration-200"
              >
                Details
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Info */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-gray-600 text-sm mb-4">
            💬 Questions? We're here to help!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <motion.a 
              href="mailto:admission@bloomsacademy.com" 
              whileHover={{ scale: 1.1, y: -3 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="flex items-center gap-2 text-blue-600 hover:text-purple-600 font-semibold"
            >
              <motion.svg 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </motion.svg>
              admission@bloomsacademy.com
            </motion.a>
            <span className="text-gray-400">•</span>
            <motion.a 
              href="tel:9003190030" 
              whileHover={{ scale: 1.1, y: -3 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="flex items-center gap-2 text-blue-600 hover:text-purple-600 font-semibold"
            >
              <motion.svg 
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </motion.svg>
              90031 90030
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
