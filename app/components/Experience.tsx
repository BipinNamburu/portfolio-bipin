'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { asset } from '../lib/asset';
import { SectionLabel } from './ui/SectionLabel';
import { Tag } from './ui/Tag';
import { experiences } from '../data';

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-12 py-24 md:py-40 border-t border-border">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-12 gap-6 md:gap-12 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-3">
            <SectionLabel index="02">Work</SectionLabel>
            <h2 className="mt-4 font-serif text-4xl font-bold text-t1">Experience</h2>
          </div>
          <div className="col-span-12 md:col-span-9 md:pl-12 md:border-l md:border-border flex items-end">
            <p className="font-serif text-xl md:text-2xl leading-snug text-t3">
              A chronology in reverse  from the latest GenAI work to the first Angular desktop apps.
            </p>
          </div>
        </div>

        <div className="border border-border divide-y divide-border">
          {experiences.map((exp, i) => (
            <ExperienceRow key={exp.company} exp={exp} index={i} />
          ))}
        </div>
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
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full text-left px-5 py-5 md:px-7 md:py-6 flex items-center gap-4 md:gap-6 hover:bg-surface-2 transition-colors duration-150 group"
      >
        {/* Logo */}
        {/* <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg border border-border bg-surface flex items-center justify-center shrink-0 overflow-hidden"> */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {/* <img
            src={exp.logo}
            alt={exp.company}
            className="w-6 h-6 md:w-7 md:h-7 object-contain grayscale opacity-50 group-hover:opacity-80 transition-opacity"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          /> */}
        {/* </div> */}

        {/* Company + role */}
        <div className="flex-1 min-w-0">
          <p className="font-serif text-xl md:text-2xl font-bold text-t1 group-hover:text-t2 transition-colors">
            {exp.company}
          </p>
          <p className="text-sm text-t3 mt-0.5">{exp.role} · {exp.location}</p>
        </div>

        {/* Period */}
        <span className="hidden sm:block font-mono text-sm text-t3 shrink-0 pr-2">
          {exp.period}
        </span>

        {/* Toggle icon */}
        <div
          className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
            open
              ? 'bg-t1 border-t1 text-bg'
              : 'border-border text-t3 group-hover:border-border-strong group-hover:text-t2'
          }`}
        >
          {open ? <Minus size={13} /> : <Plus size={13} />}
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease }}
        className="overflow-hidden"
      >
        <div className="px-5 md:px-7 pb-8 space-y-8 border-t border-border bg-surface-2">
          {exp.projects.map((p) => (
            <div key={p.name} className="grid grid-cols-12 gap-4 md:gap-8 pt-7">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-2">
                  <h4 className="font-serif text-lg font-bold italic text-t1">{p.name}</h4>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>

                {/* Site snapshot */}
                {p.url && p.screenshot && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block group"
                    aria-label={`Open ${p.name}`}
                  >
                    <div className="rounded-lg overflow-hidden border border-border group-hover:border-border-strong transition-colors duration-200">
                      {/* Browser chrome */}
                      <div className="flex items-center gap-1.5 px-3 py-2 bg-surface border-b border-border">
                        <span className="w-2 h-2 rounded-full bg-border-strong" />
                        <span className="w-2 h-2 rounded-full bg-border-strong" />
                        <span className="w-2 h-2 rounded-full bg-border-strong" />
                        <span className="ml-2 font-mono text-[9px] text-t3 truncate">{p.url.replace(/^https?:\/\//, '')}</span>
                      </div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={asset(p.screenshot)}
                        alt={`${p.name} screenshot`}
                        className="w-full h-32 object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </a>
                )}
              </div>
              <ul className="col-span-12 md:col-span-8 space-y-2.5">
                {p.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-t2">
                    <span className="mt-[0.65rem] w-3 h-px bg-border-strong shrink-0" />
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
