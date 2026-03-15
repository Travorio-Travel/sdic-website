'use client';

import { useState } from 'react';
import { PageHero } from '@/components/shared/PageHero';
import { Container } from '@/components/ui/Container';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';
import { Button } from '@/components/ui/Button';
import { Mail, MapPin, CheckCircle } from 'lucide-react';
import type { InquiryType } from '@/types';

const inquiryTypes: { value: InquiryType; label: string }[] = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'partnership', label: 'Partnership Discussion' },
  { value: 'government', label: 'Government Engagement' },
  { value: 'investment', label: 'Investment Interest' },
  { value: 'media', label: 'Media & Press' },
  { value: 'diaspora', label: 'Diaspora Collaboration' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production, this would send to an API endpoint
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        overline="Contact"
        title="Start a Conversation"
        subtitle="Whether you represent a government ministry, development organization, technology company, or the Sudanese diaspora — we are ready to discuss how technology can serve Sudan's future."
      />

      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-3">
            {/* Contact Info */}
            <ScrollAnimation className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl text-gray-800">Get in Touch</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  We welcome inquiries from potential partners, government stakeholders,
                  investors, and Sudanese professionals interested in contributing to
                  Sudan&apos;s digital transformation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-teal/10 text-teal">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Email</p>
                    <p className="text-sm text-gray-500">contact@sdic.sd</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-teal/10 text-teal">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Location</p>
                    <p className="text-sm text-gray-500">Khartoum, Sudan</p>
                  </div>
                </div>
              </div>

              {/* Strategic Briefing CTA */}
              <div className="rounded-2xl border border-teal/20 bg-teal/5 p-6">
                <h3 className="text-sm font-semibold text-gray-800">
                  Request Strategic Briefing
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">
                  For government leaders and senior stakeholders, we offer a
                  comprehensive strategic briefing on SDIC&apos;s vision, capabilities,
                  and proposed engagement framework.
                </p>
                <p className="mt-3 text-xs text-teal-dark">
                  Select &ldquo;Government Engagement&rdquo; or &ldquo;Partnership
                  Discussion&rdquo; in the form to request a briefing.
                </p>
              </div>
            </ScrollAnimation>

            {/* Contact Form */}
            <ScrollAnimation delay={200} className="lg:col-span-2">
              {submitted ? (
                <div className="flex min-h-[500px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-off-white p-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green/10">
                    <CheckCircle className="h-8 w-8 text-green" />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl text-gray-800">
                    Inquiry Received
                  </h3>
                  <p className="mt-3 max-w-md text-sm text-gray-500">
                    Thank you for your interest in SDIC. Our team will review your
                    inquiry and respond within 48 business hours.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="ghost"
                    className="mt-6"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-gray-200 bg-off-white p-8 lg:p-10"
                >
                  <h3 className="mb-8 font-serif text-xl text-gray-800">
                    Partnership & Inquiry Form
                  </h3>

                  <div className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-xs font-medium text-gray-600"
                        >
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 transition-colors focus:border-teal focus:ring-1 focus:ring-teal focus:outline-none"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-xs font-medium text-gray-600"
                        >
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 transition-colors focus:border-teal focus:ring-1 focus:ring-teal focus:outline-none"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="organization"
                          className="mb-2 block text-xs font-medium text-gray-600"
                        >
                          Organization
                        </label>
                        <input
                          id="organization"
                          name="organization"
                          type="text"
                          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 transition-colors focus:border-teal focus:ring-1 focus:ring-teal focus:outline-none"
                          placeholder="Your organization"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="role"
                          className="mb-2 block text-xs font-medium text-gray-600"
                        >
                          Role / Title
                        </label>
                        <input
                          id="role"
                          name="role"
                          type="text"
                          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 transition-colors focus:border-teal focus:ring-1 focus:ring-teal focus:outline-none"
                          placeholder="Your role"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="inquiryType"
                        className="mb-2 block text-xs font-medium text-gray-600"
                      >
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        required
                        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 transition-colors focus:border-teal focus:ring-1 focus:ring-teal focus:outline-none"
                      >
                        <option value="">Select inquiry type</option>
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-xs font-medium text-gray-600"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 transition-colors focus:border-teal focus:ring-1 focus:ring-teal focus:outline-none"
                        placeholder="Tell us about your interest in working with SDIC..."
                      />
                    </div>

                    <div>
                      <Button type="submit" size="lg" className="w-full sm:w-auto">
                        Submit Inquiry
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </ScrollAnimation>
          </div>
        </Container>
      </section>
    </>
  );
}
