'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Capabilities from '@/components/sections/Capabilities';
import News from '@/components/sections/News';
import Contact from '@/components/sections/Contact';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ko'>('en');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-brand-teal border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <AnimatePresence>
      <div className="bg-gradient-to-br from-brand-dark via-brand-primary to-brand-secondary text-white overflow-hidden relative min-h-screen">
        {/* Ambient Background */}
        <div className="fixed inset-0 bg-gradient-to-br from-brand-dark via-brand-primary to-brand-secondary opacity-90" />
        <div className="fixed inset-0 bg-gradient-to-t from-brand-accent/15 via-transparent to-transparent" />
        
        <Navigation language={language} setLanguage={setLanguage} />
        <main className="relative z-10">
          <Hero language={language} />
          <About language={language} />
          <Capabilities language={language} />
          <News language={language} />
          <Contact language={language} />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}