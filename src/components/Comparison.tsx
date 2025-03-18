
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Comparison: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const features = [
    'Schweizer Datenschutz',
    'Flexibles Preismodell',
    'Über 20 KI-Modelle',
    'Lokale Modell-Hosting-Option',
    'Nutzungsbasierte Abrechnung',
    'Massgeschneiderte KI-Lösungen',
    'Persönliche Betreuung',
  ];

  const products = [
    {
      name: 'evoya',
      description: 'KI-Workspaces',
      results: [true, true, true, true, true, true, true],
      highlighted: true
    },
    {
      name: 'ChatGPT',
      description: 'Plus',
      results: [false, false, false, false, false, false, false],
      highlighted: false
    },
    {
      name: 'Microsoft',
      description: 'Copilot',
      results: [false, false, true, false, false, false, false],
      highlighted: false
    }
  ];

  return (
    <section id="comparison" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10"></div>
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-evoya-blue/10 text-evoya-blue text-sm font-medium">
            Vergleich
          </div>
          <h2 className="mb-6 max-w-3xl mx-auto">
            Evoya im Vergleich zu anderen <span className="text-evoya-blue">KI-Lösungen</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Entdecken Sie, wie sich unsere KI-Workspaces von anderen Lösungen auf dem Markt unterscheiden.
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
                  <th className="px-6 py-4 font-medium text-gray-600">Funktionen</th>
                  {products.map((product, index) => (
                    <th 
                      key={index} 
                      className={`px-6 py-4 ${index === 0 ? 'bg-evoya-blue/5' : ''} hidden md:table-cell`}
                    >
                      <div className={`font-semibold text-lg ${product.highlighted ? 'text-evoya-blue' : 'text-gray-800'}`}>
                        {product.name}
                      </div>
                      <div className="text-sm text-gray-500">{product.description}</div>
                    </th>
                  ))}
                  <th className="px-6 py-4 md:hidden">
                    <div className={`font-semibold text-lg ${products[activeTab].highlighted ? 'text-evoya-blue' : 'text-gray-800'}`}>
                      {products[activeTab].name}
                    </div>
                    <div className="text-sm text-gray-500">{products[activeTab].description}</div>
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
                        className={`px-6 py-4 text-center ${
                          productIndex === 0 ? 'bg-evoya-blue/5' : ''
                        } hidden md:table-cell`}
                      >
                        {product.results[featureIndex] ? (
                          <Check className={`mx-auto w-5 h-5 ${product.highlighted ? 'text-evoya-blue' : 'text-green-500'}`} />
                        ) : (
                          <X className="mx-auto w-5 h-5 text-gray-400" />
                        )}
                      </td>
                    ))}
                    <td className="px-6 py-4 text-center md:hidden">
                      {products[activeTab].results[featureIndex] ? (
                        <Check className={`mx-auto w-5 h-5 ${products[activeTab].highlighted ? 'text-evoya-blue' : 'text-green-500'}`} />
                      ) : (
                        <X className="mx-auto w-5 h-5 text-gray-400" />
                      )}
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
