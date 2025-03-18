
import React from 'react';
import { Shield, Bot } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { cn } from '../lib/utils';

interface ModelCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  isSwissHosted?: boolean;
}

const ModelCard: React.FC<ModelCardProps> = ({
  name,
  description,
  icon,
  accentColor,
  isSwissHosted = false,
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group border-0">
      <div className={`h-2 w-full ${accentColor}`} />
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-full ${accentColor} transition-all duration-300`}>
            {icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-2 mb-2">
              <h3 className="text-xl font-semibold">{name}</h3>
              {isSwissHosted && (
                <span className="inline-flex items-center rounded-full bg-evoya-green/10 px-2.5 py-1 text-xs font-medium text-evoya-green">
                  <Shield className="w-3 h-3 mr-1" />
                  Swiss Hosted
                </span>
              )}
            </div>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const LanguageModels: React.FC = () => {
  const models = [
    {
      name: "ChatGPT-4o",
      description: "OpenAIs neuestes Sprachmodell mit herausragender Allround-Leistung",
      icon: <Bot className="w-5 h-5 text-white" />,
      accentColor: "bg-evoya-blue text-white",
      isSwissHosted: false
    },
    {
      name: "Claude 3 Opus",
      description: "Anthropics fortschrittlichstes Modell mit außergewöhnlicher Genauigkeit",
      icon: <Bot className="w-5 h-5 text-white" />,
      accentColor: "bg-evoya-teal text-white",
      isSwissHosted: false
    },
    {
      name: "SwissLama 3.3",
      description: "In der Schweiz gehostetes leistungsstarkes Open-Source-Modell",
      icon: <Bot className="w-5 h-5 text-white" />,
      accentColor: "bg-evoya-green text-white",
      isSwissHosted: true
    },
    {
      name: "Mistral Large",
      description: "Effizientes Modell mit ausgezeichnetem Preis-Leistungs-Verhältnis",
      icon: <Bot className="w-5 h-5 text-white" />,
      accentColor: "bg-evoya-orange text-white",
      isSwissHosted: false
    },
    {
      name: "Perplexity Pro",
      description: "Spezialisiert auf Faktenrecherche mit Echtzeitdaten",
      icon: <Bot className="w-5 h-5 text-white" />,
      accentColor: "bg-evoya-lightBlue text-white",
      isSwissHosted: false
    },
    {
      name: "Llama 3",
      description: "Open-Source-Modell von Meta mit umfangreichen Anpassungsmöglichkeiten",
      icon: <Bot className="w-5 h-5 text-white" />,
      accentColor: "bg-evoya-yellow text-gray-800",
      isSwissHosted: false
    },
  ];

  return (
    <section id="language-models" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white -z-10"></div>
      <div className="section-container">
        <AnimatedSection className="text-center mb-12" animation="fade-up">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-evoya-blue/10 text-evoya-blue text-sm font-medium">
            KI-Sprachmodelle
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 max-w-3xl mx-auto">
            Zugriff auf <span className="text-evoya-blue">führende KI-Modelle</span> für jeden Anwendungsfall
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Unsere Plattform bietet Zugriff auf über 20 führende Modelle für Sprache und Bilder – 
            ohne zusätzliche Abos oder hohe Kosten. Als Schweizer Unternehmen stellen wir auch 
            KI-Modelle bereit, die in der Schweiz gehostet werden.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model, index) => (
            <AnimatedSection 
              key={index} 
              animation="fade-up" 
              delay={100 * index}
            >
              <ModelCard
                name={model.name}
                description={model.description}
                icon={model.icon}
                accentColor={model.accentColor}
                isSwissHosted={model.isSwissHosted}
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12 text-center" animation="fade-up">
          <Button className="bg-evoya-blue hover:bg-evoya-navy text-white px-6 py-2.5">
            <Shield className="w-4 h-4 mr-2" />
            Mehr zu unseren Datenschutzstandards
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LanguageModels;
