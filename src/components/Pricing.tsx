
import React, { useState } from 'react';
import { Check, Plus, Rocket, EuroIcon, DollarSign } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { translate } from '../utils/translations';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';

const PricingFeature: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center space-x-2 text-sm text-gray-600">
    <Check className="h-4 w-4 text-evoya-blue flex-shrink-0" />
    <span>{text}</span>
  </div>
);

type Currency = 'CHF' | 'EUR';

const Pricing: React.FC = () => {
  const { language } = useLanguage();
  const [currency, setCurrency] = useState<Currency>('CHF');

  const handleCurrencyChange = (value: string) => {
    if (value) {
      setCurrency(value as Currency);
    }
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-evoya-blue/10 text-evoya-blue text-sm font-medium">
            {translate('pricing_badge', language)}
          </div>
          <h2 className="mb-6 max-w-3xl mx-auto">
            {translate('pricing_title', language)} <span className="text-evoya-blue">{translate('pricing_title_colored', language)}</span> {translate('pricing_title_end', language)}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {translate('pricing_description', language)}
          </p>
          
          {/* Currency Toggle */}
          <div className="flex justify-center mt-6">
            <ToggleGroup
              type="single"
              value={currency}
              onValueChange={handleCurrencyChange}
              className="border rounded-lg overflow-hidden"
            >
              <ToggleGroupItem value="CHF" className="px-4 py-2 data-[state=on]:bg-evoya-blue data-[state=on]:text-white flex items-center">
                <DollarSign className="h-4 w-4 mr-1" />
                <span>CHF</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="EUR" className="px-4 py-2 data-[state=on]:bg-evoya-blue data-[state=on]:text-white flex items-center">
                <EuroIcon className="h-4 w-4 mr-1" />
                <span>EUR</span>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100} className="max-w-3xl mx-auto">
          <Card className="border-2 border-evoya-blue/20 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-evoya-blue to-evoya-lightBlue"></div>
            <CardHeader className="pb-0">
              <div>
                <CardTitle className="text-3xl font-bold text-evoya-blue">{translate('pricing_unlimited', language)}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {translate('pricing_unlimited_desc', language)}
                </CardDescription>
              </div>
              <div className="mt-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">{currency} 99</span>
                  <span className="text-gray-600 ml-1">{translate('pricing_per_month', language)}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <PricingFeature text={translate('pricing_credits', language)} />
                <PricingFeature text={translate('pricing_users', language)} />
                <PricingFeature text={translate('pricing_agents', language)} />
                <PricingFeature text={translate('pricing_models', language)} />
                <PricingFeature text={translate('pricing_datasources', language)} />
                <PricingFeature text={translate('pricing_features', language)} />
                <PricingFeature text={translate('pricing_tools', language)} />
                <PricingFeature text={translate('pricing_data_update', language)} />
                <PricingFeature text={translate('pricing_mailboxes', language)} />
              </div>

              <div className="mt-8">
                <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200">
                  <div className="flex items-start space-x-3">
                    <Plus className="h-5 w-5 text-evoya-orange mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">{translate('pricing_additional', language)}</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {translate('pricing_additional_desc', language)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col pt-2 pb-8">
              <Button 
                asChild
                className="w-full h-auto py-3 bg-evoya-orange text-white font-medium text-base hover:bg-evoya-orange/90 [&:hover]:text-white"
              >
                <a 
                  href="https://avaia.io/accounts/signup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  {translate('pricing_start_free', language)}
                </a>
              </Button>
              <p className="text-xs text-gray-500 mt-3">{translate('pricing_no_card', language)}</p>
            </CardFooter>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Pricing;
