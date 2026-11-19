'use client';

import React from 'react';
import { FiCheck, FiUser } from 'react-icons/fi';

export default function PricingCards() {
  const basicPlan = {
    title: 'TNPSC Group II-A',
    subtitle: 'for First Time Aspirants',
    price: '₹24,995',
    period: '/year',
    badge: 'All slots booked for January',
    badgeColor: 'bg-red-100 text-red-600',
    testimonial: {
      name: 'Rajesh Kumar',
      role: 'Group II Selected',
      message: 'Quality and Materials are Top Notch!'
    },
    features: [
      { text: 'Custom Study Plan & Materials', checked: true },
      { text: 'Tamil & English Medium Classes', checked: true },
      { text: 'Weekly Mock Tests & Analysis', checked: true },
      { text: 'Basic Doubt Clearing Sessions', checked: true },
      { text: 'Group IV Prelims Coverage', checked: true },
      { text: 'Current Affairs Updates', checked: true }
    ],
    buttonText: 'Select Plan',
    buttonColor: 'bg-yellow-400 text-black hover:bg-yellow-500'
  };

  const premiumPlan = {
    title: 'TNPSC Group I & II',
    subtitle: 'for Serious Aspirants',
    price: '₹49,995',
    period: '/year',
    badge: '8 Seats Available',
    badgeColor: 'bg-green-100 text-green-700',
    testimonial: {
      name: 'Priya Sharma',
      role: 'Group I Selected',
      message: 'Guidance and Teaching are Outstanding!'
    },
    features: [
      { text: 'Personalized Study Plan & Mentorship', checked: true },
      { text: 'Tamil & English Expert Faculty', checked: true },
      { text: 'Daily Mock Tests & Detailed Analysis', checked: true },
      { text: '24/7 Doubt Clearing Support', checked: true },
      { text: 'Complete Group I & II Coverage', checked: true },
      { text: 'Interview Preparation & Guidance', checked: true },
      { text: 'Previous Year Papers & Solutions', checked: true },
      { text: 'One-on-One Counseling Sessions', checked: true }
    ],
    buttonText: 'Select Plan',
    buttonColor: 'bg-yellow-400 text-black hover:bg-yellow-500'
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Course Plans
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Doubts? Reach out to us at{' '}
            <a href="mailto:admission@bloomsacademy.com" className="text-blue-600 hover:underline">
              admission@bloomsacademy.com
            </a>{' '}
            or{' '}
            <a href="tel:9003190030" className="text-blue-600 hover:underline">
              call us
            </a>
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Light Card - Basic Plan */}
          <div className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden transform transition-all duration-300 hover:scale-105">
            {/* Badge */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-semibold text-gray-600">Components</span>
              <span className={`text-xs font-medium px-3 py-1.5 rounded-full ${basicPlan.badgeColor}`}>
                {basicPlan.badge}
              </span>
            </div>

            {/* Title */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {basicPlan.title}
              </h3>
              <p className="text-gray-500">
                {basicPlan.subtitle}
              </p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-gray-900">{basicPlan.price}</span>
                <span className="text-xl text-gray-500">{basicPlan.period}</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className={`w-full ${basicPlan.buttonColor} font-semibold py-3.5 rounded-lg transition-all duration-200 mb-8 shadow-md`}>
              {basicPlan.buttonText}
            </button>

            {/* Features - Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {basicPlan.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FiCheck className="text-gray-400 mt-1 flex-shrink-0" size={16} />
                  <span className="text-sm text-gray-600">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="flex items-center gap-3 pt-6 border-t border-gray-200">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white">
                <FiUser size={20} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500">{basicPlan.testimonial.name}, {basicPlan.testimonial.role}</p>
              </div>
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
            </div>
            <p className="text-sm text-gray-600 mt-2 italic">
              "{basicPlan.testimonial.message}"
            </p>
          </div>

          {/* Dark Card - Premium Plan */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 relative overflow-hidden transform transition-all duration-300 hover:scale-105">
            {/* Badge */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-semibold text-gray-400">Website Pages</span>
              <span className={`text-xs font-medium px-3 py-1.5 rounded-full ${premiumPlan.badgeColor}`}>
                {premiumPlan.badge}
              </span>
            </div>

            {/* Title */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {premiumPlan.title}
              </h3>
              <p className="text-gray-400">
                {premiumPlan.subtitle}
              </p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-white">{premiumPlan.price}</span>
                <span className="text-xl text-gray-400">{premiumPlan.period}</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className={`w-full ${premiumPlan.buttonColor} font-semibold py-3.5 rounded-lg transition-all duration-200 mb-8 shadow-md`}>
              {premiumPlan.buttonText}
            </button>

            {/* Features - Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {premiumPlan.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FiCheck className="text-gray-500 mt-1 flex-shrink-0" size={16} />
                  <span className="text-sm text-gray-300">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="flex items-center gap-3 pt-6 border-t border-gray-700">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white">
                <FiUser size={20} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400">{premiumPlan.testimonial.name}, {premiumPlan.testimonial.role}</p>
              </div>
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
            </div>
            <p className="text-sm text-gray-300 mt-2 italic">
              "{premiumPlan.testimonial.message}"
            </p>

            {/* Premium Glow Effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
