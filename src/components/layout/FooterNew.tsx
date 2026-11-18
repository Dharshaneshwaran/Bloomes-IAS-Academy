'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiLinkedin, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/constants';
import CinematicSection from './CinematicSection';

export default function FooterNew() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Courses', href: '/courses' },
    { label: 'Faculty', href: '/faculty' },
    { label: 'Results', href: '/achievements' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const tnpscCourses = [
    { label: 'Group 1', href: '/courses#group1' },
    { label: 'Group 2', href: '/courses#group2' },
    { label: 'Group 2A', href: '/courses#group2a' },
    { label: 'Group 4', href: '/courses#group4' },
  ];

  return (
    <>
      {/* Cinematic Knowledge Comes Alive Section */}
      <CinematicSection />

      {/* Premium Dark Footer */}
      <footer className="bg-gradient-to-b from-[#0a1f3e] to-[#050d1a] text-gray-300">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Column 1: About Blooms */}
            <div className="space-y-6">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-700 rounded-full flex items-center justify-center shadow-xl relative">
                  {/* Lotus petals simplified icon */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8L18 14L22 10L20 16L26 14L22 18L28 20L22 22L24 28L18 24L20 30L16 26L12 30L14 24L8 28L10 22L4 20L10 18L6 14L12 16L10 10L14 14L16 8Z" fill="white"/>
                    <rect x="12" y="20" width="8" height="4" rx="1" fill="white"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{SITE_CONFIG.name}</h3>
                  <p className="text-xs text-pink-300 italic">{SITE_CONFIG.tagline}</p>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-400">
                Premier coaching institute for TNPSC examination preparation in Tamil Nadu. 
                We are committed to providing world-class education and guidance to help students 
                achieve their dreams of serving Tamil Nadu through government services.
              </p>

              {/* Social Media */}
              <div>
                <p className="text-sm font-semibold text-white mb-3">Connect With Us</p>
                <div className="flex gap-3">
                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#3b82f6] border border-white/10 hover:border-[#60a5fa] flex items-center justify-center transition-all duration-300 group"
                    aria-label="Facebook"
                  >
                    <FiFacebook size={18} className="group-hover:text-white" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#3b82f6] border border-white/10 hover:border-[#60a5fa] flex items-center justify-center transition-all duration-300 group"
                    aria-label="Twitter"
                  >
                    <FiTwitter size={18} className="group-hover:text-white" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#3b82f6] border border-white/10 hover:border-[#60a5fa] flex items-center justify-center transition-all duration-300 group"
                    aria-label="Instagram"
                  >
                    <FiInstagram size={18} className="group-hover:text-white" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#3b82f6] border border-white/10 hover:border-[#60a5fa] flex items-center justify-center transition-all duration-300 group"
                    aria-label="YouTube"
                  >
                    <FiYoutube size={18} className="group-hover:text-white" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#3b82f6] border border-white/10 hover:border-[#60a5fa] flex items-center justify-center transition-all duration-300 group"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin size={18} className="group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#3b82f6]"></span>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#60a5fa] hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-[#3b82f6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: TNPSC Courses */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
                TNPSC Courses
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#3b82f6]"></span>
              </h4>
              <ul className="space-y-3">
                {tnpscCourses.map((course) => (
                  <li key={course.href}>
                    <Link
                      href={course.href}
                      className="text-sm text-gray-400 hover:text-[#60a5fa] hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-[#3b82f6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {course.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    href="/courses"
                    className="text-sm text-[#60a5fa] hover:text-white font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    View All Courses
                    <span>→</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Connect With Us */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
                Connect With Us
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#3b82f6]"></span>
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#60a5fa] flex items-center justify-center flex-shrink-0 transition-all">
                    <FiPhone className="text-[#3b82f6]" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Call Us</p>
                    <a 
                      href={`tel:${SITE_CONFIG.phone}`} 
                      className="text-sm text-gray-300 hover:text-[#60a5fa] transition-colors font-medium"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#60a5fa] flex items-center justify-center flex-shrink-0 transition-all">
                    <FiMail className="text-[#3b82f6]" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Email Us</p>
                    <a 
                      href={`mailto:${SITE_CONFIG.email}`} 
                      className="text-sm text-gray-300 hover:text-[#60a5fa] transition-colors break-all"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#60a5fa] flex items-center justify-center flex-shrink-0 transition-all">
                    <FiMapPin className="text-[#3b82f6]" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Visit Us</p>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {SITE_CONFIG.address}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-white/5">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p className="text-gray-500 text-center md:text-left">
                © {currentYear} <span className="text-[#60a5fa] font-semibold">{SITE_CONFIG.name}</span>. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link 
                  href="/terms" 
                  className="text-gray-500 hover:text-[#60a5fa] transition-colors"
                >
                  Terms & Conditions
                </Link>
                <span className="text-gray-700">|</span>
                <Link 
                  href="/privacy" 
                  className="text-gray-500 hover:text-[#60a5fa] transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
