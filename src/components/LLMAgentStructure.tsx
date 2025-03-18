
import React from 'react';
import { BookText, User, Wrench, Brain, Computer, Database } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Card, CardContent } from './ui/card';

interface AgentComponentProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  textColor: string;
  type: 'mandatory' | 'optional';
  className?: string;
}

const AgentComponent: React.FC<AgentComponentProps> = ({ 
  title, 
  icon, 
  color, 
  textColor, 
  type,
  className = '' 
}) => {
  const borderColor = type === 'mandatory' ? 'border-evoya-orange' : 'border-evoya-blue';
  
  return (
    <div className={`relative group ${className}`}>
      <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r ${type === 'mandatory' ? 'from-evoya-orange/50 to-evoya-yellow/50' : 'from-evoya-blue/50 to-evoya-lightBlue/50'} blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      <div className={`flex items-center justify-center rounded-xl ${color} ${textColor} p-4 shadow-md transition-all duration-300 relative h-full min-h-24`}>
        <div className="flex flex-col items-center text-center">
          {icon}
          <span className="mt-2 font-medium">{title}</span>
        </div>
      </div>
    </div>
  );
};

const ComponentLegend: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
      <div className="flex items-center">
        <div className="w-4 h-4 rounded-full bg-evoya-orange mr-2"></div>
        <span className="text-sm font-medium">Mandatory Component</span>
      </div>
      <div className="flex items-center">
        <div className="w-4 h-4 rounded-full bg-evoya-blue mr-2"></div>
        <span className="text-sm font-medium">Optional Component</span>
      </div>
    </div>
  );
};

const DescriptionItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-start mb-6">
    <div className="mt-1 mr-4 text-evoya-orange">
      <div className="w-6 h-6 flex items-center justify-center">
        <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-[16px] border-r-evoya-orange"></div>
      </div>
    </div>
    <div className="flex-1">
      <p className="text-gray-700">{children}</p>
    </div>
  </div>
);

const Connector: React.FC<{ type: 'horizontal' | 'vertical' | 'corner-down' }> = ({ type }) => {
  if (type === 'horizontal') {
    return (
      <div className="flex items-center justify-center w-full">
        <div className="w-full h-0.5 bg-red-500"></div>
        <div className="absolute w-2 h-2 bg-red-500 rounded-full"></div>
      </div>
    );
  } else if (type === 'vertical') {
    return (
      <div className="flex flex-col items-center h-full">
        <div className="w-0.5 h-full bg-red-500"></div>
        <div className="absolute w-2 h-2 bg-red-500 rounded-full"></div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center h-full relative">
        <div className="w-0.5 h-1/2 bg-red-500 absolute top-0"></div>
        <div className="w-full h-0.5 bg-red-500 absolute bottom-1/2"></div>
        <div className="absolute w-2 h-2 bg-red-500 rounded-full top-1/2 -translate-y-1/2"></div>
      </div>
    );
  }
};

const LLMAgentStructure: React.FC = () => {
  return (
    <section id="llm-agent-structure" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white -z-10"></div>
      <div className="section-container">
        <AnimatedSection className="text-center mb-12" animation="fade-up">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-evoya-blue/10 text-evoya-blue text-sm font-medium">
            LLM Agent Structure
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 max-w-3xl mx-auto">
            Die <span className="text-evoya-blue">Struktur</span> hinter modernen KI-Agenten
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Unsere KI-Agenten basieren auf einer klaren Architektur, die es ihnen ermöglicht, komplexe Aufgaben 
            effizient zu lösen und mit ihrer Umgebung zu interagieren.
          </p>
        </AnimatedSection>

        <ComponentLegend />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <AnimatedSection animation="fade-up" delay={200} className="lg:col-span-1">
            <div className="space-y-6">
              <DescriptionItem>
                <span className="font-medium">Prompt Recipe</span> guides how the agent 
                will proceed with the task and how to process the output
              </DescriptionItem>
              <DescriptionItem>
                Agent must generally interface with a Human, another agent or an API
              </DescriptionItem>
              <DescriptionItem>
                Agent has access to specific domain knowledge and tools
              </DescriptionItem>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300} className="lg:col-span-2">
            <div className="p-4 sm:p-6 rounded-xl bg-white shadow-lg">
              <div className="text-2xl font-bold text-evoya-blue mb-6">Typical LLM Agent Structure</div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Top row - Prompt Recipe */}
                <div className="md:col-span-3">
                  <Card className="border border-gray-200 bg-gray-50/50 p-3 rounded-xl">
                    <CardContent className="p-2">
                      <div className="text-center mb-3 font-medium text-gray-600">Prompt Recipe</div>
                      <div className="grid grid-cols-2 gap-4">
                        <AgentComponent
                          title="Instructions"
                          icon={<BookText className="w-6 h-6" />}
                          color="bg-evoya-orange"
                          textColor="text-white"
                          type="mandatory"
                        />
                        <AgentComponent
                          title="Persona"
                          icon={<User className="w-6 h-6" />}
                          color="bg-evoya-blue"
                          textColor="text-white"
                          type="optional"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-6 mb-8 relative">
                {/* Connectors from Prompt Recipe to LLM */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10 w-0.5 h-10 bg-red-500"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 rounded-full bg-red-500"></div>
              
                {/* Left component - Tools */}
                <div className="md:col-span-1 flex justify-center">
                  <AgentComponent
                    title="Tools"
                    icon={<Wrench className="w-6 h-6" />}
                    color="bg-evoya-blue"
                    textColor="text-white"
                    type="optional"
                    className="w-full md:w-auto"
                  />
                </div>

                {/* Connector from Tools to LLM */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-full h-0.5 bg-red-500 relative">
                    <div className="absolute right-0 w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="absolute left-0 w-2 h-2 rounded-full bg-red-500"></div>
                  </div>
                </div>

                {/* Center component - LLM */}
                <div className="md:col-span-1 flex justify-center">
                  <AgentComponent
                    title="LLM"
                    icon={<Brain className="w-8 h-8" />}
                    color="bg-evoya-orange"
                    textColor="text-white"
                    type="mandatory"
                    className="w-full md:w-auto"
                  />
                </div>

                {/* Connector from LLM to Interface */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-full h-0.5 bg-red-500 relative">
                    <div className="absolute right-0 w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="absolute left-0 w-2 h-2 rounded-full bg-red-500"></div>
                  </div>
                </div>

                {/* Right component - Interface */}
                <div className="md:col-span-1 flex justify-center">
                  <AgentComponent
                    title="Interface"
                    icon={<Computer className="w-6 h-6" />}
                    color="bg-evoya-orange"
                    textColor="text-white"
                    type="mandatory"
                    className="w-full md:w-auto"
                  />
                </div>
              </div>

              {/* Connector from LLM to Knowledge */}
              <div className="relative h-10 mb-4">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-red-500"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-2 h-2 rounded-full bg-red-500"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-2 h-2 rounded-full bg-red-500"></div>
              </div>

              {/* Bottom component - Knowledge */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-start-2 md:col-span-1 flex justify-center">
                  <AgentComponent
                    title="Knowledge"
                    icon={<Database className="w-6 h-6" />}
                    color="bg-evoya-blue"
                    textColor="text-white"
                    type="optional"
                    className="w-full md:w-auto"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default LLMAgentStructure;
