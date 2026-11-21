'use client';

import React from 'react';
import { FiCalendar, FiClock, FiAward, FiUsers, FiCheckCircle, FiVideo, FiBookOpen, FiTrendingUp } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AdmissionBanner() {
  const features = [
    { icon: <FiBookOpen size={20} />, text: 'Core Concept Building', color: 'bg-red-600' },
    { icon: <FiUsers size={20} />, text: 'Team of Expert Faculty Members', color: 'bg-blue-600' },
    { icon: <FiCheckCircle size={20} />, text: 'Regular Tests Offline & Online', color: 'bg-blue-700' },
    { icon: <FiTrendingUp size={20} />, text: 'Proven Track Record of Results', color: 'bg-red-700' },
    { icon: <FiVideo size={20} />, text: 'Recorded Classes for Revision', color: 'bg-blue-800' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-blue-50 to-orange-100 py-6 md:py-8">
      {/* Background Pattern */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
      </div>

      {/* Decorative Student Image Placeholder */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center w-48 h-48 opacity-20">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-blue-600" />
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
            <div className="bg-gradient-to-br from-red-700 to-red-900 text-white p-6 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-4xl md:text-5xl font-bold mb-2 italic tracking-tight">
                TNPSC
              </h2>
              <div className="border-t-2 border-white/30 pt-3 mt-3">
                <p className="text-xl md:text-2xl font-bold text-red-100">
                  Group I
                </p>
                <p className="text-sm text-red-200 mt-1">
                  Regular (PCM) Batch
                </p>
              </div>
            </div>
          </motion.div>

          {/* Middle Section - Admissions Info */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* Admissions Open Badge */}
              <div className="bg-gradient-to-r from-orange-100 to-red-100 border-2 border-red-600 px-6 py-3 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                  <p className="text-red-800 font-bold text-lg md:text-xl italic">
                    ADMISSIONS
                  </p>
                </div>
                <p className="text-red-700 font-extrabold text-2xl md:text-3xl mt-1">
                  OPEN NOW
                </p>
              </div>

              {/* Date & Time Card */}
              <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white px-8 py-4 rounded-lg shadow-2xl flex-1 min-w-[260px]">
                <div className="flex items-center justify-between gap-6">
                  <div className="text-center border-r border-white/30 pr-6">
                    <p className="text-4xl md:text-5xl font-bold">07</p>
                    <p className="text-xs uppercase tracking-wider mt-1 text-blue-200">
                      <sup className="text-lg">th</sup> OCT
                    </p>
                    <p className="text-sm font-semibold text-blue-100 mt-1">2026</p>
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <FiClock size={18} className="text-blue-300" />
                      <p className="text-lg font-bold">2.00 pm</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-300 text-sm">to</span>
                      <p className="text-lg font-bold">5.00 pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`${feature.color} text-white px-3 py-2 rounded-md flex items-center gap-2 text-xs md:text-sm font-semibold shadow-md hover:shadow-lg transition-shadow`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <span className="flex-shrink-0">{feature.icon}</span>
                  <span className="leading-tight">{feature.text}</span>
                </motion.div>
              ))}
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
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-gradient-to-br from-red-600 to-red-800 text-white px-10 py-6 rounded-xl shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                <p className="text-2xl md:text-3xl font-extrabold tracking-wider">
                  CLICK HERE
                </p>
                <p className="text-xs md:text-sm text-red-100 mt-1 text-center">
                  Register Now →
                </p>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-800" />
    </section>
  );
}
