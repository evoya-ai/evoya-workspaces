
import React, { useState } from 'react';
import { Mail, Phone, ArrowRight, Check } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

const CallToAction: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    
    try {
      // FormSubmit verwendet hier die E-Mail als Endpunkt
      // Ihre E-Mail wird beim ersten Formular-Submit bestätigt
      const response = await fetch('https://formsubmit.co/your-email@example.com', {
        method: 'POST',
        body: new FormData(form),
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
        toast({
          title: "Nachricht gesendet",
          description: "Vielen Dank für Ihre Nachricht. Wir werden uns schnellstmöglich bei Ihnen melden.",
        });
      } else {
        throw new Error('Formular konnte nicht gesendet werden');
      }
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
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
              Kontakt
            </div>
            <h2 className="mb-6">
              Starten Sie Ihren Weg zur <span className="text-evoya-blue">KI-Innovation</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Vereinbaren Sie eine kostenlose Demo oder ein Beratungsgespräch. Unser Team hilft Ihnen dabei, 
              die ideale KI-Lösung für Ihr Unternehmen zu finden.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-evoya-orange/10 flex items-center justify-center mr-5 flex-shrink-0">
                  <Mail className="w-5 h-5 text-evoya-orange" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">hello@evoya.ai</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-evoya-orange/10 flex items-center justify-center mr-5 flex-shrink-0">
                  <Phone className="w-5 h-5 text-evoya-orange" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Telefon</h3>
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
                Demo vereinbaren
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="https://avaia.io/accounts/signup/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary"
              >
                Workspace testen
              </a>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={150} className="rounded-xl overflow-hidden">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6">Kontaktieren Sie uns</h3>
              
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-medium mb-2">Nachricht gesendet!</h4>
                  <p className="text-gray-600 mb-6">Vielen Dank für Ihre Nachricht. Wir werden uns schnellstmöglich bei Ihnen melden.</p>
                  <Button 
                    onClick={() => setIsSuccess(false)} 
                    variant="outline"
                  >
                    Neues Formular
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* FormSubmit benötigt diese Felder für Konfiguration */}
                  <input type="hidden" name="_subject" value="Neue Kontaktanfrage von der Webseite" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="text" name="_honey" style={{display: 'none'}} />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        Vorname
                      </label>
                      <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="Ihr Vorname"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Nachname
                      </label>
                      <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        placeholder="Ihr Nachname"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-Mail
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Ihre E-Mail-Adresse"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Unternehmen
                    </label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Ihr Unternehmen"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Nachricht
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Ihre Nachricht oder Anfrage"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-evoya-blue hover:bg-evoya-blue/90 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 flex justify-center items-center"
                    >
                      {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
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
