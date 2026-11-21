'use client';

import React, { Suspense } from 'react';
import { useParams } from 'next/navigation';
import { Header, FooterNew } from '@/components/layout';
import { Button, Section, Card } from '@/components/ui';
import { courses } from '@/data/courses';
import { FiClock, FiBarChart, FiCheckCircle, FiArrowLeft, FiPhone, FiMail } from 'react-icons/fi';
import Link from 'next/link';

function CourseContent() {
  const params = useParams();
  const courseId = params?.id as string;
  
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <>
        <Header />
        <main className="flex-1">
          <Section>
            <div className="text-center py-20">
              <h1 className="text-3xl font-bold text-[var(--dark)] mb-4">Course Not Found</h1>
              <p className="text-gray-600 mb-8">The course you&apos;re looking for doesn&apos;t exist.</p>
              <Link href="/courses" className="btn btn-primary">
                <FiArrowLeft className="mr-2" />
                Back to Courses
              </Link>
            </div>
          </Section>
        </main>
        <FooterNew />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Course Header */}
        <section className="bg-[var(--light)] py-12">
          <div className="container mx-auto px-4">
            <Link href="/courses" className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-red-900 mb-6 font-semibold">
              <FiArrowLeft />
              Back to Courses
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="inline-block bg-[var(--primary)] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {course.category}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-[var(--dark)] mb-4">
                  {course.title}
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                  {course.description}
                </p>
                
                <div className="flex flex-wrap gap-6 text-gray-700">
                  <div className="flex items-center gap-2">
                    <FiClock size={20} />
                    <span><strong>Duration:</strong> {course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiBarChart size={20} />
                    <span><strong>Level:</strong> {course.level}</span>
                  </div>
                </div>
              </div>

              {/* Sidebar - Price Card */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <div className="text-center mb-6">
                    <p className="text-gray-600 mb-2">Course Fee</p>
                    <p className="text-4xl font-bold text-[var(--primary)]">
                      ₹{course.price?.toLocaleString('en-IN')}
                    </p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <Button variant="primary" fullWidth href="/admission">
                      Enroll Now
                    </Button>
                    <Button variant="outline" fullWidth href="/contact">
                      Request Callback
                    </Button>
                  </div>

                  <div className="pt-6 border-t space-y-3">
                    <a href="tel:9003190030" className="flex items-center gap-3 text-gray-700 hover:text-[var(--primary)] transition">
                      <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                        <FiPhone size={18} />
                      </div>
                      <div className="text-left">
                        <p className="text-xs text-gray-500">Call Us</p>
                        <p className="font-semibold">90031 90030</p>
                      </div>
                    </a>
                    <a href="mailto:info@bloomsacademy.com" className="flex items-center gap-3 text-gray-700 hover:text-[var(--primary)] transition">
                      <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                        <FiMail size={18} />
                      </div>
                      <div className="text-left">
                        <p className="text-xs text-gray-500">Email Us</p>
                        <p className="font-semibold text-sm">info@bloomsacademy.com</p>
                      </div>
                    </a>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Course Details */}
        <Section background="white">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Course Features */}
              {course.features && course.features.length > 0 && (
                <Card>
                  <h2 className="text-2xl font-bold text-[var(--dark)] mb-6">
                    Course Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <FiCheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Course Overview */}
              <Card>
                <h2 className="text-2xl font-bold text-[var(--dark)] mb-6">
                  Course Overview
                </h2>
                <div className="prose pred-lg max-w-none text-gray-700">
                  <p>
                    This comprehensive course is designed to provide you with all the knowledge, 
                    skills, and strategies needed to excel in {course.category} examinations. 
                    Our expert faculty members bring years of experience and proven teaching methodologies 
                    to ensure your success.
                  </p>
                  
                  <h3 className="text-xl font-bold text-[var(--dark)] mt-6 mb-3">What You'll Learn</h3>
                  <ul className="space-y-2">
                    <li>Complete syllabus coverage with in-depth analysis</li>
                    <li>Exam-oriented approach with time management techniques</li>
                    <li>Regular assessments and performance tracking</li>
                    <li>Personalized attention and doubt clearing sessions</li>
                    <li>Current affairs and contemporary issues</li>
                    <li>Answer writing skills and presentation techniques</li>
                  </ul>

                  <h3 className="text-xl font-bold text-[var(--dark)] mt-6 mb-3">Who Should Enroll</h3>
                  <p>
                    This course is ideal for serious aspirants who are committed to achieving their 
                    goals in competitive examinations. Whether you&apos;re a fresher or someone with 
                    previous attempt experience, our structured program caters to all levels.
                  </p>
                </div>
              </Card>

              {/* Study Material */}
              <Card>
                <h2 className="text-2xl font-bold text-[var(--dark)] mb-6">
                  Study Material
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="text-[var(--primary)] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-[var(--dark)] mb-1">Comprehensive Notes</h4>
                      <p>Well-structured and updated study material covering entire syllabus</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="text-[var(--primary)] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-[var(--dark)] mb-1">Current Affairs Magazine</h4>
                      <p>Monthly magazine with important events and analysis</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="text-[var(--primary)] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-[var(--dark)] mb-1">Previous Year Papers</h4>
                      <p>Solved question papers with detailed explanations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="text-[var(--primary)] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-[var(--dark)] mb-1">Online Resources</h4>
                      <p>Access to digital library and online test platform</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="mb-8">
                <h3 className="text-xl font-bold text-[var(--dark)] mb-4">
                  Course Highlights
                </h3>
                <div className="space-y-4">
                  <div className="pb-4 border-b">
                    <p className="text-sm text-gray-600 mb-1">Category</p>
                    <p className="font-semibold text-[var(--dark)]">{course.category}</p>
                  </div>
                  <div className="pb-4 border-b">
                    <p className="text-sm text-gray-600 mb-1">Duration</p>
                    <p className="font-semibold text-[var(--dark)]">{course.duration}</p>
                  </div>
                  <div className="pb-4 border-b">
                    <p className="text-sm text-gray-600 mb-1">Level</p>
                    <p className="font-semibold text-[var(--dark)]">{course.level}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Mode</p>
                    <p className="font-semibold text-[var(--dark)]">Classroom + Online</p>
                  </div>
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-[var(--dark)] mb-4">
                  Need Help?
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Have questions about this course? Our counselors are here to help you.
                </p>
                <Button variant="primary" fullWidth href="/contact">
                  Contact Counselor
                </Button>
              </Card>
            </div>
          </div>
        </Section>

        {/* Related Courses CTA */}
        <section className="bg-[var(--light)] py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[var(--dark)] mb-4">
              Explore More Courses
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Check out our other courses designed to help you achieve your goals
            </p>
            <Link href="/courses" className="btn btn-primary">
              View All Courses
            </Link>
          </div>
        </section>
      </main>
      <FooterNew />
    </>
  );
}

export default function CourseDetailPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-700 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading course...</p>
        </div>
      </div>
    }>
      <CourseContent />
    </Suspense>
  );
}
