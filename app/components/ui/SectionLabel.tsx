interface SectionLabelProps {
  index: string;
  children: React.ReactNode;
}

export function SectionLabel({ index, children }: SectionLabelProps) {
  return (
    <div className="inline-flex items-center gap-2.5">
      <span className="font-mono text-[11px] text-t3 tabular-nums">{index}</span>
      <span className="w-5 h-px bg-border-strong" aria-hidden="true" />
      <span className="font-mono text-[11px] text-t3 uppercase tracking-[0.15em]">{children}</span>
    </div>
  );
}
