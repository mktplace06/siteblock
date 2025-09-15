import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const AllResearch = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t('research.view_all')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              {t('research.subtitle')}
            </p>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-12 text-center">
            <p className="text-lg text-muted-foreground">
              {t('research.no_content')}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AllResearch;