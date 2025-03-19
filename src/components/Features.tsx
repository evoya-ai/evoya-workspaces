
import React from 'react';
import { FileText, Image, Eye, FileSearch, Globe, BarChart } from 'lucide-react';
import FeatureCard from './FeatureCard';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';
import { translate } from '../utils/translations';

const Features: React.FC = () => {
  const { language } = useLanguage();

  const features = [
    {
      titleKey: 'feature_text_generation',
      descriptionKey: 'feature_text_generation_desc',
      icon: FileText,
      iconColor: 'text-evoya-blue',
      delay: 0
    },
    {
      titleKey: 'feature_image_generation',
      descriptionKey: 'feature_image_generation_desc',
      icon: Image,
      iconColor: 'text-evoya-blue',
      delay: 100
    },
    {
      titleKey: 'feature_image_recognition',
      descriptionKey: 'feature_image_recognition_desc',
      icon: Eye,
      iconColor: 'text-evoya-blue',
      delay: 200
    },
    {
      titleKey: 'feature_document_analysis',
      descriptionKey: 'feature_document_analysis_desc',
      icon: FileSearch,
      iconColor: 'text-evoya-blue',
      delay: 300
    },
    {
      titleKey: 'feature_live_search',
      descriptionKey: 'feature_live_search_desc',
      icon: Globe,
      iconColor: 'text-evoya-blue',
      delay: 400
    },
    {
      titleKey: 'feature_diagrams',
      descriptionKey: 'feature_diagrams_desc',
      icon: BarChart,
      iconColor: 'text-evoya-blue',
      delay: 500
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-evoya-blue/10 text-evoya-blue text-sm font-medium">
            {translate('features_badge', language)}
          </div>
          <h2 className="mb-6 max-w-3xl mx-auto">
            {translate('features_title', language)} <span className="text-evoya-blue">{translate('features_title_colored', language)}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {translate('features_description', language)}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={feature.delay} className="h-full">
              <FeatureCard
                title={translate(feature.titleKey, language)}
                description={translate(feature.descriptionKey, language)}
                icon={feature.icon}
                iconColor={feature.iconColor}
                className="h-full bg-white border border-gray-100 shadow-sm"
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
