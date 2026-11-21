'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LuVideo, LuMapPin, LuQuote } from 'react-icons/lu';
import IconTile from './IconTile';

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function OnlineClassesPromo() {
  const modes = [
    { label: 'Tamil Medium', tag: 'Available', tagClass: 'bg-green-500/15 text-green-200' },
    { label: 'English Medium', tag: 'Available', tagClass: 'bg-green-500/15 text-green-200' },
    { label: 'Recorded Sessions', tag: 'Lifetime', tagClass: 'bg-white/15 text-white' },
  ];

  const stories = [
    { initial: 'R', name: 'Rajesh', role: 'Group II Aspirant', quote: 'Excellent! Best faculty and materials.', tone: 'bg-red-700' },
    { initial: 'A', name: 'Arun', role: 'Group IV Selected', quote: 'The mock tests really helped!', tone: 'bg-[#13204a]' },
  ];

  return (
    <section className="py-16 md:py-20 bg-[var(--light)]">
      <div className="container mx-auto px-4 max-w-6xl space-y-5">
        {/* Live HD Classes */}
        <motion.div {...fadeUp} className="rounded-2xl bg-[#13204a] p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex items-center gap-4 md:w-1/3">
              <IconTile icon={LuVideo} tone="onDark" size="lg" />
              <div>
                <h3 className="text-2xl font-extrabold text-white">Live HD Classes</h3>
                <p className="text-white/70 text-sm">4K quality streaming</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1">
              {modes.map((m) => (
                <div key={m.label} className="flex items-center justify-between rounded-xl bg-white/[0.06] border border-white/10 px-4 py-3">
                  <span className="text-white text-sm font-medium">{m.label}</span>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${m.tagClass}`}>{m.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Student stories */}
        <motion.div {...fadeUp} className="rounded-2xl bg-white border border-gray-200 p-6 md:p-8">
          <div className="mb-6">
            <p className="text-red-700 font-semibold text-xs uppercase tracking-[0.14em] mb-2">Student Success Stories</p>
            <h3 className="text-2xl font-extrabold text-gray-900">How do you find the TNPSC classes?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stories.map((s) => (
              <figure key={s.name} className="rounded-xl bg-gray-50 p-5 flex flex-col">
                <LuQuote className="text-red-200" size={24} />
                <blockquote className="mt-3 text-gray-800 font-medium leading-relaxed flex-1">{s.quote}</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className={`w-9 h-9 rounded-full ${s.tone} text-white text-sm font-bold flex items-center justify-center`}>
                    {s.initial}
                  </span>
                  <span className="text-sm">
                    <span className="block font-semibold text-gray-900">{s.name}</span>
                    <span className="block text-gray-500">{s.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </motion.div>

        {/* Reach */}
        <motion.div {...fadeUp} className="rounded-2xl bg-white border border-gray-200 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex items-start gap-4 md:w-1/2">
              <IconTile icon={LuMapPin} tone="red" size="lg" />
              <div>
                <h3 className="text-2xl font-extrabold text-gray-900">All over Tamil Nadu</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Join 8,000+ students learning across Tamil Nadu with our comprehensive TNPSC preparation programs
                </p>
              </div>
            </div>
            <dl className="grid grid-cols-3 gap-4 flex-1 md:border-l md:border-gray-200 md:pl-8">
              {[
                { value: '8000+', label: 'Students' },
                { value: '32', label: 'Districts' },
                { value: '2000+', label: 'Selections' },
              ].map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-3xl font-extrabold text-red-700">{s.value}</dd>
                  <dd className="mt-1 text-sm text-gray-600">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
