'use client';

import { motion } from 'framer-motion';
import { SectionLabel } from './ui/SectionLabel';
import { asset } from '../lib/asset';

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: '-80px' as const },
  transition: { duration: 0.6, ease },
};

export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-24 md:py-40 border-t border-border">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-12 gap-6 md:gap-12">

          {/* Sticky label */}
          <div className="col-span-12 md:col-span-3">
            <motion.div {...inView} className="md:sticky md:top-28">
              <SectionLabel index="01">About</SectionLabel>
              <h2 className="mt-4 font-serif text-4xl font-bold text-t1">About me</h2>
            </motion.div>
          </div>

          {/* Content */}
          <div className="col-span-12 md:col-span-9 md:pl-12 md:border-l md:border-border">
            <motion.div {...inView} className="space-y-8 max-w-2xl">

              {/* Recognition */}
              <motion.a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7453301666856062976/"
                target="_blank"
                rel="noopener noreferrer"
                {...inView}
                className="flex gap-5 items-start border border-border rounded-xl p-5 hover:bg-surface hover:border-border-strong transition-all duration-200 group"
              >
                <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden border border-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset('/recognition.png')}
                    alt="Cicerone Award"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-mono text-[10px] text-t3 uppercase tracking-widest">Recognition</span>
                  <p className="font-serif text-lg font-bold text-t1 group-hover:text-t2 transition-colors mt-1">Cicerone Award</p>
                  <p className="mt-1 text-sm text-t2 leading-relaxed">
                    Recognised as the subject matter expert and integration guide across all partner teams  awarded for holding deep expertise and providing clarity across complex integration workflows.
                  </p>
                </div>
              </motion.a>

              <p className="font-serif text-2xl md:text-4xl leading-tight text-t1">
                I write code the way some people set tables 
                <span className="italic text-t3"> deliberately</span>,
                with attention to where the eye lands first.
              </p>

              <p className="text-lg leading-relaxed text-t2">
                For five years I&apos;ve worked across the stack building React and Next.js
                frontends that hit 90+ Lighthouse scores, Node and FastAPI services that integrate
                LLM streams, and the unglamorous middle layer that makes both feel like one product.
                I care about load times, type safety.
              </p>

              <p className="text-lg leading-relaxed text-t2">
                Right now I&apos;m at AB InBev shipping a GenAI insights chat platform  wiring
                LLM APIs, FastAPI microservices, and a streaming React UI into something employees
                actually use to query company data in plain English.
              </p>

              {/* Quick facts */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: 'Based in', value: 'Bengaluru, India' },
                  { label: 'Current role', value: 'Full Stack Developer, AB InBev' },
                  { label: 'Focus', value: 'React, Node.js, Python, GenAI' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex flex-col gap-0.5 py-4 border-t border-border">
                    <span className="font-mono text-[11px] text-t3 uppercase tracking-widest">{label}</span>
                    <span className="text-sm text-t1 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
