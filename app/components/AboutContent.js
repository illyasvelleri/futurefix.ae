'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

// WhatsApp configuration
const WHATSAPP_NUMBER = '+971556166465';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(
  'Hello FutureFix, I would like to know more about your laptop repair services in Dubai'
)}`;

export default function AboutUsPage() {
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

  const values = [
    {
      title: 'Technical Excellence',
      description: 'Our certified technicians specialize in advanced chip-level repair, micro-soldering, and component-level diagnostics. We invest in continuous training and state-of-the-art equipment to deliver professional results.'
    },
    {
      title: 'Transparent Service',
      description: 'Complete honesty in diagnostics and pricing. We provide detailed technical assessments, clear explanations, and upfront quotes with no hidden charges or unexpected costs.'
    },
    {
      title: 'Quality Commitment',
      description: 'We use only premium-grade components and follow rigorous quality assurance protocols. Every repair undergoes comprehensive testing before return to ensure optimal performance.'
    },
    {
      title: 'Customer Focus',
      description: 'Professional consultation, personalized service, and ongoing support. We treat every device as if it were our own, ensuring complete satisfaction with our repair services.'
    }
  ];

  const milestones = [
    {
      year: '2009',
      title: 'Foundation',
      description: 'Esteem Electronics LLC established in Dubai with a focus on professional laptop repair services'
    },
    {
      year: '2012',
      title: 'Technical Advancement',
      description: 'Expanded capabilities with advanced micro-soldering equipment and chip-level repair expertise'
    },
    {
      year: '2016',
      title: 'Corporate Services',
      description: 'Launched dedicated corporate support division serving businesses across Dubai'
    },
    {
      year: '2020',
      title: 'Service Excellence',
      description: 'Achieved industry recognition for technical expertise and customer service quality'
    },
    {
      year: '2024',
      title: 'Continued Growth',
      description: 'Serving thousands of satisfied clients with comprehensive laptop repair solutions'
    }
  ];

  const expertise = [
    'Chip-level motherboard diagnostics and repair',
    'Advanced micro-soldering and BGA reballing',
    'Liquid damage restoration and corrosion treatment',
    'Component-level circuit analysis and repair',
    'Thermal management and performance optimization',
    'Corporate IT asset maintenance and support'
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
              About FutureFix
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-light leading-tight tracking-tight mb-8">
            Professional <span className="font-semibold">Laptop Repair</span>
            <br />
            <span className="text-[#0ea5e9]">Experts in Dubai</span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-12">
            Esteem Electronics LLC, operating as FutureFix, delivers advanced chip-level laptop repair 
            services with over 15 years of technical expertise serving Dubai's businesses and professionals.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div
              ref={(el) => (sectionRefs.current[0] = el)}
              className="opacity-0 translate-y-8 transition-all duration-700"
            >
              <span className="text-xs lg:text-sm font-semibold tracking-wider text-[#0ea5e9] uppercase">
                Our Mission
              </span>
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight mt-4 mb-6">
                Technical <span className="font-semibold">Excellence</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed font-light">
                <p>
                  To provide professional laptop repair services that extend device longevity through 
                  advanced technical expertise, transparent service, and commitment to quality workmanship.
                </p>
                <p>
                  We specialize in complex repairs that others cannot perform—chip-level motherboard 
                  diagnostics, micro-soldering, and component-level restoration—delivering solutions 
                  that preserve valuable technology and reduce replacement costs.
                </p>
              </div>
            </div>

            <div
              ref={(el) => (sectionRefs.current[1] = el)}
              className="opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: '150ms' }}
            >
              <span className="text-xs lg:text-sm font-semibold tracking-wider text-[#0ea5e9] uppercase">
                Our Vision
              </span>
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight mt-4 mb-6">
                Industry <span className="font-semibold">Leadership</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed font-light">
                <p>
                  To be recognized as Dubai's most trusted provider of professional laptop repair services, 
                  known for technical capability, service integrity, and commitment to customer satisfaction.
                </p>
                <p>
                  We envision a future where repair-first philosophy prevails—where businesses and 
                  individuals choose expert restoration over premature replacement, supporting both 
                  financial sustainability and environmental responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-xs lg:text-sm font-semibold tracking-wider text-[#0ea5e9] uppercase">
              Our Principles
            </span>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight mt-4">
              Core <span className="font-semibold">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {values.map((value, i) => (
              <div
                key={i}
                ref={(el) => (sectionRefs.current[i + 2] = el)}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:border-[#0ea5e9] hover:shadow-xl transition-all duration-300 opacity-0 translate-y-8"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <h3 className="text-2xl font-medium mb-4 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Journey */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-xs lg:text-sm font-semibold tracking-wider text-[#0ea5e9] uppercase">
              Our Journey
            </span>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight mt-4">
              Company <span className="font-semibold">Milestones</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#0ea5e9]/20 via-[#0ea5e9]/50 to-[#0ea5e9]/20"></div>

            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <div
                  key={i}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white border border-gray-200 rounded-lg p-8 hover:border-[#0ea5e9] hover:shadow-lg transition-all">
                      <div className="text-3xl font-light text-[#0ea5e9] mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-medium text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 font-light leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:block flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-[#0ea5e9] border-4 border-white shadow-lg"></div>
                  </div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs lg:text-sm font-semibold tracking-wider text-[#0ea5e9] uppercase">
                Technical Capabilities
              </span>
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight mt-4 mb-6">
                Specialized <span className="font-semibold">Expertise</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed font-light mb-8">
                <p>
                  Our certified technicians possess advanced training in component-level repair, 
                  utilizing professional-grade diagnostic equipment and micro-soldering tools to 
                  address complex hardware failures.
                </p>
                <p>
                  We maintain continuous investment in technical training, equipment upgrades, 
                  and process refinement to ensure we deliver the highest standard of repair 
                  services available in Dubai.
                </p>
              </div>

              <div className="space-y-3">
                {expertise.map((item, i) => (
                  <div key={i} className="flex items-start">
                    <svg className="w-6 h-6 text-[#0ea5e9] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:border-[#0ea5e9] hover:shadow-lg transition-all">
                <div className="text-4xl font-light text-[#0ea5e9] mb-2">15+</div>
                <div className="text-sm text-gray-600 font-light">Years Experience</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:border-[#0ea5e9] hover:shadow-lg transition-all">
                <div className="text-4xl font-light text-[#0ea5e9] mb-2">25K+</div>
                <div className="text-sm text-gray-600 font-light">Devices Repaired</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:border-[#0ea5e9] hover:shadow-lg transition-all">
                <div className="text-4xl font-light text-[#0ea5e9] mb-2">98%</div>
                <div className="text-sm text-gray-600 font-light">Success Rate</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:border-[#0ea5e9] hover:shadow-lg transition-all">
                <div className="text-4xl font-light text-[#0ea5e9] mb-2">4000+</div>
                <div className="text-sm text-gray-600 font-light">Corporate Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Credentials */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <h3 className="text-xl font-medium mb-3 text-gray-900">Certified Technicians</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Our team holds industry certifications and undergoes continuous training in advanced 
                    repair techniques, component-level diagnostics, and emerging laptop technologies.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <h3 className="text-xl font-medium mb-3 text-gray-900">Professional Equipment</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    We maintain professional-grade diagnostic tools, micro-soldering stations, thermal 
                    imaging equipment, and specialized testing instruments for precision repair work.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <h3 className="text-xl font-medium mb-3 text-gray-900">Quality Assurance</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Every repair undergoes rigorous multi-point testing protocols to ensure optimal 
                    performance, stability, and reliability before device return to clients.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-xs lg:text-sm font-semibold tracking-wider text-[#0ea5e9] uppercase">
                Our Team
              </span>
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight mt-4 mb-6">
                Professional <span className="font-semibold">Standards</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed font-light">
                <p>
                  FutureFix employs certified technical professionals with specialized expertise in 
                  laptop repair, motherboard diagnostics, and component-level restoration. Our team's 
                  capabilities extend beyond conventional repair services to address complex hardware 
                  failures requiring advanced micro-soldering and board-level intervention.
                </p>
                <p>
                  We prioritize ongoing professional development, ensuring our technicians remain 
                  current with evolving laptop architectures, repair methodologies, and industry 
                  best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-xs lg:text-sm font-semibold tracking-wider text-[#0ea5e9] uppercase">
            Service Coverage
          </span>
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight mt-4 mb-6">
            Serving <span className="font-semibold">Dubai</span>
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto mb-12">
            Professional laptop repair services available across Dubai with convenient consultation 
            and service arrangements for businesses and individual clients.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#0ea5e9] hover:shadow-lg transition-all">
              <div className="text-[#0ea5e9] mb-3">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Naif, Deira</h3>
              <p className="text-sm text-gray-600 font-light">Service Center Location</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#0ea5e9] hover:shadow-lg transition-all">
              <div className="text-[#0ea5e9] mb-3">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Business Bay & JLT</h3>
              <p className="text-sm text-gray-600 font-light">Corporate Service Areas</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#0ea5e9] hover:shadow-lg transition-all">
              <div className="text-[#0ea5e9] mb-3">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Remote Consultation</h3>
              <p className="text-sm text-gray-600 font-light">WhatsApp & Phone Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-[#0ea5e9] to-[#0284c7]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-light mb-6">
            Experience <span className="font-semibold">Professional Service</span>
          </h2>
          <p className="text-xl font-light text-white/90 mb-10 max-w-2xl mx-auto">
            Contact FutureFix for expert laptop repair consultation and technical assessment
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
              Call Technical Team
            </a>
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-16 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              Esteem Electronics LLC
            </h3>
            <p className="text-gray-600 font-light">
              Registered laptop repair service provider in Dubai, UAE
              <br />
              Operating as FutureFix • Professional Laptop Repair Services
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}