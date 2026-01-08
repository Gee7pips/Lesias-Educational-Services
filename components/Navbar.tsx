
import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, GraduationCap, LayoutDashboard, Globe } from 'lucide-react';
import { AppView } from '../App';

interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  onOpenRegistration: () => void;
  currentView: AppView;
  setView: (view: AppView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, toggleMenu, onOpenRegistration, currentView, setView }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; view: AppView }[] = [
    { name: 'Home', view: 'home' },
    { name: 'About', view: 'about' },
    { name: 'Courses', view: 'courses' },
    { name: 'Impact', view: 'impact' },
    { name: 'Contact', view: 'contact' },
  ];

  const handleNavClick = (view: AppView) => {
    setView(view);
    if (isMenuOpen) toggleMenu();
  };

  const navBackground = isScrolled 
    ? 'bg-brand-navy/95 backdrop-blur-2xl py-3 shadow-2xl border-brand-gold/20' 
    : (currentView === 'home' ? 'bg-transparent py-6 border-transparent shadow-none' : 'bg-brand-navy py-5 border-white/10 shadow-sm');
  
  const textColor = (isScrolled || currentView !== 'home') ? 'text-gray-300 hover:text-white' : 'text-white/80 hover:text-white';
  const logoMainColor = (isScrolled || currentView !== 'home') ? 'text-white' : 'text-white';

  return (
    <nav className={`fixed w-full z-50 border-b transition-all duration-500 ease-in-out ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? 'h-12' : 'h-14'}`}>
          
          {/* Logo Section - Converted to Button for Keyboard Navigation */}
          <button 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer group focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy rounded-xl outline-none transition-all p-1" 
            onClick={() => setView('home')}
            aria-label="Lesia's Educational Services Home"
          >
            <div className={`${isScrolled ? 'bg-brand-gold text-brand-navy' : 'bg-white text-brand-navy'} p-2 rounded-xl group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
              <BookOpen size={isScrolled ? 20 : 24} className="transition-all duration-500" />
            </div>
            <div className="flex flex-col text-left">
              <span className={`font-serif font-bold transition-all duration-500 leading-none tracking-tight ${logoMainColor} ${isScrolled ? 'text-lg' : 'text-xl'}`}>
                Lesia's
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold">
                Educational Services
              </span>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.view)}
                className={`${textColor} font-semibold transition-all duration-200 text-[11px] uppercase tracking-widest relative group focus-visible:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-navy rounded-sm px-1 ${currentView === link.view ? 'text-brand-gold' : ''}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-gold transition-all ${currentView === link.view ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
            
            <div className="h-6 w-px mx-2 transition-colors duration-500 bg-white/10" aria-hidden="true"></div>

            <button 
              onClick={() => setView(currentView === 'student-hub' ? 'home' : 'student-hub')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all border outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy ${
                currentView === 'student-hub' 
                ? 'bg-brand-gold text-brand-navy border-brand-gold shadow-lg shadow-brand-gold/5' 
                : 'text-gray-300 border-white/10 hover:bg-white/10 hover:text-white' 
              }`}
            >
              {currentView === 'student-hub' ? (
                <><Globe size={16} aria-hidden="true" /> Public Site</>
              ) : (
                <><LayoutDashboard size={16} aria-hidden="true" /> Student Hub</>
              )}
            </button>

            <button 
              onClick={onOpenRegistration}
              className={`bg-brand-gold text-brand-navy hover:bg-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1 shadow-xl flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy ${isScrolled ? 'ring-2 ring-brand-gold/20' : ''}`}
            >
              <GraduationCap size={16} aria-hidden="true" />
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-lg p-2 text-white"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full shadow-2xl animate-fade-in-up border-t bg-brand-navy border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.view)}
                className={`w-full text-left block px-3 py-4 text-sm font-bold rounded-md uppercase tracking-wider outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:bg-white/10 transition-all ${
                  currentView === link.view ? 'text-brand-gold bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('student-hub')}
              className={`w-full text-left px-3 py-4 text-sm font-bold border-t uppercase tracking-wider outline-none focus-visible:ring-2 focus-visible:ring-brand-gold transition-all ${
                currentView === 'student-hub' ? 'text-white' : 'text-brand-gold border-white/10'
              }`}
            >
              Student Hub
            </button>
            <div className="pt-4 px-3">
              <button 
                onClick={onOpenRegistration}
                className="w-full bg-brand-gold text-brand-navy px-4 py-4 rounded-xl font-bold uppercase tracking-widest shadow-lg active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
              >
                Start Application
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
