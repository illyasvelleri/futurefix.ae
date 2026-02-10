// app/contact/page.js
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  MessageCircle,
  Phone,
  Mail,
  Send,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';

// WhatsApp config
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+971556166465';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(
  'Hello Future Fix Team, I would like to get in touch regarding:'
)}`;

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

    // Simulate form submission (replace with real API call later)
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent. We’ll get back to you soon.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1400);
  };

  return (
    <div className="min-h-screen bg-[#0a0e17] text-gray-100 font-sans antialiased">
      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Chat with Future Fix on WhatsApp"
      >
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-cyan-600 flex items-center justify-center shadow-2xl shadow-cyan-900/50 group-hover:scale-110 transition-transform">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 bg-cyan-700 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
            Chat
          </div>
        </div>
      </a>

      {/* Hero / Banner */}
      <section className="relative pt-24 pb-32 md:pb-40 overflow-hidden">
        {/* Glow background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-600/20 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            <div className="inline-flex items-center gap-3 px-7 py-3.5 bg-cyan-950/50 border border-cyan-800/40 rounded-full text-lg font-semibold text-cyan-400">
              <MessageCircle className="w-6 h-6" />
              Contact Us
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              Get in Touch with
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Future Fix Team
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Questions about laptop repair, motherboard service, data recovery or business support?  
              We respond quickly — reach out anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Left: Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                  Let's Connect
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Whether it's urgent device repair or corporate fleet support — our team is here to help.
                </p>
              </div>

              <div className="space-y-8">
                {/* WhatsApp */}
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-cyan-950/60 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">WhatsApp (Fastest)</h3>
                    <a
                      href={WHATSAPP_LINK}
                      className="text-cyan-400 hover:text-cyan-300 font-semibold text-xl transition-colors"
                    >
                      {WHATSAPP_NUMBER}
                    </a>
                    <p className="text-gray-400 mt-1">Quick replies • Send photos for instant assessment</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-cyan-950/60 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Phone</h3>
                    <a
                      href={`tel:${WHATSAPP_NUMBER}`}
                      className="text-cyan-400 hover:text-cyan-300 font-semibold text-xl transition-colors"
                    >
                      {WHATSAPP_NUMBER}
                    </a>
                    <p className="text-gray-400 mt-1">Available during business hours</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-cyan-950/60 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Location</h3>
                    <p className="text-gray-300 font-medium">Naif, Deira, Dubai</p>
                    <p className="text-gray-400">United Arab Emirates</p>
                  </div>
                </div>
              </div>

              {/* Quick Action Cards */}
              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                <a
                  href={WHATSAPP_LINK}
                  className="group p-7 bg-gray-900/40 border border-gray-800 rounded-2xl hover:border-cyan-600/60 hover:shadow-xl hover:shadow-cyan-950/30 transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <MessageCircle className="w-8 h-8 text-cyan-400" />
                    <h4 className="text-xl font-bold text-white">Message on WhatsApp</h4>
                  </div>
                  <p className="text-gray-400 mb-4">Fastest way — send device photos for quick quote.</p>
                  <span className="inline-flex items-center gap-2 text-cyan-400 font-semibold group-hover:text-cyan-300">
                    Start Chat <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>

                <div className="p-7 bg-gray-900/40 border border-gray-800 rounded-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <Phone className="w-8 h-8 text-cyan-400" />
                    <h4 className="text-xl font-bold text-white">Call Us</h4>
                  </div>
                  <p className="text-gray-400 mb-4">Speak directly with a technician.</p>
                  <a
                    href={`tel:${WHATSAPP_NUMBER}`}
                    className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300"
                  >
                    {WHATSAPP_NUMBER} <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 lg:p-10 shadow-xl shadow-black/30">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-gray-950 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-900/30 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-gray-950 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-900/30 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-gray-950 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-900/30 outline-none transition-all"
                    placeholder="+971 55 616 6465"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-gray-950 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-900/30 outline-none transition-all"
                    placeholder="e.g. MacBook Pro motherboard issue"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 bg-gray-950 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-900/30 outline-none transition-all resize-none"
                    placeholder="Describe your device issue, model, symptoms, or any questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold text-lg rounded-xl shadow-xl shadow-cyan-900/30 hover:shadow-2xl hover:scale-[1.02] transition-all disabled:opacity-60 disabled:cursor-not-allowed ${
                    isSubmitting ? 'cursor-wait' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-6 h-6" />
                    </>
                  )}
                </button>

                {status.message && (
                  <div
                    className={`mt-4 p-5 rounded-xl flex items-center gap-4 border ${
                      status.type === 'success'
                        ? 'bg-green-950/40 border-green-800 text-green-300'
                        : 'bg-red-950/40 border-red-800 text-red-300'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle2 className="w-7 h-7 text-green-400" />
                    ) : (
                      <AlertCircle className="w-7 h-7 text-red-400" />
                    )}
                    <p>{status.message}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-5">Future Fix</h3>
            <p className="text-gray-400 leading-relaxed">
              Premium laptop repair, motherboard service, data recovery and hardware solutions in Dubai.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-cyan-400 transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-5">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-500 mt-1" />
                <span>Naif, Deira, Dubai, UAE</span>
              </li>
              <li>
                <a href={WHATSAPP_LINK} className="flex items-center gap-3 hover:text-cyan-400 transition">
                  <MessageCircle className="w-5 h-5 text-cyan-500" />
                  {WHATSAPP_NUMBER}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-gray-900 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Future Fix. All rights reserved.  
          <span className="mx-3">•</span>
          Repair Before You Replace
        </div>
      </footer>
    </div>
  );
}