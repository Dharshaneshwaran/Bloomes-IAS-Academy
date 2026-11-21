import React from 'react';

interface HomeSectionProps {
  id?: string;
  title: string;
  intro?: string;
  tone?: 'white' | 'mist';
  /** Optional element shown at the right of the heading row, e.g. a link. */
  aside?: React.ReactNode;
  children: React.ReactNode;
}

/** Shared frame for homepage sections below the hero: left-aligned heading, one column width, consistent rhythm. */
export default function HomeSection({ id, title, intro, tone = 'white', aside, children }: HomeSectionProps) {
  const headingId = id ? `${id}-heading` : undefined;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`home-section py-16 md:py-24 ${tone === 'mist' ? 'bg-mist' : 'bg-white'}`}
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10 md:mb-12">
          <div className="max-w-2xl">
            <h2 id={headingId} className="font-heading text-[31px] md:text-[39px] leading-[1.15] font-semibold text-ink">
              {title}
            </h2>
            {intro && <p className="mt-3 text-base md:text-lg leading-relaxed text-gray-600">{intro}</p>}
          </div>
          {aside}
        </div>
        {children}
      </div>
    </section>
  );
}
