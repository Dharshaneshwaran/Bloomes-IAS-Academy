'use client';

import React from 'react';

interface StatsBannerProps {
  variant?: 'blue' | 'purple' | 'emerald' | 'orange';
}

export default function StatsBanner({ variant = 'blue' }: StatsBannerProps) {
  const variants = {
    blue: 'from-blue-100 via-blue-50 to-blue-100',
    purple: 'from-purple-100 via-purple-50 to-purple-100',
    emerald: 'from-emerald-100 via-emerald-50 to-emerald-100',
    orange: 'from-orange-100 via-orange-50 to-orange-100'
  };

  const iconColors = {
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    emerald: 'text-emerald-600',
    orange: 'text-orange-600'
  };

  const textColors = {
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    emerald: 'text-emerald-600',
    orange: 'text-orange-600'
  };

  return (
    <section className={`py-16 bg-gradient-to-r ${variants[variant]} relative overflow-hidden`}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0, 0, 0, 0.1) 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Stats Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          {/* Stat 1 */}
          <div className="group">
            <div className={`w-16 h-16 ${iconColors[variant]} mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-200`}>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div className={`text-5xl font-black ${textColors[variant]} mb-2`}>2000+</div>
            <div className="text-gray-700 text-sm font-medium">TNPSC Selections</div>
          </div>

          {/* Stat 2 */}
          <div className="group">
            <div className={`w-16 h-16 ${iconColors[variant]} mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-200`}>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className={`text-5xl font-black ${textColors[variant]} mb-2`}>50+</div>
            <div className="text-gray-700 text-sm font-medium">Expert Faculty</div>
          </div>

          {/* Stat 3 */}
          <div className="group">
            <div className={`w-16 h-16 ${iconColors[variant]} mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-200`}>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className={`text-5xl font-black ${textColors[variant]} mb-2`}>450+</div>
            <div className="text-gray-700 text-sm font-medium">Group I & II</div>
          </div>

        </div>

        {/* Optional Center Text */}
        <div className="text-center mt-12">
          <p className={`${textColors[variant]} text-sm font-medium tracking-wider`}>
            Where Knowledge Flows Continuously
          </p>
        </div>
      </div>
    </section>
  );
}
