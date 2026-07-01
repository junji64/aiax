import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function InquiryForm() {
  const [ref, isVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    inquiryType: 'AI 교육',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTypeSelect = (type) => {
    setFormData((prev) => ({ ...prev, inquiryType: type }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple Validation
    if (!formData.company || !formData.name || !formData.phone || !formData.email || !formData.message) {
      setStatus({ submitting: false, success: false, error: '모든 필수 항목을 입력해주세요.' });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    // Simulate API request
    setTimeout(() => {
      setStatus({ submitting: false, success: true, error: null });
      setFormData({
        company: '',
        name: '',
        phone: '',
        email: '',
        inquiryType: 'AI 교육',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="inquiry" ref={ref} className={`py-24 bg-navy-dark relative border-t border-white/5 overflow-hidden fade-in-section ${isVisible ? 'is-visible' : ''}`}>
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-brand-blue text-sm font-semibold tracking-wider uppercase block mb-1">GET IN TOUCH</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-off-white mb-4">
            귀사의 AI 혁신을 지금 시작하세요
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
            문의 내용을 남겨주시면 영업일 기준 24시간 이내에 대표 교수가 직접 분석한 사전 진단 결과와 함께 연락을 드리겠습니다.
          </p>
        </div>

        {/* Inquiry Form */}
        <div className="glass-card rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">
          {status.success ? (
            <div className="text-center py-12 flex flex-col items-center animate-fade-in">
              <CheckCircle2 className="w-16 h-16 text-green-400 mb-6 text-glow" />
              <h3 className="text-2xl font-bold text-off-white mb-3">상담 신청이 정상적으로 완료되었습니다!</h3>
              <p className="text-gray-400 max-w-md mx-auto text-sm md:text-base leading-relaxed">
                보내주신 정보를 바탕으로 꼼꼼히 진단한 후, 기재해주신 이메일 및 연락처를 통해 신속하게 답변 드리겠습니다.
              </p>
              <button
                onClick={() => setStatus((prev) => ({ ...prev, success: false }))}
                className="mt-8 px-6 py-2.5 bg-brand-blue hover:bg-brand-blue/90 text-off-white font-semibold rounded-lg transition-colors cursor-pointer"
              >
                새로운 문의 작성하기
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {status.error && (
                <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-200 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{status.error}</span>
                </div>
              )}

              {/* Inquiry Type Radio Buttons */}
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-3">문의 유형 <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-3 gap-3">
                  {['AI 교육', 'AX 컨설팅', '기타'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => handleTypeSelect(type)}
                      className={`py-3.5 px-4 rounded-xl text-sm font-semibold border transition-all cursor-pointer ${
                        formData.inquiryType === type
                          ? 'bg-gradient-to-r from-brand-blue/20 to-brand-purple/20 border-brand-blue text-off-white font-bold shadow-[0_0_15px_rgba(0,141,218,0.15)]'
                          : 'bg-navy-dark/40 border-white/5 text-gray-400 hover:border-white/20'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2-Column Fields (Company & Name) */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-gray-300 text-sm font-semibold mb-2">회사명/기관명 <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="예: AI & AX 혁신연구소"
                    className="w-full py-3.5 px-4 rounded-xl bg-navy-dark/60 border border-white/10 text-off-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm font-semibold mb-2">담당자 이름 <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="예: 홍길동 팀장"
                    className="w-full py-3.5 px-4 rounded-xl bg-navy-dark/60 border border-white/10 text-off-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                    required
                  />
                </div>
              </div>

              {/* 2-Column Fields (Phone & Email) */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-300 text-sm font-semibold mb-2">연락처 <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="예: 010-1234-5678"
                    className="w-full py-3.5 px-4 rounded-xl bg-navy-dark/60 border border-white/10 text-off-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">이메일 주소 <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="예: contact@company.com"
                    className="w-full py-3.5 px-4 rounded-xl bg-navy-dark/60 border border-white/10 text-off-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                    required
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-semibold mb-2">문의 내용 <span className="text-red-500">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="예: 교육 인원, 예상 일정, 교육 대상(임원/실무자), 컨설팅 요구사항 등을 적어주시면 더 정확한 사전 상담이 가능합니다."
                  rows="5"
                  className="w-full py-3.5 px-4 rounded-xl bg-navy-dark/60 border border-white/10 text-off-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full group relative inline-flex items-center justify-center gap-3 py-4 px-6 bg-gradient-to-r from-brand-blue to-brand-purple text-off-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,141,218,0.4)] disabled:opacity-50 cursor-pointer"
                >
                  {status.submitting ? (
                    <div className="w-5 h-5 border-2 border-off-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>상담 신청서 제출하기</span>
                      <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
