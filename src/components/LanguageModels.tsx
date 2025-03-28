import React from 'react';
import { Shield, Bot, Server, Lock, Database, Globe, Building, CheckCircle2 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Card, CardContent } from './ui/card';
import { cn } from '../lib/utils';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { translate } from '../utils/translations';

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
  const { language } = useLanguage();
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group border border-gray-100 h-full">
      <div className="h-2 w-full bg-evoya-orange" />
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-full bg-evoya-orange/5 border border-evoya-orange/10 transition-all duration-300 shadow-sm flex items-center justify-center" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
            {logoSrc ? (
              <img 
                src={logoSrc} 
                alt={`${provider} logo`} 
                className="object-contain" 
                style={{ 
                  maxWidth: '36px', 
                  maxHeight: '36px',
                  width: 'auto',
                  height: 'auto'
                }} 
              />
            ) : (
              <Bot className="w-8 h-8 text-evoya-orange" />
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-2 mb-2">
              <h3 className="text-xl font-semibold">{provider}</h3>
              {isSwissHosted && (
                <span className="inline-flex items-center rounded-full bg-evoya-blue/10 px-2.5 py-1 text-xs font-medium text-evoya-blue">
                  <Shield className="w-3 h-3 mr-1" />
                  {translate('models_swiss_hosted', language)}
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
  const { language } = useLanguage();
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const providers = [
    {
      provider: "OpenAI",
      description: translate('models_openai_desc', language),
      isSwissHosted: false,
      logoSrc: "/lovable-uploads/ccb72968-6ff5-4bb9-b351-6ae607663d94.png" // OpenAI logo
    },
    {
      provider: "Anthropic",
      description: translate('models_anthropic_desc', language),
      isSwissHosted: false,
      logoSrc: "/lovable-uploads/d7119a96-5af2-41e4-b89f-6b10ccff8ac7.png" // Anthropic logo
    },
    {
      provider: "Mistral AI",
      description: translate('models_mistral_desc', language),
      isSwissHosted: false,
      logoSrc: "/lovable-uploads/a999219d-b2cd-4459-95e5-85e6ec0ac2ba.png" // Mistral AI logo
    },
    {
      provider: "Meta",
      description: translate('models_meta_desc', language),
      isSwissHosted: false,
      logoSrc: "/lovable-uploads/37757fce-6a3d-43fa-86c1-09e26f66e649.png" // Fixed Meta logo path
    },
    {
      provider: "DeepSeek",
      description: translate('models_deepseek_desc', language),
      isSwissHosted: false,
      logoSrc: "/lovable-uploads/555a0131-efa6-4bb5-94dc-9f4694784ce5.png" // DeepSeek logo
    },
    {
      provider: "Google",
      description: translate('models_google_desc', language),
      isSwissHosted: false,
      logoSrc: "/lovable-uploads/d265b7d1-1d48-48b0-b69a-7810191bc476.png" // Google logo
    },
    {
      provider: "Nvidia",
      description: translate('models_nvidia_desc', language),
      isSwissHosted: false,
      logoSrc: "/lovable-uploads/0e6c0d2e-5828-4c27-b935-109b5208071b.png" // Nvidia logo
    },
    {
      provider: "Microsoft",
      description: translate('models_microsoft_desc', language),
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
            {translate('models_badge', language)}
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 max-w-3xl mx-auto">
            {translate('models_title', language)} <span className="text-evoya-blue">{translate('models_title_colored', language)}</span> {translate('models_title_suffix', language)}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {translate('models_description', language)}
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
                  <div className="absolute -top-2 -right-2">
                    <img 
                      src="/lovable-uploads/1004ce48-af0e-4e52-b961-949e01b89203.png" 
                      alt="Swiss flag" 
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3 text-evoya-blue">{translate('models_swiss_llama_title', language)}</h3>
                <p className="text-gray-700 mb-4">
                  {translate('models_swiss_llama_desc', language)}
                </p>
                <div className="flex flex-wrap gap-3 mt-2 justify-center md:justify-start">
                  <span className="px-3 py-1 rounded-full bg-white text-sm font-medium border border-evoya-blue/20 text-evoya-blue flex items-center">
                    <Shield className="w-3 h-3 mr-1" />
                    {translate('models_swiss_hosting', language)}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white text-sm font-medium border border-evoya-blue/20 text-evoya-blue flex items-center">
                    <Lock className="w-3 h-3 mr-1" />
                    {translate('models_gdpr_compliant', language)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* On-Premise Solutions Section */}
        <AnimatedSection className="mt-12" animation="fade-up">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-white rounded-full shadow-md mb-6">
                <Server className="w-10 h-10 text-evoya-orange" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{translate('models_onpremise_title', language)}</h3>
              <p className="text-gray-700 max-w-3xl mb-6">
                {translate('models_onpremise_desc', language)}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-semibold mb-2">{translate('models_onpremise_control_title', language)}</h4>
                  <p className="text-sm text-gray-600">{translate('models_onpremise_control_desc', language)}</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-semibold mb-2">{translate('models_onpremise_custom_title', language)}</h4>
                  <p className="text-sm text-gray-600">{translate('models_onpremise_custom_desc', language)}</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-semibold mb-2">{translate('models_onpremise_data_title', language)}</h4>
                  <p className="text-sm text-gray-600">{translate('models_onpremise_data_desc', language)}</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Local ChatGPT Section - NEW */}
        <AnimatedSection className="mt-12" animation="fade-up">
          <div className="bg-gradient-to-r from-evoya-orange/5 to-evoya-orange/10 rounded-2xl p-8 border border-evoya-orange/20">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-white rounded-full shadow-md mb-6">
                <Database className="w-10 h-10 text-evoya-orange" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {language === 'de' ? 'Local ChatGPT – volle Kontrolle über Ihre Daten' : 'Local ChatGPT – Full Control Over Your Data'}
              </h3>
              <p className="text-gray-700 max-w-3xl mb-6">
                {language === 'de' 
                  ? 'Nutzen Sie echte ChatGPT-Modelle von OpenAI, lokal gehostet in Ihrem Land (Schweiz, Deutschland, etc.). Im Gegensatz zu Open-Source-Alternativen erhalten Sie die volle Leistung von ChatGPT, während Ihre Daten niemals das Land verlassen und vollständig unter Ihrer Kontrolle bleiben.'
                  : 'Utilize genuine ChatGPT models from OpenAI, locally hosted in your country (Switzerland, Germany, etc.). Unlike open-source alternatives, you get the full performance of ChatGPT while ensuring your data never leaves the country and remains completely under your control.'}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mb-8">
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-start mb-2">
                    <CheckCircle2 className="w-5 h-5 text-evoya-orange mr-2 mt-0.5 flex-shrink-0" />
                    <h4 className="font-semibold">
                      {language === 'de' ? 'Datenhoheit' : 'Data Sovereignty'}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    {language === 'de' 
                      ? 'Ihre Daten bleiben in Ihrem Land – keine Übertragung in die USA oder andere Länder.' 
                      : 'Your data stays in your country – no transfer to the US or other countries.'}
                  </p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-start mb-2">
                    <CheckCircle2 className="w-5 h-5 text-evoya-orange mr-2 mt-0.5 flex-shrink-0" />
                    <h4 className="font-semibold">
                      {language === 'de' ? 'Gesetzeskonformität' : 'Legal Compliance'}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    {language === 'de' 
                      ? 'Volle Konformität mit DSG, DSGVO und anderen lokalen Datenschutzgesetzen.' 
                      : 'Full compliance with GDPR, Swiss DPA, and other local data protection regulations.'}
                  </p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-start mb-2">
                    <CheckCircle2 className="w-5 h-5 text-evoya-orange mr-2 mt-0.5 flex-shrink-0" />
                    <h4 className="font-semibold">
                      {language === 'de' ? 'Optimale Leistung' : 'Premium Performance'}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    {language === 'de' 
                      ? 'Originale ChatGPT-Modelle mit voller Leistungsfähigkeit und regelmäßigen Updates.' 
                      : 'Original ChatGPT models with full capabilities and regular updates.'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-8 p-6 bg-white rounded-xl shadow-sm border border-gray-100 max-w-3xl w-full">
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-evoya-blue mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <h5 className="font-medium text-sm">
                      {language === 'de' ? 'Lokale Infrastruktur' : 'Local Infrastructure'}
                    </h5>
                    <p className="text-xs text-gray-600">
                      {language === 'de' ? 'Gehostet in Ihrem Land' : 'Hosted in your country'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Building className="w-6 h-6 text-evoya-blue mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <h5 className="font-medium text-sm">
                      {language === 'de' ? 'Für Unternehmen' : 'Enterprise Ready'}
                    </h5>
                    <p className="text-xs text-gray-600">
                      {language === 'de' ? 'Maßgeschneiderte Lösungen' : 'Tailored solutions'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Lock className="w-6 h-6 text-evoya-blue mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <h5 className="font-medium text-sm">
                      {language === 'de' ? 'Höchste Sicherheit' : 'Maximum Security'}
                    </h5>
                    <p className="text-xs text-gray-600">
                      {language === 'de' ? 'Verschlüsselte Daten' : 'Encrypted data'}
                    </p>
                  </div>
                </div>
              </div>
              
              <Button 
                className="mt-8 bg-evoya-orange text-white hover:bg-evoya-orange/90"
                onClick={scrollToContact}
              >
                {language === 'de' ? 'Beraten lassen' : 'Get Consultation'}
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-8" animation="fade-up">
          <Button 
            className="mt-8 bg-evoya-orange text-white hover:bg-evoya-orange/90"
            onClick={scrollToContact}
          >
            {translate('models_contact_cta', language)}
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LanguageModels;
