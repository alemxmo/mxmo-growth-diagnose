const AuthoritySection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-mxmo-light/30 to-mxmo-light/10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-12">
          {/* Authority Header */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-mxmo-primary/20">
              <div className="w-8 h-8 bg-mxmo-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-mxmo-dark font-semibold">MXMO Metodologia</span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-mxmo-dark">
              Uma Metodologia{" "}
              <span className="text-mxmo-primary relative">
                "Tailor-Made"
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-mxmo-primary/30 rounded-full"></div>
              </span>{" "}
              que Une Estratégia e Tecnologia
            </h3>
            
            <p className="text-xl text-mxmo-dark/70 max-w-4xl mx-auto leading-relaxed">
              A <strong className="text-mxmo-primary">MXMO</strong> não entrega relatórios genéricos. 
              Atuamos como conselheiros estratégicos que desenham e aplicam soluções de 
              crescimento com base em dados. Este diagnóstico é o primeiro passo da nossa 
              metodologia de inteligência comercial.
            </p>
          </div>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 hover-scale">
              <div className="text-4xl font-bold text-mxmo-primary mb-2">+50</div>
              <div className="text-mxmo-dark/70 font-medium">Empresas transformadas</div>
            </div>
            <div className="p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 hover-scale">
              <div className="text-4xl font-bold text-mxmo-primary mb-2">20+</div>
              <div className="text-mxmo-dark/70 font-medium">Anos de experiência</div>
            </div>
            <div className="p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 hover-scale">
              <div className="text-4xl font-bold text-mxmo-primary mb-2">2min</div>
              <div className="text-mxmo-dark/70 font-medium">Diagnóstico rápido</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;