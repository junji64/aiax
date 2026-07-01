import React from 'react';
import { Search, Compass, Zap, RotateCw } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function Process() {
  const [ref, isVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });
  const steps = [
    {
      num: "01",
      title: "사전 상담 및 진단",
      description: "귀사의 현재 기술 스택, 비즈니스 목표, 직원들의 역량 수준을 다각도로 진단하여 혁신의 출발점을 설정합니다.",
      icon: Search,
      color: "from-brand-blue to-cyan-500",
      glow: "rgba(0, 141, 218, 0.3)"
    },
    {
      num: "02",
      title: "맞춤형 제안",
      description: "진단 결과를 기반으로, 기업 맞춤형 AI 학습 커리큘럼 및 현실성 높은 AX 단계별 구축 로드맵을 제안합니다.",
      icon: Compass,
      color: "from-cyan-500 to-brand-purple",
      glow: "rgba(139, 92, 246, 0.3)"
    },
    {
      num: "03",
      title: "교육 및 실행",
      description: "귀사의 비즈니스 프로세스를 혁신적으로 재설계하기 위해, 실제 데이터를 다루며 실무 지향 솔루션을 빌드합니다.",
      icon: Zap,
      color: "from-brand-purple to-pink-500",
      glow: "rgba(236, 72, 153, 0.3)"
    },
    {
      num: "04",
      title: "사후 피드백 및 고도화",
      description: "성과를 면밀히 분석하고 추가 최적화 전략 및 안정적인 운영 지원을 지속적으로 제공합니다.",
      icon: RotateCw,
      color: "from-pink-500 to-brand-blue",
      glow: "rgba(0, 141, 218, 0.3)"
    }
  ];

  return (
    <section id="process" ref={ref} className={`py-24 bg-navy-dark relative border-t border-white/5 overflow-hidden fade-in-section ${isVisible ? 'is-visible' : ''}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-20">
          <span className="text-brand-blue text-sm font-semibold tracking-wider uppercase block mb-1">PARTNERSHIP PROCESS</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-off-white mb-4">
            AX 파트너십 프로세스
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
            문의부터 실행, 그리고 사후 관리까지 체계적인 4단계 프로세스로 확실한 전환 성과를 냅니다.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-[70px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-blue opacity-25"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div key={idx} className="relative flex flex-col items-center text-center group">
                  {/* Step Icon & Number circle */}
                  <div className="relative mb-6">
                    {/* Outer Neon Glow Ring */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${step.color} rounded-full blur opacity-40 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    
                    {/* Circle Background */}
                    <div className="relative w-24 h-24 rounded-full bg-navy-dark border border-white/10 flex items-center justify-center text-off-white">
                      <IconComponent className="w-10 h-10 text-glow" />
                    </div>

                    {/* Step Number Badge */}
                    <div className={`absolute -top-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center font-bold text-xs text-off-white shadow`}>
                      {step.num}
                    </div>
                  </div>

                  {/* Step Description Card */}
                  <div className="glass-card rounded-2xl p-6 border border-white/5 transition-all duration-300 hover:border-white/15 h-full flex flex-col">
                    <h3 className="text-lg font-bold text-off-white mb-3 group-hover:text-brand-blue transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
