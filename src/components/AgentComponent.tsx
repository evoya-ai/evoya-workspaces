
import React from 'react';

interface AgentComponentProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  textColor?: string;
  className?: string;
}

const AgentComponent: React.FC<AgentComponentProps> = ({ 
  title, 
  icon, 
  color, 
  textColor = "text-white",
  className = '' 
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className={`flex items-center justify-center rounded-xl ${color} ${textColor} p-5 shadow-md h-full`}>
        <div className="flex flex-col items-center text-center">
          {icon}
          <span className="mt-2 font-medium">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default AgentComponent;
