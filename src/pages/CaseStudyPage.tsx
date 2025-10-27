import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { BadgeChip } from '../components/BadgeChip';
import { projects } from '../data/projects';

interface CaseStudyPageProps {
  projectId: string;
  onNavigate: (page: string) => void;
}

const projectImages: { [key: string]: string } = {
  'ceg': 'https://images.unsplash.com/photo-1742813615188-7ea3c64fb880?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwZGlnaXRhbCUyMHNlcnZpY2V8ZW58MXx8fHwxNzYwMjk4MjY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'jds-grocery': 'https://images.unsplash.com/photo-1703007739223-3e87d56e03e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc2hvcHBpbmclMjBtb2JpbGV8ZW58MXx8fHwxNzYwMzQ5ODU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'jds-realestate': 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHl8ZW58MXx8fHwxNzYwMjkyNDYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'creodo': 'https://images.unsplash.com/photo-1661187259792-d0e16bf86d31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YWdyYW0lMjBzb2NpYWwlMjBtZWRpYXxlbnwxfHx8fDE3NjAzMjQ1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'video-edits': 'https://images.unsplash.com/photo-1749410342681-3510f9edb7ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NjAzNDk4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
};

const caseStudyData: { [key: string]: any } = {
  'ceg': {
    context: 'Centre for e-Governance needed modern, accessible web templates for state government services to improve citizen experience and digital inclusion.',
    problem: 'How might we create government web templates that are accessible to all citizens, easy to navigate, and maintain consistency across multiple departments?',
    goals: [
      'Meet WCAG 2.1 AA accessibility standards',
      'Reduce citizen support calls by 30%',
      'Create reusable components for 50+ departments',
    ],
    insights: [
      'Citizens struggled with complex navigation and jargon',
      'Mobile traffic accounted for 65% of visits',
      'Seniors needed larger text and clearer CTAs',
    ],
    rationale: [
      'IA: Flat hierarchy with clear categories and search',
      'Interaction: High-contrast buttons, skip-to-content links',
      'Visual: Clean sans-serif, ample whitespace, consistent patterns',
    ],
    impact: 'Templates deployed across 25 departments. Early metrics show 28% reduction in support queries and 4.2/5 user satisfaction.',
    nextSteps: 'Phase 2: Multi-language support, voice navigation, and citizen feedback portal.',
  },
  'jds-grocery': {
    context: 'JDS wanted to launch a grocery app to compete in the crowded online grocery market with a focus on speed and simplicity.',
    problem: 'How might we reduce the number of taps from landing to checkout while maintaining product discovery and personalization?',
    goals: [
      'Reduce checkout flow to under 5 taps',
      'Increase add-to-cart rate by 25%',
      'Improve repeat purchase rate',
    ],
    insights: [
      'Users abandoned carts when the process felt too long',
      'Quick reorder of favorites was highly requested',
      'Visual product cards drove higher engagement',
    ],
    rationale: [
      'IA: Quick access to favorites, category shortcuts on home',
      'Interaction: One-tap add, persistent cart widget',
      'Visual: Large product images, color-coded categories',
    ],
    impact: 'Beta testing showed 32% faster checkout times and 21% higher add-to-cart rate compared to competitors.',
    nextSteps: 'Add recipe suggestions, smart reordering based on purchase history, and loyalty rewards.',
  },
  'jds-realestate': {
    context: 'JDS Real Estate platform needed a streamlined property search and comparison experience for home buyers and renters.',
    problem: 'How might we simplify property search and comparison to help users make informed decisions quickly?',
    goals: [
      'Reduce time-to-decision by 40%',
      'Enable side-by-side comparison of up to 4 properties',
      'Increase contact-agent conversion by 30%',
    ],
    insights: [
      'Users wanted to compare properties by location, price, and amenities',
      'High-quality images and virtual tours were essential',
      'Mobile users needed simplified filters',
    ],
    rationale: [
      'IA: Advanced filters with saved searches',
      'Interaction: Comparison table with key metrics',
      'Visual: Large hero images, map integration',
    ],
    impact: 'Users spent 35% less time finding their ideal property. Contact conversion increased by 28%.',
    nextSteps: 'Add mortgage calculator, neighborhood insights, and AR property tours.',
  },
  'creodo': {
    context: 'Creodo needed consistent, on-brand Instagram campaigns to boost engagement and follower growth.',
    problem: 'How might we create a cohesive visual system that maintains brand identity across diverse content types?',
    goals: [
      'Increase engagement rate by 20%',
      'Grow followers by 500/month',
      'Establish recognizable brand aesthetic',
    ],
    insights: [
      'Consistent color palette drove recognition',
      'Carousel posts had 2x engagement',
      'Educational content outperformed promotional',
    ],
    rationale: [
      'Visual system: Branded color palette, consistent typography',
      'Content strategy: Mix of education, inspiration, and behind-the-scenes',
      'Grid layout: Alternating post types for visual rhythm',
    ],
    impact: 'Engagement rate increased 24%. Follower growth exceeded target at 650/month average.',
    nextSteps: 'Expand to Reels, launch user-generated content campaign, and collaborate with micro-influencers.',
  },
  'video-edits': {
    context: 'Freelance video editing projects for various clients including social media creators and small businesses.',
    problem: 'How might we create scroll-stopping video content that hooks viewers in the first 3 seconds?',
    goals: [
      'Increase watch time to 80%+',
      'Improve client ROI on video content',
      'Develop repeatable editing workflows',
    ],
    insights: [
      'Hook in first 3 seconds was critical',
      'Jump cuts kept energy high',
      'On-screen text improved retention',
    ],
    rationale: [
      'Pacing: Fast cuts, dynamic transitions',
      'Audio: Layered sound design with music',
      'Graphics: Animated text, lower thirds',
    ],
    impact: 'Average watch time improved from 45% to 78%. Clients reported 2-3x higher engagement rates.',
    nextSteps: 'Develop video templates, offer video strategy consulting, and expand into motion graphics.',
  },
};

