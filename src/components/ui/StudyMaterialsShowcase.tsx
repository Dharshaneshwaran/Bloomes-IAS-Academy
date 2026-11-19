'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function StudyMaterialsShowcase() {
  const materials = [
    { icon: '📚', title: 'Complete Study Materials', count: '5000+', color: 'from-blue-500 to-blue-600' },
    { icon: '📝', title: 'Mock Test Papers', count: '1000+', color: 'from-purple-500 to-purple-600' },
    { icon: '🎯', title: 'Previous Year Papers', count: '500+', color: 'from-pink-500 to-pink-600' },
    { icon: '📖', title: 'Current Affairs', count: 'Daily', color: 'from-green-500 to-emerald-600' },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Everything You Need in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">One Place</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive study materials designed by experts who understand TNPSC exam patterns
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {materials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 text-white shadow-xl`}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <div className="text-3xl font-black mb-2">{item.count}</div>
              <div className="text-sm font-bold opacity-90">{item.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
