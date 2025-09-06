'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'ko';
}

export default function Hero({ language }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const content = {
    en: {
      title: "We forge the future of matter.",
      subtitle: "Leading the future of materials with AI and automation.",
      scroll: "Explore"
    },
    ko: {
      title: "세상을 소재로 혁신하다",
      subtitle: "AI, 로봇, 최적화를 결합하여 소재 혁신을 이끌어갑니다.",
      scroll: "탐색"
    }
  };

  return (
    <section ref={ref} className="relative h-screen flex md:items-center items-start md:justify-center justify-center overflow-hidden md:pt-0 pt-[6cm]">
      {/* Animated Wireframe Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0"
      >
        {/* Grid Pattern */}
        <div className="absolute inset-0 crystal-grid opacity-5" />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-brand-purple rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center max-w-6xl mx-auto px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="mb-12"
        >
          <h1 className={`text-6xl md:text-8xl font-light tracking-tight mb-8 leading-tight ${
            language === 'ko' ? 'font-pretendard' : ''
          }`}
          style={{ color: '#EFECEE', fontWeight: 600 }}
          >
            <span className="text-glow">
              {content[language].title}
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className={`text-lg md:text-2xl font-light text-gray-400 leading-relaxed max-w-4xl mx-auto ${
              language === 'ko' ? 'font-pretendard' : ''
            }`}
            style={{ fontWeight: 600 }}
          >
            {content[language].subtitle}
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-500 space-y-2"
          >
            <span className={`text-xs font-light mb-2 tracking-wider ${
              language === 'ko' ? 'font-pretendard' : ''
            }`}>
              {content[language].scroll}
            </span>
            
            {/* Animated Scroll Indicator */}
            <div className="relative">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-1 h-3 bg-gradient-to-b from-brand-teal to-transparent rounded-full mt-2"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}