import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onOpenModal: () => void;
}

const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-mxmo-light/10"></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen px-4 py-8">
        <div className="max-w-5xl mx-auto w-full">
          {/* Mobile-first layout */}
          <div className="text-center space-y-12">
            {/* MXMO Brand Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-mxmo-light/30 rounded-full border border-mxmo-primary/20">
                <div className="w-8 h-8 bg-mxmo-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-mxmo-dark font-semibold text-lg">MXMO</span>
                <span className="text-mxmo-primary text-sm">• Diagnóstico Estratégico</span>
              </div>
            </div>

            {/* Hero Title */}
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-mxmo-dark leading-tight">
                Descubra os{" "}
                <span className="text-mxmo-primary relative">
                  3 gargalos invisíveis
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-mxmo-primary/30 rounded-full"></div>
                </span>{" "}
                que estão travando o crescimento da sua empresa
              </h1>
              
              <p className="text-xl sm:text-2xl text-mxmo-dark/70 max-w-4xl mx-auto leading-relaxed">
                Receba um diagnóstico estratégico gratuito em menos de{" "}
                <strong className="text-mxmo-primary">2 minutos</strong>. 
                Tenha clareza sobre os pontos que, uma vez ajustados, podem{" "}
                <strong className="text-mxmo-dark">destravar seu faturamento e eficiência</strong>.
              </p>
            </div>

            {/* CTA Button */}
            <div className="space-y-6">
              <Button 
                size="lg"
                onClick={onOpenModal}
                className="group relative px-12 py-6 text-xl font-bold bg-mxmo-primary hover:bg-mxmo-primary/90 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="relative z-10">INICIAR DIAGNÓSTICO GRATUITO</span>
                <div className="absolute inset-0 bg-gradient-to-r from-mxmo-primary to-mxmo-primary/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-mxmo-dark/60">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-mxmo-primary rounded-full"></div>
                  <span>100% gratuito</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-mxmo-primary rounded-full"></div>
                  <span>2 minutos para completar</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-mxmo-primary rounded-full"></div>
                  <span>Resultado instantâneo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;