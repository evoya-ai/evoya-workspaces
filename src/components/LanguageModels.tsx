
import React from 'react';
import { Bot, Shield, Zap, Brain, Globe, Lightbulb, Scale, Lock } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

interface ModelCardProps {
  name: string;
  description: string;
  strengths: string[];
  icon: React.ReactNode;
  accentColor: string;
  isSwissHosted?: boolean;
}

const ModelCard: React.FC<ModelCardProps> = ({
  name,
  description,
  strengths,
  icon,
  accentColor,
  isSwissHosted = false,
}) => {
  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-100">
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg ${accentColor} transition-all duration-300`}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-xl font-semibold">{name}</h3>
            {isSwissHosted && (
              <span className="inline-flex items-center rounded-full bg-evoya-lightBlue/10 px-2.5 py-1 text-xs font-medium text-evoya-blue">
                <Shield className="w-3 h-3 mr-1" />
                Swiss Hosted
              </span>
            )}
          </div>
          <p className="mt-2 text-gray-600 text-sm">{description}</p>
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Stärken:</h4>
            <ul className="space-y-1">
              {strengths.map((strength, index) => (
                <li key={index} className="flex items-start text-sm text-gray-700">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-evoya-blue/10 flex items-center justify-center mt-0.5 mr-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-evoya-blue"></div>
                  </div>
                  {strength}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const LanguageModels: React.FC = () => {
  const models = [
    {
      name: "ChatGPT-4o",
      description: "OpenAIs neuestes Sprachmodell mit herausragender Allround-Leistung",
      strengths: [
        "Kreatives Schreiben und Content-Erstellung",
        "Präzise Faktenrecherche", 
        "Multimodale Fähigkeiten (Text, Bilder, Audio)"
      ],
      icon: <Brain className="w-5 h-5 text-white" />,
      accentColor: "bg-evoya-blue text-white",
      isSwissHosted: false
    },
    {
      name: "Claude 3 Opus",
      description: "Anthropics fortschrittlichstes Modell mit außergewöhnlicher Genauigkeit",
      strengths: [
        "Komplexe Problemlösung und Analyse",
        "Nuancierte und ausgewogene Antworten", 
        "Verarbeitung umfangreicher Dokumente"
      ],
      icon: <Lightbulb className="w-5 h-5 text-white" />,
      accentColor: "bg-evoya-teal text-white",
      isSwissHosted: false
    },
    {
      name: "SwissLama 3.3",
      description: "In der Schweiz gehostetes leistungsstarkes Open-Source-Modell",
      strengths: [
        "Maximale Datensicherheit nach Schweizer Standards",
        "Schnelle Antwortzeiten durch lokales Hosting", 
        "Sehr gute Mehrsprachigkeit mit Fokus auf Deutsch"
      ],
      icon: <Shield className="w-5 h-5 text-white" />,
      accentColor: "bg-evoya-green text-white",
      isSwissHosted: true
    },
    {
      name: "Mistral Large",
      description: "Effizientes Modell mit ausgezeichnetem Preis-Leistungs-Verhältnis",
      strengths: [
        "Hervorragende Codierungsfähigkeiten",
        "Effiziente Verarbeitung bei komplexen Aufgaben", 
        "Ausgezeichnete mehrsprachige Fähigkeiten"
      ],
      icon: <Zap className="w-5 h-5 text-white" />,
      accentColor: "bg-evoya-orange text-white",
      isSwissHosted: false
    },
    {
      name: "Perplexity Pro",
      description: "Spezialisiert auf Faktenrecherche mit Echtzeitdaten",
      strengths: [
        "Aktuelle Informationen mit Quellenangaben",
        "Internetsuche in Echtzeit für aktuelle Daten", 
        "Präzise Beantwortung faktischer Fragen"
      ],
      icon: <Globe className="w-5 h-5 text-white" />,
      accentColor: "bg-evoya-lightBlue text-white",
      isSwissHosted: false
    },
    {
      name: "Llama 3",
      description: "Open-Source-Modell von Meta mit umfangreichen Anpassungsmöglichkeiten",
      strengths: [
        "Lokal einsetzbar ohne Cloud-Abhängigkeit",
        "Anpassbar für spezifische Unternehmensanforderungen", 
        "Vollständige Kontrolle über Datenschutz"
      ],
      icon: <Lock className="w-5 h-5 text-white" />,
      accentColor: "bg-evoya-yellow text-gray-800",
      isSwissHosted: false
    },
  ];

  return (
    <section id="language-models" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white -z-10"></div>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="order-2 lg:order-1" animation="fade-up">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {models.map((model, index) => (
                <AnimatedSection 
                  key={index} 
                  className={cn(
                    "col-span-1",
                    (index === 2 || index === 3) && "sm:col-span-1"
                  )} 
                  animation="fade-up" 
                  delay={100 * index}
                >
                  <ModelCard
                    name={model.name}
                    description={model.description}
                    strengths={model.strengths}
                    icon={model.icon}
                    accentColor={model.accentColor}
                    isSwissHosted={model.isSwissHosted}
                  />
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="order-1 lg:order-2" animation="fade-up">
            <div className="max-w-xl mx-auto lg:mr-0">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-evoya-blue/10 text-evoya-blue text-sm font-medium">
                KI-Sprachmodelle
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Zugriff auf <span className="text-evoya-blue">führende KI-Modelle</span> für jeden Anwendungsfall
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nicht jedes KI-Modell ist für jede Aufgabe gleich gut geeignet. Unsere Plattform bietet Zugriff auf über 20 führende Modelle für Sprache und Bilder – ohne zusätzliche Abos oder hohe Kosten.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Als Schweizer Unternehmen stellen wir auch KI-Modelle bereit, die in der Schweiz gehostet werden, wie <span className="font-semibold">SwissLama 3.3</span> – für maximale Datensicherheit und Compliance.
              </p>
              <Button className="bg-evoya-blue hover:bg-evoya-navy text-white px-6 py-2.5">
                <Shield className="w-4 h-4 mr-2" />
                Mehr zu unseren Datenschutzstandards
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default LanguageModels;
