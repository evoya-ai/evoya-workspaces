
import React from 'react';
import { BookText, User, Wrench, Brain, Computer, Database, Plus, Package, LayoutPanelTop, Info } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import AgentComponent from './AgentComponent';
import AgentFrameworkDiagram from './AgentFrameworkDiagram';
import { Alert, AlertTitle, AlertDescription } from './ui/alert';

const FrameworkExplanation: React.FC = () => {
  return (
    <AnimatedSection animation="fade-up" delay={100} className="mb-10">
      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
        <h3 className="text-2xl font-bold text-evoya-blue mb-4">Das Agentic Framework</h3>
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
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Evoya-Agenten basieren auf einem durchdachten Framework, das es ihnen ermöglicht, 
            komplexe Aufgaben effizient zu lösen und nahtlos mit Menschen und anderen Systemen zu interagieren.
          </p>
        </AnimatedSection>

        <div className="mb-6">
          <AnimatedSection animation="fade-up" delay={50}>
            <Alert className="border border-evoya-lightBlue/30 bg-evoya-blue/5 shadow-sm rounded-lg p-4">
              <div className="flex items-start">
                <div className="bg-evoya-orange rounded-full p-1.5 shadow-sm">
                  <Info className="h-5 w-5 text-white" />
                </div>
                <div className="ml-3">
                  <AlertTitle className="text-evoya-navy font-semibold text-lg">Was sind KI-Agenten?</AlertTitle>
                  <AlertDescription className="text-gray-600 mt-1 text-base">
                    KI-Agenten sind intelligente Softwareeinheiten, die eigenständig Aufgaben ausführen und komplexe Probleme lösen können.
                  </AlertDescription>
                </div>
              </div>
            </Alert>
          </AnimatedSection>
        </div>

        <FrameworkExplanation />

        <AnimatedSection animation="fade-up" delay={300}>
          <div className="p-6 rounded-xl bg-white shadow-lg border border-gray-100">
            <div className="text-2xl font-bold text-evoya-blue mb-8 text-center">Aufbau des Agentic Frameworks</div>
            
            <AgentFrameworkDiagram />
          </div>
        </AnimatedSection>

        <UseCasesExplanation />
      </div>
    </section>
  );
};

export default LLMAgentStructure;
