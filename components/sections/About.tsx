'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface AboutProps {
  language: 'en' | 'ko';
}

export default function About({ language }: AboutProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const content = {
    en: {
      description: "NanoForge AI builds autonomous, closed-loop laboratories for next-generation materials discovery."
    },
    ko: {
      description: "NanoForge AI는 차세대 소재 발견을 위한 AI 모델과 자동화 closed-loop 실험실을 구축합니다."
    }
  };

  return (
    <section id="about" className="h-screen flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5 }}
        >
          <p className={`text-2xl md:text-3xl font-light text-gray-300 leading-relaxed ${
            language === 'ko' ? 'font-pretendard' : ''
          }`} style={{ color: '#EFECEE', fontWeight: 600 }}>
            {content[language].description}
          </p>

          {/* Elegant Line Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 2, delay: 0.5 }}
            className="mt-16 relative"
          >
            {/* Central Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 2, delay: 1 }}
              className="h-px bg-gradient-to-r from-transparent via-brand-teal/60 to-transparent mx-auto max-w-md origin-center"
            />
            
            {/* Intersecting Elements */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={{ 
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-3 h-3 border border-brand-primary/60 rotate-45"
              />
            </div>
            
            {/* Side Elements */}
            {[-1, 1].map((direction, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: direction * -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1.5, delay: 1.5 + i * 0.2 }}
                className={`absolute top-0 ${direction === -1 ? 'left-8' : 'right-8'} transform -translate-y-1/2`}
              >
                <div className="w-2 h-2 bg-brand-teal/40 rounded-full" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}