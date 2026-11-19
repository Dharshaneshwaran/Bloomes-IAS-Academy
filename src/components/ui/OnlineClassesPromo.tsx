'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function OnlineClassesPromo() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-100 via-white to-purple-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-black text-gray-900 mb-6"
            >
              Looking for online classes?
            </motion.h2>
            
            <div className="space-y-3 mb-8">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-700 text-lg font-medium"
              >
                Learn from anywhere, anytime.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-700 text-lg font-medium"
              >
                Missed your classes? Worry not.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-700 text-lg font-medium"
              >
                We got you covered with our recorded sessions.
              </motion.p>
            </div>

            {/* App Store Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="h-14 w-auto"
                />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Download on the App Store" 
                  className="h-14 w-auto"
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Phone Mockup with Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="flex items-center justify-center gap-8">
              {/* Features Column */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ scale: 1.05, x: -5 }}
                  className="flex items-center gap-4 bg-white rounded-full py-3 px-6 shadow-lg border-2 border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-black text-gray-900">Live Online Classes</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.05, x: -5 }}
                  className="flex items-center gap-4 bg-white rounded-full py-3 px-6 shadow-lg border-2 border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-black text-gray-900">Recorded Class Videos</div>
                  </div>
                </motion.div>
              </div>

              {/* Phone Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="relative"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Phone Frame */}
                <div className="relative w-64 h-[500px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
                  
                  {/* Screen Content */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-[2.3rem] overflow-hidden">
                    {/* App Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
                      <div className="flex items-center justify-between">
                        <div className="text-white font-black text-lg">Blooms Academy</div>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                        ></motion.div>
                      </div>
                    </div>

                    {/* Course Cards */}
                    <div className="p-4 space-y-3">
                      {[
                        { title: 'TNPSC Group I', color: 'from-red-500 to-red-600', time: 'Live Now' },
                        { title: 'TNPSC Group II', color: 'from-blue-500 to-blue-600', time: '2:00 PM' },
                        { title: 'Current Affairs', color: 'from-green-500 to-green-600', time: '4:00 PM' },
                        { title: 'Mock Tests', color: 'from-purple-500 to-purple-600', time: 'Available' },
                        { title: 'Tamil Grammar', color: 'from-pink-500 to-pink-600', time: '6:00 PM' },
                        { title: 'General Studies', color: 'from-orange-500 to-orange-600', time: 'Recorded' }
                      ].map((course, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                          className={`bg-gradient-to-r ${course.color} rounded-xl p-3 shadow-md`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="text-white font-bold text-sm">{course.title}</div>
                            <div className="text-white text-xs bg-white/20 px-2 py-1 rounded-full">
                              {course.time}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Additional Features Column */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-4 bg-white rounded-full py-3 px-6 shadow-lg border-2 border-gray-100"
                >
                  <div className="text-right">
                    <div className="text-sm font-black text-gray-900">UPSC/TNPSC/Banking</div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-4 bg-white rounded-full py-3 px-6 shadow-lg border-2 border-gray-100"
                >
                  <div className="text-right">
                    <div className="text-sm font-black text-gray-900">Learn from anywhere</div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
