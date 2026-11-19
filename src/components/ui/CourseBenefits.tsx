'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CourseBenefits() {
  const benefits = [
    { icon: '🎓', title: 'Expert Faculty', desc: 'Learn from TNPSC toppers & experienced mentors' },
    { icon: '📱', title: 'Mobile App Access', desc: 'Study anytime, anywhere with our mobile app' },
    { icon: '💬', title: 'Doubt Clearing', desc: '24/7 support to resolve all your queries' },
    { icon: '📊', title: 'Progress Tracking', desc: 'Track your preparation with detailed analytics' },
    { icon: '🏆', title: 'Mock Interviews', desc: 'Practice with real interview simulations' },
    { icon: '📅', title: 'Study Planner', desc: 'Personalized schedule based on your goal' },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Blooms Academy</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-black text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