export function CaseStudyPage({ projectId, onNavigate }: CaseStudyPageProps) {
  const project = projects.find(p => p.id === projectId);
  const caseStudy = caseStudyData[projectId];

  if (!project || !caseStudy) {
    return (
      <div className="min-h-screen pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-24 lg:pb-32">
        <div className="max-content-width px-6 md:px-8 lg:px-12 text-center">
          <h2 className="mb-4">Project not found</h2>
          <Button onClick={() => onNavigate('work')}>
            <ArrowLeft className="mr-2" size={20} />
            Back to Work
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <div className="w-full h-[50vh] md:h-[55vh] lg:h-[60vh] relative">
        <ImageWithFallback
          src={projectImages[projectId]}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      <div className="max-content-width px-6 md:px-8 lg:px-12 py-10 md:py-12 lg:py-16">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => onNavigate('work')}
          className="mb-8 md:mb-10"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Work
        </Button>

        {/* Project Summary */}
        <div className="mb-12 md:mb-16 lg:mb-20 pb-10 md:pb-12 lg:pb-16 border-b border-border">
          <h1 className="mb-6 md:mb-8">{project.title}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-6">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Year</div>
              <div>{project.year}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Role</div>
              <div>{project.role}</div>
            </div>
            <div className="md:col-span-2">
              <div className="text-sm text-muted-foreground mb-1">Impact</div>
              <div>{project.impact}</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <BadgeChip key={tag} label={tag} />
            ))}
          </div>
        </div>

        {/* Case Study Content */}
        <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">
          {/* Context */}
          <section>
            <h2 className="mb-4">Context</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {caseStudy.context}
            </p>
          </section>

          {/* Problem */}
          <section>
            <h2 className="mb-4">Problem Statement</h2>
            <div className="p-6 bg-secondary/50 border-l-4 border-primary rounded-r-lg">
              <p className="text-lg italic">
                "{caseStudy.problem}"
              </p>
            </div>
          </section>

          {/* Goals */}
          <section>
            <h2 className="mb-4">Goals & Metrics</h2>
            <ul className="space-y-3">
              {caseStudy.goals.map((goal: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-lg">{goal}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Insights */}
          <section>
            <h2 className="mb-4">Users & Insights</h2>
            <div className="grid grid-cols-1 gap-4">
              {caseStudy.insights.map((insight: string, index: number) => (
                <div key={index} className="p-4 bg-card border border-border rounded-lg">
                  <p>{insight}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Design Rationale */}
          <section>
            <h2 className="mb-4">Design Rationale</h2>
            <div className="space-y-4">
              {caseStudy.rationale.map((item: string, index: number) => (
                <div key={index} className="flex gap-4">
                  <div className="w-1 bg-primary rounded-full flex-shrink-0"></div>
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Impact */}
          <section>
            <h2 className="mb-4">Impact</h2>
            <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-lg">{caseStudy.impact}</p>
            </div>
          </section>

          {/* Next Steps */}
          <section className="pb-12 md:pb-16">
            <h2 className="mb-4">Next Steps</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {caseStudy.nextSteps}
            </p>
          </section>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-10 md:pt-12 border-t border-border">
          <Button onClick={() => onNavigate('work')}>
            View All Projects
          </Button>
          <Button variant="outline" onClick={() => onNavigate('contact')}>
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
}
