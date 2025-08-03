import { Button } from "@/components/ui/button";

interface FinalCTASectionProps {
  onOpenModal: () => void;
}

const FinalCTASection = ({ onOpenModal }: FinalCTASectionProps) => {
  return (
    <section className="executive-section bg-gradient-to-br from-mxmo-champagne/30 via-mxmo-cream/50 to-background">
      <div className="executive-container">
        <div className="text-center space-y-8 md:space-y-12">
          {/* Header */}
          <div className="space-y-6 md:space-y-8">
            <h2 className="h2 text-mxmo-navy max-w-4xl mx-auto">
              Pronto para ter{" "}
              <span className="text-mxmo-gold relative inline-block">
                clareza estratégica
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-mxmo-gold/60 rounded-full"></div>
              </span>?
            </h2>
            <p className="subtitle text-mxmo-navy/80 max-w-3xl mx-auto">
              Dê o primeiro passo para transformar sua operação. O diagnóstico é{" "}
              <strong className="text-mxmo-navy">rápido, gratuito e confidencial</strong>.
            </p>
          </div>

          {/* Premium CTA */}
          <div className="space-y-6">
            <button 
              onClick={onOpenModal}
              className="premium-button bg-gradient-gold text-white hover:shadow-premium"
            >
              <span className="font-bold">RECEBER MEU DIAGNÓSTICO AGORA</span>
              <span className="text-xl">⚡</span>
            </button>
            
            <p className="text-xs sm:text-sm text-mxmo-navy/60 font-medium">
              100% seguro • Sem compromisso • Resultado imediato
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;