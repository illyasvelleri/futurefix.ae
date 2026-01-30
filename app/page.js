// "use client";

// import Header from './user/components/header'
// import React, { useState, useRef, useEffect } from 'react';
// import {
//   Cpu,
//   Zap,
//   Shield,
//   ArrowRight,
//   CheckCircle2,
//   TrendingUp,
//   Clock,
//   Users,
//   Package,
//   Smartphone,
//   Monitor,
//   Server,
//   ChevronRight,
//   MapPin,
//   MessageCircle,
//   Phone,
//   AlertCircle,
//   Activity,
//   Layers,
//   GitBranch,
//   BarChart3,
//   Sparkles,
//   ChevronDown,
// } from 'lucide-react';
// import Link from 'next/link';

// // ────────────────────────────────────────────────
// // WhatsApp configuration from environment variable
// const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER || '+971556166465';
// const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(
//   'Hello, I would like to discuss device repair.'
// )}`;

// // Three.js imports
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, MeshWobbleMaterial, Environment, ContactShadows, Float } from '@react-three/drei';
// import * as THREE from 'three';

// export default function FutureFixImmersive() {
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [activeSection, setActiveSection] = useState(0);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleScroll = () => {
//       const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
//       const progress = (window.scrollY / totalScroll) * 100;
//       setScrollProgress(progress);

//       const section = Math.floor((window.scrollY / window.innerHeight) * 8);
//       setActiveSection(section);
//     };

//     const handleMouseMove = (e) => {
//       setMousePos({
//         x: (e.clientX / window.innerWidth - 0.5) * 20,
//         y: (e.clientY / window.innerHeight - 0.5) * 20,
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   function HeroLaptopCore() {
//     const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//     const containerRef = useRef(null);

//     useEffect(() => {
//       const handleMouseMove = (e) => {
//         if (!containerRef.current) return;
//         const rect = containerRef.current.getBoundingClientRect();
//         const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
//         const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
//         setMousePos({ x, y });
//       };

//       window.addEventListener("mousemove", handleMouseMove);
//       return () => window.removeEventListener("mousemove", handleMouseMove);
//     }, []);

//     return (
//       <section
//         className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B1F3B] text-white"
//         ref={containerRef}
//       >
//         {/* Background circuit grid */}
//         <div className="absolute inset-0 opacity-[0.035]">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `
//               linear-gradient(0deg, transparent 24%, rgba(0,180,216,0.4) 25%, rgba(0,180,216,0.4) 26%, transparent 27%, transparent 74%, rgba(0,180,216,0.4) 75%, rgba(0,180,216,0.4) 76%, transparent 77%, transparent),
//               linear-gradient(90deg, transparent 24%, rgba(0,180,216,0.4) 25%, rgba(0,180,216,0.4) 26%, transparent 27%, transparent 74%, rgba(0,180,216,0.4) 75%, rgba(0,180,216,0.4) 76%, transparent 77%, transparent)
//             `,
//               backgroundSize: "80px 80px",
//             }}
//           />
//         </div>

//         {/* Floating orbs */}
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute -left-40 top-20 w-[800px] h-[800px] bg-gradient-to-br from-cyan-600/10 via-cyan-500/5 to-transparent rounded-full blur-3xl animate-[floatOrb_32s_ease-in-out_infinite]" />
//           <div className="absolute -right-60 bottom-40 w-[900px] h-[900px] bg-gradient-to-tl from-blue-600/8 via-cyan-400/5 to-transparent rounded-full blur-3xl animate-[floatOrb_40s_ease-in-out_infinite]" style={{ animationDelay: "6s" }} />
//         </div>

//         <div className="container relative z-10 mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-32 max-w-7xl">
//           <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
//             {/* Left – Copy & CTA */}
//             <div className="space-y-10 lg:space-y-14">
//               {/* Pill badge */}
//               <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-sm font-medium text-cyan-300 shadow-inner">
//                 <Activity className="w-4 h-4 animate-pulse" />
//                 <span>Enterprise-Grade Device Revival</span>
//               </div>

//               {/* Headline */}
//               <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-black leading-[0.88] tracking-[-0.04em] text-white">
//                 Most “Dead” Laptops
//                 <br className="hidden sm:block" />
//                 <span className="relative inline-block mt-3 lg:mt-6">
//                   <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent animate-[textGlow_5s_ease-in-out_infinite]">
//                     Are Just
//                   </span>
//                   <br className="sm:hidden" />
//                   <span className="relative z-10 bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent animate-[textGlow_5.5s_ease-in-out_infinite] delay-300">
//                     Undiagnosed.
//                   </span>
//                   <div className="absolute -bottom-3 lg:-bottom-5 left-0 right-0 h-2 lg:h-3 bg-gradient-to-r from-cyan-500/40 to-blue-500/30 blur-md rounded-full" />
//                 </span>
//               </h1>

//               {/* Paragraph */}
//               <p className="text-xl sm:text-2xl lg:text-2.5xl font-light text-gray-300/90 leading-relaxed max-w-3xl">
//                 Future Fix revives enterprise & personal devices through{" "}
//                 <span className="font-semibold text-cyan-300">chip-level engineering</span>, rapid diagnostics, and full lifecycle management — delivered with complimentary pickup and return across Dubai.
//               </p>

//               {/* CTAs */}
//               <div className="flex flex-col sm:flex-row gap-5 lg:gap-6 pt-4">
//                 <a
//                   href={WHATSAPP_LINK}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group flex items-center justify-center gap-3 px-10 py-5 lg:py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xl lg:text-2xl rounded-2xl shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-400/50 transition-all duration-500 hover:-translate-y-1.5 active:scale-95"
//                 >
//                   <MessageCircle className="w-6 h-6" />
//                   WhatsApp Support
//                   <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
//                 </a>

//                 <a
//                   href="/how-it-works"
//                   className="group flex items-center justify-center gap-3 px-10 py-5 lg:py-6 bg-white/5 backdrop-blur-xl border border-white/15 hover:border-cyan-400/60 text-white font-medium text-xl lg:text-2xl rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20"
//                 >
//                   See How It Works
//                   <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
//                 </a>
//               </div>
//             </div>

//             {/* Right – 3D Tilted Visualization */}
//             <div
//               className="relative perspective-[1200px] hidden lg:block"
//               style={{
//                 transform: `perspective(1200px) rotateY(${mousePos.x * 18}deg) rotateX(${-mousePos.y * 18}deg)`,
//                 transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
//               }}
//             >
//               <div className="relative w-full aspect-square max-w-[620px] mx-auto">
//                 {/* Outer glow */}
//                 <div
//                   className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-600/15 via-blue-600/10 to-transparent blur-3xl animate-pulse"
//                   style={{ animationDuration: "7s" }}
//                 />

//                 {/* Main glass card */}
//                 <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0B1F3B] to-[#0d2847] border border-cyan-500/20 shadow-2xl overflow-hidden backdrop-blur-xl">
//                   {/* Circuit SVG */}
//                   <svg className="absolute inset-0 w-full h-full opacity-10">
//                     <defs>
//                       <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
//                         <path d="M20 20 L50 20 L50 50 M80 80 L80 50 L50 50" stroke="#00B4D8" strokeWidth="1.5" fill="none" />
//                         <circle cx="50" cy="50" r="5" fill="#00B4D8" opacity="0.6" />
//                         <circle cx="20" cy="80" r="4" fill="#00B4D8" opacity="0.4" />
//                       </pattern>
//                     </defs>
//                     <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
//                   </svg>

//                   {/* Central core */}
//                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//                     <div className="relative">
//                       {[0, 1, 2, 3].map((i) => (
//                         <div
//                           key={i}
//                           className="absolute inset-0 rounded-full border border-cyan-400/30 animate-ping"
//                           style={{
//                             animationDuration: "4s",
//                             animationDelay: `${i * 0.6}s`,
//                             width: `${140 + i * 60}px`,
//                             height: `${140 + i * 60}px`,
//                           }}
//                         />
//                       ))}

//                       <div className="relative w-40 h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-3xl shadow-2xl shadow-cyan-600/50 flex items-center justify-center animate-pulse-micro">
//                         <Cpu className="w-20 h-20 lg:w-24 lg:h-24 text-white" />

//                         {["top-left", "top-right", "bottom-left", "bottom-right"].map((pos) => (
//                           <div
//                             key={pos}
//                             className={`absolute w-4 h-4 bg-cyan-300 rounded-full shadow-lg shadow-cyan-400/40 ${pos}`}
//                             style={{
//                               top: pos.includes("top") ? "-8px" : "auto",
//                               bottom: pos.includes("bottom") ? "-8px" : "auto",
//                               left: pos.includes("left") ? "-8px" : "auto",
//                               right: pos.includes("right") ? "-8px" : "auto",
//                             }}
//                           />
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Diagnostic labels */}
//                   {[
//                     { label: "CPU", status: "OK", pos: "top-16 left-16" },
//                     { label: "POWER IC", status: "FAULT", pos: "bottom-20 left-20" },
//                     { label: "GPU", status: "OK", pos: "top-20 right-20" },
//                     { label: "RAM", status: "OK", pos: "bottom-16 right-16" },
//                   ].map((item, i) => (
//                     <div
//                       key={i}
//                       className={`absolute ${item.pos} glass px-5 py-3 rounded-xl border ${item.status === "FAULT" ? "border-red-400/60 bg-red-950/30" : "border-cyan-400/50 bg-cyan-950/20"
//                         } backdrop-blur-md shadow-lg`}
//                     >
//                       <div className="flex items-center gap-3">
//                         <div className={`w-3 h-3 rounded-full ${item.status === "FAULT" ? "bg-red-500" : "bg-green-400"} animate-ping`} />
//                         <span className="text-sm lg:text-base font-mono font-semibold">{item.label}</span>
//                       </div>
//                     </div>
//                   ))}

//                   {/* Data flow lines */}
//                   <svg className="absolute inset-0 w-full h-full pointer-events-none">
//                     <defs>
//                       <linearGradient id="flow" x1="0%" y1="0%" x2="100%" y2="0%">
//                         <stop offset="0%" stopColor="#00B4D8" stopOpacity="0" />
//                         <stop offset="50%" stopColor="#00B4D8" stopOpacity="0.7" />
//                         <stop offset="100%" stopColor="#00B4D8" stopOpacity="0" />
//                       </linearGradient>
//                     </defs>
//                     <path d="M 50% 50% L 10% 10%" stroke="url(#flow)" strokeWidth="2" fill="none" className="animate-pulse" />
//                     <path d="M 50% 50% L 90% 10%" stroke="url(#flow)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: "0.8s" }} />
//                     <path d="M 50% 50% L 10% 90%" stroke="url(#flow)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: "1.6s" }} />
//                   </svg>
//                 </div>

//                 {/* Red pings */}
//                 {[
//                   { top: "18%", left: "82%", delay: "0s" },
//                   { top: "75%", left: "12%", delay: "1.2s" },
//                   { top: "82%", left: "78%", delay: "2.4s" },
//                 ].map((p, i) => (
//                   <div
//                     key={i}
//                     className="absolute w-4 h-4 bg-red-500 rounded-full animate-ping shadow-lg shadow-red-600/40"
//                     style={{ top: p.top, left: p.left, animationDelay: p.delay }}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Scroll prompt */}
//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-cyan-300/70 animate-bounce">
//           <span className="text-base font-medium tracking-wider uppercase">Discover More</span>
//           <ChevronDown className="w-7 h-7" />
//         </div>
//       </section>
//     );
//   }

//   const LaptopXray = () => (
//     <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white py-20 overflow-hidden">
//       <div className="absolute inset-0 opacity-[0.02]">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: 'radial-gradient(circle, #0B1F3B 1px, transparent 1px)',
//             backgroundSize: '40px 40px',
//           }}
//         />
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <div className="space-y-6">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00B4D8]/10 border border-[#00B4D8]/20 rounded-full text-sm font-semibold text-[#00B4D8]">
//               <Layers className="w-4 h-4" />
//               Chip-Level Diagnostics
//             </div>

//             <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1F3B] leading-tight">
//               We See What Others Miss
//             </h2>

//             <p className="text-xl text-gray-600 leading-relaxed">
//               Most repair shops diagnose at component level. Future Fix engineers analyze at{' '}
//               <span className="font-semibold text-[#0B1F3B]">micro-chip level</span> — identifying the exact fault point in your device's circuitry.
//             </p>

//             <div className="space-y-4">
//               {[
//                 { title: 'Motherboard Analysis', desc: 'Power delivery, voltage regulation, signal integrity' },
//                 { title: 'Chip-Level Fault Detection', desc: 'Capacitors, resistors, ICs, and micro-components' },
//                 { title: 'Thermal Imaging', desc: 'Heat distribution and component stress analysis' },
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="flex gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-[#00B4D8]/50 hover:shadow-lg transition-all group"
//                 >
//                   <div className="w-10 h-10 rounded-lg bg-[#00B4D8]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00B4D8]/20 transition-colors">
//                     <CheckCircle2 className="w-5 h-5 text-[#00B4D8]" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-[#0B1F3B] mb-1">{item.title}</h4>
//                     <p className="text-sm text-gray-600">{item.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="relative">
//             <div className="relative w-full aspect-[4/3]">
//               <div className="absolute inset-0 bg-[#0B1F3B] rounded-2xl overflow-hidden shadow-2xl">
//                 <div className="absolute inset-8">
//                   <svg className="absolute inset-0 w-full h-full opacity-30">
//                     {Array.from({ length: 20 }).map((_, i) => (
//                       <line
//                         key={i}
//                         x1={`${Math.random() * 100}%`}
//                         y1={`${Math.random() * 100}%`}
//                         x2={`${Math.random() * 100}%`}
//                         y2={`${Math.random() * 100}%`}
//                         stroke="#00B4D8"
//                         strokeWidth="1"
//                       />
//                     ))}
//                   </svg>

//                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-[#00B4D8] rounded-xl bg-[#00B4D8]/10 flex items-center justify-center backdrop-blur-sm">
//                     <Cpu className="w-16 h-16 text-[#00B4D8]" />
//                     <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
//                       <AlertCircle className="w-4 h-4 text-white" />
//                     </div>
//                   </div>

//                   <div className="absolute inset-0 overflow-hidden">
//                     <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-[#00B4D8] to-transparent animate-scan" />
//                   </div>

//                   {[
//                     { x: '20%', y: '30%' },
//                     { x: '70%', y: '25%' },
//                     { x: '80%', y: '70%' },
//                     { x: '25%', y: '75%' },
//                   ].map((pos, i) => (
//                     <div
//                       key={i}
//                       className="absolute w-4 h-4 border-2 border-[#00B4D8] rounded-full animate-ping"
//                       style={{ left: pos.x, top: pos.y, animationDelay: `${i * 0.3}s` }}
//                     >
//                       <div className="absolute inset-0 bg-[#00B4D8] rounded-full" />
//                     </div>
//                   ))}
//                 </div>

//                 <div className="absolute bottom-4 left-4 right-4 bg-[#0B1F3B]/80 backdrop-blur-sm border border-[#00B4D8]/30 rounded-lg p-4">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <div className="text-xs text-gray-400 font-mono mb-1">FAULT DETECTED</div>
//                       <div className="text-sm text-white font-semibold">Power IC - U7500</div>
//                     </div>
//                     <div className="px-3 py-1 bg-red-500/20 border border-red-500 rounded text-xs text-red-400 font-mono">
//                       CRITICAL
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute -inset-4 bg-gradient-to-r from-[#00B4D8]/20 to-[#0077B6]/20 rounded-3xl blur-2xl -z-10" />
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes scan {
//           0% { top: 0; }
//           100% { top: 100%; }
//         }
//         .animate-scan {
//           animation: scan 3s linear infinite;
//         }
//       `}</style>
//     </section>
//   );

//   const EngineeringDashboard = () => (
//     <section className="relative py-24 bg-[#0B1F3B] overflow-hidden">
//       <div className="absolute inset-0 opacity-5">
//         <svg className="w-full h-full">
//           <defs>
//             <pattern id="dashboard-circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
//               <path d="M20,20 L50,20 L50,50 M80,80 L80,100 L100,100" stroke="#00B4D8" fill="none" strokeWidth="2" />
//               <circle cx="50" cy="50" r="5" fill="#00B4D8" />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#dashboard-circuit)" />
//         </svg>
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00B4D8]/10 border border-[#00B4D8]/20 rounded-full text-sm font-semibold text-[#00B4D8] mb-6">
//             <BarChart3 className="w-4 h-4" />
//             Enterprise Performance
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Engineering at Scale</h2>
//           <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//             Real-time insights into our device engineering ecosystem across Dubai
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//           {[
//             { icon: Package, value: '3,000+', label: 'Devices Repaired', trend: '+24%' },
//             { icon: Users, value: '120+', label: 'Business Clients', trend: '+18%' },
//             { icon: TrendingUp, value: '90%', label: 'Save Rate', trend: '+5%' },
//             { icon: Clock, value: '24-72h', label: 'Avg Turnaround', trend: '-12%' },
//           ].map((metric, i) => {
//             const Icon = metric.icon;
//             return (
//               <div
//                 key={i}
//                 className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
//               >
//                 <div className="flex items-start justify-between mb-4">
//                   <div className="w-12 h-12 bg-[#00B4D8]/20 rounded-lg flex items-center justify-center group-hover:bg-[#00B4D8]/30 transition-colors">
//                     <Icon className="w-6 h-6 text-[#00B4D8]" />
//                   </div>
//                   <span className="text-xs text-green-400 font-semibold bg-green-400/10 px-2 py-1 rounded">
//                     {metric.trend}
//                   </span>
//                 </div>
//                 <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
//                 <div className="text-sm text-gray-400">{metric.label}</div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
//           <div className="flex items-center justify-between mb-6">
//             <div>
//               <h3 className="text-xl font-bold text-white mb-1">Device Network Status</h3>
//               <p className="text-sm text-gray-400">Live repair pipeline monitoring</p>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//               <span className="text-sm text-green-400 font-semibold">OPERATIONAL</span>
//             </div>
//           </div>

//           <div className="relative h-48 flex items-end gap-2">
//             {Array.from({ length: 24 }).map((_, i) => {
//               const height = 30 + Math.random() * 70;
//               return (
//                 <div
//                   key={i}
//                   className="flex-1 bg-gradient-to-t from-[#00B4D8] to-[#0077B6] rounded-t transition-all hover:opacity-80 cursor-pointer"
//                   style={{
//                     height: `${height}%`,
//                     animationDelay: `${i * 0.05}s`,
//                   }}
//                 />
//               );
//             })}
//           </div>

//           <div className="flex justify-between mt-4 text-xs text-gray-500">
//             <span>00:00</span>
//             <span>06:00</span>
//             <span>12:00</span>
//             <span>18:00</span>
//             <span>24:00</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );

//   const ReplaceVsRepair = () => (
//     <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
//       <div className="container mx-auto px-6 py-20 relative z-10 max-w-6xl">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1F3B] mb-4">
//             The Hidden Cost of Replacement
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Most devices are replaced without understanding the real problem. Smart businesses choose precision repair.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8">
//           <div className="relative group">
//             <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 to-gray-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//             <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-10 border-2 border-gray-300 shadow-lg transition-all duration-400 group-hover:shadow-xl group-hover:border-gray-400">
//               <div className="flex items-center gap-4 mb-8">
//                 <div className="w-14 h-14 bg-gray-300 rounded-2xl flex items-center justify-center flex-shrink-0">
//                   <AlertCircle className="w-7 h-7 text-gray-700" />
//                 </div>
//                 <h3 className="text-3xl font-bold text-gray-800">Replace</h3>
//               </div>

//               <div className="space-y-6">
//                 {[
//                   { label: 'Procurement Complexity', value: 'High' },
//                   { label: 'Operational Disruption', value: 'Extended' },
//                   { label: 'Data Transition Risk', value: 'Moderate to High' },
//                   { label: 'Productivity Impact', value: 'Significant' },
//                 ].map((item, i) => (
//                   <div
//                     key={i}
//                     className="flex justify-between items-center py-3 px-4 bg-white/60 rounded-xl border border-gray-200"
//                   >
//                     <span className="text-gray-700 font-medium">{item.label}</span>
//                     <span className="font-semibold text-gray-900">{item.value}</span>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-10 p-5 bg-red-50/80 border border-red-200 rounded-2xl text-center">
//                 <div className="text-sm text-red-700 font-semibold mb-2 uppercase tracking-wide">Overall Impact</div>
//                 <p className="text-lg font-medium text-red-800">
//                   Replacement introduces multiple layers of cost, risk, and downtime.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="relative group">
//             <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/20 to-[#0077B6]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//             <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 border-2 border-[#00B4D8] shadow-lg transition-all duration-400 group-hover:shadow-2xl group-hover:border-[#0099bb] group-hover:scale-[1.02]">
//               <div className="flex items-center gap-4 mb-8">
//                 <div className="w-14 h-14 bg-[#00B4D8] rounded-2xl flex items-center justify-center flex-shrink-0">
//                   <Sparkles className="w-7 h-7 text-white" />
//                 </div>
//                 <h3 className="text-3xl font-bold text-[#0B1F3B]">Repair</h3>
//               </div>

//               <div className="space-y-6">
//                 {[
//                   { label: 'Problem Isolation', value: 'Precise' },
//                   { label: 'Operational Continuity', value: 'Maintained' },
//                   { label: 'Data Integrity', value: 'Preserved' },
//                   { label: 'Turnaround Efficiency', value: 'Optimized' },
//                 ].map((item, i) => (
//                   <div
//                     key={i}
//                     className="flex justify-between items-center py-3 px-4 bg-white/80 rounded-xl border border-[#00B4D8]/20"
//                   >
//                     <span className="text-gray-700 font-medium">{item.label}</span>
//                     <span className="font-semibold text-[#0B1F3B]">{item.value}</span>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-10 p-5 bg-[#00B4D8]/10 border border-[#00B4D8]/30 rounded-2xl text-center">
//                 <div className="text-sm text-[#00B4D8] font-semibold mb-2 uppercase tracking-wide">Overall Impact</div>
//                 <p className="text-lg font-medium text-[#0B1F3B]">
//                   Repair focuses on solving the exact issue with minimal disruption and maximum efficiency.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-16 text-center">
//           <Link href="/how-it-works">
//             <div className="inline-flex items-center gap-3 px-10 py-5 bg-[#00B4D8] hover:bg-[#0099bb] text-white font-semibold rounded-2xl shadow-lg shadow-[#00B4D8]/30 hover:shadow-xl transition-all hover:-translate-y-1">
//               Discover the smarter approach
//               <ArrowRight className="w-5 h-5" />
//             </div>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );

//   const RepairPipeline = () => (
//     <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1F3B] mb-4">How Future Fix Works</h2>
//           <p className="text-xl text-gray-600">No queues. No guesswork. No unnecessary replacement.</p>
//         </div>

//         <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
//           {[
//             { step: '01', title: 'Initial Diagnosis', desc: 'AI-assisted chip analysis via WhatsApp', icon: Activity },
//             { step: '02', title: 'Device Pickup', desc: 'Scheduled at your convenience in Dubai', icon: Package },
//             { step: '03', title: 'Chip Repair', desc: 'Micro-component engineering in lab', icon: Cpu },
//             { step: '04', title: 'Quality Test', desc: '72-point inspection & validation', icon: Shield },
//             { step: '05', title: 'Delivery', desc: 'Secure return to your location', icon: CheckCircle2 },
//           ].map((process, i) => {
//             const Icon = process.icon;
//             return (
//               <React.Fragment key={i}>
//                 <div className="flex-1 text-center group">
//                   <div className="relative mx-auto w-24 h-24 mb-4">
//                     <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8] to-[#0077B6] rounded-2xl shadow-lg shadow-[#00B4D8]/30 group-hover:scale-110 transition-transform flex items-center justify-center">
//                       <Icon className="w-10 h-10 text-white" />
//                     </div>
//                     <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#0B1F3B] rounded-full flex items-center justify-center text-white text-sm font-bold">
//                       {process.step}
//                     </div>
//                   </div>
//                   <h4 className="text-lg font-bold text-[#0B1F3B] mb-2">{process.title}</h4>
//                   <p className="text-gray-600 text-sm">{process.desc}</p>
//                 </div>
//                 {i < 4 && <ChevronRight className="hidden lg:block w-6 h-6 text-[#00B4D8]" />}
//               </React.Fragment>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );

//   const UserEcosystem = () => (
//     <section className="relative py-24 bg-white overflow-hidden">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1F3B] mb-4">
//             Complete Device Engineering{' '}
//             <span className="bg-gradient-to-r from-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">Ecosystem</span>
//           </h2>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {[
//             {
//               category: 'For Individuals',
//               icon: Smartphone,
//               color: 'from-cyan-50 to-blue-50',
//               border: 'border-cyan-200',
//               items: ['Laptop & Mobile Diagnostics', 'Chip-Level Repair', 'Hardware Replacement', 'Software Optimization'],
//             },
//             {
//               category: 'For Businesses',
//               icon: Monitor,
//               color: 'from-blue-50 to-indigo-50',
//               border: 'border-blue-200',
//               items: ['Bulk Device Servicing', 'Corporate IT Support', 'Annual Maintenance Contracts', 'Used Laptop Trading'],
//             },
//             {
//               category: 'For Enterprises',
//               icon: Server,
//               color: 'from-indigo-50 to-purple-50',
//               border: 'border-indigo-200',
//               items: ['Device Lifecycle Management', 'Downtime Reduction Systems', 'Dedicated Technical Support', 'Fleet Optimization'],
//             },
//           ].map((service, i) => {
//             const Icon = service.icon;
//             return (
//               <div
//                 key={i}
//                 className={`relative p-8 bg-gradient-to-br ${service.color} rounded-2xl border-2 ${service.border} hover:shadow-xl transition-all group`}
//               >
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
//                     <Icon className="w-7 h-7 text-[#00B4D8]" />
//                   </div>
//                   <h3 className="text-xl font-bold text-[#0B1F3B]">{service.category}</h3>
//                 </div>
//                 <ul className="space-y-3">
//                   {service.items.map((item, j) => (
//                     <li key={j} className="flex items-start gap-3 text-gray-700">
//                       <CheckCircle2 className="w-5 h-5 text-[#00B4D8] mt-0.5 flex-shrink-0" />
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );

//   const CaseMorph = () => (
//     <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1F3B] mb-4">Client Success Stories</h2>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {[
//             {
//               id: '01',
//               title: 'SME Office in Deira',
//               stats: ['18 laptops diagnosed', '14 saved from replacement', 'Significant cost efficiency', 'Minimal downtime with pickup service'],
//             },
//             {
//               id: '02',
//               title: 'Tech Startup in DIFC',
//               stats: ['MacBook Pro fleet serviced', 'Logic board repairs completed', '48-hour turnaround achieved', 'Annual contract secured'],
//             },
//             {
//               id: '03',
//               title: 'Retail Chain Operations',
//               stats: ['25 POS systems maintained', 'Preventive maintenance deployed', 'Extended device lifespan', 'Quarterly IT audits included'],
//             },
//           ].map((caseStudy) => (
//             <div
//               key={caseStudy.id}
//               className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#00B4D8] hover:shadow-xl transition-all group"
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="px-3 py-1 bg-[#00B4D8]/10 rounded-lg text-[#00B4D8] font-mono text-sm font-bold">
//                   Case {caseStudy.id}
//                 </div>
//               </div>
//               <h3 className="text-xl font-bold text-[#0B1F3B] mb-6">{caseStudy.title}</h3>
//               <ul className="space-y-3">
//                 {caseStudy.stats.map((stat, j) => (
//                   <li key={j} className="flex items-start gap-3 text-gray-700">
//                     <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                     <span>{stat}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );

//   const DubaiPositioning = () => (
//     <section className="relative py-24 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
//       <div className="container mx-auto px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00B4D8]/10 border border-[#00B4D8]/20 rounded-full text-sm font-semibold text-[#00B4D8] mb-6">
//             <MapPin className="w-4 h-4" />
//             Dubai-First Approach
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#0B1F3B]">
//             Built for Dubai's{' '}
//             <span className="bg-gradient-to-r from-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">Speed-Driven Businesses</span>
//           </h2>
//           <p className="text-xl text-gray-600 leading-relaxed mb-12">
//             In Dubai, time is more expensive than hardware. Future Fix helps companies save working hours, reduce operational disruption, and extend device lifespan.
//           </p>

//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               { icon: Clock, label: 'Reduced Downtime', value: '85%' },
//               { icon: TrendingUp, label: 'Cost Efficiency', value: '62%' },
//               { icon: Users, label: 'Client Retention', value: '94%' },
//             ].map((stat, i) => {
//               const Icon = stat.icon;
//               return (
//                 <div
//                   key={i}
//                   className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all"
//                 >
//                   <Icon className="w-8 h-8 text-[#00B4D8] mx-auto mb-3" />
//                   <div className="text-3xl font-bold text-[#0B1F3B] mb-1">{stat.value}</div>
//                   <div className="text-sm text-gray-600">{stat.label}</div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );

//   const FinalCoreCTA = () => (
//     <section className="relative py-24 bg-gradient-to-br from-[#0B1F3B] via-blue-900 to-[#0B1F3B] overflow-hidden">
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00B4D8]/20 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-6 text-center relative z-10">
//         <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
//           Before You Replace Your Device,
//           <br />
//           <span className="text-[#00B4D8]">Let Engineers Look at It.</span>
//         </h2>

//         <div className="flex flex-wrap justify-center gap-4 mt-12">
//           <a
//             href={WHATSAPP_LINK}
//             className="inline-flex items-center gap-2 px-8 py-4 bg-[#00B4D8] hover:bg-[#0096C7] text-white font-semibold rounded-lg shadow-lg shadow-[#00B4D8]/30 hover:shadow-xl hover:shadow-[#00B4D8]/40 transition-all hover:-translate-y-1"
//           >
//             <MessageCircle className="w-5 h-5" />
//             Contact on WhatsApp
//           </a>
//           <a
//             href="tel:+971556166465"
//             className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-[#0B1F3B] font-semibold rounded-lg transition-all hover:-translate-y-1"
//           >
//             <Phone className="w-5 h-5" />
//             Talk to an Expert
//           </a>
//         </div>
//       </div>
//     </section>
//   );

//   const Footer = () => (
//     <footer className="py-16 bg-[#0B1F3B] border-t border-white/10">
//       <div className="container mx-auto px-6">
//         <div className="grid md:grid-cols-2 gap-8 items-center">
//           <div>
//             <h3 className="text-2xl font-bold text-white mb-4">Future Fix</h3>
//             <p className="text-gray-400 mb-4">
//               Serving individuals and businesses across Dubai with professional chip-level repair and IT support.
//             </p>
//             <div className="flex items-center gap-2 text-gray-400">
//               <MapPin className="w-5 h-5 text-[#00B4D8]" />
//               <span>NAIF, Deira, Dubai - Pin: 46701</span>
//             </div>
//           </div>

//           <div className="text-right">
//             <a
//               href={WHATSAPP_LINK}
//               className="inline-flex items-center gap-2 text-[#00B4D8] hover:text-[#0096C7] font-semibold text-lg mb-2 transition-colors"
//             >
//               <MessageCircle className="w-5 h-5" />
//               {WHATSAPP_NUMBER}
//             </a>
//             <p className="text-gray-500 text-sm">© 2025 Future Fix. All rights reserved.</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );

//   return (
//     <div className="bg-white">
//       <Header />
//       <HeroLaptopCore />
//       <LaptopXray />
//       <EngineeringDashboard />
//       <ReplaceVsRepair />
//       <RepairPipeline />
//       <UserEcosystem />
//       <CaseMorph />
//       <DubaiPositioning />
//       <FinalCoreCTA />
//       <Footer />
//     </div>
//   );
// }





'use client';

import { useEffect, useRef, useState } from 'react';

export default function CompleteRepairLanding() {
  const beforeRef = useRef(null);
  const youRef = useRef(null);
  const repairRef = useRef(null);
  const replaceRef = useRef(null);
  const laptopRef = useRef(null);
  const ctaRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const animateElements = [
      { ref: repairRef, delay: 0 },
      { ref: beforeRef, delay: 0.15 },
      { ref: youRef, delay: 0.3 },
      { ref: replaceRef, delay: 0.45 },
      { ref: laptopRef, delay: 0.6 },
      { ref: ctaRef, delay: 0.9 },
    ];

    animateElements.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current.style.opacity = '1';
          ref.current.style.transform = 'translateY(0) scale(1)';
        }, delay * 1000);
      }
    });

    let frameId;
    let startTime = Date.now();

    const animate = () => {
      if (laptopRef.current) {
        const elapsed = Date.now() - startTime;
        const float = Math.sin(elapsed / 1000) * 8;
        laptopRef.current.style.transform = `translateY(${float}px) translateX(${mousePosition.x * 0.3}px) scale(1)`;
      }
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [mousePosition]);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Ultra-fine grid background */}
      <div
        className="fixed inset-0 opacity-[0.015] pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(#0B1F3B 1px, transparent 1px),
            linear-gradient(90deg, #0B1F3B 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Header

      {/* Hero Section */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 pt-20 pb-20">
        {/* Ambient glow */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-20 blur-[120px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #00B4D8 0%, transparent 70%)',
          }}
        />

        <div className="max-w-[1600px] mx-auto relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div className="space-y-6 md:space-y-10">
              <div
                ref={repairRef}
                className="opacity-0 transition-all duration-1000"
                style={{ transform: 'translateY(30px) scale(0.95)' }}
              >
                <h1 className="text-[#0B1F3B] font-black text-[clamp(3rem,12vw,9rem)] leading-[0.85] tracking-[-0.04em] mb-2">
                  REPAIR
                </h1>
              </div>

              <div
                ref={beforeRef}
                className="opacity-0 transition-all duration-1000"
                style={{ transform: 'translateY(30px) scale(0.95)' }}
              >
                <h1
                  className="font-black text-[clamp(3rem,12vw,9rem)] leading-[0.85] tracking-[-0.04em] relative inline-block"
                  style={{
                    color: '#00B4D8',
                    textShadow: `
                      0 0 20px rgba(0, 180, 216, 0.4),
                      0 0 40px rgba(0, 180, 216, 0.2),
                      0 0 60px rgba(0, 180, 216, 0.1)
                    `,
                  }}
                >
                  BEFORE
                </h1>
              </div>

              <div
                ref={youRef}
                className="opacity-0 transition-all duration-1000"
                style={{ transform: 'translateY(30px) scale(0.95)' }}
              >
                <h1
                  className="font-black text-[clamp(3rem,12vw,9rem)] leading-[0.85] tracking-[-0.04em] relative inline-block"
                  style={{
                    color: '#00B4D8',
                    textShadow: `
                      0 0 20px rgba(0, 180, 216, 0.4),
                      0 0 40px rgba(0, 180, 216, 0.2),
                      0 0 60px rgba(0, 180, 216, 0.1)
                    `,
                  }}
                >
                  YOU
                </h1>
              </div>

              <div
                ref={replaceRef}
                className="opacity-0 transition-all duration-1000"
                style={{ transform: 'translateY(30px) scale(0.95)' }}
              >
                <h1 className="text-[#0B1F3B] font-black text-[clamp(3rem,12vw,9rem)] leading-[0.85] tracking-[-0.04em]">
                  REPLACE
                </h1>
              </div>

              <div className="pt-6 md:pt-10 max-w-[540px]">
                <p className="text-[#0B1F3B]/60 text-base md:text-lg leading-relaxed font-light tracking-wide">
                  Enterprise-grade device repair with certified technicians.
                  Free diagnostics, same-day service, lifetime warranty.
                </p>
              </div>

              <div
                ref={ctaRef}
                className="pt-4 md:pt-8 opacity-0 transition-all duration-1000"
                style={{ transform: 'translateY(30px) scale(0.95)' }}
              >
                <button
                  className="group relative overflow-hidden bg-[#00B4D8] text-white px-10 md:px-14 py-5 md:py-6 rounded-full text-base md:text-lg font-semibold tracking-wide transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    boxShadow: `
                      0 4px 24px rgba(0, 180, 216, 0.25),
                      0 8px 48px rgba(0, 180, 216, 0.15)
                    `,
                  }}
                >
                  <span className="relative z-10">Schedule A Pickup</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>

                <div className="mt-6 flex items-center gap-6 text-sm text-[#0B1F3B]/40 font-light">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#00B4D8]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#00B4D8]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>24/7 support</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center relative">
              <div
                ref={laptopRef}
                className="opacity-0 transition-all duration-1000 relative"
                style={{
                  transform: 'translateY(30px) scale(0.95)',
                  willChange: 'transform',
                }}
              >
                <div
                  className="absolute inset-0 blur-[100px] opacity-30"
                  style={{
                    background: 'radial-gradient(ellipse, #00B4D8 0%, transparent 70%)',
                    transform: 'scale(1.5)',
                  }}
                />

                <svg className="w-full max-w-[600px] drop-shadow-2xl relative z-10" viewBox="0 0 600 400" fill="none">
                  <rect x="80" y="40" width="440" height="280" rx="12" fill="#0B1F3B" stroke="#00B4D8" strokeWidth="2" />
                  <rect x="90" y="50" width="420" height="260" rx="8" fill="url(#screenGradient)" />
                  <path d="M 40 320 L 560 320 L 540 360 L 60 360 Z" fill="#0B1F3B" stroke="#00B4D8" strokeWidth="1.5" />
                  <rect x="100" y="330" width="400" height="20" rx="2" fill="#0B1F3B" opacity="0.3" />
                  <rect x="250" y="335" width="100" height="10" rx="1" fill="#00B4D8" opacity="0.2" />

                  <g opacity="0.6">
                    <rect x="110" y="70" width="380" height="20" rx="4" fill="#00B4D8" opacity="0.1" />
                    <rect x="110" y="110" width="180" height="120" rx="8" fill="#00B4D8" opacity="0.15" />
                    <rect x="310" y="110" width="180" height="120" rx="8" fill="#00B4D8" opacity="0.1" />
                    <rect x="110" y="250" width="280" height="8" rx="4" fill="#00B4D8" opacity="0.08" />
                    <rect x="110" y="270" width="380" height="8" rx="4" fill="#00B4D8" opacity="0.05" />
                  </g>

                  <defs>
                    <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#001529" />
                      <stop offset="100%" stopColor="#0B1F3B" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 border-t border-[#0B1F3B]/5 px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: '50K+', label: 'Devices Repaired' },
              { number: '98%', label: 'Success Rate' },
              { number: '24hrs', label: 'Avg. Turnaround' },
              { number: '500+', label: 'Enterprise Clients' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-3xl md:text-5xl font-black mb-2"
                  style={{
                    background: 'linear-gradient(135deg, #00B4D8 0%, #0B1F3B 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-[#0B1F3B]/40 font-light tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <div className="text-[#00B4D8] text-sm font-semibold tracking-widest uppercase mb-4">Our Services</div>
            <h2 className="text-[#0B1F3B] text-4xl md:text-6xl font-black tracking-tight">
              Expert Repair Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '💻',
                title: 'Laptop Repair',
                description: 'Screen replacements, motherboard repairs, battery upgrades, and comprehensive diagnostics.',
              },
              {
                icon: '🔋',
                title: 'Battery Replacement',
                description: 'Genuine OEM batteries with 2-year warranty. Improved performance and extended lifespan.',
              },
              {
                icon: '💾',
                title: 'Data Recovery',
                description: 'Professional data recovery services with 95% success rate. Your data is safe with us.',
              },
              {
                icon: '⚡',
                title: 'Hardware Upgrade',
                description: 'RAM upgrades, SSD installations, GPU replacements for enhanced performance.',
              },
              {
                icon: '🛡️',
                title: 'Liquid Damage',
                description: 'Specialized liquid damage repair with ultrasonic cleaning and component replacement.',
              },
              {
                icon: '🔧',
                title: 'Same-Day Service',
                description: 'Express repair option available for urgent requests. Most repairs done within 4-6 hours.',
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group relative bg-white border border-[#0B1F3B]/5 rounded-2xl p-8 hover:border-[#00B4D8]/30 transition-all duration-500 hover:shadow-lg hover:shadow-[#00B4D8]/5"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-[#0B1F3B] text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-[#0B1F3B]/60 text-sm leading-relaxed">{service.description}</p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00B4D8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative z-10 bg-[#0B1F3B] px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <div className="text-[#00B4D8] text-sm font-semibold tracking-widest uppercase mb-4">The Process</div>
            <h2 className="text-white text-4xl md:text-6xl font-black tracking-tight">
              Simple. Fast. Reliable.
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 md:gap-6">
            {[
              { step: '01', title: 'Schedule Pickup', desc: 'Book free pickup online in 60 seconds' },
              { step: '02', title: 'Free Diagnosis', desc: 'Expert technician diagnoses your device' },
              { step: '03', title: 'Get Quote', desc: 'Receive transparent pricing instantly' },
              { step: '04', title: 'Repair & Return', desc: 'Same-day repair with lifetime warranty' },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-[#00B4D8]/20 text-7xl font-black mb-4">{item.step}</div>
                <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>

                {i < 3 && (
                  <div className="hidden md:block absolute top-12 -right-3 w-6 h-0.5 bg-[#00B4D8]/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <div className="text-[#00B4D8] text-sm font-semibold tracking-widest uppercase mb-4">Transparent Pricing</div>
            <h2 className="text-[#0B1F3B] text-4xl md:text-6xl font-black tracking-tight mb-6">
              No Hidden Fees
            </h2>
            <p className="text-[#0B1F3B]/60 text-lg max-w-2xl mx-auto">
              Pay only for what you need. All repairs include free diagnostics and lifetime warranty.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Basic',
                price: '$79',
                features: ['Screen Repair', 'Battery Replacement', 'Free Diagnostics', '90-Day Warranty', 'Standard Pickup'],
                popular: false,
              },
              {
                name: 'Professional',
                price: '$149',
                features: ['Everything in Basic', 'Hardware Upgrades', 'Data Recovery', 'Lifetime Warranty', 'Same-Day Service'],
                popular: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                features: ['Volume Discounts', 'Dedicated Account Manager', 'On-Site Repairs', 'Priority Support', 'Custom SLA'],
                popular: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-3xl p-8 border-2 transition-all duration-500 ${plan.popular
                  ? 'bg-[#0B1F3B] border-[#00B4D8] scale-105'
                  : 'bg-white border-[#0B1F3B]/10 hover:border-[#00B4D8]/30'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00B4D8] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <div className={`mb-6 ${plan.popular ? 'text-white' : 'text-[#0B1F3B]'}`}>
                  <div className="text-sm font-semibold tracking-widest uppercase mb-2">{plan.name}</div>
                  <div className="text-5xl font-black">{plan.price}</div>
                  {plan.price !== 'Custom' && <div className="text-sm opacity-60 mt-1">starting price</div>}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className={`flex items-start gap-3 text-sm ${plan.popular ? 'text-white/80' : 'text-[#0B1F3B]/60'}`}>
                      <svg className={`w-5 h-5 ${plan.popular ? 'text-[#00B4D8]' : 'text-[#00B4D8]'} flex-shrink-0 mt-0.5`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${plan.popular
                    ? 'bg-[#00B4D8] text-white hover:bg-[#00B4D8]/90'
                    : 'bg-[#0B1F3B] text-white hover:bg-[#0B1F3B]/90'
                    }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 bg-[#F8FAFB] px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <div className="text-[#00B4D8] text-sm font-semibold tracking-widest uppercase mb-4">Testimonials</div>
            <h2 className="text-[#0B1F3B] text-4xl md:text-6xl font-black tracking-tight">
              Trusted by Thousands
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Tech Startup CEO',
                review: 'Repaired our entire fleet of MacBooks in under 48 hours. Professional service and competitive pricing.',
                rating: 5,
              },
              {
                name: 'Michael Chen',
                role: 'Freelance Designer',
                review: 'My laptop had liquid damage and they recovered all my client files. Lifesavers!',
                rating: 5,
              },
              {
                name: 'Emily Rodriguez',
                role: 'Software Engineer',
                review: 'Same-day screen replacement while I waited. Quality parts and excellent warranty.',
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-[#00B4D8]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#0B1F3B]/70 text-sm leading-relaxed mb-6">{testimonial.review}</p>
                <div>
                  <div className="text-[#0B1F3B] font-bold">{testimonial.name}</div>
                  <div className="text-[#0B1F3B]/40 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#0B1F3B] text-4xl md:text-6xl font-black tracking-tight mb-6">
            Ready to Repair Your Device?
          </h2>
          <p className="text-[#0B1F3B]/60 text-lg mb-10">
            Schedule your free pickup today. No commitment required.
          </p>
          <button
            className="group relative overflow-hidden bg-[#00B4D8] text-white px-12 md:px-16 py-5 md:py-6 rounded-full text-base md:text-lg font-semibold tracking-wide transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              boxShadow: `
                0 4px 24px rgba(0, 180, 216, 0.25),
                0 8px 48px rgba(0, 180, 216, 0.15)
              `,
            }}
          >
            <span className="relative z-10">Get Started Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-[#0B1F3B] text-white px-6 md:px-12 lg:px-20 pt-20 pb-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="text-2xl font-bold mb-4">
                REPAIR<span className="text-[#00B4D8]">.</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
                Professional laptop repair services trusted by over 50,000 customers.
                Enterprise-grade quality with consumer-friendly pricing.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00B4D8] transition-colors duration-300 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00B4D8] transition-colors duration-300 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00B4D8] transition-colors duration-300 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00B4D8] transition-colors duration-300 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold mb-4 text-sm tracking-wider uppercase">Company</h3>
              <ul className="space-y-3 text-sm text-white/60">
                <li><a href="#" className="hover:text-[#00B4D8] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Press Kit</a></li>
                <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold mb-4 text-sm tracking-wider uppercase">Services</h3>
              <ul className="space-y-3 text-sm text-white/60">
                <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Laptop Repair</a></li>
                <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Data Recovery</a></li>
                <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Hardware Upgrade</a></li>
                <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Warranty</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-bold mb-4 text-sm tracking-wider uppercase">Support</h3>
              <ul className="space-y-3 text-sm text-white/60">
                <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Track Repair</a></li>
                <li><a href="#" className="hover:text-[#00B4D8] transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Live Chat</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/40">
              © 2026 Futurefix. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-white/40">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}