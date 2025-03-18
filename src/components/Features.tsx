
import React from 'react';
import { FileText, Image, Eye, FileSearch, Globe, BarChart } from 'lucide-react';
import FeatureCard from './FeatureCard';
import AnimatedSection from './AnimatedSection';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Textgenerierung',
      description: 'Erstellen und bearbeiten Sie Geschäftsdokumente, Berichte und Marketingmaterialien mit KI-Unterstützung.',
      icon: FileText,
      iconColor: 'text-evoya-blue',
      delay: 0
    },
    {
      title: 'Bildgenerierung',
      description: 'Entwickeln Sie visuelle Inhalte für Marketingkampagnen und Präsentationen mit wenigen Klicks.',
      icon: Image,
      iconColor: 'text-evoya-green',
      delay: 100
    },
    {
      title: 'Bilderkennung und Analyse',
      description: 'Automatisieren Sie die Verarbeitung und Analyse visueller Daten für mehr Effizienz.',
      icon: Eye,
      iconColor: 'text-evoya-darkBlue',
      delay: 200
    },
    {
      title: 'Dokumentenanalyse',
      description: 'Extrahieren und fassen Sie relevante Informationen aus Geschäftsdokumenten schnell zusammen.',
      icon: FileSearch,
      iconColor: 'text-evoya-orange',
      delay: 300
    },
    {
      title: 'Live-Informationsabruf',
      description: 'Greifen Sie in Echtzeit auf aktuelle Marktdaten und Trends zu für fundierte Entscheidungen.',
      icon: Globe,
      iconColor: 'text-evoya-lightBlue',
      delay: 400
    },
    {
      title: 'Diagramme & Visuelle Darstellungen',
      description: 'Erstellen Sie automatisiert Diagramme zur Visualisierung von Geschäftsprozessen und Datenanalysen.',
      icon: BarChart,
      iconColor: 'text-evoya-yellow',
      delay: 500
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-evoya-blue/10 text-evoya-blue text-sm font-medium">
            Funktionen
          </div>
          <h2 className="mb-6 max-w-3xl mx-auto">
            Moderne KI-Tools für Ihren <span className="text-evoya-blue">Geschäftserfolg</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unsere KI-Workspaces bieten eine umfassende Suite von Tools, die Ihre Arbeitsabläufe vereinfachen und Ihre Produktivität steigern.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={feature.delay} className="h-full">
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                iconColor={feature.iconColor}
                className="h-full glass"
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
