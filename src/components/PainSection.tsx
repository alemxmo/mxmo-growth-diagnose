const PainSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Problem Identification */}
        <div className="text-center space-y-16">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-mxmo-dark">
              Sua empresa parece ter{" "}
              <span className="text-mxmo-primary relative">
                atingido um platô
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-mxmo-primary/30 rounded-full"></div>
              </span>?
            </h2>
            
            <p className="text-xl text-mxmo-dark/60 max-w-3xl mx-auto">
              Reconhece alguns destes sinais de alerta?
            </p>
          </div>

          {/* Pain Points List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group p-8 bg-gradient-to-br from-white to-mxmo-light/20 rounded-2xl border border-mxmo-light/40 hover:border-mxmo-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-mxmo-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📈</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-mxmo-dark mb-2">Marketing sem ROI claro</h3>
                  <p className="text-mxmo-dark/60">Você investe em marketing mas não consegue medir o retorno real dos investimentos.</p>
                </div>
              </div>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-white to-mxmo-light/20 rounded-2xl border border-mxmo-light/40 hover:border-mxmo-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-mxmo-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📊</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-mxmo-dark mb-2">Vendas inconsistentes</h3>
                  <p className="text-mxmo-dark/60">Mês bom, mês ruim. Você não consegue prever nem controlar os resultados.</p>
                </div>
              </div>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-white to-mxmo-light/20 rounded-2xl border border-mxmo-light/40 hover:border-mxmo-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-mxmo-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👥</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-mxmo-dark mb-2">Equipe desalinhada</h3>
                  <p className="text-mxmo-dark/60">Cada área trabalha isolada, sem visão clara dos objetivos comuns.</p>
                </div>
              </div>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-white to-mxmo-light/20 rounded-2xl border border-mxmo-light/40 hover:border-mxmo-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-mxmo-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚙️</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-mxmo-dark mb-2">Tecnologia como obstáculo</h3>
                  <p className="text-mxmo-dark/60">Sistemas desintegrados que atrapalham ao invés de ajudar o crescimento.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;