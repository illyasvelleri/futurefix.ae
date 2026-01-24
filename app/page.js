"use client";

import Header from './user/components/header'
import React, { useState, useEffect } from 'react';
import {
  Cpu,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Clock,
  Users,
  Package,
  Smartphone,
  Monitor,
  Server,
  ChevronRight,
  MapPin,
  MessageCircle,
  Phone,
  AlertCircle,
  Activity,
  Layers,
  GitBranch,
  BarChart3,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

// ────────────────────────────────────────────────
// WhatsApp configuration from environment variable
const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER || '+971556166465';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(
  'Hello, I would like to discuss device repair.'
)}`;

// Three.js imports
import { Canvas } from '@react-three/fiber';
import { OrbitControls, MeshWobbleMaterial, Environment, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';

export default function FutureFixImmersive() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);

      const section = Math.floor((window.scrollY / window.innerHeight) * 8);
      setActiveSection(section);
    };

    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const HeroLaptopCore = () => (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
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
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: '6s' }}
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B1F3B]/5 border border-[#0B1F3B]/10 rounded-full text-sm font-medium text-[#0B1F3B]">
              <Activity className="w-4 h-4 text-[#00B4D8]" />
              Enterprise Device Engineering
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-[#0B1F3B]">
              Most "Dead" Laptops
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 bg-gradient-to-r from-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">
                  Are Just Undiagnosed
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-[#00B4D8]/10 -z-10" />
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Future Fix delivers <span className="font-semibold text-[#0B1F3B]">chip-level repair</span>, enterprise IT support, and device lifecycle optimization for individuals and companies in Dubai — with pickup and delivery across the city.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#00B4D8] hover:bg-[#0096C7] text-white font-semibold rounded-lg shadow-lg shadow-[#00B4D8]/25 hover:shadow-xl hover:shadow-[#00B4D8]/35 transition-all hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                Contact on WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-[#0B1F3B] font-semibold rounded-lg border-2 border-gray-200 hover:border-[#00B4D8] transition-all hover:-translate-y-1"
              >
                Explore How It Works
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div
            className="relative"
            style={{ transform: `perspective(1000px) rotateY(${mousePos.x * 0.5}deg) rotateX(${-mousePos.y * 0.5}deg)` }}
          >
            <div className="relative w-full aspect-square">
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00B4D8]/20 to-[#0077B6]/20 blur-3xl animate-pulse"
                style={{ animationDuration: '4s' }}
              />

              <div className="absolute inset-8 bg-gradient-to-br from-[#0B1F3B] to-[#1a3a5c] rounded-3xl shadow-2xl overflow-hidden border border-[#00B4D8]/20">
                <svg className="absolute inset-0 w-full h-full opacity-10">
                  <defs>
                    <pattern id="circuit-hero" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                      <path
                        d="M20,20 L40,20 L40,40 M60,60 L60,80 L80,80 M40,10 L40,30 L60,30"
                        stroke="#00B4D8"
                        fill="none"
                        strokeWidth="2"
                      />
                      <circle cx="40" cy="40" r="4" fill="#00B4D8" />
                      <circle cx="60" cy="60" r="4" fill="#00B4D8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#circuit-hero)" />
                </svg>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="absolute inset-0 rounded-full border-2 border-[#00B4D8]/30 animate-ping"
                        style={{
                          animationDuration: '3s',
                          animationDelay: `${i * 0.5}s`,
                          width: `${120 + i * 40}px`,
                          height: `${120 + i * 40}px`,
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      />
                    ))}

                    <div className="relative w-24 h-24 bg-gradient-to-br from-[#00B4D8] to-[#0077B6] rounded-2xl shadow-2xl shadow-[#00B4D8]/50 flex items-center justify-center">
                      <Cpu className="w-12 h-12 text-white animate-pulse" style={{ animationDuration: '2s' }} />

                      {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos) => (
                        <div
                          key={pos}
                          className={`absolute w-3 h-3 bg-[#00B4D8] rounded-full ${pos}`}
                          style={{
                            top: pos.includes('top') ? '-6px' : 'auto',
                            bottom: pos.includes('bottom') ? '-6px' : 'auto',
                            left: pos.includes('left') ? '-6px' : 'auto',
                            right: pos.includes('right') ? '-6px' : 'auto',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-6 space-y-3">
                  {[
                    { label: 'CPU CORE', status: 'OK', pos: 'top-4 left-4' },
                    { label: 'GPU MODULE', status: 'OK', pos: 'top-4 right-4' },
                    { label: 'POWER IC', status: 'FAULT', pos: 'bottom-4 left-4' },
                    { label: 'RAM BANK', status: 'OK', pos: 'bottom-4 right-4' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`absolute ${item.pos} bg-[#0B1F3B]/80 backdrop-blur-sm px-3 py-2 rounded-lg border ${item.status === 'FAULT' ? 'border-red-500/50' : 'border-[#00B4D8]/50'
                        }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${item.status === 'FAULT' ? 'bg-red-500' : 'bg-green-400'
                            } animate-pulse`}
                        />
                        <span className="text-xs font-mono text-white">{item.label}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00B4D8" stopOpacity="0" />
                      <stop offset="50%" stopColor="#00B4D8" stopOpacity="1" />
                      <stop offset="100%" stopColor="#00B4D8" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M 50% 50% L 10% 10%"
                    stroke="url(#flow-gradient)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                  />
                  <path
                    d="M 50% 50% L 90% 10%"
                    stroke="url(#flow-gradient)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                    style={{ animationDelay: '0.5s' }}
                  />
                  <path
                    d="M 50% 50% L 10% 90%"
                    stroke="url(#flow-gradient)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                    style={{ animationDelay: '1s' }}
                  />
                  <path
                    d="M 50% 50% L 90% 90%"
                    stroke="url(#flow-gradient)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                    style={{ animationDelay: '1.5s' }}
                  />
                </svg>
              </div>

              {[
                { top: '15%', left: '80%', delay: '0s' },
                { top: '70%', left: '15%', delay: '0.7s' },
                { top: '85%', left: '75%', delay: '1.4s' },
              ].map((point, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-red-500 rounded-full animate-ping"
                  style={{ top: point.top, left: point.left, animationDelay: point.delay }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 animate-bounce">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronRight className="w-5 h-5 rotate-90" />
        </div>
      </div>
    </section>
  );

  const LaptopXray = () => (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #0B1F3B 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00B4D8]/10 border border-[#00B4D8]/20 rounded-full text-sm font-semibold text-[#00B4D8]">
              <Layers className="w-4 h-4" />
              Chip-Level Diagnostics
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1F3B] leading-tight">
              We See What Others Miss
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Most repair shops diagnose at component level. Future Fix engineers analyze at{' '}
              <span className="font-semibold text-[#0B1F3B]">micro-chip level</span> — identifying the exact fault point in your device's circuitry.
            </p>

            <div className="space-y-4">
              {[
                { title: 'Motherboard Analysis', desc: 'Power delivery, voltage regulation, signal integrity' },
                { title: 'Chip-Level Fault Detection', desc: 'Capacitors, resistors, ICs, and micro-components' },
                { title: 'Thermal Imaging', desc: 'Heat distribution and component stress analysis' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-[#00B4D8]/50 hover:shadow-lg transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00B4D8]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00B4D8]/20 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-[#00B4D8]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0B1F3B] mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-[4/3]">
              <div className="absolute inset-0 bg-[#0B1F3B] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-8">
                  <svg className="absolute inset-0 w-full h-full opacity-30">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <line
                        key={i}
                        x1={`${Math.random() * 100}%`}
                        y1={`${Math.random() * 100}%`}
                        x2={`${Math.random() * 100}%`}
                        y2={`${Math.random() * 100}%`}
                        stroke="#00B4D8"
                        strokeWidth="1"
                      />
                    ))}
                  </svg>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-[#00B4D8] rounded-xl bg-[#00B4D8]/10 flex items-center justify-center backdrop-blur-sm">
                    <Cpu className="w-16 h-16 text-[#00B4D8]" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                      <AlertCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-[#00B4D8] to-transparent animate-scan" />
                  </div>

                  {[
                    { x: '20%', y: '30%' },
                    { x: '70%', y: '25%' },
                    { x: '80%', y: '70%' },
                    { x: '25%', y: '75%' },
                  ].map((pos, i) => (
                    <div
                      key={i}
                      className="absolute w-4 h-4 border-2 border-[#00B4D8] rounded-full animate-ping"
                      style={{ left: pos.x, top: pos.y, animationDelay: `${i * 0.3}s` }}
                    >
                      <div className="absolute inset-0 bg-[#00B4D8] rounded-full" />
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#0B1F3B]/80 backdrop-blur-sm border border-[#00B4D8]/30 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-400 font-mono mb-1">FAULT DETECTED</div>
                      <div className="text-sm text-white font-semibold">Power IC - U7500</div>
                    </div>
                    <div className="px-3 py-1 bg-red-500/20 border border-red-500 rounded text-xs text-red-400 font-mono">
                      CRITICAL
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -inset-4 bg-gradient-to-r from-[#00B4D8]/20 to-[#0077B6]/20 rounded-3xl blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
    </section>
  );

  const EngineeringDashboard = () => (
    <section className="relative py-24 bg-[#0B1F3B] overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="dashboard-circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20,20 L50,20 L50,50 M80,80 L80,100 L100,100" stroke="#00B4D8" fill="none" strokeWidth="2" />
              <circle cx="50" cy="50" r="5" fill="#00B4D8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dashboard-circuit)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00B4D8]/10 border border-[#00B4D8]/20 rounded-full text-sm font-semibold text-[#00B4D8] mb-6">
            <BarChart3 className="w-4 h-4" />
            Enterprise Performance
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Engineering at Scale</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-time insights into our device engineering ecosystem across Dubai
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Package, value: '3,000+', label: 'Devices Repaired', trend: '+24%' },
            { icon: Users, value: '120+', label: 'Business Clients', trend: '+18%' },
            { icon: TrendingUp, value: '90%', label: 'Save Rate', trend: '+5%' },
            { icon: Clock, value: '24-72h', label: 'Avg Turnaround', trend: '-12%' },
          ].map((metric, i) => {
            const Icon = metric.icon;
            return (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[#00B4D8]/20 rounded-lg flex items-center justify-center group-hover:bg-[#00B4D8]/30 transition-colors">
                    <Icon className="w-6 h-6 text-[#00B4D8]" />
                  </div>
                  <span className="text-xs text-green-400 font-semibold bg-green-400/10 px-2 py-1 rounded">
                    {metric.trend}
                  </span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </div>
            );
          })}
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Device Network Status</h3>
              <p className="text-sm text-gray-400">Live repair pipeline monitoring</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-green-400 font-semibold">OPERATIONAL</span>
            </div>
          </div>

          <div className="relative h-48 flex items-end gap-2">
            {Array.from({ length: 24 }).map((_, i) => {
              const height = 30 + Math.random() * 70;
              return (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-[#00B4D8] to-[#0077B6] rounded-t transition-all hover:opacity-80 cursor-pointer"
                  style={{
                    height: `${height}%`,
                    animationDelay: `${i * 0.05}s`,
                  }}
                />
              );
            })}
          </div>

          <div className="flex justify-between mt-4 text-xs text-gray-500">
            <span>00:00</span>
            <span>06:00</span>
            <span>12:00</span>
            <span>18:00</span>
            <span>24:00</span>
          </div>
        </div>
      </div>
    </section>
  );

  const ReplaceVsRepair = () => (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      <div className="container mx-auto px-6 py-20 relative z-10 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1F3B] mb-4">
            The Hidden Cost of Replacement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Most devices are replaced without understanding the real problem. Smart businesses choose precision repair.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 to-gray-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-10 border-2 border-gray-300 shadow-lg transition-all duration-400 group-hover:shadow-xl group-hover:border-gray-400">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gray-300 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-7 h-7 text-gray-700" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Replace</h3>
              </div>

              <div className="space-y-6">
                {[
                  { label: 'Procurement Complexity', value: 'High' },
                  { label: 'Operational Disruption', value: 'Extended' },
                  { label: 'Data Transition Risk', value: 'Moderate to High' },
                  { label: 'Productivity Impact', value: 'Significant' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-3 px-4 bg-white/60 rounded-xl border border-gray-200"
                  >
                    <span className="text-gray-700 font-medium">{item.label}</span>
                    <span className="font-semibold text-gray-900">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-5 bg-red-50/80 border border-red-200 rounded-2xl text-center">
                <div className="text-sm text-red-700 font-semibold mb-2 uppercase tracking-wide">Overall Impact</div>
                <p className="text-lg font-medium text-red-800">
                  Replacement introduces multiple layers of cost, risk, and downtime.
                </p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/20 to-[#0077B6]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 border-2 border-[#00B4D8] shadow-lg transition-all duration-400 group-hover:shadow-2xl group-hover:border-[#0099bb] group-hover:scale-[1.02]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-[#00B4D8] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#0B1F3B]">Repair</h3>
              </div>

              <div className="space-y-6">
                {[
                  { label: 'Problem Isolation', value: 'Precise' },
                  { label: 'Operational Continuity', value: 'Maintained' },
                  { label: 'Data Integrity', value: 'Preserved' },
                  { label: 'Turnaround Efficiency', value: 'Optimized' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-3 px-4 bg-white/80 rounded-xl border border-[#00B4D8]/20"
                  >
                    <span className="text-gray-700 font-medium">{item.label}</span>
                    <span className="font-semibold text-[#0B1F3B]">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-5 bg-[#00B4D8]/10 border border-[#00B4D8]/30 rounded-2xl text-center">
                <div className="text-sm text-[#00B4D8] font-semibold mb-2 uppercase tracking-wide">Overall Impact</div>
                <p className="text-lg font-medium text-[#0B1F3B]">
                  Repair focuses on solving the exact issue with minimal disruption and maximum efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/how-it-works">
            <div className="inline-flex items-center gap-3 px-10 py-5 bg-[#00B4D8] hover:bg-[#0099bb] text-white font-semibold rounded-2xl shadow-lg shadow-[#00B4D8]/30 hover:shadow-xl transition-all hover:-translate-y-1">
              Discover the smarter approach
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );

  const RepairPipeline = () => (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1F3B] mb-4">How Future Fix Works</h2>
          <p className="text-xl text-gray-600">No queues. No guesswork. No unnecessary replacement.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
          {[
            { step: '01', title: 'Initial Diagnosis', desc: 'AI-assisted chip analysis via WhatsApp', icon: Activity },
            { step: '02', title: 'Device Pickup', desc: 'Scheduled at your convenience in Dubai', icon: Package },
            { step: '03', title: 'Chip Repair', desc: 'Micro-component engineering in lab', icon: Cpu },
            { step: '04', title: 'Quality Test', desc: '72-point inspection & validation', icon: Shield },
            { step: '05', title: 'Delivery', desc: 'Secure return to your location', icon: CheckCircle2 },
          ].map((process, i) => {
            const Icon = process.icon;
            return (
              <React.Fragment key={i}>
                <div className="flex-1 text-center group">
                  <div className="relative mx-auto w-24 h-24 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8] to-[#0077B6] rounded-2xl shadow-lg shadow-[#00B4D8]/30 group-hover:scale-110 transition-transform flex items-center justify-center">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#0B1F3B] rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {process.step}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-[#0B1F3B] mb-2">{process.title}</h4>
                  <p className="text-gray-600 text-sm">{process.desc}</p>
                </div>
                {i < 4 && <ChevronRight className="hidden lg:block w-6 h-6 text-[#00B4D8]" />}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );

  const UserEcosystem = () => (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1F3B] mb-4">
            Complete Device Engineering{' '}
            <span className="bg-gradient-to-r from-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">Ecosystem</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              category: 'For Individuals',
              icon: Smartphone,
              color: 'from-cyan-50 to-blue-50',
              border: 'border-cyan-200',
              items: ['Laptop & Mobile Diagnostics', 'Chip-Level Repair', 'Hardware Replacement', 'Software Optimization'],
            },
            {
              category: 'For Businesses',
              icon: Monitor,
              color: 'from-blue-50 to-indigo-50',
              border: 'border-blue-200',
              items: ['Bulk Device Servicing', 'Corporate IT Support', 'Annual Maintenance Contracts', 'Used Laptop Trading'],
            },
            {
              category: 'For Enterprises',
              icon: Server,
              color: 'from-indigo-50 to-purple-50',
              border: 'border-indigo-200',
              items: ['Device Lifecycle Management', 'Downtime Reduction Systems', 'Dedicated Technical Support', 'Fleet Optimization'],
            },
          ].map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className={`relative p-8 bg-gradient-to-br ${service.color} rounded-2xl border-2 ${service.border} hover:shadow-xl transition-all group`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-[#00B4D8]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1F3B]">{service.category}</h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-[#00B4D8] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );

  const CaseMorph = () => (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1F3B] mb-4">Client Success Stories</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              id: '01',
              title: 'SME Office in Deira',
              stats: ['18 laptops diagnosed', '14 saved from replacement', 'Significant cost efficiency', 'Minimal downtime with pickup service'],
            },
            {
              id: '02',
              title: 'Tech Startup in DIFC',
              stats: ['MacBook Pro fleet serviced', 'Logic board repairs completed', '48-hour turnaround achieved', 'Annual contract secured'],
            },
            {
              id: '03',
              title: 'Retail Chain Operations',
              stats: ['25 POS systems maintained', 'Preventive maintenance deployed', 'Extended device lifespan', 'Quarterly IT audits included'],
            },
          ].map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#00B4D8] hover:shadow-xl transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="px-3 py-1 bg-[#00B4D8]/10 rounded-lg text-[#00B4D8] font-mono text-sm font-bold">
                  Case {caseStudy.id}
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0B1F3B] mb-6">{caseStudy.title}</h3>
              <ul className="space-y-3">
                {caseStudy.stats.map((stat, j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{stat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const DubaiPositioning = () => (
    <section className="relative py-24 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00B4D8]/10 border border-[#00B4D8]/20 rounded-full text-sm font-semibold text-[#00B4D8] mb-6">
            <MapPin className="w-4 h-4" />
            Dubai-First Approach
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#0B1F3B]">
            Built for Dubai's{' '}
            <span className="bg-gradient-to-r from-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">Speed-Driven Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            In Dubai, time is more expensive than hardware. Future Fix helps companies save working hours, reduce operational disruption, and extend device lifespan.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Clock, label: 'Reduced Downtime', value: '85%' },
              { icon: TrendingUp, label: 'Cost Efficiency', value: '62%' },
              { icon: Users, label: 'Client Retention', value: '94%' },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all"
                >
                  <Icon className="w-8 h-8 text-[#00B4D8] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-[#0B1F3B] mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );

  const FinalCoreCTA = () => (
    <section className="relative py-24 bg-gradient-to-br from-[#0B1F3B] via-blue-900 to-[#0B1F3B] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00B4D8]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Before You Replace Your Device,
          <br />
          <span className="text-[#00B4D8]">Let Engineers Look at It.</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <a
            href={WHATSAPP_LINK}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#00B4D8] hover:bg-[#0096C7] text-white font-semibold rounded-lg shadow-lg shadow-[#00B4D8]/30 hover:shadow-xl hover:shadow-[#00B4D8]/40 transition-all hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5" />
            Contact on WhatsApp
          </a>
          <a
            href="tel:+971556166465"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-[#0B1F3B] font-semibold rounded-lg transition-all hover:-translate-y-1"
          >
            <Phone className="w-5 h-5" />
            Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
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
  );

  return (
    <div className="bg-white">
      <Header/>
      <HeroLaptopCore />
      <LaptopXray />
      <EngineeringDashboard />
      <ReplaceVsRepair />
      <RepairPipeline />
      <UserEcosystem />
      <CaseMorph />
      <DubaiPositioning />
      <FinalCoreCTA />
      <Footer />
    </div>
  );
}