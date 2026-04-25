'use client';

import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-paper/80 backdrop-blur-md border-b border-line/60 py-4'
          : 'py-6'
      }`}
      style={{ backgroundColor: scrolled ? 'rgba(245,241,232,0.8)' : 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#top" className="font-serif text-xl tracking-tight">
          <span className="italic">B.</span>Namburu
        </a>
        <ul className="hidden md:flex items-center gap-10 text-sm tracking-wide uppercase">
          <li><a href="#about" className="editorial-link">About</a></li>
          <li><a href="#experience" className="editorial-link">Work</a></li>
          <li><a href="#skills" className="editorial-link">Craft</a></li>
          <li><a href="#contact" className="editorial-link">Contact</a></li>
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-block text-sm uppercase tracking-wider border border-ink px-5 py-2 hover:bg-ink hover:text-paper transition-colors duration-300"
        >
          Say Hello
        </a>
      </div>
    </nav>
  );
}
