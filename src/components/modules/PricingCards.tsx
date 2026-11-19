'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PricingCards() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full text-xs font-bold tracking-wider mb-4 shadow-lg">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            BLOOMS+ COURSES
          </div>
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
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 p-8 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {/* Floating shapes */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>

            {/* Popular Badge */}
            <div className="absolute top-6 right-6">
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                POPULAR
              </span>
            </div>

            {/* Icon */}
            <div className="mb-6">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <div className="mb-6">
              <h3 className="text-white text-2xl font-black mb-2 tracking-tight">
                Foundation Batch
              </h3>
              <p className="text-white/70 text-sm font-medium">
                GROUP II-A • Perfect for Beginners
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-6 mb-6 pb-6 border-b border-white/10">
              <div>
                <div className="text-white text-2xl font-black">2000+</div>
                <div className="text-white/60 text-xs font-medium">Students</div>
              </div>
              <div>
                <div className="text-white text-2xl font-black">800+</div>
                <div className="text-white/60 text-xs font-medium">Selections</div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-6">
              {[
                'Study Materials (Tamil & English)',
                'Weekly Mock Tests',
                'Doubt Clearing Sessions',
                'Current Affairs Updates'
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-white">₹24,995</span>
                <span className="text-white/60 font-bold text-sm">/year</span>
              </div>
              <p className="text-white/60 text-xs mt-1">One-time payment • Lifetime updates</p>
            </div>

            {/* Button */}
            <button className="w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-xl hover:bg-blue-50 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg">
              Enroll Now →
            </button>
          </motion.div>

          {/* RIGHT CARD - Complete Program */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative bg-white p-8 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200"
          >
            {/* Gradient Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

            {/* Limited Seats Badge */}
            <div className="absolute top-6 right-6">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                8 SEATS LEFT
              </span>
            </div>

            {/* Icon */}
            <div className="mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <div className="mb-6">
              <h3 className="text-gray-900 text-2xl font-black mb-2 tracking-tight">
                Complete Mastery
              </h3>
              <p className="text-gray-600 text-sm font-medium">
                GROUP I & II • Full Preparation Package
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-3 rounded-xl">
                <div className="text-blue-600 text-xl font-black">1000+</div>
                <div className="text-gray-600 text-xs font-medium">Mock Tests</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-3 rounded-xl">
                <div className="text-purple-600 text-xl font-black">24/7</div>
                <div className="text-gray-600 text-xs font-medium">Support</div>
              </div>
            </div>

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
                <div key={i} className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-500 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">₹49,995</span>
                <span className="text-gray-500 font-bold text-sm">/year</span>
              </div>
              <p className="text-gray-500 text-xs mt-1">Includes everything • Lifetime access</p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg">
                Get Started
              </button>
              <button className="px-5 border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200">
                Details
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-gray-600 text-sm mb-4">
            💬 Questions? We're here to help!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <a href="mailto:admission@bloomsacademy.com" className="flex items-center gap-2 text-blue-600 hover:text-purple-600 font-semibold transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              admission@bloomsacademy.com
            </a>
            <span className="text-gray-400">•</span>
            <a href="tel:9003190030" className="flex items-center gap-2 text-blue-600 hover:text-purple-600 font-semibold transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              90031 90030
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
