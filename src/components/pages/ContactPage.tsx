"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin, Instagram } from "lucide-react";
import { SITE_OFFICE_ADDRESS_LINES, siteSeo } from "@/lib/seo/config";

export function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    programInterest: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setSubmitError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setFormSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        programInterest: "",
        message: "",
      });
      window.setTimeout(() => setFormSubmitted(false), 8000);
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-200 sm:text-xl">
              Ready to transform your organization's mental health approach? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-indigo-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href={`mailto:${siteSeo.email}`}
                      className="break-all text-gray-600 hover:text-indigo-600"
                    >
                      {siteSeo.email}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href={`tel:${siteSeo.phone}`} className="text-gray-600 hover:text-indigo-600">
                      {siteSeo.phoneDisplay}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am-6pm IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                    <p className="text-sm font-medium text-gray-800">{siteSeo.legalName}</p>
                    <address className="mt-1 not-italic text-gray-600">
                      {SITE_OFFICE_ADDRESS_LINES.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                    <p className="mt-2 text-sm text-gray-500">Serving organizations nationwide</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Linkedin className="text-sky-700" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">LinkedIn</h3>
                    <a
                      href={siteSeo.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all text-gray-600 hover:text-indigo-600"
                    >
                      {siteSeo.linkedinUrl}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Instagram className="text-pink-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Instagram</h3>
                    <a
                      href={siteSeo.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all text-gray-600 hover:text-indigo-600"
                    >
                      {siteSeo.instagramUrl}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  What to Expect
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Initial consultation call within 48 hours</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Customized program proposal</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Transparent pricing information</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>No obligation to proceed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Request Information or Pricing
                </h2>

                {formSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="text-green-600" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      We&apos;ve received your message. A confirmation has been sent to your email, and our team will
                      get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {submitError && (
                      <div
                        className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                        role="alert"
                      >
                        {submitError}
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                          Organization Name
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="programInterest" className="block text-sm font-medium text-gray-700 mb-2">
                        Program Interest *
                      </label>
                      <select
                        id="programInterest"
                        name="programInterest"
                        required
                        value={formData.programInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      >
                        <option value="">Select a program</option>
                        <option value="corporate-engage">Corporate: Mindfulcrum Engage (3 months)</option>
                        <option value="corporate-transform">Corporate: Mindfulcrum Transform (6 months)</option>
                        <option value="corporate-elevate">Corporate: Mindfulcrum Elevate (12 months)</option>
                        <option value="leadership-audit">Leadership Psychological Audit</option>
                        <option value="school-campuswell">School: CampusWell Program</option>
                        <option value="school-parent">School: Parent Intelligence Program</option>
                        <option value="individual-therapy">Individual/Family Therapy</option>
                        <option value="not-sure">Not sure yet / General inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Tell us about your needs, team size, or any specific questions..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center justify-center space-x-2 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <span>{isSubmitting ? "Sending…" : "Send Message"}</span>
                      {!isSubmitting && <Send size={18} />}
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you agree to our privacy policy
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How long does it take to get started?
              </h3>
              <p className="text-gray-600">
                After your initial inquiry, we'll schedule a consultation within 48 hours. Most programs can begin within 2-3 weeks of signing an agreement.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What does pricing depend on?
              </h3>
              <p className="text-gray-600">
                Pricing varies based on program type, duration, organization size, and specific customization needs. We provide transparent quotes after understanding your requirements.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you work with organizations outside Bangalore?
              </h3>
              <p className="text-gray-600">
                Yes! We serve organizations across India. For on-site programs, travel arrangements are included in the program fee.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is participant information kept confidential?
              </h3>
              <p className="text-gray-600">
                Absolutely. All individual assessments and therapy sessions are completely confidential. Organizational reports contain only aggregated, anonymized data.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can we customize a program?
              </h3>
              <p className="text-gray-600">
                Yes, all our programs are customizable. We'll work with you to design something that fits your organization's specific culture and goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}