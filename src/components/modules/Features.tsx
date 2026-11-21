'use client';

import React from 'react';
import Link from 'next/link';
import {
  LuTrophy,
  LuUsers,
  LuClipboardCheck,
  LuMic,
  LuMonitorPlay,
  LuCompass,
  LuBuilding2,
  LuLanguages,
  LuArrowRight,
} from 'react-icons/lu';
import { Section, SectionHeader, IconTile } from '@/components/ui';

const features = [
  { icon: LuTrophy, title: '2900+ Success Stories', description: 'More than 2,900+ successful TNPSC officers trained at our institute' },
  { icon: LuUsers, title: 'Expert Faculty Team', description: '130+ successful achievers and serving officers as mentors' },
  { icon: LuClipboardCheck, title: 'Complete Test Series', description: '30 offline + 40 online prelims tests, 15 mains tests included' },
  { icon: LuMic, title: 'Free Interview Training', description: 'Comprehensive mock interviews by seasoned expert panelists' },
  { icon: LuMonitorPlay, title: 'Interactive Online Classes', description: 'Two-way live communication with faculty in real-time from home' },
  { icon: LuCompass, title: '360° Mentorship', description: 'Personalized guidance to build strategy and analytical abilities' },
  { icon: LuBuilding2, title: 'World-Class Infrastructure', description: 'State-of-the-art learning centers with advanced facilities' },
  { icon: LuLanguages, title: 'Tamil & English Medium', description: 'Expert coaching available in both Tamil and English languages' },
];

export default function Features() {
  return (
    <Section background="light">
      <SectionHeader
        subtitle="Why Choose Us"
        title="Why choose Blooms IAS Academy among others?"
        description="We offer a holistic, structured, and result-oriented approach to TNPSC preparation"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {features.map((feature) => (
          <Link
            key={feature.title}
            href="/courses"
            className="group flex flex-col bg-white rounded-2xl p-6 border border-gray-200 hover:border-red-200 hover:shadow-md transition-all duration-200"
          >
            <IconTile icon={feature.icon} tone="red" />
            <h3 className="mt-5 text-base font-bold text-gray-900 leading-snug">{feature.title}</h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed flex-1">{feature.description}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red-700">
              Learn more
              <LuArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-sm text-gray-600 mb-4">
          Join <span className="font-bold text-red-700">2000+</span> successful students who chose Blooms IAS Academy
        </p>
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 text-sm rounded-xl transition-colors duration-200"
        >
          Explore All Courses <LuArrowRight size={16} />
        </Link>
      </div>
    </Section>
  );
}
