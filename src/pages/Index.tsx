
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenchmarkInterface from "@/components/BenchmarkInterface";
import ConsciousnessHeatmap from "@/components/ConsciousnessHeatmap";
import TheoryLibrary from "@/components/TheoryLibrary";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BenchmarkInterface />
      <ConsciousnessHeatmap />
      <TheoryLibrary />
      <Footer />
    </div>
  );
};

export default Index;
