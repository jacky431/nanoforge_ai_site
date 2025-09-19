import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Business Registration Information */}
          <div className="text-center space-y-2 text-gray-500 text-sm">
            <div className="space-y-1">
              <p className="font-light">상호명: 주식회사 나노포지에이아이</p>
              <p className="font-light">대표자: 김동현</p>
              <p className="font-light">사업자등록번호: 643-86-03429</p>
              <p className="font-light">주소: 서울특별시 성동구 아차산로7나길 18 801호</p>
              <p className="font-light">연락처: 02-2038-2373</p>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="flex items-center justify-center space-x-4 text-gray-600 text-center">
            <div className="w-1 h-1 bg-brand-teal/40 rounded-full animate-pulse" />
            <span className="text-xs font-light tracking-widest">
              NanoForge AI © 2025
            </span>
            <div className="w-1 h-1 bg-brand-primary/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
