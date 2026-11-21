import React from 'react';
import Link from 'next/link';
import { courses } from '@/data/courses';
import HomeSection from './HomeSection';

const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });

export default function CourseList() {
  const list = courses.slice(0, 6);

  return (
    <HomeSection
      id="courses"
      tone="mist"
      title="Courses and fees"
      intro="Choose by exam. Every course includes study material in Tamil and English."
      aside={
        <Link href="/courses" className="text-sm font-semibold text-red-700 hover:text-red-900 underline underline-offset-4 decoration-red-200 hover:decoration-red-700">
          All courses
        </Link>
      }
    >
      <ul className="bg-white rounded-2xl border border-rule divide-y divide-rule">
        {list.map((c) => (
          <li key={c.id}>
            <Link
              href={`/courses/${c.id}`}
              className="group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-center px-5 md:px-8 py-5 hover:bg-red-50/40 transition-colors"
            >
              <div className="md:col-span-6">
                <p className="text-sm text-gray-500">{c.category}</p>
                <p className="font-heading text-lg md:text-xl font-semibold text-ink group-hover:text-red-800">{c.title}</p>
              </div>
              <div className="md:col-span-6 flex items-baseline gap-4 md:grid md:grid-cols-3 md:gap-6">
                <p className="text-[15px] text-gray-700">{c.duration}</p>
                <p className="text-[15px] text-gray-700">{c.level}</p>
                <p className="ml-auto md:ml-0 md:text-right font-heading text-xl font-semibold text-ink tabular-nums">
                {c.price ? inr.format(c.price) : 'Contact us'}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </HomeSection>
  );
}
