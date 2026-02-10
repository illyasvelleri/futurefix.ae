// // app/about/page.js
// "use client";
// import Header from '../user/components/header'
// import React, { useEffect, useRef } from 'react';
// import { Users, Target, Award, Heart, MapPin, ChevronDown, MessageCircle, ChevronRight, ArrowRight, Clock } from 'lucide-react';

// // WhatsApp from .env with fallback
// const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER || '+971556166465';
// const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(
//     'Hello Future Fix Team, I would like to know more about your company and vision.'
// )}`;

// export default function AboutUsPage() {
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

//     return (
//         <>
//             {/* Inter font — clean, modern, professional (matches your logo typography) */}
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

//                 <section className="min-h-[80vh] flex items-center overflow-hidden bg-white pt-20 relative">
//                     {/* Subtle light grid – adjusted opacity & color for white bg */}
//                     <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
//                         <svg className="w-full h-full">
//                             <defs>
//                                 <pattern id="about-grid-light" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
//                                     <path d="M0,30 L60,30 M30,0 L30,60" stroke="#0B1F3B" strokeWidth="1" fill="none" opacity="0.4" />
//                                 </pattern>
//                             </defs>
//                             <rect width="100%" height="100%" fill="url(#about-grid-light)" />
//                         </svg>
//                     </div>

//                     {/* Soft teal glow – kept but reduced opacity for clean white bg */}
//                     <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00B4D8]/6 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />

//                     <div className="container mx-auto px-6 py-20 relative z-10">
//                         <div className="max-w-5xl mx-auto text-center space-y-10">
//                             {/* Original tag – adjusted colors for white bg */}
//                             <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#0B1F3B]/5 border border-[#0B1F3B]/10 rounded-full text-lg font-semibold text-[#0B1F3B]">
//                                 <Users className="w-6 h-6 text-[#00B4D8]" />
//                                 Who We Are
//                             </div>

//                             {/* Original headline – kept exactly as you had */}
//                             <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-[#0B1F3B]">
//                                 Future Fix
//                                 <br />
//                                 <span className="bg-gradient-to-r from-[#00B4D8] to-[#0096C7] bg-clip-text text-transparent">
//                                     Repair Before You Replace
//                                 </span>
//                             </h1>

//                             {/* Original paragraph – kept exactly */}
//                             <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
//                                 We exist to change how Dubai thinks about broken devices — turning "it's dead" into "it's fixed" through precision engineering, trust, and time-saving service.
//                             </p>

//                             {/* Original CTA – kept exactly */}
//                             <div className="flex flex-wrap justify-center gap-6 mt-12">
//                                 <a
//                                     href={WHATSAPP_LINK}
//                                     className="group inline-flex items-center gap-3 px-10 py-5 bg-[#00B4D8] hover:bg-[#0096C7] text-white font-bold text-lg rounded-2xl shadow-xl shadow-[#00B4D8]/40 hover:shadow-2xl hover:shadow-[#00B4D8]/50 transition-all hover:-translate-y-1"
//                                 >
//                                     <MessageCircle className="w-7 h-7" />
//                                     Talk to the Team
//                                     <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Original scroll indicator – adjusted color for white bg */}
//                     <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 animate-bounce">
//                         <span className="text-sm font-medium">Discover Our Story</span>
//                         <ChevronRight className="w-6 h-6 rotate-90" />
//                     </div>
//                 </section>

//                 {/* Our Mission & Vision */}
//                 <section className="py-24 bg-white">
//                     <div className="container mx-auto px-6">
//                         <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
//                             <div
//                                 ref={(el) => (sectionRefs.current[0] = el)}
//                                 className="opacity-0 translate-y-12 transition-all duration-700 ease-out"
//                             >
//                                 <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0B1F3B] mb-8">
//                                     Our Mission
//                                 </h2>
//                                 <p className="text-xl text-gray-700 leading-relaxed mb-8">
//                                     To help individuals and businesses in Dubai keep their devices working longer — saving money, reducing waste, and eliminating unnecessary replacements through expert chip-level repair and intelligent support.
//                                 </p>
//                                 <p className="text-lg text-gray-600">
//                                     We believe most "dead" laptops and mobiles are just undiagnosed — and with the right skills and tools, they can be brought back to full performance.
//                                 </p>
//                             </div>

