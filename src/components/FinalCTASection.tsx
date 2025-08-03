import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  const scrollToDiagnostic = () => {
    const diagnosticSection = document.getElementById('diagnostic-section');
    if (diagnosticSection) {
      diagnosticSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="strategic-section bg-gradient-section">
      <div className="strategic-container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h2 className="h2 text-neutral-800">
              Pronto para encontrar seus{" "}
              <span className="text-brand-primary">pontos de alavancagem</span>?
            </h2>
            
            <p className="body-large text-neutral-600">
              Milhares de empresários já descobriram os gargalos que estavam limitando seu crescimento. 
              O seu diagnóstico estratégico está a apenas 2 minutos de distância.
            </p>
          </div>

          <div className="space-y-4">
            <Button 
              variant="strategic-cta" 
              size="xl"
              onClick={scrollToDiagnostic}
              className="group"
            >
              RECEBER MEU DIAGNÓSTICO AGORA
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-sm text-neutral-500">
              Última chamada para obter clareza estratégica gratuita
            </p>
          </div>

          {/* Social proof numbers - Mobile optimized */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-neutral-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-primary">2 min</div>
              <div className="text-sm text-neutral-600">Para completar</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-primary">3 gargalos</div>
              <div className="text-sm text-neutral-600">Identificados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-primary">100%</div>
              <div className="text-sm text-neutral-600">Gratuito</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;