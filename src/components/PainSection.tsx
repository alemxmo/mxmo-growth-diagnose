const PainSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Problem Identification */}
        <div className="text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-mxmo-dark">
              Sua empresa parece ter{" "}
              <span className="text-mxmo-primary">atingido um platô</span>?
            </h2>
          </div>

          {/* Pain Points List */}
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-4 text-left">
              <div className="text-2xl text-mxmo-primary">✔️</div>
              <p className="text-lg text-mxmo-dark">Marketing sem ROI claro.</p>
            </div>
            
            <div className="flex items-center gap-4 text-left">
              <div className="text-2xl text-mxmo-primary">✔️</div>
              <p className="text-lg text-mxmo-dark">Vendas inconsistentes.</p>
            </div>
            
            <div className="flex items-center gap-4 text-left">
              <div className="text-2xl text-mxmo-primary">✔️</div>
              <p className="text-lg text-mxmo-dark">Equipe desalinhada.</p>
            </div>
            
            <div className="flex items-center gap-4 text-left">
              <div className="text-2xl text-mxmo-primary">✔️</div>
              <p className="text-lg text-mxmo-dark">Tecnologia como obstáculo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;