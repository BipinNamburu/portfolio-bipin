'use client';

const items = [
  'React', '◆', 'Next.js', '◆', 'TypeScript', '◆', 'Node.js', '◆',
  'Python', '◆', 'FastAPI', '◆', 'GraphQL', '◆', 'AWS', '◆',
  'Performance', '◆', 'Accessibility', '◆', 'GenAI', '◆',
];

export default function Marquee() {
  return (
    <section
      className="border-y border-ink/80 py-6 overflow-hidden bg-ink text-paper"
      aria-hidden="true"
    >
      <div className="flex marquee-track whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex shrink-0 items-center gap-8 pr-8">
            {items.map((item, j) => (
              <span
                key={`${i}-${j}`}
                className={`font-serif text-3xl md:text-5xl ${
                  item === '◆' ? 'text-accent text-xl md:text-2xl' : ''
                } ${j % 4 === 0 ? 'italic' : ''}`}
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
