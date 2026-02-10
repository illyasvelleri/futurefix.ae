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


// app/how-it-works/page.js
'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Activity,
  Package,
  Cpu,
  Shield,
  CheckCircle2,
  MapPin,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

// WhatsApp config
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+971556166465';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(
  'Hello Future Fix, I would like to understand your repair process and get a quote.'
)}`;

export default function HowItWorks() {
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.2 }
    );

    stepRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Initial Diagnosis',
      description:
        'Send photos or describe the issue via WhatsApp. Our engineers perform detailed chip-level analysis to identify the exact fault — no guesswork.',
      icon: Activity,
    },
    {
      number: '02',
      title: 'Fast Pickup in Dubai',
      description:
        'We arrange secure, tracked pickup from your location anywhere in Dubai at a time that suits you.',
      icon: Package,
    },
    {
      number: '03',
      title: 'Precision Chip-Level Repair',
      description:
        'Your device is repaired in our lab using micro-soldering, BGA rework, and component-level fixes — saving original parts whenever possible.',
      icon: Cpu,
    },
    {
      number: '04',
      title: 'Quality Assurance & Testing',
      description:
        'Multi-point testing: stress tests, thermal validation, full functionality check, and burn-in to ensure long-term reliability.',
      icon: Shield,
    },
    {
      number: '05',
      title: 'Secure Return Delivery',
      description:
        'Your repaired device is returned quickly and safely — same trusted logistics used for corporate clients.',
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0e17] text-gray-100 font-sans antialiased">
      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Contact Future Fix on WhatsApp"
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

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 md:pb-40 overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-600/20 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            <div className="inline-flex items-center gap-3 px-7 py-3.5 bg-cyan-950/50 border border-cyan-800/40 rounded-full text-lg font-semibold text-cyan-400">
              <Activity className="w-6 h-6" />
              Our Repair Process
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              How We
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Restore Your Device
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              A clear, efficient, transparent process — from first message to fully repaired device, built for speed and reliability in Dubai.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <a
                href={WHATSAPP_LINK}
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl text-lg font-semibold shadow-xl shadow-cyan-900/30 hover:shadow-2xl hover:scale-[1.02] transition-all"
              >
                <MessageCircle className="w-7 h-7" />
                Start Your Repair Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Horizontal line on desktop */}
            <div className="hidden lg:block relative h-1.5 bg-gradient-to-r from-cyan-900 via-cyan-700 to-cyan-900 rounded-full my-16" />

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 relative">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  ref={(el) => (stepRefs.current[index] = el)}
                  className="relative group opacity-0 translate-y-10 transition-all duration-700 ease-out"
                  style={{ transitionDelay: `${index * 140}ms` }}
                >
                  {/* Connecting line (desktop only) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-20 -right-3 w-[calc(100%+1.5rem)] h-0.5 bg-gradient-to-r from-cyan-800 to-transparent z-0" />
                  )}

                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Step number + icon circle */}
                    <div className="relative w-28 h-28 mb-8">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-700 to-blue-800 shadow-2xl shadow-cyan-900/40 group-hover:shadow-cyan-700/60 transition-all group-hover:scale-110" />
                      <div className="absolute inset-2 rounded-full bg-[#0a0e17] flex items-center justify-center">
                        <step.icon className="w-12 h-12 text-cyan-400" />
                      </div>
                      <div className="absolute -top-4 -right-4 w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center text-white font-extrabold text-lg shadow-lg border-2 border-[#0a0e17]">
                        {step.number}
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 group-hover:text-cyan-300 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed text-lg px-2 md:px-0">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Final CTA */}
            <div className="mt-20 md:mt-28 text-center">
              <a
                href={WHATSAPP_LINK}
                className="group inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl text-xl font-bold shadow-2xl shadow-cyan-900/40 hover:shadow-3xl hover:scale-[1.02] transition-all"
              >
                <MessageCircle className="w-9 h-9" />
                Ready to Start Repair?
                <ArrowRight className="w-8 h-8 group-hover:translate-x-1.5 transition-transform" />
              </a>
              <p className="mt-6 text-lg text-gray-400">
                Fast response • Dubai-wide fast pickup • Transparent pricing
              </p>
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
              Professional device repair in Dubai — chip-level fixes, upgrades, and fast turnaround with a repair-first approach.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-5">Process</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Fast Diagnosis</li>
              <li>Secure Pickup</li>
              <li>Chip-Level Repair</li>
              <li>Quality Testing</li>
              <li>Safe Return</li>
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