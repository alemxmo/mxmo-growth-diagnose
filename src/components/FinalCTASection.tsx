import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  const scrollToDiagnostic = () => {
    const diagnosticSection = document.getElementById('diagnostic-section');
    if (diagnosticSection) {
      diagnosticSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-4 bg-brand-primary">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Header */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Não perca mais tempo tentando descobrir sozinho onde está o problema. 
            Deixe nossos especialistas identificarem os gargalos que estão travando seu crescimento.
          </p>
        </div>

        {/* CTA */}
        <div className="space-y-6">
          <Button 
            variant="secondary" 
            size="xl"
            onClick={scrollToDiagnostic}
            className="w-full max-w-md mx-auto bg-white text-brand-primary hover:bg-neutral-100 text-lg font-semibold py-4 px-8 rounded-lg"
          >
            AGENDAR DIAGNÓSTICO GRATUITO
          </Button>
          
          {/* Urgency */}
          <p className="text-white font-semibold text-lg">
            ⏰ Últimas vagas disponíveis este mês
          </p>
          
          {/* Social Proof Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto text-white/90">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">15 min</div>
              <div className="text-sm">Duração do diagnóstico</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm">Gratuito e sem compromisso</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">200+</div>
              <div className="text-sm">Empresas já atendidas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;