import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { Logo } from './Logo';

interface NavBarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export function NavBar({ currentPage, onNavigate, isDarkMode, onToggleDarkMode }: NavBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', page: 'work' },
    { label: 'About', page: 'about' },
    { label: 'Resume', page: 'resume' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-background/50 backdrop-blur-sm'
      }`}
    >
      <div className="max-content-width px-6 md:px-8 lg:px-12 py-4 md:py-5">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="flex cursor-pointer  items-center gap-3 group transition-all duration-200"
            aria-label="Home"
          >
            <div className="w-10 h-10 group-hover:scale-110 transition-transform duration-200">
              <Logo />
            </div>
            <span className="text-2xl font-semibold tracking-tight group-hover:text-primary transition-colors duration-200">
              PRATHIK.
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className={`px-3 py-2 rounded-lg transition-colors duration-200 cursor-pointer  ${
                  currentPage === link.page
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            {/* Theme Toggle */}
            <div className="ml-2 pl-2 border-l border-border">
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggleDarkMode}
                className="rounded-lg cursor-pointer "
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleDarkMode}
              className="rounded-lg"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-2 animate-in slide-in-from-top-4 duration-200">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  onNavigate(link.page);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                  currentPage === link.page
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
