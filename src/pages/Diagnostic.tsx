import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import DiagnosticWizard from "@/components/DiagnosticWizard";
import { useToast } from "@/hooks/use-toast";

const Diagnostic = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [responses, setResponses] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const sendEmailWithResults = async (finalData: Record<string, any>) => {
    setIsSubmitting(true);
    
    try {
      // Formatar as respostas para o email
      const answersText = Object.entries(finalData.answers || {})
        .map(([questionId, answer]) => {
          const question = getQuestionById(questionId);
          const option = question?.options.find(opt => opt.value === answer);
          return `${question?.title}\nResposta: ${answer}) ${option?.label}\n`;
        })
        .join('\n---\n\n');

      const templateParams = {
        to_name: 'MXMO Team',
        from_name: finalData.lead?.name || 'Cliente',
        client_name: finalData.lead?.name || '',
        client_email: finalData.lead?.email || '',
        client_phone: finalData.lead?.phone || '',
        client_company: finalData.lead?.company || '',
        answers: answersText,
        completed_at: new Date(finalData.completedAt).toLocaleString('pt-BR')
      };

      await emailjs.send(
        'service_soq4zxl', // Service ID fornecido
        'template_xxx', // Template ID - você precisa configurar
        templateParams,
        'your_public_key' // Public Key - você precisa fornecer
      );

      toast({
        title: "Diagnóstico enviado!",
        description: "Recebemos suas respostas. Em breve você receberá o resultado por email.",
      });

      navigate('/thank-you');
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      toast({
        title: "Erro ao enviar",
        description: "Houve um problema. Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getQuestionById = (id: string) => {
    const questions = [
      {
        id: "strategy",
        title: "Qual frase descreve melhor a clareza da sua estratégia e metas para TODA a equipe?",
        options: [
          { value: "A", label: "Temos metas claras, todos conhecem e os resultados são acompanhados em tempo real." },
          { value: "B", label: "As metas existem, mas sinto que a equipe se perde na execução do dia a dia." },
          { value: "C", label: "A estratégia e as metas principais estão claras para mim, mas não para o resto da empresa." },
          { value: "D", label: "Operamos de forma reativa, apagando incêndios, sem metas formais de longo prazo." }
        ]
      },
      {
        id: "positioning",
        title: "Pensando no seu cliente ideal, quão confiante você está de que sua oferta resolve uma dor real e se diferencia CLARAMENTE da concorrência?",
        options: [
          { value: "A", label: "Muito confiante. Nossos clientes nos dizem que nossa solução é única." },
          { value: "B", label: "Confiante, mas na prática, muitas vezes competimos apenas por preço." },
          { value: "C", label: "Temos um bom produto, mas sinto que não comunicamos nosso valor de forma eficaz." },
          { value: "D", label: "Sinceramente, não tenho certeza de qual é o nosso maior diferencial na visão do cliente." }
        ]
      },
      {
        id: "marketing",
        title: "Sobre a geração de novas oportunidades de negócio (leads), qual a sua realidade hoje?",
        options: [
          { value: "A", label: "Temos um fluxo constante e previsível de leads qualificados entrando todo mês." },
          { value: "B", label: "Geramos leads, mas o volume é inconsistente e depende muito de indicações." },
          { value: "C", label: "Investimos em marketing, mas não consigo medir o ROI ou a qualidade dos leads gerados." },
          { value: "D", label: "Nossa geração de leads é praticamente inexistente ou aleatória." }
        ]
      },
      {
        id: "sales",
        title: "Uma vez que um lead qualificado chega, como funciona seu processo de vendas?",
        options: [
          { value: "A", label: "Temos um processo estruturado (playbook), e a taxa de conversão é alta e previsível." },
          { value: "B", label: "Cada vendedor tem seu próprio jeito de vender; os resultados variam muito entre eles." },
          { value: "C", label: "Temos um processo, mas perdemos muitas oportunidades por falta de follow-up ou velocidade." },
          { value: "D", label: "Não temos um processo formal. A venda acontece 'no instinto'." }
        ]
      },
      {
        id: "data",
        title: "Como você usa dados para tomar decisões sobre vendas e marketing?",
        options: [
          { value: "A", label: "Nossas ferramentas nos dão relatórios claros e em tempo real para decisões estratégicas." },
          { value: "B", label: "Coletamos muitos dados, mas eles são confusos e não geram insights práticos." },
          { value: "C", label: "Tomamos decisões com base na experiência e intuição, pois não confiamos nos dados que temos." },
          { value: "D", label: "Quais dados? Está tudo em planilhas espalhadas ou na cabeça das pessoas." }
        ]
      },
      {
        id: "efficiency",
        title: "Quanto tempo sua equipe de vendas gasta em tarefas manuais (preencher planilhas, enviar e-mails repetitivos) versus tempo efetivamente vendendo?",
        options: [
          { value: "A", label: "Muito pouco. A maior parte do tempo é dedicada a interações com clientes." },
          { value: "B", label: "É equilibrado, mas sinto que poderiam ser mais produtivos com melhores ferramentas." },
          { value: "C", label: "Eles gastam tempo demais em tarefas administrativas, o que atrasa as negociações." },
          { value: "D", label: "É o maior ladrão de tempo da equipe. A burocracia e o trabalho manual são enormes." }
        ]
      },
      {
        id: "scalability",
        title: "Se sua demanda dobrasse no próximo mês, sua operação atual estaria pronta para atender com a mesma qualidade?",
        options: [
          { value: "A", label: "Sim, nossos processos e tecnologia são escaláveis e suportariam o crescimento." },
          { value: "B", label: "Conseguiríamos, mas com muito esforço manual e risco de queda na qualidade." },
          { value: "C", label: "Provavelmente não. Seria o caos e a qualidade do serviço cairia drasticamente." },
          { value: "D", label: "Não temos a menor condição de dobrar a operação hoje." }
        ]
      }
    ];
    return questions.find(q => q.id === id);
  };

  const handleComplete = async (finalResponses: Record<string, any>) => {
    const finalData = {
      ...finalResponses,
      completedAt: new Date().toISOString(),
      status: 'completed'
    };
    
    localStorage.setItem('diagnostic-responses', JSON.stringify(finalData));
    console.log('Diagnóstico finalizado:', finalData);
    
    // Enviar por email
    await sendEmailWithResults(finalData);
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