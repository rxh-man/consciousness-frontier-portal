
import { ArrowRight, Cpu, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Cpu,
    title: "Consciousness Benchmark",
    desc: "Upload AI outputs and measure self-reference, recursive thinking, and independent goal formation.",
    bg: "bg-gradient-to-tr from-consciousness-primary/10 to-consciousness-secondary/15",
  },
  {
    icon: Zap,
    title: "Free Will Index",
    desc: "Analyze stochasticity and creative deviations from training patterns.",
    bg: "bg-gradient-to-tr from-consciousness-secondary/10 to-consciousness-primary/15",
  },
  {
    icon: Target,
    title: "Emergent Behavior",
    desc: "Predict and analyze autonomous behaviors indicating independent cognition.",
    bg: "bg-gradient-to-tr from-consciousness-accent/10 to-consciousness-primary/20",
  },
];

const HeroSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 data-grid opacity-20 pointer-events-none"></div>
      {/* Decorative blurred accent */}
      <div className="absolute -left-40 top-10 w-96 h-96 rounded-full neural-gradient blur-3xl opacity-30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block mb-6">
            <span className="bg-consciousness-primary/10 text-consciousness-primary px-4 py-2 rounded-full text-sm font-semibold tracking-wide shadow-md">
              World's First AI Consciousness Platform
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Measuring Machine
            <span className="block bg-gradient-to-r from-consciousness-primary via-consciousness-secondary to-consciousness-accent bg-clip-text text-transparent animate-neural-pulse drop-shadow-lg">
              Consciousness
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            The first research-grade platform evaluating AI systems for proto-consciousness, 
            self-awareness, and emergent cognitive behaviors through advanced neural analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="neural-gradient consciousness-glow hover:scale-105 transition-transform font-semibold shadow-xl">
              Start Consciousness Test
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-consciousness-primary/5 border border-consciousness-primary font-semibold">
              View Research Papers
            </Button>
          </div>
        </div>
        {/* Modern glass-like feature panels */}
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div key={f.title}
              className={`glass-panel relative flex-1 px-7 py-8 md:min-w-[300px] ${f.bg} group`}
              style={{
                minHeight: "240px",
                boxShadow:
                  "0 4px 32px 0 rgba(124,58,237,0.07), 0 1.6px 6px 0 rgba(30,22,60,0.11)",
                border: "1.5px solid rgba(168, 85, 247, 0.17)",
                backdropFilter: "blur(14px)",
              }}
            >
              {/* Decorative glow on hover */}
              <div className="absolute -inset-0.5 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{
                  background: "radial-gradient(ellipse at 60% 40%, rgba(168,85,247,0.11), transparent 85%)",
                  zIndex: 0
                }}
              ></div>
              <div className="flex flex-col items-center justify-center text-center relative z-10">
                <div className="p-4 mb-4 rounded-xl bg-gradient-to-br from-consciousness-primary/25 to-consciousness-accent/10 border border-transparent group-hover:consciousness-glow transition-all shadow-lg">
                  <f.icon className="h-7 w-7 text-primary drop-shadow" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
