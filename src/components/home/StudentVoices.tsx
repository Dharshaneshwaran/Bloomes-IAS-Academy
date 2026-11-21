import React from 'react';
import Link from 'next/link';
import { testimonials } from '@/data/testimonials';
import HomeSection from './HomeSection';

function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2);
}

export default function StudentVoices() {
  const [featured, ...rest] = testimonials;
  const others = rest.slice(0, 2);

  return (
    <HomeSection
      id="students"
      tone="mist"
      title="From students who were selected"
      aside={
        <Link href="/testimonials" className="text-sm font-semibold text-red-700 hover:text-red-900 underline underline-offset-4 decoration-red-200 hover:decoration-red-700">
          Read more stories
        </Link>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <figure className="lg:col-span-7">
          <blockquote className="font-heading text-[25px] md:text-[31px] leading-[1.3] font-medium text-ink">
            <span className="text-red-700" aria-hidden="true">“</span>
            {featured.text}
            <span className="text-red-700" aria-hidden="true">”</span>
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <span className="h-11 w-11 rounded-full bg-red-700 text-white font-semibold flex items-center justify-center" aria-hidden="true">
              {initials(featured.name)}
            </span>
            <span>
              <span className="block font-semibold text-ink">{featured.name}</span>
              <span className="block text-sm text-gray-600">{featured.rank}</span>
            </span>
          </figcaption>
        </figure>

        <div className="lg:col-span-5 space-y-8 lg:border-l lg:border-rule lg:pl-10">
          {others.map((t) => (
            <figure key={t.id}>
              <blockquote className="text-[16px] leading-relaxed text-gray-700">“{t.text}”</blockquote>
              <figcaption className="mt-3 text-sm">
                <span className="font-semibold text-ink">{t.name}</span>
                <span className="text-gray-600">, {t.rank}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </HomeSection>
  );
}
