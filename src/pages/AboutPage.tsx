import { motion } from 'motion/react';
import { SectionHeader } from '../components/SectionHeader';
import { TimelineItem } from '../components/TimelineItem';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  const experience = [
    {
      year: 'August 2024 - Present',
      role: 'Web Designer',
      organization: 'Centre for e-Governance (GoK)',
    },
    {
      year: 'February 2024 - July 2024',
      role: 'UI/UX Designer',
      organization: 'JDS Design ',
    },
    {
      year: '2024 - part time',
      role: 'Graphic Designer',
      organization: 'Creodo',
    },
    {
      year: '2023 – 2024',
      role: 'Video Editor',
      Media: 'Instagram',
    },
  ];

  const skills = [
    'User Research',
    'Wireframing',
    'Information Architecture',
    'Prototyping',
    'Visual Design',
    'Design Systems',
  ];

  const tools = [
    'Figma',
    'Sketch',
    'Adobe Creative Cloud',
    'After Effects',
    'Illustrator',
    'Photoshop',
  ];

  return (
    <motion.div 
      className="min-h-screen section-padding"
      style={{ paddingTop: '128px' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-content-width px-6 md:px-8 lg:px-12">
        {/* Hero Block */}
        <div className="mb-16 md:mb-20 lg:mb-24 grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16 items-center">
          <motion.div 
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1>Prathik Venkatesh</h1>
            <h3 className="text-muted-foreground">
              Visual / Product Designer passionate about clarity and usability.
            </h3>
            <p className="text-lg leading-relaxed">
              I’m Prathik — a visual and product designer focused on creating accessible, clean, and effective experiences. With a BVA in Applied Arts and hands-on UI/UX experience, I bridge research, visual design, and delivery. I’ve designed for government services, e-commerce platforms, and social media brands.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
          >
            <div className="w-64 h-64 rounded-2xl overflow-hidden border border-border shadow-lg">
              <ImageWithFallback
                src="assets/small_pic.jpg"
                alt="Prathik Venkatesh"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <section className="mb-16 md:mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            <SectionHeader title="Experience" />
          </motion.div>
          <motion.div 
            className="bg-card border border-border rounded-lg p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <TimelineItem
                  year={item.year}
                  role={item.role}
                  organization={item.organization}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Skills & Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-16 md:mb-20 lg:mb-24">
          <motion.section
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
          >
            <SectionHeader title="Skills" />
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg border border-border"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <SectionHeader title="Tools" />
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg border border-border"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          <SectionHeader title="Education" />
          <motion.div 
            className="bg-card border border-border rounded-lg p-6 md:p-8 space-y-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div>
              <h4>BVA (Applied Arts)</h4>
              <p className="text-muted-foreground">
                Karnataka Chitrakala Parishath, 2020–2024
              </p>
            </div>
            <div>
              <h4>UX & Design Thinking Certificate</h4>
              <p className="text-muted-foreground">
                Interaction Design Foundation, 2024
              </p>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
}
