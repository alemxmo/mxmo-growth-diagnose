import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import AuthoritySection from "@/components/AuthoritySection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Strategic Landing Page - Single conversion path to diagnostic */}
      <HeroSection />
      <PainSection />
      <AuthoritySection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
