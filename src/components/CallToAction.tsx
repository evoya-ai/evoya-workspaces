
import React, { useState } from 'react';
import { Mail, Phone, ArrowRight, Check } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '../contexts/LanguageContext';
import { translate } from '../utils/translations';

const CallToAction: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const { language } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    
    try {
      // FormSubmit verwendet hier die E-Mail als Endpunkt
      // Ihre E-Mail wird beim ersten Formular-Submit bestätigt
      const response = await fetch('https://formsubmit.co/s.chareonbood@evoya.ai', {
        method: 'POST',
        body: new FormData(form),
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
        toast({
          title: language === 'de' ? "Nachricht gesendet" : "Message Sent",
          description: language === 'de' 
            ? "Vielen Dank für Ihre Nachricht. Wir werden uns schnellstmöglich bei Ihnen melden."
            : "Thank you for your message. We will get back to you as soon as possible.",
        });
      } else {
        throw new Error(language === 'de' ? 'Formular konnte nicht gesendet werden' : 'Form could not be sent');
      }
    } catch (error) {
      toast({
        title: language === 'de' ? "Fehler" : "Error",
        description: language === 'de'
          ? "Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."
          : "An error occurred while sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection animation="fade-up" className="lg:pr-12">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-evoya-blue/10 text-evoya-blue text-sm font-medium">
              {translate('contact_badge', language)}
            </div>
            <h2 className="mb-6">
              {translate('contact_title', language)} <span className="text-evoya-blue">{translate('contact_title_colored', language)}</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {translate('contact_description', language)}
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-evoya-orange/10 flex items-center justify-center mr-5 flex-shrink-0">
                  <Mail className="w-5 h-5 text-evoya-orange" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">{translate('contact_email', language)}</h3>
                  <p className="text-gray-600">hello@evoya.ai</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-evoya-orange/10 flex items-center justify-center mr-5 flex-shrink-0">
                  <Phone className="w-5 h-5 text-evoya-orange" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">{translate('contact_phone', language)}</h3>
                  <p className="text-gray-600">+41 44 520 16 48</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://tidycal.com/evoya/erstgespraech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                {translate('contact_schedule_demo', language)}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="https://avaia.io/accounts/signup/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary"
              >
                {translate('contact_test_workspace', language)}
              </a>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={150} className="rounded-xl overflow-hidden">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6">{translate('contact_us', language)}</h3>
              
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-medium mb-2">{translate('contact_success_title', language)}</h4>
                  <p className="text-gray-600 mb-6">{translate('contact_success_message', language)}</p>
                  <Button 
                    onClick={() => setIsSuccess(false)} 
                    variant="outline"
                  >
                    {translate('contact_new_form', language)}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* FormSubmit benötigt diese Felder für Konfiguration */}
                  <input type="hidden" name="_subject" value={language === 'de' ? "Neue Kontaktanfrage von der Webseite" : "New contact request from the website"} />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="text" name="_honey" style={{display: 'none'}} />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        {translate('contact_first_name', language)}
                      </label>
                      <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        placeholder={translate('contact_your_first_name', language)}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        {translate('contact_last_name', language)}
                      </label>
                      <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        placeholder={translate('contact_your_last_name', language)}
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {translate('contact_email', language)}
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder={translate('contact_your_email', language)}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      {translate('contact_company', language)}
                    </label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      placeholder={translate('contact_your_company', language)}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {translate('contact_message', language)}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder={translate('contact_your_message', language)}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-evoya-blue hover:bg-evoya-blue/90 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 flex justify-center items-center"
                    >
                      {isSubmitting ? translate('contact_sending', language) : translate('contact_send', language)}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
