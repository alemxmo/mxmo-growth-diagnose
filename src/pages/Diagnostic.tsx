import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DiagnosticWizard from "@/components/DiagnosticWizard";

const Diagnostic = () => {
  const navigate = useNavigate();
  const [responses, setResponses] = useState<Record<string, any>>({});

  // Salvar respostas no localStorage a cada mudança
  useEffect(() => {
    if (Object.keys(responses).length > 0) {
      localStorage.setItem('diagnostic-responses', JSON.stringify({
        ...responses,
        lastUpdated: new Date().toISOString()
      }));
    }
  }, [responses]);

  // Carregar respostas salvas ao abrir
  useEffect(() => {
    const saved = localStorage.getItem('diagnostic-responses');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setResponses(parsed);
      } catch (error) {
        console.error('Erro ao carregar respostas salvas:', error);
      }
    }
  }, []);

  const handleComplete = (finalResponses: Record<string, any>) => {
    // Salvar versão final
    const finalData = {
      ...finalResponses,
      completedAt: new Date().toISOString(),
      status: 'completed'
    };
    
    localStorage.setItem('diagnostic-responses', JSON.stringify(finalData));
    console.log('Diagnóstico finalizado:', finalData);
    
    // Aqui você pode enviar para o backend
    // await submitDiagnostic(finalData);
    
    // Redirecionar para página de agradecimento
    navigate('/thank-you');
  };

  const handleExit = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header com botão de voltar */}
      <div className="bg-gradient-to-r from-mxmo-navy to-mxmo-navy/90 px-4 sm:px-6 py-3 sm:py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={handleExit}
            className="text-white hover:text-mxmo-gold transition-colors text-sm flex items-center gap-2"
          >
            ← Voltar para início
          </button>
          <div className="text-white/80 text-xs sm:text-sm">
            MXMO • Diagnóstico Estratégico
          </div>
        </div>
      </div>

      {/* Wizard container */}
      <div className="h-[calc(100vh-80px)]">
        <DiagnosticWizard 
          onComplete={handleComplete}
          initialData={responses}
          onUpdateData={setResponses}
        />
      </div>
    </div>
  );
};

export default Diagnostic;