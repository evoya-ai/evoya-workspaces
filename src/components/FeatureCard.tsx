
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
      className={`p-6 rounded-xl transition-all duration-300 ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm">
        <Icon className={`w-7 h-7 ${iconColor}`} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
