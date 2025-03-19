
import React from 'react';
import { FileText, Image, Eye, FileSearch, Globe, BarChart } from 'lucide-react';
import FeatureCard from './FeatureCard';
import AnimatedSection from './AnimatedSection';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Textgenerierung',
      description: 'Erstellen, optimieren und übersetzen Sie Texte mit KI – von Geschäftsberichten bis hin zu kreativen Inhalten.',
      icon: FileText,
      iconColor: 'text-evoya-blue',
      delay: 0
    },
    {
      title: 'Bildgenerierung',
      description: 'Erzeugen Sie hochwertige Bilder für Marketing, Präsentationen und Dokumente mit DALL·E und Flux.',
      icon: Image,
      iconColor: 'text-evoya-blue',
      delay: 100
    },
    {
      title: 'Bilderkennung & Analyse',
      description: 'Extrahieren und analysieren Sie Informationen aus Bildern – von OCR für Dokumente bis zur Erkennung von Objekten.',
      icon: Eye,
      iconColor: 'text-evoya-blue',
      delay: 200
    },
    {
      title: 'Dokumentenanalyse',
      description: 'Durchsuchen und strukturieren Sie grosse Dokumentenmengen in Sekunden – inklusive Datenextraktion und Zusammenfassung.',
      icon: FileSearch,
      iconColor: 'text-evoya-blue',
      delay: 300
    },
    {
      title: 'Live-Informationsabruf',
      description: 'Recherchieren Sie in Echtzeit im Internet und erhalten Sie direkt aufbereitete, mit Quellenangaben versehene Ergebnisse.',
      icon: Globe,
      iconColor: 'text-evoya-blue',
      delay: 400
    },
    {
      title: 'Diagramme & Visuelle Darstellungen',
      description: 'Erstellen Sie interaktive Diagramme zur Visualisierung von Prozessen, Abläufen und Konzepten.',
      icon: BarChart,
      iconColor: 'text-evoya-blue',
      delay: 500
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100">
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
                className="h-full bg-white border border-gray-100 shadow-sm"
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
