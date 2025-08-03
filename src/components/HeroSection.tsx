import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToDiagnostic = () => {
    const diagnosticSection = document.getElementById('diagnostic-section');
    if (diagnosticSection) {
      diagnosticSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-strategic-blue flex items-center px-4 py-8">
      <div className="max-w-4xl mx-auto w-full">
        {/* Mobile-first layout */}
        <div className="text-center space-y-8">
          {/* Hero Title */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Agende aqui o seu{" "}
              <span className="text-brand-primary">Diagnóstico Estratégico!</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Os especialistas da <strong className="text-brand-primary">MXMO</strong> que{" "}
              <strong>transformaram operações de centenas de empresas</strong> se juntaram 
              para acelerar o seu crescimento, otimizar sua operação e{" "}
              <strong className="text-white">EXPANDIR sua empresa</strong>.
            </p>

            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              Aplique-se para um <strong className="text-white">Diagnóstico Estratégico de 15 minutos</strong> e 
              receba um plano de ação personalizado para destravar seu negócio.
            </p>
          </div>

          {/* CTA Button */}
          <div className="space-y-4">
            <Button 
              variant="strategic-cta" 
              size="xl"
              onClick={scrollToDiagnostic}
              className="w-full max-w-md mx-auto text-lg font-semibold py-4 px-8 rounded-lg"
            >
              QUERO MEU DIAGNÓSTICO GRATUITO
            </Button>
            
            {/* Urgency */}
            <p className="text-brand-primary font-semibold text-lg">
              🔥 Restam apenas 12 vagas este mês
            </p>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-neutral-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
              <span>15 minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
              <span>100% gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
              <span>Plano de ação personalizado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;