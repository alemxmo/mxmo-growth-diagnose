const AuthoritySection = () => {
  return (
    <section className="py-16 px-4 bg-strategic-blue">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* MXMO Brand Section */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Conheça a <span className="text-brand-primary">MXMO</span>
            </h2>
            <div className="w-16 h-1 bg-brand-primary mx-auto"></div>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-lg text-neutral-300 leading-relaxed">
              A <strong className="text-brand-primary">MXMO</strong> é uma consultoria especializada em{" "}
              <strong className="text-white">transformação digital e crescimento empresarial</strong>.
            </p>
            
            <p className="text-lg text-neutral-300 leading-relaxed">
              Nossa missão é <strong className="text-white">acelerar o crescimento de empresas</strong> através 
              de estratégias personalizadas, otimização de processos e implementação de tecnologias que geram 
              resultados reais e mensuráveis.
            </p>
            
            <p className="text-lg text-neutral-300 leading-relaxed">
              Não trabalhamos com soluções prontas. Cada projeto é{" "}
              <strong className="text-brand-primary">desenvolvido sob medida</strong> para as necessidades 
              específicas do seu negócio.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-brand-primary">10+</div>
              <div className="text-neutral-300">Anos de experiência</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-brand-primary">200+</div>
              <div className="text-neutral-300">Empresas transformadas</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-brand-primary">95%</div>
              <div className="text-neutral-300">Taxa de sucesso</div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 max-w-3xl mx-auto">
          <div className="space-y-4">
            <p className="text-lg italic text-neutral-300">
              "A MXMO transformou completamente nossa operação. Em 6 meses, conseguimos 
              aumentar nossa eficiência em 40% e dobrar nosso faturamento."
            </p>
            <div className="space-y-1">
              <p className="font-semibold text-white">Ana Paula Santos</p>
              <p className="text-sm text-neutral-400">CEO, Inovação Digital</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;