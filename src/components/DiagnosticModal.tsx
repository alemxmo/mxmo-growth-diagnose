import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DiagnosticModal = ({ isOpen, onClose }: DiagnosticModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-2xl h-[90vh] max-h-[600px] p-0 bg-white border-none">
        <DialogHeader className="sr-only">
          <DialogTitle>Diagnóstico Estratégico MXMO</DialogTitle>
        </DialogHeader>
        
        {/* Typeform será integrado aqui */}
        <div className="w-full h-full flex items-center justify-center p-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-mxmo-primary rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">📋</span>
            </div>
            <h3 className="text-xl font-semibold text-mxmo-dark">
              Diagnóstico Estratégico MXMO
            </h3>
            <p className="text-mxmo-dark/70">
              Integração com Typeform será implementada aqui
            </p>
            <div className="text-sm text-mxmo-dark/50">
              💡 Formulário será carregado em poucos segundos
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DiagnosticModal;