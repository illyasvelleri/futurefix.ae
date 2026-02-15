// // app/how-it-works/page.js
// 'use client';

// import React, { useEffect, useRef } from 'react';
// import Link from 'next/link';
// import {
//   Activity,
//   Package,
//   Cpu,
//   Shield,
//   CheckCircle2,
//   MapPin,
//   ArrowRight,
//   MessageCircle,
// } from 'lucide-react';

// // WhatsApp config
// const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+971556166465';
// const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(
//   'Hello Future Fix, I would like to understand your repair process and get a quote.'
// )}`;

// export default function HowItWorks() {
//   const stepRefs = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('opacity-100', 'translate-y-0');
//             entry.target.classList.remove('opacity-0', 'translate-y-10');
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     stepRefs.current.forEach((ref) => ref && observer.observe(ref));
//     return () => observer.disconnect();
//   }, []);

//   const steps = [
//     {
//       number: '01',
//       title: 'Initial Diagnosis',
//       description:
//         'Send photos or describe the issue via WhatsApp. Our engineers perform detailed chip-level analysis to identify the exact fault — no guesswork.',
//       icon: Activity,
//     },
//     {
//       number: '02',
//       title: 'Free Pickup in Dubai',
//       description:
//         'We arrange secure, tracked pickup from your location anywhere in Dubai at a time that suits you.',
//       icon: Package,
//     },
//     {
//       number: '03',
//       title: 'Precision Chip-Level Repair',
//       description:
//         'Your device is repaired in our lab using micro-soldering, BGA rework, and component-level fixes — saving original parts whenever possible.',
//       icon: Cpu,
//     },
//     {
//       number: '04',
//       title: 'Quality Assurance & Testing',
//       description:
//         'Multi-point testing: stress tests, thermal validation, full functionality check, and burn-in to ensure long-term reliability.',
//       icon: Shield,
//     },
//     {
//       number: '05',
//       title: 'Secure Return Delivery',
//       description:
//         'Your repaired device is returned quickly and safely — same trusted logistics used for corporate clients.',
//       icon: CheckCircle2,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#0a0e17] text-gray-100 font-sans antialiased">
//       {/* Floating WhatsApp Button */}
//       <a
//         href={WHATSAPP_LINK}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-6 right-6 z-50 group"
//         aria-label="Contact Future Fix on WhatsApp"
//       >
//         <div className="relative">
//           <div className="w-16 h-16 rounded-full bg-cyan-600 flex items-center justify-center shadow-2xl shadow-cyan-900/50 group-hover:scale-110 transition-transform">
//             <MessageCircle className="w-8 h-8 text-white" />
//           </div>
//           <div className="absolute -top-1 -right-1 bg-cyan-700 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
//             Chat
//           </div>
//         </div>
//       </a>

//       {/* Hero Section */}
//       <section className="relative pt-24 pb-32 md:pb-40 overflow-hidden">
//         {/* Background glows */}
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-600/20 rounded-full blur-3xl opacity-40"></div>
//           <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-3xl opacity-30"></div>
//         </div>

//         <div className="container mx-auto px-6 relative z-10">
//           <div className="max-w-5xl mx-auto text-center space-y-10">
//             <div className="inline-flex items-center gap-3 px-7 py-3.5 bg-cyan-950/50 border border-cyan-800/40 rounded-full text-lg font-semibold text-cyan-400">
//               <Activity className="w-6 h-6" />
//               Our Repair Process
//             </div>

//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
//               How We
//               <br />
//               <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
//                 Restore Your Device
//               </span>
//             </h1>

//             <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
//               A clear, efficient, transparent process — from first message to fully repaired device, built for speed and reliability in Dubai.
//             </p>

//             <div className="flex flex-wrap justify-center gap-6 mt-10">
//               <a
//                 href={WHATSAPP_LINK}
//                 className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl text-lg font-semibold shadow-xl shadow-cyan-900/30 hover:shadow-2xl hover:scale-[1.02] transition-all"
//               >
//                 <MessageCircle className="w-7 h-7" />
//                 Start Your Repair Now
//                 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Steps Section */}
//       <section className="py-20 md:py-28">
//         <div className="container mx-auto px-6">
//           <div className="max-w-7xl mx-auto">
//             {/* Horizontal line on desktop */}
//             <div className="hidden lg:block relative h-1.5 bg-gradient-to-r from-cyan-900 via-cyan-700 to-cyan-900 rounded-full my-16" />

//             <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 relative">
//               {steps.map((step, index) => (
//                 <div
//                   key={step.number}
//                   ref={(el) => (stepRefs.current[index] = el)}
//                   className="relative group opacity-0 translate-y-10 transition-all duration-700 ease-out"
//                   style={{ transitionDelay: `${index * 140}ms` }}
//                 >
//                   {/* Connecting line (desktop only) */}
//                   {index < steps.length - 1 && (
//                     <div className="hidden lg:block absolute top-20 -right-3 w-[calc(100%+1.5rem)] h-0.5 bg-gradient-to-r from-cyan-800 to-transparent z-0" />
//                   )}

