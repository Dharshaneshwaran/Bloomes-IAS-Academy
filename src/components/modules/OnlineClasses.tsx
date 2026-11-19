'use client';

import React from 'react';

export default function OnlineClasses() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-emerald-400 text-black px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-4">
            ONLINE PLATFORM
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">
            Study From Home with
            <br />
            <span className="text-emerald-400">Live Online Classes</span>
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Experience TNPSC coaching from home with our advanced online platform
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-6xl mx-auto border-4 border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            
            {/* LEFT - Blue Bold Section */}
            <div className="lg:col-span-2 bg-blue-600 p-10 relative overflow-hidden">
              {/* Diagonal stripes */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, #000 0px, #000 2px, transparent 2px, transparent 8px)',
                }}></div>
              </div>

              {/* Live Badge */}
              <div className="mb-6 inline-flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-white text-xs font-bold tracking-wider">LIVE NOW</span>
              </div>

              {/* Title */}
              <h3 className="text-white text-2xl font-black mb-3 tracking-tight">
                Interactive Online
                <br />
                Coaching
              </h3>
              <p className="text-blue-100 text-sm font-medium mb-8">
                Join thousands learning through our cutting-edge platform
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div>
                  <div className="text-white text-3xl font-black">5000+</div>
                  <div className="text-blue-200 text-xs font-bold tracking-wide">STUDENTS</div>
                </div>
                <div>
                  <div className="text-white text-3xl font-black">1000+</div>
                  <div className="text-blue-200 text-xs font-bold tracking-wide">HOURS</div>
                </div>
              </div>

              {/* Watch Demo Button */}
              <button className="w-full bg-white text-blue-600 font-black py-4 px-6 flex items-center justify-center gap-3 hover:bg-gray-100 transition-all duration-200">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                  </svg>
                </div>
                <span className="tracking-wider">WATCH DEMO</span>
              </button>
            </div>

            {/* RIGHT - White Section */}
            <div className="lg:col-span-3 bg-white p-10">
              {/* Features Icons */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-black text-gray-900 text-sm mb-1">Live Interactive Sessions</h5>
                    <p className="text-gray-600 text-xs">Real-time two-way communication</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-black text-gray-900 text-sm mb-1">HD Video Quality</h5>
                    <p className="text-gray-600 text-xs">Crystal clear lectures</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-black text-gray-900 text-sm mb-1">Flexible Timings</h5>
                    <p className="text-gray-600 text-xs">Learn at your convenience</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-black text-gray-900 text-sm mb-1">Instant Doubt Clearing</h5>
                    <p className="text-gray-600 text-xs">Ask questions live</p>
                  </div>
                </div>
              </div>

              {/* Checklist */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  'Access from anywhere',
                  'Recorded sessions',
                  'Digital materials',
                  'Online tests',
                  'Regular assessments',
                  '24/7 support'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-xs font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 bg-blue-600 text-white font-black py-4 px-6 text-sm tracking-wider hover:bg-blue-700 transition-all duration-200">
                  ENROLL NOW
                </button>
                <button className="px-6 border-2 border-gray-300 text-gray-900 font-bold hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
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
