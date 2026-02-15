// Header.jsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl lg:text-3xl font-light tracking-tight">
              Future<span className="font-semibold text-[#0ea5e9]">Fix</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-[#0ea5e9] transition">Home</Link>
            <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-[#0ea5e9] transition">Services</Link>
            <Link href="/process" className="text-sm font-medium text-gray-700 hover:text-[#0ea5e9] transition">Process</Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-[#0ea5e9] transition">About</Link>
            <Link 
              href="/contact" 
              className="px-6 py-2.5 bg-[#0ea5e9] text-white text-sm font-medium rounded-md hover:bg-[#0284c7] transition"
            >
              Contact Us
            </Link>
          </div>

          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}