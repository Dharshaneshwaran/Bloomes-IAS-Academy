'use client';

import React from 'react';

export default function OnlineClasses() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-emerald-400 to-blue-500 text-black px-6 py-2 rounded-full text-xs font-black tracking-widest mb-6">
            PREMIUM LEARNING
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-5 tracking-tight leading-tight">
            Master TNPSC from
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Anywhere, Anytime
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Join India's most advanced TNPSC preparation platform with live classes,
            <br />
            expert mentorship, and proven results
          </p>
        </div>

        {/* Main Card - New Design */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* LEFT CARD - Feature Highlights */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-10 relative overflow-hidden group hover:border-emerald-400/50 transition-all duration-300">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Glow effect */}
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                {/* Badge */}
                <div className="mb-8">
                  <span className="bg-emerald-400/10 text-emerald-400 px-4 py-2 rounded-lg text-xs font-bold tracking-wider border border-emerald-400/20">
                    LIVE SESSIONS ONGOING
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white text-3xl font-black mb-4 leading-tight">
                  Tamil Nadu's Most
                  <br />
                  Trusted Platform
                </h3>
                <p className="text-gray-400 text-base mb-10 leading-relaxed">
                  Experience interactive learning with our state-of-the-art
                  technology and expert faculty team
                </p>

                {/* Key Features with Icons */}
                <div className="space-y-5 mb-10">
                  {[
                    { 
                      icon: '🎥',
                      title: '4K HD Live Classes',
                      desc: 'Crystal clear streaming'
                    },
                    { 
                      icon: '👨‍🏫',
                      title: 'Expert Tamil Faculty',
                      desc: '15+ years experience'
                    },
                    { 
                      icon: '📱',
                      title: 'Mobile App Access',
                      desc: 'Learn on the go'
                    },
                    { 
                      icon: '🏆',
                      title: '95% Success Rate',
                      desc: 'Proven track record'
                    }
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-200 border border-white/5">
                      <div className="text-3xl">{feature.icon}</div>
                      <div>
                        <h5 className="text-white font-bold text-sm">{feature.title}</h5>
                        <p className="text-gray-400 text-xs">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
                  <div>
                    <div className="text-emerald-400 text-2xl font-black">8K+</div>
                    <div className="text-gray-500 text-xs font-medium">Active Students</div>
                  </div>
                  <div>
                    <div className="text-blue-400 text-2xl font-black">500+</div>
                    <div className="text-gray-500 text-xs font-medium">Selections</div>
                  </div>
                  <div>
                    <div className="text-purple-400 text-2xl font-black">24/7</div>
                    <div className="text-gray-500 text-xs font-medium">Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CARD - Pricing/Enrollment */}
            <div className="bg-white rounded-3xl p-10 relative overflow-hidden shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-full blur-3xl opacity-50"></div>
              
              <div className="relative z-10">
                {/* Plan Badge */}
                <div className="mb-6">
                  <span className="bg-gradient-to-r from-emerald-400 to-blue-500 text-white px-5 py-2 rounded-full text-xs font-black tracking-wider">
                    PREMIUM ANNUAL PLAN
                  </span>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-black text-gray-900">₹19,999</span>
                    <span className="text-gray-400 line-through text-xl">₹35,000</span>
                  </div>
                  <p className="text-emerald-600 font-bold text-sm">Save ₹15,001 • Limited Time Offer</p>
                </div>

                {/* What's Included */}
                <div className="mb-8">
                  <h4 className="text-gray-900 font-black text-lg mb-5">What's Included:</h4>
                  <div className="space-y-3">
                    {[
                      'Unlimited live classes access',
                      'Tamil & English medium options',
                      'Daily mock tests & practice',
                      'Personalized study roadmap',
                      'Interview preparation sessions',
                      'Previous 10 years question bank',
                      'Doubt clearing within 2 hours',
                      'Mobile + Web app access'
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-black py-5 px-6 text-base tracking-wide rounded-xl hover:from-emerald-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform">
                    START LEARNING NOW →
                  </button>
                  <button className="w-full border-2 border-gray-200 text-gray-900 font-bold py-5 px-6 rounded-xl hover:border-gray-900 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                    </svg>
                    <span>WATCH DEMO CLASS</span>
                  </button>
                </div>

                {/* Trust Badge */}
                <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-center gap-2 text-gray-500 text-xs">
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">100% Money Back Guarantee • 7 Days Trial</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info Banner */}
        <div className="max-w-7xl mx-auto mt-12 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold">Limited Time Offer!</p>
                <p className="text-gray-400 text-sm">Only 23 seats remaining this batch</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:9003190030" className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call: 90031 90030</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
