import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, Target, TrendingUp } from "lucide-react";

const DiagnosticSection = () => {
  // In a real implementation, this would embed the actual Typeform
  const handleStartDiagnostic = () => {
    // This would open the Typeform or redirect to it
    window.open('https://your-typeform-url.typeform.com/to/your-form-id', '_blank');
  };

  const benefits = [
    {
      icon: Clock,
      title: "2 minutos",
      description: "Tempo necessário para completar"
    },
    {
      icon: Target,
      title: "3 gargalos",
      description: "Identificação precisa dos pontos críticos"
    },
    {
      icon: TrendingUp,
      title: "Insights acionáveis",
      description: "Relatório com próximos passos"
    }
  ];

  return (
    <section id="diagnostic-section" className="strategic-section bg-background">
      <div className="strategic-container">
        <div className="text-center mb-16">
          <h2 className="h2 text-neutral-800 mb-6">
            A clareza que você precisa está a{" "}
            <span className="text-brand-primary">7 perguntas</span>{" "}
            de distância.
          </h2>
          <p className="body-large text-neutral-600 max-w-3xl mx-auto">
            Nosso diagnóstico foi desenhado com base na análise de dezenas de operações comerciais. 
            As perguntas são rápidas e estratégicas, focadas em 4 pilares: Gestão, Marketing, Vendas e Tecnologia. 
            Responda honestamente para receber uma análise precisa.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="p-6 text-center border-2 border-neutral-200 hover:border-brand-primary/30 transition-all duration-300">
                <Icon className="w-8 h-8 text-brand-primary mx-auto mb-4" />
                <h3 className="font-semibold text-neutral-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600 text-sm">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Diagnostic CTA Card */}
        <Card className="max-w-2xl mx-auto p-8 md:p-12 text-center border-2 border-brand-primary/20 bg-gradient-to-br from-brand-primary/5 to-transparent">
          <div className="space-y-6">
            <div>
              <h3 className="h3 text-neutral-800 mb-4">
                Pronto para descobrir seus gargalos?
              </h3>
              <p className="text-neutral-600">
                Clique no botão abaixo para iniciar seu diagnóstico estratégico personalizado. 
                Você receberá um relatório detalhado por email em instantes.
              </p>
            </div>

            <Button 
              variant="strategic-cta" 
              size="xl"
              onClick={handleStartDiagnostic}
              className="w-full sm:w-auto group"
            >
              INICIAR DIAGNÓSTICO AGORA
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="text-xs text-neutral-500 space-y-1">
              <p>✓ Sem spam • ✓ Dados protegidos • ✓ Resultado imediato</p>
            </div>
          </div>
        </Card>

        {/* Note: In production, the Typeform would be embedded here */}
        <div className="mt-8 p-6 bg-neutral-100 rounded-xl border-2 border-dashed border-neutral-300 text-center">
          <p className="text-neutral-600 font-medium">
            💡 Nota de Implementação: Aqui seria incorporado o Typeform real com as 7 perguntas estratégicas
          </p>
          <p className="text-sm text-neutral-500 mt-2">
            O formulário capturaria: Nome, Email, Empresa + as respostas do diagnóstico
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticSection;