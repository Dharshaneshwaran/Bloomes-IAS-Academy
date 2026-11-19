'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FoundationBanner() {
  const features = [
    {
      icon: '📚',
      title: 'STUDY CENTER',
      description: 'Comprehensive materials for TNPSC aspirants in Tamil & English'
    },
    {
      icon: '🎯',
      title: 'TAMIL NADU',
      description: 'Specialized coaching for all TNPSC Group exams'
    },
    {
      icon: '🏆',
      title: 'SUCCESS PORTAL',
      description: 'Proven methods and techniques from top rankers'
    },
    {
      icon: '💯',
      title: '100% RESULTS',
      description: 'Guaranteed preparation with mock tests and analysis'
    },
    {
      icon: '👥',
      title: 'EXPERT MENTORS',
      description: 'Personal guidance from experienced TNPSC faculty'
    },
    {
      icon: '⭐',
      title: 'PREMIUM ACCESS',
      description: 'Lifetime access to all study materials and updates'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <motion.div 
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
          backgroundSize: '200% 200%'
        }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">
            THE BLOOMS FOUNDATION
          </h2>
          <p className="text-white/80 text-lg font-medium max-w-3xl mx-auto">
            FILLING THE GAPS
          </p>
          <p className="text-white/70 text-sm mt-2 max-w-4xl mx-auto leading-relaxed">
            Blooms Academy should lead the way in filling the gaps for TNPSC aspirants. Our mission is to invest millions 
            toward TNPSC preparation and meeting the needs of students around Tamil Nadu.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className={`
                ${index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-red-500 to-red-600'}
                p-6 rounded-lg border-4 border-white/20 relative overflow-hidden
                ${index % 2 === 0 ? 'text-gray-900' : 'text-white'}
              `}
            >
              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 ${index % 2 === 0 ? 'bg-blue-500/10' : 'bg-white/10'} rounded-bl-3xl`}></div>
              
              {/* Icon */}
              <div className="text-4xl mb-3">{feature.icon}</div>
              
              {/* Title */}
              <div className={`text-xs font-black tracking-wider mb-2 ${index % 2 === 0 ? 'text-blue-600' : 'text-white'}`}>
                {feature.title}
              </div>
              
              {/* Description */}
              <p className={`text-sm font-medium leading-snug ${index % 2 === 0 ? 'text-gray-700' : 'text-white/90'}`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8"
        >
          <a 
            href="/about" 
            className="text-white/80 text-sm font-bold hover:text-white transition-colors underline"
          >
            bloomsacademy.com/foundation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
