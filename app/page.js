// 'use client';

// import { useEffect, useRef, useState } from 'react';

// export default function CompleteRepairLanding() {
//   const beforeRef = useRef(null);
//   const youRef = useRef(null);
//   const repairRef = useRef(null);
//   const replaceRef = useRef(null);
//   const laptopRef = useRef(null);
//   const ctaRef = useRef(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth - 0.5) * 20,
//         y: (e.clientY / window.innerHeight - 0.5) * 20,
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   useEffect(() => {
//     const animateElements = [
//       { ref: repairRef, delay: 0 },
//       { ref: beforeRef, delay: 0.15 },
//       { ref: youRef, delay: 0.3 },
//       { ref: replaceRef, delay: 0.45 },
//       { ref: laptopRef, delay: 0.6 },
//       { ref: ctaRef, delay: 0.9 },
//     ];

//     animateElements.forEach(({ ref, delay }) => {
//       if (ref.current) {
//         setTimeout(() => {
//           ref.current.style.opacity = '1';
//           ref.current.style.transform = 'translateY(0) scale(1)';
//         }, delay * 1000);
//       }
//     });

//     let frameId;
//     let startTime = Date.now();

//     const animate = () => {
//       if (laptopRef.current) {
//         const elapsed = Date.now() - startTime;
//         const float = Math.sin(elapsed / 1000) * 8;
//         laptopRef.current.style.transform = `translateY(${float}px) translateX(${mousePosition.x * 0.3}px) scale(1)`;
//       }
//       frameId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       if (frameId) cancelAnimationFrame(frameId);
//     };
//   }, [mousePosition]);

//   return (
//     <div className="min-h-screen bg-white overflow-hidden">
//       {/* Ultra-fine grid background */}
//       <div
//         className="fixed inset-0 opacity-[0.015] pointer-events-none z-0"
//         style={{
//           backgroundImage: `
//             linear-gradient(#0B1F3B 1px, transparent 1px),
//             linear-gradient(90deg, #0B1F3B 1px, transparent 1px)
//           `,
//           backgroundSize: '32px 32px',
//         }}
//       />

//       {/* Header

//       {/* Hero Section */}
//       <section className="relative z-10 px-6 md:px-12 lg:px-20 pt-20 pb-20">
//         {/* Ambient glow */}
//         <div
//           className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-20 blur-[120px] pointer-events-none"
//           style={{
//             background: 'radial-gradient(circle, #00B4D8 0%, transparent 70%)',
//           }}
//         />

//         <div className="max-w-[1600px] mx-auto relative z-10 py-20">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

//             <div className="space-y-6 md:space-y-10">
//               <div
//                 ref={repairRef}
//                 className="opacity-0 transition-all duration-1000"
//                 style={{ transform: 'translateY(30px) scale(0.95)' }}
//               >
//                 <h1 className="text-[#0B1F3B] font-black text-[clamp(3rem,12vw,9rem)] leading-[0.85] tracking-[-0.04em] mb-2">
//                   REPAIR
//                 </h1>
//               </div>

//               <div
//                 ref={beforeRef}
//                 className="opacity-0 transition-all duration-1000"
//                 style={{ transform: 'translateY(30px) scale(0.95)' }}
//               >
//                 <h1
//                   className="font-black text-[clamp(3rem,12vw,9rem)] leading-[0.85] tracking-[-0.04em] relative inline-block"
//                   style={{
//                     color: '#00B4D8',
//                     textShadow: `
//                       0 0 20px rgba(0, 180, 216, 0.4),
//                       0 0 40px rgba(0, 180, 216, 0.2),
//                       0 0 60px rgba(0, 180, 216, 0.1)
//                     `,
//                   }}
//                 >
//                   BEFORE
//                 </h1>
//               </div>

//               <div
//                 ref={youRef}
//                 className="opacity-0 transition-all duration-1000"
//                 style={{ transform: 'translateY(30px) scale(0.95)' }}
//               >
//                 <h1
//                   className="font-black text-[clamp(3rem,12vw,9rem)] leading-[0.85] tracking-[-0.04em] relative inline-block"
//                   style={{
//                     color: '#00B4D8',
//                     textShadow: `
//                       0 0 20px rgba(0, 180, 216, 0.4),
//                       0 0 40px rgba(0, 180, 216, 0.2),
//                       0 0 60px rgba(0, 180, 216, 0.1)
//                     `,
//                   }}
//                 >
//                   YOU
//                 </h1>
//               </div>

//               <div
//                 ref={replaceRef}
//                 className="opacity-0 transition-all duration-1000"
//                 style={{ transform: 'translateY(30px) scale(0.95)' }}
//               >
//                 <h1 className="text-[#0B1F3B] font-black text-[clamp(3rem,12vw,9rem)] leading-[0.85] tracking-[-0.04em]">
//                   REPLACE
//                 </h1>
//               </div>

//               <div className="pt-6 md:pt-10 max-w-[540px]">
//                 <p className="text-[#0B1F3B]/60 text-base md:text-lg leading-relaxed font-light tracking-wide">
//                   Enterprise-grade device repair with certified technicians.
//                   Free diagnostics, same-day service, lifetime warranty.
//                 </p>
//               </div>

//               <div
//                 ref={ctaRef}
//                 className="pt-4 md:pt-8 opacity-0 transition-all duration-1000"
//                 style={{ transform: 'translateY(30px) scale(0.95)' }}
//               >
//                 <button
//                   className="group relative overflow-hidden bg-[#00B4D8] text-white px-10 md:px-14 py-5 md:py-6 rounded-full text-base md:text-lg font-semibold tracking-wide transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
//                   style={{
//                     boxShadow: `
//                       0 4px 24px rgba(0, 180, 216, 0.25),
//                       0 8px 48px rgba(0, 180, 216, 0.15)
//                     `,
//                   }}
//                 >
//                   <span className="relative z-10">Schedule A Pickup</span>
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
//                   <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
//                 </button>

//                 <div className="mt-6 flex items-center gap-6 text-sm text-[#0B1F3B]/40 font-light">
//                   <div className="flex items-center gap-2">
//                     <svg className="w-4 h-4 text-[#00B4D8]" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                     </svg>
//                     <span>No credit card required</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <svg className="w-4 h-4 text-[#00B4D8]" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                     </svg>
//                     <span>24/7 support</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="hidden lg:flex justify-center items-center relative">
//               <div
//                 ref={laptopRef}
//                 className="opacity-0 transition-all duration-1000 relative"
//                 style={{
//                   transform: 'translateY(30px) scale(0.95)',
//                   willChange: 'transform',
//                 }}
//               >
//                 <div
//                   className="absolute inset-0 blur-[100px] opacity-30"
//                   style={{
//                     background: 'radial-gradient(ellipse, #00B4D8 0%, transparent 70%)',
//                     transform: 'scale(1.5)',
//                   }}
//                 />

//                 <svg className="w-full max-w-[600px] drop-shadow-2xl relative z-10" viewBox="0 0 600 400" fill="none">
//                   <rect x="80" y="40" width="440" height="280" rx="12" fill="#0B1F3B" stroke="#00B4D8" strokeWidth="2" />
//                   <rect x="90" y="50" width="420" height="260" rx="8" fill="url(#screenGradient)" />
//                   <path d="M 40 320 L 560 320 L 540 360 L 60 360 Z" fill="#0B1F3B" stroke="#00B4D8" strokeWidth="1.5" />
//                   <rect x="100" y="330" width="400" height="20" rx="2" fill="#0B1F3B" opacity="0.3" />
//                   <rect x="250" y="335" width="100" height="10" rx="1" fill="#00B4D8" opacity="0.2" />

//                   <g opacity="0.6">
//                     <rect x="110" y="70" width="380" height="20" rx="4" fill="#00B4D8" opacity="0.1" />
//                     <rect x="110" y="110" width="180" height="120" rx="8" fill="#00B4D8" opacity="0.15" />
//                     <rect x="310" y="110" width="180" height="120" rx="8" fill="#00B4D8" opacity="0.1" />
//                     <rect x="110" y="250" width="280" height="8" rx="4" fill="#00B4D8" opacity="0.08" />
//                     <rect x="110" y="270" width="380" height="8" rx="4" fill="#00B4D8" opacity="0.05" />
//                   </g>

//                   <defs>
//                     <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                       <stop offset="0%" stopColor="#001529" />
//                       <stop offset="100%" stopColor="#0B1F3B" />
//                     </linearGradient>
//                   </defs>
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Bar */}
//       <section className="relative z-10 border-t border-[#0B1F3B]/5 px-6 md:px-12 lg:px-20 py-12 md:py-16">
//         <div className="max-w-[1600px] mx-auto">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
//             {[
//               { number: '50K+', label: 'Devices Repaired' },
//               { number: '98%', label: 'Success Rate' },
//               { number: '24hrs', label: 'Avg. Turnaround' },
//               { number: '500+', label: 'Enterprise Clients' },
//             ].map((stat, i) => (
//               <div key={i} className="text-center">
//                 <div
//                   className="text-3xl md:text-5xl font-black mb-2"
//                   style={{
//                     background: 'linear-gradient(135deg, #00B4D8 0%, #0B1F3B 100%)',
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                     backgroundClip: 'text',
//                   }}
//                 >
//                   {stat.number}
//                 </div>
//                 <div className="text-xs md:text-sm text-[#0B1F3B]/40 font-light tracking-wider uppercase">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="relative z-10 px-6 md:px-12 lg:px-20 py-20 md:py-32">
//         <div className="max-w-[1600px] mx-auto">
//           <div className="text-center mb-16 md:mb-24">
//             <div className="text-[#00B4D8] text-sm font-semibold tracking-widest uppercase mb-4">Our Services</div>
//             <h2 className="text-[#0B1F3B] text-4xl md:text-6xl font-black tracking-tight">
//               Expert Repair Solutions
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: '💻',
//                 title: 'Laptop Repair',
//                 description: 'Screen replacements, motherboard repairs, battery upgrades, and comprehensive diagnostics.',
//               },
//               {
//                 icon: '🔋',
//                 title: 'Battery Replacement',
//                 description: 'Genuine OEM batteries with 2-year warranty. Improved performance and extended lifespan.',
//               },
//               {
//                 icon: '💾',
//                 title: 'Data Recovery',
//                 description: 'Professional data recovery services with 95% success rate. Your data is safe with us.',
//               },
//               {
//                 icon: '⚡',
//                 title: 'Hardware Upgrade',
//                 description: 'RAM upgrades, SSD installations, GPU replacements for enhanced performance.',
//               },
//               {
//                 icon: '🛡️',
//                 title: 'Liquid Damage',
//                 description: 'Specialized liquid damage repair with ultrasonic cleaning and component replacement.',
//               },
//               {
//                 icon: '🔧',
//                 title: 'Same-Day Service',
//                 description: 'Express repair option available for urgent requests. Most repairs done within 4-6 hours.',
//               },
//             ].map((service, i) => (
//               <div
//                 key={i}
//                 className="group relative bg-white border border-[#0B1F3B]/5 rounded-2xl p-8 hover:border-[#00B4D8]/30 transition-all duration-500 hover:shadow-lg hover:shadow-[#00B4D8]/5"
//               >
//                 <div className="text-5xl mb-6">{service.icon}</div>
//                 <h3 className="text-[#0B1F3B] text-xl font-bold mb-3">{service.title}</h3>
//                 <p className="text-[#0B1F3B]/60 text-sm leading-relaxed">{service.description}</p>

//                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00B4D8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section id="how-it-works" className="relative z-10 bg-[#0B1F3B] px-6 md:px-12 lg:px-20 py-20 md:py-32">
//         <div className="max-w-[1600px] mx-auto">
//           <div className="text-center mb-16 md:mb-24">
//             <div className="text-[#00B4D8] text-sm font-semibold tracking-widest uppercase mb-4">The Process</div>
//             <h2 className="text-white text-4xl md:text-6xl font-black tracking-tight">
//               Simple. Fast. Reliable.
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-4 gap-8 md:gap-6">
//             {[
//               { step: '01', title: 'Schedule Pickup', desc: 'Book free pickup online in 60 seconds' },
//               { step: '02', title: 'Free Diagnosis', desc: 'Expert technician diagnoses your device' },
//               { step: '03', title: 'Get Quote', desc: 'Receive transparent pricing instantly' },
//               { step: '04', title: 'Repair & Return', desc: 'Same-day repair with lifetime warranty' },
//             ].map((item, i) => (
//               <div key={i} className="relative">
//                 <div className="text-[#00B4D8]/20 text-7xl font-black mb-4">{item.step}</div>
//                 <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
//                 <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>

//                 {i < 3 && (
//                   <div className="hidden md:block absolute top-12 -right-3 w-6 h-0.5 bg-[#00B4D8]/20" />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section id="pricing" className="relative z-10 px-6 md:px-12 lg:px-20 py-20 md:py-32">
//         <div className="max-w-[1600px] mx-auto">
//           <div className="text-center mb-16 md:mb-24">
//             <div className="text-[#00B4D8] text-sm font-semibold tracking-widest uppercase mb-4">Transparent Pricing</div>
//             <h2 className="text-[#0B1F3B] text-4xl md:text-6xl font-black tracking-tight mb-6">
//               No Hidden Fees
//             </h2>
//             <p className="text-[#0B1F3B]/60 text-lg max-w-2xl mx-auto">
//               Pay only for what you need. All repairs include free diagnostics and lifetime warranty.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {[
//               {
//                 name: 'Basic',
//                 price: '$79',
//                 features: ['Screen Repair', 'Battery Replacement', 'Free Diagnostics', '90-Day Warranty', 'Standard Pickup'],
//                 popular: false,
//               },
//               {
//                 name: 'Professional',
//                 price: '$149',
//                 features: ['Everything in Basic', 'Hardware Upgrades', 'Data Recovery', 'Lifetime Warranty', 'Same-Day Service'],
//                 popular: true,
//               },
//               {
//                 name: 'Enterprise',
//                 price: 'Custom',
//                 features: ['Volume Discounts', 'Dedicated Account Manager', 'On-Site Repairs', 'Priority Support', 'Custom SLA'],
//                 popular: false,
//               },
//             ].map((plan, i) => (
//               <div
//                 key={i}
//                 className={`relative rounded-3xl p-8 border-2 transition-all duration-500 ${plan.popular
//                   ? 'bg-[#0B1F3B] border-[#00B4D8] scale-105'
//                   : 'bg-white border-[#0B1F3B]/10 hover:border-[#00B4D8]/30'
//                   }`}
//               >
//                 {plan.popular && (
//                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00B4D8] text-white text-xs font-bold px-4 py-1.5 rounded-full">
//                     MOST POPULAR
//                   </div>
//                 )}

//                 <div className={`mb-6 ${plan.popular ? 'text-white' : 'text-[#0B1F3B]'}`}>
//                   <div className="text-sm font-semibold tracking-widest uppercase mb-2">{plan.name}</div>
//                   <div className="text-5xl font-black">{plan.price}</div>
//                   {plan.price !== 'Custom' && <div className="text-sm opacity-60 mt-1">starting price</div>}
//                 </div>

//                 <ul className="space-y-3 mb-8">
//                   {plan.features.map((feature, j) => (
//                     <li key={j} className={`flex items-start gap-3 text-sm ${plan.popular ? 'text-white/80' : 'text-[#0B1F3B]/60'}`}>
//                       <svg className={`w-5 h-5 ${plan.popular ? 'text-[#00B4D8]' : 'text-[#00B4D8]'} flex-shrink-0 mt-0.5`} fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                       </svg>
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <button
//                   className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${plan.popular
//                     ? 'bg-[#00B4D8] text-white hover:bg-[#00B4D8]/90'
//                     : 'bg-[#0B1F3B] text-white hover:bg-[#0B1F3B]/90'
//                     }`}
//                 >
//                   Get Started
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section id="testimonials" className="relative z-10 bg-[#F8FAFB] px-6 md:px-12 lg:px-20 py-20 md:py-32">
//         <div className="max-w-[1600px] mx-auto">
//           <div className="text-center mb-16 md:mb-24">
//             <div className="text-[#00B4D8] text-sm font-semibold tracking-widest uppercase mb-4">Testimonials</div>
//             <h2 className="text-[#0B1F3B] text-4xl md:text-6xl font-black tracking-tight">
//               Trusted by Thousands
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: 'Sarah Johnson',
//                 role: 'Tech Startup CEO',
//                 review: 'Repaired our entire fleet of MacBooks in under 48 hours. Professional service and competitive pricing.',
//                 rating: 5,
//               },
//               {
//                 name: 'Michael Chen',
//                 role: 'Freelance Designer',
//                 review: 'My laptop had liquid damage and they recovered all my client files. Lifesavers!',
//                 rating: 5,
//               },
//               {
//                 name: 'Emily Rodriguez',
//                 role: 'Software Engineer',
//                 review: 'Same-day screen replacement while I waited. Quality parts and excellent warranty.',
//                 rating: 5,
//               },
//             ].map((testimonial, i) => (
//               <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
//                 <div className="flex gap-1 mb-4">
//                   {[...Array(testimonial.rating)].map((_, j) => (
//                     <svg key={j} className="w-5 h-5 text-[#00B4D8]" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   ))}
//                 </div>
//                 <p className="text-[#0B1F3B]/70 text-sm leading-relaxed mb-6">{testimonial.review}</p>
//                 <div>
//                   <div className="text-[#0B1F3B] font-bold">{testimonial.name}</div>
//                   <div className="text-[#0B1F3B]/40 text-sm">{testimonial.role}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="relative z-10 px-6 md:px-12 lg:px-20 py-20 md:py-32">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-[#0B1F3B] text-4xl md:text-6xl font-black tracking-tight mb-6">
//             Ready to Repair Your Device?
//           </h2>
//           <p className="text-[#0B1F3B]/60 text-lg mb-10">
//             Schedule your free pickup today. No commitment required.
//           </p>
//           <button
//             className="group relative overflow-hidden bg-[#00B4D8] text-white px-12 md:px-16 py-5 md:py-6 rounded-full text-base md:text-lg font-semibold tracking-wide transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
//             style={{
//               boxShadow: `
//                 0 4px 24px rgba(0, 180, 216, 0.25),
//                 0 8px 48px rgba(0, 180, 216, 0.15)
//               `,
//             }}
//           >
//             <span className="relative z-10">Get Started Now</span>
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
//             <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="relative z-10 bg-[#0B1F3B] text-white px-6 md:px-12 lg:px-20 pt-20 pb-12">
//         <div className="max-w-[1600px] mx-auto">
//           <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
//             {/* Brand */}
//             <div className="lg:col-span-2">
//               <div className="text-2xl font-bold mb-4">
//                 REPAIR<span className="text-[#00B4D8]">.</span>
//               </div>
//               <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
//                 Professional laptop repair services trusted by over 50,000 customers.
//                 Enterprise-grade quality with consumer-friendly pricing.
//               </p>
//               <div className="flex gap-4">
//                 <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00B4D8] transition-colors duration-300 flex items-center justify-center">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//                   </svg>
//                 </a>
//                 <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00B4D8] transition-colors duration-300 flex items-center justify-center">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//                   </svg>
//                 </a>
//                 <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00B4D8] transition-colors duration-300 flex items-center justify-center">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
//                   </svg>
//                 </a>
//                 <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00B4D8] transition-colors duration-300 flex items-center justify-center">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                   </svg>
//                 </a>
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div>
//               <h3 className="font-bold mb-4 text-sm tracking-wider uppercase">Company</h3>
//               <ul className="space-y-3 text-sm text-white/60">
//                 <li><a href="#" className="hover:text-[#00B4D8] transition-colors">About Us</a></li>
//                 <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Careers</a></li>
//                 <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Press Kit</a></li>
//                 <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Contact</a></li>
//               </ul>
//             </div>

//             {/* Services */}
//             <div>
//               <h3 className="font-bold mb-4 text-sm tracking-wider uppercase">Services</h3>
//               <ul className="space-y-3 text-sm text-white/60">
//                 <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Laptop Repair</a></li>
//                 <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Data Recovery</a></li>
//                 <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Hardware Upgrade</a></li>
//                 <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Warranty</a></li>
//               </ul>
//             </div>

//             {/* Support */}
//             <div>
//               <h3 className="font-bold mb-4 text-sm tracking-wider uppercase">Support</h3>
//               <ul className="space-y-3 text-sm text-white/60">
//                 <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Help Center</a></li>
//                 <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Track Repair</a></li>
//                 <li><a href="#" className="hover:text-[#00B4D8] transition-colors">FAQs</a></li>
//                 <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Live Chat</a></li>
//               </ul>
//             </div>
//           </div>

//           {/* Bottom Bar */}
//           <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
//             <div className="text-sm text-white/40">
//               © 2026 Futurefix. All rights reserved.
//             </div>
//             <div className="flex gap-6 text-sm text-white/40">
//               <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
//               <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
//               <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }


'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const laptopRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 35;
      const y = (e.clientY / window.innerHeight - 0.5) * 25;
      setMouse({ x, y });
    };

    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  useEffect(() => {
    if (!laptopRef.current) return;

    let frame;
    const animate = () => {
      const time = Date.now() * 0.001;
      const floatY = Math.sin(time * 1.2) * 12;
      laptopRef.current.style.transform = `
        translate(${mouse.x}px, ${mouse.y * 0.6 + floatY}px)
        rotateX(${mouse.y * 0.15}deg)
        rotateY(${mouse.x * -0.2}deg)
        scale(1.02)
      `;
      frame = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(frame);
  }, [mouse]);

  const services = [
    { title: "Laptop Repair", desc: "Motherboard, screen, keyboard & port repairs with original-grade parts", icon: "💻" },
    { title: "Battery Replacement", desc: "Genuine high-capacity batteries – longer life, faster charge", icon: "🔋" },
    { title: "Data Recovery", desc: "Advanced lab recovery from failed SSDs, RAID, encrypted drives", icon: "💾" },
    { title: "Hardware Upgrade", desc: "RAM, NVMe SSD, thermal repasting for peak performance", icon: "⚡" },
    { title: "Liquid Damage Repair", desc: "Ultrasonic cleaning + micro-soldering – high success rate", icon: "🛡️" },
    { title: "Same-Day Express", desc: "Priority repair – most issues resolved in 4–8 hours", icon: "🚀" },
  ];

  const steps = [
    { num: "01", title: "Schedule Pickup", desc: "Book online or WhatsApp – collection across Dubai" },
    { num: "02", title: "Fast Diagnosis", desc: "Detailed inspection + transparent report within 1 hour" },
    { num: "03", title: "Instant Quote", desc: "Clear fixed pricing – no hidden charges" },
    { num: "04", title: "Repair & Return", desc: "Premium parts + lifetime warranty on repairs" },
  ];

  const plans = [
    {
      name: "Essential",
      price: "AED 249",
      features: ["Screen / keyboard repair", "Battery check & replace", "Fast pickup & diagnosis", "90-day warranty"],
      popular: false,
    },
    {
      name: "Premium",
      price: "AED 499",
      features: ["All Essential repairs", "Data recovery (up to 1TB)", "Hardware upgrade support", "Same-day service option", "Lifetime warranty on parts"],
      popular: true,
    },
    {
      name: "Corporate",
      price: "Custom",
      features: ["Priority on-site service", "Bulk / fleet discounts", "Dedicated account manager", "SLA & reporting", "Monthly maintenance plans"],
      popular: false,
    },
  ];

  const testimonials = [
    { name: "Ahmed Al Mansoori", role: "CEO, Tech Startup", text: "Fixed 14 MacBooks in one weekend – professional, discreet and very fast.", rating: 5 },
    { name: "Layla Khalid", role: "Interior Designer", text: "Liquid damaged MacBook Pro fully recovered – all client files intact. Exceptional service.", rating: 5 },
    { name: "James Carter", role: "Expc Finance Director", text: "Same-day screen replacement on ThinkPad while I waited in JLT. Premium experience.", rating: 5 },
    { name: "Sara Al Hashmi", role: "Content Creator", text: "Upgraded RAM + SSD – laptop now flies. Honest advice and clean work.", rating: 5 },
  ];

  return (
    <div className="bg-[#0a0e17] text-gray-100 min-h-screen font-sans">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-5 sm:px-10 lg:px-16 pt-20 pb-32">
        {/* Glow background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-600/20 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 lg:space-y-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none">
              Fast, Reliable
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Laptop Repair
              </span>
              <br />
              in Dubai
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 max-w-xl font-light">
              Same-day service • Fast diagnostics • Lifetime warranty on parts • Premium components only
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="#"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-lg font-semibold tracking-wide overflow-hidden hover:scale-[1.03] transition-all duration-300 shadow-xl shadow-cyan-900/30"
              >
                <span className="relative z-10">Schedule Pickup</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"></div>
              </Link>

              <Link
                href="#"
                className="inline-flex items-center justify-center px-10 py-5 border border-cyan-700/50 hover:border-cyan-400 rounded-full text-lg font-medium transition-colors"
              >
                WhatsApp Now
              </Link>
            </div>
          </div>

          {/* Floating laptop illustration container */}
          <div className="hidden lg:block relative h-[520px]">
            <div
              ref={laptopRef}
              className="absolute inset-0 flex items-center justify-center transition-transform duration-200 ease-out will-change-transform"
            >
              {/* You can replace this SVG with a real premium laptop PNG with transparent background */}
              <svg
                className="w-[90%] max-w-[620px] drop-shadow-2xl"
                viewBox="0 0 700 480"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Simplified premium laptop shape */}
                <rect x="80" y="60" width="540" height="320" rx="24" fill="#111827" stroke="#334155" strokeWidth="4"/>
                <rect x="100" y="80" width="500" height="280" rx="12" fill="#0f172a"/>
                {/* Screen glow */}
                <rect x="110" y="90" width="480" height="260" rx="8" fill="url(#screenGlow)" opacity="0.7"/>
                {/* Keyboard area */}
                <rect x="80" y="380" width="540" height="60" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="3"/>
                {/* Trackpad */}
                <rect x="260" y="400" width="180" height="20" rx="6" fill="#1e293b"/>
                {/* Logo / camera */}
                <circle cx="350" cy="120" r="8" fill="#00f0ff" opacity="0.4"/>
                <defs>
                  <radialGradient id="screenGlow" cx="50%" cy="30%">
                    <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.25"/>
                    <stop offset="100%" stopColor="#0f172a" stopOpacity="0"/>
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-gray-800/50 py-16 px-5 sm:px-10 lg:px-16 bg-gradient-to-b from-[#0a0e17] to-[#0d1320]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {[
            { num: "18,500+", label: "Devices Repaired" },
            { num: "98.7%", label: "Success Rate" },
            { num: "< 8 hrs", label: "Avg. Turnaround" },
            { num: "240+", label: "Corporate Clients" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                {stat.num}
              </div>
              <div className="text-gray-400 text-sm lg:text-base uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 lg:py-32 px-5 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-cyan-400 text-sm lg:text-base font-semibold tracking-widest uppercase mb-4">
              Professional Services
            </div>
            <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
              Premium Repair Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="group bg-gray-900/40 border border-gray-800 hover:border-cyan-700/50 rounded-2xl p-8 transition-all duration-400 hover:shadow-xl hover:shadow-cyan-950/30"
              >
                <div className="text-5xl mb-6 opacity-90 group-hover:opacity-100 transition-opacity">{s.icon}</div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gradient-to-b from-[#0d1320] to-[#0a0e17] py-24 lg:py-32 px-5 sm:px-10 lg:px-16 border-t border-gray-800/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-cyan-400 text-sm lg:text-base font-semibold tracking-widest uppercase mb-4">
              How It Works
            </div>
            <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
              Simple • Fast • Transparent
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="text-7xl lg:text-8xl font-black text-cyan-900/30 mb-6">{step.num}</div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 text-base">{step.desc}</p>

                {i < 3 && (
                  <div className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-700 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-[#0a0e17] to-[#0d1320] py-24 lg:py-32 px-5 sm:px-10 lg:px-16 border-t border-gray-800/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-cyan-400 text-sm lg:text-base font-semibold tracking-widest uppercase mb-4">
              Client Experiences
            </div>
            <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
              Trusted in Dubai
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-900/40 border border-gray-800 rounded-2xl p-7 hover:border-cyan-800/50 transition-colors">
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{t.text}"</p>
                <div className="font-medium">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 px-5 sm:px-10 lg:px-16 bg-gradient-to-br from-cyan-950/30 via-gray-950 to-blue-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Get Your Laptop Back to Peak Performance Today
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Pickup anywhere in Dubai • Special warranty on repairs
          </p>

          <Link
            href="#"
            className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-xl font-semibold tracking-wide hover:scale-[1.04] transition-all shadow-2xl shadow-cyan-900/40"
          >
            Schedule Pickup Now →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 py-16 px-5 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div>
            <div className="text-2xl font-bold mb-4">
              Elite<span className="text-cyan-500">Fix</span> Dubai
            </div>
            <p className="text-gray-500 text-sm">
              Premium laptop & MacBook repair services in Dubai since 2018.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm tracking-wider text-gray-400">Services</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><Link href="#" className="hover:text-cyan-400 transition">Laptop Repair</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition">Data Recovery</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition">Battery Replacement</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition">Express Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm tracking-wider text-gray-400">Company</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><Link href="#" className="hover:text-cyan-400 transition">About</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition">Contact</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition">Warranty Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm tracking-wider text-gray-400">Contact</h4>
            <p className="text-gray-500 text-sm">
              WhatsApp: +971 50 123 4567<br />
              Email: support@elitefix.ae<br />
              Dubai – JLT & Business Bay
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-900 text-center text-sm text-gray-600">
          © 2026 EliteFix Dubai. All rights reserved.
        </div>
      </footer>
    </div>
  );
}