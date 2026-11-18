'use client';

import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { Button, Section, AnimatedBackground } from '@/components/ui';

export default function AboutSection() {
  const highlights = [
    'Expert faculty with proven track record',
    'Comprehensive study material',
    'Systematic approach to preparation',
    'Personalized mentoring',
    'Character and ethics development',
    'Personality development focus',
  ];

  return (
    <Section background="light">
      <AnimatedBackground density="light" theme="blue" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div>
          <div className="inline-block bg-[var(--primary)] text-white px-3 py-1.5 rounded-full text-xs font-semibold mb-3">
            About Us
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--dark)] mb-4">
            Best TNPSC Academy Committed to Excellence
          </h2>
          
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            <strong>Blooms Academy</strong> is the top coaching institute for TNPSC and the best TNPSC coaching in Tamil Nadu, 
            providing excellent coaching for TNPSC aspirants. Being the best TNPSC coaching, we provide expert faculty, 
            comprehensive study material and a systematic approach to help students succeed.
          </p>
          
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            Being recognized among the best TNPSC academy, our courses are designed to the minutest detail, 
            the syllabus coverage is extensive and the mentoring is personalized to provide the best preparation 
            for the exam. Our dedicated support helps students crack the TNPSC exam with confidence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-2">
                <FiCheckCircle className="text-[var(--primary)] mt-0.5 flex-shrink-0" size={16} />
                <span className="text-xs md:text-sm text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" href="/about">
              Learn More About Us
            </Button>
            <Button variant="outline" href="/courses">
              View Our Courses
            </Button>
          </div>
        </div>

        {/* Right Content - Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-1">2000+</div>
            <p className="text-xs text-gray-600 font-medium">Candidates selected for TNPSC Group I, II, II-A and Group IV Services</p>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow mt-6">
            <div className="text-2xl md:text-3xl font-bold text-[var(--secondary)] mb-1">450+</div>
            <p className="text-xs text-gray-600 font-medium">Selections in TNPSC Group II 2024</p>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-2xl md:text-3xl font-bold text-[var(--accent)] mb-1">30</div>
            <p className="text-xs text-gray-600 font-medium">Selections in TNPSC Group I 2025</p>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow mt-6">
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">15</div>
            <p className="text-xs text-gray-600 font-medium">Successful Candidates in Top 20 Ranks</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
