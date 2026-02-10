// // app/services/page.js
// "use client";
// import React, { useEffect, useRef } from 'react';
// import {
//     Cpu,
//     CircuitBoard,
//     HardDrive,
//     Settings,
//     Shield,
//     Activity,
//     Laptop,
//     BarChart3,
//     Users,
//     TrendingUp,
//     ArrowRight,
//     MessageCircle,
//     MapPin,
//     ChevronRight,
// } from 'lucide-react';

// // WhatsApp from .env with fallback
// const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER || '+971556166465';
// const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(
//     'Hello, I would like detailed information about your laptop repair services.'
// )}`;

// export default function ServicesPage() {
//     const sectionRefs = useRef([]);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         entry.target.classList.add('opacity-100', 'translate-y-0');
//                         entry.target.classList.remove('opacity-0', 'translate-y-12');
//                     }
//                 });
//             },
//             { threshold: 0.15 }
//         );

//         sectionRefs.current.forEach((ref) => {
//             if (ref) observer.observe(ref);
//         });

//         return () => observer.disconnect();
//     }, []);

//     const laptopServices = [
//         {
//             icon: CircuitBoard,
//             title: 'Chip-Level Motherboard Repair',
//             description:
//                 'Specialized micro-soldering and component-level repair for complex motherboard failures — power management ICs, GPU modules, RAM controllers, charging circuits, PCH, embedded controllers, and more. We recover laptops others consider beyond repair.',
//             tags: ['Micro-Soldering', 'IC Reballing', 'Circuit Tracing', 'Voltage Regulation Repair', 'BGA Rework'],
//         },
//         {
//             icon: HardDrive,
//             title: 'Hardware Replacement & Upgrades',
//             description:
//                 'Expert replacement and upgrade of SSDs (SATA/NVMe), RAM modules, batteries, displays (LCD/LED/OLED), keyboards, trackpads, DC jacks, cooling fans/heatsinks, and other critical components using high-quality compatible or original parts.',
//             tags: ['SSD / NVMe Upgrade', 'RAM Expansion', 'Battery Replacement', 'Screen Repair', 'Keyboard / Trackpad Service'],
//         },
//         {
//             icon: Settings,
//             title: 'Software & Operating System Services',
//             description:
//                 'Clean Windows/macOS installation, driver configuration, performance tuning, virus/malware removal, system stabilization, data backup & transfer, BIOS/UEFI updates, and activation troubleshooting.',
//             tags: ['OS Installation', 'Driver Optimization', 'Malware Removal', 'Performance Tuning', 'Data Migration'],
//         },
//         {
//             icon: Activity,
//             title: 'Advanced Laptop Diagnostics',
//             description:
//                 'Professional-grade hardware and software diagnostics using specialized tools — thermal imaging, power rail analysis, signal integrity testing, stress benchmarking, voltage monitoring, and component health verification.',
//             tags: ['Thermal Imaging', 'Power Delivery Testing', 'Signal Integrity', 'Stress Testing', 'Hardware Health Scan'],
//         },
//         {
//             icon: Shield,
//             title: 'Business & Enterprise Laptop Support',
//             description:
//                 'Structured fleet servicing, preventive maintenance programs, bulk diagnostics, rapid-turnaround repairs, detailed reporting, and dedicated support contracts for offices, SMEs, and corporate environments.',
//             tags: ['Fleet Servicing', 'Preventive Maintenance', 'Corporate Contracts', 'IT Support', 'Bulk Repair Coordination'],
//         },
//         {
//             icon: TrendingUp,
//             title: 'Performance & Thermal Optimization',
//             description:
//                 'Hardware upgrades, thermal paste/fan/heatsink service, system cleanup, power efficiency tuning, overclocking safety checks (where applicable), and configuration advice to maximize laptop performance and extend lifespan.',
//             tags: ['Speed Enhancement', 'Thermal Management', 'System Cleanup', 'Upgrade Consulting', 'Battery Health Optimization'],
//         },
//     ];

//     return (
//         <>
//             {/* Inter font — clean, modern, professional (matches your logo style) */}
//             <link
//                 href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
//                 rel="stylesheet"
//             />
//             <div className="min-h-screen bg-white font-['Inter'] relative">
//                 {/* Floating WhatsApp Chat Bubble */}
//                 <a
//                     href={WHATSAPP_LINK}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="fixed bottom-8 right-8 z-50 group"
//                     aria-label="Chat on WhatsApp"
//                 >
//                     <div className="relative">
//                         <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#00B4D8] flex items-center justify-center shadow-2xl shadow-[#00B4D8]/40 group-hover:scale-110 transition-transform duration-300">
//                             <MessageCircle className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
//                         </div>
//                         <div className="absolute inset-0 rounded-full border-4 border-[#00B4D8]/30 animate-ping" />
//                         <div className="absolute -top-2 -right-2 bg-[#0B1F3B] text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
//                             Chat
//                         </div>
//                     </div>
//                 </a>

