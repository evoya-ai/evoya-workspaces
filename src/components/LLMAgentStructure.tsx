
import React from 'react';
import { BookText, User, Wrench, Brain, Computer, Database, Plus, Package, LayoutPanelTop, Info } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import AgentComponent from './AgentComponent';
import AgentFrameworkDiagram from './AgentFrameworkDiagram';
import { Alert, AlertTitle, AlertDescription } from './ui/alert';
import { useLanguage } from '../contexts/LanguageContext';
import { translate } from '../utils/translations';

const FrameworkExplanation: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <AnimatedSection animation="fade-up" delay={100} className="mb-10">
      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
        <h3 className="text-2xl font-bold text-evoya-blue mb-4">{translate('agent_framework_title', language)}</h3>
        <p className="text-gray-700 mb-4">
          {translate('agent_framework_desc', language)}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-evoya-blue/5 p-4 rounded-lg">
            <h4 className="font-semibold text-evoya-blue mb-2">{translate('agent_instructions', language)}</h4>
            <p className="text-sm text-gray-600">
              {translate('agent_instructions_desc', language)}
            </p>
          </div>
          <div className="bg-evoya-blue/5 p-4 rounded-lg">
            <h4 className="font-semibold text-evoya-blue mb-2">{translate('agent_model', language)}</h4>
            <p className="text-sm text-gray-600">
              {translate('agent_model_desc', language)}
            </p>
          </div>
          <div className="bg-evoya-blue/5 p-4 rounded-lg">
            <h4 className="font-semibold text-evoya-blue mb-2">{translate('agent_tools', language)}</h4>
            <p className="text-sm text-gray-600">
              {translate('agent_tools_desc', language)}
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const UseCasesExplanation: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <AnimatedSection animation="fade-up" delay={400} className="mt-10">
      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
        <h3 className="text-xl font-bold text-evoya-blue mb-4">{translate('agent_usecases', language)}</h3>
        <p className="text-gray-700 mb-6">
          {translate('agent_usecases_desc', language)}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-evoya-blue/20 rounded-xl p-5 bg-gradient-to-br from-white to-evoya-blue/5">
            <div className="flex items-center mb-4">
              <Package className="w-8 h-8 text-evoya-blue mr-3" />
              <h4 className="text-lg font-bold text-evoya-blue">{translate('agent_workspace', language)}</h4>
            </div>
            <p className="text-gray-700 mb-3">
              {translate('agent_workspace_desc', language)}
            </p>
            <ul className="space-y-2 ml-2">
              <li className="flex">
                <span className="text-evoya-blue mr-2">•</span>
                <span className="text-gray-600">{translate('agent_workspace_bullet1', language)}</span>
              </li>
              <li className="flex">
                <span className="text-evoya-blue mr-2">•</span>
                <span className="text-gray-600">{translate('agent_workspace_bullet2', language)}</span>
              </li>
              <li className="flex">
                <span className="text-evoya-blue mr-2">•</span>
                <span className="text-gray-600">{translate('agent_workspace_bullet3', language)}</span>
              </li>
              <li className="flex">
                <span className="text-evoya-blue mr-2">•</span>
                <span className="text-gray-600">{translate('agent_workspace_bullet4', language)}</span>
              </li>
            </ul>
          </div>
          
          <div className="border border-evoya-orange/20 rounded-xl p-5 bg-gradient-to-br from-white to-evoya-orange/5">
            <div className="flex items-center mb-4">
              <LayoutPanelTop className="w-8 h-8 text-evoya-orange mr-3" />
              <h4 className="text-lg font-bold text-evoya-orange">{translate('agent_autonomous', language)}</h4>
            </div>
            <p className="text-gray-700 mb-3">
              {translate('agent_autonomous_desc', language)}
            </p>
            <ul className="space-y-2 ml-2">
              <li className="flex">
                <span className="text-evoya-orange mr-2">•</span>
                <span className="text-gray-600">{translate('agent_autonomous_bullet1', language)}</span>
              </li>
              <li className="flex">
                <span className="text-evoya-orange mr-2">•</span>
                <span className="text-gray-600">{translate('agent_autonomous_bullet2', language)}</span>
              </li>
              <li className="flex">
                <span className="text-evoya-orange mr-2">•</span>
                <span className="text-gray-600">{translate('agent_autonomous_bullet3', language)}</span>
              </li>
              <li className="flex">
                <span className="text-evoya-orange mr-2">•</span>
                <span className="text-gray-600">{translate('agent_autonomous_bullet4', language)}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const LLMAgentStructure: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <section id="agentic-framework" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white -z-10"></div>
      <div className="section-container">
        <AnimatedSection className="text-center mb-12" animation="fade-up">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-evoya-blue/10 text-evoya-blue text-sm font-medium">
            {translate('agent_badge', language)}
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-3 max-w-3xl mx-auto">
            {translate('agent_title', language)} <span className="text-evoya-blue">{translate('agent_title_colored', language)}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {translate('agent_description', language)}
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
                  <AlertTitle className="text-evoya-navy font-semibold text-lg">{translate('agent_what_are', language)}</AlertTitle>
                  <AlertDescription className="text-gray-600 mt-1 text-base">
                    {translate('agent_what_are_desc', language)}
                  </AlertDescription>
                </div>
              </div>
            </Alert>
          </AnimatedSection>
        </div>

        <FrameworkExplanation />

        <AnimatedSection animation="fade-up" delay={300}>
          <div className="p-6 rounded-xl bg-white shadow-lg border border-gray-100">
            <div className="text-2xl font-bold text-evoya-blue mb-8 text-center">{translate('agent_structure', language)}</div>
            
            <AgentFrameworkDiagram />
          </div>
        </AnimatedSection>

        <UseCasesExplanation />
      </div>
    </section>
  );
};

export default LLMAgentStructure;
