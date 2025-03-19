
import React from 'react';
import { BookText, User, Wrench, Brain, Computer, Database, Plus } from 'lucide-react';
import AgentComponent from './AgentComponent';

const AgentFrameworkDiagram: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-6">
      {/* Top row: Instruktionen + Persona */}
      <div className="grid grid-cols-2 gap-4 mb-16 relative">
        <AgentComponent 
          title="Instruktionen" 
          icon={<BookText className="w-7 h-7" />} 
          color="bg-evoya-blue" 
        />
        
        <AgentComponent 
          title="Persona" 
          icon={<User className="w-7 h-7" />} 
          color="bg-evoya-blue" 
        />
        
        {/* Plus icon between Instruktionen and Persona */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md border border-gray-200">
          <Plus className="w-5 h-5 text-evoya-blue" />
        </div>
        
        {/* Vertical line connecting to Sprachmodell */}
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 flex flex-col items-center" style={{height: '40px'}}>
          <div className="w-0.5 h-full bg-evoya-blue/70"></div>
          <div className="absolute top-0 w-2 h-2 rounded-full bg-evoya-blue"></div>
          <div className="absolute bottom-0 w-2 h-2 rounded-full bg-evoya-blue"></div>
        </div>
      </div>
      
      {/* Middle row: Tools + Sprachmodell + Interface */}
      <div className="grid grid-cols-3 gap-4 mb-16 relative">
        {/* Left: Tools */}
        <AgentComponent 
          title="Tools" 
          icon={<Wrench className="w-7 h-7" />} 
          color="bg-evoya-blue" 
        />
        
        {/* Center: Sprachmodell */}
        <AgentComponent 
          title="Sprachmodell" 
          icon={<Brain className="w-7 h-7" />} 
          color="bg-evoya-orange" 
        />
        
        {/* Right: Interface */}
        <AgentComponent 
          title="Interface" 
          icon={<Computer className="w-7 h-7" />} 
          color="bg-evoya-blue" 
        />
        
        {/* Horizontal connecting lines */}
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
          <div className="w-full h-0.5 bg-evoya-blue/70"></div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-evoya-blue"></div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-evoya-blue"></div>
        </div>
        
        {/* Vertical line connecting to Wissen */}
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 flex flex-col items-center" style={{height: '40px'}}>
          <div className="w-0.5 h-full bg-evoya-blue/70"></div>
          <div className="absolute top-0 w-2 h-2 rounded-full bg-evoya-blue"></div>
          <div className="absolute bottom-0 w-2 h-2 rounded-full bg-evoya-blue"></div>
        </div>
      </div>
      
      {/* Bottom row: Wissen */}
      <div className="flex justify-center">
        <div className="w-64">
          <AgentComponent 
            title="Wissen" 
            icon={<Database className="w-7 h-7" />} 
            color="bg-evoya-blue" 
          />
        </div>
      </div>
    </div>
  );
};

export default AgentFrameworkDiagram;
