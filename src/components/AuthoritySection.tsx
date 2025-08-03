const AuthoritySection = () => {
  return (
    <section className="py-16 px-4 bg-mxmo-light">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          {/* Authority Header */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-mxmo-dark">
              Uma Metodologia <span className="text-mxmo-primary">"Tailor-Made"</span>{" "}
              que Une Estratégia e Tecnologia
            </h3>
            
            <p className="text-lg text-mxmo-dark/70 max-w-3xl mx-auto leading-relaxed">
              A <strong className="text-mxmo-primary">MXMO</strong> não entrega relatórios genéricos. 
              Atuamos como conselheiros estratégicos que desenham e aplicam soluções de 
              crescimento com base em dados. Este diagnóstico é o primeiro passo da nossa 
              metodologia de inteligência comercial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;