import { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  // Scroll spy for active section
  useEffect(() => {
    const handleScroll = () => {
      let current = 'about';
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            current = link.id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64; // h-16 = 64px
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo/Name */}
          <div className="flex items-center">
            {/* <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
              Lauren Hesterman
            </div> */}
          </div>
          <nav className="hidden md:flex items-center h-full">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-6 h-full flex items-center text-sm lg:text-base transition-colors duration-200
        ${activeSection === link.id
                    ? "bg-primary-50 dark:bg-primary-900/40 border-b-4 border-primary-500 dark:border-primary-400"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800 border-b-4 border-transparent"
                  }
      `}
                style={{ outline: "none" }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right side - Dark Mode Toggle and Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* <DarkModeToggle /> */}
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <nav className="px-4 py-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left py-2 transition-colors duration-200
                    ${activeSection === link.id
                      ? "text-primary-700 dark:text-primary-400 font-bold border-b-2 border-primary-500 dark:border-primary-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 border-b-2 border-transparent"
                    }
                  `}
                  style={{ outline: "none" }}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
