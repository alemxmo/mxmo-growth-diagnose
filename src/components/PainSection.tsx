const PainSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Problem Identification */}
        <div className="text-center space-y-16">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#242A36]">
              Sua empresa parece ter{" "}
              <span className="text-[#9F8269] relative">
                atingido um platô
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#9F8269]/40 rounded-full"></div>
              </span>?
            </h2>
            
            <p className="text-xl text-[#242A36]/70 max-w-3xl mx-auto">
              Reconhece alguns destes sinais de alerta?
            </p>
          </div>

          {/* Pain Points List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group p-8 bg-gradient-to-br from-[#DFC5AE]/30 to-[#DFC5AE]/10 rounded-2xl border border-[#DFC5AE]/50 hover:border-[#9F8269]/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#9F8269]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📈</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-[#242A36] mb-2">Marketing sem ROI claro</h3>
                  <p className="text-[#242A36]/70">Você investe em marketing mas não consegue medir o retorno real dos investimentos.</p>
                </div>
              </div>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-[#DFC5AE]/30 to-[#DFC5AE]/10 rounded-2xl border border-[#DFC5AE]/50 hover:border-[#9F8269]/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#9F8269]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📊</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-[#242A36] mb-2">Vendas inconsistentes</h3>
                  <p className="text-[#242A36]/70">Mês bom, mês ruim. Você não consegue prever nem controlar os resultados.</p>
                </div>
              </div>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-[#DFC5AE]/30 to-[#DFC5AE]/10 rounded-2xl border border-[#DFC5AE]/50 hover:border-[#9F8269]/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#9F8269]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👥</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-[#242A36] mb-2">Equipe desalinhada</h3>
                  <p className="text-[#242A36]/70">Cada área trabalha isolada, sem visão clara dos objetivos comuns.</p>
                </div>
              </div>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-[#DFC5AE]/30 to-[#DFC5AE]/10 rounded-2xl border border-[#DFC5AE]/50 hover:border-[#9F8269]/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#9F8269]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚙️</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-[#242A36] mb-2">Tecnologia como obstáculo</h3>
                  <p className="text-[#242A36]/70">Sistemas desintegrados que atrapalham ao invés de ajudar o crescimento.</p>
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