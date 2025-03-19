
import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-evoya-navy text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <div className="text-2xl font-serif font-semibold text-white mb-4">
              EVOYA AI
            </div>
            <p className="text-gray-200 text-sm mb-6">
              Moderne KI-Lösungen für Ihr Unternehmen. Einfach, sicher und anpassungsfähig.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">Funktionen</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#features" className="text-white hover:text-evoya-orange transition-colors !important">Textgenerierung</a></li>
              <li><a href="#features" className="text-white hover:text-evoya-orange transition-colors !important">Bildgenerierung</a></li>
              <li><a href="#features" className="text-white hover:text-evoya-orange transition-colors !important">Bilderkennung</a></li>
              <li><a href="#features" className="text-white hover:text-evoya-orange transition-colors !important">Dokumentenanalyse</a></li>
              <li><a href="#features" className="text-white hover:text-evoya-orange transition-colors !important">Live-Informationsabruf</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">© 2025 Evoya AI GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white hover:text-evoya-orange transition-colors !important text-sm">Datenschutz</a>
            <a href="#" className="text-white hover:text-evoya-orange transition-colors !important text-sm">AGB</a>
            <a href="#" className="text-white hover:text-evoya-orange transition-colors !important text-sm">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
