import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Button } from '../components/ui/button';
import { ProjectCard } from '../components/ProjectCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { featuredProjects } from '../data/projects';
import Peep34 from '../imports/Peep34';
import Peep16 from '../imports/Peep16';
import Peep85 from '../imports/Peep85';

interface HomePageProps {
  onNavigate: (page: string, projectId?: string) => void;
}

// Assign cover images to featured projects – exactly 3
const projectsWithImages = featuredProjects.map((project, index) => {
  const images = [
    'https://images.unsplash.com/photo-1742813615188-7ea3c64fb880?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1703007739223-3e87d56e03e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1661187259792-d0e16bf86d31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  ];
  return { ...project, coverImage: images[index] };
});

export function HomePage({ onNavigate }: HomePageProps) {
  const projectsRef = useRef(null);
  const projectsInView = useInView(projectsRef, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen">
      {/* Hero Section - Asymmetric Layout */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-accent/5 via-background to-accent-light/5"
        style={{ paddingTop: '140px', paddingBottom: '80px' }}
      >
        <div className="max-content-width px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Text Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-[12px] text-caption font-medium border border-primary/20">
                  👋 Product designer blending gov UX, gamer focus &amp; a bit of anime energy
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h1 className="text-display leading-[1.1]">
                  I bring order to government-style chaos <br />
                  with the focus of a gamer and the optimism of an anime protagonist.
                </h1>
              </motion.div>

              {/* Subheading */}
              <motion.p
                className="text-lead text-muted-foreground max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                I&apos;m a visual &amp; product designer from Bangalore. Right now at the Centre for
                e-Governance, I turn dense government workflows into quieter, clearer interfaces
                that everyday people can move through without feeling like they&apos;re fighting a
                boss battle.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button
                  onClick={() => onNavigate('work')}
                  size="lg"
                  className="shadow-lg shadow-primary/20"
                >
                  See how I clean up chaos →
                </Button>
                <Button variant="outline" size="lg" onClick={() => onNavigate('contact')}>
                  Talk about your product
                </Button>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent-light/30 rounded-full blur-3xl" />

                <div className="relative rounded-[24px] overflow-hidden border-4 border-background shadow-2xl aspect-[4/5]">
                  <ImageWithFallback
                    src="assets/small_pic.jpg"
                    alt="Prathik Venkatesh"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm rounded-[12px] p-4 border border-border">
                    <p className="text-caption">
                      <span className="text-primary font-medium">2+ years</span> designing
                      real-world digital products for government, brands &amp; small teams
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects - Bento Grid Layout */}
      <section ref={projectsRef} className="section-padding bg-secondary/30">
        <div className="max-content-width px-6 md:px-8 lg:px-12">
          {/* Section Header */}
          <motion.div
            className="mb-12 flex items-start gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            <span className="text-[80px] font-bold text-primary/20 leading-none">01</span>
            <div className="pt-3">
              <h2 className="mb-2">Selected work</h2>
              <p className="text-lead text-muted-foreground">A few quests where the UX had to level up</p>
            </div>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
            {/* First Project - Large Feature */}
            {projectsWithImages[0] && (
              <motion.div
                className="lg:col-span-2 lg:row-span-2"
                initial={{ opacity: 0, y: 30 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div
                  onClick={() => onNavigate('case-study', projectsWithImages[0].id)}
                  className="group cursor-pointer bg-card rounded-[20px] overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-secondary relative">
                    <ImageWithFallback
                      src={projectsWithImages[0].coverImage || ''}
                      alt={projectsWithImages[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-[8px] text-caption font-medium">
                      Featured
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="group-hover:text-primary transition-colors">
                        {projectsWithImages[0].title}
                      </h3>
                      <span className="text-caption text-muted-foreground whitespace-nowrap">
                        {projectsWithImages[0].year}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{projectsWithImages[0].impact}</p>
                    <div className="flex flex-wrap gap-2">
                      {projectsWithImages[0].tags.map((tag: string) => (
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
              </motion.div>
            )}

            {/* Second & Third Projects */}
            {projectsWithImages.slice(1, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <ProjectCard project={project} onClick={() => onNavigate('case-study', project.id)} />
              </motion.div>
            ))}
          </div>

          {/* View All CTA */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <Button variant="outline" size="lg" onClick={() => onNavigate('work')} className="group">
              View all projects
              <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-light/10 rounded-full blur-3xl" />

        {/* Floating Peeps */}
        <motion.div
          className="absolute top-32 right-10 w-20 h-20 opacity-30 hidden lg:block"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Peep85 />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-16 w-24 h-24 opacity-20 hidden lg:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <Peep16 />
        </motion.div>

        <div className="max-content-width px-6 md:px-8 lg:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Number */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <span className="text-[80px] font-bold text-primary/20 leading-none">02</span>
            </motion.div>

            {/* Text */}
            <motion.div
              className="lg:col-span-6 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div>
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-[8px] text-caption font-medium mb-4">
                  About me
                </span>
                <h2 className="mb-4">
                  Designer who quietly obsesses over details so your users don&apos;t have to.
                </h2>
              </div>

              <div className="space-y-4 text-body text-muted-foreground">
                <p>
                  Based in Bangalore, I design digital experiences that just <em>work</em>. Fewer
                  clicks, clearer copy, and flows that don&apos;t need a tutorial video or a cousin
                  to explain them.
                </p>
                <p>
                  Right now I work at the{' '}
                  <span className="text-foreground font-medium">Centre for e-Governance</span>,
                  helping citizens—including elderly users, people with disabilities, and first-time
                  internet users—actually complete important tasks online instead of giving up
                  halfway.
                </p>
                <p>
                  Offline I&apos;m quiet in the first meeting. Once we start looking at screens, I
                  turn into your product&apos;s most honest critic—shaped by years of strategy games
                  and anime arcs where every bad decision has consequences.
                </p>
              </div>

              <motion.div
                className="flex items-center gap-3 pt-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-secondary">
                    <Peep34 />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-secondary">
                    <Peep16 />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-secondary">
                    <Peep85 />
                  </div>
                </div>
                <span className="text-caption text-muted-foreground">
                  Designing for <span className="text-primary font-medium">everyone</span>
                </span>
              </motion.div>

              <div className="flex flex-wrap gap-3 pt-4">
                <div className="px-4 py-2 bg-card rounded-[12px] border border-border">
                  <span className="text-primary font-medium">2+</span> years experience
                </div>
                <div className="px-4 py-2 bg-card rounded-[12px] border border-border">
                  <span className="text-primary font-medium">BVA</span> Applied Arts
                </div>
                <div className="px-4 py-2 bg-card rounded-[12px] border border-border">
                  <span className="text-primary font-medium">UX</span> Certified
                </div>
              </div>

              <Button variant="outline" size="lg" onClick={() => onNavigate('about')} className="mt-6">
                More about me →
              </Button>
            </motion.div>

            {/* Skills */}
            <motion.div
              className="lg:col-span-5 space-y-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-accent/10 to-accent-light/10 rounded-[20px] p-6 border border-accent/20">
                <h4 className="text-primary mb-4">What I do best</h4>
                <div className="space-y-3">
                  {['UX/UI Design', 'Design Systems', 'User Research', 'Prototyping', 'Visual Design', 'Accessibility'].map(
                    (skill, i) => (
                      <motion.div
                        key={skill}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-body">{skill}</span>
                      </motion.div>
                    ),
                  )}
                </div>
              </div>

              <div className="bg-card rounded-[20px] p-6 border border-border">
                <h4 className="mb-4">Tools I love</h4>
                <div className="flex flex-wrap gap-2">
                  {['Figma', 'Adobe XD', 'After Effects', 'Illustrator', 'Photoshop'].map((tool) => (
                    <span key={tool} className="px-3 py-1.5 bg-secondary rounded-[8px] text-caption">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section-padding relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #7C5CFF 0%, #5A3FB0 50%, #5A3FB0 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl"
            style={{ background: '#BDAAFF' }}
          />
        </div>

        <motion.div
          className="absolute top-20 left-10 w-24 h-24 opacity-20 hidden xl:block"
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Peep34 />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-16 w-28 h-28 opacity-15 hidden xl:block"
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <Peep16 />
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-32 w-20 h-20 opacity-10 hidden xl:block"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <Peep85 />
        </motion.div>

        <div className="max-content-width px-6 md:px-8 lg:px-12 relative">
          <motion.div
            className="text-center max-w-3xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{ color: '#FFFFFF' }}>
              Let&apos;s make your product feel less like paperwork and more like a story worth
              finishing.
            </h2>
            <p className="text-lead" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              I&apos;m interested in products that actually ship, learn from users, and improve over
              time—whether it&apos;s a public service portal or a small tool with big ambition.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                onClick={() => onNavigate('contact')}
                className="bg-white hover:bg-gray-100 shadow-lg"
                style={{ color: '#7C5CFF' }}
              >
                Get in touch →
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate('resume')}
                className="hover:bg-white/10"
                style={{
                  borderColor: '#FFFFFF',
                  color: '#000000',
                }}
              >
                View resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}