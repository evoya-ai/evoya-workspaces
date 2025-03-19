
import React from 'react';
import { BookText, User, Wrench, Brain, Computer, Database, Plus } from 'lucide-react';
import AgentComponent from './AgentComponent';

const AgentFrameworkDiagram: React.FC = () => {
  // Connection line length (adjust this single value to control all connections)
  const connectionLength = "80px";
  
  return (
    <div className="max-w-4xl mx-auto py-6 relative">
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
        <div className="relative">
          <AgentComponent 
            title="Sprachmodell" 
            icon={<Brain className="w-7 h-7" />} 
            color="bg-evoya-orange" 
          />
          
          {/* Top connection from Sprachmodell */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-full">
            <div className="flex flex-col items-center" style={{height: connectionLength}}>
              <div className="w-0.5 h-full bg-evoya-blue/70"></div>
              <div className="absolute top-0 w-2 h-2 rounded-full bg-evoya-blue"></div>
              <div className="absolute bottom-0 w-2 h-2 rounded-full bg-evoya-blue"></div>
            </div>
          </div>
          
          {/* Left connection from Sprachmodell */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full">
            <div className="flex items-center" style={{width: connectionLength}}>
              <div className="w-full h-0.5 bg-evoya-blue/70"></div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-evoya-blue"></div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-evoya-blue"></div>
            </div>
          </div>
          
          {/* Right connection from Sprachmodell */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full">
            <div className="flex items-center" style={{width: connectionLength}}>
              <div className="w-full h-0.5 bg-evoya-blue/70"></div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-evoya-blue"></div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-evoya-blue"></div>
            </div>
          </div>
          
          {/* Bottom connection from Sprachmodell */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full">
            <div className="flex flex-col items-center" style={{height: connectionLength}}>
              <div className="w-0.5 h-full bg-evoya-blue/70"></div>
              <div className="absolute top-0 w-2 h-2 rounded-full bg-evoya-blue"></div>
              <div className="absolute bottom-0 w-2 h-2 rounded-full bg-evoya-blue"></div>
            </div>
          </div>
        </div>
        
        {/* Right: Interface */}
        <AgentComponent 
          title="Interface" 
          icon={<Computer className="w-7 h-7" />} 
          color="bg-evoya-blue" 
        />
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
