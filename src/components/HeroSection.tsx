import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onOpenModal: () => void;
}

const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  return (
    <section className="min-h-screen bg-white flex items-center px-4 py-8">
      <div className="max-w-4xl mx-auto w-full">
        {/* Mobile-first layout */}
        <div className="text-center space-y-8">
          {/* Hero Title */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-mxmo-dark leading-tight">
              Descubra os 3 gargalos invisíveis{" "}
              <span className="text-mxmo-primary">que estão travando o crescimento</span>{" "}
              da sua empresa.
            </h1>
            
            <p className="text-lg sm:text-xl text-mxmo-dark/70 max-w-3xl mx-auto leading-relaxed">
              Receba um diagnóstico estratégico gratuito em menos de 2 minutos. 
              Tenha clareza sobre os pontos que, uma vez ajustados, podem{" "}
              <strong className="text-mxmo-dark">destravar seu faturamento e eficiência</strong>.
            </p>
          </div>

          {/* CTA Button */}
          <div className="space-y-4">
            <Button 
              variant="default" 
              size="lg"
              onClick={onOpenModal}
              className="w-full max-w-md mx-auto text-lg font-semibold py-4 px-8 rounded-lg bg-mxmo-primary text-white hover:bg-mxmo-primary/90"
            >
              INICIAR DIAGNÓSTICO GRATUITO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;