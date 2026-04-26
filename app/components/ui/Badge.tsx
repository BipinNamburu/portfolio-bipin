interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success';
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  if (variant === 'success') {
    return (
      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-widest text-green bg-[#f0fdf4] border border-[#bbf7d0]">
        <span className="w-1.5 h-1.5 rounded-full bg-green shrink-0" />
        {children}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-widest text-t2 bg-surface border border-border">
      {children}
    </span>
  );
}
