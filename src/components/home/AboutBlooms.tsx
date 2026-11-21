import React from 'react';
import { SITE_CONFIG } from '@/constants';
import { Button } from '@/components/ui';
import HomeSection from './HomeSection';

const facts = [
  { term: 'Exams covered', detail: 'TNPSC Group I, II, II-A, IV and VAO' },
  { term: 'Medium', detail: 'Tamil and English, with separate batches' },
  { term: 'Faculty', detail: '50+ teachers, including serving officers and past rank holders' },
  { term: 'Where', detail: `${SITE_CONFIG.address}, plus live online classes` },
];

export default function AboutBlooms() {
  return (
    <HomeSection id="about" tone="mist" title="A TNPSC academy built around Tamil Nadu's syllabus">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7 space-y-5 text-[17px] leading-[1.7] text-gray-700 max-w-[64ch]">
          <p>
            Blooms IAS Academy prepares students only for TNPSC exams. Every course follows the state syllabus, from Tamil
            Nadu history and culture to state-focused current affairs, and every subject is taught in both Tamil and English.
          </p>
          <p>
            Classes are paired with regular tests and personal mentoring, so you know where you stand before the exam does.
            More than 2,000 of our students have been selected across TNPSC Group I, II, II-A and IV.
          </p>
          <div className="flex flex-wrap gap-3 pt-3">
            <Button href="/about">About the academy</Button>
            <Button href="/courses" variant="outline">View courses</Button>
          </div>
        </div>

        <dl className="lg:col-span-5 divide-y divide-rule border-y border-rule">
          {facts.map((f) => (
            <div key={f.term} className="grid grid-cols-3 gap-4 py-4">
              <dt className="text-sm font-medium text-gray-500">{f.term}</dt>
              <dd className="col-span-2 text-[15px] text-ink">{f.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </HomeSection>
  );
}
