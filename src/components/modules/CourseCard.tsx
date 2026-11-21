import React from 'react';
import Link from 'next/link';
import { FiClock, FiBarChart, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { Course } from '@/types';
import { Card } from '@/components/ui';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="h-full flex flex-col">
      {/* Course Image */}
      <div className="relative h-40 bg-gradient-to-br from-red-50 to-orange-100 rounded-t-lg -m-6 mb-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
              <span className="text-2xl font-bold text-[var(--primary)]">{course.category}</span>
            </div>
            <span className="inline-block bg-[var(--primary)] text-white px-3 py-1 rounded-full text-xs font-semibold">
              {course.level}
            </span>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="flex-1 flex flex-col">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-[var(--dark)] mb-1.5 line-clamp-2">
            {course.title}
          </h3>
          <p className="text-gray-600 text-xs line-clamp-3">
            {course.description}
          </p>
        </div>

        {/* Course Meta */}
        <div className="flex items-center gap-3 text-xs text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <FiClock size={14} />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiBarChart size={14} />
            <span>{course.level}</span>
          </div>
        </div>

        {/* Features List */}
        {course.features && course.features.length > 0 && (
          <div className="mb-3 space-y-1.5">
            {course.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <FiCheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={14} />
                <span className="text-xs text-gray-700">{feature}</span>
              </div>
            ))}
            {course.features.length > 3 && (
              <p className="text-xs text-gray-500 italic">
                +{course.features.length - 3} more features
              </p>
            )}
          </div>
        )}

        {/* Price and CTA */}
        <div className="mt-auto pt-3 border-t">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs text-gray-600">Course Fee</p>
              <p className="text-xl font-bold text-[var(--primary)]">
                ₹{course.price?.toLocaleString('en-IN')}
              </p>
            </div>
          </div>
          
          <Link
            href={`/courses/${course.id}`}
            className="btn btn-primary w-full flex items-center justify-center gap-2 text-sm py-2"
          >
            View Details
            <FiArrowRight size={16} />
          </Link>
        </div>
      </div>
    </Card>
  );
}
