import { useState, useEffect } from 'react';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { AboutPage } from './pages/AboutPage';
import { ResumePage } from './pages/ResumePage';
import { ContactPage } from './pages/ContactPage';
import { CaseStudyPage } from './pages/CaseStudyPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleNavigate = (page: string, projectId?: string) => {
    setCurrentPage(page);
    if (projectId) {
      setSelectedProject(projectId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', (!isDarkMode).toString());
  };

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setIsDarkMode(savedDarkMode === 'true');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
      <NavBar 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />
      
      <main>
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'work' && <WorkPage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'resume' && <ResumePage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'case-study' && selectedProject && (
          <CaseStudyPage projectId={selectedProject} onNavigate={handleNavigate} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
