import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-navy-dark border-t border-white/5 text-gray-500 text-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="p-1 bg-gradient-to-r from-brand-blue to-brand-purple rounded text-off-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="text-off-white font-extrabold text-sm md:text-base tracking-tight">
              AI & AX <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">혁신 연구소</span>
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            &copy; {new Date().getFullYear()} AI & AX Innovation Lab. All rights reserved.
          </p>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col items-center md:items-end text-xs text-gray-500 gap-1.5 text-center md:text-right">
          <p>대표이사: 김준지 | 개인정보관리책임자: 김준지</p>
          <p>이메일: support@junji-ai.com | 문의: 02-1234-5678</p>
          <p className="text-gray-600">본 페이지는 AI 교육 및 AX 컨설팅 서비스 홍보를 위한 데모용 랜딩페이지입니다.</p>
        </div>
      </div>
    </footer>
  );
}
