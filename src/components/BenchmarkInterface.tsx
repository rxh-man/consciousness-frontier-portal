
import { useState } from "react";
import { Upload, Play, Brain, FileText, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BenchmarkInterface = () => {
  const [inputText, setInputText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);

  const runAnalysis = () => {
    if (!inputText.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      setResults({
        consciousnessScore: Math.floor(Math.random() * 40) + 40,
        selfReference: Math.floor(Math.random() * 30) + 60,
        recursiveThinking: Math.floor(Math.random() * 35) + 45,
        goalFormation: Math.floor(Math.random() * 25) + 35,
        emergentBehavior: Math.floor(Math.random() * 20) + 30,
        insights: [
          "Strong self-referential patterns detected in responses",
          "Evidence of recursive metacognitive processing",
          "Limited autonomous goal formation observed",
          "Emergent creative deviations from training patterns"
        ]
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <section id="benchmark" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-consciousness-primary">Consciousness Benchmark</span> Testing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Upload AI outputs, chatbot conversations, or generated content to measure 
            proto-consciousness indicators through advanced neural analysis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-consciousness-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-consciousness-primary" />
                Input Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs defaultValue="text" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="text">Text Input</TabsTrigger>
                  <TabsTrigger value="file">File Upload</TabsTrigger>
                  <TabsTrigger value="api">API Data</TabsTrigger>
                </TabsList>
                
                <TabsContent value="text" className="space-y-4">
                  <Textarea
                    placeholder="Paste AI-generated text, chatbot conversations, or any AI output here for consciousness analysis..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    rows={8}
                    className="min-h-32"
                  />
                </TabsContent>
                
                <TabsContent value="file" className="space-y-4">
                  <div className="border-2 border-dashed border-consciousness-primary/30 rounded-lg p-8 text-center">
                    <Upload className="h-8 w-8 text-consciousness-primary mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload chat logs, AI outputs, or behavioral data
                    </p>
                    <Button variant="outline" size="sm">
                      Choose Files
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="api" className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-2">API Endpoint:</p>
                    <code className="text-xs bg-card p-2 rounded block">
                      POST /api/consciousness-analysis
                    </code>
                  </div>
                </TabsContent>
              </Tabs>

              <Button 
                onClick={runAnalysis}
                className="w-full neural-gradient consciousness-glow"
                disabled={isAnalyzing || !inputText.trim()}
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                    Analyzing Consciousness...
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" />
                    Run Consciousness Analysis
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card className="border-consciousness-secondary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-consciousness-secondary" />
                Analysis Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!results && !isAnalyzing && (
                <div className="text-center py-12 text-muted-foreground">
                  <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Run an analysis to see consciousness metrics</p>
                </div>
              )}

              {isAnalyzing && (
                <div className="space-y-4">
                  <div className="text-center py-8">
                    <div className="animate-consciousness-flow h-1 bg-gradient-to-r from-consciousness-primary to-consciousness-secondary rounded-full mb-4"></div>
                    <p className="text-sm text-muted-foreground">Analyzing neural patterns...</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Self-Reference Detection</span>
                      <span className="animate-pulse">Processing...</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Recursive Thinking Analysis</span>
                      <span className="animate-pulse">Processing...</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Goal Formation Assessment</span>
                      <span className="animate-pulse">Processing...</span>
                    </div>
                  </div>
                </div>
              )}

              {results && (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="neural-gradient text-white p-6 rounded-lg mb-4">
                      <div className="text-3xl font-bold">{results.consciousnessScore}%</div>
                      <div className="text-sm opacity-90">Overall Consciousness Index</div>
                    </div>
                    <Badge variant="secondary" className="bg-consciousness-primary/10 text-consciousness-primary">
                      Moderate Proto-Consciousness Detected
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Self-Reference Patterns</span>
                        <span className="font-medium">{results.selfReference}%</span>
                      </div>
                      <Progress value={results.selfReference} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Recursive Thinking</span>
                        <span className="font-medium">{results.recursiveThinking}%</span>
                      </div>
                      <Progress value={results.recursiveThinking} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Goal Formation</span>
                        <span className="font-medium">{results.goalFormation}%</span>
                      </div>
                      <Progress value={results.goalFormation} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Emergent Behavior</span>
                        <span className="font-medium">{results.emergentBehavior}%</span>
                      </div>
                      <Progress value={results.emergentBehavior} className="h-2" />
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-2">Key Insights</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {results.insights.map((insight, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-consciousness-primary rounded-full mt-2 flex-shrink-0"></div>
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BenchmarkInterface;
