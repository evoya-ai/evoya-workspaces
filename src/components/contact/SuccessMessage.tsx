
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../ui/button';
import { useLanguage } from '../../contexts/LanguageContext';
import { translate } from '../../utils/translations';

interface SuccessMessageProps {
  onReset: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ onReset }) => {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
        <Check className="h-8 w-8 text-green-600" />
      </div>
      <h4 className="text-xl font-medium mb-2">{translate('contact_success_title', language)}</h4>
      <p className="text-gray-600 mb-6">{translate('contact_success_message', language)}</p>
      <Button 
        onClick={onReset} 
        variant="outline"
      >
        {translate('contact_new_form', language)}
      </Button>
    </div>
  );
};

export default SuccessMessage;
