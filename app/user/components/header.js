// components/Header.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname(); // ← Helps us know current active page

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* ─── Logo ─── */}
          <Link href="/" className="flex items-center">
            <div className="relative group">
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                <span className="text-[#0B1F3B]">Future</span>
                <span className="bg-gradient-to-r from-[#00B4D8] to-[#0096c7] bg-clip-text text-transparent">
                  Fix
                </span>
              </span>

              {/* Subtle arrow effect under "Fix" – very close to your uploaded logo */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-1.5 bg-gradient-to-r from-transparent via-[#00B4D8] to-transparent rounded-full opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>

          {/* ─── Desktop Navigation ─── */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-all duration-300 relative group ${
                    isActive
                      ? 'text-[#00B4D8] font-semibold'
                      : 'text-[#0B1F3B] hover:text-[#00B4D8]'
                  }`}
                >
                  {link.name}

                  {/* Underline animation */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#00B4D8] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ─── Mobile Menu Button ─── */}
          <button
            className="md:hidden text-[#0B1F3B] p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* ─── Mobile Menu ─── */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 shadow-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen py-5' : 'max-h-0 py-0'
        }`}
      >
        <div className="container mx-auto px-6">
          <nav className="flex flex-col space-y-5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium py-3 px-4 rounded-lg transition-all ${
                    isActive
                      ? 'bg-[#00B4D8]/10 text-[#00B4D8] font-semibold'
                      : 'text-[#0B1F3B] hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}