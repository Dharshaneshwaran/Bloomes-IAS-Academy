'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LuLibrary, LuMapPin, LuTrophy, LuBadgeCheck, LuUsers, LuInfinity, LuArrowRight } from 'react-icons/lu';
import IconTile from './IconTile';

export default function FoundationBanner() {
  const features = [
    { icon: LuLibrary, title: 'Study Center', description: 'Comprehensive materials for TNPSC aspirants in Tamil & English' },
    { icon: LuMapPin, title: 'Tamil Nadu', description: 'Specialized coaching for all TNPSC Group exams' },
    { icon: LuTrophy, title: 'Success Portal', description: 'Proven methods and techniques from top rankers' },
    { icon: LuBadgeCheck, title: '100% Results', description: 'Guaranteed preparation with mock tests and analysis' },
    { icon: LuUsers, title: 'Expert Mentors', description: 'Personal guidance from experienced TNPSC faculty' },
    { icon: LuInfinity, title: 'Premium Access', description: 'Lifetime access to all study materials and updates' },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#13204a] relative overflow-hidden">
      {/* Single soft red glow for depth */}
      <div className="pointer-events-none absolute -top-32 right-0 w-[480px] h-[480px] rounded-full bg-red-700/20 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-red-300 font-semibold text-xs uppercase tracking-[0.14em] mb-3">Filling the gaps</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">The Blooms Foundation</h2>
          <p className="text-white/70 text-base leading-relaxed">
            Blooms Academy should lead the way in filling the gaps for TNPSC aspirants. Our mission is to invest millions
            toward TNPSC preparation and meeting the needs of students around Tamil Nadu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex gap-4 rounded-2xl p-6 bg-white/[0.04] border border-white/10 hover:bg-white/[0.07] hover:border-white/20 transition-colors duration-200"
            >
              <IconTile icon={feature.icon} tone="solidRed" />
              <div>
                <h3 className="text-white font-bold text-base mb-1">{feature.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-red-200 transition-colors"
          >
            Learn about the foundation <LuArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
