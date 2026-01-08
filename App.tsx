import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import ImpactPage from './pages/ImpactPage';
import ContactPage from './pages/ContactPage';
import StudentHub from './components/StudentHub';
import { MessageCircle, ArrowUp } from 'lucide-react';

export type AppView = 'home' | 'about' | 'courses' | 'impact' | 'contact' | 'student-hub';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  }, [currentView]);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openRegistration = () => {
    setIsRegistrationOpen(true);
    setIsMenuOpen(false);
  };
  const closeRegistration = () => setIsRegistrationOpen(false);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomePage onOpenRegistration={openRegistration} setView={setCurrentView} />;
      case 'about':
        return <AboutPage />;
      case 'courses':
        return <CoursesPage onOpenRegistration={openRegistration} />;
      case 'impact':
        return <ImpactPage />;
      case 'contact':
        return <ContactPage />;
      case 'student-hub':
        return <StudentHub />;
      default:
        return <HomePage onOpenRegistration={openRegistration} setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-brand-blue selection:text-white">
      <Navbar 
        isMenuOpen={isMenuOpen} 
        toggleMenu={toggleMenu} 
        onOpenRegistration={openRegistration} 
        currentView={currentView}
        setView={setCurrentView}
      />
      
      <main className="pt-0">
        {renderView()}
      </main>

      <Footer setView={setCurrentView} />
      
      {/* Registration Modal */}
      <RegistrationModal isOpen={isRegistrationOpen} onClose={closeRegistration} />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
        {showScrollTop && (
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 bg-white text-brand-navy rounded-full shadow-2xl border border-gray-100 hover:bg-gray-50 transition-all animate-fade-in-up"
          >
            <ArrowUp size={24} />
          </button>
        )}
        <a 
          href="https://wa.me/27605506641" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-4 bg-green-500 text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
        >
          <MessageCircle size={24} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">
            WhatsApp Us
          </span>
        </a>
      </div>
    </div>
  );
};

export default App;