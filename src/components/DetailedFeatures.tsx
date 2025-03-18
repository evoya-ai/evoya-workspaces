import React from 'react';
import { FileText, Image as ImageIcon, Eye, FileSearch, Globe, BarChart, PenTool, Mic, Shield, Lock, Database, ArrowRight, User, Globe2, RefreshCcw } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '../lib/utils';

interface FeatureDetailProps {
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  image: string;
  alt: string;
  isReversed?: boolean;
  accentColor: string;
}

const FeatureDetail: React.FC<FeatureDetailProps> = ({
  title,
  description,
  details,
  icon,
  image,
  alt,
  isReversed = false,
  accentColor,
}) => {
  return (
    <div className={cn(
      "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 border-b border-gray-200 last:border-0",
      isReversed && "lg:flex-row-reverse"
    )}>
      <AnimatedSection 
        className={cn(
          "order-2", 
          isReversed ? "lg:order-2" : "lg:order-1"
        )}
        animation={isReversed ? "fade-up" : "fade-up"}
      >
        <div className="max-w-xl">
          <div className={`inline-flex items-center justify-center rounded-full p-2 ${accentColor} mb-4`}>
            {icon}
          </div>
          <h3 className="text-2xl lg:text-3xl font-semibold mb-4">{title}</h3>
          <p className="text-lg text-gray-600 mb-6">{description}</p>
          <ul className="space-y-3">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-evoya-blue/10 flex items-center justify-center mt-1 mr-3">
                  <div className="w-2 h-2 rounded-full bg-evoya-blue"></div>
                </div>
                <span className="text-gray-700">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>
      
      <AnimatedSection 
        className={cn(
          "order-1 w-full h-full flex items-center justify-center", 
          isReversed ? "lg:order-1" : "lg:order-2"
        )}
        animation={isReversed ? "fade-up" : "fade-up"}
        delay={150}
      >
        <div className="relative w-full h-80 sm:h-96 lg:h-[450px] overflow-hidden rounded-xl shadow-lg">
          <img 
            src={image} 
            alt={alt} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${accentColor.replace("text-", "from-")} to-transparent opacity-20`}></div>
        </div>
      </AnimatedSection>
    </div>
  );
};

const DetailedFeatures: React.FC = () => {
  const features = [
    {
      title: "Textgenerierung",
      description: "Erstellen und bearbeiten Sie Geschäftsdokumente, Berichte und Marketingmaterialien mit KI-Unterstützung.",
      details: [
        "Automatische Erstellung von E-Mails, Briefen und Berichten",
        "KI-gestützte Textoptimierung für verschiedene Zielgruppen",
        "Mehrsprachige Übersetzung und Lokalisierung von Inhalten",
        "Automatische Zusammenfassung langer Dokumente",
      ],
      icon: <FileText className="w-6 h-6 text-white" />,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      alt: "Person arbeitet an einem Text-Dokument",
      isReversed: false,
      accentColor: "text-evoya-blue bg-evoya-blue/10",
    },
    {
      title: "Bildgenerierung",
      description: "Entwickeln Sie visuelle Inhalte für Marketingkampagnen und Präsentationen mit wenigen Klicks.",
      details: [
        "Erstellung von massgeschneiderten Produktvisualisierungen mit DALL-E",
        "Generierung von Konzeptillustrationen mit FLUX für Marketingmaterialien",
        "Anpassung bestehender Bilder an Ihre Markenidentität",
        "Automatische Grössenanpassung für verschiedene Medienkanäle",
      ],
      icon: <ImageIcon className="w-6 h-6 text-white" />,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      alt: "Generierte Bilder auf einem Display",
      isReversed: true,
      accentColor: "text-evoya-green bg-evoya-green/10",
    },
    {
      title: "Bilderkennung und Analyse",
      description: "Automatisieren Sie die Verarbeitung und Analyse visueller Daten für mehr Effizienz.",
      details: [
        "Automatische Kategorisierung von Produktbildern",
        "Erkennung von Objekten und Personen in visuellen Medien",
        "Qualitätskontrolle durch KI-gestützte Bildanalyse",
        "Extraktion von Textinformationen aus Bildern und Dokumenten",
      ],
      icon: <Eye className="w-6 h-6 text-white" />,
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
      alt: "Bilderkennung durch künstliche Intelligenz",
      isReversed: false,
      accentColor: "text-evoya-darkBlue bg-evoya-blue/10",
    },
    {
      title: "Dokumentenanalyse",
      description: "Extrahieren und fassen Sie relevante Informationen aus Geschäftsdokumenten schnell zusammen.",
      details: [
        "Automatische Extraktion von Daten aus Rechnungen und Verträgen",
        "Strukturierung ungeordneter Textinhalte in durchsuchbare Formate",
        "Intelligente Erkennung von Schlüsselinformationen in komplexen Dokumenten",
        "Vergleichsanalyse zwischen verschiedenen Dokumentversionen",
      ],
      icon: <FileSearch className="w-6 h-6 text-white" />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      alt: "Dokumentenanalyse auf einem Laptop",
      isReversed: true,
      accentColor: "text-evoya-orange bg-evoya-orange/10",
    },
    {
      title: "Live-Informationsabruf",
      description: "Greifen Sie in Echtzeit auf aktuelle Marktdaten und Trends zu für fundierte Entscheidungen.",
      details: [
        "Integration von Echtzeit-Marktdaten in Ihre Analysen",
        "Automatisierte Wettbewerbsbeobachtung und Branchentrends",
        "Personalisierte Nachrichtenfeeds zu relevanten Geschäftsthemen",
        "KI-gestützte Vorhersagen basierend auf aktuellen Daten",
      ],
      icon: <Globe className="w-6 h-6 text-white" />,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      alt: "Echtzeitdaten auf einem Dashboard",
      isReversed: false,
      accentColor: "text-evoya-lightBlue bg-evoya-lightBlue/10",
    },
    {
      title: "Diagramme & Visuelle Darstellungen",
      description: "Erstellen Sie automatisiert Diagramme zur Visualisierung von Geschäftsprozessen und Datenanalysen.",
      details: [
        "Automatische Generierung von Diagrammen aus Datenquellen",
        "Interaktive Dashboards für Geschäftsanalysen",
        "Anpassbare Visualisierungen für Präsentationen und Berichte",
        "KI-gestützte Dateninterpretation und Empfehlungen",
      ],
      icon: <BarChart className="w-6 h-6 text-white" />,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      alt: "Datenvusualisierung auf einem Laptop",
      isReversed: true,
      accentColor: "text-evoya-yellow bg-evoya-yellow/10",
    },
    {
      title: "Creator",
      description: "Erweitern Sie die klassische Chat-Interaktion um eine dynamische Bearbeitungsansicht für strukturierte Inhalte.",
      details: [
        "Direkte Bearbeitung und Strukturierung von KI-generierten Inhalten",
        "Interaktive Echtzeit-Zusammenarbeit mit der KI für optimale Ergebnisse",
        "Nahtlose Integration in bestehende Workflows und Dokumentenformate",
        "Flexible Formattierungsoptionen für professionelle Ausgaben",
      ],
      icon: <PenTool className="w-6 h-6 text-white" />,
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f",
      alt: "Kreative Bearbeitung von Inhalten",
      isReversed: false,
      accentColor: "text-evoya-purple bg-evoya-purple/10",
    },
    {
      title: "Voice",
      description: "Verwandeln Sie gesprochene Inhalte direkt in Text für barrierefreie und schnelle Kommunikation.",
      details: [
        "Präzise Echtzeit-Transkription von Sprache zu Text",
        "Unterstützung mehrerer Sprachen für internationale Teams",
        "Automatische Formatierung und Strukturierung von transkribierten Inhalten",
        "Nahtlose Integration mit anderen Evoya-Funktionen für Weiterverarbeitung",
      ],
      icon: <Mic className="w-6 h-6 text-white" />,
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc",
      alt: "Spracherkennung und Transkription",
      isReversed: true,
      accentColor: "text-evoya-red bg-evoya-red/10",
    },
  ];

  return (
    <section id="detailed-features" className="py-16 bg-white">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-evoya-blue/10 text-evoya-blue text-sm font-medium">
            Detaillierte Funktionen
          </div>
          <h2 className="mb-6 max-w-3xl mx-auto">
            Entdecken Sie die umfassenden <span className="text-evoya-blue">Möglichkeiten</span> unserer KI-Workspaces
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unsere intelligenten Werkzeuge unterstützen Sie bei der Effizienzsteigerung in allen Geschäftsbereichen.
            Erfahren Sie mehr über jede einzelne Funktion.
          </p>
        </AnimatedSection>

        <div className="space-y-8">
          {features.map((feature, index) => (
            <FeatureDetail
              key={index}
              title={feature.title}
              description={feature.description}
              details={feature.details}
              icon={feature.icon}
              image={feature.image}
              alt={feature.alt}
              isReversed={feature.isReversed}
              accentColor={feature.accentColor}
            />
          ))}
        </div>

        <AnimatedSection className="mt-24 text-center" animation="fade-up">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-evoya-navy/10 text-evoya-navy text-sm font-medium">
            Privacy Shield
          </div>
          <h3 className="text-2xl lg:text-3xl font-semibold mb-6">Unser Engagement für den Datenschutz</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Das Evoya Privacy Shield gewährleistet umfassenden Schutz Ihrer Daten durch mehrschichtige Sicherheitsmassnahmen
            und strenge Compliance-Standards.
          </p>
          
          <div className="max-w-3xl mx-auto relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-evoya-navy/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-evoya-navy" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center">Schweizer Datenspeicherung</h4>
                <p className="text-gray-600 text-center">
                  Alle Daten werden ausschliesslich in sicheren Rechenzentren in der Schweiz gespeichert und verarbeitet.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-evoya-navy/10 flex items-center justify-center mx-auto mb-4">
                  <Database className="w-6 h-6 text-evoya-navy" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center">DSGVO-Konformität</h4>
                <p className="text-gray-600 text-center">
                  Vollständige Einhaltung der europäischen Datenschutz-Grundverordnung und schweizerischer Datenschutzgesetze.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-evoya-navy/10 flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-6 h-6 text-evoya-navy" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center">Verschlüsselung</h4>
                <p className="text-gray-600 text-center">
                  Modernste End-to-End-Verschlüsselung für alle Daten während der Übertragung und Speicherung.
                </p>
              </div>
            </div>
            
            <div className="absolute -z-10 inset-0 blur-3xl bg-evoya-navy/5 rounded-full transform -translate-y-1/4 scale-150"></div>
          </div>
        </AnimatedSection>

        {/* Privacy Shield Process Visualization */}
        <AnimatedSection className="mt-24" animation="fade-up">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-6">Wie das Privacy Shield funktioniert</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Das Evoya Privacy Shield schützt Ihre sensiblen Daten durch einen mehrstufigen Anonymisierungsprozess, 
                der ausschliesslich in sicheren Schweizer Rechenzentren stattfindet.
              </p>
            </div>

            <div className="relative w-full flex justify-center items-center" style={{ height: "700px" }}>
              {/* Central Privacy Shield Circle */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full shadow-lg border-4 border-gray-100 flex items-center justify-center z-20">
                <div className="text-center">
                  <h4 className="font-bold text-xl text-evoya-navy">Evoya</h4>
                  <h4 className="font-bold text-xl text-evoya-navy">Privacy</h4>
                  <h4 className="font-bold text-xl text-evoya-navy">Shield</h4>
                </div>
              </div>

              {/* Circular Process Flow */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border-[30px] border-t-evoya-navy border-r-evoya-navy border-b-evoya-lightBlue border-l-evoya-lightBlue opacity-75 z-10"></div>

              {/* Step 1: Top Right */}
              <div className="absolute" style={{ top: "50px", right: "20%" }}>
                <div className="bg-white p-4 rounded-lg shadow-lg border border-evoya-navy max-w-xs z-30">
                  <div className="bg-evoya-navy text-white font-semibold py-1 px-3 rounded-full text-xs inline-flex items-center mb-2">
                    <div className="bg-white text-evoya-navy rounded-full w-4 h-4 flex items-center justify-center mr-1">1</div>
                    SCHRITT 1
                  </div>
                  <h5 className="font-semibold mb-1">Vertrauliche Daten werden anonymisiert (Schweiz)</h5>
                  <div className="flex flex-col items-center mt-2 space-y-2">
                    <div className="bg-evoya-navy text-white p-2 rounded text-sm w-full text-center">
                      Max Mustermann
                    </div>
                    <ArrowRight className="text-red-500 transform rotate-90" />
                    <div className="bg-evoya-navy text-white p-2 rounded text-sm w-full text-center">
                      [Vorname 1] [Nachname 1]
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Bottom */}
              <div className="absolute" style={{ bottom: "50px", left: "50%", transform: "translateX(-50%)" }}>
                <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 max-w-xs z-30">
                  <div className="bg-gray-700 text-white font-semibold py-1 px-3 rounded-full text-xs inline-flex items-center mb-2">
                    <div className="bg-white text-gray-700 rounded-full w-4 h-4 flex items-center justify-center mr-1">2</div>
                    SCHRITT 2
                  </div>
                  <h5 className="font-semibold mb-1">Sprachmodell generiert Antwort mit anonymisierten Daten</h5>
                  <div className="flex items-center justify-center mt-2">
                    <Globe2 className="text-gray-700 w-8 h-8" />
                  </div>
                </div>
              </div>

              {/* Step 3: Top Left */}
              <div className="absolute" style={{ top: "50px", left: "20%" }}>
                <div className="bg-white p-4 rounded-lg shadow-lg border border-evoya-lightBlue max-w-xs z-30">
                  <div className="bg-evoya-lightBlue text-white font-semibold py-1 px-3 rounded-full text-xs inline-flex items-center mb-2">
                    <div className="bg-white text-evoya-lightBlue rounded-full w-4 h-4 flex items-center justify-center mr-1">3</div>
                    SCHRITT 3
                  </div>
                  <h5 className="font-semibold mb-1">Anonymisierte Daten werden entanonymisiert (Schweiz)</h5>
                  <div className="flex flex-col items-center mt-2 space-y-2">
                    <div className="bg-evoya-lightBlue text-white p-2 rounded text-sm w-full text-center">
                      [Vorname 1] [Nachname 1]
                    </div>
                    <ArrowRight className="text-green-500 transform rotate-90" />
                    <div className="bg-evoya-lightBlue text-white p-2 rounded text-sm w-full text-center">
                      Max Mustermann
                    </div>
                  </div>
                </div>
              </div>

              {/* Process Arrows/Points */}
              <div className="absolute" style={{ top: "0", left: "50%", transform: "translateX(-50%)" }}>
                <div className="w-6 h-6 bg-evoya-navy rounded-full z-30"></div>
              </div>
              <div className="absolute" style={{ right: "0", top: "50%", transform: "translateY(-50%)" }}>
                <div className="w-6 h-6 bg-evoya-navy rounded-full z-30"></div>
              </div>
              <div className="absolute" style={{ bottom: "0", left: "50%", transform: "translateX(-50%)" }}>
                <div className="w-6 h-6 bg-gray-700 rounded-full z-30"></div>
              </div>
              <div className="absolute" style={{ left: "0", top: "50%", transform: "translateY(-50%)" }}>
                <div className="w-6 h-6 bg-evoya-lightBlue rounded-full z-30"></div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl mt-12 shadow-sm">
              <h4 className="text-xl font-semibold mb-4">Ihre Daten in sicheren Händen</h4>
              <p className="text-gray-600 mb-4">
                Das Privacy Shield von Evoya stellt sicher, dass sensitive Informationen niemals ungeschützt an externe Systeme übermittelt werden. 
                Stattdessen werden sie vor der Verarbeitung durch Sprachmodelle anonymisiert und erst nach der Verarbeitung wieder deanonymisiert. 
                Dieser gesamte Prozess findet ausschliesslich in der Schweiz statt, unter Einhaltung strengster Datenschutzrichtlinien.
              </p>
              <div className="flex items-center mt-4">
                <div className="rounded-full bg-green-100 p-2 mr-3">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-green-600 font-medium">
                  Datenschutz auf höchstem Niveau, ohne Kompromisse bei der Leistungsfähigkeit
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default DetailedFeatures;
