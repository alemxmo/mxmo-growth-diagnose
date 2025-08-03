import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import DiagnosticWizard from "./DiagnosticWizard";

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DiagnosticModal = ({ isOpen, onClose }: DiagnosticModalProps) => {
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
    if (isOpen) {
      const saved = localStorage.getItem('diagnostic-responses');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setResponses(parsed);
        } catch (error) {
          console.error('Erro ao carregar respostas salvas:', error);
        }
      }
    }
  }, [isOpen]);

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
    
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[100vw] sm:w-[95vw] max-w-4xl h-[100vh] sm:h-[90vh] max-h-none sm:max-h-[700px] p-0 bg-white border-none m-0 sm:m-6 rounded-none sm:rounded-lg">
        <DialogHeader className="sr-only">
          <DialogTitle>Diagnóstico Estratégico MXMO</DialogTitle>
        </DialogHeader>
        
        <DiagnosticWizard 
          onComplete={handleComplete}
          initialData={responses}
          onUpdateData={setResponses}
        />
      </DialogContent>
    </Dialog>
  );
};

export default DiagnosticModal;