//                             <div
//                                 ref={(el) => (sectionRefs.current[1] = el)}
//                                 className="opacity-0 translate-y-12 transition-all duration-700 ease-out"
//                                 style={{ transitionDelay: '150ms' }}
//                             >
//                                 <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0B1F3B] mb-8">
//                                     Our Vision
//                                 </h2>
//                                 <p className="text-xl text-gray-700 leading-relaxed mb-8">
//                                     To become Dubai's most trusted name in device repair — known for precision, transparency, speed, and a genuine repair-first mindset that puts device longevity above quick sales.
//                                 </p>
//                                 <p className="text-lg text-gray-600">
//                                     A future where businesses and people choose repair over replacement — saving time, money, and resources while keeping technology performing at its best.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Why We Exist */}
//                 <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
//                     <div className="container mx-auto px-6">
//                         <div className="text-center mb-16">
//                             <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0B1F3B] mb-6">
//                                 Why Future Fix Exists
//                             </h2>
//                             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                                 Too many devices are thrown away when they could be saved. Too much time is lost traveling for repairs. We exist to fix that.
//                             </p>
//                         </div>

//                         <div className="grid md:grid-cols-3 gap-8">
//                             {[
//                                 {
//                                     icon: Target,
//                                     title: 'Repair-First Mindset',
//                                     description:
//                                         'We diagnose deeply and repair precisely — only replacing parts when absolutely necessary. Saving devices is our priority.',
//                                 },
//                                 {
//                                     icon: Clock,
//                                     title: 'Time Is Money',
//                                     description:
//                                         'In Dubai, downtime costs businesses dearly. We minimize disruption with efficient logistics and fast, reliable service.',
//                                 },
//                                 {
//                                     icon: Heart,
//                                     title: 'Built on Trust',
//                                     description:
//                                         'Transparency, honesty, and quality are non-negotiable. Every repair comes with clear explanations and real care.',
//                                 },
//                             ].map((point, index) => (
//                                 <div
//                                     key={point.title}
//                                     ref={(el) => (sectionRefs.current[index + 2] = el)}
//                                     className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#00B4D8] hover:shadow-xl transition-all opacity-0 translate-y-12"
//                                     style={{ transitionDelay: `${(index + 2) * 100}ms` }}
//                                 >
//                                     <div className="w-16 h-16 bg-[#00B4D8]/10 rounded-xl flex items-center justify-center mb-6">
//                                         <point.icon className="w-8 h-8 text-[#00B4D8]" />
//                                     </div>
//                                     <h3 className="text-2xl font-bold text-[#0B1F3B] mb-4">{point.title}</h3>
//                                     <p className="text-gray-700 leading-relaxed">{point.description}</p>
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
//                         <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
//                             Ready to Work with a Team That Cares?
//                         </h2>
//                         <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-12">
//                             We’re more than a repair shop — we’re your partner in keeping technology alive longer.
//                         </p>

//                         <div className="flex flex-wrap justify-center gap-6">
//                             <a
//                                 href={WHATSAPP_LINK}
//                                 className="group inline-flex items-center gap-4 px-12 py-6 bg-[#00B4D8] hover:bg-[#0096C7] text-white font-bold text-xl rounded-3xl shadow-2xl shadow-[#00B4D8]/40 hover:shadow-3xl hover:shadow-[#00B4D8]/50 transition-all hover:-translate-y-2"
//                             >
//                                 <MessageCircle className="w-9 h-9" />
//                                 Talk to the Future Fix Team
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
//                                     Dubai-based repair specialists focused on precision, trust, and extending device life — because repair is smarter than replace.
//                                 </p>
//                             </div>

//                             <div>
//                                 <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
//                                 <ul className="space-y-3 text-gray-400">
//                                     <li>
//                                         <a href="/" className="hover:text-[#00B4D8] transition-colors">
//                                             Home
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="/services" className="hover:text-[#00B4D8] transition-colors">
//                                             Services
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="/how-it-works" className="hover:text-[#00B4D8] transition-colors">
//                                             How It Works
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="/contact" className="hover:text-[#00B4D8] transition-colors">
//                                             Contact
//                                         </a>
//                                     </li>
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
//                             <p>© 2025 Future Fix. All rights reserved. Repair Before You Replace.</p>
//                         </div>
//                     </div>
//                 </footer>
//             </div>
//         </>
//     );
// }

// app/about/page.js

// app/about/page.js
// NO "use client" here

import AboutContent from '../components/AboutContent';

export const metadata = {
  title: "About Future Fix – Premium Laptop & Device Repair in Dubai",
  description: "Learn about Future Fix – Dubai's trusted name for professional laptop repair, MacBook repair, data recovery, and same-day device fixes. Repair before you replace.",
  keywords: "laptop repair Dubai, MacBook repair Dubai, device repair, same day laptop repair, data recovery Dubai, Future Fix",
  alternates: {
    canonical: "/about",
  },
};


