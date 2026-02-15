'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// WhatsApp configuration
const WHATSAPP_NUMBER = '+971556166465';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(
  'Hello FutureFix, I would like to inquire about your laptop repair services.'
)}`;
const LOCATION_LINK = 'https://maps.app.goo.gl/BeWza9dc4jHkMg3A7';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields.',
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission (replace with real API call)
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Thank you for contacting us. We will respond to your inquiry within 24 hours.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans antialiased">
      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 group"
        aria-label="Contact FutureFix on WhatsApp"
      >
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-[#0ea5e9] flex items-center justify-center shadow-xl hover:shadow-2xl hover:bg-[#0284c7] transition-all">
            <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
        </div>
      </a>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0f9ff] via-white to-[#e0f2fe] opacity-50"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="text-xs lg:text-sm font-semibold tracking-wider text-[#0ea5e9] uppercase">
              Get In Touch
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-light leading-tight tracking-tight mb-8">
            Contact <span className="font-semibold">FutureFix</span>
            <br />
            <span className="text-[#0ea5e9]">Technical Team</span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
            Professional laptop repair consultation available via WhatsApp, phone, or in-person visit.
            Our technical team is ready to assist with your device repair needs.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left: Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">
                  Let's <span className="font-semibold">Connect</span>
                </h2>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  Whether you need technical consultation, repair services, or corporate support solutions,
                  our team is available to discuss your requirements.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-8">
                {/* WhatsApp */}
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-[#0ea5e9]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">WhatsApp (Recommended)</h3>
                    <a
                      href={WHATSAPP_LINK}
                      className="text-[#0ea5e9] hover:text-[#0284c7] font-medium text-lg transition-colors"
                    >
                      {WHATSAPP_NUMBER}
                    </a>
                    <p className="text-gray-600 font-light mt-2">
                      Fastest response • Send photos for quick assessment
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Phone</h3>
                    <a
                      href={`tel:${WHATSAPP_NUMBER}`}
                      className="text-[#0ea5e9] hover:text-[#0284c7] font-medium text-lg transition-colors"
                    >
                      {WHATSAPP_NUMBER}
                    </a>
                    <p className="text-gray-600 font-light mt-2">
                      Direct line during business hours
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Service Center</h3>
                    <a
                      href={LOCATION_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0ea5e9] hover:text-[#0284c7] font-medium transition-colors"
                    >
                      Naif, Deira, Dubai, UAE
                    </a>
                    <p className="text-gray-600 font-light mt-2">
                      Every Day: 11:00 AM – 11:00 PM
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Email</h3>
                    <a
                      href="mailto:info@futurefix.ae"
                      className="text-[#0ea5e9] hover:text-[#0284c7] font-medium transition-colors"
                    >
                      info@futurefix.ae
                    </a>
                    <p className="text-gray-600 font-light mt-2">
                      For detailed inquiries and documentation
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Action Cards */}
              <div className="grid sm:grid-cols-2 gap-6 pt-8">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] text-white p-6 rounded-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <h4 className="font-semibold">Quick Response</h4>
                  </div>
                  <p className="text-white/90 text-sm font-light">
                    Chat on WhatsApp for instant technical support
                  </p>
                </a>

                <a
                  href={LOCATION_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-[#0ea5e9] hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-6 h-6 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h4 className="font-semibold text-gray-900">Visit Location</h4>
                  </div>
                  <p className="text-gray-600 text-sm font-light">
                    Get directions to our service center
                  </p>
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 lg:p-10 shadow-lg">
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-2">
                Send <span className="font-semibold">Message</span>
              </h2>
              <p className="text-gray-600 font-light mb-8">
                Fill out the form below and we'll respond within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-[#0ea5e9]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 outline-none transition-all font-light"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-[#0ea5e9]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 outline-none transition-all font-light"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

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
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 outline-none transition-all font-light"
                    placeholder="+971 55 616 6465"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject <span className="text-[#0ea5e9]">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 outline-none transition-all font-light"
                    placeholder="e.g., MacBook Pro motherboard repair inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message <span className="text-[#0ea5e9]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 outline-none transition-all resize-none font-light"
                    placeholder="Please describe your device issue, model, symptoms, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#0ea5e9] text-white font-medium rounded-md shadow-lg shadow-[#0ea5e9]/20 hover:bg-[#0284c7] hover:shadow-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed ${isSubmitting ? 'cursor-wait' : ''
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>

                {status.message && (
                  <div
                    className={`mt-4 p-4 rounded-md flex items-start gap-3 ${status.type === 'success'
                        ? 'bg-green-50 border border-green-200 text-green-800'
                        : 'bg-red-50 border border-red-200 text-red-800'
                      }`}
                  >
                    {status.type === 'success' ? (
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    )}
                    <p className="text-sm font-light">{status.message}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs lg:text-sm font-semibold tracking-wider text-[#0ea5e9] uppercase">
              Visit Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight mt-4 mb-6">
              Our <span className="font-semibold">Location</span>
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
              Find us in Naif, Deira, Dubai. Our service center is easily accessible with nearby parking.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.7862934859825!2d55.31284687543063!3d25.27077097764758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDown%20Town!5e0!3m2!1sen!2sae!4v1709648000000!5m2!1sen!2sae"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>

          <div className="mt-8 text-center">
            <a
              href={LOCATION_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0ea5e9] text-white font-medium rounded-md hover:bg-[#0284c7] transition shadow-lg shadow-[#0ea5e9]/20"
            >
              Open in Google Maps
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#f0f9ff] to-white border border-gray-200 rounded-lg p-8">
            <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center">
              Business Hours
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-lg font-medium text-gray-900 mb-2">Every Day</div>
              <div className="text-2xl font-light text-[#0ea5e9]">11:00 AM – 11:00 PM</div>
            </div>
            <p className="text-center text-gray-600 font-light mt-6 text-sm">
              WhatsApp inquiries responded to 24/7 • Phone support during business hours
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}