'use client';

import { motion } from 'framer-motion';
import { profile } from '../data';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20"
    >
      {/* Editorial label strip */}
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center justify-between mb-12 md:mb-20 text-xs uppercase tracking-[0.3em] text-muted"
        >
          <span>Vol. 01 — Portfolio</span>
          <span className="hidden md:block">Est. 2021</span>
          <span>{profile.location}</span>
        </motion.div>

        {/* Main display heading */}
        <div className="grid grid-cols-12 gap-4 items-end">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="col-span-12 font-serif leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 11rem)' }}
          >
            <motion.span
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.7, 0, 0.2, 1] }}
              className="block"
            >
              Bipin
            </motion.span>
            <motion.span
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.7, 0, 0.2, 1] }}
              className="block italic"
              style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
            >
              Namburu<span style={{ color: 'var(--accent)' }}>.</span>
            </motion.span>
          </motion.h1>
        </div>

        {/* Sub row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 md:mt-16 grid grid-cols-12 gap-6"
        >
          <div className="col-span-12 md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-muted mb-3">
              The Subject
            </p>
            <p className="font-serif text-2xl md:text-3xl leading-snug">
              Full Stack Developer
              <br />
              <span className="italic text-muted">at AB InBev</span>
            </p>
          </div>

          <div className="col-span-12 md:col-span-1 flex items-center">
            <div className="w-full h-px md:h-20 md:w-px bg-line" />
          </div>

          <div className="col-span-12 md:col-span-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted mb-3">
              The Premise
            </p>
            <p className="font-sans text-base md:text-lg leading-relaxed text-ink/80 max-w-xl">
              {profile.intro}
            </p>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted"
        >
          <span>Continue Reading</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-ink/40"
          />
        </motion.div>
      </div>
    </section>
  );
}
