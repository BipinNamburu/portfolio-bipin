'use client';

import { motion } from 'framer-motion';
import { SectionLabel } from './ui/SectionLabel';
import { skills } from '../data';

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 py-24 md:py-40 border-t border-border">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-12 gap-6 md:gap-12 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-3">
            <SectionLabel index="03">Skills</SectionLabel>
            <h2 className="mt-4 font-serif text-4xl font-bold text-t1">Craft</h2>
          </div>
          <div className="col-span-12 md:col-span-9 md:pl-12 md:border-l md:border-border flex items-end">
            <p className="font-serif text-xl md:text-2xl leading-snug text-t3">
              The instruments  picked over five years for what they let me build,
              not what&apos;s on the trend list.
            </p>
          </div>
        </div>

        <div className="space-y-14 md:space-y-16">
          {skills.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease }}
              className="grid grid-cols-12 gap-6 md:gap-12 items-start"
            >
              <div className="col-span-12 md:col-span-3 pt-1">
                <p className="font-mono text-xs text-t3">0{ci + 1}</p>
                <h3 className="mt-1 font-serif text-2xl md:text-3xl font-bold text-t1">{cat.label}</h3>
              </div>

              <div className="col-span-12 md:col-span-9 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                {cat.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.03 }}
                    className="border border-border bg-surface aspect-square flex flex-col items-center justify-center p-3 rounded-xl group cursor-default hover:border-border-strong hover:bg-surface-2 hover:shadow-card transition-all duration-200"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-6 h-6 md:w-7 md:h-7 mb-2 opacity-30 group-hover:opacity-60 transition-opacity si-icon"
                      loading="lazy"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                    <span className="text-[10px] font-mono text-center text-t3 group-hover:text-t2 tracking-wide leading-tight font-medium transition-colors">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
