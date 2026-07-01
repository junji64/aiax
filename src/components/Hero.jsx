import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const handleScrollToInquiry = () => {
    const target = document.getElementById('inquiry');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-navy-dark pt-20">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl animate-pulse delay-700"></div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="relative max-w-5xl mx-auto px-6 py-16 text-center z-10 flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-brand-blue text-sm font-semibold mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 animate-spin-slow" />
          <span>현직 AI 학과 교수 직강 & 컨설팅</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-off-white tracking-tight leading-tight md:leading-none max-w-4xl mb-6">
          15년의 AI 연구와 교육 노하우, <br />
          이제 귀사의 <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent text-glow">AX(인공지능 전환)</span> 성공 방정식이 됩니다.
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed">
          이론에 그치지 않는 실무 중심의 교육과, 비즈니스 가치를 창출하는 맞춤형 AX 컨설팅으로 귀사의 지속 가능한 혁신을 지원합니다.
        </p>

        {/* CTA Button */}
        <button
          onClick={handleScrollToInquiry}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-purple text-off-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,141,218,0.5)] cursor-pointer"
        >
          <span>무료 AX 진단 및 교육 문의하기</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => document.getElementById('profile').scrollIntoView({ behavior: 'smooth' })}>
          <div className="w-6 h-10 rounded-full border-2 border-gray-500 flex justify-center p-1">
            <div className="w-1.5 h-3 bg-brand-blue rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