export default function AboutPage() {
  return <AboutContent />;
}
// "use client";

// import React, { useEffect, useRef } from "react";
// import Link from "next/link";
// import { 
//   Users, Target, Award, Heart, MapPin, 
//   MessageCircle, ArrowRight, Clock, ShieldCheck 
// } from "lucide-react";

// // WhatsApp config
// const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+971556166465";
// const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}?text=${encodeURIComponent(
//   "Hello Future Fix Team! I'm interested in your laptop repair services in Dubai."
// )}`;

// export const metadata = {
//   title: "About Future Fix – Premium Laptop & Device Repair in Dubai",
//   description: "Learn about Future Fix – Dubai's trusted name for professional laptop repair, MacBook repair, data recovery, and same-day device fixes. Repair before you replace.",
//   keywords: "laptop repair Dubai, MacBook repair Dubai, device repair, same day laptop repair, data recovery Dubai, Future Fix",
//   alternates: {
//     canonical: "/about",
//   },
// };

// export default function AboutUsPage() {
//   const sectionRefs = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("opacity-100", "translate-y-0");
//             entry.target.classList.remove("opacity-0", "translate-y-12");
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     sectionRefs.current.forEach((ref) => ref && observer.observe(ref));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="min-h-screen bg-white font-['Inter'] antialiased">
//       {/* Floating WhatsApp Button */}
//       <a
//         href={WHATSAPP_LINK}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-6 right-6 z-50 group"
//         aria-label="Contact Future Fix on WhatsApp"
//       >
//         <div className="relative">
//           <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center shadow-2xl shadow-cyan-500/30 group-hover:scale-110 transition-transform">
//             <MessageCircle className="w-8 h-8 text-white" />
//           </div>
//           <div className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
//             Chat
//           </div>
//         </div>
//       </a>

//       {/* Hero Section */}
//       <section className="relative pt-20 pb-24 md:pb-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
//         {/* Subtle background pattern */}
//         <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
//           <div
//             className="w-full h-full"
//             style={{
//               backgroundImage: `
//                 radial-gradient(circle at 1px 1px, #0ea5e9 1px, transparent 0),
//                 radial-gradient(circle at 60px 60px, #0ea5e9 1px, transparent 0)
//               `,
//               backgroundSize: "60px 60px",
//             }}
//           />
//         </div>

//         <div className="container mx-auto px-6 relative z-10">
//           <div className="max-w-4xl mx-auto text-center space-y-10">
//             <div className="inline-flex items-center gap-3 px-6 py-3 bg-cyan-50 border border-cyan-100 rounded-full text-lg font-semibold text-cyan-700">
//               <ShieldCheck className="w-6 h-6" />
//               Trusted Device Repair in Dubai
//             </div>

//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
//               Future Fix
//               <br />
//               <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
//                 Repair Before You Replace
//               </span>
//             </h1>

//             <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
//               Professional laptop repair, MacBook repair, data recovery and hardware services across Dubai — fast, transparent and built to last.
//             </p>

//             <div className="flex flex-wrap justify-center gap-5 mt-10">
//               <Link
//                 href={WHATSAPP_LINK}
//                 target="_blank"
//                 className="group inline-flex items-center gap-3 px-10 py-5 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold text-lg rounded-2xl shadow-lg shadow-cyan-200/50 hover:shadow-xl transition-all hover:-translate-y-1"
//               >
//                 <MessageCircle className="w-7 h-7" />
//                 Contact Us on WhatsApp
//                 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-20 md:py-28 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
//             <div
//               ref={(el) => (sectionRefs.current[0] = el)}
//               className="opacity-0 translate-y-12 transition-all duration-800 ease-out space-y-6"
//             >
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Mission</h2>
//               <p className="text-xl text-gray-700 leading-relaxed">
//                 To deliver expert laptop repair and device recovery services in Dubai that extend the life of your technology — saving you money, time and unnecessary waste.
//               </p>
//               <p className="text-lg text-gray-600">
//                 We specialize in chip-level diagnostics, motherboard repair, liquid damage recovery, and same-day solutions — because most devices can be saved.
//               </p>
//             </div>

