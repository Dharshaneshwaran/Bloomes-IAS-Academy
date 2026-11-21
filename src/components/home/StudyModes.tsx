import React from 'react';
import { LuSchool, LuMonitorPlay, LuHistory } from 'react-icons/lu';
import HomeSection from './HomeSection';

const modes = [
  {
    icon: LuSchool,
    title: 'Classroom',
    body: 'Daily classes and offline tests at our Anna Nagar, Chennai centre.',
  },
  {
    icon: LuMonitorPlay,
    title: 'Live online',
    body: 'Two-way live classes from home. Ask the teacher questions as the class happens.',
  },
  {
    icon: LuHistory,
    title: 'Recorded',
    body: 'Every class is recorded so you can revise a topic as many times as you need.',
  },
];

export default function StudyModes() {
  return (
    <HomeSection id="modes" title="Study in the classroom, live online, or both">
      <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-rule border-y border-rule">
        {modes.map(({ icon: Icon, title, body }) => (
          <div key={title} className="py-8 md:px-8 first:md:pl-0 last:md:pr-0 border-b md:border-b-0 border-rule last:border-b-0">
            <Icon className="text-red-700" size={28} strokeWidth={1.5} aria-hidden="true" />
            <h3 className="mt-4 font-heading text-[22px] font-semibold text-ink">{title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-gray-600 max-w-[36ch]">{body}</p>
          </div>
        ))}
      </div>
    </HomeSection>
  );
}
