import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onOpenModal: () => void;
}

const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-mxmo-navy relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-mxmo-navy"></div>
      <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-transparent via-mxmo-gold/10 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 executive-section min-h-screen flex items-center">
        <div className="executive-container w-full">
          <div className="text-center space-y-8 md:space-y-12">
            {/* MXMO Brand Header */}
            <div className="space-y-6">
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/494b9d75-2fce-42ef-9d35-052fb098ae43.png" 
                  alt="MXMO - Alexandre Máximo" 
                  className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto opacity-95 hover:opacity-100 transition-all duration-300 hover:scale-105"
                />
              </div>
              <div className="executive-badge bg-mxmo-gold/20 border-mxmo-gold/40 text-white hover-lift">
                <div className="w-2 h-2 bg-mxmo-gold rounded-full animate-pulse"></div>
                <span className="font-semibold">Diagnóstico Estratégico</span>
                <span className="text-mxmo-gold font-bold">• Gratuito</span>
              </div>
            </div>

            {/* Hero Title */}
            <div className="space-y-6 md:space-y-8">
              <h1 className="h1 text-white max-w-5xl mx-auto">
                Descubra os{" "}
                <span className="text-mxmo-gold relative inline-block">
                  3 gargalos invisíveis
                  <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-gold rounded-full opacity-70"></div>
                </span>{" "}
                que estão travando o crescimento da sua empresa
              </h1>
              
              <p className="subtitle text-white/90 max-w-4xl mx-auto">
                Receba um diagnóstico estratégico gratuito em menos de{" "}
                <strong className="text-mxmo-gold">2 minutos</strong>. 
                Tenha clareza sobre os pontos que, uma vez ajustados, podem{" "}
                <strong className="text-white">destravar seu faturamento e eficiência</strong>.
              </p>
            </div>

            {/* CTA Button */}
            <div className="space-y-6 md:space-y-8">
              <button 
                onClick={onOpenModal}
                className="premium-button bg-gradient-gold text-mxmo-navy hover:shadow-premium hover:scale-105 shadow-2xl shadow-mxmo-gold/30"
              >
                <span className="font-bold text-lg">INICIAR DIAGNÓSTICO GRATUITO</span>
                <span className="text-2xl">🚀</span>
              </button>
              
              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
                <div className="executive-badge bg-white/10 border-white/30 text-white text-xs sm:text-sm">
                  <div className="w-1.5 h-1.5 bg-mxmo-gold rounded-full"></div>
                  <span className="font-medium">100% gratuito</span>
                </div>
                <div className="executive-badge bg-white/10 border-white/30 text-white text-xs sm:text-sm">
                  <div className="w-1.5 h-1.5 bg-mxmo-gold rounded-full"></div>
                  <span className="font-medium">2 minutos</span>
                </div>
                <div className="executive-badge bg-white/10 border-white/30 text-white text-xs sm:text-sm">
                  <div className="w-1.5 h-1.5 bg-mxmo-gold rounded-full"></div>
                  <span className="font-medium">Resultado instantâneo</span>
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