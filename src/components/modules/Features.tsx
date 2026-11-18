'use client';

import React from 'react';
import { FiAward, FiUsers, FiBookOpen, FiTarget, FiMonitor, FiCompass, FiTrendingUp, FiHome } from 'react-icons/fi';
import { Section, SectionHeader, AnimatedBackground } from '@/components/ui';

const features = [
  {
    icon: <FiAward size={40} />,
    title: '2900+ Success Stories',
    description: 'More than 2,900+ successful TNPSC officers trained at our institute',
    color: 'from-pink-400 to-pink-600',
    bgColor: 'bg-pink-50',
    iconBg: 'bg-pink-100',
    textColor: 'text-pink-900',
    buttonColor: 'bg-pink-600 hover:bg-pink-700',
    pattern: '🏆',
  },
  {
    icon: <FiUsers size={40} />,
    title: 'Expert Faculty Team',
    description: '130+ successful achievers and serving officers as mentors',
    color: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-50',
    iconBg: 'bg-purple-100',
    textColor: 'text-purple-900',
    buttonColor: 'bg-purple-600 hover:bg-purple-700',
    pattern: '👥',
  },
  {
    icon: <FiBookOpen size={40} />,
    title: 'Complete Test Series',
    description: '30 offline + 40 online prelims tests, 15 mains tests included',
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    textColor: 'text-blue-900',
    buttonColor: 'bg-blue-600 hover:bg-blue-700',
    pattern: '📚',
  },
  {
    icon: <FiTarget size={40} />,
    title: 'Free Interview Training',
    description: 'Comprehensive mock interviews by seasoned expert panelists',
    color: 'from-amber-400 to-amber-600',
    bgColor: 'bg-amber-50',
    iconBg: 'bg-amber-100',
    textColor: 'text-amber-900',
    buttonColor: 'bg-amber-600 hover:bg-amber-700',
    pattern: '🎯',
  },
  {
    icon: <FiMonitor size={40} />,
    title: 'Interactive Online Classes',
    description: 'Two-way live communication with faculty in real-time from home',
    color: 'from-teal-400 to-teal-600',
    bgColor: 'bg-teal-50',
    iconBg: 'bg-teal-100',
    textColor: 'text-teal-900',
    buttonColor: 'bg-teal-600 hover:bg-teal-700',
    pattern: '💻',
  },
  {
    icon: <FiCompass size={40} />,
    title: '360° Mentorship',
    description: 'Personalized guidance to build strategy and analytical abilities',
    color: 'from-indigo-400 to-indigo-600',
    bgColor: 'bg-indigo-50',
    iconBg: 'bg-indigo-100',
    textColor: 'text-indigo-900',
    buttonColor: 'bg-indigo-600 hover:bg-indigo-700',
    pattern: '🧭',
  },
  {
    icon: <FiTrendingUp size={40} />,
    title: 'World-Class Infrastructure',
    description: 'State-of-the-art learning centers with advanced facilities',
    color: 'from-rose-400 to-rose-600',
    bgColor: 'bg-rose-50',
    iconBg: 'bg-rose-100',
    textColor: 'text-rose-900',
    buttonColor: 'bg-rose-600 hover:bg-rose-700',
    pattern: '🏢',
  },
  {
    icon: <FiHome size={40} />,
    title: 'Tamil & English Medium',
    description: 'Expert coaching available in both Tamil and English languages',
    color: 'from-emerald-400 to-emerald-600',
    bgColor: 'bg-emerald-50',
    iconBg: 'bg-emerald-100',
    textColor: 'text-emerald-900',
    buttonColor: 'bg-emerald-600 hover:bg-emerald-700',
    pattern: '🗣️',
  },
];

export default function Features() {
  return (
    <Section background="light">
      <AnimatedBackground density="medium" theme="mixed" />
      <div className="relative z-10">
        <SectionHeader
          subtitle="Why Choose Us"
          title="Why Choose Blooms IAS Academy Among Others?"
          description="We offer a holistic, structured, and result-oriented approach to TNPSC preparation"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative ${feature.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer`}
          >
            {/* Large Background Pattern */}
            <div className="absolute top-4 right-4 text-6xl opacity-10 group-hover:scale-125 transition-transform duration-500">
              {feature.pattern}
            </div>

            {/* Icon Circle */}
            <div className={`relative z-10 w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <div className={`bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`}>
                {feature.icon}
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className={`text-lg font-bold ${feature.textColor} mb-2 leading-tight`}>
                {feature.title}
              </h3>
              <p className="text-gray-700 text-xs leading-relaxed mb-3">
                {feature.description}
              </p>

              {/* Action Button */}
              <button className={`${feature.buttonColor} text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-300 group-hover:shadow-lg`}>
                Learn More
              </button>
            </div>

            {/* Gradient Border Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-10">
        <p className="text-sm text-gray-600 mb-3">
          Join <span className="font-bold text-blue-600">2000+</span> successful students who chose Blooms IAS Academy
        </p>
        <a 
          href="/courses" 
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-6 py-2.5 text-sm rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Explore All Courses →
        </a>
      </div>
      </div>
    </Section>
  );
}
