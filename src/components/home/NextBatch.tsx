import React from 'react';
import Link from 'next/link';
import { LuPhone } from 'react-icons/lu';
import { SITE_CONFIG } from '@/constants';

export default function NextBatch() {
  const tel = SITE_CONFIG.phone.replace(/\s/g, '');

  return (
    <section aria-labelledby="next-batch-heading" className="home-section bg-navy-deep text-white">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-7">
          <p className="text-white/70 text-[15px]">TNPSC Group I, Regular (PCM) batch</p>
          <h2 id="next-batch-heading" className="mt-2 font-heading text-[39px] md:text-[49px] leading-[1.05] font-semibold">
            Next batch starts <span className="whitespace-nowrap">7 October 2026</span>
          </h2>
          <p className="mt-4 text-white/80 text-lg">Classes run 2.00 PM to 5.00 PM. Seats are limited per batch.</p>
        </div>

        <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-red-700 hover:bg-red-800 px-6 py-3.5 font-semibold transition-colors focus-visible:outline-white"
          >
            Register for the batch
          </Link>
          <a
            href={`tel:${tel}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 hover:border-white hover:bg-white/5 px-6 py-3.5 font-semibold transition-colors focus-visible:outline-white"
          >
            <LuPhone size={18} aria-hidden="true" />
            Call {SITE_CONFIG.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
