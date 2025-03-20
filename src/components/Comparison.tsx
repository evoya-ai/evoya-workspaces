
import React, { useState } from 'react';
import { Check, X, AlertTriangle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';
import { translate } from '../utils/translations';

type FeatureResult = boolean | 'limited';

const Comparison: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { language } = useLanguage();
  
  // Get translated features
  const features = [
    translate('comparison_flexible_pricing', language),
    translate('comparison_ai_models', language),
    translate('comparison_local_hosting', language),
    translate('comparison_usage_billing', language),
    translate('comparison_custom_solutions', language),
    translate('comparison_personal_support', language),
    translate('comparison_document_editing', language),
    translate('comparison_privacy_shield', language),
    translate('comparison_swiss_storage', language),
    translate('comparison_swiss_models', language),
  ];

  const tooltips = {
    [translate('comparison_privacy_shield', language)]: {
      'Evoya AI': translate('tooltip_privacy_shield_evoya', language),
      'OpenAI': translate('tooltip_privacy_shield_other', language),
      'Microsoft': translate('tooltip_privacy_shield_other', language),
    },
    [translate('comparison_swiss_storage', language)]: {
      'Evoya AI': translate('tooltip_swiss_storage_evoya', language),
      'OpenAI': translate('tooltip_swiss_storage_other', language),
      'Microsoft': translate('tooltip_swiss_storage_other', language),
    },
    [translate('comparison_swiss_models', language)]: {
      'Evoya AI': translate('tooltip_swiss_models_evoya', language),
      'OpenAI': translate('tooltip_swiss_models_other', language),
      'Microsoft': translate('tooltip_swiss_models_other', language),
    }
  };

  const products = [
    {
      name: 'Evoya AI',
      description: 'KI-Workspaces',
      results: [true, true, true, true, true, true, true, true, true, true] as FeatureResult[],
      highlighted: true
    },
    {
      name: 'OpenAI',
      description: 'ChatGPT',
      results: [false, false, false, false, true, false, true, false, false, false] as FeatureResult[],
      highlighted: false
    },
    {
      name: 'Microsoft',
      description: 'Copilot',
      results: [false, true, false, false, true, false, false, false, false, false] as FeatureResult[],
      highlighted: false
    }
  ];

  const renderFeatureStatus = (productIndex: number, featureIndex: number) => {
    const result = products[productIndex].results[featureIndex];
    const isHighlighted = products[productIndex].highlighted;
    
    let icon;
    if (result === true) {
      icon = <Check className={`w-5 h-5 ${isHighlighted ? 'text-evoya-orange' : 'text-evoya-orange'}`} />;
    } else if (result === 'limited') {
      icon = <AlertTriangle className="w-5 h-5 text-amber-500" />;
    } else {
      icon = <X className="w-5 h-5 text-gray-400" />;
    }

    return (
      <div className="flex justify-center items-center">
        {icon}
      </div>
    );
  };

  return (
    <section id="comparison" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10"></div>
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-evoya-blue/10 text-evoya-blue text-sm font-medium">
            {translate('nav_comparison', language)}
          </div>
          <h2 className="mb-6 max-w-3xl mx-auto">
            {translate('comparison_title', language)} <span className="text-evoya-blue">{translate('comparison_title_colored', language)}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {translate('comparison_description', language)}
          </p>
        </AnimatedSection>

        {/* Mobile Tabs */}
        <div className="md:hidden mb-8">
          <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
            {products.map((product, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                  activeTab === index
                    ? product.highlighted
                      ? 'bg-evoya-blue text-white'
                      : 'bg-gray-700 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {product.name}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <AnimatedSection delay={100} className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 font-medium text-gray-600">
                    {translate('comparison_features', language)}
                  </th>
                  {products.map((product, index) => (
                    <th 
                      key={index} 
                      className={`px-6 py-4 ${index === 0 ? 'bg-evoya-blue/5' : ''} hidden md:table-cell`}
                    >
                      <div className={`font-semibold text-lg ${product.highlighted ? 'text-evoya-blue' : 'text-gray-800'}`}>
                        {product.name}
                      </div>
                      {product.description && (
                        <div className="text-sm text-gray-500">{product.description}</div>
                      )}
                    </th>
                  ))}
                  <th className="px-6 py-4 md:hidden">
                    <div className={`font-semibold text-lg ${products[activeTab].highlighted ? 'text-evoya-blue' : 'text-gray-800'}`}>
                      {products[activeTab].name}
                    </div>
                    {products[activeTab].description && (
                      <div className="text-sm text-gray-500">{products[activeTab].description}</div>
                    )}
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, featureIndex) => (
                  <tr key={featureIndex} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-700">{feature}</td>
                    {products.map((product, productIndex) => (
                      <td
                        key={productIndex}
                        className={`px-6 py-4 ${
                          productIndex === 0 ? 'bg-evoya-blue/5' : ''
                        } hidden md:table-cell`}
                      >
                        {renderFeatureStatus(productIndex, featureIndex)}
                      </td>
                    ))}
                    <td className="px-6 py-4 md:hidden">
                      {renderFeatureStatus(activeTab, featureIndex)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Comparison;
