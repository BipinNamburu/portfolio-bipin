'use client';

import { motion } from 'framer-motion';
import { stats } from '../data';

export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-12 py-32 md:py-48 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-12 gap-6 md:gap-12">
        {/* Section label */}
        <div className="col-span-12 md:col-span-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:sticky md:top-32"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted mb-2">
              § 01
            </p>
            <h2 className="font-serif text-3xl italic">About</h2>
          </motion.div>
        </div>

        {/* Body */}
        <div className="col-span-12 md:col-span-9 md:pl-12 md:border-l md:border-line">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p
              className="font-serif text-3xl md:text-5xl leading-tight"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              I write code the way some people set tables —
              <span className="italic text-accent"> deliberately</span>, with
              attention to where the eye lands first.
            </p>

            <p className="font-sans text-lg leading-relaxed text-ink/80 max-w-2xl">
              For five years I&apos;ve worked across the stack — building React
              and Next.js frontends that hit 90+ Lighthouse scores, Node and
              FastAPI services that integrate LLM streams, and the unglamorous
              middle layer that makes both feel like one product. I care about
              load times, type safety, and the moment a teammate opens a PR and
              says &ldquo;oh, that&rsquo;s clean.&rdquo;
            </p>

            <p className="font-sans text-lg leading-relaxed text-ink/80 max-w-2xl">
              Right now I&apos;m at AB InBev shipping a GenAI insights chat
              platform — wiring LLM APIs, FastAPI microservices, and a streaming
              React UI into something employees actually use to query company
              data in plain English.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line mt-16 border border-line">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="bg-paper p-6 md:p-8"
                >
                  <p className="font-serif text-4xl md:text-6xl tabular tracking-tight">
                    {s.value}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-muted mt-2">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
