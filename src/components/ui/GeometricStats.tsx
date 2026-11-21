'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  LuLibrary,
  LuFilePen,
  LuTrophy,
  LuUsers,
  LuVideo,
  LuChartColumn,
  LuMedal,
} from 'react-icons/lu';
import IconTile from './IconTile';
import SectionHeader from './SectionHeader';

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function GeometricStats() {
  const resources = [
    { icon: LuLibrary, title: 'Study Materials', count: '5000+' },
    { icon: LuFilePen, title: 'Mock Tests', count: '1000+' },
    { icon: LuTrophy, title: 'Selections', count: '2000+' },
    { icon: LuUsers, title: 'Faculty', count: '50+' },
  ];

  const progress = [
    { label: 'Syllabus', value: 78 },
    { label: 'Mock Tests', value: 92 },
    { label: 'Preparation', value: 85 },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeader
          subtitle="Dimensions of Success"
          title="Building excellence from every angle"
          description="Numbers that reflect years of consistent results for TNPSC aspirants across Tamil Nadu"
        />

        {/* Headline stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          <motion.div {...fadeUp} className="rounded-2xl p-7 bg-red-700 text-white">
            <div className="text-5xl font-extrabold tracking-tight">8.2K</div>
            <div className="mt-1 font-semibold">Active Students</div>
            <div className="mt-5 h-1.5 bg-white/20 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-full bg-white rounded-full" />
            </div>
            <div className="mt-2 text-xs text-white/75">Growing daily</div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.05 }} className="rounded-2xl p-7 bg-[#13204a] text-white">
            <div className="text-5xl font-extrabold tracking-tight">95%</div>
            <div className="mt-1 font-semibold">Success Rate</div>
            <div className="mt-5 h-1.5 bg-white/20 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} whileInView={{ width: '95%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1 }} className="h-full bg-white rounded-full" />
            </div>
            <div className="mt-2 text-xs text-white/75">Verified results</div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="rounded-2xl p-7 bg-white border border-gray-200">
            <div className="text-5xl font-extrabold tracking-tight text-gray-900">24/7</div>
            <div className="mt-1 font-semibold text-gray-900">Expert Support</div>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
              <span className="w-2 h-2 rounded-full bg-green-500" /> Online now
            </div>
          </motion.div>
        </div>

        {/* Resource counts */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          {resources.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 rounded-2xl p-5 bg-[var(--light)] border border-orange-100"
            >
              <IconTile icon={item.icon} tone="red" />
              <div>
                <div className="text-2xl font-extrabold text-gray-900 leading-none">{item.count}</div>
                <div className="mt-1 text-sm text-gray-600">{item.title}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detail cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <motion.div {...fadeUp} className="rounded-2xl p-6 bg-white border border-gray-200 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <IconTile icon={LuVideo} tone="navy" />
              <div>
                <div className="font-bold text-gray-900">Live HD Classes</div>
                <div className="text-sm text-gray-500">4K streaming</div>
              </div>
            </div>
            <ul className="space-y-2 mt-auto">
              {['Tamil Medium', 'English Medium'].map((m) => (
                <li key={m} className="flex justify-between items-center rounded-xl bg-gray-50 px-4 py-3">
                  <span className="text-sm font-medium text-gray-800">{m}</span>
                  <span className="text-xs font-medium text-green-700 bg-green-50 px-2.5 py-1 rounded-full">Available</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.05 }} className="rounded-2xl p-6 bg-white border border-gray-200 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <IconTile icon={LuChartColumn} tone="navy" />
              <div className="font-bold text-gray-900">Progress Tracker</div>
            </div>
            <div className="space-y-4 mt-auto">
              {progress.map((item, i) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-gray-600">{item.label}</span>
                    <span className="font-semibold text-gray-900">{item.value}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      className="h-full bg-red-700 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="rounded-2xl p-6 bg-white border border-gray-200 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <IconTile icon={LuTrophy} tone="red" />
              <div>
                <div className="font-bold text-gray-900">Top Ranks</div>
                <div className="text-sm text-gray-500">2024 results</div>
              </div>
            </div>
            <ul className="space-y-2 mt-auto">
              {[
                { rank: 'Rank 1', group: 'Group I' },
                { rank: 'Rank 3', group: 'Group II' },
                { rank: 'Rank 5', group: 'Group IV' },
              ].map((r) => (
                <li key={r.rank} className="flex items-center gap-3 rounded-xl bg-red-50/60 px-4 py-2.5">
                  <LuMedal className="text-red-700" size={18} strokeWidth={1.75} />
                  <span className="text-sm font-semibold text-gray-900">{r.rank}</span>
                  <span className="text-sm text-gray-500">· {r.group}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
