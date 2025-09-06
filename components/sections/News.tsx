'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

interface NewsProps {
  language: 'en' | 'ko';
}

export default function News({ language }: NewsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const newsArticles = [
    {
      title: {
        en: "NanoForge AI Secures Seed Funding for autonomous materials discovery platform",
        ko: "나노포지에이아이, 퓨처플레이·매쉬업벤처스 시드 투자 유치"
      },
      url: language === 'ko' ? "https://www.businesskorea.co.kr/news/articleView.html?idxno=247180" : "https://www.businesskorea.co.kr/news/articleView.html?idxno=247202",
      date: "2025"
    },
    {
      title: {
        en: "Korean startup develops AI-powered materials research automation system",
        ko: "한국 스타트업, AI 기반 소재 연구 자동화 시스템 개발"
      },
      url: language === 'ko' ? "https://www.venturesquare.net/993251" : "https://www.venturesquare.net/en/993329",
      date: "2025"
    },
    {
      title: {
        en: "NanoForge AI automates material R&D, cutting years to weeks.",
        ko: "AI·로보틱스 결합으로 소재 R&D 자동화"
      },
      url: language === 'ko' ? "https://www.mk.co.kr/news/it/11368255" : "https://www.mk.co.kr/en/it/11368255",
      date: "2025"
    },
    {
      title: {
        en: "Autonomous laboratory technology accelerates materials innovation timeline",
        ko: "AI가 설계하고 로봇이 산업소재 만든다"
      },
      url: language === 'ko' ? "https://www.mk.co.kr/news/business/11368047" : "https://www.mk.co.kr/en/business/11368047",
      date: "2025"
    }
  ];

  const content = {
    en: {
      title: "Latest News",
      description: "Stay updated with our latest developments and achievements"
    },
    ko: {
      title: "최신 소식",
      description: "NanoForge AI의 최신 개발 현황과 성과를 확인하세요"
    }
  };

  return (
    <section id="news" className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-light mb-6 tracking-tight ${
            language === 'ko' ? 'font-pretendard' : ''
          }`} style={{ fontWeight: 600 }}>
            <span className="gradient-text">{content[language].title}</span>
          </h2>
          <p className={`text-lg font-light text-gray-400 ${
            language === 'ko' ? 'font-pretendard' : ''
          }`} style={{ fontWeight: 600 }}>
            {content[language].description}
          </p>
        </motion.div>

        {/* News Articles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="space-y-6"
        >
          {newsArticles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              className="group"
            >
              <a
                href={typeof article.url === 'string' ? article.url : article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-xl border border-white/5 bg-gray-900/10 backdrop-blur-sm hover:shadow-lg hover:shadow-white/20 transition-shadow duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-4">
                    <h3 className={`text-lg font-light text-gray-300 group-hover:text-white transition-colors leading-relaxed ${
                      language === 'ko' ? 'font-pretendard' : ''
                    }`} style={{ fontWeight: 600 }}>
                      {article.title[language]}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2 font-light">
                      {article.date}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}