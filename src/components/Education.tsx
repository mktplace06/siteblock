import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Education = () => {
  const { t, language } = useLanguage();
  
  return (
    <section className="py-20 bg-dark-bg text-dark-foreground">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('education.title')}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t('education.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card/10 border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="text-xl text-primary">
                {language === 'pt' ? 'Cursos & Workshops' : 'Courses & Workshops'}
              </CardTitle>
              <CardDescription className="text-gray-300">
                {language === 'pt' 
                  ? '"Tokenização na prática para Empresários e Diretores"'
                  : '"Tokenization in Practice for Entrepreneurs and Directors"'
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-300">
                {(language === 'pt' 
                  ? ['Fundamentos da tokenização', 'Aspectos regulatórios e compliance', 'Casos práticos e implementação', 'Networking com especialistas']
                  : ['Tokenization fundamentals', 'Regulatory and compliance aspects', 'Practical cases and implementation', 'Networking with specialists']
                ).map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-card/10 border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Research & Newsletter</CardTitle>
              <CardDescription className="text-gray-300">
                {language === 'pt'
                  ? 'Relatórios, radar trimestral e curadoria semanal (Brasil/EUA)'
                  : 'Reports, quarterly radar and weekly curation (Brazil/USA)'
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-300">
                {(language === 'pt'
                  ? ['Relatórios trimestrais de mercado', 'Newsletter semanal com curadoria', 'Análises de tendências Brasil/EUA', 'Insights proprietários do setor']
                  : ['Quarterly market reports', 'Weekly curated newsletter', 'Brazil/USA trend analysis', 'Proprietary sector insights']
                ).map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Button size="lg" className="text-lg px-8 py-6">
            {language === 'pt' ? 'Quero Receber Conteúdo' : 'I Want to Receive Content'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Education;