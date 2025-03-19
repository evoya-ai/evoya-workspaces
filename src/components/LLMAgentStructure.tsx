
import React from 'react';
import { BookText, User, Wrench, Brain, Computer, Database } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Card, CardContent } from './ui/card';

interface AgentComponentProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  textColor: string;
  className?: string;
}

const AgentComponent: React.FC<AgentComponentProps> = ({ 
  title, 
  icon, 
  color, 
  textColor,
  className = '' 
}) => {
  return (
    <div className={`relative group ${className}`}>
      <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r from-evoya-blue/50 to-evoya-lightBlue/50 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      <div className={`flex items-center justify-center rounded-xl ${color} ${textColor} p-4 shadow-md transition-all duration-300 relative h-full min-h-24`}>
        <div className="flex flex-col items-center text-center">
          {icon}
          <span className="mt-2 font-medium">{title}</span>
        </div>
      </div>
    </div>
  );
};

const FrameworkExplanation: React.FC = () => {
  return (
    <AnimatedSection animation="fade-up" delay={100} className="mb-10">
      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
        <h3 className="text-xl font-bold text-evoya-blue mb-4">Was ist das Agentic Framework?</h3>
        <p className="text-gray-700 mb-4">
          Unser Agentic Framework revolutioniert die Art, wie KI-Systeme arbeiten: Statt isolierter Tools 
          setzen wir auf intelligente, autonome Agenten, die miteinander kommunizieren und komplexe Aufgaben 
          eigenständig erledigen können.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-evoya-blue/5 p-4 rounded-lg">
            <h4 className="font-semibold text-evoya-blue mb-2">Autonomie & Interaktion</h4>
            <p className="text-sm text-gray-600">
              KI-Agenten, die selbstständig komplexe Aufgaben erkennen, planen und ausführen können, während sie 
              nahtlos miteinander kommunizieren, um übergeordnete Ziele zu erreichen.
            </p>
          </div>
          <div className="bg-evoya-blue/5 p-4 rounded-lg">
            <h4 className="font-semibold text-evoya-blue mb-2">Zielorientierung & Prozesssteuerung</h4>
            <p className="text-sm text-gray-600">
              Agenten verfolgen definierte Ziele mit intelligenten Workflows, die Aufgaben priorisieren, 
              Ressourcen zuweisen und Prozesse optimieren.
            </p>
          </div>
          <div className="bg-evoya-blue/5 p-4 rounded-lg">
            <h4 className="font-semibold text-evoya-blue mb-2">Modularität</h4>
            <p className="text-sm text-gray-600">
              Flexible Bausteine, die je nach Anwendungsfall kombiniert und angepasst werden können, 
              um maßgeschneiderte KI-Lösungen zu schaffen.
            </p>
          </div>
          <div className="bg-evoya-blue/5 p-4 rounded-lg">
            <h4 className="font-semibold text-evoya-blue mb-2">Adaptivität</h4>
            <p className="text-sm text-gray-600">
              Kontinuierliches Lernen und Anpassung an neue Anforderungen, Daten und Feedback, 
              um die Leistung stetig zu verbessern.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const LLMAgentStructure: React.FC = () => {
  return (
    <section id="agentic-framework" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white -z-10"></div>
      <div className="section-container">
        <AnimatedSection className="text-center mb-12" animation="fade-up">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-evoya-blue/10 text-evoya-blue text-sm font-medium">
            Agentic Framework
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 max-w-3xl mx-auto">
            Die <span className="text-evoya-blue">Struktur</span> hinter modernen KI-Agenten
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Unsere KI-Agenten basieren auf einer klaren Architektur, die es ihnen ermöglicht, komplexe Aufgaben 
            effizient zu lösen und mit ihrer Umgebung zu interagieren.
          </p>
        </AnimatedSection>

        <FrameworkExplanation />

        <AnimatedSection animation="fade-up" delay={300}>
          <div className="p-6 rounded-xl bg-white shadow-lg border border-gray-100">
            <div className="text-2xl font-bold text-evoya-blue mb-8 text-center">Agentic Framework Struktur</div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Top row - Prompt Recipe */}
              <div className="md:col-span-3">
                <Card className="border border-evoya-blue/10 bg-evoya-blue/5 p-4 rounded-xl">
                  <CardContent className="p-2">
                    <div className="text-center mb-4 font-medium text-evoya-blue text-lg">Prompt Recipe</div>
                    <div className="grid grid-cols-2 gap-4">
                      <AgentComponent
                        title="Instructions"
                        icon={<BookText className="w-6 h-6" />}
                        color="bg-evoya-blue"
                        textColor="text-white"
                      />
                      <AgentComponent
                        title="Persona"
                        icon={<User className="w-6 h-6" />}
                        color="bg-evoya-blue"
                        textColor="text-white"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-6 mb-8 relative">
              {/* Connectors from Prompt Recipe to LLM */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10 w-0.5 h-10 bg-evoya-blue/70"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 rounded-full bg-evoya-blue"></div>
            
              {/* Left component - Tools */}
              <div className="md:col-span-1 flex justify-center">
                <AgentComponent
                  title="Tools"
                  icon={<Wrench className="w-6 h-6" />}
                  color="bg-evoya-blue"
                  textColor="text-white"
                  className="w-full md:w-auto"
                />
              </div>

              {/* Connector from Tools to LLM */}
              <div className="hidden md:flex items-center justify-center">
                <div className="w-full h-0.5 bg-evoya-blue/70 relative">
                  <div className="absolute right-0 w-2 h-2 rounded-full bg-evoya-blue"></div>
                  <div className="absolute left-0 w-2 h-2 rounded-full bg-evoya-blue"></div>
                </div>
              </div>

              {/* Center component - LLM */}
              <div className="md:col-span-1 flex justify-center">
                <AgentComponent
                  title="LLM"
                  icon={<Brain className="w-8 h-8" />}
                  color="bg-evoya-orange"
                  textColor="text-white"
                  className="w-full md:w-auto"
                />
              </div>

              {/* Connector from LLM to Interface */}
              <div className="hidden md:flex items-center justify-center">
                <div className="w-full h-0.5 bg-evoya-blue/70 relative">
                  <div className="absolute right-0 w-2 h-2 rounded-full bg-evoya-blue"></div>
                  <div className="absolute left-0 w-2 h-2 rounded-full bg-evoya-blue"></div>
                </div>
              </div>

              {/* Right component - Interface */}
              <div className="md:col-span-1 flex justify-center">
                <AgentComponent
                  title="Interface"
                  icon={<Computer className="w-6 h-6" />}
                  color="bg-evoya-blue"
                  textColor="text-white"
                  className="w-full md:w-auto"
                />
              </div>
            </div>

            {/* Connector from LLM to Knowledge */}
            <div className="relative h-10 mb-4">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-evoya-blue/70"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-2 h-2 rounded-full bg-evoya-blue"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-2 h-2 rounded-full bg-evoya-blue"></div>
            </div>

            {/* Bottom component - Knowledge */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-start-2 md:col-span-1 flex justify-center">
                <AgentComponent
                  title="Knowledge"
                  icon={<Database className="w-6 h-6" />}
                  color="bg-evoya-blue"
                  textColor="text-white"
                  className="w-full md:w-auto"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LLMAgentStructure;
