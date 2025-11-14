import { Project } from '../components/ProjectCard';

export const projects: Project[] = [
  {
    id: 'btp',
    title: 'Bengaluru Traffic Police – Website Concept',
    year: '2024–2025',
    role: 'Product & UX Design',
    impact:
      'Reframed dense enforcement flows into a calmer, citizen-first experience for traffic, challans, and safety.',
    tags: ['Public sector', 'Web', 'UX/UI'],
  },
  {
    id: 'process',
    title: 'How I Design Products',
    year: '2024',
    role: 'End-to-end UX Process',
    impact:
      'A repeatable way to move from messy problem, conflicting opinions, and screenshots to shippable flows.',
    tags: ['Process', 'UX', 'Strategy'],
  },
  {
    id: 'figma',
    title: 'Figma Design System – Components & Tokens',
    year: '2024',
    role: 'Design Systems',
    impact:
      'Systematised UI with tokens, components, and grids so new screens feel consistent instead of reinvented.',
    tags: ['Figma', 'Design system'],
  },
];

export const featuredProjects = projects;