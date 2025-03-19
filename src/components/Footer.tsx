
import React from 'react';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-evoya-navy text-white">
      <div className="section-container py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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

          {/* Features Column */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-6">Funktionen</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#features" className="text-gray-300 hover:text-evoya-orange transition-colors">Textgenerierung</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-evoya-orange transition-colors">Bildgenerierung</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-evoya-orange transition-colors">Bilderkennung</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-evoya-orange transition-colors">Dokumentenanalyse</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-evoya-orange transition-colors">Live-Informationsabruf</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-sm text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-evoya-orange" />
                <span>Musterstraße 123, 10115 Berlin</span>
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-evoya-orange" />
                <span>+49 (0) 30 1234567</span>
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-evoya-orange" />
                <span>info@evoya-ai.de</span>
              </li>
            </ul>
            <div className="mt-6">
              <Button 
                variant="outline"
                size="sm"
                className="text-white border-evoya-orange hover:bg-evoya-orange hover:text-white"
              >
                Kontakt aufnehmen
              </Button>
            </div>
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
