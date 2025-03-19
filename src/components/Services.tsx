
import React from 'react';
import { GraduationCap, UserCog } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';
import { translate } from '../utils/translations';

const Services: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-evoya-orange/10 text-evoya-orange text-sm font-medium">
            {translate('services_badge', language)}
          </div>
          <h2 className="mb-6 max-w-3xl mx-auto">
            {translate('services_title', language)} <span className="text-evoya-orange">{translate('services_title_colored', language)}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {translate('services_description', language)}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection animation="slide-in-left" className="p-8 rounded-xl bg-white shadow-lg border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-evoya-orange/5 rounded-bl-full"></div>
            
            <GraduationCap className="w-12 h-12 text-evoya-orange mb-6" />
            <h3 className="text-2xl font-semibold mb-4">{translate('training_title', language)}</h3>
            <p className="text-gray-600 mb-6">
              {translate('training_description', language)}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-evoya-orange/10 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-evoya-orange"></div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">{translate('training_basics', language)}</h4>
                  <p className="text-gray-600 text-sm">{translate('training_basics_desc', language)}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-evoya-orange/10 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-evoya-orange"></div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">{translate('training_specialized', language)}</h4>
                  <p className="text-gray-600 text-sm">{translate('training_specialized_desc', language)}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-evoya-orange/10 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-evoya-orange"></div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">{translate('training_ongoing', language)}</h4>
                  <p className="text-gray-600 text-sm">{translate('training_ongoing_desc', language)}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="#contact" className="inline-flex items-center font-medium text-evoya-orange hover:text-evoya-orange/80 transition-colors">
                {translate('learn_more', language)}
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-in-right" className="p-8 rounded-xl bg-white shadow-lg border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-evoya-blue/5 rounded-bl-full"></div>
            
            <UserCog className="w-12 h-12 text-evoya-blue mb-6" />
            <h3 className="text-2xl font-semibold mb-4">{translate('agents_title', language)}</h3>
            <p className="text-gray-600 mb-6">
              {translate('agents_description', language)}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-evoya-blue/10 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-evoya-blue"></div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">{translate('agents_analysis', language)}</h4>
                  <p className="text-gray-600 text-sm">{translate('agents_analysis_desc', language)}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-evoya-blue/10 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-evoya-blue"></div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">{translate('agents_development', language)}</h4>
                  <p className="text-gray-600 text-sm">{translate('agents_development_desc', language)}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-evoya-blue/10 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-evoya-blue"></div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">{translate('agents_integration', language)}</h4>
                  <p className="text-gray-600 text-sm">{translate('agents_integration_desc', language)}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="#contact" className="inline-flex items-center font-medium text-evoya-blue hover:text-evoya-blue/80 transition-colors">
                {translate('learn_more', language)}
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Services;
