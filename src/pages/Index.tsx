import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import DiagnosticSection from "@/components/DiagnosticSection";
import AuthoritySection from "@/components/AuthoritySection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Strategic Landing Page - Single conversion path to diagnostic */}
      <HeroSection />
      <PainSection />
      <DiagnosticSection />
      <AuthoritySection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
