
import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 pb-12 overflow-hidden bg-gradient-to-b from-evoya-navy to-evoya-blue">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-up" className="text-center lg:text-left">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium">
              Innovativ. Kollaborativ. Sicher.
            </div>
            <h1 className="mb-6 text-white">
              <span className="block mb-2">Optimieren Sie Arbeitsabläufe</span>
              <span className="block mb-2">mit KI-gestützten</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-evoya-teal">
                Workspaces
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto lg:mx-0">
              Evoya AI Workspaces ermöglichen die direkte Zusammenarbeit mit KI – für effiziente Texterstellung, 
              Dokumentenanalyse, Live-Recherchen und visuelle Darstellungen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://tidycal.com/evoya/erstgespraech" target="_blank" rel="noopener noreferrer" className="bg-white text-evoya-navy hover:bg-evoya-orange hover:text-white transition-colors duration-300 font-medium py-3 px-6 rounded-md inline-flex items-center group">
                Demo vereinbaren
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="https://avaia.io/accounts/signup/" target="_blank" rel="noopener noreferrer" className="border-2 border-white bg-transparent hover:bg-white/10 hover:border-evoya-orange transition-colors duration-300 font-medium py-3 px-6 rounded-md inline-flex items-center group">
                <span className="text-white group-hover:text-evoya-orange transition-colors duration-300">Kostenlos starten</span>
              </a>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={300} className="relative">
            <div className="relative z-10 rounded-2xl shadow-2xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-sm">
              <div className="aspect-[4/3] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="150" r="100" fill="white" fillOpacity="0.2" />
                    <circle cx="200" cy="150" r="70" fill="white" fillOpacity="0.3" />
                    <circle cx="200" cy="150" r="40" fill="white" fillOpacity="0.4" />
                  </svg>
                </div>
                
                <div className="absolute top-1/4 left-1/4 w-32 h-24 bg-white rounded-lg shadow-lg transform -rotate-6 animate-float" style={{ animationDelay: '0s' }}>
                  <div className="h-4 bg-evoya-orange rounded-t-lg"></div>
                  <div className="p-2">
                    <div className="h-2 bg-gray-200 rounded-full mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                  </div>
                </div>
                
                <div className="absolute top-1/3 right-1/4 w-32 h-24 bg-white rounded-lg shadow-lg transform rotate-6 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="h-4 bg-evoya-teal rounded-t-lg"></div>
                  <div className="p-2">
                    <div className="h-2 bg-gray-200 rounded-full mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-1/2"></div>
                  </div>
                </div>
                
                <div className="absolute bottom-1/3 right-1/3 w-32 h-24 bg-white rounded-lg shadow-lg transform -rotate-3 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="h-4 bg-evoya-orange rounded-t-lg"></div>
                  <div className="p-2">
                    <div className="h-2 bg-gray-200 rounded-full mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full"></div>
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
