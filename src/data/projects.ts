import { Project } from '../components/ProjectCard';

export const projects: Project[] = [
  {
    id: 'ceg',
    title: 'Centre for e-Governance (CEG)',
    year: 'August 2024 - Present',
    role: 'Web Design, UX',
    impact: 'Modern, accessible templates for government services.',
    tags: ['Web', 'Accessibility', 'Public'],
  },
  {
    id: 'jds-grocery',
    title: 'JDS Grocery App',
    year: '2024',
    role: 'UI/UX',
    impact: 'Faster browsing, fewer taps to checkout.',
    tags: ['Mobile', 'E-commerce'],
  },
  {
    id: 'jds-realestate',
    title: 'JDS Real-Estate Platform',
    year: '2024',
    role: 'UI/UX',
    impact: 'Simplified property search & compare experience.',
    tags: ['Web', 'Search'],
  },
  {
    id: 'creodo',
    title: 'Creodo Instagram Campaigns',
    year: '2024',
    role: 'Graphic Design',
    impact: 'Consistent grid boosted engagement.',
    tags: ['Brand', 'Content'],
  },
  {
    id: 'video-edits',
    title: 'Video Edits / Reels',
    year: '2023–2024',
    role: 'Video Editor',
    impact: 'Hook-first edits improved retention.',
    tags: ['Motion', 'Editing'],
  },
];

export const featuredProjects = projects.slice(0, 3);
