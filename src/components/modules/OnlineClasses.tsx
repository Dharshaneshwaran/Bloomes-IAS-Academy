'use client';

import React from 'react';

export default function OnlineClasses() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-emerald-400 text-black px-5 py-2 rounded-full text-xs font-bold tracking-widest mb-6">
            ONLINE PLATFORM
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
            Study From Home with
            <br />
            <span className="text-emerald-400">Live Online Classes</span>
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Experience TNPSC coaching from home with our advanced online platform
          </p>
        </div>

        {/* Main Card - Pluto Style with diagonal pattern */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 border-2 border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            
            {/* LEFT - Blue Section with Diagonal Pattern Overlay */}
            <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 p-10 relative overflow-hidden">
              {/* Diagonal Pattern Overlay - Pluto Style */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  rgba(255, 255, 255, 0.05) 0px,
                  rgba(255, 255, 255, 0.05) 10px,
                  transparent 10px,
                  transparent 20px
                )`
              }}></div>

              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 backdrop-blur-sm bg-white/5"></div>

              <div className="relative z-10">
                {/* Live Badge with pulse */}
                <div className="mb-8 inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </div>
                  <span className="text-white text-xs font-bold tracking-widest">LIVE NOW</span>
                </div>

                {/* Title */}
                <h3 className="text-white text-3xl font-black mb-4 tracking-tight leading-tight">
                  Interactive Online
                  <br />
                  Coaching
                </h3>
                <p className="text-blue-100 text-sm font-medium mb-10 leading-relaxed">
                  Join thousands learning through our
                  <br />
                  cutting-edge platform
                </p>

                {/* Stats Grid - Pluto Style */}
                <div className="grid grid-cols-2 gap-4 mb-12">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="text-white text-4xl font-black mb-1">5000+</div>
                    <div className="text-blue-100 text-xs font-bold tracking-wider">STUDENTS</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="text-white text-4xl font-black mb-1">1000+</div>
                    <div className="text-blue-100 text-xs font-bold tracking-wider">HOURS</div>
                  </div>
                </div>

                {/* Watch Demo Button - Glassmorphism */}
                <button className="w-full bg-white/20 backdrop-blur-md border-2 border-white/30 text-white font-black py-4 px-6 rounded-xl flex items-center justify-center gap-3 hover:bg-white hover:text-blue-600 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-white/20 group-hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 border border-white/30">
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                    </svg>
                  </div>
                  <span className="tracking-wider">WATCH DEMO</span>
                </button>
              </div>
            </div>

            {/* RIGHT - White Section */}
            <div className="lg:col-span-3 bg-white p-10">
              {/* Features Icons - 2x2 Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {/* Feature 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-black text-gray-900 text-base mb-1">Live Interactive Sessions</h5>
                    <p className="text-gray-600 text-sm">Real-time two-way communication</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-black text-gray-900 text-base mb-1">HD Video Quality</h5>
                    <p className="text-gray-600 text-sm">Crystal clear lectures</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-black text-gray-900 text-base mb-1">Flexible Timings</h5>
                    <p className="text-gray-600 text-sm">Learn at your convenience</p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-black text-gray-900 text-base mb-1">Instant Doubt Clearing</h5>
                    <p className="text-gray-600 text-sm">Ask questions live</p>
                  </div>
                </div>
              </div>

              {/* Checklist - Clean modern style */}
              <div className="grid grid-cols-2 gap-3 mb-10">
                {[
                  'Access from anywhere',
                  'Recorded sessions',
                  'Digital materials',
                  'Online tests',
                  'Regular assessments',
                  '24/7 support'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons - Modern Fintech Style */}
              <div className="flex gap-4">
                <button className="flex-1 bg-blue-600 text-white font-bold py-4 px-6 text-base tracking-wide rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  ENROLL NOW
                </button>
                <button className="px-8 border-2 border-gray-200 text-gray-900 font-bold rounded-xl hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200">
                  FREE DEMO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
