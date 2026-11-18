'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiPhone, FiMail, FiChevronDown } from 'react-icons/fi';
import { NAV_ITEMS, SITE_CONFIG } from '@/constants';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#dc2626] text-white py-1.5 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center gap-6">
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-1.5 hover:text-yellow-300 transition">
                <FiMail size={12} />
                <span>{SITE_CONFIG.email}</span>
              </a>
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-1.5 hover:text-yellow-300 transition">
                <FiPhone size={12} />
                <span>TNPSC: {SITE_CONFIG.phone}</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/contact" className="hover:text-yellow-300 transition">
                Contact
              </Link>
              <Link href="/careers" className="hover:text-yellow-300 transition">
                Careers
              </Link>
              <Link href="/blog" className="hover:text-yellow-300 transition">
                Blog
              </Link>
              <Link href="/login" className="hover:text-yellow-300 transition">
                Login
              </Link>
              <Link href="/admission" className="bg-yellow-400 text-red-900 px-3 py-0.5 rounded hover:bg-yellow-300 transition font-semibold">
                Admission Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg'
            : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-700 rounded-full flex items-center justify-center relative">
                {/* Lotus petals simplified icon */}
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8L18 14L22 10L20 16L26 14L22 18L28 20L22 22L24 28L18 24L20 30L16 26L12 30L14 24L8 28L10 22L4 20L10 18L6 14L12 16L10 10L14 14L16 8Z" fill="white"/>
                  <rect x="12" y="20" width="8" height="4" rx="1" fill="white"/>
                </svg>
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-[var(--dark)]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {SITE_CONFIG.name}
                </h1>
                <p className="text-[10px] text-gray-600 hidden sm:block italic">
                  {SITE_CONFIG.tagline}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              {NAV_ITEMS.map((item, index) => (
                <div key={item.href} className="flex items-center">
                  {/* Separator */}
                  {index > 0 && (
                    <div className="h-4 w-px bg-gray-300 mx-4"></div>
                  )}
                  
                  <div 
                    className="relative"
                    onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className="text-sm text-[var(--dark)] hover:text-[var(--primary)] font-medium transition-colors flex items-center gap-1 py-2"
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <FiChevronDown 
                          size={14} 
                          className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} 
                        />
                      )}
                    </Link>
                    
                    {/* Dropdown Menu */}
                    {item.hasDropdown && item.dropdownItems && openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-0 w-80 bg-white rounded-b-lg shadow-2xl border border-gray-200 py-2 z-50">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-[var(--primary)] transition-colors border-b border-gray-100 last:border-b-0"
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {/* Get Started Button */}
              <div className="h-4 w-px bg-gray-300 mx-4"></div>
              <Link
                href="/contact"
                className="btn btn-primary text-sm px-6 py-2"
              >
                Get Started
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-[var(--dark)] p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <div key={item.href}>
                  {item.hasDropdown && item.dropdownItems ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className="w-full text-left text-sm text-[var(--dark)] hover:text-[var(--primary)] font-medium transition-colors py-2 flex items-center justify-between"
                      >
                        {item.label}
                        <FiChevronDown size={16} className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === item.label && (
                        <div className="pl-4 flex flex-col gap-1 mt-1">
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="text-xs text-gray-600 hover:text-[var(--primary)] py-2 transition-colors"
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-sm text-[var(--dark)] hover:text-[var(--primary)] font-medium transition-colors py-2 block"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn btn-primary text-center text-sm mt-2"
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
