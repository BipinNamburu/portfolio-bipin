'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionLabel } from './ui/SectionLabel';
import { profile } from '../data';

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 py-24 md:py-40 border-t border-border bg-surface">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <SectionLabel index="04">Contact</SectionLabel>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease }}
          className="font-serif font-bold leading-[0.92] tracking-tight text-t1"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)' }}
        >
          Let&apos;s build
          <br />
          <span className="italic">something good.</span>
        </motion.h2>

        <div className="mt-20 md:mt-28 pt-10 border-t border-border grid grid-cols-12 gap-8 md:gap-12">
          <motion.div
            className="col-span-12 md:col-span-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            <p className="font-mono text-[11px] text-t3 uppercase tracking-widest mb-4">Direct line</p>
            <a
              href={`mailto:${profile.email}`}
              className="font-serif text-2xl md:text-3xl text-t1 hover:text-t2 transition-colors break-all"
            >
              {profile.email}
            </a>
            <p className="mt-4 font-mono text-sm text-t3">{profile.phone}</p>
          </motion.div>

          <motion.div
            className="col-span-12 md:col-span-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
          >
            <p className="font-mono text-[11px] text-t3 uppercase tracking-widest mb-4">Elsewhere</p>
            <ul className="space-y-2">
              {[
                {
                  label: 'GitHub',
                  href: profile.github,
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  ),
                },
                {
                  label: 'LinkedIn',
                  href: profile.linkedin,
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
              ].map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 font-serif text-2xl md:text-3xl text-t3 hover:text-t1 transition-colors group"
                  >
                    {icon}
                    {label}
                    <ArrowUpRight
                      size={18}
                      className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
