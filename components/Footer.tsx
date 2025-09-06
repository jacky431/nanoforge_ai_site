import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-4 text-gray-600">
            <div className="w-1 h-1 bg-brand-teal/40 rounded-full animate-pulse" />
            <span className="text-xs font-light tracking-widest">
              +82 02-2038-2373
            </span>
            <div className="w-1 h-1 bg-brand-primary/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <span className="text-xs font-light tracking-widest">
              NanoForge AI © 2025
            </span>
            <div className="w-1 h-1 bg-brand-primary/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}