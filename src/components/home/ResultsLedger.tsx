import React from 'react';
import Link from 'next/link';
import { rankHolders } from '@/data/achievements';
import HomeSection from './HomeSection';

// Figures from src/data/achievements.ts. Vacancies are only listed where the source gives them.
const results = [
  { exam: 'Group I', year: '2025', selected: 30, vacancies: 70 },
  { exam: 'Group II', year: '2024', selected: 450, vacancies: 1338 },
  { exam: 'Group II-A', year: '2025', selected: 280 },
  { exam: 'Group IV', year: '2024', selected: 620 },
  { exam: 'VAO', year: '2024', selected: 380 },
];

const nf = new Intl.NumberFormat('en-IN');

export default function ResultsLedger() {
  const topRanks = [...rankHolders]
    .sort((a, b) => parseInt(a.rank.replace(/\D/g, ''), 10) - parseInt(b.rank.replace(/\D/g, ''), 10))
    .slice(0, 4);

  return (
    <HomeSection
      id="results"
      title="Our results in recent TNPSC exams"
      intro="Blooms students selected in each exam. For Group I and Group II, the bar shows how many of the total vacancies they took."
      aside={
        <Link href="/achievements" className="text-sm font-semibold text-red-700 hover:text-red-900 underline underline-offset-4 decoration-red-200 hover:decoration-red-700">
          See all results
        </Link>
      }
    >
      <div>
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">TNPSC selections from Blooms IAS Academy by exam</caption>
          <thead>
            <tr className="border-b border-ink/80 text-sm text-gray-600">
              <th scope="col" className="py-3 pr-4 font-medium">Exam</th>
              <th scope="col" className="hidden sm:table-cell py-3 pr-4 font-medium">Year</th>
              <th scope="col" className="py-3 pr-4 sm:pr-6 font-medium text-right">Selected</th>
              <th scope="col" className="py-3 font-medium w-[42%] sm:w-[45%]">Share of vacancies</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r, i) => {
              const share = r.vacancies ? r.selected / r.vacancies : null;
              return (
                <tr key={r.exam} className="border-b border-rule">
                  <th scope="row" className="py-5 pr-4 font-heading text-xl font-semibold text-ink">
                    {r.exam}
                    <span className="block sm:hidden font-sans text-sm font-normal text-gray-500">{r.year}</span>
                  </th>
                  <td className="hidden sm:table-cell py-5 pr-4 text-gray-600 tabular-nums">{r.year}</td>
                  <td className="py-5 pr-4 sm:pr-6 text-right font-heading text-[25px] sm:text-[31px] leading-none font-bold text-red-700 tabular-nums">
                    {nf.format(r.selected)}
                  </td>
                  <td className="py-5">
                    {share !== null ? (
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4">
                        <div className="relative h-3 w-full sm:flex-1 rounded-full bg-mist overflow-hidden" aria-hidden="true">
                          <div
                            className="ledger-bar absolute inset-y-0 left-0 rounded-full bg-navy"
                            style={{ width: `${share * 100}%`, animationDelay: `${i * 120}ms` }}
                          />
                        </div>
                        <span className="text-sm text-gray-700 tabular-nums whitespace-nowrap">
                          {Math.round(share * 100)}% of {nf.format(r.vacancies!)}
                        </span>
                      </div>
                    ) : (
                      <span className="sr-only">Vacancy total not available</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-12">
        <h3 className="font-heading text-xl font-semibold text-ink mb-4">Top ranks from Blooms</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5">
          {topRanks.map((r) => (
            <li key={r.id} className="border-l-2 border-red-700 pl-4">
              <p className="font-semibold text-ink">{r.name}</p>
              <p className="text-sm text-gray-600">
                {r.rank}, {r.exam.replace('TNPSC ', '')} {r.year}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </HomeSection>
  );
}
