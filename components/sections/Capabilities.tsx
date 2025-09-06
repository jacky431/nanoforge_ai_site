'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Compass, TrendingUp, Cog } from 'lucide-react';

interface CapabilitiesProps {
  language: 'en' | 'ko';
}

export default function Capabilities({ language }: CapabilitiesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const content = {
    en: {
      title: 'Core Capabilities'
    },
    ko: {
      title: '핵심 기술'
    }
  };

  const capabilities = {
    en: [
      {
        icon: Compass,
        title: 'Design',
        description: 'Inverse design & desired property exploration',
        details: 'AI-driven inverse design generates candidate materials tailored to target properties.'
      },
      {
        icon: TrendingUp,
        title: 'Optimization',
        description: 'Multi-objective recipe and process optimization',
        details: 'Automated optimization balances efficiency, cost, and performance across synthesis parameters.'
      },
      {
        icon: Cog,
        title: 'Automation',
        description: 'Closed-loop robotics with evolving protocols',
        details: 'SDL and robotic systems execute synthesis in adaptive closed-loops with continuous refinement.'
      }
    ],
    ko: [
      {
        icon: Compass,
        title: '설계',
        description: '역설계 및 목표 물성 탐색',
        details: 'AI 기반 역설계를 통해 목표 물성에 맞는 후보 소재를 생성합니다.'
      },
      {
        icon: TrendingUp,
        title: '최적화',
        description: '다목적 레시피 및 공정 최적화',
        details: '자동화된 최적화를 통해 합성 조건 전반에서 효율, 비용, 성능의 균형을 이룹니다.'
      },
      {
        icon: Cog,
        title: '자동화',
        description: '지속적으로 진화하는 폐루프 로보틱스',
        details: 'SDL과 로봇 시스템이 적응형 폐루프에서 합성을 실행하며 지속적으로 합성 효율을 향상시킵니다.'
      }
    ]
  };

  return (
    <section id="capabilities" className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-20"
        >
          <h2 className={`text-4xl md:text-5xl font-light mb-8 tracking-tight text-gray-200 ${
            language === 'ko' ? 'font-pretendard' : ''
          }`} style={{ color: '#EFECEE', fontWeight: 600 }}>
            {content[language].title}
          </h2>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-3 gap-12 relative">
          {capabilities[language].map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-gray-900/10 to-black/20 backdrop-blur-sm hover:border-brand-teal/20 transition-all duration-700 group-hover:bg-gray-900/20 h-full">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 mx-auto mb-8 bg-gradient-to-br from-brand-accent/15 to-brand-purple/15 rounded-xl flex items-center justify-center group-hover:from-brand-accent/25 group-hover:to-brand-purple/25 transition-all duration-500 border border-white/5"
                >
                  <capability.icon className="w-12 h-12 text-white group-hover:text-[#4A5A9E] transition-colors duration-300" />
                </motion.div>

                {/* Content */}
                <div className="text-center space-y-4">
                 <h3 className={`text-2xl font-light text-white tracking-wide ${
                    language === 'ko' ? 'font-pretendard' : ''
                  }`} style={{ fontWeight: 600 }}>
                    {capability.title}
                  </h3>
                 <p className={`text-gray-400 font-light text-base leading-relaxed ${
                    language === 'ko' ? 'font-pretendard' : ''
                  }`} style={{ fontWeight: 600 }}>
                    {capability.description}
                  </p>
                 <p className={`text-gray-500 text-sm leading-relaxed font-light ${
                    language === 'ko' ? 'font-pretendard' : ''
                  }`} style={{ fontWeight: 600 }}>
                    {capability.details}
                  </p>
                </div>

                {/* Hover Glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-purple/3 to-brand-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}