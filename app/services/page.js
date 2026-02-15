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

'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

// WhatsApp configuration
const WHATSAPP_NUMBER = '+971556166465';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(
  'Hello FutureFix, I need information about laptop repair services in Dubai'
)}`;

export default function ServicesPage() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: 'Chip-Level Motherboard Repair',
      desc: 'Advanced micro-soldering and BGA reballing for complex motherboard failures. We specialize in power IC replacement, GPU rework, charging circuit repair, PCH and embedded controller diagnostics. Professional component-level repair that restores functionality when replacement seems inevitable.',
      capabilities: [
        'Micro-soldering & BGA reballing',
        'Power IC replacement',
        'GPU rework & reballing',
        'Charging circuit repair',
        'PCH & EC diagnostics',
        'Component-level repair'
      ]
    },
    {
      title: 'Hardware Component Replacement',
      desc: 'Premium quality component replacement using original-grade parts. Specialized in display panels, battery modules, keyboard assemblies, and internal hardware components. Every replacement includes thorough testing and quality assurance protocols.',
      capabilities: [
        'Display panel replacement',
        'Battery module installation',
        'Keyboard assembly repair',
        'Trackpad replacement',
        'DC jack & port repair',
        'Cooling system service'
      ]
    },
    {
      title: 'Performance Upgrades',
      desc: 'Transform your laptop\'s performance with professional hardware upgrades. Expert installation of NVMe SSDs, RAM expansion, and storage solutions. Comprehensive compatibility assessment and optimization for maximum system performance.',
      capabilities: [
        'NVMe SSD installation',
        'SATA SSD upgrade',
        'RAM expansion service',
        'Storage migration',
        'Performance optimization',
        'Compatibility assessment'
      ]
    },
    {
      title: 'Liquid Damage Restoration',
      desc: 'Professional ultrasonic cleaning and corrosion treatment for liquid-damaged systems. Advanced board-level inspection, component testing, and precision repair techniques. Comprehensive restoration process with detailed damage assessment.',
      capabilities: [
        'Ultrasonic board cleaning',
        'Corrosion treatment',
        'Component inspection',
        'Circuit restoration',
        'Power delivery repair',
        'Full system testing'
      ]
    },
    {
      title: 'Thermal Management & Optimization',
      desc: 'Advanced thermal management solutions to prevent overheating and improve system longevity. Professional thermal paste application, cooling system maintenance, and airflow optimization. Complete thermal performance analysis and enhancement.',
      capabilities: [
        'Thermal paste replacement',
        'Cooling system cleaning',
        'Fan & heatsink service',
        'Thermal optimization',
        'Temperature monitoring',
        'Performance tuning'
      ]
    },
    {
      title: 'Corporate Fleet Management',
      desc: 'Dedicated support for businesses with comprehensive IT asset repair and maintenance programs. Priority service, bulk diagnostics, detailed reporting, and preventive maintenance contracts tailored for Dubai-based companies and offices.',
      capabilities: [
        'Priority repair service',
        'Fleet diagnostics',
        'Preventive maintenance',
        'Contract support',
        'Detailed reporting',
        'Asset management'
      ]
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'Contact our technical team via WhatsApp or phone for initial assessment and service inquiry.'
    },
    {
      number: '02',
      title: 'Professional Diagnosis',
      description: 'Comprehensive board-level inspection using advanced diagnostic equipment and tools.'
    },
    {
      number: '03',
      title: 'Transparent Quote',
      description: 'Detailed technical assessment with clear explanation of required repairs and timeline.'
    },
    {
      number: '04',
      title: 'Expert Repair',
      description: 'Certified technicians perform precision repairs using professional-grade equipment.'
    },
    {
      number: '05',
      title: 'Quality Testing',
      description: 'Rigorous testing protocols ensure optimal performance before device return.'
    },
    {
      number: '06',
      title: 'Warranty & Support',
      description: 'Extended warranty coverage with ongoing technical support and consultation.'
    }
  ];

  const expertise = [
    { brand: 'Dell', models: 'XPS, Latitude, Precision, Inspiron' },
    { brand: 'HP', models: 'EliteBook, ProBook, Pavilion, Envy, Spectre' },
    { brand: 'Lenovo', models: 'ThinkPad, IdeaPad, Yoga, Legion' },
    { brand: 'Apple', models: 'MacBook Pro, MacBook Air, M1/M2/M3 series' },
    { brand: 'ASUS', models: 'ZenBook, VivoBook, ROG, TUF Gaming' },
    { brand: 'Acer', models: 'Swift, Aspire, Predator, Nitro' },
    { brand: 'MSI', models: 'Prestige, Modern, Gaming series' },
    { brand: 'Surface', models: 'Surface Laptop, Surface Book, Surface Pro' }
  ];

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
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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
              Professional Laptop Services
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-light leading-tight tracking-tight mb-8">
            Specialized <span className="font-semibold">Repair Services</span>
            <br />
            <span className="text-[#0ea5e9]">for Dubai</span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-12">
            Advanced chip-level motherboard repair, component replacement, performance upgrades, 
            and comprehensive technical solutions for laptops and notebooks
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0ea5e9] text-white font-medium rounded-md hover:bg-[#0284c7] transition shadow-lg shadow-[#0ea5e9]/20"
            >
              Request Service Consultation
            </a>
            
            <a
              href="tel:+971556166465"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 text-gray-700 font-medium rounded-md hover:border-[#0ea5e9] hover:text-[#0ea5e9] transition"
            >
              Call Technical Team
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-xs lg:text-sm font-semibold tracking-wider text-[#0ea5e9] uppercase">
              Comprehensive Solutions
            </span>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight mt-4 mb-6">
              Our <span className="font-semibold">Technical Services</span>
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
              Professional laptop repair and maintenance services delivered by certified technicians
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, i) => (
              <div
                key={i}
                ref={(el) => (sectionRefs.current[i] = el)}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:border-[#0ea5e9] hover:shadow-xl transition-all duration-300 opacity-0 translate-y-8"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <h3 className="text-2xl font-medium mb-4 text-gray-900">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed font-light mb-6">
                  {service.desc}
                </p>

                <div className="space-y-2">
                  {service.capabilities.map((capability, idx) => (
                    <div key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-[#0ea5e9] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm text-gray-700 font-light">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-xs lg:text-sm font-semibold tracking-wider text-[#0ea5e9] uppercase">
              Service Workflow
            </span>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight mt-4">
              Our <span className="font-semibold">Repair Process</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:border-[#0ea5e9] transition-colors"
              >
                <div className="text-5xl font-light text-[#0ea5e9]/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-medium mb-3 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands & Models */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs lg:text-sm font-semibold tracking-wider text-[#0ea5e9] uppercase">
              Technical Expertise
            </span>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight mt-4">
              Supported <span className="font-semibold">Brands & Models</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#0ea5e9] hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.brand}
                </h3>
                <p className="text-sm text-gray-600 font-light">
                  {item.models}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 font-light mt-12 max-w-3xl mx-auto">
            We service all major laptop brands and models. If your specific model is not listed, 
            please contact our technical team for compatibility confirmation.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-[#0ea5e9] to-[#0284c7]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-light mb-6">
            Ready for <span className="font-semibold">Professional Service?</span>
          </h2>
          <p className="text-xl font-light text-white/90 mb-10 max-w-2xl mx-auto">
            Contact our certified technicians for expert consultation and technical assessment
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0ea5e9] font-medium rounded-md hover:bg-gray-50 transition shadow-lg"
            >
              WhatsApp Consultation
            </a>
            <a
              href="tel:+971556166465"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Corporate Services */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs lg:text-sm font-semibold tracking-wider text-[#0ea5e9] uppercase">
                Business Solutions
              </span>
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight mt-4 mb-6">
                <span className="font-semibold">Corporate</span> IT Support
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed font-light">
                <p>
                  Comprehensive IT asset management and repair services tailored for businesses, 
                  corporate offices, and organizations across Dubai.
                </p>
                <p>
                  We provide priority service, bulk diagnostics, preventive maintenance contracts, 
                  and detailed reporting for companies managing laptop fleets and IT infrastructure.
                </p>
                <p>
                  Our corporate support includes dedicated account management, flexible service 
                  agreements, and professional consultation for long-term IT asset optimization.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href={WHATSAPP_LINK}
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#0ea5e9] text-white font-medium rounded-md hover:bg-[#0284c7] transition shadow-lg shadow-[#0ea5e9]/20"
                >
                  Request Corporate Quote
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-medium mb-3 text-gray-900">Priority Service</h3>
                <p className="text-gray-600 font-light">
                  Fast-track repair service with dedicated support and expedited turnaround times for critical business systems.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-medium mb-3 text-gray-900">Fleet Management</h3>
                <p className="text-gray-600 font-light">
                  Comprehensive diagnostics and maintenance programs for companies with multiple laptop assets and IT equipment.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-medium mb-3 text-gray-900">Contract Support</h3>
                <p className="text-gray-600 font-light">
                  Flexible maintenance agreements with preventive care, regular inspections, and ongoing technical consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}