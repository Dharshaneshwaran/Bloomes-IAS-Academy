import React from 'react';
import { Header, FooterNew } from '@/components/layout';
import { Section, SectionHeader, Card, AnimatedBackground } from '@/components/ui';
import { FiTarget, FiEye, FiHeart, FiAward, FiUsers, FiBookOpen } from 'react-icons/fi';
import MatrixEducationRain from '@/components/ui/MatrixEducationRain';
import CubeTunnel from '@/components/ui/CubeTunnel';

export default function AboutPage() {
  const values = [
    {
      icon: <FiAward size={32} />,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality education and results',
    },
    {
      icon: <FiHeart size={32} />,
      title: 'Integrity',
      description: 'Upholding ethical standards in all our practices and interactions',
    },
    {
      icon: <FiUsers size={32} />,
      title: 'Student-Centric',
      description: 'Putting student success and well-being at the heart of everything we do',
    },
    {
      icon: <FiBookOpen size={32} />,
      title: 'Innovation',
      description: 'Continuously evolving our teaching methods and learning resources',
    },
  ];

  const milestones = [
    { year: '2000', title: 'Founded', description: 'Blooms Academy established in Chennai' },
    { year: '2005', title: '300+ Selections', description: 'Crossed 300 successful TNPSC candidates' },
    { year: '2010', title: 'Tamil Nadu Presence', description: 'Expanded to 5+ branches across Tamil Nadu' },
    { year: '2015', title: '1000+ Selections', description: 'Achieved 1000+ total TNPSC selections milestone' },
    { year: '2018', title: 'Online Platform', description: 'Launched online learning platform for TNPSC' },
    { year: '2025', title: '2000+ Selections', description: 'Continued legacy of TNPSC coaching excellence' },
  ];

  const team = [
    {
      name: 'Dr. Rajesh Kumar',
      designation: 'Founder & Director',
      expertise: 'TNPSC Expert, 25+ years experience',
    },
    {
      name: 'Prof. Meera Sharma',
      designation: 'Academic Head',
      expertise: 'Tamil Nadu History, 20+ years',
    },
    {
      name: 'Dr. Arun Vijay',
      designation: 'HOD - Tamil Nadu History',
      expertise: 'Ancient & Modern Tamil Nadu History',
    },
    {
      name: 'Ms. Priya Iyer',
      designation: 'HOD - Geography',
      expertise: 'Tamil Nadu Geography Expert',
    },
  ];

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-20 overflow-hidden">
          <AnimatedBackground density="medium" theme="blue" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--dark)] mb-4">
                About Blooms Academy
              </h1>
              <p className="text-lg text-gray-700">
                Pioneering excellence in TNPSC coaching since 2000. 
                Building dreams, shaping futures.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <Section background="white">
          <AnimatedBackground density="light" theme="orange" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl font-bold text-[var(--dark)] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Blooms Academy</strong> was founded with a vision to provide quality 
                  education and guidance to TNPSC aspirants in Tamil Nadu. What started as a small 
                  coaching center in Chennai has now grown into Tamil Nadu&apos;s most trusted 
                  name in TNPSC exam preparation.
                </p>
                <p>
                  Over the years, we have helped more than <strong>2,000+ students</strong> achieve 
                  their dreams of becoming TNPSC Group I, Group II, Group II-A, Group IV, and VAO officers. 
                  Our success is built on the foundation of expert faculty, comprehensive study material in 
                  Tamil and English, and personalized mentorship.
                </p>
                <p>
                  Today, with branches across Tamil Nadu and a robust online platform, we continue to 
                  empower thousands of students every year with the knowledge, skills, and confidence 
                  needed to excel in TNPSC examinations.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center">
                  <p className="text-4xl font-bold text-[var(--primary)] mb-2">2000+</p>
                  <p className="text-sm text-gray-600">TNPSC Selections</p>
                </Card>
                <Card className="text-center mt-8">
                  <p className="text-4xl font-bold text-[var(--secondary)] mb-2">25+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </Card>
                <Card className="text-center">
                  <p className="text-4xl font-bold text-[var(--accent)] mb-2">8+</p>
                  <p className="text-sm text-gray-600">Branches in TN</p>
                </Card>
                <Card className="text-center mt-8">
                  <p className="text-4xl font-bold text-green-600 mb-2">100+</p>
                  <p className="text-sm text-gray-600">Expert Faculty</p>
                </Card>
              </div>
            </div>
          </div>
        </Section>

        <MatrixEducationRain />

        {/* Mission & Vision */}
        <Section background="light">
          <AnimatedBackground density="light" theme="mixed" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <Card className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full text-white mb-6">
                <FiTarget size={36} />
              </div>
              <h3 className="text-2xl font-bold text-[var(--dark)] mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide world-class coaching and comprehensive guidance that empowers students 
                to achieve their goals in TNPSC examinations. We aim to nurture not just 
                successful candidates, but responsible government servants who will serve Tamil Nadu 
                with integrity and dedication.
              </p>
            </Card>

            <Card className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[var(--secondary)] to-[var(--accent)] rounded-full text-white mb-6">
                <FiEye size={36} />
              </div>
              <h3 className="text-2xl font-bold text-[var(--dark)] mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted and preferred destination for TNPSC preparation 
                in Tamil Nadu. We envision creating a community of successful professionals who contribute 
                meaningfully to society and inspire future generations to pursue excellence in 
                public service through TNPSC.
              </p>
            </Card>
          </div>
        </Section>

        {/* Our Values */}
        <Section background="white">
          <SectionHeader
            subtitle="Core Values"
            title="What We Stand For"
            description="Our values guide everything we do and shape our approach to education"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center" hover={true}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full text-[var(--primary)] mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-[var(--dark)] mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* Journey Timeline */}
        <Section background="light">
          <SectionHeader
            title="Our Journey"
            description="Key milestones in our path to becoming Tamil Nadu's leading TNPSC coaching institute"
          />
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[var(--primary)] hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <Card hover={true}>
                      <div className="text-3xl font-bold text-[var(--primary)] mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="text-xl font-bold text-[var(--dark)] mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </Card>
                  </div>
                  
                  <div className="hidden lg:block w-6 h-6 bg-[var(--primary)] rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <CubeTunnel />

        {/* Leadership Team */}
        <Section background="white">
          <SectionHeader
            subtitle="Meet Our Team"
            title="Expert Leadership"
            description="Led by experienced educators and TNPSC experts"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center" hover={true}>
                <div className="w-24 h-24 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h4 className="text-lg font-bold text-[var(--dark)] mb-1">{member.name}</h4>
                <p className="text-[var(--primary)] font-semibold text-sm mb-2">
                  {member.designation}
                </p>
                <p className="text-gray-600 text-sm">{member.expertise}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--color-blue-900)] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join us and become part of a legacy of excellence. Let&apos;s work together to 
              achieve your dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/admission" className="btn btn-secondary">
                Apply for Admission
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
