
import React from 'react';
import { MessageSquare, Mail, Phone, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const CallToAction: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection animation="fade-up" className="lg:pr-12">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-evoya-green/10 text-evoya-green text-sm font-medium">
              Kontakt
            </div>
            <h2 className="mb-6">
              Starten Sie Ihren Weg zur <span className="text-evoya-green">KI-Innovation</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Vereinbaren Sie eine kostenlose Demo oder ein Beratungsgespräch. Unser Team hilft Ihnen dabei, 
              die ideale KI-Lösung für Ihr Unternehmen zu finden.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-evoya-blue/10 flex items-center justify-center mr-5 flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-evoya-blue" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Chat Support</h3>
                  <p className="text-gray-600">Sofortige Hilfe über unseren Live-Chat</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-evoya-green/10 flex items-center justify-center mr-5 flex-shrink-0">
                  <Mail className="w-5 h-5 text-evoya-green" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@evoya.ch</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-evoya-orange/10 flex items-center justify-center mr-5 flex-shrink-0">
                  <Phone className="w-5 h-5 text-evoya-orange" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Telefon</h3>
                  <p className="text-gray-600">+41 123 456 789</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <a href="#demo" className="btn-primary">
                Demo vereinbaren
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#test" className="btn-secondary">
                Workspace testen
              </a>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={150} className="rounded-xl overflow-hidden">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6">Kontaktieren Sie uns</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      Vorname
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-evoya-blue/30 focus:border-evoya-blue transition-colors"
                      placeholder="Ihr Vorname"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Nachname
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-evoya-blue/30 focus:border-evoya-blue transition-colors"
                      placeholder="Ihr Nachname"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-evoya-blue/30 focus:border-evoya-blue transition-colors"
                    placeholder="Ihre E-Mail-Adresse"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-evoya-blue/30 focus:border-evoya-blue transition-colors"
                    placeholder="Ihr Unternehmen"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-evoya-blue/30 focus:border-evoya-blue transition-colors"
                    placeholder="Ihre Nachricht oder Anfrage"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full btn-primary justify-center py-3"
                  >
                    Nachricht senden
                  </button>
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
