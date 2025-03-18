
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
  className?: string;
  iconColor?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  delay = 0,
  className = '',
  iconColor = 'text-evoya-blue',
}) => {
  return (
    <div 
      className={`p-6 rounded-xl transition-all duration-300 hover:shadow-lg ${className} animate-on-scroll`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="feature-icon-container bg-gradient-to-br from-gray-50 to-gray-100">
        <Icon className={`w-7 h-7 ${iconColor}`} />
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
