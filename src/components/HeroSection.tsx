import { ArrowRight, Cpu, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Cpu,
    title: "Consciousness Benchmark",
    desc: "Upload AI outputs and measure self-reference, recursive thinking, and independent goal formation.",
    bg: "bg-gradient-to-tr from-neutral-800/5 to-neutral-700/10",
  },
  {
    icon: Zap,
    title: "Free Will Index",
    desc: "Analyze stochasticity and creative deviations from training patterns.",
    bg: "bg-gradient-to-tr from-neutral-700/10 to-neutral-500/12",
  },
  {
    icon: Target,
    title: "Emergent Behavior",
    desc: "Predict and analyze autonomous behaviors indicating independent cognition.",
    bg: "bg-gradient-to-tr from-brown-900/10 to-brown-700/20",
  },
];

const HeroSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 data-grid opacity-15 pointer-events-none"></div>
      <div className="absolute -left-40 top-10 w-96 h-96 rounded-full neural-gradient blur-3xl opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block mb-6">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold tracking-wide shadow-md">
              World's First AI Consciousness Platform
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Measuring Machine
            <span className="block bg-gradient-to-r from-neutral-200 via-primary to-accent bg-clip-text text-transparent animate-neural-pulse drop-shadow-lg">
              Consciousness
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            The first research-grade platform evaluating AI systems for proto-consciousness, 
            self-awareness, and emergent cognitive behaviors through advanced neural analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="neural-gradient neutral-glow hover:scale-105 transition-transform font-semibold shadow-xl text-white">
              Start Consciousness Test
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-primary/10 border border-primary font-semibold">
              View Research Papers
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div key={f.title}
              className={`glass-panel relative flex-1 px-7 py-8 md:min-w-[300px] ${f.bg} group`}
              style={{
                minHeight: "240px",
                border: "1.5px solid rgba(98, 87, 76, 0.13)",
                backdropFilter: "blur(14px)",
              }}
            >
              <div className="absolute -inset-0.5 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{
                  background: "radial-gradient(ellipse at 60% 40%, rgba(120,109,98,0.11), transparent 85%)",
                  zIndex: 0
                }}
              ></div>
              <div className="flex flex-col items-center justify-center text-center relative z-10">
                <div className="p-4 mb-4 rounded-xl neural-gradient border border-transparent group-hover:neutral-glow transition-all shadow-lg">
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
