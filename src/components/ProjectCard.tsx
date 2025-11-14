import React from 'react';

export interface Project {
  id: string;
  title: string;
  year: string;
  role: string;
  impact: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-card rounded-[20px] overflow-hidden border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <span className="text-caption text-muted-foreground whitespace-nowrap">
            {project.year}
          </span>
        </div>

        <p className="text-muted-foreground mb-4 text-sm">{project.impact}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary/10 text-primary rounded-[8px] text-caption border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}