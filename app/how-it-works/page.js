// app/how-it-works/page.js
"use client";

import React, { useEffect, useRef } from 'react';
import {
  Activity,
  Package,
  Cpu,
  Shield,
  CheckCircle2,
  MapPin,
  ArrowRight,
  ChevronRight,
  MessageCircle,
} from 'lucide-react';

// WhatsApp from .env (with fallback)
const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER || '+971556166465';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(
  'Hello, I would like to discuss device repair options.'
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

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Initial Diagnosis',
      description:
        'Share photos or describe the issue via WhatsApp. Our engineers perform detailed chip-level analysis to locate the exact fault — no guesswork.',
      icon: Activity,
      color: 'from-[#00B4D8] to-[#0099bb]',
    },
    {
      number: '02',
      title: 'Device Pickup',
      description:
        'We coordinate a suitable time for secure pickup from your location in Dubai — tracked and handled with care.',
      icon: Package,
      color: 'from-[#0099bb] to-[#0077b6]',
    },
    {
      number: '03',
      title: 'Precision Chip-Level Repair',
      description:
        'Your device undergoes micro-component engineering in our lab — fixing the root cause without replacing entire boards.',
      icon: Cpu,
      color: 'from-[#0077b6] to-[#005f8d]',
    },
    {
      number: '04',
      title: 'Rigorous Quality Assurance',
      description:
        'Every repair passes a comprehensive multi-point inspection: stress testing, thermal validation, and full functionality verification.',
      icon: Shield,
      color: 'from-[#005f8d] to-[#004b70]',
    },
    {
      number: '05',
      title: 'Secure & Prompt Return',
      description:
        'Your device is delivered back to you quickly and safely — using the same trusted process we provide to enterprise clients.',
      icon: CheckCircle2,
      color: 'from-[#004b70] to-[#003850]',
    },
  ];

  return (
    <>
      {/* Google Fonts - Inter (modern, clean, professional — matches your logo typography guideline) */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <div className="min-h-screen bg-white relative font-inter">
        {/* Floating WhatsApp Chat Bubble */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Chat on WhatsApp"
        >
          <div className="relative">
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#00B4D8] flex items-center justify-center shadow-2xl shadow-[#00B4D8]/40 group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-[#00B4D8]/30 animate-ping" />
            <div className="absolute -top-2 -right-2 bg-[#0B1F3B] text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
              Chat
            </div>
          </div>
        </a>

        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(0deg, transparent 24%, rgba(11, 31, 59, .5) 25%, rgba(11, 31, 59, .5) 26%, transparent 27%, transparent 74%, rgba(11, 31, 59, .5) 75%, rgba(11, 31, 59, .5) 76%, transparent 77%, transparent),
                  linear-gradient(90deg, transparent 24%, rgba(11, 31, 59, .5) 25%, rgba(11, 31, 59, .5) 26%, transparent 27%, transparent 74%, rgba(11, 31, 59, .5) 75%, rgba(11, 31, 59, .5) 76%, transparent 77%, transparent)
                `,
                backgroundSize: '60px 60px',
              }}
            />
          </div>

          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#00B4D8]/10 to-transparent rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: '8s' }}
          />

          <div className="container mx-auto px-6 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-10">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#0B1F3B]/5 border border-[#0B1F3B]/10 rounded-full text-lg font-semibold text-[#0B1F3B]">
                <Activity className="w-6 h-6 text-[#00B4D8]" />
                Precision Engineering Process
              </div>

              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-[#0B1F3B]">
                How Future Fix <span className="text-[#00B4D8]">Restores</span> Devices
              </h1>

              <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
                A proven, efficient workflow built for speed, accuracy, and zero unnecessary replacements — from first contact to device return.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mt-10">
                <a
                  href={WHATSAPP_LINK}
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-[#00B4D8] hover:bg-[#0096C7] text-white font-bold text-lg rounded-2xl shadow-xl shadow-[#00B4D8]/30 hover:shadow-2xl hover:shadow-[#00B4D8]/40 transition-all hover:-translate-y-1"
                >
                  <MessageCircle className="w-7 h-7" />
                  Start Your Repair Journey
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="relative py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16 lg:gap-10 relative">
                <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0B1F3B] via-[#00B4D8] to-[#0B1F3B] hidden lg:block -z-10 rounded-full" />

                {steps.map((step, index) => (
                  <div
                    key={step.number}
                    ref={(el) => (stepRefs.current[index] = el)}
                    className="flex-1 relative group max-w-md lg:max-w-none mx-auto lg:mx-0 opacity-0 translate-y-10 transition-all duration-700 ease-out"
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="relative mx-auto lg:mx-0 w-32 h-32 mb-10">
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#0B1F3B] rounded-full flex items-center justify-center text-white font-extrabold text-xl z-10 shadow-xl">
                        {step.number}
                      </div>

                      <div
                        className={`w-full h-full rounded-3xl bg-gradient-to-br ${step.color} shadow-2xl shadow-[#00B4D8]/30 group-hover:shadow-3xl group-hover:shadow-[#00B4D8]/40 transition-all duration-500 flex items-center justify-center transform group-hover:scale-110`}
                      >
                        <step.icon className="w-16 h-16 text-white" />
                      </div>
                    </div>

                    <h3 className="text-3xl font-extrabold text-[#0B1F3B] mb-5 text-center lg:text-left">
                      {step.title}
                    </h3>

                    <p className="text-lg text-gray-700 leading-relaxed text-center lg:text-left">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Final CTA */}
              <div className="mt-24 text-center">
                <a
                  href={WHATSAPP_LINK}
                  className="inline-flex items-center gap-4 px-14 py-7 bg-gradient-to-r from-[#00B4D8] to-[#0077B6] hover:from-[#0096C7] hover:to-[#006699] text-white font-bold text-2xl rounded-3xl shadow-2xl shadow-[#00B4D8]/40 hover:shadow-3xl hover:shadow-[#00B4D8]/50 transition-all hover:-translate-y-2 transform"
                >
                  <MessageCircle className="w-9 h-9" />
                  Ready to Restore Your Device?
                  <ArrowRight className="w-8 h-8" />
                </a>
                <p className="mt-6 text-lg text-gray-600">
                  Fast response • Expert engineers • Dubai-wide service
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 bg-[#0B1F3B] border-t border-white/10">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Future Fix</h3>
                <p className="text-gray-400 mb-4">
                  Serving individuals and businesses across Dubai with professional chip-level repair and IT support.
                </p>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-5 h-5 text-[#00B4D8]" />
                  <span>NAIF, Deira, Dubai - Pin: 46701</span>
                </div>
              </div>

              <div className="text-right">
                <a
                  href={WHATSAPP_LINK}
                  className="inline-flex items-center gap-2 text-[#00B4D8] hover:text-[#0096C7] font-semibold text-lg mb-2 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  {WHATSAPP_NUMBER}
                </a>
                <p className="text-gray-500 text-sm">© 2025 Future Fix. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}