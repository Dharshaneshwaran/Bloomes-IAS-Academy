'use client';

import React from 'react';
import { motion } from "framer-motion";
import { LuTarget, LuGraduationCap, LuFilePen, LuZap, LuArrowRight, LuCircleCheck, LuVideo } from "react-icons/lu";
import { IconTile } from "@/components/ui";

export default function OnlineClasses() {
  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT SECTION - Personal Message */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Personal Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-2 rounded-full text-sm font-bold"
              >
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Join 8,000+ TNPSC Aspirants
              </motion.div>

              {/* Main Heading - More Personal */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-6xl font-black text-gray-900 leading-tight"
              >
                Your TNPSC success story
                <br />
                <span className="text-red-700">
                  starts here
                </span>
              </motion.h2>

              {/* Personal Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                We understand your dream of serving Tamil Nadu. That&apos;s why we&apos;ve helped 2000+ candidates like you crack TNPSC exams with personalized guidance, expert faculty, and proven strategies.
              </motion.p>

              {/* Benefits List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4"
              >
                {[
                  { icon: LuTarget, text: 'Personalized study plans designed for YOUR success' },
                  { icon: LuGraduationCap, text: 'Learn from faculty who cracked TNPSC themselves' },
                  { icon: LuFilePen, text: 'Practice with 1000+ real exam pattern tests' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <IconTile icon={item.icon} tone="red" />
                    <p className="text-gray-700 font-medium">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button 
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-700 hover:bg-red-800 text-white font-semibold px-7 py-3.5 rounded-xl text-base flex items-center gap-2 transition-colors"
                >
                  <span>Start Your Journey</span>
                  <LuArrowRight size={18} />
                </motion.button>
                
                <motion.button 
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-900 font-semibold px-7 py-3.5 rounded-xl text-base border border-gray-300 hover:border-red-700 hover:text-red-700 transition-colors"
                >
                  Talk to Our Mentor
                </motion.button>
              </motion.div>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex items-center gap-2 text-sm text-gray-500"
              >
                <LuCircleCheck className="text-green-600" size={18} />
                <span>No hidden fees • Cancel anytime • 7-day money back guarantee</span>
              </motion.div>
            </motion.div>

            {/* RIGHT SECTION - Visual Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="space-y-6">
                
                {/* Ad Card - TNPSC Preparation Offer - Compact */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-red-700 rounded-2xl p-6 text-white relative overflow-hidden"
                >
                  {/* Decorative Elements */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"
                  ></motion.div>

                  <div className="relative z-10">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/15 px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-3">
                      <LuZap size={14} />
                      <span>LIMITED OFFER</span>
                    </div>

                    {/* Offer */}
                    <h4 className="text-2xl font-black mb-3">Get 50% OFF Today!</h4>
                    
                    {/* Price */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-white/60 text-lg line-through">₹49,999</span>
                      <span className="text-3xl font-black">₹24,995</span>
                    </div>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-white text-red-700 font-semibold py-3 px-4 rounded-xl text-sm hover:bg-red-50 transition-colors"
                    >
                      Claim Offer Now →
                    </motion.button>
                  </div>
                </motion.div>
                
                {/* Live Classes Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-[#13204a] rounded-2xl p-6 md:p-7 text-white"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <IconTile icon={LuVideo} tone="onDark" size="lg" />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-white/80 text-sm font-bold">LIVE NOW</span>
                      </div>
                      <h4 className="text-white font-black text-xl">350+ students watching</h4>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">Group I - Polity</span>
                        <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Tamil</span>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">Group II - History</span>
                        <span className="text-sm bg-white/20 px-3 py-1 rounded-full">English</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-white/80 text-sm">4K HD Quality • Tamil & English • Lifetime Access</p>
                  </div>
                </motion.div>

                {/* Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-[var(--light)] rounded-2xl p-6 md:p-7 border border-orange-100"
                >
                  <h4 className="text-gray-900 font-black text-xl mb-6">Your Success is Our Mission</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-black text-red-700 mb-2">95%</div>
                      <div className="text-gray-600 text-sm font-medium">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-black text-red-700 mb-2">24/7</div>
                      <div className="text-gray-600 text-sm font-medium">Mentor Support</div>
                    </div>
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
