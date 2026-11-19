'use client';

import React from 'react';

export default function OnlineClasses() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT SECTION - Text & CTA */}
            <div className="space-y-8">
              {/* Main Heading */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight">
                Start mastering
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                  TNPSC today.
                </span>
              </h2>

              {/* Description */}
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Learn, practice, and excel with expert guidance. Join thousands of successful candidates who cracked TNPSC through our proven teaching methodology and comprehensive study materials.
              </p>

              {/* CTA Button */}
              <div>
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl text-lg flex items-center gap-3 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
                  <span>Get Started</span>
                  <svg 
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* RIGHT SECTION - Visual Cards */}
            <div className="relative">
              {/* Background decorative gradient */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-200/30 via-purple-200/30 to-emerald-200/30 rounded-3xl blur-3xl"></div>

              {/* Main Card Stack */}
              <div className="relative space-y-6">
                
                {/* Card 1 - Stats Overview */}
                <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-blue-600 font-bold text-sm tracking-wider">LIVE STATISTICS</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-500 text-xs">Updated Now</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <div className="text-3xl font-black text-gray-900 mb-1">8.2K</div>
                      <div className="text-gray-500 text-xs">Active Learners</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-emerald-600 mb-1">95%</div>
                      <div className="text-gray-500 text-xs">Success Rate</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-blue-600 mb-1">24/7</div>
                      <div className="text-gray-500 text-xs">Support</div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Feature Card with Soft Gradient */}
                <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-black text-lg">Live HD Classes</h4>
                        <p className="text-white/80 text-sm">4K quality streaming</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/90">Tamil Medium</span>
                        <span className="text-white font-bold">Available</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/90">English Medium</span>
                        <span className="text-white font-bold">Available</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/90">Recorded Sessions</span>
                        <span className="text-white font-bold">Lifetime</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Chat/Testimonial Style */}
                <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  <div className="space-y-4">
                    {/* Chat bubble 1 */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">R</span>
                      </div>
                      <div className="flex-1">
                        <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4">
                          <p className="text-gray-800 text-sm">How do you find the TNPSC classes?</p>
                        </div>
                        <p className="text-gray-400 text-xs mt-1 ml-2">Rajesh, Group II Aspirant</p>
                      </div>
                    </div>

                    {/* Chat bubble 2 */}
                    <div className="flex items-start gap-3 justify-end">
                      <div className="flex-1">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl rounded-tr-none p-4 ml-auto max-w-[85%]">
                          <p className="text-white text-sm">Excellent! Best faculty and materials. 💯</p>
                        </div>
                        <p className="text-gray-400 text-xs mt-1 mr-2 text-right">Priya, Group I Selected</p>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">P</span>
                      </div>
                    </div>

                    {/* Chat bubble 3 */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">A</span>
                      </div>
                      <div className="flex-1">
                        <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4">
                          <p className="text-gray-800 text-sm">The mock tests really helped! 🎯</p>
                        </div>
                        <p className="text-gray-400 text-xs mt-1 ml-2">Arun, Group IV Selected</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 4 - Globe/Reach Card */}
                <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-xl">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full mx-auto flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-gray-900 font-black text-xl mb-2">All over Tamil Nadu</h4>
                    <p className="text-gray-600 text-sm">
                      Join 8,000+ students learning across
                      <br />
                      all districts of Tamil Nadu
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-emerald-600 text-sm font-bold">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span>Live classes happening now</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
