import React, { createContext, useContext, useState } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    // Header
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.education': 'Educação',
    'nav.team': 'Equipe',
    'nav.values': 'Valores',
    'nav.research': 'Research',
    'nav.contact': 'Contato',
    'nav.newsletter': 'Newsletter',
    'nav.talk_to_us': 'Falar Conosco',
    
    // Hero
    'hero.title': 'O Futuro do Mercado de Capitais, hoje.',
    'hero.newsletter_btn': 'Assinar Newsletter',
    'hero.contact_btn': 'Falar com a Blockwise',
    
    // About
    'about.title': 'Quem Somos',
    'about.p1': 'A Blockwise Capital é uma boutique de investimentos especializada em ECM (Equity Capital Markets) e DCM (Debt Capital Markets) de ativos tokenizados (RWAs).',
    'about.p2': 'Conectamos empresas que buscam captar capital com investidores que procuram oportunidades no mercado digital, oferecendo expertise em regulamentação, estruturação jurídica e assessoria financeira especializada.',
    'about.p3': 'Nossa atuação independente combina pesquisa proprietária, rede estratégica e know-how regulatório para entregar soluções completas no ecossistema de tokenização.',
    
    // Values
    'values.title': 'Nossos Valores',
    'values.subtitle': 'Os princípios que guiam nossa atuação no mercado',
    'values.specialization.title': 'Alto Nível de Especialização',
    'values.specialization.desc': 'Aconselhamos nossos clientes exclusivamente em serviços especializados de Fusões e Aquisições e Levantamento de Capital.',
    'values.relationship.title': 'Valorização do Relacionamento',
    'values.relationship.desc': 'Buscamos um alinhamento total com os nossos clientes e nunca assumimos uma posição de conflito de interesses; Não investimos, não concedemos empréstimos, não temos outros produtos para vender, dispersar nosso foco ou gerar algum conflito de interesse.',
    'values.quality.title': 'Qualidade dos Serviços',
    'values.quality.desc': 'Prezamos pela execução meticulosa dos projetos, agindo com empenho e desconforto, sempre com o envolvimento do nível sênior.',
    'values.discipline.title': 'Disciplina na Busca de Resultados',
    'values.discipline.desc': 'Trabalhamos duro, com foco e disciplina. Não aceitamos nada menos do que o melhor resultado.',
    
     // Services
     'services.title': 'Nossos Serviços',
     'services.subtitle': 'Estruturamos soluções completas para tokenização de ativos',
     'services.ecm.title': 'ECM - Equity Capital Markets',
     'services.ecm.desc': 'Estruturamos e assessoramos operações de captação via ações tokenizadas',
     'services.dcm.title': 'DCM - Debt Capital Markets',
     'services.dcm.desc': 'Assessoria na estruturação de títulos de dívida tokenizados',
     'services.advisory.title': 'Assessoria em Tokenização',
     'services.advisory.desc': 'Consultoria especializada em aspectos regulatórios e estruturais',
    
    // Team
    'team.title': 'Nossa Equipe',
    'team.subtitle': 'Profissionais experientes em mercado de capitais e tokenização',
    
    // Education
    'education.title': 'Educação',
    'education.subtitle': 'Capacitação e conhecimento sobre o mercado de ativos tokenizados',
    
    // Research
    'research.title': 'Research',
    'research.subtitle': 'Análises e insights sobre o mercado de ativos tokenizados',
    'research.view_all': 'Ver Todos os Research',
    'research.no_content': 'Em breve publicaremos nossos primeiros research sobre o mercado de ativos tokenizados.',
    
    // Newsletter
    'newsletter.title': 'Newsletter',
    'newsletter.subtitle': 'Receba insights exclusivos sobre tokenização',
    'newsletter.description': 'Mantenha-se atualizado com as últimas tendências e análises do mercado de ativos tokenizados.',
    'newsletter.email_placeholder': 'Seu melhor e-mail',
    'newsletter.subscribe': 'Assinar',
    
    // Contact
    'contact.title': 'Fale Conosco',
    'contact.subtitle': 'Entre em contato para discutir suas necessidades',
    'contact.name_placeholder': 'Seu nome',
    'contact.email_placeholder': 'Seu e-mail',
    'contact.message_placeholder': 'Sua mensagem',
    'contact.send': 'Enviar Mensagem',
    
    // Footer
    'footer.description': 'Boutique de investimentos especializada em tokenização de ativos reais',
    'footer.services': 'Serviços',
    'footer.contact_info': 'Informações de Contato',
    'footer.rights': 'Todos os direitos reservados.',
  },
  en: {
    // Header
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.education': 'Education',
    'nav.team': 'Team',
    'nav.values': 'Values',
    'nav.research': 'Research',
    'nav.contact': 'Contact',
    'nav.newsletter': 'Newsletter',
    'nav.talk_to_us': 'Talk to Us',
    
    // Hero
    'hero.title': 'The Future of Capital Markets, today.',
    'hero.newsletter_btn': 'Subscribe Newsletter',
    'hero.contact_btn': 'Talk to Blockwise',
    
    // About
    'about.title': 'Who We Are',
    'about.p1': 'Blockwise Capital is an investment boutique specialized in ECM (Equity Capital Markets) and DCM (Debt Capital Markets) of tokenized assets (RWAs).',
    'about.p2': 'We connect companies seeking capital with investors looking for opportunities in the digital market, offering expertise in regulation, legal structuring, and specialized financial advisory.',
    'about.p3': 'Our independent approach combines proprietary research, strategic network, and regulatory know-how to deliver complete solutions in the tokenization ecosystem.',
    
    // Values
    'values.title': 'Our Values',
    'values.subtitle': 'The principles that guide our market approach',
    'values.specialization.title': 'High Level of Specialization',
    'values.specialization.desc': 'We advise our clients exclusively on specialized Mergers & Acquisitions and Capital Raising services.',
    'values.relationship.title': 'Relationship Appreciation',
    'values.relationship.desc': 'We seek total alignment with our clients and never assume a position of conflict of interest; We do not invest, do not grant loans, have no other products to sell, disperse our focus or generate any conflict of interest.',
    'values.quality.title': 'Service Quality',
    'values.quality.desc': 'We value meticulous project execution, acting with commitment and discomfort, always with senior-level involvement.',
    'values.discipline.title': 'Discipline in Pursuing Results',
    'values.discipline.desc': 'We work hard, with focus and discipline. We accept nothing less than the best result.',
    
     // Services
     'services.title': 'Our Services',
     'services.subtitle': 'We structure complete solutions for asset tokenization',
     'services.ecm.title': 'ECM - Equity Capital Markets',
     'services.ecm.desc': 'We structure and advise on capital raising operations via tokenized shares',
     'services.dcm.title': 'DCM - Debt Capital Markets',
     'services.dcm.desc': 'Advisory on structuring tokenized debt securities',
     'services.advisory.title': 'Tokenization Advisory',
     'services.advisory.desc': 'Specialized consulting on regulatory and structural aspects',
    
    // Team
    'team.title': 'Our Team',
    'team.subtitle': 'Experienced professionals in capital markets and tokenization',
    
    // Education
    'education.title': 'Education',
    'education.subtitle': 'Training and knowledge about the tokenized assets market',
    
    // Research
    'research.title': 'Research',
    'research.subtitle': 'Analysis and insights on the tokenized assets market',
    'research.view_all': 'View All Research',
    'research.no_content': 'Soon we will publish our first research on the tokenized assets market.',
    
    // Newsletter
    'newsletter.title': 'Newsletter',
    'newsletter.subtitle': 'Receive exclusive insights on tokenization',
    'newsletter.description': 'Stay updated with the latest trends and analysis in the tokenized assets market.',
    'newsletter.email_placeholder': 'Your best email',
    'newsletter.subscribe': 'Subscribe',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch to discuss your needs',
    'contact.name_placeholder': 'Your name',
    'contact.email_placeholder': 'Your email',
    'contact.message_placeholder': 'Your message',
    'contact.send': 'Send Message',
    
    // Footer
    'footer.description': 'Investment boutique specialized in real asset tokenization',
    'footer.services': 'Services',
    'footer.contact_info': 'Contact Information',
    'footer.rights': 'All rights reserved.',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};