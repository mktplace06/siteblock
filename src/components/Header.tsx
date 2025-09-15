import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";
import logo from "@/assets/blockwise-logo-new.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };
  return <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img src={logo} alt="Blockwise Capital" className="h-12 md:h-16 w-auto" />
          </div>
          
          <div className="absolute top-4 right-4">
            <LanguageSelector />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.services')}
            </button>
            <button onClick={() => scrollToSection('education')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.education')}
            </button>
            <button onClick={() => scrollToSection('team')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.team')}
            </button>
            <button onClick={() => scrollToSection('values')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.values')}
            </button>
            <button onClick={() => navigate('/research')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.research')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.contact')}
            </button>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" onClick={() => scrollToSection('newsletter')} className="text-base">
              {t('nav.newsletter')}
            </Button>
            <Button onClick={() => scrollToSection('contact')}>
              {t('nav.talk_to_us')}
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-foreground hover:text-primary w-full text-left">
                {t('nav.about')}
              </button>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-foreground hover:text-primary w-full text-left">
                {t('nav.services')}
              </button>
              <button onClick={() => scrollToSection('education')} className="block px-3 py-2 text-foreground hover:text-primary w-full text-left">
                {t('nav.education')}
              </button>
              <button onClick={() => scrollToSection('team')} className="block px-3 py-2 text-foreground hover:text-primary w-full text-left">
                {t('nav.team')}
              </button>
              <button onClick={() => scrollToSection('values')} className="block px-3 py-2 text-foreground hover:text-primary w-full text-left">
                {t('nav.values')}
              </button>
              <button onClick={() => navigate('/research')} className="block px-3 py-2 text-foreground hover:text-primary w-full text-left">
                {t('nav.research')}
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-foreground hover:text-primary w-full text-left">
                {t('nav.contact')}
              </button>
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" className="w-full" onClick={() => scrollToSection('newsletter')}>
                  {t('nav.newsletter')}
                </Button>
                <Button className="w-full" onClick={() => scrollToSection('contact')}>
                  {t('nav.talk_to_us')}
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;