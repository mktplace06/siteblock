import { Award, Handshake, Target, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Values = () => {
  const { t } = useLanguage();
  const values = [
    {
      icon: Award,
      title: t('values.specialization.title'),
      description: t('values.specialization.desc')
    },
    {
      icon: Handshake,
      title: t('values.relationship.title'), 
      description: t('values.relationship.desc')
    },
    {
      icon: Target,
      title: t('values.quality.title'),
      description: t('values.quality.desc')
    },
    {
      icon: TrendingUp,
      title: t('values.discipline.title'),
      description: t('values.discipline.desc')
    }
  ];

  return (
    <section id="values" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {t('values.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('values.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-card p-8 rounded-lg shadow-sm border group hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;