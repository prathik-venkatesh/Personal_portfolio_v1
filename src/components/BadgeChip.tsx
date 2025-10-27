interface BadgeChipProps {
  label: string;
}

export function BadgeChip({ label }: BadgeChipProps) {
  return (
    <span className="inline-flex items-center justify-center px-3 py-1 rounded-[8px] bg-secondary text-foreground text-caption border border-border transition-all duration-150">
      {label}
    </span>
  );
}
