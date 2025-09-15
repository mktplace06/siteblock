import { useLanguage } from "@/contexts/LanguageContext";
import brazilFlag from "@/assets/brazil-flag.png";
import usaFlag from "@/assets/usa-flag.png";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('pt')}
        className={`w-8 h-6 rounded-sm overflow-hidden border-2 transition-all ${
          language === 'pt' ? 'border-primary scale-110' : 'border-muted hover:border-muted-foreground'
        }`}
        title="Português"
      >
        <img 
          src={brazilFlag} 
          alt="Bandeira do Brasil" 
          className="w-full h-full object-cover"
        />
      </button>
      
      <button
        onClick={() => setLanguage('en')}
        className={`w-8 h-6 rounded-sm overflow-hidden border-2 transition-all ${
          language === 'en' ? 'border-primary scale-110' : 'border-muted hover:border-muted-foreground'
        }`}
        title="English"
      >
        <img 
          src={usaFlag} 
          alt="United States Flag" 
          className="w-full h-full object-cover"
        />
      </button>
    </div>
  );
};

export default LanguageSelector;