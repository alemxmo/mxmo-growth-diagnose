import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-clarity.jpg";

const HeroSection = () => {
  const scrollToDiagnostic = () => {
    const diagnosticSection = document.getElementById('diagnostic-section');
    if (diagnosticSection) {
      diagnosticSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="strategic-section bg-gradient-hero">
      <div className="strategic-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="h1 text-neutral-800">
                Descubra os 3 gargalos invisíveis que estão{" "}
                <span className="text-brand-primary">travando o crescimento</span>{" "}
                da sua empresa.
              </h1>
              
              <p className="body-large text-neutral-600 max-w-xl">
                Receba um diagnóstico estratégico gratuito em menos de 2 minutos. 
                Tenha clareza sobre os pontos que, uma vez ajustados, podem 
                destravar seu faturamento e eficiência.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="strategic-cta" 
                size="xl"
                onClick={scrollToDiagnostic}
                className="w-full sm:w-auto"
              >
                INICIAR DIAGNÓSTICO GRATUITO
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-4 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                <span>Sem cadastro demorado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                <span>Resultado imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                <span>100% gratuito</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-strategic">
              <img 
                src={heroImage} 
                alt="Visualização estratégica representando clareza empresarial"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;