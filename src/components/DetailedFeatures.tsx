import React from 'react';
import { FileText, Image as ImageIcon, Eye, FileSearch, Globe, BarChart, PenTool, Mic, Shield, Lock, Database, ArrowRight, User, Globe2, RefreshCcw, Book, Layers, Network, Brain, Search } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '../lib/utils';
import { Separator } from './ui/separator';

interface FeatureDetailProps {
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  image: string;
  alt: string;
  isReversed?: boolean;
  accentColor: string;
  customContent?: React.ReactNode;
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
  customContent,
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
        {customContent ? (
          customContent
        ) : (
          <div className="relative w-full h-80 sm:h-96 lg:h-[450px] overflow-hidden rounded-xl shadow-lg">
            <img 
              src={image} 
              alt={alt} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${accentColor.replace("text-", "from-")} to-transparent opacity-20`}></div>
          </div>
        )}
      </AnimatedSection>
    </div>
  );
};

const DetailedFeatures: React.FC = () => {
  const creatorImageInterface = (
    <div className="relative w-full h-[450px] overflow-hidden rounded-xl shadow-xl bg-[#1A1E35]">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img 
          src="/lovable-uploads/4dbd1465-6af1-438c-ac70-394abf43e9ca.png"
          alt="Evoya Creator Interface showing a text editor with formatting controls"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );

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
      accentColor: "text-evoya-blue bg-evoya-blue/10",
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
      accentColor: "text-evoya-blue bg-evoya-blue/10",
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
      accentColor: "text-evoya-blue bg-evoya-blue/10",
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
      accentColor: "text-evoya-blue bg-evoya-blue/10",
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
      accentColor: "text-evoya-blue bg-evoya-blue/10",
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
      customContent: creatorImageInterface,
      image: "", // Not used when customContent is provided
      alt: "Kreative Bearbeitung von Inhalten",
      isReversed: false,
      accentColor: "text-evoya-blue bg-evoya-blue/10",
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
      accentColor: "text-evoya-blue bg-evoya-blue/10",
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
              customContent={feature.customContent}
            />
          ))}
        </div>

        <AnimatedSection className="mt-24 mb-24" animation="fade-up">
          <div className="mb-16 text-center">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-evoya-lightBlue/10 text-evoya-lightBlue text-sm font-medium">
              Intelligente Informationsverarbeitung
            </div>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-6">Semantische Wissensbasis</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
              Semantische Verarbeitung verschiedener Dokumentformate und Webinhalte für präzise, 
              kontextbasierte Informationsextraktion und -verknüpfung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col">
              <div className="relative h-[450px] overflow-hidden rounded-xl shadow-lg mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-evoya-lightBlue/5 to-evoya-navy/10 z-0"></div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full shadow-xl border-4 border-evoya-lightBlue/30 flex items-center justify-center z-20">
                  <div className="text-center p-2">
                    <Brain className="w-12 h-12 text-evoya-navy mx-auto mb-2" />
                    <span className="block text-sm font-semibold text-evoya-navy">Semantische Analyse</span>
                  </div>
                </div>
                
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 450" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="#5B6CAD" strokeWidth="1.5" strokeDasharray="5,3" opacity="0.6">
                    <line x1="200" y1="225" x2="70" y2="80" />
                    <line x1="200" y1="225" x2="330" y2="80" />
                    <line x1="200" y1="225" x2="70" y2="370" />
                    <line x1="200" y1="225" x2="330" y2="370" />
                  </g>
                </svg>
                
                <div className="absolute top-[10%] left-[17.5%] w-24 h-24 bg-white rounded-lg shadow-lg p-3 z-10 animate-float" style={{ animationDelay: '0s' }}>
                  <Book className="w-8 h-8 text-evoya-orange mx-auto mb-1" />
                  <span className="block text-xs font-medium text-center">Dokumente</span>
                </div>
                
                <div className="absolute top-[10%] right-[17.5%] w-24 h-24 bg-white rounded-lg shadow-lg p-3 z-10 animate-float" style={{ animationDelay: '1.5s' }}>
                  <Globe className="w-8 h-8 text-evoya-orange mx-auto mb-1" />
                  <span className="block text-xs font-medium text-center">Webinhalte</span>
                </div>
                
                <div className="absolute bottom-[10%] left-[17.5%] w-24 h-24 bg-white rounded-lg shadow-lg p-3 z-10 animate-float" style={{ animationDelay: '6s' }}>
                  <Search className="w-8 h-8 text-evoya-orange mx-auto mb-1" />
                  <span className="block text-xs font-medium text-center">Präzise Suche</span>
                </div>
                
                <div className="absolute bottom-[10%] right-[17.5%] w-24 h-24 bg-white rounded-lg shadow-lg p-3 z-10 animate-float" style={{ animationDelay: '7.5s' }}>
                  <Network className="w-8 h-8 text-evoya-orange mx-auto mb-1" />
                  <span className="block text-xs font-medium text-center">API</span>
                </div>
              </div>
              
              <div className="p-5 bg-gradient-to-r from-evoya-lightBlue/5 to-transparent rounded-lg border border-evoya-lightBlue/20 shadow-sm">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-evoya-orange/20 flex items-center justify-center mr-4">
                    <Brain className="w-6 h-6 text-evoya-orange" />
                  </div>
                  <p className="text-evoya-navy font-medium">
                    Steigern Sie die Effizienz Ihrer Teams um bis zu 30% durch präzise Informationsextraktion.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="max-w-xl">
              <h4 className="text-xl font-semibold mb-6 text-evoya-navy">Intelligente Verarbeitung von Unternehmenswissen</h4>
              <p className="text-gray-600 mb-8">
                Unsere semantische Wissensbasis transformiert unstrukturierte Daten in vernetzte, 
                kontextreiche Informationen - die Grundlage für präzise KI-Anwendungen und 
                datengesteuerte Entscheidungen in Ihrem Unternehmen.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-evoya-orange/10 flex items-center justify-center mt-1 mr-4">
                    <Book className="w-5 h-5 text-evoya-orange" />
                  </div>
                  <div>
                    <h5 className="text-lg font-medium mb-2 text-evoya-navy">Multiformat-Verarbeitung</h5>
                    <p className="text-gray-600">
                      Automatische Extraktion von Wissen aus PDFs, Word-Dokumenten, 
                      Präsentationen, APIs und Webseiten in eine einheitliche Wissensbasis.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-evoya-orange/10 flex items-center justify-center mt-1 mr-4">
                    <Network className="w-5 h-5 text-evoya-orange" />
                  </div>
                  <div>
                    <h5 className="text-lg font-medium mb-2 text-evoya-navy">Kontextbasierte Verknüpfung</h5>
                    <p className="text-gray-600">
                      Automatische Erkennung von Beziehungen zwischen Konzepten, Personen und 
                      Ereignissen für ein tiefgreifendes Verständnis Ihrer Geschäftsdaten.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-evoya-orange/10 flex items-center justify-center mt-1 mr-4">
                    <Search className="w-5 h-5 text-evoya-orange" />
                  </div>
                  <div>
                    <h5 className="text-lg font-medium mb-2 text-evoya-navy">Präzise Informationsgewinnung</h5>
                    <p className="text-gray-600">
                      Natürlichsprachliche Abfragen liefern kontextrelevante Antworten statt 
                      einfacher Keyword-Suchen, basierend auf dem tatsächlichen Bedeutungsgehalt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <Separator className="max-w-5xl mx-auto my-12 bg-gray-200" />

        <AnimatedSection className="mt-32 text-center" animation="fade-up">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-evoya-navy/10 text-evoya-navy text-sm font-medium">
            Datenschutz
          </div>
          
          <div className="max-w-3xl mx-auto relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-evoya-navy/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-evoya-navy" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center">Datenspeicherung</h4>
                <p className="text-gray-600 text-center">
                  Die Daten werden in sicheren Rechenzentren in der Schweiz gespeichert.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-evoya-navy/10 flex items-center justify-center mx-auto mb-4">
                  <Database className="w-6 h-6 text-evoya-navy" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center">DSGVO-Konformität</h4>
                <p className="text-gray-600 text-center">
                  Vollständige Einhaltung der Europäischen Datenschutz-Grundverordnung und der Schweizer Datenschutzgesetze.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-evoya-navy/10 flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-6 h-6 text-evoya-navy" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center">Verschlüsselung</h4>
                <p className="text-gray-600 text-center">
                  Modernste End-to-End-Verschlüsselung für alle Daten während der Übertragung. Sichere Speicherung nach Industriestandards.
                </p>
              </div>
            </div>
            
            <div className="absolute -z-10 inset-0 blur-3xl bg-evoya-navy/5 rounded-full transform -translate-y-1/4 scale-150"></div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-28" animation="fade-up">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-6">Privacy Shield</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Das Evoya Privacy Shield schützt Ihre sensiblen Daten durch einen mehrstufigen Anonymisierungsprozess, 
                der ausschliesslich in sicheren Schweizer Rechenzentren stattfindet.
              </p>
            </div>

            <div className="text-center mb-10">
              <h4 className="text-xl font-medium text-evoya-navy mb-4">So funktioniert es</h4>
            </div>

            <div className="w-full mx-auto mt-6 pb-16">
              <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 relative">
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-2 z-0">
                  <div className="w-full h-full flex items-center">
                    <div className="h-2 bg-gray-300 w-full"></div>
                  </div>
                </div>
                
                <div className="hidden lg:flex absolute left-[calc(33%-30px)] top-1/2 transform -translate-y-1/2 z-30">
                  <div className="bg-gray-300 w-14 h-14 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-gray-600" />
                  </div>
                </div>
                
                <div className="hidden lg:flex absolute right-[calc(33%-30px)] top-1/2 transform -translate-y-1/2 z-30">
                  <div className="bg-gray-300 w-14 h-14 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-gray-600" />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 lg:p-8 flex-1 z-20">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center bg-evoya-navy text-white rounded-full py-1 px-3 text-sm font-medium">
                        <div className="bg-white text-evoya-navy rounded-full w-6 h-6 flex items-center justify-center mr-2 font-bold">1</div>
                        SCHRITT 1
                      </div>
                      <h5 className="text-lg font-semibold mt-3 mb-4">Vertrauliche Daten werden anonymisiert (Schweiz)</h5>
                    </div>
                    
                    <div className="space-y-4 flex-grow">
                      <div className="bg-evoya-navy text-white p-4 rounded text-center font-medium">
                        Max Mustermann
                      </div>
                      
                      <div className="flex justify-center">
                        <div className="p-1 rounded-full bg-red-100">
                          <ArrowRight className="w-6 h-6 text-red-500 transform rotate-90" />
                        </div>
                      </div>
                      
                      <div className="bg-evoya-navy text-white p-4 rounded text-center font-medium">
                        [Name 1]
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-center">
                      <div className="w-12 h-12 rounded-full bg-evoya-navy flex items-center justify-center shadow-md">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex lg:hidden justify-center">
                  <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-gray-600 transform rotate-90 lg:rotate-0" />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 lg:p-8 flex-1 z-20">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center bg-gray-700 text-white rounded-full py-1 px-3 text-sm font-medium">
                        <div className="bg-white text-gray-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 font-bold">2</div>
                        SCHRITT 2
                      </div>
                      <h5 className="text-lg font-semibold mt-3 mb-4">Sprachmodell generiert Antwort mit anonymisierten Daten</h5>
                    </div>
                    
                    <div className="flex flex-col items-center justify-center flex-grow">
                      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <Globe2 className="w-16 h-16 text-gray-700" />
                      </div>
                      
                      <p className="text-center text-gray-600">
                        Verarbeitung anonymisierter Daten<br />durch externe KI
                      </p>
                    </div>
                    
                    <div className="mt-6 flex justify-center">
                      <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center shadow-md">
                        <Globe2 className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex lg:hidden justify-center">
                  <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-gray-600 transform rotate-90 lg:rotate-0" />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 lg:p-8 flex-1 z-20">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center bg-evoya-lightBlue text-white rounded-full py-1 px-3 text-sm font-medium">
                        <div className="bg-white text-evoya-lightBlue rounded-full w-6 h-6 flex items-center justify-center mr-2 font-bold">3</div>
                        SCHRITT 3
                      </div>
                      <h5 className="text-lg font-semibold mt-3 mb-4">Anonymisierte Daten werden deanonymisiert (Schweiz)</h5>
                    </div>
                    
                    <div className="space-y-4 flex-grow">
                      <div className="bg-evoya-lightBlue text-white p-4 rounded text-center font-medium">
                        Max Mustermann
                      </div>
                      
                      <div className="flex justify-center">
                        <div className="p-1 rounded-full bg-green-100">
                          <ArrowRight className="w-6 h-6 text-green-500 transform -rotate-90" />
                        </div>
                      </div>
                      
                      <div className="bg-evoya-lightBlue text-white p-4 rounded text-center font-medium">
                        [Name 1]
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-center">
                      <div className="w-12 h-12 rounded-full bg-evoya-lightBlue flex items-center justify-center shadow-md">
                        <RefreshCcw className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl mt-6 shadow-sm">
              <h4 className="text-xl font-semibold mb-4">Ihre Daten in sicheren Händen</h4>
              <p className="text-gray-600 mb-4">
                Das Evoya Privacy Shield stellt sicher, dass sensitive Informationen niemals ungeschützt an externe Systeme übermittelt werden. 
                Stattdessen werden sie vor der Verarbeitung durch Sprachmodelle anonymisiert und erst nach der Verarbeitung wieder deanonymisiert. 
                Dieser gesamte Prozess findet ausschliesslich in der Schweiz statt.
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