//                   <div className="relative z-10 flex flex-col items-center text-center">
//                     {/* Step number + icon circle */}
//                     <div className="relative w-28 h-28 mb-8">
//                       <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-700 to-blue-800 shadow-2xl shadow-cyan-900/40 group-hover:shadow-cyan-700/60 transition-all group-hover:scale-110" />
//                       <div className="absolute inset-2 rounded-full bg-[#0a0e17] flex items-center justify-center">
//                         <step.icon className="w-12 h-12 text-cyan-400" />
//                       </div>
//                       <div className="absolute -top-4 -right-4 w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center text-white font-extrabold text-lg shadow-lg border-2 border-[#0a0e17]">
//                         {step.number}
//                       </div>
//                     </div>

//                     <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 group-hover:text-cyan-300 transition-colors">
//                       {step.title}
//                     </h3>

//                     <p className="text-gray-300 leading-relaxed text-lg px-2 md:px-0">
//                       {step.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Final CTA */}
//             <div className="mt-20 md:mt-28 text-center">
//               <a
//                 href={WHATSAPP_LINK}
//                 className="group inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl text-xl font-bold shadow-2xl shadow-cyan-900/40 hover:shadow-3xl hover:scale-[1.02] transition-all"
//               >
//                 <MessageCircle className="w-9 h-9" />
//                 Ready to Start Repair?
//                 <ArrowRight className="w-8 h-8 group-hover:translate-x-1.5 transition-transform" />
//               </a>
//               <p className="mt-6 text-lg text-gray-400">
//                 Fast response • Dubai-wide free pickup • Transparent pricing
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-black border-t border-gray-900 py-16 px-6">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
//           <div>
//             <h3 className="text-2xl font-bold text-white mb-5">Future Fix</h3>
//             <p className="text-gray-400 leading-relaxed">
//               Professional device repair in Dubai — chip-level fixes, upgrades, and fast turnaround with a repair-first approach.
//             </p>
//           </div>

//           <div>
//             <h4 className="text-lg font-semibold text-white mb-5">Process</h4>
//             <ul className="space-y-3 text-gray-400">
//               <li>Free Diagnosis</li>
//               <li>Secure Pickup</li>
//               <li>Chip-Level Repair</li>
//               <li>Quality Testing</li>
//               <li>Safe Return</li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-lg font-semibold text-white mb-5">Contact</h4>
//             <ul className="space-y-3 text-gray-400">
//               <li className="flex items-start gap-3">
//                 <MapPin className="w-5 h-5 text-cyan-500 mt-1" />
//                 <span>Naif, Deira, Dubai, UAE</span>
//               </li>
//               <li>
//                 <a href={WHATSAPP_LINK} className="flex items-center gap-3 hover:text-cyan-400 transition">
//                   <MessageCircle className="w-5 h-5 text-cyan-500" />
//                   {WHATSAPP_NUMBER}
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-16 pt-10 border-t border-gray-900 text-center text-sm text-gray-500">
//           © {new Date().getFullYear()} Future Fix. All rights reserved.  
//           <span className="mx-3">•</span>
//           Repair Before You Replace
//         </div>
//       </footer>
//     </div>
//   );
// }

'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

