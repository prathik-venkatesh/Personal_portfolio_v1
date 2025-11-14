import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

interface CaseStudyPageProps {
  projectId: string;
  onNavigate: (page: string, projectId?: string) => void;
}

// Simple data layout for non-BTP case studies
const caseStudyData: any = {
  process: {
    label: 'Process · How I work',
    heroSummary:
      'A look into how I move from messy problem statements and half-broken flows to a clean, testable product experience.',
    sections: [
      {
        title: 'Starting from the mess',
        body:
          'Most projects do not start with a perfect brief. They start with screenshots, complaints, and “can we make this better?”. I begin by clarifying constraints: who is affected, what is non-negotiable, and where failure is currently happening. This usually happens through short stakeholder chats and reviewing real user journeys.',
      },
      {
        title: 'Mapping reality, not just ideal flows',
        body:
          'Instead of jumping straight into pretty screens, I map the actual path users are taking today — including detours like WhatsApp, calls, or workarounds. This highlights which steps are unnecessary, which information is missing at the wrong time, and where the UI is forcing people to guess.',
      },
      {
        title: 'Exploring options, then committing',
        body:
          'I sketch multiple options for key screens and flows, usually balancing “safe but boring” with “slightly adventurous but still accessible”. Once we align on direction, I commit to one approach and push it through the entire journey so we have a coherent story instead of a collection of nice isolated screens.',
      },
      {
        title: 'Polishing details that actually matter',
        body:
          'Microcopy, error states, and hierarchies are tuned based on what users are likely thinking during each step. I try to remove cleverness where it adds friction and keep personality where it adds clarity. The final output often includes a clickable prototype plus annotated flows so devs are not forced to guess intent.',
      },
    ],
  },
  figma: {
    label: 'Figma · Design system',
    heroSummary:
      'A modular Figma file that combines tokens, components, and example screens so teams can ship consistent UI without restarting from a blank frame every time.',
    sections: [
      {
        title: 'Why this system exists',
        body:
          'Most small teams do not need a gigantic enterprise design system. They need a compact, opinionated set of components that still respect accessibility and responsive behavior. This file is built to be dropped into real projects, not just as a Dribbble showpiece.',
      },
      {
        title: 'What lives inside the file',
        body:
          'The system includes color and type tokens, grid and spacing scales, buttons, inputs, cards, navigation patterns, and a small set of layout templates. Each component is built with variants and auto layout so designers and devs can quickly explore states.',
      },
      {
        title: 'How I work in Figma',
        body:
          'I keep pages structured as: Foundations, Components, Patterns, Explorations, and Delivery. This keeps experimental work from leaking into production, while still making it easy to trace how a final screen came to life.',
      },
      {
        title: 'Where this goes next',
        body:
          'The next step is to integrate a formal token pipeline and handoff notes so dev teams can mirror Figma tokens in code more reliably, and keep UI drift under control as products evolve.',
      },
    ],
  },
};

// ---------------- BENGALURU TRAFFIC POLICE – REAL PROJECT LAYOUT ----------------

