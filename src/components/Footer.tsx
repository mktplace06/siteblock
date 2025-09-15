import logo from "@/assets/blockwise-logo-new.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t, language } = useLanguage();
  
  return (
    <footer className="bg-dark-bg text-dark-foreground py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img src={logo} alt="Blockwise Capital" className="h-8 w-auto mb-4" />
            <p className="text-gray-300 mb-4 max-w-md">
              {t('footer.description')}
            </p>
            <p className="text-sm text-gray-400">
              © 2024 Blockwise Capital. {t('footer.rights')}
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-primary">{t('footer.services')}</h3>
            <ul className="space-y-2 text-gray-300">
              {(language === 'pt' 
                ? ['ECM - Equity Tokenizado', 'DCM - Debt Tokenizado', 'Assessoria em Tokenização', 'Educação & Research']
                : ['ECM - Tokenized Equity', 'DCM - Tokenized Debt', 'Tokenization Advisory', 'Education & Research']
              ).map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-primary">{t('footer.contact_info')}</h3>
            <ul className="space-y-2 text-gray-300">
              <li>contato@blockwisecapital.com.br</li>
              <li>
                <a href="https://www.linkedin.com/company/blockwise-cap/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  LinkedIn: Blockwise Capital
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/blockwise.capital/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Instagram: @blockwise.capital
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            {language === 'pt' 
              ? 'Desenvolvido para conectar o futuro dos investimentos'
              : 'Developed to connect the future of investments'
            }
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;