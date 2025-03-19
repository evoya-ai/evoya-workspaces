
import React from 'react';
import { Shield, Bot, Server, Lock } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Card, CardContent } from './ui/card';
import { cn } from '../lib/utils';
import { Button } from './ui/button';

interface ModelCardProps {
  provider: string;
  description: string;
  isSwissHosted?: boolean;
  logoSrc?: string;
}

const ModelCard: React.FC<ModelCardProps> = ({
  provider,
  description,
  isSwissHosted = false,
  logoSrc,
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group border border-gray-100 h-full">
      <div className="h-2 w-full bg-evoya-orange" />
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-evoya-orange/5 border border-evoya-orange/10 transition-all duration-300 shadow-sm flex items-center justify-center">
            {logoSrc ? (
              <img src={logoSrc} alt={`${provider} logo`} className="w-5 h-5 object-contain min-w-5 min-h-5" style={{ width: '100%', height: '100%', maxWidth: '24px', maxHeight: '24px' }} />
            ) : (
              <Bot className="w-5 h-5 text-evoya-orange" />
            )}
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
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const providers = [
    {
      provider: "OpenAI",
      description: "Anbieter leistungsstarker KI-Sprachmodelle mit breitem Anwendungsspektrum",
      isSwissHosted: false,
      logoSrc: "/lovable-uploads/ccb72968-6ff5-4bb9-b351-6ae607663d94.png" // OpenAI logo
    },
    {
      provider: "Anthropic",
      description: "Fokus auf sichere, zuverlässige und kontrollierbare KI-Systeme",
      isSwissHosted: false,
      logoSrc: "/lovable-uploads/d7119a96-5af2-41e4-b89f-6b10ccff8ac7.png" // Anthropic logo
    },
    {
      provider: "Mistral AI",
      description: "Europäischer Anbieter effizienter KI-Modelle mit ausgezeichnetem Preis-Leistungs-Verhältnis",
      isSwissHosted: false,
      logoSrc: "/lovable-uploads/a999219d-b2cd-4459-95e5-85e6ec0ac2ba.png" // Mistral AI logo
    },
    {
      provider: "Meta",
      description: "Open-Source-Modelle mit umfangreichen Anpassungsmöglichkeiten",
      isSwissHosted: false,
      logoSrc: "/lovable-uploads/37757fce-6a3d-43fa-86c1-09e26f66e649.png" // Fixed Meta logo path
    },
    {
      provider: "DeepSeek",
      description: "Spezialisiert auf fortschrittliche Forschung und technologische Innovation",
      isSwissHosted: false,
      logoSrc: "/lovable-uploads/555a0131-efa6-4bb5-94dc-9f4694784ce5.png" // DeepSeek logo
    },
    {
      provider: "Google",
      description: "Führende KI-Technologien mit tiefer Integration in Web- und Cloud-Dienste",
      isSwissHosted: false,
      logoSrc: "/lovable-uploads/d265b7d1-1d48-48b0-b69a-7810191bc476.png" // Google logo
    },
    {
      provider: "Nvidia",
      description: "Hardware-optimierte KI-Lösungen mit Fokus auf Leistung und Skalierbarkeit",
      isSwissHosted: false,
      logoSrc: "/lovable-uploads/0e6c0d2e-5828-4c27-b935-109b5208071b.png" // Nvidia logo
    },
    {
      provider: "Microsoft",
      description: "Enterprise-orientierte KI-Dienste mit nahtloser Integration in Geschäftsanwendungen",
      isSwissHosted: false,
      logoSrc: "/lovable-uploads/04028227-221a-43f3-80fc-ed495331a8a5.png" // Microsoft logo
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
                logoSrc={provider.logoSrc}
              />
            </AnimatedSection>
          ))}
        </div>

        {/* Swiss Llama 3.3 Special Section */}
        <AnimatedSection className="mt-16" animation="fade-up">
          <div className="bg-gradient-to-r from-evoya-blue/5 to-evoya-blue/10 rounded-2xl p-8 border border-evoya-blue/20">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 relative flex items-center justify-center rounded-full bg-white shadow-lg p-4 border-2 border-evoya-blue/20">
                  <Shield className="w-12 h-12 md:w-16 md:h-16 text-evoya-blue" />
                  <div className="absolute -top-2 -right-2 bg-evoya-orange text-white text-xs font-bold px-2 py-1 rounded-full">
                    Schweiz
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3 text-evoya-blue">Swiss Llama 3.3</h3>
                <p className="text-gray-700 mb-4">
                  Unser Schweizer Premium-Modell bietet höchste Qualität bei vollständiger Datensouveränität. 
                  Swiss Llama 3.3 wird ausschliesslich in der Schweiz gehostet.
                </p>
                <div className="flex flex-wrap gap-3 mt-2 justify-center md:justify-start">
                  <span className="px-3 py-1 rounded-full bg-white text-sm font-medium border border-evoya-blue/20 text-evoya-blue flex items-center">
                    <Shield className="w-3 h-3 mr-1" />
                    Schweizer Hosting
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white text-sm font-medium border border-evoya-blue/20 text-evoya-blue flex items-center">
                    <Lock className="w-3 h-3 mr-1" />
                    DSGVO-konform
                  </span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* On-Premise Solutions Section */}
        <AnimatedSection className="mt-12 mb-8" animation="fade-up">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-white rounded-full shadow-md mb-6">
                <Server className="w-10 h-10 text-evoya-orange" />
              </div>
              <h3 className="text-2xl font-bold mb-4">On-Premise Lösungen</h3>
              <p className="text-gray-700 max-w-3xl mb-6">
                Maximale Kontrolle über Ihre KI-Infrastruktur: Wir bieten massgeschneiderte On-Premise-Lösungen, 
                bei denen die KI-Modelle direkt auf Ihren Servern laufen. So bleiben Ihre Daten immer in Ihrer 
                Infrastruktur und Sie profitieren von höchster Sicherheit und Datenschutz.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-semibold mb-2">Volle Kontrolle</h4>
                  <p className="text-sm text-gray-600">Modelle laufen in Ihrer eigenen Infrastruktur und unter Ihrer Kontrolle.</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-semibold mb-2">Massgeschneidert</h4>
                  <p className="text-sm text-gray-600">Anpassbar an Ihre spezifischen Anforderungen und Sicherheitsrichtlinien.</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-semibold mb-2">Keine Datenexporte</h4>
                  <p className="text-sm text-gray-600">Sensible Daten verlassen niemals Ihr Unternehmensnetzwerk.</p>
                </div>
              </div>
              <Button 
                className="mt-8 bg-evoya-orange text-white hover:bg-evoya-orange/90"
                onClick={scrollToContact}
              >
                Beratung anfragen
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LanguageModels;
