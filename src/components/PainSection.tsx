import { CheckCircle } from "lucide-react";

const PainSection = () => {
  const painPoints = [
    {
      title: "Marketing sem ROI claro",
      description: "Você investe em campanhas, mas não tem certeza do retorno real sobre o investimento?"
    },
    {
      title: "Vendas inconsistentes", 
      description: "Sua equipe de vendas tem altos e baixos, sem um processo previsível para fechar negócios?"
    },
    {
      title: "Equipe desalinhada",
      description: "A estratégia está na sua cabeça, mas a operação não executa com a agilidade e a direção que você espera?"
    },
    {
      title: "Tecnologia como obstáculo",
      description: "Suas ferramentas atuais mais geram trabalho manual do que eficiência e dados para tomada de decisão?"
    }
  ];

  return (
    <section className="strategic-section bg-gradient-section">
      <div className="strategic-container">
        <div className="text-center mb-16">
          <h2 className="h2 text-neutral-800 mb-6">
            Sua empresa parece ter atingido um platô?
          </h2>
          <p className="body-large text-neutral-600 max-w-3xl mx-auto">
            Se você se identifica com pelo menos 2 dos cenários abaixo, 
            este diagnóstico foi feito especialmente para você.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <div key={index} className="pain-point group hover:border-brand-primary/20 transition-all duration-300">
              <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="font-semibold text-neutral-800 group-hover:text-brand-primary transition-colors">
                  {point.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;