'use client';

import React from 'react';
import { FiMonitor, FiVideo, FiClock, FiHeadphones, FiWifi, FiPlay, FiCheckCircle } from 'react-icons/fi';
import { Button, Section, AnimatedBackground } from '@/components/ui';

export default function OnlineClasses() {
  const features = [
    { icon: <FiMonitor size={20} />, title: 'Live Interactive Sessions', description: 'Real-time two-way communication' },
    { icon: <FiVideo size={20} />, title: 'HD Video Quality', description: 'Crystal clear lectures' },
    { icon: <FiClock size={20} />, title: 'Flexible Timings', description: 'Learn at your convenience' },
    { icon: <FiHeadphones size={20} />, title: 'Instant Doubt Clearing', description: 'Ask questions live' },
  ];

  return (
    <Section background="white">
      <AnimatedBackground density="light" theme="blue" />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header - Compact */}
        <div className="text-center mb-6">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-1 rounded-full text-xs font-semibold mb-2">
            Online Learning Platform
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-[var(--dark)] mb-2">
            Study From Home with <span className="text-blue-600">Live Online Classes</span>
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Experience TNPSC coaching from home with our advanced online platform
          </p>
        </div>

        {/* Compact Premium Card */}
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl blur opacity-20"></div>
          
          <div className="relative bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              
              {/* Left Side - Compact Stats */}
              <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '25px 25px'
                  }}></div>
                </div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-4 text-sm">
                    <FiWifi size={14} />
                    <span className="font-semibold">Live Now</span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 leading-tight">
                    Interactive Online Coaching
                  </h3>
                  <p className="text-blue-100 text-xs mb-4">
                    Join thousands learning through our cutting-edge platform
                  </p>

                  {/* Compact Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-2xl font-bold">5000+</p>
                      <p className="text-blue-200 text-xs">Students</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-2xl font-bold">1000+</p>
                      <p className="text-blue-200 text-xs">Hours</p>
                    </div>
                  </div>

                  <button className="group flex items-center gap-2 bg-white text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all w-full justify-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FiPlay className="text-white ml-0.5" size={14} />
                    </div>
                    <span>Watch Demo</span>
                  </button>
                </div>
              </div>

              {/* Right Side - Compact Features */}
              <div className="lg:col-span-3 p-6">
                {/* Features Grid - 2x2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                        {feature.icon}
                      </div>
                      <div>
                        <h5 className="font-bold text-sm text-[var(--dark)]">{feature.title}</h5>
                        <p className="text-gray-600 text-xs">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Compact Benefits */}
                <div className="grid grid-cols-2 gap-2 mb-5 text-xs">
                  {['Access from anywhere', 'Recorded sessions', 'Digital materials', 'Online tests', 'Regular assessments', '24/7 support'].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <FiCheckCircle className="text-green-600 flex-shrink-0" size={14} />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons - Compact */}
                <div className="flex gap-3">
                  <Button variant="primary" href="/online-classes" fullWidth>
                    Enroll Now
                  </Button>
                  <Button variant="outline" href="/demo" fullWidth>
                    Free Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
