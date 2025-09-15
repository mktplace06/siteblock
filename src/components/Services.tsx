import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t, language } = useLanguage();
  
  const services = [
    {
      title: t('services.ecm.title'),
      description: t('services.ecm.desc'),
      features: language === 'pt' 
        ? ["Estruturação regulatória", "Due diligence", "Precificação e distribuição"]
        : ["Regulatory structuring", "Due diligence", "Pricing and distribution"]
    },
    {
      title: t('services.dcm.title'),
      description: t('services.dcm.desc'), 
      features: language === 'pt'
        ? ["Estruturação de FIDCs", "Tokenização de recebíveis", "Rating e análise de crédito"]
        : ["FIDC structuring", "Receivables tokenization", "Rating and credit analysis"]
    },
    {
      title: t('services.advisory.title'),
      description: t('services.advisory.desc'),
      features: language === 'pt'
        ? ["Compliance e regulamentação", "Estratégia de tokenização", "Estruturação jurídica"]
        : ["Compliance and regulation", "Tokenization strategy", "Legal structuring"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;