import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import AuthoritySection from "@/components/AuthoritySection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import DiagnosticModal from "@/components/DiagnosticModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Strategic Landing Page - Single conversion path to modal */}
      <HeroSection onOpenModal={() => setIsModalOpen(true)} />
      <PainSection />
      <AuthoritySection />
      <FinalCTASection onOpenModal={() => setIsModalOpen(true)} />
      <Footer />
      
      {/* Diagnostic Modal */}
      <DiagnosticModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
