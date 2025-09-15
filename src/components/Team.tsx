import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Linkedin } from "lucide-react";
import lucasProfile from "@/assets/lucas-profile.jpg";
import pedroProfile from "@/assets/pedro-profile.jpg";
import joaoProfile from "@/assets/joao-profile.jpg";
import ricardoProfile from "@/assets/ricardo-profile.jpg";

const Team = () => {
  const { t, language } = useLanguage();
  
  const teamMembers = [
    {
      name: "Lucas Poli",
      role: language === 'pt' ? "Cofundador" : "Co-founder",
      specialization: "Compliance",
      description: language === 'pt' 
        ? "Especialista em compliance e regulamentação para mercados de capitais digitais."
        : "Specialist in compliance and regulation for digital capital markets.",
      image: lucasProfile,
      linkedin: "https://www.linkedin.com/in/lucas-poli1910/"
    },
    {
      name: "Pedro Ferraz", 
      role: language === 'pt' ? "Cofundador" : "Co-founder",
      specialization: language === 'pt' ? "Research, dados e inteligência de mercado" : "Research, data and market intelligence",
      description: language === 'pt'
        ? "Análise quantitativa e pesquisa de mercado para ativos tokenizados."
        : "Quantitative analysis and market research for tokenized assets.",
      image: pedroProfile,
      linkedin: "https://www.linkedin.com/in/pedro-ferrari-841865320/"
    },
    {
      name: "João Guilherme",
      role: language === 'pt' ? "Cofundador" : "Co-founder", 
      specialization: language === 'pt' ? "Relacionamento, institucional e parcerias" : "Relationships, institutional and partnerships",
      description: language === 'pt'
        ? "Desenvolvimento de relacionamentos estratégicos e parcerias institucionais."
        : "Development of strategic relationships and institutional partnerships.",
      image: joaoProfile,
      linkedin: "https://www.linkedin.com/in/jo%C3%A3o-guilherme-carvalho-de-souza-9aa73a31b/"
    },
    {
      name: "Ricardo",
      role: language === 'pt' ? "Fundador" : "Founder",
      specialization: language === 'pt' ? "Expansão e Relacionamentos" : "Expansion and Relationships", 
      description: language === 'pt'
        ? "Liderança estratégica e expansão de mercado da Blockwise Capital."
        : "Strategic leadership and market expansion at Blockwise Capital.",
      image: ricardoProfile,
      linkedin: "https://www.linkedin.com/in/ricardo-torrente-77b43033/"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('team.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('team.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -bottom-2 -right-2 bg-[#0077B5] text-white p-2 rounded-full hover:bg-[#005885] transition-colors transform translate-x-1/2"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-secondary font-medium mb-3">{member.specialization}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;