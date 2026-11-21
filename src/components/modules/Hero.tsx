import React from 'react';
import Link from 'next/link';
import { LuCheck, LuPhone } from 'react-icons/lu';
import { SITE_CONFIG } from '@/constants';

const batchIncludes = [
  'Core concept classes for every paper',
  'Team of expert faculty',
  'Regular tests, offline and online',
  'Recorded classes for revision',
];

export default function Hero() {
  const tel = SITE_CONFIG.phone.replace(/\s/g, '');

  return (
    <section aria-labelledby="hero-heading" className="home-section bg-white border-b border-rule">
      <div className="mx-auto max-w-6xl px-5 md:px-8 pt-12 pb-16 md:pt-20 md:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Who we are, in one sentence */}
        <div className="lg:col-span-7">
          <p className="text-[15px] font-medium text-red-700">Admissions open for 2026 batches</p>
          <h1
            id="hero-heading"
            className="mt-4 font-heading text-[40px] sm:text-[49px] lg:text-[61px] leading-[1.04] font-semibold text-ink"
          >
            TNPSC coaching in Tamil and English, from foundation to interview
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600 max-w-[58ch]">
            Blooms IAS Academy in Anna Nagar, Chennai prepares students for TNPSC Group I, II, II-A, IV and VAO,
            in the classroom and live online.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center rounded-xl bg-red-700 hover:bg-red-800 text-white px-6 py-3.5 font-semibold transition-colors"
            >
              View courses and fees
            </Link>
            <a
              href={`tel:${tel}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 hover:border-red-700 hover:text-red-700 text-ink px-6 py-3.5 font-semibold transition-colors"
            >
              <LuPhone size={18} aria-hidden="true" />
              Call {SITE_CONFIG.phone}
            </a>
          </div>

          {/* Proof, stated plainly */}
          <dl className="mt-10 grid grid-cols-3 divide-x divide-rule border-t border-rule pt-6">
            <div className="pr-3 sm:pr-6">
              <dt className="text-xs sm:text-sm text-gray-600">Students selected</dt>
              <dd className="mt-1 font-heading text-xl sm:text-[25px] font-semibold text-ink tabular-nums">2,000+</dd>
            </div>
            <div className="px-3 sm:px-6">
              <dt className="text-xs sm:text-sm text-gray-600">Group I 2025</dt>
              <dd className="mt-1 font-heading text-xl sm:text-[25px] font-semibold text-ink tabular-nums">30 of 70</dd>
            </div>
            <div className="pl-3 sm:pl-6">
              <dt className="text-xs sm:text-sm text-gray-600">Faculty</dt>
              <dd className="mt-1 font-heading text-xl sm:text-[25px] font-semibold text-ink tabular-nums">50+</dd>
            </div>
          </dl>
        </div>

        {/* The next batch, like an admission notice */}
        <aside aria-labelledby="hero-batch-heading" className="lg:col-span-5 rounded-2xl bg-navy-deep text-white overflow-hidden">
          <div className="p-7 md:p-8">
            <p className="text-sm text-white/70">Next batch</p>
            <h2 id="hero-batch-heading" className="mt-1 font-heading text-xl sm:text-[25px] font-semibold leading-tight">
              TNPSC Group I, Regular (PCM)
            </h2>

            <div className="mt-6 flex items-end gap-5 border-y border-white/15 py-5">
              <p className="font-heading leading-none">
                <span className="block text-[61px] font-semibold tabular-nums">07</span>
              </p>
              <div className="pb-1.5">
                <p className="font-heading text-xl font-semibold">October 2026</p>
                <p className="text-sm text-white/75">Wednesday, 2.00 PM to 5.00 PM</p>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {batchIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-white/90">
                  <LuCheck className="mt-0.5 flex-shrink-0 text-red-300" size={18} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/[0.06] px-7 md:px-8 py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between">
            <p className="text-sm text-white/75">Seats are limited per batch.</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-red-700 hover:bg-red-600 px-5 py-3 font-semibold transition-colors"
            >
              Book your seat
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