//             <div
//               ref={(el) => (sectionRefs.current[1] = el)}
//               className="opacity-0 translate-y-12 transition-all duration-800 ease-out space-y-6 lg:pt-12"
//               style={{ transitionDelay: "150ms" }}
//             >
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Vision</h2>
//               <p className="text-xl text-gray-700 leading-relaxed">
//                 To become the most respected name for professional device repair in Dubai — known for honesty, precision, speed, and a genuine{" "}
//                 <strong>repair-first</strong> philosophy.
//               </p>
//               <p className="text-lg text-gray-600">
//                 A city where individuals and companies choose repair over replacement — protecting both their budget and the environment.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Future Fix */}
//       <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
//               Why Businesses & Individuals Trust Future Fix
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               We’re not just another repair shop — we solve real problems with real expertise.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Target,
//                 title: "Deep Technical Expertise",
//                 description:
//                   "Chip-level repairs, BGA reballing, micro-soldering — we fix what others replace.",
//               },
//               {
//                 icon: Clock,
//                 title: "Fast Turnaround in Dubai",
//                 description:
//                   "Same-day & next-day service available. Free pickup across Dubai & quick diagnostics.",
//               },
//               {
//                 icon: Heart,
//                 title: "100% Transparent Process",
//                 description:
//                   "Clear quotes, no hidden fees, detailed diagnosis reports, lifetime warranty on many repairs.",
//               },
//             ].map((item, i) => (
//               <div
//                 key={item.title}
//                 ref={(el) => (sectionRefs.current[i + 2] = el)}
//                 className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 opacity-0 translate-y-12"
//                 style={{ transitionDelay: `${i * 120}ms` }}
//               >
//                 <div className="w-16 h-16 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-100 transition-colors">
//                   <item.icon className="w-8 h-8 text-cyan-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
//                 <p className="text-gray-700 leading-relaxed">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="relative py-24 md:py-32 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 text-white overflow-hidden">
//         <div className="absolute inset-0 opacity-[0.07]">
//           <div
//             style={{
//               backgroundImage: "radial-gradient(circle, #0ea5e9 1px, transparent 1px)",
//               backgroundSize: "50px 50px",
//             }}
//             className="w-full h-full"
//           />
//         </div>

//         <div className="container mx-auto px-6 text-center relative z-10">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             Ready to Fix — Not Replace?
//           </h2>
//           <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
//             Get in touch with Dubai’s most trusted laptop and device repair team today.
//           </p>

//           <Link
//             href={WHATSAPP_LINK}
//             target="_blank"
//             className="group inline-flex items-center gap-4 px-12 py-6 bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xl rounded-3xl shadow-2xl shadow-cyan-900/40 hover:shadow-3xl transition-all hover:-translate-y-1.5"
//           >
//             <MessageCircle className="w-9 h-9" />
//             Message Future Fix on WhatsApp
//             <ArrowRight className="w-8 h-8 group-hover:translate-x-1.5 transition-transform" />
//           </Link>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-950 text-gray-400 py-16 border-t border-gray-800">
//         <div className="container mx-auto px-6">
//           <div className="grid md:grid-cols-3 gap-12">
//             <div>
//               <h3 className="text-2xl font-bold text-white mb-5">Future Fix</h3>
//               <p className="leading-relaxed">
//                 Premium laptop repair, MacBook service, data recovery and hardware solutions in Dubai.  
//                 <strong className="text-cyan-400"> Repair before you replace.</strong>
//               </p>
//             </div>

//             <div>
//               <h4 className="text-lg font-semibold text-white mb-5">Services</h4>
//               <ul className="space-y-3">
//                 <li><Link href="/services" className="hover:text-cyan-400 transition">Laptop Repair Dubai</Link></li>
//                 <li><Link href="/services" className="hover:text-cyan-400 transition">MacBook Repair</Link></li>
//                 <li><Link href="/services" className="hover:text-cyan-400 transition">Data Recovery</Link></li>
//                 <li><Link href="/services" className="hover:text-cyan-400 transition">Same-Day Service</Link></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-lg font-semibold text-white mb-5">Contact</h4>
//               <ul className="space-y-3">
//                 <li className="flex items-start gap-3">
//                   <MapPin className="w-5 h-5 text-cyan-500 mt-1" />
//                   <span>Naif, Deira, Dubai, UAE</span>
//                 </li>
//                 <li>
//                   <a
//                     href={WHATSAPP_LINK}
//                     className="flex items-center gap-3 hover:text-cyan-400 transition"
//                   >
//                     <MessageCircle className="w-5 h-5 text-cyan-500" />
//                     {WHATSAPP_NUMBER}
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="mt-16 pt-10 border-t border-gray-800 text-center text-sm">
//             © {new Date().getFullYear()} Future Fix. All rights reserved.  
//             <span className="mx-3">•</span>
//             Repair Before You Replace
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }