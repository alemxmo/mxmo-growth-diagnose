import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

// Schema para captura de lead
const leadSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  company: z.string().min(2, "Empresa deve ter pelo menos 2 caracteres"),
});

// Schema para cada pergunta
const questionSchema = z.object({
  answer: z.string().min(1, "Selecione uma opção"),
});

interface DiagnosticWizardProps {
  onComplete: (data: Record<string, any>) => void;
  initialData: Record<string, any>;
  onUpdateData: (data: Record<string, any>) => void;
}

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

const DiagnosticWizard = ({ onComplete, initialData, onUpdateData }: DiagnosticWizardProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = questions.length + 1; // +1 para captura de lead
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const leadForm = useForm({
    resolver: zodResolver(leadSchema),
    defaultValues: initialData.lead || {
      name: "",
      email: "",
      phone: "",
      company: ""
    }
  });

  const questionForm = useForm({
    resolver: zodResolver(questionSchema),
    defaultValues: {
      answer: initialData.answers?.[questions[currentStep - 1]?.id] || ""
    }
  });

  const handleLeadSubmit = (data: any) => {
    const newData = { ...initialData, lead: data };
    onUpdateData(newData);
    setCurrentStep(1);
  };

  const handleQuestionSubmit = (data: any) => {
    const questionId = questions[currentStep - 1].id;
    const newAnswers = { ...initialData.answers, [questionId]: data.answer };
    const newData = { ...initialData, answers: newAnswers };
    onUpdateData(newData);

    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      // Reset form para próxima pergunta
      questionForm.reset({
        answer: newData.answers?.[questions[currentStep]?.id] || ""
      });
    } else {
      // Finalizar
      onComplete(newData);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      if (currentStep > 1) {
        // Carregar resposta da pergunta anterior
        const prevQuestionId = questions[currentStep - 2].id;
        questionForm.reset({
          answer: initialData.answers?.[prevQuestionId] || ""
        });
      }
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header com Progress */}
      <div className="px-6 py-4 border-b bg-gradient-to-r from-mxmo-navy to-mxmo-navy/90">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Diagnóstico Estratégico MXMO</h2>
          <div className="text-white/80 text-sm">
            {currentStep + 1} de {totalSteps}
          </div>
        </div>
        <Progress value={progress} className="h-2 bg-white/20" />
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {currentStep === 0 ? (
          // Captura de Lead
          <div className="max-w-md mx-auto space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-mxmo-navy">Vamos começar!</h3>
              <p className="text-mxmo-navy/70">
                Primeiro, precisamos de algumas informações básicas para personalizar seu diagnóstico.
              </p>
            </div>

            <Form {...leadForm}>
              <form onSubmit={leadForm.handleSubmit(handleLeadSubmit)} className="space-y-4">
                <FormField
                  control={leadForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite seu nome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={leadForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail profissional</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="seu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={leadForm.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Input placeholder="(11) 99999-9999" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={leadForm.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Empresa</FormLabel>
                      <FormControl>
                        <Input placeholder="Nome da sua empresa" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full premium-button bg-gradient-gold text-mxmo-navy">
                  INICIAR DIAGNÓSTICO
                </Button>
              </form>
            </Form>
          </div>
        ) : (
          // Perguntas
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="space-y-3">
              <div className="text-center">
                <span className="inline-block px-3 py-1 bg-mxmo-gold/20 text-mxmo-navy text-sm font-medium rounded-full">
                  Pergunta {currentStep} de {questions.length}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-mxmo-navy leading-relaxed">
                {questions[currentStep - 1].title}
              </h3>
            </div>

            <Form {...questionForm}>
              <form onSubmit={questionForm.handleSubmit(handleQuestionSubmit)} className="space-y-6">
                <FormField
                  control={questionForm.control}
                  name="answer"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="space-y-3"
                        >
                          {questions[currentStep - 1].options.map((option) => (
                            <div key={option.value} className="flex items-start space-x-3 p-4 border border-mxmo-navy/20 rounded-lg hover:bg-mxmo-champagne/30 transition-colors">
                              <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                              <Label htmlFor={option.value} className="text-mxmo-navy leading-relaxed cursor-pointer flex-1">
                                <span className="font-medium">{option.value})</span> {option.label}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleBack}
                    className="flex-1"
                  >
                    VOLTAR
                  </Button>
                  <Button 
                    type="submit" 
                    className="flex-1 premium-button bg-gradient-gold text-mxmo-navy"
                  >
                    {currentStep === questions.length ? 'ENVIAR MEU DIAGNÓSTICO' : 'PRÓXIMA'}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiagnosticWizard;