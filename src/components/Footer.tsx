
import React from 'react';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer: React.FC = () => {
  return (
    <footer className="bg-evoya-navy text-white">
      <div className="section-container py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="text-2xl font-serif font-semibold text-white">
              EVOYA AI
            </div>
            <p className="text-gray-300 text-sm">
              Moderne KI-Lösungen für Ihr Unternehmen. Einfach, sicher und anpassungsfähig.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
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
            <h3 className="font-semibold text-white text-lg mb-6">Kontakt</h3>
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
            © 2025 Evoya AI GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <a href="/datenschutz" className="text-gray-400 hover:text-evoya-orange transition-colors text-sm">Datenschutz</a>
            <a href="/agb" className="text-gray-400 hover:text-evoya-orange transition-colors text-sm">AGB</a>
            <a href="/impressum" className="text-gray-400 hover:text-evoya-orange transition-colors text-sm">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
