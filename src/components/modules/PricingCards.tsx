'use client';

import React from 'react';
import { motion } from "framer-motion";
import { LuBookOpen, LuSparkles, LuMessageCircle, LuMail, LuPhone } from "react-icons/lu";

export default function PricingCards() {
  return (
    <section className="py-16 md:py-20 bg-[var(--light)] relative overflow-hidden">
      
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-2 rounded-full text-xs font-bold tracking-wider mb-4 shadow-lg"
          >
            <motion.span 
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-white rounded-full"
            ></motion.span>
            BLOOMS+ COURSES
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 tracking-tight">
            Choose Your <span className="text-red-700">Success Path</span>
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
            className="group relative bg-[#13204a] p-8 rounded-2xl overflow-hidden shadow-lg"
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
                  scale: 1.05,
                  rotate: 0,
                  transition: { duration: 0.6 }
                }}
                className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20"
              >
                <LuBookOpen size={26} strokeWidth={1.75} className="text-white" />
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
              className="w-full bg-white text-red-700 font-bold py-3 px-6 rounded-xl transition-all duration-200"
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
              className="absolute -top-24 -right-24 w-96 h-96 bg-red-100/40 rounded-full blur-3xl"
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
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1 rounded-full text-xs font-bold block"
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
                  scale: 1.05,
                  rotate: 0,
                  transition: { duration: 0.6 }
                }}
                className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center"
              >
                <LuSparkles size={26} strokeWidth={1.75} className="text-white" />
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
                className="bg-gray-50 p-3 rounded-xl"
              >
                <div className="text-red-700 text-xl font-black">1000+</div>
                <div className="text-gray-600 text-xs font-medium">Mock Tests</div>
              </motion.div>
              <motion.div 
                whileHover={{ 
                  scale: 1.15, 
                  rotate: -5,
                  transition: { type: "spring", stiffness: 400 }
                }}
                className="bg-gray-50 p-3 rounded-xl"
              >
                <div className="text-red-700 text-xl font-black">24/7</div>
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
                    className="w-5 h-5 bg-gradient-to-br from-red-600 to-red-700 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
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
                <span className="text-4xl font-black text-red-700">₹49,995</span>
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
                className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200"
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
            <LuMessageCircle className="inline -mt-0.5 mr-1.5 text-red-700" size={16} />Questions? We&apos;re here to help!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <motion.a 
              href="mailto:admission@bloomsacademy.com" 
              whileHover={{ y: -1 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="flex items-center gap-2 text-red-700 hover:text-red-800 font-semibold"
            >
              <LuMail size={16} />
              admission@bloomsacademy.com
            </motion.a>
            <span className="text-gray-400">•</span>
            <motion.a 
              href="tel:9003190030" 
              whileHover={{ y: -1 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="flex items-center gap-2 text-red-700 hover:text-red-800 font-semibold"
            >
              <LuPhone size={16} />
              90031 90030
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
