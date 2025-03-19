import React from 'react';
import { BookText, User, Wrench, Brain, Computer, Database, Plus, Package, LayoutPanelTop } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

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
        <h3 className="text-xl font-bold text-evoya-blue mb-4">Das Agentic Framework</h3>
        <p className="text-gray-700 mb-4">
          Unser Agentic Framework bildet die Grundlage aller Evoya-Agenten. Es kombiniert sechs Kernkomponenten, 
          die zusammen einen leistungsfähigen KI-Agenten bilden, der komplexe Aufgaben intelligent bearbeiten kann.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-evoya-blue/5 p-4 rounded-lg">
            <h4 className="font-semibold text-evoya-blue mb-2">Instruktionen & Persona</h4>
            <p className="text-sm text-gray-600">
              Diese Komponenten bilden den "Charakter" des Agenten. Die Instruktionen definieren die Aufgabe und das Ziel,
              während die Persona bestimmt, wie der Agent kommuniziert und interagiert.
            </p>
          </div>
          <div className="bg-evoya-blue/5 p-4 rounded-lg">
            <h4 className="font-semibold text-evoya-blue mb-2">Sprachmodell & Wissen</h4>
            <p className="text-sm text-gray-600">
              Das Sprachmodell (LLM) ist das "Gehirn" des Agenten und nutzt spezialisiertes Wissen, um präzise 
              und kontextbezogene Lösungen für komplexe Aufgaben zu generieren.
            </p>
          </div>
          <div className="bg-evoya-blue/5 p-4 rounded-lg">
            <h4 className="font-semibold text-evoya-blue mb-2">Tools & Interface</h4>
            <p className="text-sm text-gray-600">
              Tools erweitern die Handlungsfähigkeit des Agenten, während das Interface die Kommunikation mit Menschen, 
              anderen Systemen oder APIs ermöglicht und so die praktische Anwendung sicherstellt.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const UseCasesExplanation: React.FC = () => {
  return (
    <AnimatedSection animation="fade-up" delay={400} className="mt-10">
      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
        <h3 className="text-xl font-bold text-evoya-blue mb-4">Einsatzmöglichkeiten des Frameworks</h3>
        <p className="text-gray-700 mb-6">
          Unser Agentic Framework kann je nach Anforderung unterschiedlich eingesetzt werden. Hier sind die zwei Hauptanwendungsfälle:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-evoya-blue/20 rounded-xl p-5 bg-gradient-to-br from-white to-evoya-blue/5">
            <div className="flex items-center mb-4">
              <Package className="w-8 h-8 text-evoya-blue mr-3" />
              <h4 className="text-lg font-bold text-evoya-blue">Workspace-Agenten</h4>
            </div>
            <p className="text-gray-700 mb-3">
              Diese Agenten sind direkt einsatzbereit und für spezifische Aufgaben optimiert:
            </p>
            <ul className="space-y-2 ml-2">
              <li className="flex">
                <span className="text-evoya-blue mr-2">•</span>
                <span className="text-gray-600">Sofort nutzbar ohne komplexe Konfiguration</span>
              </li>
              <li className="flex">
                <span className="text-evoya-blue mr-2">•</span>
                <span className="text-gray-600">Ideal für Texterstellung, Übersetzungen oder Analysen</span>
              </li>
              <li className="flex">
                <span className="text-evoya-blue mr-2">•</span>
                <span className="text-gray-600">Standardisierte Funktionen mit intuitiver Bedienung</span>
              </li>
              <li className="flex">
                <span className="text-evoya-blue mr-2">•</span>
                <span className="text-gray-600">Perfekt für tägliche Arbeitsabläufe und wiederkehrende Aufgaben</span>
              </li>
            </ul>
          </div>
          
          <div className="border border-evoya-orange/20 rounded-xl p-5 bg-gradient-to-br from-white to-evoya-orange/5">
            <div className="flex items-center mb-4">
              <LayoutPanelTop className="w-8 h-8 text-evoya-orange mr-3" />
              <h4 className="text-lg font-bold text-evoya-orange">Autonome Agenten & Prozesse</h4>
            </div>
            <p className="text-gray-700 mb-3">
              Diese fortschrittlichen Lösungen automatisieren komplexe Workflows:
            </p>
            <ul className="space-y-2 ml-2">
              <li className="flex">
                <span className="text-evoya-orange mr-2">•</span>
                <span className="text-gray-600">Individuell anpassbar an spezifische Geschäftsprozesse</span>
              </li>
              <li className="flex">
                <span className="text-evoya-orange mr-2">•</span>
                <span className="text-gray-600">Automatisieren mehrstufige Arbeitsabläufe end-to-end</span>
              </li>
              <li className="flex">
                <span className="text-evoya-orange mr-2">•</span>
                <span className="text-gray-600">Skalierbar je nach Anforderung und Komplexität</span>
              </li>
              <li className="flex">
                <span className="text-evoya-orange mr-2">•</span>
                <span className="text-gray-600">Integrierbar in bestehende Systeme und Infrastrukturen</span>
              </li>
            </ul>
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-3 max-w-3xl mx-auto">
            KI-Agenten für intelligente <span className="text-evoya-blue">Prozessoptimierung</span>
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto mb-2">
            KI-Agenten sind intelligente Softwareeinheiten, die eigenständig Aufgaben ausführen und komplexe Probleme lösen können.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Evoya-Agenten basieren auf einem durchdachten Framework, das es ihnen ermöglicht, 
            komplexe Aufgaben effizient zu lösen und nahtlos mit Menschen und anderen Systemen zu interagieren.
          </p>
        </AnimatedSection>

        <FrameworkExplanation />

        <AnimatedSection animation="fade-up" delay={300}>
          <div className="p-6 rounded-xl bg-white shadow-lg border border-gray-100">
            <div className="text-2xl font-bold text-evoya-blue mb-8 text-center">Aufbau des Agentic Frameworks</div>
            
            <div className="relative w-full max-w-4xl mx-auto p-4">
              <div className="flex justify-center gap-2 mb-10 relative">
                <div className="w-full max-w-[450px]">
                  <div className="bg-evoya-blue text-white p-5 rounded-xl flex flex-col items-center">
                    <BookText className="w-7 h-7 mb-2" />
                    <div className="font-medium">Instruktionen</div>
                  </div>
                </div>
                
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md border border-gray-200">
                  <Plus className="w-6 h-6 text-evoya-blue" />
                </div>
                
                <div className="w-full max-w-[450px]">
                  <div className="bg-evoya-blue text-white p-5 rounded-xl flex flex-col items-center">
                    <User className="w-7 h-7 mb-2" />
                    <div className="font-medium">Persona</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center" style={{top: '150px', height: '65px'}}>
                <div className="w-0.5 h-full bg-evoya-blue/70"></div>
                <div className="absolute top-0 w-2 h-2 rounded-full bg-evoya-blue"></div>
                <div className="absolute bottom-0 w-2 h-2 rounded-full bg-evoya-blue"></div>
              </div>
              
              <div className="flex justify-between mb-16 relative" style={{marginTop: "50px"}}>
                <div className="w-64">
                  <div className="bg-evoya-blue text-white p-5 rounded-xl flex flex-col items-center">
                    <Wrench className="w-7 h-7 mb-2" />
                    <div className="font-medium">Tools</div>
                  </div>
                </div>
                
                <div className="absolute left-1/2 top-16 transform -translate-x-1/2 -translate-y-1/2 w-64 flex items-center">
                  <div className="w-full h-0.5 bg-evoya-blue/70 relative">
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-evoya-blue"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-evoya-blue"></div>
                  </div>
                </div>
                
                <div className="w-64">
                  <div className="bg-evoya-orange text-white p-5 rounded-xl flex flex-col items-center">
                    <Brain className="w-7 h-7 mb-2" />
                    <div className="font-medium">Sprachmodell</div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mb-16 relative">
                <div className="w-64">
                  <div className="bg-evoya-blue text-white p-5 rounded-xl flex flex-col items-center">
                    <Computer className="w-7 h-7 mb-2" />
                    <div className="font-medium">Interface</div>
                  </div>
                </div>
                
                <div className="absolute right-[340px] top-8 w-[calc(100%-340px)] flex items-center">
                  <div className="w-full h-0.5 bg-evoya-blue/70 relative">
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-evoya-blue"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-evoya-blue"></div>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center" style={{top: '32px', height: '30px'}}>
                  <div className="w-0.5 h-full bg-evoya-blue/70"></div>
                  <div className="absolute top-0 w-2 h-2 rounded-full bg-evoya-blue"></div>
                  <div className="absolute bottom-0 w-2 h-2 rounded-full bg-evoya-blue"></div>
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center" style={{top: '330px', height: '50px'}}>
                <div className="w-0.5 h-full bg-evoya-blue/70"></div>
                <div className="absolute top-0 w-2 h-2 rounded-full bg-evoya-blue"></div>
                <div className="absolute bottom-0 w-2 h-2 rounded-full bg-evoya-blue"></div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-64">
                  <div className="bg-evoya-blue text-white p-5 rounded-xl flex flex-col items-center">
                    <Database className="w-7 h-7 mb-2" />
                    <div className="font-medium">Wissen</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <UseCasesExplanation />
      </div>
    </section>
  );
};

export default LLMAgentStructure;
