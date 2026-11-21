'use client';

import React from 'react';
import { LuArrowRight, LuPhone } from "react-icons/lu";
import { Button } from '@/components/ui';
import { SITE_CONFIG } from '@/constants';

export default function CTASection() {
  return (
    <section className="relative bg-gradient-to-br from-red-700 to-red-900 text-white py-16 md:py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Ready to Start Your TNPSC Journey?
          </h2>
          <p className="text-sm md:text-base lg:text-lg mb-6 opacity-90">
            Join thousands of successful candidates who chose Blooms Academy for their TNPSC preparation. 
            Get expert guidance, comprehensive study material in Tamil & English, and personalized mentorship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button variant="ghost" size="lg" href="/admission" className="!bg-white !text-red-700 hover:!bg-red-50">
              Apply for Admission
              <LuArrowRight className="ml-2" size={18} />
            </Button>
            <a 
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 text-white hover:text-red-100 transition"
            >
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <LuPhone size={18} />
              </div>
              <div className="text-left">
                <p className="text-xs opacity-75">Call Us Now</p>
                <p className="font-bold text-base">{SITE_CONFIG.phone}</p>
              </div>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-white border-opacity-20">
            <div>
              <p className="text-xl md:text-2xl font-bold mb-1">100+</p>
              <p className="text-xs opacity-75">Expert Faculty</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold mb-1">100+</p>
              <p className="text-xs opacity-75">Mock Tests</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold mb-1">8+</p>
              <p className="text-xs opacity-75">Branches in TN</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold mb-1">24/7</p>
              <p className="text-xs opacity-75">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
