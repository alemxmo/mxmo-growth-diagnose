import { Card } from "@/components/ui/card";
import { Quote, Users, Target, Zap } from "lucide-react";

const AuthoritySection = () => {
  const credentials = [
    {
      icon: Target,
      title: "Metodologia Comprovada",
      description: "Diagnósticos baseados na análise de dezenas de operações comerciais"
    },
    {
      icon: Users,
      title: "Resultados Tangíveis", 
      description: "Soluções que geram impacto real no faturamento e eficiência"
    },
    {
      icon: Zap,
      title: "Abordagem Tailor-Made",
      description: "Não entregamos relatórios genéricos, mas insights específicos para seu negócio"
    }
  ];

  return (
    <section className="strategic-section bg-strategic-blue text-white">
      <div className="strategic-container">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="h2 mb-4 sm:mb-6">
            Inteligência Estratégica para{" "}
            <span className="text-brand-primary-light">Transformar Negócios</span>
          </h2>
          <p className="body-large text-neutral-300 max-w-3xl mx-auto">
            A MXMO é uma consultoria de inteligência estratégica e tecnologia com foco em crescimento. 
            Não entregamos relatórios genéricos. Atuamos de forma "tailor-made", desenhando e aplicando 
            soluções que geram impacto real no seu faturamento e eficiência.
          </p>
        </div>

        {/* Credentials - Mobile optimized */}
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-6 mb-8 sm:mb-12">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <Card key={index} className="p-6 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <Icon className="w-8 h-8 text-brand-primary-light mb-4" />
                <h3 className="font-semibold text-white mb-3">
                  {credential.title}
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {credential.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Testimonial - Mobile optimized */}
        <Card className="mx-auto p-6 sm:p-8 md:p-12 bg-white/5 border-white/10 backdrop-blur-sm">
          <div className="text-center">
            <Quote className="w-12 h-12 text-brand-primary-light mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl font-medium text-white mb-6 leading-relaxed">
              "A visão estratégica da MXMO foi fundamental para organizarmos nosso processo de vendas 
              e dobrarmos nossa taxa de conversão em apenas 6 meses."
            </blockquote>
            <div className="text-neutral-300">
              <p className="font-semibold">Carlos Eduardo Silva</p>
              <p className="text-sm">CEO, TechVendas Solutions</p>
            </div>
          </div>
        </Card>

        {/* Value proposition footer */}
        <div className="text-center mt-12">
          <p className="text-brand-primary-light font-semibold">
            Este diagnóstico é o primeiro passo da nossa metodologia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;