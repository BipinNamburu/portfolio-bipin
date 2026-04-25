'use client';

import { motion } from 'framer-motion';
import { profile } from '../data';

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-ink text-paper px-6 md:px-12 py-32 md:py-48"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-paper/50 mb-8">
          § 04 — The Last Page
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif leading-[0.95] tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 9vw, 8rem)' }}
        >
          Let&apos;s build
          <br />
          <span className="italic" style={{ color: 'var(--accent)' }}>
            something good.
          </span>
        </motion.h2>

        <div className="mt-20 md:mt-32 grid grid-cols-12 gap-6 md:gap-12 border-t border-paper/20 pt-12">
          <div className="col-span-12 md:col-span-6">
            <p className="text-xs uppercase tracking-[0.3em] text-paper/50 mb-4">
              Direct Line
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="font-serif text-2xl md:text-4xl break-all editorial-link"
            >
              {profile.email}
            </a>
            <p className="mt-6 font-mono text-paper/60">{profile.phone}</p>
          </div>

          <div className="col-span-12 md:col-span-6">
            <p className="text-xs uppercase tracking-[0.3em] text-paper/50 mb-4">
              Elsewhere
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-2xl md:text-3xl editorial-link"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-2xl md:text-3xl editorial-link"
                >
                  LinkedIn ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
