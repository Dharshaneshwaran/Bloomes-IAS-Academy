import React from 'react';
import { Header, FooterNew } from '@/components/layout';
import { Section, SectionHeader, AnimatedBackground } from '@/components/ui';
import AchievementsGrid from '@/components/modules/AchievementsGrid';
import { achievements, rankHolders } from '@/data/achievements';
import { FiAward } from 'react-icons/fi';

export default function AchievementsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="relative bg-[var(--light)] py-20 overflow-hidden">
          <AnimatedBackground density="medium" theme="blue" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--primary)] rounded-full mb-6">
                <FiAward className="text-white" size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--dark)] mb-4">
                Our Achievements
              </h1>
              <p className="text-lg text-gray-700">
                Celebrating excellence with our successful students who have achieved their dreams 
                through dedication and our comprehensive guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Main Achievements */}
        <Section background="white">
          <div className="relative z-10">
            <SectionHeader
              subtitle="Success Stories"
              title="Numbers That Speak for Themselves"
              description="Our track record of excellence demonstrates our commitment to student success"
            />
            <AchievementsGrid achievements={achievements} showAll={true} />
          </div>
        </Section>

        {/* Government Collaborations */}
        <Section background="light">
          <SectionHeader
            title="Preferred Civil Services Training Partner"
            description="Our collaboration with state governments reflects our commitment to quality education and successful outcomes"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Ministry of Social Justice and Empowerment',
              'Government of Karnataka (2019, 2023 & 2024)',
              'Government of West Bengal (2021 to 2024)',
              'Government of Kerala (2023-24)',
              'Government of Himachal Pradesh (2024)',
              'Government of Meghalaya (2024)',
              'YSR Vidyonnathi - Government of Andhra Pradesh (2019)',
              'Government of Jammu & Kashmir (2024)',
            ].map((govt, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FiAward className="text-white" size={28} />
                </div>
                <p className="text-sm font-semibold text-gray-700">{govt}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Top Rank Holders */}
        <Section background="white">
          <SectionHeader
            subtitle="Our Achievers"
            title="Rank Holders from Our Academy"
            description="Meet our successful students who secured top ranks in various competitive examinations"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rankHolders.map((achiever) => (
              <div
                key={achiever.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
              >
                {/* Image Placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-red-50 to-orange-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center">
                      <span className="text-5xl font-bold text-[var(--primary)]">
                        {achiever.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  {/* Rank Badge */}
                  <div className="absolute top-4 right-4 bg-[var(--accent)] text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    {achiever.rank}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--dark)] mb-2">
                    {achiever.name}
                  </h3>
                  <p className="text-[var(--primary)] font-semibold mb-2">
                    {achiever.exam} - {achiever.year}
                  </p>
                  <p className="text-gray-600 text-sm italic">
                    &ldquo;{achiever.quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-red-700 to-red-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Be the Next Success Story
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join Blooms Academy and embark on your journey to success. Our proven track record 
              and comprehensive guidance will help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/admission" className="btn btn-secondary">
                Apply Now
              </a>
              <a href="/contact" className="btn btn-outline bg-white text-[var(--primary)] border-white hover:bg-gray-100">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <FooterNew />
    </>
  );
}