//                 {/* Hero Section */}
//                 <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-white pt-20">
//                     {/* Very light grid – adjusted for white bg */}
//                     <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
//                         <svg className="w-full h-full">
//                             <defs>
//                                 <pattern id="services-grid-light" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
//                                     <path d="M0,30 L60,30 M30,0 L30,60" stroke="#0B1F3B" strokeWidth="1" fill="none" opacity="0.35" />
//                                 </pattern>
//                             </defs>
//                             <rect width="100%" height="100%" fill="url(#services-grid-light)" />
//                         </svg>
//                     </div>

//                     {/* Soft teal glow – reduced opacity for clean white bg */}
//                     <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00B4D8]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />

//                     <div className="container mx-auto px-6 py-20 relative z-10">
//                         <div className="max-w-5xl mx-auto text-center space-y-10">
//                             {/* Original tag – colors adjusted for white bg */}
//                             <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#0B1F3B]/5 border border-[#0B1F3B]/10 rounded-full text-lg font-semibold text-[#0B1F3B]">
//                                 <Laptop className="w-6 h-6 text-[#00B4D8]" />
//                                 Professional Laptop Services
//                             </div>

//                             {/* Original headline – kept exactly */}
//                             <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-[#0B1F3B]">
//                                 Laptop Repair & Optimization
//                                 <br />
//                                 <span className="bg-gradient-to-r from-[#00B4D8] to-[#0096C7] bg-clip-text text-transparent">
//                                     Built for Performance & Longevity
//                                 </span>
//                             </h1>

//                             {/* Original paragraph – kept exactly */}
//                             <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
//                                 Specialized chip-level repair, hardware upgrades, software optimization, and enterprise-grade support — designed to restore, enhance, and extend the life of your laptop.
//                             </p>

//                             {/* Original CTA – kept exactly */}
//                             <div className="flex flex-wrap justify-center gap-6 mt-12">
//                                 <a
//                                     href={WHATSAPP_LINK}
//                                     className="group inline-flex items-center gap-3 px-10 py-5 bg-[#00B4D8] hover:bg-[#0096C7] text-white font-bold text-lg rounded-2xl shadow-xl shadow-[#00B4D8]/40 hover:shadow-2xl hover:shadow-[#00B4D8]/50 transition-all hover:-translate-y-1"
//                                 >
//                                     <MessageCircle className="w-7 h-7" />
//                                     Get Expert Laptop Advice
//                                     <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Original scroll indicator – color adjusted for white bg */}
//                     <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 animate-bounce">
//                         <span className="text-sm font-medium">Explore Laptop Services</span>
//                         <ChevronRight className="w-6 h-6 rotate-90" />
//                     </div>
//                 </section>

//                 {/* Detailed Laptop Services */}
//                 <section className="py-24 bg-white">
//                     <div className="container mx-auto px-6">
//                         <div className="text-center mb-16">
//                             <h2 className="text-4xl lg:text-6xl font-extrabold text-[#0B1F3B] mb-6">
//                                 Our Laptop Services
//                             </h2>
//                             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                                 Precision repair, optimization, and support solutions built for professionals, businesses, and performance-driven users in Dubai.
//                             </p>
//                         </div>

//                         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                             {laptopServices.map((service, index) => (
//                                 <div
//                                     key={service.title}
//                                     ref={(el) => (sectionRefs.current[index] = el)}
//                                     className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-[#00B4D8] hover:shadow-2xl transition-all duration-500 opacity-0 translate-y-12"
//                                     style={{ transitionDelay: `${index * 100}ms` }}
//                                 >
//                                     <div className="flex items-start gap-5 mb-6">
//                                         <div className="w-16 h-16 bg-[#00B4D8]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#00B4D8]/20 group-hover:scale-110 transition-all">
//                                             <service.icon className="w-8 h-8 text-[#00B4D8]" />
//                                         </div>
//                                         <div>
//                                             <h3 className="text-2xl font-bold text-[#0B1F3B] mb-3 group-hover:text-[#00B4D8] transition-colors">
//                                                 {service.title}
//                                             </h3>
//                                             <p className="text-gray-700 leading-relaxed mb-5">{service.description}</p>
//                                             <div className="flex flex-wrap gap-2">
//                                                 {service.tags.map((tag) => (
//                                                     <span
//                                                         key={tag}
//                                                         className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
//                                                     >
//                                                         {tag}
//                                                     </span>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* Final CTA */}
//                 <section className="relative py-24 bg-gradient-to-br from-[#0B1F3B] via-[#1a3a5c] to-[#0B1F3B] overflow-hidden">
//                     <div className="absolute inset-0 opacity-5">
//                         <div
//                             className="absolute inset-0"
//                             style={{
//                                 backgroundImage: 'radial-gradient(circle, rgba(0, 180, 216, 0.2) 1px, transparent 1px)',
//                                 backgroundSize: '40px 40px',
//                             }}
//                         />
//                     </div>

