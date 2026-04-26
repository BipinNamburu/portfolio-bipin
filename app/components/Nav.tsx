'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const spring = { type: 'spring', stiffness: 600, damping: 38 } as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/90 backdrop-blur-md border-b border-border py-3.5 shadow-card'
          : 'py-5'
      }`}
    >
      <div className="max-w-content mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#top"
          className="font-serif text-xl font-bold text-t1 hover:text-t2 transition-colors"
        >
          BN.
        </a>

        <nav className="hidden md:flex items-center gap-0.5" aria-label="Primary navigation">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="px-3.5 py-1.5 text-sm text-t2 hover:text-t1 rounded-md hover:bg-surface-2 transition-all duration-150"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <motion.button
            onClick={toggle}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.88 }}
            transition={spring}
            aria-label="Toggle theme"
            className="w-8 h-8 rounded-full border border-border bg-surface-2 flex items-center justify-center text-t2 hover:text-t1 hover:border-border-strong transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'dark' ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0,   opacity: 1, scale: 1 }}
                  exit={{    rotate:  90, opacity: 0, scale: 0.6 }}
                  transition={spring}
                >
                  <Sun size={14} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90,  opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0,   opacity: 1, scale: 1 }}
                  exit={{    rotate: -90, opacity: 0, scale: 0.6 }}
                  transition={spring}
                >
                  <Moon size={14} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <span className="hidden md:inline-flex items-center gap-1.5 text-xs font-mono text-green">
            <span className="w-1.5 h-1.5 rounded-full bg-green" />
            Available
          </span>
          <a
            href="mailto:bipinnamburu2244@gmail.com"
            className="hidden md:block px-4 py-2 text-sm font-medium bg-t1 text-bg rounded-full hover:opacity-80 transition-opacity"
          >
            Find me here
          </a>
        </div>
      </div>
    </header>
  );
}
