
import React from 'react';
import { Brain, Network, Target, Workflow, Component, GitBranch } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Card, CardContent } from './ui/card';
import { cn } from '../lib/utils';
import { Separator } from './ui/separator';

interface FrameworkCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  delay: number;
}

const FrameworkCard: React.FC<FrameworkCardProps> = ({
  title,
  description,
  icon,
  accentColor,
  delay
}) => {
  return (
    <AnimatedSection animation="fade-up" delay={delay}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full border-0 glass">
        <div className={`h-2 w-full ${accentColor}`} />
        <CardContent className="p-6">
          <div className={`p-3 rounded-full ${accentColor} w-12 h-12 flex items-center justify-center mb-4`}>
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
};

const AgenticFramework: React.FC = () => {
  const frameworkElements = [
    {
      title: "Autonomie",
      description: "KI-Agenten, die selbstständig komplexe Aufgaben erkennen, planen und ausführen können, ohne konstante menschliche Anleitung zu benötigen.",
      icon: <Brain className="w-5 h-5 text-white" />,
      accentColor: "bg-evoya-blue text-white",
      delay: 0
    },
    {
      title: "Interaktion",
      description: "Nahtlose Kommunikation zwischen mehreren Agenten, die zusammenarbeiten, um übergeordnete Ziele zu erreichen und Aufgaben zu koordinieren.",
      icon: <Network className="w-5 h-5 text-white" />,
      accentColor: "bg-evoya-teal text-white",
      delay: 100
    },
    {
      title: "Zielorientierung",
      description: "Agenten verfolgen definierte Ziele und passen ihre Strategien kontinuierlich an, um optimale Ergebnisse zu erzielen.",
      icon: <Target className="w-5 h-5 text-white" />,
      accentColor: "bg-evoya-green text-white",
      delay: 200
    },
    {
      title: "Prozesssteuerung",
      description: "Intelligente Workflows, die Aufgaben priorisieren, Ressourcen zuweisen und Prozesse optimieren, um maximale Effizienz zu gewährleisten.",
      icon: <Workflow className="w-5 h-5 text-white" />,
      accentColor: "bg-evoya-orange text-white",
      delay: 300
    },
    {
      title: "Modularität",
      description: "Flexible Bausteine, die je nach Anwendungsfall kombiniert und angepasst werden können, um maßgeschneiderte KI-Lösungen zu schaffen.",
      icon: <Component className="w-5 h-5 text-white" />,
      accentColor: "bg-evoya-lightBlue text-white",
      delay: 400
    },
    {
      title: "Adaptivität",
      description: "Kontinuierliches Lernen und Anpassung an neue Anforderungen, Daten und Feedback, um die Leistung stetig zu verbessern.",
      icon: <GitBranch className="w-5 h-5 text-white" />,
      accentColor: "bg-evoya-yellow text-gray-800",
      delay: 500
    },
  ];

  return (
    <section id="agentic-framework" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 -z-10"></div>
      <div className="section-container">
        <AnimatedSection className="text-center mb-12" animation="fade-up">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-evoya-blue/10 text-evoya-blue text-sm font-medium">
            Agentic Framework
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 max-w-3xl mx-auto">
            Die <span className="text-evoya-blue">Zukunft der KI</span> mit autonomen Agenten
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Unser Agentic Framework revolutioniert die Art, wie KI-Systeme arbeiten: Statt isolierter Tools 
            setzen wir auf intelligente, autonome Agenten, die miteinander kommunizieren und komplexe Aufgaben 
            eigenständig erledigen können.
          </p>
        </AnimatedSection>

        <div className="mb-16">
          <AnimatedSection animation="fade-up">
            <div className="relative rounded-xl overflow-hidden shadow-xl bg-white p-2 max-w-4xl mx-auto">
              <div className="aspect-[16/9] rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-8">
                <div className="grid grid-cols-3 gap-8 w-full max-w-3xl">
                  {/* Top row: core components */}
                  <div className="col-span-3 flex justify-between items-center">
                    <div className="w-20 h-20 rounded-full bg-evoya-blue flex items-center justify-center shadow-lg">
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                    <Separator className="flex-1 mx-4 h-1 bg-gray-700" />
                    <div className="w-20 h-20 rounded-full bg-evoya-teal flex items-center justify-center shadow-lg">
                      <Network className="w-10 h-10 text-white" />
                    </div>
                    <Separator className="flex-1 mx-4 h-1 bg-gray-700" />
                    <div className="w-20 h-20 rounded-full bg-evoya-green flex items-center justify-center shadow-lg">
                      <Target className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  {/* Connectors */}
                  <div className="col-span-3 flex justify-between">
                    <div className="w-1/3 flex justify-center">
                      <div className="h-16 w-1 bg-gray-700"></div>
                    </div>
                    <div className="w-1/3 flex justify-center">
                      <div className="h-16 w-1 bg-gray-700"></div>
                    </div>
                    <div className="w-1/3 flex justify-center">
                      <div className="h-16 w-1 bg-gray-700"></div>
                    </div>
                  </div>
                  
                  {/* Bottom row: supporting components */}
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-evoya-orange flex items-center justify-center shadow-lg">
                      <Workflow className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-evoya-lightBlue flex items-center justify-center shadow-lg">
                      <Component className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-evoya-yellow flex items-center justify-center shadow-lg">
                      <GitBranch className="w-8 h-8 text-gray-800" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-black/30 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
                Agentic Framework Visualisierung
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frameworkElements.map((element, index) => (
            <FrameworkCard
              key={index}
              title={element.title}
              description={element.description}
              icon={element.icon}
              accentColor={element.accentColor}
              delay={element.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgenticFramework;
