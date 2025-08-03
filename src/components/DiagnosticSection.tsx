import { Button } from "@/components/ui/button";

const DiagnosticSection = () => {
  const handleStartDiagnostic = () => {
    // TODO: Integrate with actual Typeform
    console.log("Opening diagnostic form...");
  };

  return (
    <section id="diagnostic-section" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Main CTA */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-strategic-blue">
            Agende aqui o seu{" "}
            <span className="text-brand-primary">Diagnóstico Estratégico!</span>
          </h2>
          
          <Button 
            variant="strategic-cta" 
            size="xl"
            onClick={handleStartDiagnostic}
            className="w-full max-w-md mx-auto text-lg font-semibold py-4 px-8 rounded-lg"
          >
            QUERO UM DIAGNÓSTICO GRATUITO
          </Button>
        </div>

        {/* Description */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <p className="text-lg text-neutral-600 leading-relaxed">
            Os especialistas da <strong className="text-brand-primary">MXMO</strong> que{" "}
            <strong>transformaram operações de centenas de empresas</strong> se juntaram 
            para acelerar o seu crescimento, otimizar sua operação e{" "}
            <strong className="text-strategic-blue">EXPANDIR sua empresa</strong>.
          </p>
          
          <p className="text-lg text-neutral-600 leading-relaxed">
            Aplique-se para um <strong className="text-strategic-blue">Diagnóstico Estratégico de 15 minutos</strong> e 
            conheça a <strong className="text-brand-primary">MXMO</strong>. Avaliaremos o seu negócio e 
            traçaremos um plano de ação.
          </p>
          
          <p className="text-lg font-semibold text-strategic-blue">
            Limitado a 12 vagas por mês.
          </p>
        </div>

        {/* TODO: Replace this with actual Typeform embed */}
        <div className="mt-12 p-8 bg-neutral-50 rounded-lg border border-neutral-200">
          <p className="text-lg text-neutral-600 mb-4">
            💡 <strong>Formulário de Diagnóstico</strong>
          </p>
          <p className="text-sm text-neutral-500">
            Integração com Typeform será implementada aqui
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticSection;