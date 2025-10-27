import { Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#0B0C0E] text-[#EDEEF0] py-12 md:py-14 lg:py-16">
      <div className="max-content-width px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {/* Logo */}
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">PRATHIK.</h3>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-[#EDEEF0]/70">Navigation</h4>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => onNavigate('work')}
                className="text-left hover:text-[#7C5CFF] transition-colors duration-200"
              >
                Work
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="text-left hover:text-[#7C5CFF] transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => onNavigate('resume')}
                className="text-left hover:text-[#7C5CFF] transition-colors duration-200"
              >
                Resume
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="text-left hover:text-[#7C5CFF] transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="mb-4 text-[#EDEEF0]/70">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/prathikvenkatesh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#7C5CFF] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:prathikvenku7@gmail.com"
                className="hover:text-[#7C5CFF] transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#EDEEF0]/10 text-center text-[#EDEEF0]/50">
          <p>© 2024 Prathik Venkatesh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
