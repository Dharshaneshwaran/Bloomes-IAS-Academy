'use client';

import Link from 'next/link';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiLinkedin, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Courses', href: '/courses' },
    { label: 'Achievements', href: '/achievements' },
    { label: 'Blog', href: '/blog' },
    { label: 'Study Materials', href: '/materials' },
    { label: 'Career', href: '/career' },
  ];

  const importantLinks = [
    { label: 'Admission', href: '/admission' },
    { label: 'TNPSC Syllabus', href: '/syllabus' },
    { label: 'Test Series', href: '/test-series' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
  ];

  return (
    <footer className="bg-[var(--dark)] text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">BA</span>
              </div>
              <h3 className="text-xl font-bold text-white">{SITE_CONFIG.name}</h3>
            </div>
            <p className="text-sm mb-4 leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            <div className="flex gap-3">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-[var(--primary)] flex items-center justify-center transition"
                aria-label="Facebook"
              >
                <FiFacebook size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-[var(--primary)] flex items-center justify-center transition"
                aria-label="Twitter"
              >
                <FiTwitter size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-[var(--primary)] flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <FiInstagram size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-[var(--primary)] flex items-center justify-center transition"
                aria-label="YouTube"
              >
                <FiYoutube size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-[var(--primary)] flex items-center justify-center transition"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[var(--accent)] transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Important Links</h4>
            <ul className="space-y-2">
              {importantLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[var(--accent)] transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-[var(--accent)] mt-1 flex-shrink-0" size={18} />
                <span className="text-sm">{SITE_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-[var(--accent)] flex-shrink-0" size={18} />
                <a href={`tel:${SITE_CONFIG.phone}`} className="text-sm hover:text-[var(--accent)] transition">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-[var(--accent)] flex-shrink-0" size={18} />
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm hover:text-[var(--accent)] transition">
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-center md:text-left">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/terms" className="hover:text-[var(--accent)] transition">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="hover:text-[var(--accent)] transition">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