// WhatsApp configuration
const WHATSAPP_NUMBER = '+971556166465';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(
  'Hello FutureFix, I would like to understand your repair process and request a consultation.'
)}`;

export default function Process() {
  const stepRefs = useRef([]);

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

    stepRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'Contact our technical team via WhatsApp or phone. Provide device details and describe the issue for preliminary assessment. Our technicians will guide you through the initial diagnostic process.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Device Submission',
      description: 'Arrange device drop-off at our service center in Naif, Deira, or coordinate alternative submission arrangements. Secure handling protocols ensure your device safety throughout the process.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Professional Diagnosis',
      description: 'Comprehensive board-level inspection using advanced diagnostic equipment. Detailed technical assessment identifies all hardware issues, component failures, and repair requirements with complete transparency.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Quote & Approval',
      description: 'Receive detailed technical report with transparent pricing breakdown. Review recommended repairs, timeline estimates, and warranty coverage. Proceed only after your informed approval of all work.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: '05',
      title: 'Expert Repair',
      description: 'Certified technicians perform precision repairs using professional micro-soldering equipment. Component-level restoration, circuit repair, and hardware replacement executed to industry standards.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      number: '06',
      title: 'Quality Testing',
      description: 'Rigorous multi-point testing validates all repairs. Stress testing, thermal monitoring, functionality verification, and burn-in procedures ensure reliability and long-term performance stability.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      number: '07',
      title: 'Device Return',
      description: 'Collect your fully repaired device from our service center. Receive comprehensive documentation including repair details, warranty information, and maintenance recommendations for optimal performance.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    }
  ];

  const guarantees = [
    {
      title: 'Transparent Pricing',
      description: 'No hidden charges. Detailed quote provided before any repair work begins with complete cost breakdown.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Quality Assurance',
      description: 'Premium components and professional workmanship. Extended warranty coverage on all repairs performed.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Expert Technicians',
      description: 'Certified professionals with advanced training in chip-level repair and component-level diagnostics.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: 'Professional Equipment',
      description: 'State-of-the-art diagnostic tools, micro-soldering stations, and precision testing instruments.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
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
              Service Workflow
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-light leading-tight tracking-tight mb-8">
            Our <span className="font-semibold">Repair Process</span>
            <br />
            <span className="text-[#0ea5e9]">Step by Step</span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-12">
            A transparent, professional workflow designed for efficiency, quality, and complete customer satisfaction. 
            Every step carefully managed by certified technical specialists.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0ea5e9] text-white font-medium rounded-md hover:bg-[#0284c7] transition shadow-lg shadow-[#0ea5e9]/20"
            >
              Start Consultation
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

      {/* Process Steps */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 lg:gap-y-20">
            {steps.map((step, i) => (
              <div
                key={i}
                ref={(el) => (stepRefs.current[i] = el)}
                className="relative opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#0ea5e9] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-semibold text-lg">{step.number}</span>
                </div>

                {/* Icon Container */}
                <div className="mb-6 pt-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] rounded-lg flex items-center justify-center text-[#0ea5e9]">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-medium mb-4 text-gray-900">
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

      {/* Service Guarantees */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-xs lg:text-sm font-semibold tracking-wider text-[#0ea5e9] uppercase">
              Our Commitment
            </span>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight mt-4">
              Service <span className="font-semibold">Guarantees</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:border-[#0ea5e9] hover:shadow-xl transition-all"
              >
                <div className="text-[#0ea5e9] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Estimate */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs lg:text-sm font-semibold tracking-wider text-[#0ea5e9] uppercase">
              Service Timeline
            </span>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight mt-4">
              Expected <span className="font-semibold">Turnaround</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#f0f9ff] to-white border border-gray-200 rounded-lg p-8 text-center">
              <div className="text-4xl font-light text-[#0ea5e9] mb-3">1-2 Days</div>
              <h3 className="text-lg font-medium mb-2 text-gray-900">Standard Repairs</h3>
              <p className="text-sm text-gray-600 font-light">
                Component replacement, basic hardware service, standard diagnostics
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#f0f9ff] to-white border border-[#0ea5e9] border-2 rounded-lg p-8 text-center shadow-lg">
              <div className="text-4xl font-light text-[#0ea5e9] mb-3">3-5 Days</div>
              <h3 className="text-lg font-medium mb-2 text-gray-900">Chip-Level Repairs</h3>
              <p className="text-sm text-gray-600 font-light">
                Motherboard repair, micro-soldering, complex circuit restoration
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#f0f9ff] to-white border border-gray-200 rounded-lg p-8 text-center">
              <div className="text-4xl font-light text-[#0ea5e9] mb-3">5-7 Days</div>
              <h3 className="text-lg font-medium mb-2 text-gray-900">Complex Cases</h3>
              <p className="text-sm text-gray-600 font-light">
                Liquid damage restoration, extensive board-level work, parts procurement
              </p>
            </div>
          </div>

          <p className="text-center text-gray-600 font-light mt-12 max-w-3xl mx-auto">
            Timeline estimates are approximate and may vary based on specific repair complexity, 
            parts availability, and diagnostic findings. We provide accurate timeline updates 
            after initial assessment.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-[#0ea5e9] to-[#0284c7]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-light mb-6">
            Ready to <span className="font-semibold">Begin Repair?</span>
          </h2>
          <p className="text-xl font-light text-white/90 mb-10 max-w-2xl mx-auto">
            Contact our technical team to start your professional laptop repair consultation
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
              Call: {WHATSAPP_NUMBER}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs lg:text-sm font-semibold tracking-wider text-[#0ea5e9] uppercase">
              Common Questions
            </span>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight mt-4">
              Process <span className="font-semibold">FAQs</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'How long does the diagnostic process take?',
                a: 'Initial diagnostics typically complete within 24 hours of device submission. Complex cases may require additional time for comprehensive board-level analysis.'
              },
              {
                q: 'Do you provide repair quotes before starting work?',
                a: 'Yes, we provide detailed quotes including all costs before beginning any repair work. No repairs proceed without your explicit approval.'
              },
              {
                q: 'What warranty coverage do you offer?',
                a: 'We provide extended warranty coverage on all repairs performed. Specific warranty terms vary by repair type and are detailed in your service agreement.'
              },
              {
                q: 'Can I track my repair status?',
                a: 'Yes, we provide regular status updates via WhatsApp or phone throughout the repair process, from initial diagnosis through final testing.'
              },
              {
                q: 'What if the repair is not successful?',
                a: 'In rare cases where repair is not feasible, we provide a detailed explanation and return your device with no service charges for unsuccessful repairs.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-8 hover:border-[#0ea5e9] transition-colors">
                <h3 className="text-lg font-medium text-gray-900 mb-3">{item.q}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}