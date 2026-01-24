// app/services/page.js
"use client";
import Header from '../user/components/header'
import React, { useEffect, useRef } from 'react';
import {
    Cpu,
    CircuitBoard,
    HardDrive,
    Settings,
    Shield,
    Activity,
    Laptop,
    BarChart3,
    Users,
    TrendingUp,
    ArrowRight,
    MessageCircle,
    MapPin,
    ChevronRight,
} from 'lucide-react';

// WhatsApp from .env with fallback
const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER || '+971556166465';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(
    'Hello, I would like detailed information about your laptop repair services.'
)}`;

export default function ServicesPage() {
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

    const laptopServices = [
        {
            icon: CircuitBoard,
            title: 'Chip-Level Motherboard Repair',
            description:
                'Specialized micro-soldering and component-level repair for complex motherboard failures — power management ICs, GPU modules, RAM controllers, charging circuits, PCH, embedded controllers, and more. We recover laptops others consider beyond repair.',
            tags: ['Micro-Soldering', 'IC Reballing', 'Circuit Tracing', 'Voltage Regulation Repair', 'BGA Rework'],
        },
        {
            icon: HardDrive,
            title: 'Hardware Replacement & Upgrades',
            description:
                'Expert replacement and upgrade of SSDs (SATA/NVMe), RAM modules, batteries, displays (LCD/LED/OLED), keyboards, trackpads, DC jacks, cooling fans/heatsinks, and other critical components using high-quality compatible or original parts.',
            tags: ['SSD / NVMe Upgrade', 'RAM Expansion', 'Battery Replacement', 'Screen Repair', 'Keyboard / Trackpad Service'],
        },
        {
            icon: Settings,
            title: 'Software & Operating System Services',
            description:
                'Clean Windows/macOS installation, driver configuration, performance tuning, virus/malware removal, system stabilization, data backup & transfer, BIOS/UEFI updates, and activation troubleshooting.',
            tags: ['OS Installation', 'Driver Optimization', 'Malware Removal', 'Performance Tuning', 'Data Migration'],
        },
        {
            icon: Activity,
            title: 'Advanced Laptop Diagnostics',
            description:
                'Professional-grade hardware and software diagnostics using specialized tools — thermal imaging, power rail analysis, signal integrity testing, stress benchmarking, voltage monitoring, and component health verification.',
            tags: ['Thermal Imaging', 'Power Delivery Testing', 'Signal Integrity', 'Stress Testing', 'Hardware Health Scan'],
        },
        {
            icon: Shield,
            title: 'Business & Enterprise Laptop Support',
            description:
                'Structured fleet servicing, preventive maintenance programs, bulk diagnostics, rapid-turnaround repairs, detailed reporting, and dedicated support contracts for offices, SMEs, and corporate environments.',
            tags: ['Fleet Servicing', 'Preventive Maintenance', 'Corporate Contracts', 'IT Support', 'Bulk Repair Coordination'],
        },
        {
            icon: TrendingUp,
            title: 'Performance & Thermal Optimization',
            description:
                'Hardware upgrades, thermal paste/fan/heatsink service, system cleanup, power efficiency tuning, overclocking safety checks (where applicable), and configuration advice to maximize laptop performance and extend lifespan.',
            tags: ['Speed Enhancement', 'Thermal Management', 'System Cleanup', 'Upgrade Consulting', 'Battery Health Optimization'],
        },
    ];

    return (
        <>
            {/* Inter font — clean, modern, professional (matches your logo style) */}
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

                {/* Hero Section */}
                <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0B1F3B] via-[#1a3a5c] to-[#0B1F3B] pt-20">
                    <div className="absolute inset-0 opacity-5">
                        <svg className="w-full h-full">
                            <defs>
                                <pattern id="services-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                                    <path d="M0,30 L60,30 M30,0 L30,60" stroke="#00B4D8" strokeWidth="1" fill="none" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#services-grid)" />
                        </svg>
                    </div>

                    <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00B4D8]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />

                    <div className="container mx-auto px-6 py-20 relative z-10">
                        <div className="max-w-5xl mx-auto text-center space-y-10">
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg font-semibold text-white">
                                <Laptop className="w-6 h-6 text-[#00B4D8]" />
                                Professional Laptop Services
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white">
                                Laptop Repair & Optimization
                                <br />
                                <span className="bg-gradient-to-r from-[#00B4D8] to-[#0096C7] bg-clip-text text-transparent">
                                    Built for Performance & Longevity
                                </span>
                            </h1>

                            <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-medium">
                                Specialized chip-level repair, hardware upgrades, software optimization, and enterprise-grade support — designed to restore, enhance, and extend the life of your laptop.
                            </p>

                            <div className="flex flex-wrap justify-center gap-6 mt-12">
                                <a
                                    href={WHATSAPP_LINK}
                                    className="group inline-flex items-center gap-3 px-10 py-5 bg-[#00B4D8] hover:bg-[#0096C7] text-white font-bold text-lg rounded-2xl shadow-xl shadow-[#00B4D8]/40 hover:shadow-2xl hover:shadow-[#00B4D8]/50 transition-all hover:-translate-y-1"
                                >
                                    <MessageCircle className="w-7 h-7" />
                                    Get Expert Laptop Advice
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 animate-bounce">
                        <span className="text-sm font-medium">Explore Laptop Services</span>
                        <ChevronRight className="w-6 h-6 rotate-90" />
                    </div>
                </section>

                {/* Detailed Laptop Services */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-6xl font-extrabold text-[#0B1F3B] mb-6">
                                Our Laptop Services
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Precision repair, optimization, and support solutions built for professionals, businesses, and performance-driven users in Dubai.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {laptopServices.map((service, index) => (
                                <div
                                    key={service.title}
                                    ref={(el) => (sectionRefs.current[index] = el)}
                                    className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-[#00B4D8] hover:shadow-2xl transition-all duration-500 opacity-0 translate-y-12"
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <div className="flex items-start gap-5 mb-6">
                                        <div className="w-16 h-16 bg-[#00B4D8]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#00B4D8]/20 group-hover:scale-110 transition-all">
                                            <service.icon className="w-8 h-8 text-[#00B4D8]" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-[#0B1F3B] mb-3 group-hover:text-[#00B4D8] transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed mb-5">{service.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {service.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
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
                        <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-8">
                            Need Expert Laptop Repair?
                        </h2>
                        <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto mb-12">
                            From chip-level fixes to full performance restoration — our team delivers precise, reliable solutions tailored to your device.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            <a
                                href={WHATSAPP_LINK}
                                className="group inline-flex items-center gap-4 px-12 py-6 bg-[#00B4D8] hover:bg-[#0096C7] text-white font-bold text-xl rounded-3xl shadow-2xl shadow-[#00B4D8]/40 hover:shadow-3xl hover:shadow-[#00B4D8]/50 transition-all hover:-translate-y-2 transform"
                            >
                                <MessageCircle className="w-9 h-9" />
                                Talk to Laptop Repair Experts
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
                                    Professional laptop repair and IT services in Dubai — extending device life through precision engineering.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Laptop Services</h4>
                                <ul className="space-y-3 text-gray-400">
                                    <li>Chip-Level Motherboard Repair</li>
                                    <li>Hardware Replacement & Upgrades</li>
                                    <li>Software & OS Services</li>
                                    <li>Advanced Diagnostics</li>
                                    <li>Business Laptop Support</li>
                                    <li>Performance Optimization</li>
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
                            <p>© 2025 Future Fix. All rights reserved. Professional Laptop Services in Dubai.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}