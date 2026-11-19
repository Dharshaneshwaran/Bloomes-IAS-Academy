'use client';

import React from 'react';

export default function PricingCards() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Diagonal stripe background pattern like Motion+ */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 2px, transparent 2px, transparent 8px)',
        }}></div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-400 text-black px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-4">
            BLOOMS+ COURSES
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
            Master TNPSC with
            <br />
            <span className="text-emerald-400">Blooms Academy+</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Learn from experts, practice with real tests, and get the materials you need.
            <br />
            One-time payment gives you lifetime access to all updates and materials.
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-7xl mx-auto border-4 border-white/10">
          
          {/* LEFT CARD - Green Bold Card */}
          <div className="bg-emerald-400 p-12 relative overflow-hidden">
            {/* Diagonal stripes */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, #000 0px, #000 2px, transparent 2px, transparent 8px)',
              }}></div>
            </div>

            {/* Badge */}
            <div className="mb-8">
              <span className="text-black text-xs font-bold tracking-widest">GROUP II-A</span>
            </div>

            {/* Icon */}
            <div className="mb-12 flex items-center gap-4">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="text-black text-xs font-bold tracking-wider">+</div>
            </div>

            {/* Title */}
            <div className="mb-12">
              <h3 className="text-black text-2xl font-black mb-3 tracking-tight">
                FOUNDATION BATCH
              </h3>
              <p className="text-black/70 font-medium">
                ONE PAYMENT
                <br />
                LIFETIME UPDATES
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div>
                <div className="text-xs text-black/60 font-bold tracking-wider mb-1">STUDENTS</div>
                <div className="text-black text-3xl font-black">2000+</div>
              </div>
              <div>
                <div className="text-xs text-black/60 font-bold tracking-wider mb-1">SELECTIONS</div>
                <div className="text-black text-3xl font-black">800+</div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-12">
              {[
                'Study Materials in Tamil & English',
                'Weekly Mock Tests',
                'Doubt Clearing Sessions',
                'Current Affairs Updates',
                'Regular Assessments',
                'Group Discussion Forums'
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-black rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-black font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-black">₹24,995</span>
                <span className="text-black/60 font-bold">/year</span>
              </div>
            </div>

            {/* Button */}
            <button className="w-full bg-black text-emerald-400 font-black py-4 px-8 text-lg tracking-wider hover:bg-gray-900 transition-all duration-200 border-2 border-black hover:border-emerald-400">
              ENROLL NOW →
            </button>
          </div>

          {/* RIGHT CARD - Dark Bold Card */}
          <div className="bg-gray-900 p-12 relative overflow-hidden border-l-4 border-emerald-400/20">
            {/* Diagonal stripes */}
            <div className="absolute bottom-0 left-0 w-48 h-48 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 2px, transparent 2px, transparent 8px)',
              }}></div>
            </div>

            {/* Badge */}
            <div className="mb-8 flex items-center justify-between">
              <span className="text-emerald-400 text-xs font-bold tracking-widest">GROUP I & II</span>
              <span className="bg-emerald-400/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold">
                8 SEATS LEFT
              </span>
            </div>

            {/* Title */}
            <div className="mb-12">
              <h3 className="text-white text-3xl font-black mb-3 tracking-tight leading-tight">
                Complete TNPSC
                <br />
                Mastery Program
              </h3>
              <p className="text-gray-400 font-medium text-sm">
                Everything you need to crack TNPSC Group I & II
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-12">
              <div>
                <div className="text-emerald-400 text-xs font-bold tracking-wider mb-2">EXAMPLES</div>
                <div className="text-white text-2xl font-black">1000+</div>
                <div className="text-gray-500 text-xs font-medium mt-1">Mock Tests</div>
              </div>
              <div>
                <div className="text-emerald-400 text-xs font-bold tracking-wider mb-2">SOURCE</div>
                <div className="text-white text-2xl font-black">INCLUDED</div>
                <div className="text-gray-500 text-xs font-medium mt-1">All Materials</div>
              </div>
              <div>
                <div className="text-emerald-400 text-xs font-bold tracking-wider mb-2">UPDATES</div>
                <div className="text-white text-2xl font-black">LIFETIME</div>
                <div className="text-gray-500 text-xs font-medium mt-1">Free Forever</div>
              </div>
              <div>
                <div className="text-emerald-400 text-xs font-bold tracking-wider mb-2">SUPPORT</div>
                <div className="text-white text-2xl font-black">24/7</div>
                <div className="text-gray-500 text-xs font-medium mt-1">Expert Help</div>
              </div>
            </div>

            {/* Feature Checklist */}
            <div className="space-y-3 mb-12">
              {[
                'Personalized Study Plan',
                'Expert Faculty (Tamil & English)',
                'Daily Mock Tests & Analysis',
                'Interview Preparation',
                'Previous Year Papers',
                'One-on-One Mentorship',
                'Complete Syllabus Coverage',
                '24/7 Doubt Resolution'
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-emerald-400/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300 font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-white">₹49,995</span>
                <span className="text-gray-400 font-bold">/year</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 bg-emerald-400 text-black font-black py-4 px-6 text-base tracking-wider hover:bg-emerald-300 transition-all duration-200">
                GET BLOOMS+
              </button>
              <button className="px-6 border-2 border-white/20 text-white font-bold hover:border-emerald-400 hover:text-emerald-400 transition-all duration-200">
                SIGN IN
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Questions? Contact us at{' '}
            <a href="mailto:admission@bloomsacademy.com" className="text-emerald-400 hover:underline font-bold">
              admission@bloomsacademy.com
            </a>
            {' '}or call{' '}
            <a href="tel:9003190030" className="text-emerald-400 hover:underline font-bold">
              90031 90030
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
