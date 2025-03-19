
import React from 'react';
import { Shield, Bot } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Card, CardContent } from './ui/card';
import { cn } from '../lib/utils';

interface ModelCardProps {
  provider: string;
  description: string;
  isSwissHosted?: boolean;
}

const ModelCard: React.FC<ModelCardProps> = ({
  provider,
  description,
  isSwissHosted = false,
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group border border-gray-100 h-full">
      <div className="h-2 w-full bg-evoya-orange" />
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-evoya-orange transition-all duration-300 shadow-sm flex items-center justify-center">
            {/* Logo placeholder - will be replaced with actual provider logos later */}
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-2 mb-2">
              <h3 className="text-xl font-semibold">{provider}</h3>
              {isSwissHosted && (
                <span className="inline-flex items-center rounded-full bg-evoya-blue/10 px-2.5 py-1 text-xs font-medium text-evoya-blue">
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
  const providers = [
    {
      provider: "OpenAI",
      description: "Anbieter leistungsstarker KI-Sprachmodelle mit breitem Anwendungsspektrum",
      isSwissHosted: false
    },
    {
      provider: "Anthropic",
      description: "Fokus auf sichere, zuverlässige und kontrollierbare KI-Systeme",
      isSwissHosted: false
    },
    {
      provider: "Mistral AI",
      description: "Europäischer Anbieter effizienter KI-Modelle mit ausgezeichnetem Preis-Leistungs-Verhältnis",
      isSwissHosted: false
    },
    {
      provider: "Meta",
      description: "Open-Source-Modelle mit umfangreichen Anpassungsmöglichkeiten",
      isSwissHosted: false
    },
    {
      provider: "DeepSeek",
      description: "Spezialisiert auf fortschrittliche Forschung und technologische Innovation",
      isSwissHosted: false
    },
    {
      provider: "Google",
      description: "Führende KI-Technologien mit tiefer Integration in Web- und Cloud-Dienste",
      isSwissHosted: false
    },
    {
      provider: "Nvidia",
      description: "Hardware-optimierte KI-Lösungen mit Fokus auf Leistung und Skalierbarkeit",
      isSwissHosted: false
    },
    {
      provider: "Microsoft",
      description: "Enterprise-orientierte KI-Dienste mit nahtloser Integration in Geschäftsanwendungen",
      isSwissHosted: false
    },
  ];

  return (
    <section id="language-models" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100 -z-10"></div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {providers.map((provider, index) => (
            <AnimatedSection 
              key={index} 
              animation="fade-up" 
              delay={100 * index}
            >
              <ModelCard
                provider={provider.provider}
                description={provider.description}
                isSwissHosted={provider.isSwissHosted}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguageModels;
