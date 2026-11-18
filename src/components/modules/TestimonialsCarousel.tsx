'use client';

import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { Card } from '@/components/ui';
import { Testimonial } from '@/types';

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;
  const maxIndex = Math.ceil(testimonials.length / testimonialsPerPage) - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * testimonialsPerPage,
    (currentIndex + 1) * testimonialsPerPage
  );

  return (
    <div className="relative">
      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {visibleTestimonials.map((testimonial) => (
          <Card key={testimonial.id} className="flex flex-col h-full">
            {/* Quote Icon */}
            <div className="text-4xl text-[var(--primary)] opacity-20 leading-none mb-3">
              &ldquo;
            </div>
            
            {/* Testimonial Text */}
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4 flex-1 -mt-6">
              {testimonial.text}
            </p>
            
            {/* Rating */}
            {testimonial.rating && (
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="text-[var(--accent)] fill-current" size={14} />
                ))}
              </div>
            )}
            
            {/* Student Info */}
            <div className="flex items-center gap-3 pt-3 border-t">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white font-bold text-base">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-sm text-[var(--dark)]">{testimonial.name}</h4>
                <p className="text-xs text-gray-600">{testimonial.rank}</p>
                {testimonial.year && (
                  <p className="text-[10px] text-gray-500">Batch {testimonial.year}</p>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Navigation Buttons */}
      {testimonials.length > testimonialsPerPage && (
        <div className="flex justify-center gap-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all"
            aria-label="Previous testimonials"
          >
            <FiChevronLeft size={24} />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {[...Array(maxIndex + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? 'bg-[var(--primary)] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all"
            aria-label="Next testimonials"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
}
