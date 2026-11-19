'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function GeometricStats() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-100 via-blue-100 to-purple-100 relative overflow-hidden">
      {/* Dense Animated Background */}
      <motion.div
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0px, rgba(59, 130, 246, 0.1) 10px, transparent 10px, transparent 20px), repeating-linear-gradient(-45deg, rgba(147, 51, 234, 0.1) 0px, rgba(147, 51, 234, 0.1) 10px, transparent 10px, transparent 20px)',
          backgroundSize: '200% 200%'
        }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Top Section - Large Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-7xl mx-auto">
          {/* Stat Card 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-2xl"
          >
            <div className="text-6xl font-black mb-2">8.2K</div>
            <div className="text-xl font-bold mb-4">Active Students</div>
            <div className="h-2 bg-white/20 rounded-full mb-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '85%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="h-2 bg-white rounded-full"
              ></motion.div>
            </div>
            <div className="text-sm text-white/80">Growing Daily</div>
          </motion.div>

          {/* Stat Card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-white shadow-2xl"
          >
            <div className="text-6xl font-black mb-2">95%</div>
            <div className="text-xl font-bold mb-4">Success Rate</div>
            <div className="h-2 bg-white/20 rounded-full mb-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '95%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="h-2 bg-white rounded-full"
              ></motion.div>
            </div>
            <div className="text-sm text-white/80">Verified Results</div>
          </motion.div>

          {/* Stat Card 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl"
          >
            <div className="text-6xl font-black mb-2">24/7</div>
            <div className="text-xl font-bold mb-4">Expert Support</div>
            <div className="flex items-center gap-2 mt-4">
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 bg-green-400 rounded-full"
              ></motion.div>
              <div className="text-sm text-white/80">Online Now</div>
            </div>
          </motion.div>
        </div>

        {/* Middle Section - Feature Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-7xl mx-auto">
          {[
            { icon: '📚', title: 'Study Materials', count: '5000+', color: 'from-blue-500 to-blue-600' },
            { icon: '🎯', title: 'Mock Tests', count: '1000+', color: 'from-purple-500 to-purple-600' },
            { icon: '🏆', title: 'Selections', count: '2000+', color: 'from-blue-600 to-purple-600' },
            { icon: '👥', title: 'Faculty', count: '50+', color: 'from-purple-600 to-blue-600' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className={`bg-gradient-to-br ${item.color} rounded-xl p-6 text-white shadow-xl`}
            >
              <div className="text-5xl mb-3">{item.icon}</div>
              <div className="text-2xl font-black mb-1">{item.count}</div>
              <div className="text-sm font-bold opacity-90">{item.title}</div>
            </motion.div>
          ))}
        </div>

        {/* Center Title Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8 bg-white/80 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 mx-auto mb-4 border-8 border-blue-500 rounded-lg"
            style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
          ></motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">
            DIMENSIONS OF SUCCESS
          </h2>
          <p className="text-gray-700 text-lg font-semibold mb-4">
            Building Excellence from Every Angle
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {['Excellence', 'Innovation', 'Results', 'Growth'].map((tag, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section - Live Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Live Classes Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 rounded-2xl p-6 text-white shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl"
              >
                🎥
              </motion.div>
              <div>
                <div className="text-xl font-black">Live HD Classes</div>
                <div className="text-sm text-white/80">4K Streaming</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center bg-white/10 rounded-lg p-3">
                <span className="text-sm font-semibold">Tamil Medium</span>
                <span className="text-xs bg-green-500 px-2 py-1 rounded-full">Available</span>
              </div>
              <div className="flex justify-between items-center bg-white/10 rounded-lg p-3">
                <span className="text-sm font-semibold">English Medium</span>
                <span className="text-xs bg-green-500 px-2 py-1 rounded-full">Available</span>
              </div>
            </div>
          </motion.div>

          {/* Progress Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl p-6 shadow-2xl border-2 border-gray-200"
          >
            <div className="text-blue-600 text-xl font-black mb-4">📊 Progress Tracker</div>
            <div className="space-y-4">
              {[
                { label: 'Syllabus', value: 78, color: 'from-blue-500 to-purple-500' },
                { label: 'Mock Tests', value: 92, color: 'from-purple-500 to-pink-500' },
                { label: 'Preparation', value: 85, color: 'from-blue-600 to-blue-700' }
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-gray-700">{item.label}</span>
                    <span className="text-gray-900">{item.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      className={`bg-gradient-to-r ${item.color} h-3 rounded-full`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievement Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 text-white shadow-2xl"
          >
            <div className="text-5xl mb-4">🏆</div>
            <div className="text-3xl font-black mb-2">Top Ranks</div>
            <div className="space-y-2 mb-4">
              {['Rank 1 - Group I', 'Rank 3 - Group II', 'Rank 5 - Group IV'].map((rank, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-sm font-bold"
                >
                  ⭐ {rank}
                </motion.div>
              ))}
            </div>
            <div className="text-xs text-white/80">Updated: 2024 Results</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
