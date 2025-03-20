
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';
import SuccessMessage from './contact/SuccessMessage';

const CallToAction: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { language } = useLanguage();

  const handleSuccess = () => {
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection animation="fade-up" className="lg:pr-12">
            <ContactInfo />
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={150} className="rounded-xl overflow-hidden">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6">{language === 'de' ? 'Kontaktieren Sie uns' : 'Contact Us'}</h3>
              
              {isSuccess ? (
                <SuccessMessage onReset={handleReset} />
              ) : (
                <ContactForm onSuccess={handleSuccess} />
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
