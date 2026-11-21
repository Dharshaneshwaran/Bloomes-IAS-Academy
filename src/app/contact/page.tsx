'use client';

import React, { useState } from 'react';
import { Header, FooterNew } from '@/components/layout';
import { Section, Input, Textarea, Button, Card, AnimatedBackground } from '@/components/ui';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import { SITE_CONFIG } from '@/constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // TODO: Replace with actual API call
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for contacting us! We will get back to you soon.',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          course: '',
          message: '',
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit form. Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="relative bg-[var(--light)] py-20 overflow-hidden">
          <AnimatedBackground density="medium" theme="blue" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--dark)] mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-gray-700">
                Have questions? We&apos;re here to help! Get in touch with our team for 
                admission guidance, course information, or any other queries.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Section background="white">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <h2 className="text-2xl font-bold text-[var(--dark)] mb-6">
                  Send Us a Message
                </h2>
                
                {submitStatus.type && (
                  <div
                    className={`mb-6 p-4 rounded-lg ${
                      submitStatus.type === 'success'
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      type="text"
                      name="name"
                      label="Full Name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      type="email"
                      name="email"
                      label="Email Address"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      type="tel"
                      name="phone"
                      label="Phone Number"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    <div className="w-full">
                      <label className="block text-sm font-semibold text-[var(--dark)] mb-2">
                        Course Interested
                        <span className="text-[var(--secondary)] ml-1">*</span>
                      </label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary)] transition"
                      >
                        <option value="">Select a course</option>
                        <option value="TNPSC Group I">TNPSC Group I</option>
                        <option value="TNPSC Group II">TNPSC Group II</option>
                        <option value="TNPSC Group II-A">TNPSC Group II-A</option>
                        <option value="TNPSC Group IV">TNPSC Group IV</option>
                        <option value="VAO">VAO</option>
                        <option value="Test Series">Test Series</option>
                        <option value="Interview">Interview Guidance</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <Textarea
                    name="message"
                    label="Your Message"
                    placeholder="Tell us about your queries or requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    fullWidth
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <FiSend className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <h3 className="text-xl font-bold text-[var(--dark)] mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiPhone className="text-[var(--primary)]" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--dark)] mb-1">Phone</p>
                      <a
                        href={`tel:${SITE_CONFIG.phone}`}
                        className="text-gray-600 hover:text-[var(--primary)] transition"
                      >
                        {SITE_CONFIG.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiMail className="text-[var(--secondary)]" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--dark)] mb-1">Email</p>
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="text-gray-600 hover:text-[var(--primary)] transition"
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiMapPin className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--dark)] mb-1">Address</p>
                      <p className="text-gray-600">{SITE_CONFIG.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiClock className="text-[var(--accent)]" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--dark)] mb-1">Office Hours</p>
                      <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-red-700 to-red-900 text-white">
                <h3 className="text-xl font-bold mb-3">Need Immediate Help?</h3>
                <p className="mb-4 opacity-90">
                  Call us directly for quick assistance and admission guidance.
                </p>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="btn btn-secondary w-full"
                >
                  Call Now
                </a>
              </Card>
            </div>
          </div>
        </Section>

        {/* Map Section */}
        <Section background="light">
          <h2 className="text-3xl font-bold text-[var(--dark)] text-center mb-8">
            Visit Our Campus
          </h2>
          <div className="bg-gray-200 rounded-xl overflow-hidden h-96 flex items-center justify-center">
            <p className="text-gray-600">
              Map integration placeholder - Add Google Maps embed here
            </p>
          </div>
        </Section>

        {/* Branches Section */}
        <Section background="white">
          <h2 className="text-3xl font-bold text-[var(--dark)] text-center mb-4">
            Our Branches
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Visit any of our branches across Tamil Nadu for world-class TNPSC coaching facilities
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { city: 'Chennai', address: 'Main Branch, T. Nagar' },
              { city: 'Trichy', address: 'Thillai Nagar' },
              { city: 'Salem', address: 'Cherry Road' },
              { city: 'Madurai', address: 'Anna Nagar' },
              { city: 'Coimbatore', address: 'RS Puram' },
              { city: 'Namakkal', address: 'Main Road' },
              { city: 'Erode', address: 'Perundurai Road' },
              { city: 'Tirunelveli', address: 'Junction' },
              { city: 'Thanjavur', address: 'Gandhi Road' },
            ].map((branch, index) => (
              <Card key={index} hover={true}>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="text-[var(--primary)]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--dark)] mb-1">{branch.city}</h4>
                    <p className="text-sm text-gray-600">{branch.address}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      </main>
      <FooterNew />
    </>
  );
}
