
import React from 'react';
import { ShieldCheck, BadgeDollarSign, Key, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';
import { translate } from '../utils/translations';

const Benefits: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-white to-gray-50 -z-10"></div>
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-evoya-blue/10 text-evoya-blue text-sm font-medium">
            {translate('benefits_badge', language)}
          </div>
          <h2 className="mb-6 max-w-3xl mx-auto">
            {translate('benefits_title', language)} <span className="text-evoya-blue">{translate('benefits_title_colored', language)}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {translate('benefits_description', language)}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <AnimatedSection className="rounded-xl overflow-hidden bg-white shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
            <div className="p-8">
              <div className="w-16 h-16 rounded-full bg-evoya-blue/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-evoya-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-custom-darkGray">{translate('benefits_security_title', language)}</h3>
              <p className="text-gray-600 mb-6">
                {translate('benefits_security_desc', language)}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-evoya-blue/10 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-evoya-blue"></div>
                  </div>
                  <span className="text-gray-700">{translate('benefits_swiss_hosting', language)}</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-evoya-blue/10 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-evoya-blue"></div>
                  </div>
                  <span className="text-gray-700">{translate('benefits_encryption', language)}</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-evoya-blue/10 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-evoya-blue"></div>
                  </div>
                  <span className="text-gray-700">{translate('benefits_gdpr', language)}</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150} className="rounded-xl overflow-hidden bg-white shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
            <div className="p-8">
              <div className="w-16 h-16 rounded-full bg-evoya-orange/10 flex items-center justify-center mb-6">
                <BadgeDollarSign className="w-8 h-8 text-evoya-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-custom-darkGray">{translate('benefits_pricing_title', language)}</h3>
              <p className="text-gray-600 mb-6">
                {translate('benefits_pricing_desc', language)}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-evoya-orange/10 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-evoya-orange"></div>
                  </div>
                  <span className="text-gray-700">{translate('benefits_usage_based', language)}</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-evoya-orange/10 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-evoya-orange"></div>
                  </div>
                  <span className="text-gray-700">{translate('benefits_no_commitment', language)}</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-evoya-orange/10 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-evoya-orange"></div>
                  </div>
                  <span className="text-gray-700">{translate('benefits_scalable', language)}</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300} className="rounded-xl overflow-hidden bg-white shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
            <div className="p-8">
              <div className="w-16 h-16 rounded-full bg-evoya-blue/10 flex items-center justify-center mb-6">
                <Key className="w-8 h-8 text-evoya-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-custom-darkGray">{translate('benefits_models_title', language)}</h3>
              <p className="text-gray-600 mb-6">
                {translate('benefits_models_desc', language)}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-evoya-blue/10 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-evoya-blue"></div>
                  </div>
                  <span className="text-gray-700">{translate('benefits_models_count', language)}</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-evoya-blue/10 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-evoya-blue"></div>
                  </div>
                  <span className="text-gray-700">{translate('benefits_local_hosting', language)}</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-evoya-blue/10 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-evoya-blue"></div>
                  </div>
                  <span className="text-gray-700">{translate('benefits_regular_updates', language)}</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
        
        {/* Updated fourth card with left-aligned icon and text */}
        <AnimatedSection delay={450} className="rounded-xl overflow-hidden bg-white shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
          <div className="p-8">
            <div className="flex flex-col items-start mb-6">
              <div className="w-16 h-16 rounded-full bg-evoya-blue/10 flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-evoya-blue" />
              </div>
              <h3 className="text-xl font-semibold text-custom-darkGray">{translate('benefits_partner_title', language)}</h3>
            </div>
            
            <p className="text-gray-600 mb-6 text-left">
              {translate('benefits_partner_desc', language)}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-evoya-blue/10 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-evoya-blue"></div>
                  </div>
                  <span className="text-gray-700">{translate('benefits_market_knowledge', language)}</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-evoya-blue/10 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-evoya-blue"></div>
                  </div>
                  <span className="text-gray-700">{translate('benefits_ai_expertise', language)}</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-evoya-blue/10 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-evoya-blue"></div>
                  </div>
                  <span className="text-gray-700">{translate('benefits_local_requirements', language)}</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-evoya-blue/10 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-evoya-blue"></div>
                  </div>
                  <span className="text-gray-700">{translate('benefits_personal_support', language)}</span>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Benefits;