function BtpCaseStudyLayout({
  onNavigate,
}: {
  onNavigate: (page: string, projectId?: string) => void;
}) {
  const project = projects.find((p) => p.id === 'btp') ?? projects[0];

  return (
    <div id="top" className="min-h-screen bg-background text-foreground pt-24 pb-16">
      {/* Back */}
      <div className="max-content-width mx-auto px-6 md:px-8 lg:px-12 mb-4">
        <button
          onClick={() => onNavigate('work')}
          className="text-xs text-muted-foreground inline-flex items-center gap-2 hover:text-foreground"
        >
          <ArrowLeft className="h-3 w-3" />
          Back to work
        </button>
      </div>

      {/* HERO – TEXT ONLY, NO BIG CARD */}
      <section className="bg-gradient-to-b from-[#071b3d] to-[#020617] text-white">
        <div className="max-content-width mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16">
          <div className="space-y-5 max-w-3xl">
            <p className="text-xs md:text-[11px] uppercase tracking-[0.25em] text-blue-200/80">
              Live public project · Bengaluru Traffic Police
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Redesigning Bengaluru&apos;s official traffic police website for
              real citizens, not just systems.
            </h1>
            <p className="text-sm md:text-[15px] text-blue-100/90 max-w-xl">
              In 2024, Bengaluru Traffic Police launched a new public website
              (btp.karnataka.gov.in) designed and developed with the Centre for
              e-Governance. The new experience replaces an older, fragmented
              site with cleaner navigation, clearer language and tools that
              make it easier to see traffic, pay or dispute challans, and stay
              updated on road safety.
            </p>

            {/* Meta from project data */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs md:text-[13px]">
              <div>
                <p className="uppercase tracking-[0.18em] text-blue-200/80 text-[10px] mb-1">
                  Project
                </p>
                <p className="font-medium">{project.title}</p>
              </div>
              <div>
                <p className="uppercase tracking-[0.18em] text-blue-200/80 text-[10px] mb-1">
                  Year
                </p>
                <p className="font-medium">{project.year}</p>
              </div>
              <div>
                <p className="uppercase tracking-[0.18em] text-blue-200/80 text-[10px] mb-1">
                  Role
                </p>
                <p className="font-medium">{project.role}</p>
              </div>
              <div>
                <p className="uppercase tracking-[0.18em] text-blue-200/80 text-[10px] mb-1">
                  Focus
                </p>
                <p className="font-medium">{project.tags.join(', ')}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://btp.karnataka.gov.in/en"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white text-slate-900 text-sm font-medium shadow-md shadow-black/20"
              >
                View live website
              </a>
              <button
                onClick={() => {
                  const el = document.getElementById('btp-overview');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-white/40 text-sm font-medium"
              >
                Jump to overview ↓
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section id="btp-overview" className="bg-muted/40">
        <div className="max-content-width mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.5fr,1.1fr] lg:items-start">
            <div className="space-y-4 text-sm md:text-[15px] text-muted-foreground">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Project overview
              </p>
              <h2 className="text-lg md:text-2xl font-semibold text-foreground">
                Bengaluru&apos;s roads are chaotic. The website now doesn&apos;t have to be.
              </h2>
              <p>
                The earlier BTP website had grown over time: new links, new
                PDFs and new portals layered on top of each other. Citizens had
                to guess where to start for basics like checking a challan,
                understanding a rule or seeing diversions.
              </p>
              <p>
                The new public site brings this into a single, structured
                experience with three clear pillars that mirror how BTP actually
                works day to day: Traffic Management, Enforcement and Road
                Safety. From there, people can report violations, register
                complaints and suggestions, pay and dispute challans, and browse
                alerts without jumping between random domains.
              </p>
              <p>
                My role on this project was to work with the traffic police
                leadership and the Centre for e-Governance dev team to
                restructure the information architecture, design responsive
                layouts and craft UI that feels official, but not intimidating.
              </p>
            </div>

            {/* Big image slot 02 – navigation / IA */}
            <div className="rounded-[24px] bg-card border border-border overflow-hidden">
              <div className="aspect-[4/3] w-full flex items-center justify-center text-sm md:text-[15px] text-muted-foreground text-center px-6">
                Image 02 – Navigation showing Traffic Management, Enforcement &amp; Road Safety
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT CHANGED ON THE NEW SITE */}
      <section className="bg-background">
        <div className="max-content-width mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.4fr,1.1fr] lg:items-start">
            <div className="space-y-4 text-sm md:text-[15px] text-muted-foreground">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                What changed
              </p>
              <h2 className="text-lg md:text-2xl font-semibold text-foreground">
                From scattered links to one trustworthy entry point.
              </h2>
              <p>
                The public launch of the new website focused on a few key
                experience changes that matter in daily life, not just on paper:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium">One clear home for services.</span>{' '}
                  Traffic information, challans, complaints and safety content
                  now sit under a single, consistent design system instead of
                  multiple disconnected portals.
                </li>
                <li>
                  <span className="font-medium">Smarter traffic tools.</span>{' '}
                  A data-backed traffic situation map and &quot;Navigate
                  Bengaluru&quot; help citizens see congestion, closures and
                  diversions, then choose better routes.
                </li>
                <li>
                  <span className="font-medium">Simpler challan flows.</span>{' '}
                  People can check, understand and pay traffic challans through
                  a cleaner, step-wise flow that connects to the state
                  e-challan system without forcing them to decode tables.
                </li>
                <li>
                  <span className="font-medium">Timely alerts and news.</span>{' '}
                  Dedicated space for traffic updates, campaigns and road
                  safety initiatives makes it easier to keep up with changes in
                  the city.
                </li>
              </ul>
            </div>

            {/* Big image slot 03 – traffic situation / Navigate Bengaluru */}
            <div className="rounded-[24px] bg-card border border-border overflow-hidden">
              <div className="aspect-[16/10] w-full flex items-center justify-center text-sm md:text-[15px] text-muted-foreground text-center px-6">
                Image 03 – Traffic situation map &amp; Navigate Bengaluru view
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN APPROACH & PRINCIPLES */}
      <section className="bg-muted/40">
        <div className="max-content-width mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.4fr,1.1fr] lg:items-start">
            <div className="space-y-4 text-sm md:text-[15px] text-muted-foreground">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Design approach
              </p>
              <h2 className="text-lg md:text-2xl font-semibold text-foreground">
                Government UI that feels official, not overwhelming.
              </h2>
              <p>
                This project was less about inventing something flashy and more
                about making a real, day-to-day tool feel trustworthy. The
                design language leans on Karnataka Police branding, but softens
                the experience with better spacing, clearer hierarchy and fewer
                decision points on each screen.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium">Structure before paint.</span>{' '}
                  Information architecture came first: grouping content under
                  the same pillars BTP uses internally, then simplifying labels
                  into everyday language.
                </li>
                <li>
                  <span className="font-medium">Desktop &amp; mobile together.</span>{' '}
                  Layouts were designed to work on low-end phones and large
                  screens without splitting the experience into two separate
                  designs.
                </li>
                <li>
                  <span className="font-medium">Calm, readable typography.</span>{' '}
                  Long legal text and safety content are set in a type scale
                  that is comfortable to scan instead of feeling like a wall of
                  policy.
                </li>
              </ul>
            </div>

            {/* Big image slot 04 – desktop + mobile pair */}
            <div className="rounded-[24px] bg-card border border-border overflow-hidden">
              <div className="aspect-[9/16] md:aspect-[16/10] w-full flex items-center justify-center text-sm md:text-[15px] text-muted-foreground text-center px-6">
                Image 04 – Desktop &amp; mobile layouts side by side
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCREEN GALLERY – extra image space for you to fill */}
      <section className="bg-background">
        <div className="max-content-width mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-14">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Screens
          </p>
          <h2 className="text-lg md:text-2xl font-semibold text-foreground mt-2 mb-6">
            Key screens from the live website.
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Image slot 05 */}
            <div className="rounded-[24px] bg-card border border-border overflow-hidden">
              <div className="aspect-[16/10] w-full flex items-center justify-center text-sm md:text-[15px] text-muted-foreground text-center px-6">
                Image 05 – Challan search &amp; payment flow
              </div>
            </div>
            {/* Image slot 06 */}
            <div className="rounded-[24px] bg-card border border-border overflow-hidden">
              <div className="aspect-[16/10] w-full flex items-center justify-center text-sm md:text-[15px] text-muted-foreground text-center px-6">
                Image 06 – Complaints, suggestions &amp; violation reporting
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {/* Image slot 07 */}
            <div className="rounded-[24px] bg-card border border-border overflow-hidden">
              <div className="aspect-[4/3] w-full flex items-center justify-center text-xs md:text-[13px] text-muted-foreground text-center px-4">
                Image 07 – Road safety campaigns / educational content
              </div>
            </div>
            {/* Image slot 08 */}
            <div className="rounded-[24px] bg-card border border-border overflow-hidden">
              <div className="aspect-[4/3] w-full flex items-center justify-center text-xs md:text-[13px] text-muted-foreground text-center px-4">
                Image 08 – Alerts &amp; news listing
              </div>
            </div>
            {/* Image slot 09 */}
            <div className="rounded-[24px] bg-card border border-border overflow-hidden">
              <div className="aspect-[4/3] w-full flex items-center justify-center text-xs md:text-[13px] text-muted-foreground text-center px-4">
                Image 09 – Mobile menu &amp; key quick actions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES & REFLECTIONS */}
      <section className="bg-muted/40">
        <div className="max-content-width mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-14">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Outcomes
          </p>
          <h2 className="text-lg md:text-2xl font-semibold text-foreground mt-2">
            What the new website unlocks.
          </h2>

          <div className="mt-6 space-y-4 text-sm md:text-[15px] text-muted-foreground max-w-3xl">
            <p>
              With the new website, Bengaluru Traffic Police now has a single
              public-facing home for traffic information, fines and safety
              updates. Citizens no longer have to guess which portal is official
              when an SMS about a challan or diversion arrives, and officers can
              point people to one URL instead of a collection of links.
            </p>
            <p>
              The design choices here are deliberately simple: fewer surprises,
              more predictable patterns and a layout that respects how stressful
              traffic-related tasks can already feel. The goal was not to turn a
              government service into a startup landing page, but to make
              something that feels steady, modern and usable for years.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs md:text-[13px] text-muted-foreground">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="underline underline-offset-4"
            >
              Back to top ↑
            </button>
            <div className="flex flex-wrap items-center gap-3">
              <span>Bengaluru · Live public project · 2024</span>
              <span className="hidden sm:inline text-border">|</span>
              <a
                href="https://btp.karnataka.gov.in/en"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                Visit btp.karnataka.gov.in
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ---------------- MAIN CASE STUDY SWITCHER ----------------

