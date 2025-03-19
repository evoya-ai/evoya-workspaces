
import React, { useState, useEffect } from 'react';
import { X, Menu, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translate } from '../utils/translations';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

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

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-8 lg:px-12 ${
        isScrolled ? 'py-3 bg-white/95 backdrop-blur-md shadow-sm scrolled' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-white rounded-lg px-3 py-3 shadow-sm">
            <img 
              src="/lovable-uploads/4024a740-8b36-4293-82d7-02b4a0f8ef8c.png" 
              alt="Evoya AI Logo" 
              className="h-8" 
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className={`${isScrolled ? 'text-evoya-navy font-semibold' : 'text-white'} hover:text-evoya-orange transition-colors`}>
            {translate('nav_features', language)}
          </a>
          <a href="#benefits" className={`${isScrolled ? 'text-evoya-navy font-semibold' : 'text-white'} hover:text-evoya-orange transition-colors`}>
            {translate('nav_benefits', language)}
          </a>
          <a href="#services" className={`${isScrolled ? 'text-evoya-navy font-semibold' : 'text-white'} hover:text-evoya-orange transition-colors`}>
            {translate('nav_services', language)}
          </a>
          <a href="#comparison" className={`${isScrolled ? 'text-evoya-navy font-semibold' : 'text-white'} hover:text-evoya-orange transition-colors`}>
            {translate('nav_comparison', language)}
          </a>
          <a href="#pricing" className={`${isScrolled ? 'text-evoya-navy font-semibold' : 'text-white'} hover:text-evoya-orange transition-colors`}>
            {translate('nav_pricing', language)}
          </a>
          <a href="#contact" className="bg-white text-evoya-navy hover:bg-evoya-orange hover:text-white transition-colors duration-300 font-medium py-2 px-4 rounded-md">
            {translate('nav_contact', language)}
          </a>
          
          {/* Language Switcher */}
          <button 
            onClick={toggleLanguage} 
            className={`flex items-center ${isScrolled ? 'text-evoya-navy' : 'text-white'} hover:text-evoya-orange transition-colors`}
            aria-label="Toggle language"
          >
            <Globe className="h-5 w-5 mr-1" />
            <span className="text-sm font-medium">{translate('language_switch', language)}</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Language Switcher for Mobile */}
          <button 
            onClick={toggleLanguage} 
            className={`flex items-center ${isScrolled ? 'text-evoya-navy' : 'text-white'} hover:text-evoya-orange transition-colors`}
            aria-label="Toggle language"
          >
            <Globe className="h-5 w-5" />
          </button>
          
          <button onClick={toggleMobileMenu}>
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-evoya-navy' : 'text-white'}`} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="bg-white rounded-lg px-3 py-1 shadow-sm">
              <img 
                src="/lovable-uploads/4024a740-8b36-4293-82d7-02b4a0f8ef8c.png" 
                alt="Evoya AI Logo" 
                className="h-8" 
              />
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleLanguage} 
                className="flex items-center text-gray-700"
                aria-label="Toggle language"
              >
                <Globe className="h-5 w-5 mr-1" />
                <span className="text-sm font-medium">{translate('language_switch', language)}</span>
              </button>
              <button onClick={toggleMobileMenu}>
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>
          <nav className="flex flex-col space-y-6">
            <a 
              href="#features" 
              className="text-gray-700 text-lg py-2 border-b border-gray-100"
              onClick={toggleMobileMenu}
            >
              {translate('nav_features', language)}
            </a>
            <a 
              href="#benefits" 
              className="text-gray-700 text-lg py-2 border-b border-gray-100"
              onClick={toggleMobileMenu}
            >
              {translate('nav_benefits', language)}
            </a>
            <a 
              href="#services" 
              className="text-gray-700 text-lg py-2 border-b border-gray-100"
              onClick={toggleMobileMenu}
            >
              {translate('nav_services', language)}
            </a>
            <a 
              href="#comparison" 
              className="text-gray-700 text-lg py-2 border-b border-gray-100"
              onClick={toggleMobileMenu}
            >
              {translate('nav_comparison', language)}
            </a>
            <a 
              href="#pricing" 
              className="text-gray-700 text-lg py-2 border-b border-gray-100"
              onClick={toggleMobileMenu}
            >
              {translate('nav_pricing', language)}
            </a>
            <a 
              href="#contact" 
              className="btn-primary text-center mt-4"
              onClick={toggleMobileMenu}
            >
              {translate('nav_contact', language)}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
