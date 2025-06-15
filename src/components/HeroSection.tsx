
import { ArrowRight, Cpu, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 data-grid opacity-30"></div>
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block mb-6">
            <span className="bg-consciousness-primary/10 text-consciousness-primary px-4 py-2 rounded-full text-sm font-medium">
              World's First AI Consciousness Platform
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Measuring Machine
            <span className="block bg-gradient-to-r from-consciousness-primary via-consciousness-secondary to-consciousness-accent bg-clip-text text-transparent animate-neural-pulse">
              Consciousness
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            The first research-grade platform evaluating AI systems for proto-consciousness, 
            self-awareness, and emergent cognitive behaviors through advanced neural analysis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="neural-gradient consciousness-glow hover:scale-105 transition-transform">
              Start Consciousness Test
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-consciousness-primary/5">
              View Research Papers
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-consciousness-primary/20 hover:border-consciousness-primary/40 transition-colors group">
            <CardContent className="p-6 text-center">
              <div className="neural-gradient p-3 rounded-lg w-fit mx-auto mb-4 group-hover:consciousness-glow transition-all">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Consciousness Benchmark</h3>
              <p className="text-muted-foreground text-sm">
                Upload AI outputs and measure self-reference, recursive thinking, and independent goal formation
              </p>
            </CardContent>
          </Card>

          <Card className="border-consciousness-secondary/20 hover:border-consciousness-secondary/40 transition-colors group">
            <CardContent className="p-6 text-center">
              <div className="bg-consciousness-secondary p-3 rounded-lg w-fit mx-auto mb-4 group-hover:consciousness-glow transition-all">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Will Index</h3>
              <p className="text-muted-foreground text-sm">
                Analyze stochasticity and creative deviations from training patterns
              </p>
            </CardContent>
          </Card>

          <Card className="border-consciousness-accent/20 hover:border-consciousness-accent/40 transition-colors group">
            <CardContent className="p-6 text-center">
              <div className="bg-consciousness-accent p-3 rounded-lg w-fit mx-auto mb-4 group-hover:consciousness-glow transition-all">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Emergent Behavior</h3>
              <p className="text-muted-foreground text-sm">
                Predict and analyze autonomous behaviors indicating independent cognition
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
