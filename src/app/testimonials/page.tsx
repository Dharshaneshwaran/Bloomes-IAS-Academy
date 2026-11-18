import React from 'react';
import { Header, FooterNew } from '@/components/layout';
import { Section, SectionHeader, AnimatedBackground } from '@/components/ui';
import TestimonialsCarousel from '@/components/modules/TestimonialsCarousel';
import { testimonials } from '@/data/testimonials';
import { FiMessageSquare, FiStar } from 'react-icons/fi';

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-20 overflow-hidden">
          <AnimatedBackground density="medium" theme="blue" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--primary)] rounded-full mb-6">
                <FiMessageSquare className="text-white" size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--dark)] mb-4">
                Student Testimonials
              </h1>
              <p className="text-lg text-gray-700">
                Hear directly from our successful students about their journey and experience 
                at Blooms Academy. Their success is our pride.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <Section background="white" padding="md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-3">
                <FiStar className="text-[var(--primary)]" size={28} />
              </div>
              <p className="text-3xl font-bold text-[var(--primary)] mb-1">4.9/5</p>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-full mb-3">
                <FiMessageSquare className="text-green-600" size={28} />
              </div>
              <p className="text-3xl font-bold text-green-600 mb-1">5000+</p>
              <p className="text-sm text-gray-600">Happy Students</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-50 rounded-full mb-3">
                <FiStar className="text-[var(--accent)]" size={28} />
              </div>
              <p className="text-3xl font-bold text-[var(--accent)] mb-1">98%</p>
              <p className="text-sm text-gray-600">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mb-3">
                <FiStar className="text-[var(--secondary)]" size={28} />
              </div>
              <p className="text-3xl font-bold text-[var(--secondary)] mb-1">100%</p>
              <p className="text-sm text-gray-600">Satisfaction</p>
            </div>
          </div>
        </Section>

        {/* Testimonials */}
        <Section background="light">
          <SectionHeader
            subtitle="Success Stories"
            title="Hear it from Our Achievers"
            description="Real stories from real students who achieved their dreams with Blooms Academy"
          />
          <TestimonialsCarousel testimonials={testimonials} />
        </Section>

        {/* Video Testimonials Section */}
        <Section background="white">
          <SectionHeader
            title="Video Testimonials"
            description="Watch our students share their success stories"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow aspect-video flex items-center justify-center group cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-8 h-8 text-[var(--primary)]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <p className="text-[var(--dark)] font-semibold">Watch Video {index}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--color-blue-900)] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of successful students who chose Blooms Academy for their preparation. 
              Start your journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/courses" className="btn btn-secondary">
                View Courses
              </a>
              <a href="/admission" className="btn btn-outline bg-white text-[var(--primary)] border-white hover:bg-gray-100">
                Apply for Admission
              </a>
            </div>
          </div>
        </section>
      </main>
      <FooterNew />
    </>
  );
}
