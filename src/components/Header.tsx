
import React, { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    // Check initial scroll position
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-8 lg:px-12 ${
        isScrolled ? 'py-3 bg-white/95 backdrop-blur-md shadow-sm scrolled' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-serif font-semibold bg-clip-text text-transparent bg-gradient-to-r from-evoya-blue to-evoya-green">
            evoya
          </div>
          <div className="ml-2 px-2 py-1 bg-gradient-to-r from-evoya-blue/10 to-evoya-green/10 rounded text-xs font-medium">
            KI-Workspaces
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className={`${isScrolled ? 'text-evoya-navy font-semibold' : 'text-white'} hover:text-evoya-orange transition-colors`}>Funktionen</a>
          <a href="#benefits" className={`${isScrolled ? 'text-evoya-navy font-semibold' : 'text-white'} hover:text-evoya-orange transition-colors`}>Vorteile</a>
          <a href="#services" className={`${isScrolled ? 'text-evoya-navy font-semibold' : 'text-white'} hover:text-evoya-orange transition-colors`}>Dienstleistungen</a>
          <a href="#comparison" className={`${isScrolled ? 'text-evoya-navy font-semibold' : 'text-white'} hover:text-evoya-orange transition-colors`}>Vergleich</a>
          <a href="#pricing" className={`${isScrolled ? 'text-evoya-navy font-semibold' : 'text-white'} hover:text-evoya-orange transition-colors`}>Preise</a>
          <a href="#contact" className="bg-white text-evoya-navy hover:bg-evoya-orange hover:text-white transition-colors duration-300 font-medium py-2 px-4 rounded-md">Kontakt</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          <Menu className={`h-6 w-6 ${isScrolled ? 'text-evoya-navy' : 'text-white'}`} />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="text-2xl font-serif font-semibold bg-clip-text text-transparent bg-gradient-to-r from-evoya-blue to-evoya-green">
              evoya
            </div>
            <button onClick={toggleMobileMenu}>
              <X className="h-6 w-6 text-gray-700" />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            <a 
              href="#features" 
              className="text-gray-700 text-lg py-2 border-b border-gray-100"
              onClick={toggleMobileMenu}
            >
              Funktionen
            </a>
            <a 
              href="#benefits" 
              className="text-gray-700 text-lg py-2 border-b border-gray-100"
              onClick={toggleMobileMenu}
            >
              Vorteile
            </a>
            <a 
              href="#services" 
              className="text-gray-700 text-lg py-2 border-b border-gray-100"
              onClick={toggleMobileMenu}
            >
              Dienstleistungen
            </a>
            <a 
              href="#comparison" 
              className="text-gray-700 text-lg py-2 border-b border-gray-100"
              onClick={toggleMobileMenu}
            >
              Vergleich
            </a>
            <a 
              href="#pricing" 
              className="text-gray-700 text-lg py-2 border-b border-gray-100"
              onClick={toggleMobileMenu}
            >
              Preise
            </a>
            <a 
              href="#contact" 
              className="btn-primary text-center mt-4"
              onClick={toggleMobileMenu}
            >
              Kontakt
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
