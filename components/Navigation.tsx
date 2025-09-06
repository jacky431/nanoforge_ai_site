'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe, Atom } from 'lucide-react';

interface NavigationProps {
  language: 'en' | 'ko';
  setLanguage: (lang: 'en' | 'ko') => void;
}

export default function Navigation({ language, setLanguage }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = {
    en: [
      { name: 'About', href: '#about' },
      { name: 'Capabilities', href: '#capabilities' },
      { name: 'News', href: '#news' },
      { name: 'Contact', href: '#contact' }
    ],
    ko: [
      { name: '소개', href: '#about' },
      { name: '기술', href: '#capabilities' },
      { name: '소식', href: '#news' },
      { name: '연락', href: '#contact' }
    ]
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ko' : 'en');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/95 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-3"
          >
            <img 
             src="/Horizontal_white_Logo.svg" 
              alt="NanoForge AI" 
              className="h-8 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems[language].map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -1 }}
                className="text-sm text-gray-400 hover:text-brand-teal transition-colors duration-300 relative group"
                style={{ fontWeight: 600 }}
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-px bg-brand-teal group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-sm text-gray-500 hover:text-brand-purple transition-colors duration-300"
              style={{ fontWeight: 600 }}
            >
              <Globe className="w-8 h-8 text-white hover:text-[#4A5A9E] transition-colors duration-300" />
              <span>{language === 'en' ? 'EN' : '한글'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-[#4A5A9E] transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X className="w-12 h-12 text-white hover:text-[#4A5A9E] transition-colors duration-300" /> : <Menu className="w-12 h-12 text-white hover:text-[#4A5A9E] transition-colors duration-300" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-white/10 
           bg-gradient-to-b from-black/90 via-black/50 to-black/0 
           backdrop-blur-xl rounded-b-lg -mx-6"
          >
            <div className="flex flex-col space-y-4 pt-4 px-6">
              {navItems[language].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-brand-purple transition-colors"
                  style={{ fontWeight: 600 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-gray-500 hover:text-[#4A5A9E] transition-colors duration-300 self-start"
                style={{ fontWeight: 600 }}
              >
                <Globe className="w-8 h-8 text-white hover:text-[#4A5A9E] transition-colors duration-300" />
                <span>{language === 'en' ? 'English' : '한국어'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}