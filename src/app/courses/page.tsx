'use client';

import React, { useState } from 'react';
import { Header, FooterNew } from '@/components/layout';
import { Section, SectionHeader } from '@/components/ui';
import CourseCard from '@/components/modules/CourseCard';
import { courses } from '@/data/courses';
import ParticleConstellation from '@/components/ui/ParticleConstellation';
import CubeTunnel from '@/components/ui/CubeTunnel';

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Group I', 'Group II', 'Group II-A', 'Group IV', 'VAO', 'Test Series', 'Interview'];

  const filteredCourses = selectedCategory === 'All'
    ? courses
    : courses.filter(course => course.category === selectedCategory);

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--dark)] mb-4">
                Our Courses
              </h1>
              <p className="text-lg text-gray-700">
                Explore our comprehensive range of courses designed to help you succeed in 
                TNPSC Group I, Group II, Group II-A, Group IV, VAO and other TNPSC examinations.
              </p>
            </div>
          </div>
        </section>

        <ParticleConstellation />

        {/* Course Filters */}
        <Section background="white" padding="md">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-[var(--primary)] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <>
              <div className="mb-6">
                <p className="text-gray-600">
                  Showing <span className="font-semibold text-[var(--primary)]">{filteredCourses.length}</span> course{filteredCourses.length !== 1 ? 's' : ''}
                  {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No courses found in this category.</p>
            </div>
          )}
        </Section>

        <CubeTunnel />

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--color-blue-900)] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Our counselors are here to help you choose the right course for your goals. 
              Get personalized guidance and expert advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn btn-secondary">
                Contact Us
              </a>
              <a href="tel:9003190030" className="btn btn-outline bg-white text-[var(--primary)] border-white hover:bg-gray-100">
                Call: 90031 90030
              </a>
            </div>
          </div>
        </section>
      </main>
      <FooterNew />
    </>
  );
}
