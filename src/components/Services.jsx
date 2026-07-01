import React from 'react';
import { GraduationCap, Cpu, CheckCircle } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function Services() {
  const [ref, isVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });
  const services = [
    {
      title: "AI 교육 (AI Education)",
      subtitle: "임원진 리터러시부터 개발자 실무 트레이닝까지",
      icon: GraduationCap,
      description: "현업에서 즉시 사용 가능한 역량 강화를 위해 1:1 맞춤형 고수준 커리큘럼을 제공합니다.",
      features: [
        "C-Level 임원진을 위한 비즈니스 AI 리터러시 특강",
        "개발자/엔지니어를 위한 딥러닝 & 머신러닝 하드코어 트레이닝",
        "LLM 및 생성형 AI 기반 업무 자동화 워크숍",
        "기업 맞춤형 실무 데이터 활용 파일럿 프로젝트 지도"
      ],
      glowClass: "hover:shadow-[0_0_30px_rgba(0,141,218,0.15)] hover:border-brand-blue/30"
    },
    {
      title: "AX 컨설팅 (AX Consulting)",
      subtitle: "인공지능 전환을 위한 핵심 비즈니스 로드맵 수립",
      icon: Cpu,
      description: "귀사의 비즈니스 프로세스를 철저히 분석하여, 비즈니스 가치를 극대화할 수 있는 AI 솔루션을 제안합니다.",
      features: [
        "비즈니스 프로세스 진단 및 AX 취약점 분석",
        "최적의 AI 모델/솔루션 아키텍처 매핑 및 도입 제안",
        "데이터 자산 진단 및 AI 학습 데이터 구축 전략 수립",
        "장단기 AX 로드맵 설계 및 ROI 예측 모델 지원"
      ],
      glowClass: "hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:border-brand-purple/30"
    }
  ];

  return (
    <section id="services" ref={ref} className={`py-24 bg-navy-dark relative border-t border-white/5 fade-in-section ${isVisible ? 'is-visible' : ''}`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-brand-blue text-sm font-semibold tracking-wider uppercase block mb-1">OUR EXPERTISE</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-off-white mb-4">
            우리의 전문 분야
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
            학술적 깊이와 15년 강의 현장의 전달력, 그리고 실무 적용 가능성에 초점을 맞춘 최상의 서비스를 제공합니다.
          </p>
        </div>

        {/* 2-Column Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div
                key={idx}
                className={`glass-card rounded-2xl p-8 md:p-10 border border-white/5 transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between ${service.glowClass}`}
              >
                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl shrink-0 ${
                      idx === 0 ? "bg-brand-blue/10 text-brand-blue" : "bg-brand-purple/10 text-brand-purple"
                    }`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-off-white">{service.title}</h3>
                      <p className="text-xs text-gray-400 mt-1">{service.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-3.5">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex gap-3 items-start text-sm text-gray-300">
                        <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${
                          idx === 0 ? "text-brand-blue" : "text-brand-purple"
                        }`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer Interaction */}
                <div className="mt-10 pt-6 border-t border-white/5 flex justify-end">
                  <button
                    onClick={() => document.getElementById('inquiry').scrollIntoView({ behavior: 'smooth' })}
                    className={`text-sm font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                      idx === 0 ? "text-brand-blue hover:text-brand-blue/80" : "text-brand-purple hover:text-brand-purple/80"
                    }`}
                  >
                    <span>자세히 문의하기</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
