// app/about/page.js
"use client";
import Header from '../user/components/header'
import React, { useEffect, useRef } from 'react';
import { Users, Target, Award, Heart, MapPin, ChevronDown, MessageCircle, ChevronRight, ArrowRight, Clock } from 'lucide-react';

// WhatsApp from .env with fallback
const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER || '+971556166465';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(
    'Hello Future Fix Team, I would like to know more about your company and vision.'
)}`;

export default function AboutUsPage() {
    const sectionRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-12');
                    }
                });
            },
            { threshold: 0.15 }
        );

        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Inter font — clean, modern, professional (matches your logo typography) */}
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
                rel="stylesheet"
            />
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

                {/* Hero Section */}

                <section className="min-h-[80vh] flex items-center overflow-hidden bg-white pt-20 relative">
                    {/* Subtle light grid – adjusted opacity & color for white bg */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <svg className="w-full h-full">
                            <defs>
                                <pattern id="about-grid-light" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                                    <path d="M0,30 L60,30 M30,0 L30,60" stroke="#0B1F3B" strokeWidth="1" fill="none" opacity="0.4" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#about-grid-light)" />
                        </svg>
                    </div>

                    {/* Soft teal glow – kept but reduced opacity for clean white bg */}
                    <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00B4D8]/6 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />

                    <div className="container mx-auto px-6 py-20 relative z-10">
                        <div className="max-w-5xl mx-auto text-center space-y-10">
                            {/* Original tag – adjusted colors for white bg */}
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#0B1F3B]/5 border border-[#0B1F3B]/10 rounded-full text-lg font-semibold text-[#0B1F3B]">
                                <Users className="w-6 h-6 text-[#00B4D8]" />
                                Who We Are
                            </div>

                            {/* Original headline – kept exactly as you had */}
                            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-[#0B1F3B]">
                                Future Fix
                                <br />
                                <span className="bg-gradient-to-r from-[#00B4D8] to-[#0096C7] bg-clip-text text-transparent">
                                    Repair Before You Replace
                                </span>
                            </h1>

                            {/* Original paragraph – kept exactly */}
                            <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
                                We exist to change how Dubai thinks about broken devices — turning "it's dead" into "it's fixed" through precision engineering, trust, and time-saving service.
                            </p>

                            {/* Original CTA – kept exactly */}
                            <div className="flex flex-wrap justify-center gap-6 mt-12">
                                <a
                                    href={WHATSAPP_LINK}
                                    className="group inline-flex items-center gap-3 px-10 py-5 bg-[#00B4D8] hover:bg-[#0096C7] text-white font-bold text-lg rounded-2xl shadow-xl shadow-[#00B4D8]/40 hover:shadow-2xl hover:shadow-[#00B4D8]/50 transition-all hover:-translate-y-1"
                                >
                                    <MessageCircle className="w-7 h-7" />
                                    Talk to the Team
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Original scroll indicator – adjusted color for white bg */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 animate-bounce">
                        <span className="text-sm font-medium">Discover Our Story</span>
                        <ChevronRight className="w-6 h-6 rotate-90" />
                    </div>
                </section>

                {/* Our Mission & Vision */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                            <div
                                ref={(el) => (sectionRefs.current[0] = el)}
                                className="opacity-0 translate-y-12 transition-all duration-700 ease-out"
                            >
                                <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0B1F3B] mb-8">
                                    Our Mission
                                </h2>
                                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                    To help individuals and businesses in Dubai keep their devices working longer — saving money, reducing waste, and eliminating unnecessary replacements through expert chip-level repair and intelligent support.
                                </p>
                                <p className="text-lg text-gray-600">
                                    We believe most "dead" laptops and mobiles are just undiagnosed — and with the right skills and tools, they can be brought back to full performance.
                                </p>
                            </div>

                            <div
                                ref={(el) => (sectionRefs.current[1] = el)}
                                className="opacity-0 translate-y-12 transition-all duration-700 ease-out"
                                style={{ transitionDelay: '150ms' }}
                            >
                                <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0B1F3B] mb-8">
                                    Our Vision
                                </h2>
                                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                    To become Dubai's most trusted name in device repair — known for precision, transparency, speed, and a genuine repair-first mindset that puts device longevity above quick sales.
                                </p>
                                <p className="text-lg text-gray-600">
                                    A future where businesses and people choose repair over replacement — saving time, money, and resources while keeping technology performing at its best.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why We Exist */}
                <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0B1F3B] mb-6">
                                Why Future Fix Exists
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Too many devices are thrown away when they could be saved. Too much time is lost traveling for repairs. We exist to fix that.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Target,
                                    title: 'Repair-First Mindset',
                                    description:
                                        'We diagnose deeply and repair precisely — only replacing parts when absolutely necessary. Saving devices is our priority.',
                                },
                                {
                                    icon: Clock,
                                    title: 'Time Is Money',
                                    description:
                                        'In Dubai, downtime costs businesses dearly. We minimize disruption with efficient logistics and fast, reliable service.',
                                },
                                {
                                    icon: Heart,
                                    title: 'Built on Trust',
                                    description:
                                        'Transparency, honesty, and quality are non-negotiable. Every repair comes with clear explanations and real care.',
                                },
                            ].map((point, index) => (
                                <div
                                    key={point.title}
                                    ref={(el) => (sectionRefs.current[index + 2] = el)}
                                    className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#00B4D8] hover:shadow-xl transition-all opacity-0 translate-y-12"
                                    style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                                >
                                    <div className="w-16 h-16 bg-[#00B4D8]/10 rounded-xl flex items-center justify-center mb-6">
                                        <point.icon className="w-8 h-8 text-[#00B4D8]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#0B1F3B] mb-4">{point.title}</h3>
                                    <p className="text-gray-700 leading-relaxed">{point.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="relative py-24 bg-gradient-to-br from-[#0B1F3B] via-[#1a3a5c] to-[#0B1F3B] overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: 'radial-gradient(circle, rgba(0, 180, 216, 0.2) 1px, transparent 1px)',
                                backgroundSize: '40px 40px',
                            }}
                        />
                    </div>

                    <div className="container mx-auto px-6 text-center relative z-10">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
                            Ready to Work with a Team That Cares?
                        </h2>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-12">
                            We’re more than a repair shop — we’re your partner in keeping technology alive longer.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            <a
                                href={WHATSAPP_LINK}
                                className="group inline-flex items-center gap-4 px-12 py-6 bg-[#00B4D8] hover:bg-[#0096C7] text-white font-bold text-xl rounded-3xl shadow-2xl shadow-[#00B4D8]/40 hover:shadow-3xl hover:shadow-[#00B4D8]/50 transition-all hover:-translate-y-2"
                            >
                                <MessageCircle className="w-9 h-9" />
                                Talk to the Future Fix Team
                                <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                            </a>
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
                                    Dubai-based repair specialists focused on precision, trust, and extending device life — because repair is smarter than replace.
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
                                        <a href="/contact" className="hover:text-[#00B4D8] transition-colors">
                                            Contact
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
                            <p>© 2025 Future Fix. All rights reserved. Repair Before You Replace.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}