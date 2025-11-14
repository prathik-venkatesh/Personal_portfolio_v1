import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

interface WorkPageProps {
  onNavigate: (page: string, projectId?: string) => void;
}

export function WorkPage({ onNavigate }: WorkPageProps) {
  return (
    <section className="section-padding">
      <div className="max-content-width px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-10 md:mb-12 space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Selected work
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Three projects that show how I think.
          </h1>
          <p className="text-sm md:text-[15px] text-muted-foreground max-w-2xl">
            A public-sector concept, a look into my product design process, and a Figma system
            that keeps UI from turning into chaos.
          </p>
        </div>

        {/* Exactly 3 projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div key={project.id} className="h-full">
              {/* Only Figma card gets a thumbnail ABOVE the normal card.
                  Text layout / size of the card stays EXACTLY the same. */}
              {project.id === 'figma' && (
                <div className="mb-3 rounded-[16px] overflow-hidden bg-muted">
                  <img
                    src="/assets/figma_thumbnail.png"
                    alt="Figma Design System Thumbnail"
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}
              {project.id === 'btp' && (
                <div className="mb-3 rounded-[16px] overflow-hidden bg-muted">
                  <img
                    src="/assets/btp_thumbnail.png"
                    alt="Bengaluru Traffic Police Case Study Thumbnail"
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}

              <ProjectCard
                project={project}
                onClick={() => onNavigate('case-study', project.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}