export function CaseStudyPage({ projectId, onNavigate }: CaseStudyPageProps) {
  // Special-case BTP: full custom layout
  if (projectId === 'btp') {
    return <BtpCaseStudyLayout onNavigate={onNavigate} />;
  }

  // Fallback: generic layout for other case studies
  const project = projects.find((p) => p.id === projectId) ?? projects[0];
  const details = caseStudyData[projectId] ?? caseStudyData['process'];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-content-width px-6 md:px-8 lg:px-12 max-w-4xl">
        {/* Back */}
        <button
          onClick={() => onNavigate('work')}
          className="text-xs text-muted-foreground inline-flex items-center gap-2 hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-3 w-3" />
          Back to work
        </button>

        {/* Hero */}
        <header className="space-y-3 mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {details.label}
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            {project.title}
          </h1>
          <p className="text-sm md:text-[15px] text-muted-foreground max-w-2xl">
            {details.heroSummary}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-[13px] pt-4">
            <div>
              <p className="text-muted-foreground uppercase tracking-[0.18em] text-[10px] mb-1">
                Year
              </p>
              <p className="font-medium">{project.year}</p>
            </div>
            <div>
              <p className="text-muted-foreground uppercase tracking-[0.18em] text-[10px] mb-1">
                Role
              </p>
              <p className="font-medium">{project.role}</p>
            </div>
            <div>
              <p className="text-muted-foreground uppercase tracking-[0.18em] text-[10px] mb-1">
                Focus
              </p>
              <p className="font-medium">{project.tags.join(', ')}</p>
            </div>
            <div>
              <p className="text-muted-foreground uppercase tracking-[0.18em] text-[10px] mb-1">
                Summary
              </p>
              <p className="font-medium">{project.impact}</p>
            </div>
          </div>
        </header>

        {/* Sections */}
        <div className="space-y-10">
          {details.sections?.map((section: any) => (
            <section key={section.title} className="space-y-2">
              <h2 className="text-lg md:text-xl font-semibold">
                {section.title}
              </h2>
              <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                {section.body}
              </p>
            </section>
          ))}

          {/* Optional figma link for figma case-study */}
          {projectId === 'figma' && (
            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-semibold">
                View the Figma system
              </h2>
              <p className="text-sm md:text-[15px] text-muted-foreground">
                You can explore the live design system, components, and tokens
                in this Figma file.
              </p>
              <a
                href="https://www.figma.com/design/wtZHXAkuEHHps7fls8JABw/sprinkle_demo_practise?node-id=0-1&t=lXjyaMAhhDFVgaid-1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Open Figma file
                <ExternalLink className="h-4 w-4" />
              </a>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
