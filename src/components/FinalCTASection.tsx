import { Button } from "@/components/ui/button";

interface FinalCTASectionProps {
  onOpenModal: () => void;
}

const FinalCTASection = ({ onOpenModal }: FinalCTASectionProps) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-mxmo-light/30 via-white to-mxmo-primary/5">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Header */}
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-mxmo-dark">
            Pronto para ter{" "}
            <span className="text-mxmo-primary relative">
              clareza estratégica
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-mxmo-primary/60 via-mxmo-primary to-mxmo-primary/60 rounded-full"></div>
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
            className="group relative overflow-hidden px-12 py-6 text-xl font-bold text-white bg-mxmo-primary hover:bg-mxmo-primary/80 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-scale animate-fade-in"
          >
            <span className="relative z-20 flex items-center gap-3 text-white">
              RECEBER MEU DIAGNÓSTICO AGORA
              <span className="text-2xl group-hover:animate-pulse">⚡</span>
            </span>
            <div className="absolute inset-0 bg-mxmo-primary rounded-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;