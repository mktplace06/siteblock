import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/faria-lima-timelapse.jpg";
import logo from "@/assets/blockwise-logo-new.png";
const Hero = () => {
  const { t } = useLanguage();
  
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Avenida Brigadeiro Faria Lima timelapse, São Paulo" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark-bg/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <img src={logo} alt="Blockwise Capital" className="mx-auto h-16 md:h-20 w-auto mb-8" />
        </div>
        
        <h1 className="text-4xl md:text-6xl mb-6 leading-tight font-bold lg:text-6xl">
          <span className="text-primary text-5xl font-semibold">{t('hero.title')}</span>
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6" onClick={() => {
          const element = document.getElementById('newsletter');
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }}>
            {t('hero.newsletter_btn')}
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-dark-bg" onClick={() => {
          const element = document.getElementById('contact');
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }}>
            {t('hero.contact_btn')}
          </Button>
        </div>
      </div>
      
    </section>;
};
export default Hero;