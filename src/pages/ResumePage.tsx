// import { Download, Award, Wrench, Briefcase } from 'lucide-react';
// import { Button } from '../components/ui/button';
// import { SectionHeader } from '../components/SectionHeader';

// export function ResumePage() {
//   const skills = [
//     'User Research',
//     'Wireframing',
//     'Information Architecture',
//     'Prototyping',
//     'Visual Design',
//     'Design Systems',
//     'Accessibility',
//     'Usability Testing',
//   ];

//   const tools = [
//     'Figma',
//     'Sketch',
//     'Adobe Creative Cloud',
//     'After Effects',
//     'Illustrator',
//     'Photoshop',
//     'Adobe XD',
//     'InVision',
//   ];

//   const awards = [
//     'IDF UX & Design Thinking Certification',
//     'BVA Applied Arts Degree',
//   ];

//   return (
//     <div className="min-h-screen pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-24 lg:pb-32">
//       <div className="max-content-width px-6 md:px-8 lg:px-12">
//         <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 lg:mb-20">
//           <h1 className="mb-6">Resume</h1>
//           <p className="text-lg md:text-xl text-muted-foreground mb-8">
//             Download my complete resume for a detailed overview of my experience, skills, and achievements.
//           </p>
//           <Button
//             size="lg"
//             className="bg-primary text-primary-foreground hover:bg-primary/90"
//             onClick={() => {
//               // In a real application, this would download a PDF file
//               alert('Resume download would begin here. Please contact prathikvenku7@gmail.com for a copy.');
//             }}
//           >
//             <Download className="mr-2" size={20} />
//             Download Resume (PDF)
//           </Button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
//           {/* Skills */}
//           <div className="bg-card border border-border rounded-lg p-6 md:p-8">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="p-2 bg-primary/10 rounded-lg">
//                 <Briefcase className="text-primary" size={24} />
//               </div>
//               <h3>Skills</h3>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {skills.map((skill) => (
//                 <span
//                   key={skill}
//                   className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md border border-border text-sm"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Tools */}
//           <div className="bg-card border border-border rounded-lg p-6 md:p-8">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="p-2 bg-primary/10 rounded-lg">
//                 <Wrench className="text-primary" size={24} />
//               </div>
//               <h3>Tools</h3>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {tools.map((tool) => (
//                 <span
//                   key={tool}
//                   className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md border border-border text-sm"
//                 >
//                   {tool}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Awards & Certifications */}
//           <div className="bg-card border border-border rounded-lg p-6 md:p-8">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="p-2 bg-primary/10 rounded-lg">
//                 <Award className="text-primary" size={24} />
//               </div>
//               <h3>Certifications</h3>
//             </div>
//             <ul className="space-y-3">
//               {awards.map((award) => (
//                 <li key={award} className="flex items-start gap-2">
//                   <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
//                   <span>{award}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Contact CTA */}
//         <div className="mt-12 md:mt-16 lg:mt-20 text-center bg-secondary/30 rounded-lg p-8 md:p-10 lg:p-12">
//           <h3 className="mb-4">Want to know more?</h3>
//           <p className="text-muted-foreground mb-6">
//             Feel free to reach out for my full resume or to discuss opportunities.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a href="mailto:prathikvenku7@gmail.com">
//               <Button variant="outline">
//                 Email Me
//               </Button>
//             </a>
//             <a href="tel:8660021310">
//               <Button variant="outline">
//                 Call: 8660021310
//               </Button>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { Download, Award, Wrench, Briefcase } from 'lucide-react';
import { Button } from '../components/ui/button';
import { SectionHeader } from '../components/SectionHeader';

// ✅ Put your PDF at: src/assets/resume.pdf (rename if needed)


export function ResumePage() {
  const skills = [
    'User Research',
    'Wireframing',
    'Information Architecture',
    'Prototyping',
    'Visual Design',
    'Design Systems',
    'Accessibility',
    'Usability Testing',
  ];

  const tools = [
    'Figma',
    'Sketch',
    'Adobe Creative Cloud',
    'After Effects',
    'Illustrator',
    'Photoshop',
    'Adobe XD',
    'InVision',
  ];

  const awards = [
    'IDF UX & Design Thinking Certification',
    'BVA Applied Arts Degree',
  ];

  return (
    <div className="min-h-screen pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-24 lg:pb-32">
      <div className="max-content-width px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 lg:mb-20">
          <h1 className="mb-6">Resume</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Download my complete resume for a detailed overview of my experience, skills, and achievements.
          </p>

          {/* ✅ Real download from assets with a proper filename */}
          <a
  href="/assets/prathik_cv_2025-26.pdf"
  download="Prathik_Venkatesh_Resume.pdf"
  className="inline-block"
>
  <Button
    size="lg"
    className="bg-primary text-primary-foreground hover:bg-primary/90"
  >
    <Download className="mr-2" size={20} />
    Download Resume (PDF)
  </Button>
</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {/* Skills */}
          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Briefcase className="text-primary" size={24} />
              </div>
              <h3>Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md border border-border text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Wrench className="text-primary" size={24} />
              </div>
              <h3>Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md border border-border text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Awards & Certifications */}
          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Award className="text-primary" size={24} />
              </div>
              <h3>Certifications</h3>
            </div>
            <ul className="space-y-3">
              {awards.map((award) => (
                <li key={award} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>{award}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 md:mt-16 lg:mt-20 text-center bg-secondary/30 rounded-lg p-8 md:p-10 lg:p-12">
          <h3 className="mb-4">Want to know more?</h3>
          <p className="text-muted-foreground mb-6">
            Feel free to reach out for my full resume or to discuss opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:prathikvenku7@gmail.com">
              <Button variant="outline">Email Me</Button>
            </a>
            <a href="tel:+918660021310">
              <Button variant="outline">Call: +91 86600 21310</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}