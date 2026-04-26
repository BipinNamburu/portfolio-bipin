'use client';

const items = [
  'React', '·', 'Next.js', '·', 'TypeScript', '·', 'Node.js', '·',
  'Python', '·', 'FastAPI', '·', 'GraphQL', '·', 'AWS', '·',
  'Performance', '·', 'Accessibility', '·', 'GenAI', '·',
];

export default function Marquee() {
  return (
    <section
      className="border-y border-border py-4 overflow-hidden bg-surface relative"
      aria-hidden="true"
    >
      <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

      <div className="flex marquee-track whitespace-nowrap select-none">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex shrink-0 items-center gap-6 pr-6">
            {items.map((item, j) => (
              <span
                key={`${i}-${j}`}
                className={`font-serif text-xl md:text-3xl ${
                  item === '·'
                    ? 'text-border-strong'
                    : j % 5 === 0
                    ? 'italic text-t2'
                    : 'text-t3'
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
