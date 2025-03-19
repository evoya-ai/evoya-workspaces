
import React from 'react';
import { ShieldCheck, BadgeDollarSign, Key, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-white to-gray-50 -z-10"></div>
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-evoya-blue/10 text-evoya-blue text-sm font-medium">
            Vorteile
          </div>
          <h2 className="mb-6 max-w-3xl mx-auto">
            Warum Unternehmen auf <span className="text-evoya-blue">Evoya AI</span> setzen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unsere KI-Workspaces bieten entscheidende Vorteile für KMUs, die Innovation und Sicherheit gleichermassen schätzen.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <AnimatedSection className="rounded-xl overflow-hidden bg-white shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
            <div className="p-8">
              <div className="w-16 h-16 rounded-full bg-evoya-blue/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-evoya-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-custom-darkGray">Datenschutz & Sicherheit</h3>
              <p className="text-gray-600 mb-6">
                Alle Daten werden in der Schweiz mit höchsten Sicherheitsstandards gespeichert und verarbeitet, wodurch die Vertraulichkeit Ihrer Unternehmensdaten garantiert wird.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-evoya-blue/10 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-evoya-blue"></div>
                  </div>
                  <span className="text-gray-700">Schweizer Hosting</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-evoya-blue/10 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-evoya-blue"></div>
                  </div>
                  <span className="text-gray-700">Ende-zu-Ende-Verschlüsselung</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-evoya-blue/10 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-evoya-blue"></div>
                  </div>
                  <span className="text-gray-700">DSGVO-konform</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150} className="rounded-xl overflow-hidden bg-white shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
            <div className="p-8">
              <div className="w-16 h-16 rounded-full bg-evoya-orange/10 flex items-center justify-center mb-6">
                <BadgeDollarSign className="w-8 h-8 text-evoya-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-custom-darkGray">Flexibles Preismodell</h3>
              <p className="text-gray-600 mb-6">
                Keine festen Lizenzgebühren pro Benutzer, sondern ein nutzungsbasiertes Modell, das sich den Bedürfnissen Ihres Unternehmens anpasst und wächst.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-evoya-orange/10 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-evoya-orange"></div>
                  </div>
                  <span className="text-gray-700">Nutzungsbasierte Abrechnung</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-evoya-orange/10 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-evoya-orange"></div>
                  </div>
                  <span className="text-gray-700">Keine Mindestlaufzeit</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-evoya-orange/10 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-evoya-orange"></div>
                  </div>
                  <span className="text-gray-700">Skalierbare Ressourcen</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300} className="rounded-xl overflow-hidden bg-white shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
            <div className="p-8">
              <div className="w-16 h-16 rounded-full bg-evoya-blue/10 flex items-center justify-center mb-6">
                <Key className="w-8 h-8 text-evoya-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-custom-darkGray">Führende KI-Modelle</h3>
              <p className="text-gray-600 mb-6">
                Zugriff auf über 20 führende Sprach- und Bildmodelle, darunter auch lokal gehostete Optionen wie SwissLama 3.3 für optimale Performance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-evoya-blue/10 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-evoya-blue"></div>
                  </div>
                  <span className="text-gray-700">Über 20 KI-Modelle</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-evoya-blue/10 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-evoya-blue"></div>
                  </div>
                  <span className="text-gray-700">Lokal gehostete Optionen</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-evoya-blue/10 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-evoya-blue"></div>
                  </div>
                  <span className="text-gray-700">Regelmässige Updates</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
        
        {/* New fourth card that spans the entire width */}
        <AnimatedSection delay={450} className="rounded-xl overflow-hidden bg-white shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
          <div className="p-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-evoya-blue/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-8 h-8 text-evoya-blue" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3 text-custom-darkGray">Lokaler Partner mit Schweizer Expertise</h3>
                <p className="text-gray-600 mb-4">
                  Als Schweizer Unternehmen kennen wir die lokalen Marktanforderungen und regulatorischen Besonderheiten. Wir verstehen die spezifischen Bedürfnisse von Schweizer KMUs und bieten massgeschneiderte KI-Lösungen, die regionalen Gegebenheiten optimal Rechnung tragen.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-evoya-blue/10 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-evoya-blue"></div>
                      </div>
                      <span className="text-gray-700">Umfassende Marktkenntnis</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-evoya-blue/10 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-evoya-blue"></div>
                      </div>
                      <span className="text-gray-700">Mehrsprachiger Support</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-evoya-blue/10 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-evoya-blue"></div>
                      </div>
                      <span className="text-gray-700">Verständnis lokaler Anforderungen</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-evoya-blue/10 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-evoya-blue"></div>
                      </div>
                      <span className="text-gray-700">Persönliche Betreuung</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Benefits;
