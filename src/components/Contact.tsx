import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    serviceArea: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t, language } = useLanguage();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service_area: formData.serviceArea,
          message: formData.message
        });

      if (error) throw error;

      toast({
        title: language === 'pt' ? "Mensagem enviada!" : "Message sent!",
        description: language === 'pt' ? "Entraremos em contato em breve." : "We will get in touch soon.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        serviceArea: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: language === 'pt' ? "Erro ao enviar mensagem" : "Error sending message",
        description: language === 'pt' ? "Tente novamente em alguns instantes." : "Please try again in a few moments.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = language === 'pt' 
    ? [
        { value: "tokenizacao-ativos", label: "Tokenização de ativos" },
        { value: "ecm-equity", label: "ECM - Equity tokens" },
        { value: "dcm-debt", label: "DCM - Debt tokens" },
        { value: "compliance", label: "Compliance regulatório" },
        { value: "educacao", label: "Educação executiva" },
        { value: "research", label: "Reports & Newsletter" }
      ]
    : [
        { value: "tokenizacao-ativos", label: "Asset tokenization" },
        { value: "ecm-equity", label: "ECM - Equity tokens" },
        { value: "dcm-debt", label: "DCM - Debt tokens" },
        { value: "compliance", label: "Regulatory compliance" },
        { value: "educacao", label: "Executive education" },
        { value: "research", label: "Reports & Newsletter" }
      ];

  const interestAreas = language === 'pt'
    ? ["Tokenização de ativos", "ECM - Equity tokens", "DCM - Debt tokens", "Compliance regulatório", "Educação executiva", "Reports & Newsletter"]
    : ["Asset tokenization", "ECM - Equity tokens", "DCM - Debt tokens", "Regulatory compliance", "Executive education", "Reports & Newsletter"];

  return (
    <section className="py-20 bg-dark-bg text-dark-foreground">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'pt' 
              ? 'Vamos conversar sobre seu projeto'
              : "Let's talk about your project"
            }
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Card className="bg-card/10 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">
                  {language === 'pt' ? 'Fale com nossa equipe' : 'Talk to our team'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input 
                      placeholder={t('contact.name_placeholder')}
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="bg-transparent border-gray-600 text-white placeholder:text-gray-400" 
                    />
                    <Input 
                      placeholder={t('contact.email_placeholder')}
                      type="email" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="bg-transparent border-gray-600 text-white placeholder:text-gray-400" 
                    />
                  </div>
                  <Input 
                    placeholder={language === 'pt' ? 'Empresa' : 'Company'}
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="bg-transparent border-gray-600 text-white placeholder:text-gray-400" 
                  />
                  <Select value={formData.serviceArea} onValueChange={(value) => handleInputChange('serviceArea', value)}>
                    <SelectTrigger className="bg-transparent border-gray-600 text-white">
                      <SelectValue placeholder={language === 'pt' ? "Área de serviços" : "Service area"} />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Textarea 
                    placeholder={t('contact.message_placeholder')}
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-transparent border-gray-600 text-white placeholder:text-gray-400" 
                  />
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-lg py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting 
                      ? (language === 'pt' ? "Enviando..." : "Sending...")
                      : (language === 'pt' ? "Quero falar com a Blockwise" : "I want to talk to Blockwise")
                    }
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">
                {language === 'pt' ? 'Nossos Contatos' : 'Our Contacts'}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <p className="text-gray-300">contato@blockwisecapital.com.br</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <a href="https://www.linkedin.com/company/blockwise-cap/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">Blockwise Capital</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">
                {language === 'pt' ? 'Áreas de Interesse' : 'Areas of Interest'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {interestAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm text-gray-300">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;