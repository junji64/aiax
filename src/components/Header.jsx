import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-nav py-4 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="p-1.5 bg-gradient-to-r from-brand-blue to-brand-purple rounded-lg text-off-white">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="text-off-white font-extrabold text-lg md:text-xl tracking-tight">
            AI & AX <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">혁신 연구소</span>
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('profile')}
            className="text-gray-300 hover:text-brand-blue text-sm font-semibold transition-colors cursor-pointer"
          >
            대표 소개
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-gray-300 hover:text-brand-blue text-sm font-semibold transition-colors cursor-pointer"
          >
            전문 분야
          </button>
          <button
            onClick={() => scrollToSection('process')}
            className="text-gray-300 hover:text-brand-blue text-sm font-semibold transition-colors cursor-pointer"
          >
            진행 절차
          </button>
          <button
            onClick={() => scrollToSection('inquiry')}
            className="text-gray-300 hover:text-brand-blue text-sm font-semibold transition-colors cursor-pointer"
          >
            상담 문의
          </button>
        </nav>

        {/* CTA Button */}
        <div>
          <button
            onClick={() => scrollToSection('inquiry')}
            className="px-5 py-2.5 bg-brand-blue/90 hover:bg-brand-blue text-off-white text-xs md:text-sm font-bold rounded-lg transition-colors cursor-pointer"
          >
            무료 진단 신청
          </button>
        </div>
      </div>
    </header>
  );
}
