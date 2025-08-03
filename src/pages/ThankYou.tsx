import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  const navigate = useNavigate();
  const [leadData, setLeadData] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem('diagnostic-responses');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setLeadData(parsed.lead);
      } catch (error) {
        console.error('Erro ao carregar dados do diagnóstico:', error);
        navigate('/');
      }
    } else {
      navigate('/');
    }
  }, [navigate]);

  const handleBackToHome = () => {
    // Opcionalmente limpar os dados salvos
    // localStorage.removeItem('diagnostic-responses');
    navigate('/');
  };

  if (!leadData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-mxmo-champagne to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Logo ou header */}
        <div className="space-y-2">
          <div className="text-mxmo-navy/60 text-sm font-medium tracking-wider">
            MXMO • DIAGNÓSTICO ESTRATÉGICO
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-mxmo-navy">
              Obrigado, {leadData.name}!
            </h1>
            
            <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full"></div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-mxmo-navy/10 shadow-lg">
            <p className="text-lg text-mxmo-navy/80 leading-relaxed">
              Estamos processando suas respostas. Em instantes, você receberá um e-mail com o seu 
              <strong className="text-mxmo-navy"> diagnóstico estratégico</strong> e os insights sobre os 
              gargalos da <strong className="text-mxmo-navy">{leadData.company}</strong>.
            </p>
            
            <p className="text-base text-mxmo-navy/70 mt-4">
              Fique de olho na sua caixa de entrada!
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 text-mxmo-navy/60">
              <div className="w-2 h-2 bg-mxmo-gold rounded-full animate-pulse"></div>
              <span className="text-sm">Processando diagnóstico...</span>
            </div>
          </div>
        </div>

        {/* Botão de ação */}
        <div className="pt-4">
          <Button 
            onClick={handleBackToHome}
            className="premium-button bg-gradient-gold text-mxmo-navy px-8 py-3"
          >
            VOLTAR AO INÍCIO
          </Button>
        </div>

        {/* Informação adicional */}
        <div className="text-xs text-mxmo-navy/50 space-y-1">
          <p>Não recebeu o e-mail? Verifique sua caixa de spam.</p>
          <p>Dúvidas? Entre em contato conosco.</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;