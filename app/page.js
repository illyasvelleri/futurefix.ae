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
import Image from 'next/image';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Chip-Level Motherboard Repair",
      desc: "Advanced micro-soldering and component-level diagnostics for complex motherboard failures, power issues, and circuit damage."
    },
    {
      title: "Liquid Damage Restoration",
      desc: "Professional ultrasonic cleaning, corrosion treatment, and precision board-level repair with advanced recovery techniques."
    },
    {
      title: "Data Recovery Services",
      desc: "Specialized recovery from failed storage devices, corrupted drives, and damaged systems with cleanroom facilities."
    },
    {
      title: "Premium Component Replacement",
      desc: "Original-grade parts sourcing and installation including displays, batteries, keyboards, and internal components."
    },
    {
      title: "GPU & Graphics Repair",
      desc: "Dedicated graphics card diagnostics, reflow, reballing, and replacement services for high-performance systems."
    },
    {
      title: "Corporate Fleet Management",
      desc: "Comprehensive IT asset repair and maintenance programs for businesses with priority service and reporting."
    }
  ];

  const process = [
    {
      title: "Professional Diagnosis",
      desc: "Comprehensive board-level inspection with detailed technical assessment and transparent reporting"
    },
    {
      title: "Expert Repair",
      desc: "Certified technicians perform precision repairs using advanced micro-soldering equipment"
    },
    {
      title: "Quality Assurance",
      desc: "Rigorous testing protocols ensure optimal performance before device return"
    },
    {
      title: "Warranty & Support",
      desc: "Extended warranty coverage on all repairs with ongoing technical support"
    }
  ];

  const testimonials = [
    {
      name: "Mohammed Al Hashimi",
      role: "IT Director, Construction Firm",
      text: "FutureFix recovered critical project data from a liquid-damaged laptop. Their chip-level expertise is unmatched in Dubai."
    },
    {
      name: "Sarah Mitchell",
      role: "Architect",
      text: "Professional service from start to finish. They repaired my MacBook Pro's logic board when others said it was beyond repair."
    },
    {
      name: "Khalid Rahman",
      role: "Business Owner",
      text: "Excellent technical knowledge and transparent communication. They've been servicing our company laptops for two years."
    },
    {
      name: "Elena Popov",
      role: "Creative Director",
      text: "Saved months of work from a failed SSD. Their data recovery capabilities and professionalism exceeded expectations."
    }
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "25,000+", label: "Devices Repaired" },
    { value: "98.5%", label: "Success Rate" },
    { value: "4000+", label: "Clients" }
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans antialiased">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0f9ff] via-white to-[#e0f2fe] opacity-60"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-xs lg:text-sm font-semibold tracking-wider text-[#0ea5e9] uppercase">
                  Professional Chip-Level Repair
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-light leading-tight tracking-tight">
                Advanced Laptop
                <br />
                <span className="font-semibold">Repair Services</span>
                <br />
                <span className="text-[#0ea5e9]">in Dubai</span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 font-light leading-relaxed max-w-xl">
                Specialized motherboard diagnostics, micro-soldering, and component-level repair by certified technicians with over 15 years of experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#0ea5e9] text-white font-medium rounded-md hover:bg-[#0284c7] transition shadow-lg shadow-[#0ea5e9]/20"
                >
                  Schedule Repair
                </Link>

                <Link
                  href="https://wa.me/971501234567"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 text-gray-700 font-medium rounded-md hover:border-[#0ea5e9] hover:text-[#0ea5e9] transition"
                >
                  WhatsApp Inquiry
                </Link>
              </div>

              <div className="flex items-center space-x-6 pt-6">
                <Link href="https://facebook.com/futurefix.ae" target="_blank" className="text-gray-400 hover:text-[#0ea5e9] transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                <Link href="https://instagram.com/futurefix.ae" target="_blank" className="text-gray-400 hover:text-[#0ea5e9] transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/10 to-[#0284c7]/10 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                  <img
                    src="/hero_01.png"
                    alt="Professional laptop repair workspace with advanced diagnostic equipment"
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 lg:px-12 bg-gradient-to-br from-[#0ea5e9] to-[#0284c7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl lg:text-5xl font-light text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm lg:text-base text-white/90 font-light uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-xs lg:text-sm font-semibold tracking-wider text-[#0ea5e9] uppercase">
              Specialized Services
            </span>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight mt-4 mb-6">
              Expert <span className="font-semibold">Technical Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
              Comprehensive repair services powered by advanced diagnostics and certified expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-200 rounded-lg p-8 hover:border-[#0ea5e9] hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl lg:text-2xl font-medium mb-4 text-gray-900 group-hover:text-[#0ea5e9] transition">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-xs lg:text-sm font-semibold tracking-wider text-[#0ea5e9] uppercase">
              Our Process
            </span>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight mt-4">
              Professional <span className="font-semibold">Service Workflow</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-white border border-gray-200 rounded-lg p-8 h-full hover:border-[#0ea5e9] transition-colors">
                  <div className="text-6xl font-light text-[#0ea5e9]/20 mb-6">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-xs lg:text-sm font-semibold tracking-wider text-[#0ea5e9] uppercase">
              Client Testimonials
            </span>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight mt-4">
              Trusted by <span className="font-semibold">Professionals</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:border-[#0ea5e9] hover:shadow-lg transition-all"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-[#0ea5e9]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed font-light">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-medium text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500 font-light">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-[#0ea5e9] to-[#0284c7]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-light mb-6">
            Ready to <span className="font-semibold">Restore Your Device?</span>
          </h2>
          <p className="text-xl font-light text-white/90 mb-10 max-w-2xl mx-auto">
            Contact our technical team for professional diagnostics and repair consultation
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+971501234567"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0ea5e9] font-medium rounded-md hover:bg-gray-50 transition shadow-lg"
            >
              Call Now
            </Link>
            <Link
              href="https://wa.me/971501234567"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs lg:text-sm font-semibold tracking-wider text-[#0ea5e9] uppercase">
                About FutureFix
              </span>
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight mt-4 mb-6">
                <span className="font-semibold">Technical Excellence</span> in Dubai
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed font-light">
                <p>
                  FutureFix specializes in advanced chip-level laptop repair, offering professional diagnostic and restoration services for businesses and individuals across Dubai.
                </p>
                <p>
                  Our certified technicians utilize state-of-the-art micro-soldering equipment and diagnostic tools to resolve complex motherboard failures, liquid damage, and component-level issues that standard repair centers cannot address.
                </p>
                <p>
                  With over 15 years of combined experience and a commitment to transparent service, we have established ourselves as Dubai's trusted partner for critical device recovery and professional IT asset management.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-medium mb-2 text-gray-900">Service Locations</h3>
                <p className="text-gray-600 font-light">Dubai • Business Bay • Jumeirah Lakes Towers</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-medium mb-2 text-gray-900">Operating Hours</h3>
                <p className="text-gray-600 font-light">Saturday – Thursday: 9:00 AM – 7:00 PM<br />Friday: Closed</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-medium mb-2 text-gray-900">Contact Information</h3>
                <p className="text-gray-600 font-light">
                  Email: info@futurefix.ae<br />
                  Phone: +971 50 123 4567<br />
                  WhatsApp: +971 50 123 4567
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}