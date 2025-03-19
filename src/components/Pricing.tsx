
import React from 'react';
import { Check, Plus, Rocket } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const PricingFeature: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center space-x-2 text-sm text-gray-600">
    <Check className="h-4 w-4 text-evoya-blue flex-shrink-0" />
    <span>{text}</span>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-evoya-blue/10 text-evoya-blue text-sm font-medium">
            Preisgestaltung
          </div>
          <h2 className="mb-6 max-w-3xl mx-auto">
            Transparente <span className="text-evoya-blue">Preise</span> für Ihre KI-Workspaces
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mit unserem flexiblen Preismodell zahlen Sie nur für das, was Sie wirklich benötigen.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100} className="max-w-3xl mx-auto">
          <Card className="border-2 border-evoya-blue/20 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-evoya-blue to-evoya-lightBlue"></div>
            <CardHeader className="pb-0">
              <div>
                <CardTitle className="text-3xl font-bold text-evoya-blue">Unlimited</CardTitle>
                <CardDescription className="text-base mt-2">
                  Ihr Komplettpaket für professionelle KI-Workspaces mit allen Funktionen und umfangreichen Ressourcen.
                </CardDescription>
              </div>
              <div className="mt-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">CHF 99</span>
                  <span className="text-gray-600 ml-1">/ Monat</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <PricingFeature text="2'500 Credits / Monat" />
                <PricingFeature text="Unlimitierte Benutzer (inkl. 2 Admins)" />
                <PricingFeature text="Unlimitierte Workspace-Agenten" />
                <PricingFeature text="Alle Sprachmodelle" />
                <PricingFeature text="Datenquellen: 100 Rohtext, 100 URLs, 100 Dateien" />
                <PricingFeature text="Alle Funktionen" />
                <PricingFeature text="Alle Agenten-Tools" />
                <PricingFeature text="Automatische Datenaktualisierung" />
                <PricingFeature text="2 Mailboxen" />
              </div>

              <div className="mt-8">
                <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200">
                  <div className="flex items-start space-x-3">
                    <Plus className="h-5 w-5 text-evoya-orange mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">Zusätzliche Credits</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Benötigen Sie mehr? Erhalten Sie 1'000 zusätzliche Credits für nur CHF 35 pro Monat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col pt-2 pb-8">
              <Button className="w-full py-6 text-base bg-evoya-orange hover:bg-evoya-orange/90 text-white" size="lg">
                <Rocket className="mr-2 h-5 w-5" />
                Jetzt kostenlos starten
              </Button>
              <p className="text-xs text-gray-500 mt-3">Keine Kreditkarte notwendig</p>
            </CardFooter>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Pricing;