//                     <div className="container mx-auto px-6 text-center relative z-10">
//                         <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-8">
//                             Need Expert Laptop Repair?
//                         </h2>
//                         <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto mb-12">
//                             From chip-level fixes to full performance restoration — our team delivers precise, reliable solutions tailored to your device.
//                         </p>

//                         <div className="flex flex-wrap justify-center gap-6">
//                             <a
//                                 href={WHATSAPP_LINK}
//                                 className="group inline-flex items-center gap-4 px-12 py-6 bg-[#00B4D8] hover:bg-[#0096C7] text-white font-bold text-xl rounded-3xl shadow-2xl shadow-[#00B4D8]/40 hover:shadow-3xl hover:shadow-[#00B4D8]/50 transition-all hover:-translate-y-2 transform"
//                             >
//                                 <MessageCircle className="w-9 h-9" />
//                                 Talk to Laptop Repair Experts
//                                 <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
//                             </a>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Footer */}
//                 <footer className="py-16 bg-[#0B1F3B] border-t border-white/10">
//                     <div className="container mx-auto px-6">
//                         <div className="grid md:grid-cols-3 gap-10">
//                             <div>
//                                 <h3 className="text-2xl font-bold text-white mb-4">Future Fix</h3>
//                                 <p className="text-gray-400 mb-6">
//                                     Professional laptop repair and IT services in Dubai — extending device life through precision engineering.
//                                 </p>
//                             </div>

//                             <div>
//                                 <h4 className="text-lg font-semibold text-white mb-4">Laptop Services</h4>
//                                 <ul className="space-y-3 text-gray-400">
//                                     <li>Chip-Level Motherboard Repair</li>
//                                     <li>Hardware Replacement & Upgrades</li>
//                                     <li>Software & OS Services</li>
//                                     <li>Advanced Diagnostics</li>
//                                     <li>Business Laptop Support</li>
//                                     <li>Performance Optimization</li>
//                                 </ul>
//                             </div>

//                             <div>
//                                 <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
//                                 <ul className="space-y-3 text-gray-400">
//                                     <li className="flex items-center gap-2">
//                                         <MapPin className="w-5 h-5 text-[#00B4D8]" />
//                                         <span>NAIF, Deira, Dubai - Pin: 46701</span>
//                                     </li>
//                                     <li>
//                                         <a
//                                             href={WHATSAPP_LINK}
//                                             className="hover:text-[#00B4D8] transition-colors flex items-center gap-2"
//                                         >
//                                             <MessageCircle className="w-5 h-5" />
//                                             {WHATSAPP_NUMBER}
//                                         </a>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>

//                         <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
//                             <p>© 2025 Future Fix. All rights reserved. Professional Laptop Services in Dubai.</p>
//                         </div>
//                     </div>
//                 </footer>
//             </div>
//         </>
//     );
// }

// app/services/page.js
'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Cpu,
  CircuitBoard,
  HardDrive,
  Settings,
  Shield,
  Activity,
  Laptop,
  BarChart3,
  ArrowRight,
  MessageCircle,
  MapPin,
  ChevronRight,
} from 'lucide-react';

