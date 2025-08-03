import { Triangle } from "lucide-react";

const PainSection = () => {
  return (
    <section className="py-16 px-4 bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-12">
          {/* Section Title */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-strategic-blue">
              Especialistas em eliminar problemas de crescimento
            </h2>
            <div className="w-16 h-1 bg-brand-primary mx-auto"></div>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Nossa expertise em <strong>transformação de negócios</strong> foi construída ao longo de{" "}
              <strong>mais de 10 anos</strong>. Hoje, com conhecimento técnico e especializado, 
              multiplicamos nossa capacidade de solucionar problemas encontrados em negócios 
              dos mais variados portes.
            </p>
            <p className="text-xl font-semibold text-strategic-blue">
              Sua empresa sofre com problemas como estes?
            </p>
          </div>

          {/* Pain Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-neutral-200">
              <Triangle className="w-5 h-5 text-brand-primary fill-brand-primary flex-shrink-0 mt-1" />
              <span className="text-neutral-700">Negócios estagnados, que pararam de se desenvolver</span>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-neutral-200">
              <Triangle className="w-5 h-5 text-brand-primary fill-brand-primary flex-shrink-0 mt-1" />
              <span className="text-neutral-700">Operações desestruturadas e ineficientes</span>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-neutral-200">
              <Triangle className="w-5 h-5 text-brand-primary fill-brand-primary flex-shrink-0 mt-1" />
              <span className="text-neutral-700">Planos de crescimento não executados</span>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-neutral-200">
              <Triangle className="w-5 h-5 text-brand-primary fill-brand-primary flex-shrink-0 mt-1" />
              <span className="text-neutral-700">Diminuição do market share</span>
            </div>
          </div>

          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Aplique-se para um <strong className="text-strategic-blue">Diagnóstico Estratégico</strong> e 
            obtenha uma avaliação e um plano de ação.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainSection;