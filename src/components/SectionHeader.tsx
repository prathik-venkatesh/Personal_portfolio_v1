interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-8 md:mb-10 lg:mb-12">
      <h2 className="inline-block pb-2 border-b-2 border-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
