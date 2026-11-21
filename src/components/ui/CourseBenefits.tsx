'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  LuGraduationCap,
  LuSmartphone,
  LuMessageCircleQuestion,
  LuChartLine,
  LuMic,
  LuCalendarDays,
} from 'react-icons/lu';
import IconTile from './IconTile';
import SectionHeader from './SectionHeader';

export default function CourseBenefits() {
  const benefits = [
    { icon: LuGraduationCap, title: 'Expert Faculty', desc: 'Learn from TNPSC toppers & experienced mentors' },
    { icon: LuSmartphone, title: 'Mobile App Access', desc: 'Study anytime, anywhere with our mobile app' },
    { icon: LuMessageCircleQuestion, title: 'Doubt Clearing', desc: '24/7 support to resolve all your queries' },
    { icon: LuChartLine, title: 'Progress Tracking', desc: 'Track your preparation with detailed analytics' },
    { icon: LuMic, title: 'Mock Interviews', desc: 'Practice with real interview simulations' },
    { icon: LuCalendarDays, title: 'Study Planner', desc: 'Personalized schedule based on your goal' },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Course Benefits"
          title="What every Blooms student gets"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex gap-4 bg-white rounded-2xl p-6 border border-gray-200 hover:border-red-200 hover:shadow-md transition-all duration-200"
            >
              <IconTile icon={benefit.icon} tone="red" />
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-1">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
