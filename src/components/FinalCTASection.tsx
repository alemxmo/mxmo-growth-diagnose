import { Button } from "@/components/ui/button";

interface FinalCTASectionProps {
  onOpenModal: () => void;
}

const FinalCTASection = ({ onOpenModal }: FinalCTASectionProps) => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Header */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-mxmo-dark">
            Pronto para ter{" "}
            <span className="text-mxmo-primary">clareza estratégica</span>?
          </h2>
          <p className="text-lg text-mxmo-dark/70 max-w-2xl mx-auto leading-relaxed">
            Dê o primeiro passo para transformar sua operação. O diagnóstico é{" "}
            <strong className="text-mxmo-dark">rápido, gratuito e confidencial</strong>.
          </p>
        </div>

        {/* CTA */}
        <div className="space-y-6">
          <Button 
            variant="default" 
            size="lg"
            onClick={onOpenModal}
            className="w-full max-w-md mx-auto bg-mxmo-primary text-white hover:bg-mxmo-primary/90 text-lg font-semibold py-4 px-8 rounded-lg"
          >
            RECEBER MEU DIAGNÓSTICO AGORA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;