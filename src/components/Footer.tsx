
import React from 'react';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '../contexts/LanguageContext';
import { translate } from '../utils/translations';

const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-[#1A1F2C] text-white">
      <div className="section-container py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="text-2xl font-manrope font-semibold text-white">
              EVOYA AI
            </div>
            <p className="text-gray-300 text-sm">
              {translate('footer_slogan', language)}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/evoya-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-evoya-orange transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-manrope font-semibold text-white text-lg mb-6">
              {translate('footer_contact', language)}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center text-sm text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-evoya-orange" />
                <span>Brunnenstrasse 27, 8610 Uster</span>
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-evoya-orange" />
                <span>+41 44 520 16 48</span>
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-evoya-orange" />
                <span>hello@evoya.ai</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <Separator className="my-10 bg-white/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            {translate('footer_copyright', language)}
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <a 
              href="https://evoya.ai/datenschutz/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-evoya-orange transition-colors text-sm"
            >
              {translate('footer_privacy', language)}
            </a>
            <a 
              href="https://evoya.ai/agb/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-evoya-orange transition-colors text-sm"
            >
              {translate('footer_terms', language)}
            </a>
            <a 
              href="https://evoya.ai/impressum/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-evoya-orange transition-colors text-sm"
            >
              {translate('footer_imprint', language)}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
