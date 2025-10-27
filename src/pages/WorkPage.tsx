import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

interface WorkPageProps {
  onNavigate: (page: string, projectId?: string) => void;
}

const projectsWithImages = projects.map((project) => {
  const imageMap: { [key: string]: string } = {
    'ceg': 'https://images.unsplash.com/photo-1742813615188-7ea3c64fb880?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwZGlnaXRhbCUyMHNlcnZpY2V8ZW58MXx8fHwxNzYwMjk4MjY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'jds-grocery': 'https://images.unsplash.com/photo-1703007739223-3e87d56e03e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc2hvcHBpbmclMjBtb2JpbGV8ZW58MXx8fHwxNzYwMzQ5ODU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'jds-realestate': 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHl8ZW58MXx8fHwxNzYwMjkyNDYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'creodo': 'https://images.unsplash.com/photo-1661187259792-d0e16bf86d31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YWdyYW0lMjBzb2NpYWwlMjBtZWRpYXxlbnwxfHx8fDE3NjAzMjQ1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'video-edits': 'https://images.unsplash.com/photo-1749410342681-3510f9edb7ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NjAzNDk4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  };
  return { ...project, coverImage: imageMap[project.id] };
});

const filterOptions = ['All', 'Web', 'Mobile', 'Brand', 'Motion'];

export function WorkPage({ onNavigate }: WorkPageProps) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projectsWithImages
    : projectsWithImages.filter(project =>
        project.tags.some(tag => tag.toLowerCase() === activeFilter.toLowerCase())
      );

  return (
    <motion.div 
      className="min-h-screen section-padding"
      style={{ paddingTop: '128px' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-content-width px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <SectionHeader title="Selected Projects" />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          className="flex flex-wrap gap-3 mb-10 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {filterOptions.map((filter, index) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-[12px] text-button transition-all duration-150 ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-secondary text-secondary-foreground hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.15 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  duration: 0.4, 
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: Math.floor(index / 3) * 0.1 + (index % 3) * 0.05
                }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => onNavigate('case-study', project.id)}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
