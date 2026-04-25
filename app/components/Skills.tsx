'use client';

import { motion } from 'framer-motion';
import { skills } from '../data';

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 md:px-12 py-32 md:py-48 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-12 gap-6 md:gap-12 mb-16 md:mb-24">
        <div className="col-span-12 md:col-span-3">
          <p className="text-xs uppercase tracking-[0.3em] text-muted mb-2">
            § 03
          </p>
          <h2 className="font-serif text-3xl italic">Craft</h2>
        </div>
        <div className="col-span-12 md:col-span-9 md:pl-12 md:border-l md:border-line">
          <p className="font-serif text-2xl md:text-3xl leading-snug">
            The instruments — picked over five years for what they let me build,
            not what&apos;s on the trend list.
          </p>
        </div>
      </div>

      <div className="space-y-16 md:space-y-24">
        {skills.map((cat, ci) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-12 gap-6 md:gap-12 items-start"
          >
            <div className="col-span-12 md:col-span-3">
              <p className="font-mono text-sm text-muted">0{ci + 1}.</p>
              <h3 className="font-serif text-2xl md:text-4xl mt-2">
                {cat.label}
              </h3>
            </div>

            <div className="col-span-12 md:col-span-9 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-px bg-line border border-line">
              {cat.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="bg-paper aspect-square flex flex-col items-center justify-center p-3 md:p-4 group hover:bg-ink hover:text-paper transition-colors duration-300"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-7 h-7 md:w-9 md:h-9 mb-2 opacity-70 group-hover:invert group-hover:opacity-100 transition-all"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <span className="text-[10px] md:text-xs text-center uppercase tracking-wider">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
