interface TimelineItemProps {
  year: string;
  role: string;
  organization: string;
}

export function TimelineItem({ year, role, organization }: TimelineItemProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-border last:border-0">
      <div className="text-muted-foreground">{year}</div>
      <div className="md:col-span-2">
        <div className="font-medium">{role}</div>
        <div className="text-muted-foreground">{organization}</div>
      </div>
    </div>
  );
}
