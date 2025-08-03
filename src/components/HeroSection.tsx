import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onOpenModal: () => void;
}

const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-mxmo-light/5 to-mxmo-light/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-mxmo-primary/5 to-mxmo-light/10"></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen px-4 py-8">
        <div className="max-w-5xl mx-auto w-full">
          {/* Mobile-first layout */}
          <div className="text-center space-y-12">
            {/* MXMO Brand Header */}
            <div className="space-y-6">
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/e638b57e-11b0-4673-8090-2753a0074fab.png" 
                  alt="MXMO - Alexandre Máximo" 
                  className="h-20 sm:h-24 md:h-28 w-auto"
                />
              </div>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-mxmo-light/30 to-mxmo-primary/10 rounded-full border border-mxmo-primary/20 backdrop-blur-sm">
                <div className="w-3 h-3 bg-mxmo-primary rounded-full animate-pulse"></div>
                <span className="text-mxmo-dark font-semibold text-lg">Diagnóstico Estratégico</span>
                <span className="text-mxmo-primary text-sm font-medium">• Gratuito</span>
              </div>
            </div>

            {/* Hero Title */}
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-mxmo-dark leading-tight">
                Descubra os{" "}
                <span className="text-mxmo-primary relative">
                  3 gargalos invisíveis
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-mxmo-primary/60 via-mxmo-primary to-mxmo-primary/60 rounded-full"></div>
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
                className="group relative overflow-hidden px-12 py-6 text-xl font-bold text-white bg-mxmo-primary hover:bg-mxmo-primary/80 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-scale animate-fade-in"
              >
                <span className="relative z-20 flex items-center gap-3 text-white">
                  INICIAR DIAGNÓSTICO GRATUITO
                  <span className="text-2xl group-hover:animate-pulse">🚀</span>
                </span>
                <div className="absolute inset-0 bg-mxmo-primary rounded-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
              
              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-mxmo-dark/60">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-mxmo-light/40">
                  <div className="w-2 h-2 bg-mxmo-primary rounded-full"></div>
                  <span>100% gratuito</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-mxmo-light/40">
                  <div className="w-2 h-2 bg-mxmo-primary rounded-full"></div>
                  <span>2 minutos para completar</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-mxmo-light/40">
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