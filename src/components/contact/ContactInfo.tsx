
import React from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translate } from '../../utils/translations';

const ContactInfo: React.FC = () => {
  const { language } = useLanguage();

  return (
    <>
      <div className="inline-block mb-4 px-3 py-1 rounded-full bg-evoya-blue/10 text-evoya-blue text-sm font-medium">
        {translate('contact_badge', language)}
      </div>
      <h2 className="mb-6">
        {translate('contact_title', language)} <span className="text-evoya-blue">{translate('contact_title_colored', language)}</span>
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        {translate('contact_description', language)}
      </p>
      
      <div className="space-y-6 mb-10">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-evoya-orange/10 flex items-center justify-center mr-5 flex-shrink-0">
            <Mail className="w-5 h-5 text-evoya-orange" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">{translate('contact_email', language)}</h3>
            <p className="text-gray-600">hello@evoya.ai</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-evoya-orange/10 flex items-center justify-center mr-5 flex-shrink-0">
            <Phone className="w-5 h-5 text-evoya-orange" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">{translate('contact_phone', language)}</h3>
            <p className="text-gray-600">+41 44 520 16 48</p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
        <a 
          href="https://tidycal.com/evoya/erstgespraech" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary"
        >
          {translate('contact_schedule_demo', language)}
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
        <a 
          href="https://avaia.io/accounts/signup/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-secondary"
        >
          {translate('contact_test_workspace', language)}
        </a>
      </div>
    </>
  );
};

export default ContactInfo;
