
import React from 'react';

interface BlurBackgroundProps {
  className?: string;
}

const BlurBackground: React.FC<BlurBackgroundProps> = ({ className }) => {
  return (
    <div className={`fixed inset-0 z-[-1] bg-noise opacity-30 pointer-events-none ${className}`}>
      <div className="absolute top-20 left-20 w-96 h-96 bg-evoya-navy/20 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-evoya-teal/20 rounded-full blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-evoya-orange/10 rounded-full blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default BlurBackground;
