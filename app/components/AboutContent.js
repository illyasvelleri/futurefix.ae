// app/about/page.js
"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Users,
  Target,
  Heart,
  Clock,
  ShieldCheck,
  MapPin,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

// WhatsApp config
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+971556166465";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}?text=${encodeURIComponent(
  "Hello Future Fix Team! I'm interested in your laptop repair services in Dubai."
)}`;

export default function AboutUsPage() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-12");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

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
          <div className="w-16 h-16 rounded-full bg-cyan-600 flex items-center justify-center shadow-2xl shadow-cyan-900/40 group-hover:scale-110 transition-transform">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 bg-cyan-700 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
            Chat
          </div>
        </div>
      </a>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 md:pb-40 overflow-hidden">
        {/* Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-600/20 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-cyan-950/40 border border-cyan-800/30 rounded-full text-lg font-semibold text-cyan-400">
              <ShieldCheck className="w-6 h-6" />
              About Future Fix Dubai
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              Future Fix
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Repair Before You Replace
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Premium laptop repair, MacBook service, data recovery and hardware solutions in Dubai — fast, transparent, and built to last.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <Link
                href={WHATSAPP_LINK}
                target="_blank"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-semibold text-lg rounded-2xl shadow-lg shadow-cyan-900/30 hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                <MessageCircle className="w-7 h-7" />
                Contact Us on WhatsApp
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div
              ref={(el) => (sectionRefs.current[0] = el)}
              className="opacity-0 translate-y-12 transition-all duration-800 ease-out space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white">Our Mission</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                To provide expert laptop and device repair services in Dubai that extend the life of your technology — saving money, reducing waste, and delivering fast, reliable results.
              </p>
              <p className="text-lg text-gray-400">
                Chip-level diagnostics, motherboard repair, liquid damage recovery, same-day service — most devices can be saved, not replaced.
              </p>
            </div>

            <div
              ref={(el) => (sectionRefs.current[1] = el)}
              className="opacity-0 translate-y-12 transition-all duration-800 ease-out space-y-6 lg:pt-10"
              style={{ transitionDelay: "150ms" }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white">Our Vision</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                To become Dubai's most trusted name in professional device repair — recognized for precision, transparency, speed, and a true{" "}
                <span className="text-cyan-400 font-semibold">repair-first</span> philosophy.
              </p>
              <p className="text-lg text-gray-400">
                A future where people and businesses choose repair over replacement — protecting budgets and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#0d1320] to-[#0a0e17]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
              Why Dubai Trusts Future Fix
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're more than a repair shop — we deliver real solutions with real expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Deep Technical Skill",
                description:
                  "Chip-level repair, BGA reballing, micro-soldering — we fix what others throw away.",
              },
              {
                icon: Clock,
                title: "Fast Dubai Service",
                description:
                  "Same-day & next-day options. Fast pickup across Dubai + quick diagnostics.",
              },
              {
                icon: Heart,
                title: "Total Transparency",
                description:
                  "Clear quotes, no surprises, full diagnosis reports, lifetime warranty on many repairs.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                ref={(el) => (sectionRefs.current[i + 2] = el)}
                className="group p-8 bg-gray-900/40 border border-gray-800 rounded-2xl hover:border-cyan-600/60 hover:shadow-xl hover:shadow-cyan-950/30 transition-all duration-300 opacity-0 translate-y-12"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="w-16 h-16 bg-cyan-950/40 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-900/50 transition-colors">
                  <item.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-cyan-950/40 via-gray-950 to-blue-950/30">
        <div className="absolute inset-0 opacity-[0.06]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "radial-gradient(circle, #0ea5e9 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Repair — Not Replace?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            Connect with Dubai’s most trusted laptop & device repair team today.
          </p>

          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            className="group inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold text-xl rounded-3xl shadow-2xl shadow-cyan-900/40 hover:shadow-3xl hover:scale-[1.02] transition-all"
          >
            <MessageCircle className="w-9 h-9" />
            Message Future Fix on WhatsApp
            <ArrowRight className="w-8 h-8 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-5">Future Fix</h3>
            <p className="text-gray-400 leading-relaxed">
              Premium laptop repair, MacBook service and data recovery in Dubai.  
              <span className="text-cyan-400 font-semibold"> Repair before you replace.</span>
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-5">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/services" className="hover:text-cyan-400 transition">Laptop Repair Dubai</Link></li>
              <li><Link href="/services" className="hover:text-cyan-400 transition">MacBook Repair</Link></li>
              <li><Link href="/services" className="hover:text-cyan-400 transition">Data Recovery</Link></li>
              <li><Link href="/services" className="hover:text-cyan-400 transition">Same-Day Service</Link></li>
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
                <a
                  href={WHATSAPP_LINK}
                  className="flex items-center gap-3 hover:text-cyan-400 transition"
                >
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