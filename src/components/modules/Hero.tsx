'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiAward, FiUsers, FiCheckCircle, FiVideo, FiBookOpen, FiTrendingUp } from 'react-icons/fi';
import Link from 'next/link';

export default function Hero() {
  const features = [
    { icon: <FiBookOpen size={18} />, text: 'Core Concept Building', color: 'bg-red-700' },
    { icon: <FiUsers size={18} />, text: 'Team of Expert Faculty', color: 'bg-blue-700' },
    { icon: <FiCheckCircle size={18} />, text: 'Regular Tests Offline & Online', color: 'bg-red-800' },
    { icon: <FiTrendingUp size={18} />, text: 'Proven Track Record', color: 'bg-blue-800' },
    { icon: <FiVideo size={18} />, text: 'Recorded Classes', color: 'bg-red-900' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-blue-50 to-orange-100 pt-4 pb-8">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
      </div>

      {/* Animated Clouds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Cloud 1 - Top Left */}
        <motion.div
          className="absolute top-10 left-0"
          animate={{ x: [0, 100, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <svg width="200" height="80" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50" cy="40" rx="40" ry="25" fill="white" opacity="0.3"/>
            <ellipse cx="80" cy="35" rx="45" ry="28" fill="white" opacity="0.3"/>
            <ellipse cx="120" cy="40" rx="50" ry="30" fill="white" opacity="0.3"/>
            <ellipse cx="160" cy="45" rx="35" ry="25" fill="white" opacity="0.3"/>
          </svg>
        </motion.div>

        {/* Cloud 2 - Top Right */}
        <motion.div
          className="absolute top-20 right-0"
          animate={{ x: [0, -80, 0] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <svg width="180" height="70" viewBox="0 0 180 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="45" cy="35" rx="35" ry="22" fill="white" opacity="0.25"/>
            <ellipse cx="75" cy="32" rx="40" ry="25" fill="white" opacity="0.25"/>
            <ellipse cx="110" cy="35" rx="45" ry="27" fill="white" opacity="0.25"/>
            <ellipse cx="145" cy="38" rx="30" ry="22" fill="white" opacity="0.25"/>
          </svg>
        </motion.div>

        {/* Cloud 3 - Bottom Left */}
        <motion.div
          className="absolute bottom-10 left-20"
          animate={{ x: [0, 120, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <svg width="160" height="60" viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="40" cy="30" rx="35" ry="20" fill="white" opacity="0.2"/>
            <ellipse cx="65" cy="28" rx="38" ry="22" fill="white" opacity="0.2"/>
            <ellipse cx="95" cy="30" rx="40" ry="24" fill="white" opacity="0.2"/>
            <ellipse cx="125" cy="32" rx="30" ry="20" fill="white" opacity="0.2"/>
          </svg>
        </motion.div>
      </div>

      {/* Floating Icons - Books, Awards, Lotus */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Book 1 */}
        <motion.div
          className="absolute top-1/4 left-10"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiBookOpen className="text-blue-300/30" size={40} />
        </motion.div>

        {/* Floating Award 1 */}
        <motion.div
          className="absolute top-1/3 right-20"
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <FiAward className="text-red-300/30" size={45} />
        </motion.div>

        {/* Floating Book 2 */}
        <motion.div
          className="absolute bottom-1/3 right-40"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 8, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <FiBookOpen className="text-orange-300/30" size={35} />
        </motion.div>

        {/* Floating Trophy */}
        <motion.div
          className="absolute bottom-1/4 left-1/4"
          animate={{ 
            y: [0, -18, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <FiAward className="text-yellow-400/30" size={38} />
        </motion.div>

        {/* Floating Lotus Icon */}
        <motion.div
          className="absolute top-1/2 left-1/3"
          animate={{ 
            y: [0, -22, 0],
            rotate: [0, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.2">
            <path d="M16 8L18 14L22 10L20 16L26 14L22 18L28 20L22 22L24 28L18 24L20 30L16 26L12 30L14 24L8 28L10 22L4 20L10 18L6 14L12 16L10 10L14 14L16 8Z" fill="#ec4899"/>
            <rect x="12" y="20" width="8" height="4" rx="1" fill="#ec4899"/>
          </svg>
        </motion.div>

        {/* Floating Users Icon */}
        <motion.div
          className="absolute top-2/3 right-1/3"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <FiUsers className="text-blue-400/25" size={42} />
        </motion.div>

        {/* Floating Star/Check Icons */}
        <motion.div
          className="absolute top-1/2 right-10"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, -8, 0]
          }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        >
          <FiCheckCircle className="text-green-400/30" size={36} />
        </motion.div>

        {/* Small floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-blue-400/20 to-red-400/20 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Section - TNPSC Branding */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-red-700 to-red-800 text-white p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <h1 className="text-5xl md:text-6xl font-bold mb-3 italic tracking-tight">
                TNPSC
              </h1>
              <div className="border-t-2 border-white/30 pt-4 mt-4">
                <p className="text-2xl md:text-3xl font-bold text-red-50 mb-2">
                  Group I
                </p>
                <p className="text-base text-red-100">
                  Regular (PCM) Batch
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/20">
                <p className="text-sm text-red-100 mb-2">Starting Soon</p>
                <p className="text-lg font-bold">2026 Batch</p>
              </div>
            </div>
          </motion.div>

          {/* Middle Section - Main Content */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Admissions Badge */}
            <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-orange-100 to-red-100 border-3 border-red-700 px-8 py-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
                  <p className="text-red-900 font-bold text-xl md:text-2xl italic">
                    ADMISSIONS
                  </p>
                </div>
                <p className="text-red-800 font-extrabold text-3xl md:text-4xl mt-2">
                  OPEN NOW
                </p>
              </div>

              {/* Date & Time Card */}
              <div className="bg-gradient-to-br from-blue-800 to-blue-950 text-white px-10 py-5 rounded-xl shadow-2xl flex-1 min-w-[280px]">
                <div className="flex items-center justify-between gap-8">
                  <div className="text-center border-r border-white/30 pr-8">
                    <p className="text-5xl md:text-6xl font-bold">07</p>
                    <p className="text-xs uppercase tracking-wider mt-1 text-blue-200">
                      <sup className="text-xl">th</sup> OCT
                    </p>
                    <p className="text-base font-semibold text-blue-100 mt-1">2026</p>
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-3 mb-3">
                      <FiClock size={20} className="text-blue-300" />
                      <p className="text-xl font-bold">2.00 PM</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-blue-300 text-base">to</span>
                      <p className="text-xl font-bold">5.00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
              <span className="text-pink-700" style={{ fontFamily: "'Playfair Display', serif" }}>Blooms IAS Academy</span> - Best TNPSC Coaching in Tamil Nadu
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-3 leading-relaxed italic">
              <span className="text-pink-600 font-semibold">Where Success Blooms</span>
            </p>
            <p className="text-sm md:text-base text-gray-600 mb-5 leading-relaxed">
              Premier coaching institute for TNPSC, providing expert Tamil & English faculty, 
              comprehensive study material and proven results.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`${feature.color} text-white px-4 py-3 rounded-lg flex items-center gap-2 text-sm font-semibold shadow-md hover:shadow-xl transition-all hover:-translate-y-1`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <span className="flex-shrink-0">{feature.icon}</span>
                  <span className="leading-tight text-xs">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mx-auto mb-2">
                  <FiAward className="text-red-700" size={24} />
                </div>
                <p className="text-2xl font-bold text-red-700">2000+</p>
                <p className="text-xs text-gray-600 mt-1">TNPSC Selections</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2">
                  <FiUsers className="text-blue-700" size={24} />
                </div>
                <p className="text-2xl font-bold text-blue-700">50+</p>
                <p className="text-xs text-gray-600 mt-1">Expert Faculty</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mx-auto mb-2">
                  <FiTrendingUp className="text-red-700" size={24} />
                </div>
                <p className="text-2xl font-bold text-red-700">450+</p>
                <p className="text-xs text-gray-600 mt-1">Group I & II</p>
              </div>
            </div>
          </motion.div>

          {/* Right Section - CTA Button */}
          <motion.div 
            className="lg:col-span-3 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              href="/admission" 
              className="group relative w-full max-w-xs"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-gradient-to-br from-red-600 to-red-700 text-white px-12 py-8 rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-300 text-center">
                <p className="text-3xl md:text-4xl font-extrabold tracking-wider mb-2">
                  CLICK HERE
                </p>
                <p className="text-sm md:text-base text-red-50">
                  Register Now →
                </p>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-xs text-red-100">Limited Seats</p>
                  <p className="text-lg font-bold">Book Your Spot!</p>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
