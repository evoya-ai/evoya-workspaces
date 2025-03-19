import React from 'react';
import { FileText, Image as ImageIcon, Eye, FileSearch, Globe, BarChart, PenTool, Mic, Shield, Lock, Database, ArrowRight, User, Globe2, RefreshCcw, Book, Layers, Network, Brain, Search } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '../lib/utils';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import { useLanguage } from '../contexts/LanguageContext';
import { translate } from '../utils/translations';

interface FeatureDetailProps {
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  image: string;
  alt: string;
  isReversed?: boolean;
  accentColor: string;
  iconBgColor: string;
  customContent?: React.ReactNode;
  comingSoon?: boolean;
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
  iconBgColor,
  customContent,
  comingSoon = false,
}) => {
  const { language } = useLanguage();
  
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
          <div className={`inline-flex items-center justify-center rounded-full p-2 ${iconBgColor} mb-4`}>
            {icon}
          </div>
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-2xl lg:text-3xl font-semibold">{title}</h3>
            {comingSoon && (
              <Badge variant="outline" className="bg-evoya-orange/10 text-evoya-orange border-evoya-orange/30">
                {translate('detailed_coming_soon', language)}
              </Badge>
            )}
          </div>
          <p className="text-lg text-gray-600 mb-6">{description}</p>
          <ul className="space-y-3">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-evoya-orange/10 flex items-center justify-center mt-1 mr-3">
                  <div className="w-2 h-2 rounded-full bg-evoya-orange"></div>
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
  const { language } = useLanguage();
  
  const creatorImageInterface = (
    <div className="relative w-full h-[450px] overflow-hidden rounded-xl shadow-xl bg-[#1A1E35]">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img 
          src="/lovable-uploads/629e741e-bc3d-4f90-a758-d88181edd6a7.png"
          alt="Creator Interface mit Texteditor für generative KI-Artikel"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
  
  const voiceImageInterface = (
    <div className="relative w-full h-[450px] overflow-hidden rounded-xl shadow-xl bg-[#1A1E35]">
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
        <img 
          src="/lovable-uploads/982a7c62-2073-4662-85e1-41555374b8f0.png"
          alt="Evoya Voice Interface showing audio waveform"
          className="w-4/5 h-auto object-contain"
        />
      </div>
    </div>
  );

  const textGenerationContent = (
    <div className="relative w-full h-[450px] overflow-hidden rounded-xl shadow-xl bg-[#1A1E35]">
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
        <img 
          src="/lovable-uploads/114f908c-d003-4183-b0b6-74e7fa56eee5.png"
          alt="KI-Chat Interface zur Texterstellung"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
  
  const businessmanContent = (
    <div className="relative w-full h-[450px] overflow-hidden rounded-xl shadow-xl bg-[#1A1E35]">
      <img 
        src="/lovable-uploads/2cf47cc3-74a6-4c55-9268-fa7e3dc7399a.png" 
        alt="Businessman sitting at desk with laptop and coffee" 
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-evoya-blue to-transparent opacity-20"></div>
    </div>
  );
  
  const editorContent = (
    <div className="relative w-full h-[450px] overflow-hidden rounded-xl shadow-xl bg-[#1A1E35]">
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
        <img 
          src="/lovable-uploads/3b4099ed-2b01-42eb-9923-3b3eee681c7a.png"
          alt="Text editor interface showing article creation"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
  
  const diagramContent = (
    <div className="relative w-full h-[450px] overflow-hidden rounded-xl shadow-xl bg-[#1A1E35]">
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
        <img 
          src="/lovable-uploads/b2891f9c-8c76-4722-af23-002f25df916e.png"
          alt="Diagramm einer generativen KI mit Dateneingabe, Modelltraining und neuronalen Netzen"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
  
  const documentContent = (
    <div className="relative w-full h-[450px] overflow-hidden rounded-xl shadow-xl bg-[#1A1E35]">
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
        <img 
          src="/lovable-uploads/ddfef4d0-c4bd-42ff-b565-ef4f3634c135.png"
          alt="Document icons for Excel, PDF and Word files"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
  
  const webContent = (
    <div className="relative w-full h-[450px] overflow-hidden rounded-xl shadow-xl bg-[#1A1E35]">
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
        <img 
          src="/lovable-uploads/7683941c-ee25-428b-8b85-59daf4342e91.png"
          alt="Globe icon representing web content and live information"
          className="w-1/2 h-auto object-contain"
        />
      </div>
    </div>
  );
  
  const audioWaveform = (
    <div className="relative w-full h-[450px] overflow-hidden rounded-xl shadow-xl bg-[#1A1E35]">
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
        <img 
          src="/lovable-uploads/4a4c9724-fefd-4658-85eb-cd483b2c78a5.png"
          alt="Audio waveform visualization"
          className="w-2/3 h-auto object-contain"
        />
      </div>
    </div>
  );

  const imageRecognitionContent = (
    <div className="relative w-full h-[450px] overflow-hidden rounded-xl shadow-xl bg-[#1A1E35]">
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
        <img 
          src="/lovable-uploads/891d84e6-9349-4948-992d-4e2937f43a7b.png"
          alt="Handschrifterkennung: Umwandlung von handgeschriebenem Text in getippten Text"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );

  const features = [
    {
      titleKey: 'detailed_text_generation_title',
      descriptionKey: 'detailed_text_generation_desc',
      detailsKeys: [
        'detailed_text_generation_bullet1',
        'detailed_text_generation_bullet2',
        'detailed_text_generation_bullet3',
        'detailed_text_generation_bullet4',
      ],
      icon: <FileText className="w-6 h-6 text-evoya-orange" />,
      image: "",
      alt: translate('detailed_text_generation_alt', language),
      isReversed: false,
      accentColor: "text-evoya-orange bg-evoya-orange/10",
      iconBgColor: "bg-evoya-orange/20",
      customContent: textGenerationContent,
    },
    {
      titleKey: 'detailed_image_generation_title',
      descriptionKey: 'detailed_image_generation_desc',
      detailsKeys: [
        'detailed_image_generation_bullet1',
        'detailed_image_generation_bullet2',
        'detailed_image_generation_bullet3',
        'detailed_image_generation_bullet4',
      ],
      icon: <ImageIcon className="w-6 h-6 text-evoya-orange" />,
      image: "",
      alt: translate('detailed_image_generation_alt', language),
      isReversed: true,
      accentColor: "text-evoya-orange bg-evoya-orange/10",
      iconBgColor: "bg-evoya-orange/20",
      customContent: businessmanContent,
    },
    {
      titleKey: 'detailed_image_recognition_title',
      descriptionKey: 'detailed_image_recognition_desc',
      detailsKeys: [
        'detailed_image_recognition_bullet1',
        'detailed_image_recognition_bullet2',
        'detailed_image_recognition_bullet3',
        'detailed_image_recognition_bullet4',
      ],
      icon: <Eye className="w-6 h-6 text-evoya-orange" />,
      image: "",
      alt: translate('detailed_image_recognition_alt', language),
      isReversed: false,
      accentColor: "text-evoya-orange bg-evoya-orange/10",
      iconBgColor: "bg-evoya-orange/20",
      customContent: imageRecognitionContent,
    },
    {
      titleKey: 'detailed_document_analysis_title',
      descriptionKey: 'detailed_document_analysis_desc',
      detailsKeys: [
        'detailed_document_analysis_bullet1',
        'detailed_document_analysis_bullet2',
        'detailed_document_analysis_bullet3',
        'detailed_document_analysis_bullet4',
      ],
      icon: <FileSearch className="w-6 h-6 text-evoya-orange" />,
      image: "",
      alt: translate('detailed_document_analysis_alt', language),
      isReversed: true,
      accentColor: "text-evoya-orange bg-evoya-orange/10",
      iconBgColor: "bg-evoya-orange/20",
      customContent: documentContent,
    },
    {
      titleKey: 'detailed_live_search_title',
      descriptionKey: 'detailed_live_search_desc',
      detailsKeys: [
        'detailed_live_search_bullet1',
        'detailed_live_search_bullet2',
        'detailed_live_search_bullet3',
        'detailed_live_search_bullet4',
      ],
      icon: <Globe className="w-6 h-6 text-evoya-orange" />,
      image: "",
      alt: translate('detailed_live_search_alt', language),
      isReversed: false,
      accentColor: "text-evoya-orange bg-evoya-orange/10",
      iconBgColor: "bg-evoya-orange/20",
      customContent: webContent,
    },
    {
      titleKey: 'detailed_diagrams_title',
      descriptionKey: 'detailed_diagrams_desc',
      detailsKeys: [
        'detailed_diagrams_bullet1',
        'detailed_diagrams_bullet2',
        'detailed_diagrams_bullet3',
        'detailed_diagrams_bullet4',
      ],
      icon: <BarChart className="w-6 h-6 text-evoya-orange" />,
      image: "",
      alt: translate('detailed_diagrams_alt', language),
      isReversed: true,
      accentColor: "text-evoya-orange bg-evoya-orange/10",
      iconBgColor: "bg-evoya-orange/20",
      customContent: diagramContent,
    },
    {
      titleKey: 'detailed_creator_title',
      descriptionKey: 'detailed_creator_desc',
      detailsKeys: [
        'detailed_creator_bullet1',
        'detailed_creator_bullet2',
        'detailed_creator_bullet3',
        'detailed_creator_bullet4',
      ],
      icon: <PenTool className="w-6 h-6 text-evoya-orange" />,
      customContent: creatorImageInterface,
      image: "", 
      alt: translate('detailed_creator_alt', language),
      isReversed: false,
      accentColor: "text-evoya-orange bg-evoya-orange/10",
      iconBgColor: "bg-evoya-orange/20",
      comingSoon: true,
    },
    {
      titleKey: 'detailed_voice_title',
      descriptionKey: 'detailed_voice_desc',
      detailsKeys: [
        'detailed_voice_bullet1',
        'detailed_voice_bullet2',
        'detailed_voice_bullet3',
        'detailed_voice_bullet4',
      ],
      icon: <Mic className="w-6 h-6 text-evoya-orange" />,
      customContent: audioWaveform,
      image: "",
      alt: translate('detailed_voice_alt', language),
      isReversed: true,
      accentColor: "text-evoya-orange bg-evoya-orange/10",
      iconBgColor: "bg-evoya-orange/20",
      comingSoon: true,
    },
  ];
  
  return (
    <section id="detailed-features" className="py-16 bg-white">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-evoya-orange/10 text-evoya-orange text-sm font-medium">
            {translate('detailed_features_badge', language)}
          </div>
          <h2 className="mb-6 max-w-3xl mx-auto">
            {translate('detailed_features_title', language)} <span className="text-evoya-orange">{translate('detailed_features_title_colored', language)}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {translate('detailed_features_description', language)}
          </p>
        </AnimatedSection>

        <div className="space-y-8">
          {features.map((feature, index) => (
            <FeatureDetail
              key={index}
              title={translate(feature.titleKey, language)}
              description={translate(feature.descriptionKey, language)}
              details={feature.detailsKeys.map(key => translate(key, language))}
              icon={feature.icon}
              image={feature.image}
              alt={feature.alt}
              isReversed={feature.isReversed}
              accentColor={feature.accentColor}
              iconBgColor={feature.iconBgColor}
              customContent={feature.customContent}
              comingSoon={feature.comingSoon}
            />
          ))}
        </div>

        <AnimatedSection className="mt-24 mb-24" animation="fade-up">
          <div className="mb-16 text-center">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-evoya-lightBlue/10 text-evoya-lightBlue text-sm font-medium">
              {translate('detailed_semantic_badge', language)}
            </div>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-6">{translate('detailed_semantic_title', language)}</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
              {translate('detailed_semantic_description', language)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col">
              <div className="relative h-[450px] overflow-hidden rounded-xl shadow-lg mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-evoya-lightBlue/5 to-evoya-navy/10 z-0"></div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full shadow-xl border-4 border-evoya-lightBlue/30 flex items-center justify-center z-20">
                  <div className="text-center p-2">
                    <Brain className="w-12 h-12 text-evoya-navy mx-auto mb-2" />
                    <span className="block text-sm font-semibold text-evoya-navy">{translate('detailed_semantic_center', language)}</span>
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
                  <span className="block text-xs font-medium text-center">{translate('detailed_semantic_documents', language)}</span>
                </div>
                
                <div className="absolute top-[10%] right-[17.5%] w-24 h-24 bg-white rounded-lg shadow-lg p-3 z-10 animate-float" style={{ animationDelay: '1.5s' }}>
                  <Globe className="w-8 h-8 text-evoya-orange mx-auto mb-1" />
                  <span className="block text-xs font-medium text-center">{translate('detailed_semantic_web', language)}</span>
                </div>
                
                <div className="absolute bottom-[10%] left-[17.5%] w-24 h-24 bg-white rounded-lg shadow-lg p-3 z-10 animate-float" style={{ animationDelay: '6s' }}>
                  <Search className="w-8 h-8 text-evoya-orange mx-auto mb-1" />
                  <span className="block text-xs font-medium text-center">{translate('detailed_semantic_search', language)}</span>
                </div>
                
                <div className="absolute bottom-[10%] right-[17.5%] w-24 h-24 bg-white rounded-lg shadow-lg p-3 z-10 animate-float" style={{ animationDelay: '7.5s' }}>
                  <Network className="w-8 h-8 text-evoya-orange mx-auto mb-1" />
                  <span className="block text-xs font-medium text-center">{translate('detailed_semantic_api', language)}</span>
                </div>
              </div>
              
              <div className="p-5 bg-gradient-to-r from-evoya-lightBlue/5 to-transparent rounded-lg border border-evoya-lightBlue/20 shadow-sm">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-evoya-orange/20 flex items-center justify-center mr-4">
                    <Brain className="w-6 h-6 text-evoya-orange" />
                  </div>
                  <p className="text-evoya-navy font-medium">
                    {translate('detailed_semantic_efficiency', language)}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="max-w-xl">
              <h4 className="text-xl font-semibold mb-6 text-evoya-navy">{translate('detailed_semantic_processing_title', language)}</h4>
              <p className="text-gray-600 mb-8">
                {translate('detailed_semantic_processing_desc', language)}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-evoya-orange/10 flex items-center justify-center mt-1 mr-4">
                    <Book className="w-5 h-5 text-evoya-orange" />
                  </div>
                  <div>
                    <h5 className="text-lg font-medium mb-2 text-evoya-navy">{translate('detailed_semantic_multiformat_title', language)}</h5>
                    <p className="text-gray-600">
                      {translate('detailed_semantic_multiformat_desc', language)}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-evoya-orange/10 flex items-center justify-center mt-1 mr-4">
                    <Network className="w-5 h-5 text-evoya-orange" />
                  </div>
                  <div>
                    <h5 className="text-lg font-medium mb-2 text-evoya-navy">{translate('detailed_semantic_context_title', language)}</h5>
                    <p className="text-gray-600">
                      {translate('detailed_semantic_context_desc', language)}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-evoya-orange/10 flex items-center justify-center mt-1 mr-4">
                    <Search className="w-5 h-5 text-evoya-orange" />
                  </div>
                  <div>
                    <h5 className="text-lg font-medium mb-2 text-evoya-navy">{translate('detailed_semantic_precision_title', language)}</h5>
                    <p className="text-gray-600">
                      {translate('detailed_semantic_precision_desc', language)}
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
            {translate('detailed_privacy_badge', language)}
          </div>
          
          <div className="max-w-3xl mx-auto relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-evoya-navy/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-evoya-navy" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center">{translate('detailed_privacy_storage_title', language)}</h4>
                <p className="text-gray-600 text-center">
                  {translate('detailed_privacy_storage_desc', language)}
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-evoya-navy/10 flex items-center justify-center mx-auto mb-4">
                  <Database className="w-6 h-6 text-evoya-navy" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center">{translate('detailed_privacy_gdpr_title', language)}</h4>
                <p className="text-gray-600 text-center">
                  {translate('detailed_privacy_gdpr_desc', language)}
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-evoya-navy/10 flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-6 h-6 text-evoya-navy" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center">{translate('detailed_privacy_encryption_title', language)}</h4>
                <p className="text-gray-600 text-center">
                  {translate('detailed_privacy_encryption_desc', language)}
                </p>
              </div>
            </div>
            
            <div className="absolute -z-10 inset-0 blur-3xl bg-evoya-navy/5 rounded-full transform -translate-y-1/4 scale-150"></div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-28" animation="fade-up">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-6">{translate('detailed_shield_title', language)}</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {translate('detailed_shield_description', language)}
              </p>
            </div>

            <div className="text-center mb-10">
              <h4 className="text-xl font-medium text-evoya-navy mb-4">{translate('detailed_shield_how', language)}</h4>
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
                        {translate('detailed_shield_step1_badge', language)}
                      </div>
                      <h5 className="text-lg font-semibold mt-3 mb-4">{translate('detailed_shield_step1_title', language)}</h5>
                    </div>
                    
                    <div className="space-y-4 flex-grow">
                      <div className="bg-evoya-navy text-white p-4 rounded text-center font-medium">
                        {translate('detailed_shield_step1_name', language)}
                      </div>
                      
                      <div className="flex justify-center">
                        <div className="p-1 rounded-full bg-red-100">
                          <ArrowRight className="w-6 h-6 text-red-500 transform rotate-90" />
                        </div>
                      </div>
                      
                      <div className="bg-evoya-navy text-white p-4 rounded text-center font-medium">
                        {translate('detailed_shield_step1_placeholder', language)}
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
                        {translate('detailed_shield_step2_badge', language)}
                      </div>
                      <h5 className="text-lg font-semibold mt-3 mb-4">{translate('detailed_shield_step2_title', language)}</h5>
                    </div>
                    
                    <div className="flex flex-col items-center justify-center flex-grow">
                      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <Globe2 className="w-16 h-16 text-gray-700" />
                      </div>
                      
                      <p className="text-center text-gray-600">
                        {translate('detailed_shield_step2_desc', language)}
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
                        {translate('detailed_shield_step3_badge', language)}
                      </div>
                      <h5 className="text-lg font-semibold mt-3 mb-4">{translate('detailed_shield_step3_title', language)}</h5>
                    </div>
                    
                    <div className="space-y-4 flex-grow">
                      <div className="bg-evoya-lightBlue text-white p-4 rounded text-center font-medium">
                        {translate('detailed_shield_step3_name', language)}
                      </div>
                      
                      <div className="flex justify-center">
                        <div className="p-1 rounded-full bg-green-100">
                          <ArrowRight className="w-6 h-6 text-green-500 transform -rotate-90" />
                        </div>
                      </div>
                      
                      <div className="bg-evoya-lightBlue text-white p-4 rounded text-center font-medium">
                        {translate('detailed_shield_step3_placeholder', language)}
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
              <h4 className="text-xl font-semibold mb-4">{translate('detailed_shield_data_title', language)}</h4>
              <p className="text-gray-600 mb-4">
                {translate('detailed_shield_data_desc', language)}
              </p>
              <div className="flex items-center mt-4">
                <div className="rounded-full bg-green-100 p-2 mr-3">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-green-600 font-medium">
                  {translate('detailed_shield_highlight', language)}
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
