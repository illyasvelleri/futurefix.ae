"use client";

import React, { useState, useEffect } from 'react';
import { Cpu, Zap, Shield, ArrowRight, CheckCircle2, TrendingUp, Clock, Users, Monitor, ChevronRight, MessageCircle, Phone, Settings, Layers, Activity, BarChart3, CircuitBoard, HardDrive, Battery, Laptop, Award, Target, BookOpen, ChevronDown, Menu, X } from 'lucide-react';
import Header from "../components/header";

export default function LaptopServicesPage() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    const menuItems = [
        { label: 'Services', anchor: '#laptop-core-services' },
        { label: 'Why Us', anchor: '#why-future-fix-laptop' },
        { label: 'Use Cases', anchor: '#laptop-use-cases' },
        { label: 'Contact', anchor: '#contact' }
    ];



    // Hero Section
    const HeroSection = () => (
        <section id="hero" className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0B1F3B] via-[#1a3a5c] to-[#0B1F3B] pt-20">
            <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full">
                    <defs>
                        <pattern id="laptop-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M0,30 L60,30 M30,0 L30,60" stroke="#0d6efd" strokeWidth="1" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#laptop-grid)" />
                </svg>
            </div>

            <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0d6efd]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />

            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white mb-6">
                        <Laptop className="w-4 h-4 text-[#0d6efd]" />
                        Professional Laptop Services
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        Professional Laptop Repair<br />
                        <span className="bg-gradient-to-r from-[#0d6efd] to-[#0096C7] bg-clip-text text-transparent">
                            Services in Dubai
                        </span>
                    </h1>

                    <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
                        Precision diagnostics, advanced repair solutions, and enterprise-grade laptop servicing designed for performance-driven users and businesses.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => scrollToSection('#laptop-service-overview')}
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#0d6efd] hover:bg-[#0096C7] text-white font-semibold rounded-lg shadow-lg shadow-[#0d6efd]/30 hover:shadow-xl hover:shadow-[#0d6efd]/40 transition-all hover:-translate-y-1"
                        >
                            Explore Laptop Solutions
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a
                            href="https://wa.me/971556166465"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg border border-white/20 backdrop-blur-sm transition-all hover:-translate-y-1"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Get Expert Consultation
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-bounce">
                <span className="text-sm font-medium">Scroll to explore</span>
                <ChevronDown className="w-5 h-5" />
            </div>
        </section>
    );

    // Service Overview
    const ServiceOverview = () => (
        <section id="laptop-service-overview" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1F3B] mb-6">
                        Laptop Repair Solutions Built for{' '}
                        <span className="bg-gradient-to-r from-[#0d6efd] to-[#0096C7] bg-clip-text text-transparent">
                            Performance and Reliability
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Future Fix delivers specialized laptop repair and maintenance solutions designed to restore performance, extend device lifespan, and minimize operational disruption for individuals and organizations.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: CircuitBoard,
                            title: 'Advanced Diagnostics',
                            desc: 'Comprehensive system analysis using professional-grade tools to identify hardware and software issues with precision.'
                        },
                        {
                            icon: Settings,
                            title: 'Chip-Level Expertise',
                            desc: 'Specialized micro-component repair capabilities for complex motherboard and circuitry faults.'
                        },
                        {
                            icon: Shield,
                            title: 'Enterprise Support',
                            desc: 'Structured maintenance and repair solutions for corporate laptop fleets and business environments.'
                        }
                    ].map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                            <div key={i} className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-[#0d6efd]/50 hover:shadow-xl transition-all">
                                <div className="w-16 h-16 bg-[#0d6efd]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0d6efd]/20 group-hover:scale-110 transition-all">
                                    <Icon className="w-8 h-8 text-[#0d6efd]" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0B1F3B] mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );

    // Core Services Grid
    const CoreServicesGrid = () => (
        <section id="laptop-core-services" className="py-24 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1F3B] mb-4">
                        Core Laptop Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive laptop repair and maintenance solutions for every need
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            name: 'Advanced Laptop Diagnostics',
                            description: 'Comprehensive system analysis to identify hardware, software, and performance bottlenecks with precision.',
                            icon: Activity,
                            tags: ['System Analysis', 'Performance Testing', 'Component Verification']
                        },
                        {
                            name: 'Chip-Level Motherboard Repair',
                            description: 'Specialized micro-component repair for complex motherboard faults using professional-grade tools and methodologies.',
                            icon: CircuitBoard,
                            tags: ['Micro-Soldering', 'IC Replacement', 'Circuit Repair']
                        },
                        {
                            name: 'Hardware Component Replacement',
                            description: 'Replacement and optimization of critical laptop components such as storage, memory, batteries, and displays.',
                            icon: HardDrive,
                            tags: ['SSD/RAM Upgrade', 'Battery Replacement', 'Screen Repair']
                        },
                        {
                            name: 'Operating System & Software Optimization',
                            description: 'System configuration, performance tuning, and software troubleshooting for stable and secure laptop operation.',
                            icon: Settings,
                            tags: ['OS Installation', 'Driver Updates', 'Optimization']
                        },
                        {
                            name: 'Business Laptop Maintenance',
                            description: 'Structured maintenance solutions for corporate devices to ensure operational continuity and long-term reliability.',
                            icon: Users,
                            tags: ['Preventive Care', 'Fleet Management', 'IT Support']
                        },
                        {
                            name: 'Performance Optimization',
                            description: 'System tuning and configuration to maximize laptop performance for demanding professional workloads.',
                            icon: TrendingUp,
                            tags: ['Speed Enhancement', 'Thermal Management', 'System Cleanup']
                        }
                    ].map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <div key={i} className="group p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-[#0d6efd] hover:shadow-2xl transition-all">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-14 h-14 bg-[#0d6efd]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#0d6efd]/20 group-hover:scale-110 transition-all">
                                        <Icon className="w-7 h-7 text-[#0d6efd]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#0B1F3B] mb-2">{service.name}</h3>
                                    </div>
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map((tag, j) => (
                                        <span key={j} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );

    // Why Choose Future Fix
    const WhyChooseFutureFix = () => (
        <section id="why-future-fix-laptop" className="py-24 bg-[#0B1F3B] relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(13, 110, 253, 0.3) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-center">
                        Why Businesses and Professionals<br />
                        <span className="bg-gradient-to-r from-[#0d6efd] to-[#0096C7] bg-clip-text text-transparent">
                            Choose Future Fix
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 mt-12">
                        {[
                            {
                                icon: Award,
                                title: 'Specialized Expertise',
                                desc: 'Advanced technical knowledge in complex laptop repair scenarios and micro-component diagnostics.'
                            },
                            {
                                icon: Target,
                                title: 'Enterprise Methodology',
                                desc: 'Business-oriented repair workflow designed for minimal disruption and maximum reliability.'
                            },
                            {
                                icon: Activity,
                                title: 'Precision Diagnostics',
                                desc: 'Professional-grade tools and systematic testing protocols for accurate fault identification.'
                            },
                            {
                                icon: Clock,
                                title: 'Optimized Turnaround',
                                desc: 'Structured repair timeline management designed for business continuity requirements.'
                            },
                            {
                                icon: BookOpen,
                                title: 'Repair Documentation',
                                desc: 'Detailed service records and transparent reporting for corporate accountability.'
                            },
                            {
                                icon: Shield,
                                title: 'Quality Assurance',
                                desc: 'Multi-point testing and verification process to ensure repair integrity and longevity.'
                            }
                        ].map((point, i) => {
                            const Icon = point.icon;
                            return (
                                <div key={i} className="flex gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all group">
                                    <div className="w-12 h-12 bg-[#0d6efd]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0d6efd]/30 transition-colors">
                                        <Icon className="w-6 h-6 text-[#0d6efd]" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">{point.title}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{point.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );

    // Use Cases
    const UseCasesSection = () => (
        <section id="laptop-use-cases" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1F3B] mb-4">
                            Laptop Repair Use Cases
                        </h2>
                        <p className="text-xl text-gray-600">
                            Common scenarios where professional laptop repair delivers strategic value
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                title: 'Performance Degradation in High-End Laptops',
                                desc: 'Professional workstations experiencing slowdowns, thermal throttling, or system instability affecting productivity.',
                                icon: TrendingUp
                            },
                            {
                                title: 'Motherboard Failures in Professional Devices',
                                desc: 'Critical component failures in business laptops requiring chip-level diagnosis and micro-component repair.',
                                icon: CircuitBoard
                            },
                            {
                                title: 'Hardware Faults Affecting Productivity',
                                desc: 'Display issues, keyboard malfunctions, battery degradation, or connectivity problems disrupting workflow.',
                                icon: Monitor
                            },
                            {
                                title: 'System Instability in Business Environments',
                                desc: 'Recurring crashes, boot failures, or data integrity issues requiring systematic troubleshooting.',
                                icon: Activity
                            },
                            {
                                title: 'Long-Term Device Lifecycle Optimization',
                                desc: 'Strategic upgrades and preventive maintenance to extend laptop lifespan and delay replacement costs.',
                                icon: Shield
                            }
                        ].map((useCase, i) => {
                            const Icon = useCase.icon;
                            return (
                                <div key={i} className="flex gap-6 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-[#0d6efd]/50 hover:shadow-lg transition-all group">
                                    <div className="w-16 h-16 bg-[#0d6efd]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#0d6efd]/20 group-hover:scale-110 transition-all">
                                        <Icon className="w-8 h-8 text-[#0d6efd]" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-[#0B1F3B] mb-3">{useCase.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{useCase.desc}</p>
                                    </div>
                                    <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-[#0d6efd] group-hover:translate-x-1 transition-all flex-shrink-0" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );

    // SEO Content Section
    const SEOContentSection = () => (
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto prose prose-lg">
                    <h2 className="text-4xl font-bold text-[#0B1F3B] mb-8">
                        Enterprise-Oriented Laptop Repair in Dubai
                    </h2>

                    <div className="space-y-8 text-gray-700 leading-relaxed">
                        <div>
                            <h3 className="text-2xl font-bold text-[#0B1F3B] mb-4">
                                Professional Laptop Repair in Dubai
                            </h3>
                            <p className="mb-4">
                                Dubai's fast-paced business environment demands laptop repair services that prioritize precision, reliability, and minimal disruption. Future Fix delivers professional laptop repair solutions designed for performance-driven users and organizations requiring technical excellence and operational continuity.
                            </p>
                            <p>
                                Our laptop repair methodology combines advanced diagnostic capabilities with specialized repair expertise, enabling us to address complex hardware faults, system instability, and performance degradation scenarios that conventional repair services cannot resolve effectively.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-[#0B1F3B] mb-4">
                                Advanced Diagnostics and Technical Expertise
                            </h3>
                            <p className="mb-4">
                                Effective laptop repair begins with accurate diagnosis. Future Fix employs professional-grade diagnostic tools and systematic testing protocols to identify root causes of laptop malfunctions, from micro-component failures on motherboards to software configuration conflicts affecting system stability.
                            </p>
                            <p>
                                Our diagnostic approach examines hardware integrity, thermal performance, power delivery systems, and software configurations to develop comprehensive repair strategies that address underlying issues rather than superficial symptoms.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-[#0B1F3B] mb-4">
                                Chip-Level Repair Capabilities
                            </h3>
                            <p className="mb-4">
                                Modern laptops incorporate complex circuitry where failures often occur at the micro-component level. Future Fix specializes in chip-level motherboard repair, utilizing precision soldering equipment and technical expertise to repair power management ICs, GPU chips, memory controllers, and other critical components.
                            </p>
                            <p>
                                This specialized capability enables us to recover laptops that other service providers classify as unrepairable, delivering significant cost savings compared to motherboard or device replacement while preserving data and system configurations.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-[#0B1F3B] mb-4">
                                Business and Corporate Laptop Support
                            </h3>
                            <p className="mb-4">
                                Corporate laptop fleets require structured maintenance and repair solutions that minimize operational disruption. Future Fix provides business-oriented laptop support including preventive maintenance, rapid turnaround repair services, and fleet management capabilities designed for organizational requirements.
                            </p>
                            <p>
                                Our corporate laptop services include detailed documentation, transparent reporting, and coordinated service delivery to ensure IT teams maintain visibility and control over device repair workflows and organizational compliance requirements.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-[#0B1F3B] mb-4">
                                Performance Optimization and Lifecycle Management
                            </h3>
                            <p className="mb-4">
                                Strategic laptop lifecycle management extends device utility and delays replacement costs. Future Fix delivers performance optimization services including hardware upgrades, thermal management improvements, and system configuration tuning to maximize laptop performance and longevity.
                            </p>
                            <p>
                                Our approach to lifecycle management helps organizations optimize their technology investments by extending functional laptop lifespan while maintaining performance standards required for professional workflows.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-[#0B1F3B] mb-4">
                                Choosing a Reliable Laptop Repair Partner in Dubai
                            </h3>
                            <p className="mb-4">
                                Selecting a laptop repair service provider requires evaluating technical capabilities, repair methodologies, and business alignment. Key considerations include diagnostic expertise, component-level repair capabilities, turnaround time management, quality assurance processes, and service transparency.
                            </p>
                            <p>
                                Future Fix combines technical excellence with enterprise-oriented service delivery, providing professional laptop repair solutions that meet the performance, reliability, and accountability standards required by Dubai's business community.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    // CTA Section
    const CTASection = () => (
        <section id="contact" className="relative py-24 bg-gradient-to-br from-[#0B1F3B] via-[#1a3a5c] to-[#0B1F3B] overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0d6efd]/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                    Strategic Laptop Repair Starts with{' '}
                    <span className="bg-gradient-to-r from-[#0d6efd] to-[#0096C7] bg-clip-text text-transparent">
                        Accurate Diagnosis
                    </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                    Discover a structured approach to laptop repair designed for reliability, performance, and long-term value.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <a href="https://wa.me/971556166465"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#0d6efd] hover:bg-[#0096C7] text-white font-semibold rounded-lg shadow-lg shadow-[#0d6efd]/30 hover:shadow-xl hover:shadow-[#0d6efd]/40 transition-all hover:-translate-y-1">
                        <MessageCircle className="w-5 h-5" />
                        Request Technical Consultation
                    </a>
                    <a href="tel:+971556166465"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg border border-white/20 backdrop-blur-sm transition-all hover:-translate-y-1">
                        <Phone className="w-5 h-5" />
                        Call Expert Team
                    </a>
                </div>
            </div>
        </section>
    );

    // Footer
    const Footer = () => (
        <footer className="py-16 bg-[#0B1F3B] border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Future Fix</h3>
                        <p className="text-gray-400 mb-4">
                            Professional laptop repair and IT services in Dubai. Enterprise-grade solutions for businesses and individuals.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Laptop Diagnostics</li>
                            <li>Chip-Level Repair</li>
                            <li>Hardware Replacement</li>
                            <li>Software Optimization</li>
                            <li>Business Support</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>NAIF, Deira, Dubai</li>
                            <li>Pin: 46701</li>
                            <li>
                                <a href="https://wa.me/971556166465" className="hover:text-[#0d6efd] transition-colors">
                                    +971 55 616 6465
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
                    <p>© 2025 Future Fix. All rights reserved. Professional Laptop Repair Services in Dubai.</p>
                </div>
            </div>
        </footer>
    );

    return (
        <div className="bg-white">
            <Header />
            <HeroSection />
            <ServiceOverview />
            <CoreServicesGrid />
            <WhyChooseFutureFix />
            <UseCasesSection />
            <SEOContentSection />
            <CTASection />
            <Footer />
        </div>
    );
}