import React from 'react';
import HomeSection from './HomeSection';

const steps = [
  {
    title: 'Foundation classes',
    body: 'Core concepts for every paper, taught in Tamil and English by subject specialists.',
  },
  {
    title: 'Prelims test series',
    body: '30 offline and 40 online prelims tests in the real exam pattern.',
  },
  {
    title: 'Mains answer writing',
    body: '15 full-length mains tests to practise writing answers under exam time.',
  },
  {
    title: 'Interview preparation',
    body: 'Free mock interviews with seasoned expert panelists.',
  },
];

export default function PreparationSteps() {
  return (
    <HomeSection
      id="preparation"
      title="How we prepare you, stage by stage"
      intro="The same four stages as the TNPSC exam itself, so each part of your preparation has a clear purpose."
    >
      <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
        {steps.map((s, i) => (
          <li key={s.title} className="relative pt-6 border-t-2 border-ink">
            <span className="absolute -top-[2px] left-0 h-[2px] w-12 bg-red-700" aria-hidden="true" />
            <p className="font-heading text-sm font-semibold text-red-700 tabular-nums">Stage {i + 1}</p>
            <h3 className="mt-2 font-heading text-[22px] leading-snug font-semibold text-ink">{s.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{s.body}</p>
          </li>
        ))}
      </ol>
    </HomeSection>
  );
}
