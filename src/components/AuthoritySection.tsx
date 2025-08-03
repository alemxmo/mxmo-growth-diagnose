const AuthoritySection = () => {
  return (
    <section className="executive-section bg-gradient-to-br from-mxmo-cream via-mxmo-champagne/60 to-mxmo-cream/80 relative overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-mxmo-cream via-mxmo-champagne/60 to-mxmo-cream/80"></div>
      <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-white/10 via-transparent to-mxmo-champagne/20"></div>
      
      <div className="executive-container relative z-10">
        <div className="text-center space-y-12 md:space-y-16">
          {/* Authority Header */}
          <div className="space-y-6 md:space-y-8">
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/e638b57e-11b0-4673-8090-2753a0074fab.png" 
                alt="MXMO - Alexandre Máximo" 
                className="h-16 sm:h-20 md:h-24 w-auto opacity-90 hover:opacity-100 transition-all duration-300"
              />
            </div>
            
            <h2 className="h2 text-mxmo-navy max-w-4xl mx-auto">
              Uma Metodologia{" "}
              <span className="text-mxmo-gold relative inline-block">
                "Tailor-Made"
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-mxmo-gold/60 rounded-full"></div>
              </span>{" "}
              que Une Estratégia e Tecnologia
            </h2>
            
            <p className="subtitle text-mxmo-navy/80 max-w-4xl mx-auto">
              A <strong className="text-mxmo-gold">MXMO</strong> não entrega relatórios genéricos. 
              Atuamos como conselheiros estratégicos que desenham e aplicam soluções de 
              crescimento com base em dados. Este diagnóstico é o primeiro passo da nossa 
              metodologia de inteligência comercial.
            </p>
          </div>
          
          {/* Executive Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-mxmo-champagne/30 hover:bg-white/90 hover:border-mxmo-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="p-6 md:p-8 text-center">
                <div className="text-3xl md:text-4xl font-bold text-mxmo-navy mb-2">+50</div>
                <div className="text-mxmo-navy/80 font-medium body">Empresas transformadas</div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-mxmo-champagne/30 hover:bg-white/90 hover:border-mxmo-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="p-6 md:p-8 text-center">
                <div className="text-3xl md:text-4xl font-bold text-mxmo-navy mb-2">20+</div>
                <div className="text-mxmo-navy/80 font-medium body">Anos de experiência</div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-mxmo-champagne/30 hover:bg-white/90 hover:border-mxmo-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="p-6 md:p-8 text-center">
                <div className="text-3xl md:text-4xl font-bold text-mxmo-navy mb-2">2min</div>
                <div className="text-mxmo-navy/80 font-medium body">Diagnóstico rápido</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;