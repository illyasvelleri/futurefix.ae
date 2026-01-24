// app/contact/page.js
"use client";
import Header from '../user/components/header'

import React, { useState } from 'react';
import { MapPin, MessageCircle, Phone, Mail, Send, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

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

    // WhatsApp from .env with fallback
    const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER || '+971556166465';
    const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(
        'Hello Future Fix Team, I would like to get in touch regarding:'
    )}`;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        // Simple client-side validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus({
                type: 'error',
                message: 'Please fill in all required fields.',
            });
            setIsSubmitting(false);
            return;
        }

        // Here you would normally send to backend / API route
        // For demo: simulate success after 1.2s
        setTimeout(() => {
            setStatus({
                type: 'success',
                message: 'Thank you! Your message has been sent. We will get back to you soon.',
            });
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            });
            setIsSubmitting(false);
        }, 1200);
    };

    return (
        <>
            {/* Inter font — consistent with brand logo style */}
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
                rel="stylesheet"
            />
            <Header />
            <div className="min-h-screen bg-white font-['Inter'] relative">
                {/* Floating WhatsApp Chat Bubble */}
                <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-8 right-8 z-50 group"
                    aria-label="Chat on WhatsApp"
                >
                    <div className="relative">
                        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#00B4D8] flex items-center justify-center shadow-2xl shadow-[#00B4D8]/40 group-hover:scale-110 transition-transform duration-300">
                            <MessageCircle className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                        </div>
                        <div className="absolute inset-0 rounded-full border-4 border-[#00B4D8]/30 animate-ping" />
                        <div className="absolute -top-2 -right-2 bg-[#0B1F3B] text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                            Chat
                        </div>
                    </div>
                </a>

                {/* Hero / Contact Banner */}
                <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0B1F3B] via-[#1a3a5c] to-[#0B1F3B] pt-20">
                    <div className="absolute inset-0 opacity-5">
                        <svg className="w-full h-full">
                            <defs>
                                <pattern id="contact-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                                    <path d="M0,30 L60,30 M30,0 L30,60" stroke="#00B4D8" strokeWidth="1" fill="none" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#contact-grid)" />
                        </svg>
                    </div>

                    <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00B4D8]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />

                    <div className="container mx-auto px-6 py-20 relative z-10">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg font-semibold text-white">
                                <MessageCircle className="w-6 h-6 text-[#00B4D8]" />
                                Get in Touch
                            </div>

                            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
                                Contact Future Fix
                                <br />
                                <span className="bg-gradient-to-r from-[#00B4D8] to-[#0096C7] bg-clip-text text-transparent">
                                    We're Here to Help
                                </span>
                            </h1>

                            <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                                Have questions about laptop repair, chip-level service, or business support? Reach out — our team responds quickly.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Contact Content */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            {/* Left: Contact Info & WhatsApp */}
                            <div className="space-y-10">
                                <div>
                                    <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3B] mb-6">
                                        Let's Connect
                                    </h2>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                        Whether you're an individual needing urgent laptop repair or a business looking for fleet support, we're ready to assist.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-5">
                                        <div className="w-14 h-14 bg-[#00B4D8]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <MessageCircle className="w-7 h-7 text-[#00B4D8]" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#0B1F3B] mb-1">WhatsApp (Fastest Response)</h3>
                                            <a
                                                href={WHATSAPP_LINK}
                                                className="text-[#00B4D8] hover:text-[#0096C7] font-semibold text-lg transition-colors"
                                            >
                                                {WHATSAPP_NUMBER}
                                            </a>
                                            <p className="text-gray-600 text-sm mt-1">Messages replied within minutes during business hours</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5">
                                        <div className="w-14 h-14 bg-[#00B4D8]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-7 h-7 text-[#00B4D8]" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#0B1F3B] mb-1">Phone</h3>
                                            <a
                                                href={`tel:${WHATSAPP_NUMBER}`}
                                                className="text-[#00B4D8] hover:text-[#0096C7] font-semibold text-lg transition-colors"
                                            >
                                                {WHATSAPP_NUMBER}
                                            </a>
                                            <p className="text-gray-600 text-sm mt-1">Available during business hours</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5">
                                        <div className="w-14 h-14 bg-[#00B4D8]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-7 h-7 text-[#00B4D8]" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#0B1F3B] mb-1">Location</h3>
                                            <p className="text-gray-700 font-medium">NAIF, Deira, Dubai</p>
                                            <p className="text-gray-600 text-sm">United Arab Emirates – Pin: 46701</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick CTA Cards */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                                    <a
                                        href={WHATSAPP_LINK}
                                        className="group p-6 bg-gradient-to-br from-[#00B4D8]/5 to-[#0096C7]/5 rounded-2xl border border-[#00B4D8]/20 hover:border-[#00B4D8] hover:shadow-xl transition-all"
                                    >
                                        <div className="flex items-center gap-4 mb-4">
                                            <MessageCircle className="w-8 h-8 text-[#00B4D8]" />
                                            <h4 className="text-xl font-bold text-[#0B1F3B]">Message on WhatsApp</h4>
                                        </div>
                                        <p className="text-gray-600 mb-4">Fastest way to get help — send photos of your device for quick assessment.</p>
                                        <span className="inline-flex items-center gap-2 text-[#00B4D8] font-semibold group-hover:text-[#0096C7]">
                                            Start Chat <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </a>

                                    <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
                                        <div className="flex items-center gap-4 mb-4">
                                            <Phone className="w-8 h-8 text-[#00B4D8]" />
                                            <h4 className="text-xl font-bold text-[#0B1F3B]">Call Us</h4>
                                        </div>
                                        <p className="text-gray-600 mb-4">Speak directly with a technician for immediate guidance.</p>
                                        <a
                                            href={`tel:${WHATSAPP_NUMBER}`}
                                            className="inline-flex items-center gap-2 text-[#00B4D8] font-semibold hover:text-[#0096C7]"
                                        >
                                            {WHATSAPP_NUMBER} <ArrowRight className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Contact Form */}
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-10">
                                <h2 className="text-3xl font-bold text-[#0B1F3B] mb-8">Send Us a Message</h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 outline-none transition-all"
                                                placeholder="Your name"
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
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 outline-none transition-all"
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
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 outline-none transition-all"
                                            placeholder="+971 55 616 6465"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 outline-none transition-all"
                                            placeholder="e.g. MacBook Pro logic board issue"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Your Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 outline-none transition-all resize-none"
                                            placeholder="Describe your device issue, model, symptoms, or any questions..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#00B4D8] hover:bg-[#0096C7] text-white font-bold text-lg rounded-xl shadow-lg shadow-[#00B4D8]/30 hover:shadow-xl transition-all hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed ${isSubmitting ? 'cursor-wait' : ''
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <>Sending...</>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>

                                    {status.message && (
                                        <div
                                            className={`mt-4 p-4 rounded-xl flex items-center gap-3 ${status.type === 'success'
                                                ? 'bg-green-50 text-green-800 border border-green-200'
                                                : 'bg-red-50 text-red-800 border border-red-200'
                                                }`}
                                        >
                                            {status.type === 'success' ? (
                                                <CheckCircle2 className="w-6 h-6 text-green-600" />
                                            ) : (
                                                <AlertCircle className="w-6 h-6 text-red-600" />
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
                <footer className="py-16 bg-[#0B1F3B] border-t border-white/10">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-3 gap-10">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Future Fix</h3>
                                <p className="text-gray-400 mb-6">
                                    Professional laptop repair and IT services in Dubai — extending device life through precision engineering.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                                <ul className="space-y-3 text-gray-400">
                                    <li>
                                        <a href="/" className="hover:text-[#00B4D8] transition-colors">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/services" className="hover:text-[#00B4D8] transition-colors">
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/how-it-works" className="hover:text-[#00B4D8] transition-colors">
                                            How It Works
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/about" className="hover:text-[#00B4D8] transition-colors">
                                            About
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                                <ul className="space-y-3 text-gray-400">
                                    <li className="flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-[#00B4D8]" />
                                        <span>NAIF, Deira, Dubai - Pin: 46701</span>
                                    </li>
                                    <li>
                                        <a
                                            href={WHATSAPP_LINK}
                                            className="hover:text-[#00B4D8] transition-colors flex items-center gap-2"
                                        >
                                            <MessageCircle className="w-5 h-5" />
                                            {WHATSAPP_NUMBER}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
                            <p>© 2025 Future Fix. All rights reserved. Professional Repair Services in Dubai.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}