
import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-up" className="text-center lg:text-left">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-evoya-navy/10 text-evoya-navy text-sm font-medium">
              Innovativ. Kollaborativ. Sicher.
            </div>
            <h1 className="mb-6">
              <span className="block mb-3">Optimieren Sie Ihre Geschäftsprozesse</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-evoya-navy to-evoya-teal">
                mit KI-Technologie
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Evoya KI-Workspaces bietet eine moderne, kollaborative und sichere Plattform, 
              die sich nahtlos an Ihre bestehenden Geschäftsprozesse anpasst.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="btn-primary group">
                Kostenlose Demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#features" className="btn-secondary">
                Mehr erfahren
              </a>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={300} className="relative">
            <div className="relative z-10 rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="aspect-[4/3] relative bg-gradient-to-br from-gray-50 to-gray-100">
                {/* Abstract workspace illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="150" r="100" fill="url(#gradient1)" fillOpacity="0.2" />
                    <circle cx="200" cy="150" r="70" fill="url(#gradient2)" fillOpacity="0.3" />
                    <circle cx="200" cy="150" r="40" fill="url(#gradient3)" fillOpacity="0.4" />
                    <defs>
                      <linearGradient id="gradient1" x1="100" y1="50" x2="300" y2="250" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#003161" />
                        <stop offset="1" stopColor="#5BC9BF" />
                      </linearGradient>
                      <linearGradient id="gradient2" x1="130" y1="80" x2="270" y2="220" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#003161" />
                        <stop offset="1" stopColor="#5BC9BF" />
                      </linearGradient>
                      <linearGradient id="gradient3" x1="160" y1="110" x2="240" y2="190" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#003161" />
                        <stop offset="1" stopColor="#5BC9BF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                {/* UI Windows */}
                <div className="absolute top-1/4 left-1/4 w-32 h-24 bg-white rounded-lg shadow-lg transform -rotate-6 animate-float" style={{ animationDelay: '0s' }}>
                  <div className="h-4 bg-evoya-navy rounded-t-lg"></div>
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

            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gray-50 rounded-full opacity-50"></div>
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-evoya-navy/10 rounded-full blur-xl"></div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
