import { Button } from "@/components/ui/button";

interface FinalCTASectionProps {
  onOpenModal: () => void;
}

const FinalCTASection = ({ onOpenModal }: FinalCTASectionProps) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#DFC5AE]/50 via-[#DFC5AE]/30 to-white">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Header */}
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#242A36]">
            Pronto para ter{" "}
            <span className="text-[#9F8269] relative">
              clareza estratégica
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#9F8269]/60 rounded-full"></div>
            </span>?
          </h2>
          <p className="text-xl text-[#242A36]/80 max-w-3xl mx-auto leading-relaxed">
            Dê o primeiro passo para transformar sua operação. O diagnóstico é{" "}
            <strong className="text-[#242A36]">rápido, gratuito e confidencial</strong>.
          </p>
        </div>

        {/* CTA */}
        <div className="space-y-8">
          <Button 
            size="lg"
            onClick={onOpenModal}
            className="px-12 py-6 text-xl font-bold text-white bg-[#9F8269] hover:bg-[#8A6F56] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="flex items-center gap-3">
              RECEBER MEU DIAGNÓSTICO AGORA
              <span className="text-2xl">⚡</span>
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;