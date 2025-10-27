import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BadgeChip } from './BadgeChip';

export interface Project {
  id: string;
  title: string;
  year: string;
  role: string;
  impact: string;
  tags: string[];
  coverImage?: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      onClick={onClick}
      className="group cursor-pointer bg-card rounded-[16px] overflow-hidden border border-border shadow-sm"
      whileHover={{ 
        y: -6,
        boxShadow: '0 12px 24px -8px rgba(124, 92, 255, 0.15)',
        transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }
      }}
      whileTap={{ 
        scale: 0.97,
        transition: { duration: 0.1 }
      }}
    >
      {/* Image Container */}
      <div className="aspect-[16/10] overflow-hidden bg-secondary">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ImageWithFallback
            src={project.coverImage || ''}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      
      {/* Content Container */}
      <div className="card-padding space-y-2">
        {/* Title and Year */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h3>
          <span className="text-caption text-muted-foreground whitespace-nowrap flex-shrink-0">
            {project.year}
          </span>
        </div>
        
        {/* Description */}
        <p className="text-muted-foreground">
          {project.impact}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <BadgeChip key={tag} label={tag} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
