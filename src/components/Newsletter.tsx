import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t, language } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: language === 'pt' ? "E-mail obrigatório" : "Email required",
        description: language === 'pt' ? "Por favor, insira seu e-mail." : "Please enter your email.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert({ email });

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: language === 'pt' ? "E-mail já cadastrado" : "Email already registered",
            description: language === 'pt' ? "Este e-mail já está inscrito em nossa newsletter." : "This email is already subscribed to our newsletter.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: language === 'pt' ? "Inscrição realizada!" : "Subscription successful!",
          description: language === 'pt' ? "Você receberá nossa newsletter semanal." : "You will receive our weekly newsletter.",
        });
        setEmail('');
      }

    } catch (error) {
      console.error('Erro ao inscrever newsletter:', error);
      toast({
        title: language === 'pt' ? "Erro na inscrição" : "Subscription error",
        description: language === 'pt' ? "Tente novamente em alguns instantes." : "Please try again in a few moments.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {language === 'pt' ? 'Fique por dentro do mercado' : 'Stay up to date with the market'}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t('newsletter.description')}
        </p>
        
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input 
              type="email" 
              placeholder={t('newsletter.email_placeholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1" 
              required
            />
            <Button 
              type="submit" 
              size="lg" 
              className="px-8"
              disabled={isSubmitting}
            >
              {isSubmitting 
                ? (language === 'pt' ? "Inscrevendo..." : "Subscribing...")
                : t('newsletter.subscribe')
              }
            </Button>
          </form>
          <p className="text-sm text-muted-foreground mt-4">
            {language === 'pt' 
              ? 'Enviamos conteúdo relevante, sem spam. Cancele a qualquer momento.'
              : 'We send relevant content, no spam. Cancel anytime.'
            }
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-primary mb-2">Newsletter</div>
            <p className="text-sm text-muted-foreground">
              {language === 'pt' 
                ? 'Um Panorama do resumo semanal do mercado de ativos tokenizados'
                : 'A panoramic overview of the weekly tokenized assets market summary'
              }
            </p>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-2">Research</div>
            <p className="text-sm text-muted-foreground">
              {language === 'pt'
                ? 'Análises completas sobre ativos tokenizados da equipe da Blockwise'
                : 'Complete analysis on tokenized assets from the Blockwise team'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;