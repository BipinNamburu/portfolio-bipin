'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { experiences } from '../data';

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 md:px-12 py-32 md:py-48 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-12 gap-6 md:gap-12 mb-16 md:mb-24">
        <div className="col-span-12 md:col-span-3">
          <p className="text-xs uppercase tracking-[0.3em] text-muted mb-2">
            § 02
          </p>
          <h2 className="font-serif text-3xl italic">Work</h2>
        </div>
        <div className="col-span-12 md:col-span-9 md:pl-12 md:border-l md:border-line">
          <p className="font-serif text-2xl md:text-3xl leading-snug">
            A chronology, in reverse — from the latest GenAI work to the first
            Angular desktop apps.
          </p>
        </div>
      </div>

      <div className="space-y-px bg-line border border-line">
        {experiences.map((exp, i) => (
          <ExperienceRow key={exp.company} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}

function ExperienceRow({
  exp,
  index,
}: {
  exp: (typeof experiences)[number];
  index: number;
}) {
  const [open, setOpen] = useState(index === 0); // first is open by default

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="bg-paper"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-6 md:p-10 grid grid-cols-12 gap-4 items-center hover:bg-ink/[0.02] transition-colors"
      >
        <div className="col-span-12 md:col-span-1 flex items-center">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-paper border border-line flex items-center justify-center overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={exp.logo}
              alt={exp.company}
              className="w-full h-full object-contain p-1"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-5">
          <h3 className="font-serif text-2xl md:text-3xl">{exp.company}</h3>
          <p className="text-sm text-muted mt-1">
            {exp.role} · {exp.location}
          </p>
        </div>
        <div className="col-span-8 md:col-span-4 text-sm md:text-base font-mono text-muted">
          {exp.period}
        </div>
        <div className="col-span-4 md:col-span-2 flex justify-end">
          <span
            className={`text-2xl transition-transform duration-500 ${
              open ? 'rotate-45' : ''
            }`}
            aria-hidden
          >
            +
          </span>
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: open ? 'auto' : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.7, 0, 0.2, 1] }}
        className="overflow-hidden"
      >
        <div className="p-6 md:p-10 pt-0 md:pt-0 space-y-10 border-t border-line/50">
          {exp.projects.map((p) => (
            <div key={p.name} className="grid grid-cols-12 gap-4 md:gap-8">
              <div className="col-span-12 md:col-span-4">
                <h4 className="font-serif text-xl italic">{p.name}</h4>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] uppercase tracking-wider px-2 py-1 border border-line text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="col-span-12 md:col-span-8 space-y-3">
                {p.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="text-base leading-relaxed text-ink/80 pl-6 relative"
                  >
                    <span className="absolute left-0 top-3 w-3 h-px bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
