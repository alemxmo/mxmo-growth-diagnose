const PainSection = () => {
  return (
    <section className="executive-section bg-gradient-subtle">
      <div className="executive-container">
        <div className="text-center space-y-12 md:space-y-16">
          <div className="space-y-6 md:space-y-8">
            <h2 className="h2 text-mxmo-navy max-w-4xl mx-auto">
              Sua empresa parece ter{" "}
              <span className="text-mxmo-gold relative inline-block">
                atingido um platô
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-mxmo-gold/40 rounded-full"></div>
              </span>?
            </h2>
            
            <p className="subtitle text-mxmo-navy/70 max-w-3xl mx-auto">
              Reconhece alguns destes sinais de alerta?
            </p>
          </div>

          {/* Pain Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="group pain-point hover-lift">
              <div className="w-12 h-12 bg-mxmo-gold/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-mxmo-gold/30 transition-colors duration-300">
                <span className="text-2xl">📈</span>
              </div>
              <div className="text-left">
                <h3 className="h3 text-mxmo-navy mb-3">Marketing sem ROI claro</h3>
                <p className="body text-mxmo-navy/70">Você investe em marketing mas não consegue medir o retorno real dos investimentos.</p>
              </div>
            </div>
            
            <div className="group pain-point hover-lift">
              <div className="w-12 h-12 bg-mxmo-gold/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-mxmo-gold/30 transition-colors duration-300">
                <span className="text-2xl">📊</span>
              </div>
              <div className="text-left">
                <h3 className="h3 text-mxmo-navy mb-3">Vendas inconsistentes</h3>
                <p className="body text-mxmo-navy/70">Mês bom, mês ruim. Você não consegue prever nem controlar os resultados.</p>
              </div>
            </div>
            
            <div className="group pain-point hover-lift">
              <div className="w-12 h-12 bg-mxmo-gold/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-mxmo-gold/30 transition-colors duration-300">
                <span className="text-2xl">👥</span>
              </div>
              <div className="text-left">
                <h3 className="h3 text-mxmo-navy mb-3">Equipe desalinhada</h3>
                <p className="body text-mxmo-navy/70">Cada área trabalha isolada, sem visão clara dos objetivos comuns.</p>
              </div>
            </div>
            
            <div className="group pain-point hover-lift">
              <div className="w-12 h-12 bg-mxmo-gold/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-mxmo-gold/30 transition-colors duration-300">
                <span className="text-2xl">⚙️</span>
              </div>
              <div className="text-left">
                <h3 className="h3 text-mxmo-navy mb-3">Tecnologia como obstáculo</h3>
                <p className="body text-mxmo-navy/70">Sistemas desintegrados que atrapalham ao invés de ajudar o crescimento.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;