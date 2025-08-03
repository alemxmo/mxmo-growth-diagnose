import { Button } from "@/components/ui/button";

interface FinalCTASectionProps {
  onOpenModal: () => void;
}

const FinalCTASection = ({ onOpenModal }: FinalCTASectionProps) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white to-mxmo-light/20">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Header */}
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-mxmo-dark">
            Pronto para ter{" "}
            <span className="text-mxmo-primary relative">
              clareza estratégica
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-mxmo-primary/30 rounded-full"></div>
            </span>?
          </h2>
          <p className="text-xl text-mxmo-dark/70 max-w-3xl mx-auto leading-relaxed">
            Dê o primeiro passo para transformar sua operação. O diagnóstico é{" "}
            <strong className="text-mxmo-dark">rápido, gratuito e confidencial</strong>.
          </p>
        </div>

        {/* CTA */}
        <div className="space-y-8">
          <Button 
            size="lg"
            onClick={onOpenModal}
            className="group relative px-12 py-6 text-xl font-bold bg-mxmo-primary hover:bg-mxmo-primary/90 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="relative z-10">RECEBER MEU DIAGNÓSTICO AGORA</span>
            <div className="absolute inset-0 bg-gradient-to-r from-mxmo-primary to-mxmo-primary/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          
          {/* Social proof */}
          <div className="flex justify-center items-center gap-2 text-mxmo-dark/60">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-mxmo-primary rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">A</div>
              <div className="w-8 h-8 bg-mxmo-primary/80 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">B</div>
              <div className="w-8 h-8 bg-mxmo-primary/60 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">C</div>
            </div>
            <span className="text-sm">+200 empresas já fizeram o diagnóstico</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;