// ──────────────────────────────────────────────
// WhatsApp config
// ──────────────────────────────────────────────
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+971556166465';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(
  'Hello Future Fix, I need information about laptop repair / motherboard repair / data recovery in Dubai'
)}`;

// ──────────────────────────────────────────────
// Main component
// ──────────────────────────────────────────────
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
      { threshold: 0.18 }
    );

    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: CircuitBoard,
      title: 'Chip-Level Motherboard Repair',
      desc: 'Micro-soldering, BGA reballing, power IC replacement, GPU rework, charging port circuits, PCH / embedded controller fixes — we repair what most shops replace.',
      tags: ['Micro-Soldering', 'BGA Rework', 'IC Replacement', 'Power Circuit Repair', 'GPU Reballing'],
    },
    {
      icon: HardDrive,
      title: 'Hardware Replacement & Upgrades',
      desc: 'Genuine / high-quality compatible SSD (NVMe/SATA), RAM upgrade, screen replacement, battery replacement, keyboard / trackpad / DC jack / fan / heatsink service.',
      tags: ['SSD NVMe Upgrade', 'RAM Upgrade', 'Screen Replacement', 'Battery Replacement', 'Keyboard Repair'],
    },
    {
      icon: Settings,
      title: 'Software & OS Optimization',
      desc: 'Clean Windows / macOS reinstall, driver optimization, malware removal, performance tuning, activation fix, data transfer, BIOS update & troubleshooting.',
      tags: ['Windows Reinstall', 'macOS Clean Install', 'Malware Removal', 'Performance Tuning', 'Data Migration'],
    },
    {
      icon: Activity,
      title: 'Advanced Laptop Diagnostics',
      desc: 'Professional tools: thermal camera, power delivery analysis, signal tracing, stress testing, voltage monitoring, component health scan — accurate fault finding.',
      tags: ['Thermal Camera', 'Power Rail Test', 'Signal Integrity', 'Stress Benchmark', 'Hardware Scan'],
    },
    {
      icon: Shield,
      title: 'Business & Corporate Laptop Support',
      desc: 'Fleet management, preventive maintenance contracts, priority repairs, bulk diagnostics, detailed reporting, dedicated support for offices & companies in Dubai.',
      tags: ['Fleet Repair', 'Corporate Contracts', 'Preventive Maintenance', 'Priority Service', 'IT Support Dubai'],
    },
    {
      icon: Cpu,
      title: 'Performance & Thermal Optimization',
      desc: 'Thermal paste replacement, fan/heatsink cleaning, repasting, undervolting, power plan tuning, SSD upgrade consultation — make your laptop run faster & cooler.',
      tags: ['Repasting', 'Thermal Optimization', 'Fan Cleaning', 'Undervolting', 'Performance Boost'],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0e17] text-gray-100 font-sans antialiased">
      {/* ─── Floating WhatsApp Button ─── */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Contact Future Fix laptop repair on WhatsApp"
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

      {/* ─── Hero ─── */}
      <section className="relative pt-24 pb-32 md:pb-40 overflow-hidden">
        {/* Glow background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-600/20 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute -bottom-20 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            <div className="inline-flex items-center gap-3 px-7 py-3.5 bg-cyan-950/50 border border-cyan-800/40 rounded-full text-lg font-semibold text-cyan-400">
              <Laptop className="w-6 h-6" />
              Laptop Repair Dubai
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              Professional Laptop Repair
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Chip-Level • Upgrade • Optimization
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Motherboard repair • NVMe / RAM upgrade • screen / battery replacement • thermal optimization • business fleet support — Dubai
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <a
                href={WHATSAPP_LINK}
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl text-lg font-semibold shadow-xl shadow-cyan-900/30 hover:shadow-2xl hover:scale-[1.02] transition-all"
              >
                <MessageCircle className="w-7 h-7" />
                Get Expert Advice Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services Grid ─── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
              Laptop Repair Services in Dubai
            </h2>
            <p className="mt-5 text-xl text-gray-400 max-w-3xl mx-auto">
              From dead motherboard recovery to high-performance upgrades — we fix what others replace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-9">
            {services.map((service, i) => (
              <div
                key={service.title}
                ref={(el) => (sectionRefs.current[i] = el)}
                className="group bg-gray-900/40 border border-gray-800 rounded-2xl p-8 hover:border-cyan-700/60 hover:shadow-xl hover:shadow-cyan-950/30 transition-all duration-300 opacity-0 translate-y-12"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-cyan-950/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-900/60 transition-colors">
                    <service.icon className="w-7 h-7 text-cyan-400" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed mb-6">{service.desc}</p>

                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-gray-800/80 text-cyan-300 rounded-full border border-cyan-900/30"
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

      {/* ─── Strong CTA ─── */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-cyan-950/40 via-gray-950 to-blue-950/30">
        <div className="absolute inset-0 opacity-[0.06]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle, #0ea5e9 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Need Motherboard Repair or Laptop Upgrade Today?
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
            Fast diagnostics • Transparent pricing • Lifetime warranty on many repairs • Free pickup in Dubai
          </p>

          <a
            href={WHATSAPP_LINK}
            className="group inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl text-xl font-bold shadow-2xl shadow-cyan-900/40 hover:shadow-3xl hover:scale-[1.02] transition-all"
          >
            <MessageCircle className="w-9 h-9" />
            WhatsApp Laptop Repair Expert
            <ArrowRight className="w-8 h-8 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-black border-t border-gray-900 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-5">Future Fix</h3>
            <p className="text-gray-400 leading-relaxed">
              Professional laptop repair • motherboard repair • data recovery • hardware upgrade • thermal optimization — Dubai
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-5">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition">
                  Motherboard Repair Dubai
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition">
                  Laptop Screen Replacement
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition">
                  SSD / RAM Upgrade
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition">
                  Business Laptop Support
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
          Laptop Repair & Motherboard Repair Dubai
        </div>
      </footer>
    </div>
  );
}