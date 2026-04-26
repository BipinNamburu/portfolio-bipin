interface TagProps {
  children: React.ReactNode;
}

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-medium tracking-wide text-t2 bg-surface-2 border border-border">
      {children}
    </span>
  );
}
