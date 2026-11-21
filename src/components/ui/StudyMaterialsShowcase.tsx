'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LuLibrary, LuFilePen, LuClipboardList, LuNewspaper } from 'react-icons/lu';
import IconTile from './IconTile';
import SectionHeader from './SectionHeader';

export default function StudyMaterialsShowcase() {
  const materials = [
    { icon: LuLibrary, title: 'Complete Study Materials', count: '5000+' },
    { icon: LuFilePen, title: 'Mock Test Papers', count: '1000+' },
    { icon: LuClipboardList, title: 'Previous Year Papers', count: '500+' },
    { icon: LuNewspaper, title: 'Current Affairs', count: 'Daily' },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Study Resources"
          title="Everything you need in one place"
          description="Comprehensive study materials designed by experts who understand TNPSC exam patterns"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {materials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-red-200 hover:shadow-md transition-all duration-200"
            >
              <IconTile icon={item.icon} tone={index % 2 === 0 ? 'red' : 'navy'} />
              <div className="mt-5 text-3xl font-extrabold text-gray-900 tracking-tight">{item.count}</div>
              <div className="mt-1 text-sm font-medium text-gray-600">{item.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
