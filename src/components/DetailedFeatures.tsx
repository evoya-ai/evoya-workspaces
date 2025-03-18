import React from 'react';
import { FileText, Image as ImageIcon, Eye, FileSearch, Globe, BarChart, PenTool, Mic } from 'lucide-react';
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
        "Erstellung von maßgeschneiderten Produktvisualisierungen mit DALL-E",
        "Generierung von Konzeptillustrationen mit FLUX für Marketingmaterialien",
        "Anpassung bestehender Bilder an Ihre Markenidentität",
        "Automatische Größenanpassung für verschiedene Medienkanäle",
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
      </div>
    </section>
  );
};

export default DetailedFeatures;
