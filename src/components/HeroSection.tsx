import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onOpenModal: () => void;
}

const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  return (
    <section className="min-h-screen bg-[#DFC5AE] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#DFC5AE] via-[#DFC5AE]/90 to-[#9F8269]/20"></div>
      
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
                  className="h-20 sm:h-24 md:h-28 w-auto filter brightness-75"
                />
              </div>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/40 backdrop-blur-sm rounded-full border border-[#242A36]/20">
                <div className="w-3 h-3 bg-[#9F8269] rounded-full animate-pulse"></div>
                <span className="text-[#242A36] font-semibold text-lg">Diagnóstico Estratégico</span>
                <span className="text-[#9F8269] text-sm font-medium">• Gratuito</span>
              </div>
            </div>

            {/* Hero Title */}
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#242A36] leading-tight">
                Descubra os{" "}
                <span className="text-[#9F8269] relative">
                  3 gargalos invisíveis
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#9F8269]/60 rounded-full"></div>
                </span>{" "}
                que estão travando o crescimento da sua empresa
              </h1>
              
              <p className="text-xl sm:text-2xl text-[#242A36]/80 max-w-4xl mx-auto leading-relaxed">
                Receba um diagnóstico estratégico gratuito em menos de{" "}
                <strong className="text-[#9F8269]">2 minutos</strong>. 
                Tenha clareza sobre os pontos que, uma vez ajustados, podem{" "}
                <strong className="text-[#242A36]">destravar seu faturamento e eficiência</strong>.
              </p>
            </div>

            {/* CTA Button */}
            <div className="space-y-6">
              <Button 
                size="lg"
                onClick={onOpenModal}
                className="px-12 py-6 text-xl font-bold text-white bg-[#9F8269] hover:bg-[#8A6F56] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="flex items-center gap-3">
                  INICIAR DIAGNÓSTICO GRATUITO
                  <span className="text-2xl">🚀</span>
                </span>
              </Button>
              
              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-[#242A36]/70">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-white/60">
                  <div className="w-2 h-2 bg-[#9F8269] rounded-full"></div>
                  <span className="font-medium">100% gratuito</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-white/60">
                  <div className="w-2 h-2 bg-[#9F8269] rounded-full"></div>
                  <span className="font-medium">2 minutos para completar</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-white/60">
                  <div className="w-2 h-2 bg-[#9F8269] rounded-full"></div>
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