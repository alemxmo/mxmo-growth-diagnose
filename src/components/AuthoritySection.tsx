

const AuthoritySection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-mxmo-dark via-mxmo-dark to-mxmo-dark/95 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-mxmo-primary/5 via-transparent to-mxmo-light/5"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center space-y-12">
          {/* Authority Header */}
          <div className="space-y-8">
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/e638b57e-11b0-4673-8090-2753a0074fab.png" 
                alt="MXMO - Alexandre Máximo" 
                className="h-20 sm:h-24 w-auto opacity-90 filter brightness-200"
              />
            </div>
            
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Uma Metodologia{" "}
              <span className="text-mxmo-light relative">
                "Tailor-Made"
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-mxmo-light/60 via-mxmo-light to-mxmo-light/60 rounded-full"></div>
              </span>{" "}
              que Une Estratégia e Tecnologia
            </h3>
            
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              A <strong className="text-mxmo-light">MXMO</strong> não entrega relatórios genéricos. 
              Atuamos como conselheiros estratégicos que desenham e aplicam soluções de 
              crescimento com base em dados. Este diagnóstico é o primeiro passo da nossa 
              metodologia de inteligência comercial.
            </p>
          </div>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="p-8 bg-gradient-to-br from-mxmo-light/20 to-mxmo-primary/10 backdrop-blur-sm rounded-2xl border border-mxmo-light/20 hover-scale">
              <div className="text-4xl font-bold text-mxmo-light mb-2">+50</div>
              <div className="text-white/80 font-medium">Empresas transformadas</div>
            </div>
            <div className="p-8 bg-gradient-to-br from-mxmo-light/20 to-mxmo-primary/10 backdrop-blur-sm rounded-2xl border border-mxmo-light/20 hover-scale">
              <div className="text-4xl font-bold text-mxmo-light mb-2">20+</div>
              <div className="text-white/80 font-medium">Anos de experiência</div>
            </div>
            <div className="p-8 bg-gradient-to-br from-mxmo-light/20 to-mxmo-primary/10 backdrop-blur-sm rounded-2xl border border-mxmo-light/20 hover-scale">
              <div className="text-4xl font-bold text-mxmo-light mb-2">2min</div>
              <div className="text-white/80 font-medium">Diagnóstico rápido</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;