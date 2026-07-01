import React from 'react';
import { Award, BookOpen, MessageSquare, Play } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function Profile() {
  const [ref, isVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="profile" ref={ref} className={`py-24 bg-navy-dark border-t border-white/5 relative fade-in-section ${isVisible ? 'is-visible' : ''}`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-off-white mb-4">
            이론부터 실무까지, 검증된 AI 전문가가 함께합니다.
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto rounded-full"></div>
        </div>

        {/* Profile Card Layout */}
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left Column: Profile Photo */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-purple rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              
              {/* Photo Wrapper */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 glow-blue">
                <img
                  src="/professor_profile.jpg"
                  alt="AI 학과 교수 프로필"
                  className="w-full max-w-[360px] md:max-w-none h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent opacity-60"></div>
                
                {/* Photo Badge */}
                <div className="absolute bottom-4 left-4 right-4 glass-card py-3 px-4 rounded-xl text-center">
                  <p className="text-off-white font-bold text-lg">김준지 교수</p>
                  <p className="text-brand-blue text-xs font-semibold mt-1">현직 AI공학과 교수 / 딥러닝 ML 전공</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Experience & YouTube Details */}
          <div className="md:col-span-7 flex flex-col justify-center">
            {/* Bio Title */}
            <div className="mb-6">
              <span className="text-brand-blue text-sm font-semibold tracking-wider uppercase block mb-1">FOUNDER PROFILE</span>
              <h3 className="text-2xl font-bold text-off-white">15년간 다져진 압도적인 전문성과 검증된 강의력</h3>
            </div>

            {/* Experience List */}
            <div className="space-y-4 mb-8">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-brand-blue/10 rounded-xl text-brand-blue shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-off-white font-bold">15년 경력의 AI 학과 교수</h4>
                  <p className="text-gray-400 text-sm mt-1">딥러닝, 머신러닝, 자연어 처리 등 핵심 AI 원천 기술 강의 및 프로젝트 지도</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-brand-purple/10 rounded-xl text-brand-purple shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-off-white font-bold">맞춤형 실무 지향 커리큘럼 설계</h4>
                  <p className="text-gray-400 text-sm mt-1">이론 위주 교육의 한계를 넘어, 기업 비즈니스 데이터를 직접 다뤄보는 실전형 커리큘럼 제공</p>
                </div>
              </div>
            </div>

            {/* YouTube Social Proof Section */}
            <div className="glass-card rounded-2xl p-6 border border-brand-purple/20">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-600 rounded-lg text-white">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.872.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-off-white font-bold">유튜브 채널 연동</h4>
                    <p className="text-xs text-gray-400">@junji-ai | 누구나 쉽게 배우는 AI</p>
                  </div>
                </div>
                {/* Channel Link Button */}
                <a
                  href="https://youtube.com/@junji-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-red-600/90 hover:bg-red-600 text-off-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>채널 바로가기</span>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4 border-t border-white/5 pt-4">
                <div className="text-center">
                  <p className="text-brand-purple text-2xl font-black">모두함께 인공지능</p>
                  <p className="text-gray-400 text-xs mt-1">공식 채널명</p>
                </div>
                <div className="text-center border-l border-white/5">
                  <p className="text-brand-blue text-2xl font-black">누적 수만 명</p>
                  <p className="text-gray-400 text-xs mt-1">구독자 및 교육 수강생</p>
                </div>
              </div>

              <p className="text-gray-300 text-xs mt-4 leading-relaxed bg-navy-dark/40 p-3 rounded-lg border border-white/5">
                💬 <strong>"모두함께 인공지능"</strong> 채널을 통해 복잡한 AI 개념을 대중의 눈높이에 맞춰 전달해 왔습니다. 수많은 구독자와 수강생이 증명하는 <strong>명쾌하고 탁월한 강의 전달력</strong>을 직접 경험해보세요.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
