'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { profile } from '../data';
import { asset } from '../lib/asset';

const ease = [0.21, 0.47, 0.32, 0.98] as const;

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease },
  };
}

const CDN = (slug: string) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${slug}.svg`;

const INNER = [
  { name: 'React',       slug: 'react' },
  { name: 'TypeScript',  slug: 'typescript' },
  { name: 'Next.js',     slug: 'nextdotjs' },
  { name: 'Node.js',     slug: 'nodedotjs' },
  { name: 'Python',      slug: 'python' },
  { name: 'Docker',      slug: 'docker' },
];

const OUTER = [
  { name: 'AWS',         slug: 'amazonaws' },
  { name: 'PostgreSQL',  slug: 'postgresql' },
  { name: 'GraphQL',     slug: 'graphql' },
  { name: 'Redux',       slug: 'redux' },
  { name: 'Tailwind',    slug: 'tailwindcss' },
  { name: 'Git',         slug: 'git' },
  { name: 'Angular',     slug: 'angular' },
  { name: 'FastAPI',     slug: 'fastapi' },
];

const R1 = 110;   // inner orbit radius px
const R2 = 140;  // outer orbit radius px

function OrbitalRing({
  items,
  radius,
  duration,
  ccw = false,
}: {
  items: { name: string; slug: string }[];
  radius: number;
  duration: number;
  ccw?: boolean;
}) {
  const dir = ccw ? -360 : 360;
  return (
    <motion.div
      className="absolute inset-0"
      animate={{ rotate: dir }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    >
      {items.map((item, i) => {
        const angle = (2 * Math.PI * i) / items.length;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        return (
          <motion.div
            key={item.name}
            className="absolute w-9 h-9 rounded-full bg-surface border border-border shadow-card flex items-center justify-center"
            style={{
              top: `calc(50% + ${y}px - 18px)`,
              left: `calc(50% + ${x}px - 18px)`,
            }}
            animate={{ rotate: -dir }}
            transition={{ duration, repeat: Infinity, ease: 'linear' }}
            title={item.name}
          >
            <img
              src={CDN(item.slug)}
              alt={item.name}
              width={18}
              height={18}
              className="object-contain opacity-70 si-icon"
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 bg-bg">
      <div className="max-w-content mx-auto w-full pt-28 pb-24">

        {/* Status + Photo row */}
        <div className="flex items-start justify-between gap-6 mb-10">
          <motion.div {...fadeUp(0.1)}>
            <span className="inline-flex items-center gap-2 text-xs font-mono text-t3 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-green shrink-0" />
              {profile.location}
            </span>
          </motion.div>

          {/* Orbital avatar */}
          <motion.div
            {...fadeUp(0.15)}
            className="shrink-0 relative w-[200px] h-[200px] md:w-[260px] md:h-[260px]"
          >
            {/* Dashed guide rings */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-border opacity-40 pointer-events-none"
              style={{ width: R1 * 2, height: R1 * 2 }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-border opacity-25 pointer-events-none"
              style={{ width: R2 * 2, height: R2 * 2 }}
            />

            {/* Orbiting rings */}
            <OrbitalRing items={INNER} radius={R1} duration={22} />
            <OrbitalRing items={OUTER} radius={R2} duration={36} ccw />

            {/* Center photo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full overflow-hidden border-2 border-border shadow-card-md z-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset('/image.png')}
                  alt="Bipin Namburu"
                  className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
          </motion.div>
        </div>

        {/* Name */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease }}
            className="font-serif font-bold leading-[0.88] tracking-tight text-t1"
            style={{ fontSize: 'clamp(2.8rem, 9vw, 7.5rem)' }}
          >
            Bipin
            <br />
            <span className="italic">Namburu.</span>
          </motion.h1>
        </div>

        {/* Role + intro */}
        <motion.div
          {...fadeUp(0.7)}
          className="mt-10 md:mt-14 flex flex-col md:flex-row items-start gap-5 md:gap-10 max-w-3xl"
        >
          <div className="flex items-center gap-3 shrink-0 pt-1.5">
            <span className="block w-8 h-px bg-border-strong" />
            <span className="font-mono text-[11px] text-t3 uppercase tracking-[0.2em] whitespace-nowrap">
              Full Stack Dev
            </span>
          </div>
          <p className="text-lg md:text-xl text-t2 leading-relaxed">{profile.intro}</p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          {...fadeUp(1.0)}
          className="mt-10 md:mt-12 flex flex-wrap items-center gap-3"
        >
          <a
            href="#experience"
            className="px-7 py-3.5 text-sm font-medium bg-t1 text-bg rounded-full hover:opacity-80 transition-opacity"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 text-sm font-medium border border-border text-t2 rounded-full hover:bg-surface-2 hover:border-border-strong hover:text-t1 transition-all duration-200"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-t3" />
        </motion.div>
      </motion.div>
    </section>
  );
}
