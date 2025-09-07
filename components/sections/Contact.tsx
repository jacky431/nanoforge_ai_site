'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, Mail, MapPin, Linkedin } from 'lucide-react';

interface ContactProps {
  language: 'en' | 'ko';
}

export default function Contact({ language }: ContactProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Scroll-based scaling for desktop logos
  const { scrollYProgress } = useScroll();
  const logoScale = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  const content = {
    en: {
      title: "The New Standard in Global Materials Innovation.",
      cta: "Contact us",
      email: "Email",
      location: "Location",
      locationValue: "#801, 18, Achasan-ro 7na-gil, Seongdong-gu, Seoul, Republic of Korea",
      linkedin: "LinkedIn"
    },
    ko: {
      title: "글로벌 소재 개발의 새로운 표준",
      cta: "문의하기",
      email: "이메일",
      location: "위치",
      locationValue: "서울특별시 성동구 아차산로7나길 18, 801호",
      linkedin: "링크드인"
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 relative overflow-visible">
      {/* Fixed Position Background Logos for Desktop */}
      <div className="hidden md:block">
        <motion.div
          style={{ scale: logoScale }}
          animate={{ 
            rotate: [0, 360],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ 
            duration: 72.7, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="fixed -top-64 -right-64 w-[62.4rem] h-[62.4rem] flex items-center justify-center -z-10 pointer-events-none select-none"
        >
          <img 
            src="/Icon_Logo.svg" 
            alt="NanoForge AI" 
            className="w-[16.64rem] h-[16.64rem] md:w-[41.6rem] md:h-[41.6rem] opacity-50 filter drop-shadow-[0_0_80px_rgba(14,165,165,0.6)] pointer-events-none select-none"
          />
        </motion.div>
        <motion.div
          style={{ scale: logoScale }}
          animate={{ 
            rotate: [360, 0],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ 
            duration: 81.8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="fixed -bottom-64 -left-64 w-[60.8rem] h-[60.8rem] flex items-center justify-center -z-10 pointer-events-none select-none"
        >
          <img 
            src="/Icon_Logo.svg" 
            alt="NanoForge AI" 
            className="w-[18.72rem] h-[18.72rem] md:w-[46.8rem] md:h-[46.8rem] opacity-40 filter drop-shadow-[0_0_100px_rgba(74,90,158,0.5)] pointer-events-none select-none"
          />
        </motion.div>
      </div>

      {/* Mobile Background Elements */}
      <div className="md:hidden absolute inset-0 overflow-visible">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.02, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ 
            duration: 72.7, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-32 -right-32 w-[62.4rem] h-[62.4rem] flex items-center justify-center pointer-events-none select-none"
        >
          <img 
            src="/Icon_Logo.svg" 
            alt="NanoForge AI" 
            className="w-[16.64rem] h-[16.64rem] opacity-50 filter drop-shadow-[0_0_80px_rgba(14,165,165,0.6)] pointer-events-none select-none"
          />
        </motion.div>
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.03, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ 
            duration: 81.8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-32 -left-32 w-[60.8rem] h-[60.8rem] flex items-center justify-center pointer-events-none select-none"
        >
          <img 
            src="/Icon_Logo.svg" 
            alt="NanoForge AI" 
            className="w-[18.72rem] h-[18.72rem] opacity-40 filter drop-shadow-[0_0_100px_rgba(74,90,158,0.5)] pointer-events-none select-none"
          />
        </motion.div>
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <h2 className={`text-4xl md:text-6xl font-light mb-12 tracking-tight leading-tight text-gray-200 ${
            language === 'ko' ? 'font-pretendard' : ''
          }`} style={{ color: '#EFECEE', fontWeight: 600 }}>
            {content[language].title}
          </h2>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-16"
          >
            <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-teal rounded-full text-white font-light text-lg">
              <span className={`tracking-wide ${
                language === 'ko' ? 'font-pretendard' : ''
              }`} style={{ fontWeight: 600 }}>
                {content[language].cta}
              </span>
              <ArrowDown className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="flex flex-col items-center space-y-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 bg-gradient-to-br from-brand-accent/15 to-brand-purple/15 rounded-lg flex items-center justify-center border border-white/5 group-hover:border-brand-purple/20 transition-all duration-300"
              >
                <Mail className="w-8 h-8 text-white group-hover:text-[#4A5A9E] transition-colors duration-300" />
              </motion.div>
              <div className="text-center">
                <p className={`text-xs text-gray-500 mb-1 font-light tracking-wide ${
                  language === 'ko' ? 'font-pretendard' : ''
                }`} style={{ fontWeight: 600 }}>
                  {content[language].email}
                </p>
                <p className="text-white text-sm" style={{ fontWeight: 600 }}>donghyeon.kim@nanoforgeai.com</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 bg-gradient-to-br from-brand-accent/15 to-brand-purple/15 rounded-lg flex items-center justify-center border border-white/5 group-hover:border-brand-purple/20 transition-all duration-300"
              >
                <a 
                  href={language === 'ko' 
                    ? 'https://naver.me/FNIuD4q5' 
                    : 'https://maps.google.com/?q=18,+Achasan-ro+7na-gil,+Seongdong-gu,+Seoul,+South+Korea'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 text-white hover:text-[#4A5A9E] transition-colors duration-300 flex items-center justify-center"
                >
                  <MapPin className="w-8 h-8" />
                </a>
              </motion.div>
              <div className="text-center">
                <p className={`text-xs text-gray-500 mb-1 font-light tracking-wide ${
                  language === 'ko' ? 'font-pretendard' : ''
                }`} style={{ fontWeight: 600 }}>
                  {content[language].location}
                </p>
                <p className="text-white font-light text-sm" style={{ fontWeight: 600 }}>
                  {content[language].locationValue}
                </p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3 group md:col-span-3 lg:col-span-1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 bg-gradient-to-br from-brand-accent/15 to-brand-purple/15 rounded-lg flex items-center justify-center border border-white/5 group-hover:border-brand-purple/20 transition-all duration-300"
              >
                <a 
                  href="https://www.linkedin.com/company/nanoforge-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 text-white hover:text-[#4A5A9E] transition-colors duration-300 flex items-center justify-center"
                >
                  <Linkedin className="w-8 h-8" />
                </a>
              </motion.div>
              <div className="text-center">
                <p className={`text-xs text-gray-500 mb-1 font-light tracking-wide ${
                  language === 'ko' ? 'font-pretendard' : ''
                }`} style={{ fontWeight: 600 }}>
                  {content[language].linkedin}
                </p>
                <p className="text-white text-sm" style={{ fontWeight: 600 }}>
                  NanoForge AI
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}