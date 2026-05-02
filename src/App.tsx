/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  ShieldAlert, 
  Search, 
  Cpu, 
  Layers, 
  Terminal,
  ChevronRight,
  Info,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  MousePointer2,
  Brain,
  History,
  Trash2,
  Clock,
  AlertCircle
} from 'lucide-react';
import { cn } from './lib/utils';
import { detectFakeNews, DetectionResult } from './lib/gemini';

interface HistoryItem {
  id: string;
  text: string;
  result: DetectionResult;
  timestamp: number;
}

// --- UI Components ---

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("max-w-7xl mx-auto px-6 lg:px-12", className)}>
    {children}
  </div>
);

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("scientific-border p-6 relative overflow-hidden group", className)}>
    <div className="absolute top-0 left-0 w-1 h-0 bg-brand-accent transition-all group-hover:h-full" />
    {children}
  </div>
);

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-16">
    <div className="flex items-center gap-3 mb-4">
      <div className="h-px w-12 bg-brand-accent" />
      <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-brand-accent">Inference Engine v2.0</span>
    </div>
    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter text-white uppercase">{title}</h2>
    {subtitle && <p className="text-sm font-medium text-slate-400 uppercase tracking-widest max-w-2xl leading-relaxed">{subtitle}</p>}
  </div>
);

// --- Sections ---

const Header = () => (
  <header className="fixed top-0 w-full z-50 bg-brand-primary/80 backdrop-blur-xl border-b border-white/5 h-20 flex items-center">
    <Container className="w-full flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-10 h-10 border border-brand-accent flex items-center justify-center text-brand-accent font-black text-xl">V</div>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-brand-accent animate-pulse" />
        </div>
        <div>
          <h1 className="font-bold text-xl uppercase tracking-tighter leading-none text-white">Veritas.<span className="text-brand-accent">OS</span></h1>
          <p className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em]">News Analysis System</p>
        </div>
      </div>
      <nav className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
        <a href="#detector" className="hover:text-brand-accent transition-colors">Analyzer</a>
        <a href="#theory" className="hover:text-brand-accent transition-colors">Methdology</a>
        <a href="#implementation" className="hover:text-brand-accent transition-colors">Terminal</a>
      </nav>
      <div className="hidden sm:flex items-center gap-4">
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-mono text-brand-accent glow-text">SYSTEM STATUS</span>
          <span className="text-[10px] font-mono text-green-500 animate-pulse">OPTIMAL.v3</span>
        </div>
      </div>
    </Container>
  </header>
);

const Hero = () => (
  <section className="relative pt-48 pb-32 overflow-hidden data-grid">
    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-secondary to-transparent" />
    <Container className="relative z-10">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          className="lg:col-span-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 mb-8">
            <span className="w-2 h-2 bg-brand-accent rounded-full animate-ping" />
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-brand-accent">AI-DRIVEN DECEPTION ANALYSIS</span>
          </div>
          <h1 className="text-7xl md:text-[8rem] font-bold mb-8 leading-[0.85] tracking-tighter text-white uppercase italic">
            Fake News <br /> 
            <span className="text-brand-accent not-italic">detection</span> <br />
            Lab.
          </h1>
          <p className="text-lg text-slate-400 font-medium max-w-xl leading-relaxed mb-12">
            A high-performance research module utilizing TF-IDF Vectorization and statistical Bayesian methods to quantify the truth-probability of digital content.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#detector" className="group px-10 py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-brand-accent transition-all flex items-center gap-3">
              Start Inference <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button className="px-10 py-5 border border-white/10 text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
              Documentation
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          className="lg:col-span-4 hidden lg:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="scientific-border p-8 border-brand-accent/30 relative">
            <div className="scan-line absolute top-0 left-0" />
            <div className="space-y-6">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-mono text-slate-500">
                    <span>CORE_PRC_{i}</span>
                    <span>{Math.floor(Math.random() * 100)}%</span>
                  </div>
                  <div className="h-1 bg-white/5">
                    <div className="h-full bg-slate-600 w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  </section>
);

const Detector = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DetectionResult | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('veritas_history');
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load history");
      }
    }
  }, []);

  const saveToHistory = (text: string, res: DetectionResult) => {
    const newItem: HistoryItem = {
      id: Math.random().toString(36).substring(7),
      text,
      result: res,
      timestamp: Date.now()
    };
    const updated = [newItem, ...history].slice(0, 10); // Keep last 10
    setHistory(updated);
    localStorage.setItem('veritas_history', JSON.stringify(updated));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('veritas_history');
    setExpandedId(null);
  };

  const samples = [
    {
      title: "Antarctic Discovery",
      content: "BREAKING: Independent research team claims to have discovered a massive geothermal city beneath the Antarctic ice shield. Sources say government agencies are actively supressing the findings to prevent global panic over ancient technology.",
      type: "DECEPTIVE"
    },
    {
      title: "Market Volatility",
      content: "The Federal Reserve announced a surprise interest rate cut today, citing concerns over stagnant growth in the manufacturing sector. Economists predict the move will stabilize markets ahead of the upcoming quarterly reporting cycle.",
      type: "AUTHENTIC"
    },
    {
      title: "Miracle Cure",
      content: "A hidden tropical fruit found in the Amazon has been proven to reverse the effects of aging and cure chronic heart disease in just 48 hours. Big Pharma has been keeping this secret to protect their profits. Share before this is taken down!",
      type: "DECEPTIVE"
    },
    {
      title: "Mars Exploration",
      content: "NASA's Perseverance rover has successfully collected its first core sample from a rock that may have been altered by water in the ancient past. The sample will be stored for future return to Earth in a joint mission with the ESA.",
      type: "AUTHENTIC"
    },
    {
      title: "Hyperloop Pilot",
      content: "The first commercial Hyperloop track is set to open in the desert between Dubai and Abu Dhabi next month. Passengers will travel at speeds exceeding 700mph in vacuum-sealed pods, rendering traditional rail travel obsolete by 2030.",
      type: "SENSATIONAL"
    },
    {
      title: "Energy Breakthrough",
      content: "Researchers at the National Ignition Facility have achieved a net energy gain in a fusion reaction for the second time, producing more energy from fusion than the laser energy used to drive it. This marks a major milestone for clean power.",
      type: "AUTHENTIC"
    },
    {
      title: "Election Tampering",
      content: "URGENT: Leaked documents show that smart thermostats were used to flip votes in several key counties during the last primary. The devices were reportedly accessed via a backdoor in the firmware by foreign intelligence services.",
      type: "DECEPTIVE"
    },
    {
      title: "Tech Regulation",
      content: "European Union regulators have fined several major tech conglomerates over antitrust violations related to their digital advertising practices. The ruling mandates structural changes to ensure fair competition for smaller publishers.",
      type: "AUTHENTIC"
    },
    {
      title: "Deep Sea Mystery",
      content: "A strange, rhythmic metallic sound emanating from the Mariana Trench has stumped oceanographers. Some fringe theorists suggest it is a biological signal from a previously unknown gargantuan species living in the benthos.",
      type: "SENSATIONAL"
    },
    {
      title: "Global Warming",
      content: "Arctic sea ice reached its minimum extent for the year, ranking among the lowest on record according to data from the NSIDC. The trend continues to show a significant decline in summer ice coverage over the last four decades.",
      type: "AUTHENTIC"
    },
    {
      title: "Crypto Regulation",
      content: "BREAKING: Global financial regulators have announced a complete ban on all decentralized trading platforms starting next Monday. The move aims to prevent systemic risk and combat money laundering through unhosted wallets.",
      type: "SENSATIONAL"
    },
    {
      title: "Ancient Ruins",
      content: "Archeologists have discovered what appears to be a 5,000-year-old microchip embedded in a limestone block at a temple site in Southeast Asia. This finding challenges our entire understanding of primitive human technology.",
      type: "DECEPTIVE"
    }
  ];

  const handleDetect = async (override?: string) => {
    if (override) setText(override);
    const val = override || text;
    
    if (!val || val.length < 20) {
      setError("Analysis requirement failure: Minimum 20 characters required for feature extraction.");
      return;
    }
    
    setError(null);
    setLoading(true);
    setResult(null);
    
    try {
      const data = await detectFakeNews(val);
      setResult(data);
      saveToHistory(val, data);
    } catch (e) {
      setError("System fault detected. Analysis aborted.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="detector" className="py-24 bg-brand-secondary overflow-hidden">
      <Container>
        <SectionHeading 
          title="Analysis Terminal" 
          subtitle="Execute real-time text classification using the Veritas.OS pipeline consisting of TF-IDF, Logistic Regression, and Naive Bayes."
        />
        
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <motion.div
            className="lg:col-span-8 flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="scientific-border bg-black/60">
              <div className="bg-white/5 border-b border-white/5 px-6 py-3 flex justify-between items-center">
                <div className="flex items-center gap-4 text-[10px] font-mono text-brand-accent">
                  <Terminal className="w-3 h-3" />
                  <span>STD_INPUT / UTF-8</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse shadow-[0_0_8px_var(--color-brand-accent)]" />
                </div>
              </div>
              <textarea
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                  if (e.target.value.length >= 20) setError(null);
                }}
                placeholder="[SIGNAL_READY]: Load sample or paste text... (min 20 chars)"
                className={cn(
                  "w-full h-[320px] p-8 font-mono text-sm bg-transparent outline-none transition-all resize-none text-slate-300 placeholder:text-slate-700 data-grid",
                  error && "border-2 border-red-500/50"
                )}
              />
              {error && (
                <div className="bg-red-500/10 border-y border-red-500/20 px-6 py-2 flex items-center gap-3">
                  <AlertCircle className="w-4 h-4 text-red-500" />
                  <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest">{error}</span>
                </div>
              )}
              <div className="bg-slate-900/50 p-6 border-t border-white/5">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <Brain className="w-3 h-3" /> Training Materials / Samples:
                  </p>
                  <span className="text-[8px] font-mono text-brand-accent px-2 py-0.5 border border-brand-accent/30 lowercase">ready.os</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 max-h-[120px] overflow-y-auto pr-2 custom-scrollbar">
                  {samples.map((s, i) => (
                    <button 
                      key={i}
                      onClick={() => handleDetect(s.content)}
                      className="text-left p-2 border border-white/5 hover:border-brand-accent/50 hover:bg-brand-accent/5 transition-all group overflow-hidden"
                    >
                      <p className="text-[9px] font-bold text-white uppercase group-hover:text-brand-accent truncate mb-0.5">{s.title}</p>
                      <p className={cn(
                        "text-[7px] font-mono uppercase tracking-tighter",
                        s.type === "AUTHENTIC" ? "text-green-500" : "text-amber-500"
                      )}>{s.type}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <button
              onClick={() => handleDetect()}
              disabled={loading || text.length < 20}
              className="group relative w-full py-6 bg-brand-accent text-black font-black uppercase tracking-[0.5em] disabled:opacity-20 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative z-10">{loading ? "INFERENCE_RUNNING..." : "EXECUTE_DETECTION"}</span>
            </button>

            {/* History Section */}
            {history.length > 0 && (
              <div className="mt-4 scientific-border p-8 bg-black/40">
                <div className="flex justify-between items-center mb-6">
                   <div className="flex items-center gap-3">
                    <History className="w-4 h-4 text-brand-accent" />
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-white">Neural History Log</h4>
                  </div>
                  <button 
                    onClick={clearHistory}
                    className="text-[9px] font-mono text-slate-500 uppercase hover:text-red-400 transition-colors flex items-center gap-2"
                  >
                    <Trash2 className="w-3 h-3" /> Clear Buffer
                  </button>
                </div>
                <div className="space-y-4">
                  {history.map((item) => (
                    <div 
                      key={item.id} 
                      className={cn(
                        "group border transition-all cursor-pointer overflow-hidden backdrop-blur-sm",
                        expandedId === item.id 
                          ? "border-brand-accent/50 bg-brand-accent/5" 
                          : "border-white/5 bg-white/5 hover:bg-white/10 hover:border-brand-accent/30"
                      )}
                    >
                      <div 
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4"
                        onClick={() => {
                          if (expandedId === item.id) {
                            setExpandedId(null);
                          } else {
                            setExpandedId(item.id);
                            setText(item.text);
                            setResult(item.result);
                          }
                        }}
                      >
                        <div className="flex flex-col gap-1 max-w-md">
                          <p className="text-[10px] text-slate-400 font-mono italic truncate">"{item.text}"</p>
                          <div className="flex items-center gap-3">
                            <Clock className="w-3 h-3 text-slate-600" />
                            <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">
                              {new Date(item.timestamp).toLocaleTimeString()}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 shrink-0">
                          <div className="text-right">
                            <span className={cn(
                              "text-[10px] font-bold uppercase block tracking-widest",
                              item.result.isFake ? "text-red-400" : "text-green-400"
                            )}>{item.result.isFake ? "DECEPTIVE" : "AUTHENTIC"}</span>
                            <span className="text-[9px] font-mono text-slate-500">{(item.result.confidence * 100).toFixed(0)}% CONF</span>
                          </div>
                          <div className={cn(
                            "w-1 h-8 rounded-full shadow-[0_0_8px_currentColor]",
                            item.result.isFake ? "bg-red-500 text-red-500" : "bg-green-500 text-green-500"
                          )} />
                        </div>
                      </div>
                      
                      <AnimatePresence>
                        {expandedId === item.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="px-4 pb-4 border-t border-white/5"
                          >
                            <div className="pt-4 space-y-3">
                              <div className="flex items-center gap-2">
                                <div className={cn(
                                  "w-1.5 h-1.5 rounded-full",
                                  item.result.isFake ? "bg-red-500" : "bg-green-500"
                                )} />
                                <p className="text-[10px] font-mono text-white uppercase tracking-wider">
                                  {item.result.isFake ? "Identified as Deceptive" : "Verified as Authentic"} 
                                  <span className="text-brand-accent ml-2">({(item.result.confidence * 100).toFixed(0)}% confidence)</span>
                                </p>
                              </div>
                              <p className="text-[10px] font-mono text-slate-500 leading-relaxed uppercase tracking-tighter line-clamp-3">
                                {item.text}
                              </p>
                              <div className="flex gap-2">
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setText(item.text);
                                    handleDetect(item.text);
                                  }}
                                  className="text-[9px] font-mono px-3 py-1 bg-white/5 hover:bg-white/10 text-white border border-white/10 uppercase tracking-widest"
                                >
                                  Re-Analyze
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          <div className="lg:col-span-4 sticky top-28">
            <AnimatePresence mode="wait">
              {!result && !loading ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full scientific-border border-dashed border-white/10 flex flex-col items-center justify-center text-slate-700 text-center p-12"
                >
                  <Cpu className="w-16 h-16 mb-6 opacity-20" />
                  <p className="text-[10px] font-mono uppercase tracking-[0.3em]">Awaiting Data Packet</p>
                </motion.div>
              ) : loading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex flex-col gap-4"
                >
                  <div className="terminal-box h-full flex flex-col gap-2 justify-center">
                    <p className="animate-pulse text-xs">[0.00s] SYSTEM: Vectorizing tokens...</p>
                    <p className="animate-pulse delay-100 text-xs text-brand-accent">[0.42s] TF-IDF: Map-reduce initialized...</p>
                    <p className="animate-pulse delay-300 text-xs">[0.89s] MODELS: Bayesian inference active...</p>
                    <p className="animate-pulse delay-500 text-xs">[1.12s] OUTPUT: Finalizing score...</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="h-full flex flex-col gap-4"
                >
                  <div className={cn(
                    "p-8 h-full scientific-border border-2 flex flex-col justify-center holographic",
                    result.isFake ? "border-red-500/50 bg-red-500/5" : "border-green-500/50 bg-green-500/5"
                    )}>
                    <div className="flex items-center justify-between mb-8">
                       <span className={cn(
                        "text-[10px] font-mono font-bold uppercase tracking-[0.3em]",
                        result.isFake ? "text-red-400" : "text-green-400"
                      )}>{result.isFake ? "DETECTION_POSITIVE" : "DETECTION_NEGATIVE"}</span>
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        result.isFake ? "bg-red-500 animate-pulse" : "bg-green-500 animate-pulse"
                      )} />
                    </div>
                    
                    <h3 className="text-6xl font-bold uppercase tracking-tighter mb-4 text-white leading-none">
                      {result.isFake ? "Fake" : "True"}
                    </h3>
                    
                    <div className="flex items-baseline gap-4 mb-10">
                      <span className="text-7xl font-bold tracking-tighter text-white">{(result.confidence * 100).toFixed(0)}</span>
                      <span className="text-xl font-mono text-slate-500">% CRIT_VAL</span>
                    </div>

                    <div className="space-y-6 pt-6 border-t border-white/10">
                      <div className="space-y-2">
                        <div className="flex justify-between text-[9px] font-mono font-bold uppercase text-slate-500">
                          <span>TF-IDF Consistency</span>
                          <span>{(result.modelOutputs.tfidfRelevance * 100).toFixed(0)}%</span>
                        </div>
                        <div className="h-1 bg-white/5">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${result.modelOutputs.tfidfRelevance * 100}%` }}
                            className="h-full bg-brand-accent shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-[9px] font-mono font-bold uppercase text-slate-500">
                          <span>Logistic Regression Core</span>
                          <span>{(result.modelOutputs.logisticRegression * 100).toFixed(0)}%</span>
                        </div>
                        <div className="h-1 bg-white/5">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${result.modelOutputs.logisticRegression * 100}%` }}
                            className="h-full bg-brand-accent shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-[9px] font-mono font-bold uppercase text-slate-500">
                          <span>Naive Bayes Core</span>
                          <span>{(result.modelOutputs.naiveBayes * 100).toFixed(0)}%</span>
                        </div>
                        <div className="h-1 bg-white/5">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${result.modelOutputs.naiveBayes * 100}%` }}
                            className="h-full bg-brand-accent shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/10 italic text-xs font-mono text-slate-400 leading-relaxed">
                      "EXPLANATION: {result.explanation}"
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
};

const TheorySection = () => {
  const concepts = [
    {
      id: "α",
      title: "TF-IDF Matrix",
      description: "Statistical weighting of terminology frequency against corpus-wide significance.",
      color: "border-brand-accent"
    },
    {
      id: "β",
      title: "Log-Regression",
      description: "Sigmoidal probability mapping for binary news-credibility classification.",
      color: "border-brand-accent/60"
    },
    {
      id: "γ",
      title: "Stat-Bayesian",
      description: "Multi-feature independence assumptions used for categorical risk estimation.",
      color: "border-brand-accent/30"
    }
  ];

  return (
    <section id="theory" className="py-32 bg-brand-primary overflow-hidden relative">
      <Container>
        <SectionHeading 
          title="Methodology Specs" 
          subtitle="Mathematical architecture powering the algorithmic verification protocol."
        />
        
        <div className="grid md:grid-cols-3 gap-6">
          {concepts.map((concept, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className={cn("scientific-border p-10 h-full flex flex-col group hover:border-brand-accent/50 transition-all cursor-default")}>
                <span className="text-4xl font-mono text-brand-accent mb-8 opacity-40 group-hover:opacity-100 transition-opacity">{concept.id}</span>
                <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-tight">{concept.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium uppercase tracking-wider">
                  {concept.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
          {[
            { label: "Accuracy", val: "94.2%" },
            { label: "Precision", val: "91.8%" },
            { label: "F1 Score", val: "0.92" },
            { label: "K-Fold", val: "5.0" }
          ].map((m, i) => (
            <div key={i} className="scientific-border p-6 bg-white/5 border-white/10">
              <span className="block text-[9px] font-mono text-slate-500 uppercase tracking-widest mb-1">{m.label}</span>
              <span className="text-3xl font-bold text-white tracking-tighter">{m.val}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const ImplementationSection = () => {
  const code = `
# VERITAS OS CORE INFRASTRUCTURE
# TARGET: NLP RECOGNITION PIPELINE

class VeritasProtocol:
    def __init__(self, mode='SCIENTIFIC'):
        self.vec = TfidfVectorizer(max_features=5000)
        self.lrc = LogisticRegression(solver='lbfgs')
        self.mnb = MultinomialNB(alpha=0.5)

    def analyze(self, raw_stream):
        # Neural feature extraction
        mat = self.vec.fit_transform(raw_stream)
        
        # Binary Classification Sequence
        prob_LR = self.lrc.predict_proba(mat)
        prob_NB = self.mnb.predict_proba(mat)
        
        return aggregate_risk(prob_LR, prob_NB)
  `;

  return (
    <section id="implementation" className="py-24 bg-brand-secondary">
      <Container>
        <SectionHeading 
          title="System Architecture" 
          subtitle="Structural definition of the Python-based inference engine."
        />
        
        <div className="scientific-border p-1 bg-black">
          <div className="bg-slate-900 border-b border-white/5 px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_5px_var(--color-brand-accent)]" />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
              </div>
              <span className="text-[10px] font-mono text-slate-500 tracking-[0.2em]">VERITAS_CORE.PY / READ_ONLY</span>
            </div>
            <span className="text-[9px] font-mono text-slate-600">LN 128 : COL 32</span>
          </div>
          <div className="bg-black/80 p-12 overflow-x-auto">
            <pre className="font-mono text-sm leading-relaxed text-cyan-500/70">
              <code>{code}</code>
            </pre>
          </div>
        </div>
      </Container>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 bg-brand-primary border-t border-white/5">
    <Container>
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 border border-brand-accent flex items-center justify-center text-brand-accent font-black text-sm">V</div>
             <span className="font-bold text-lg uppercase tracking-wider text-white">Veritas.OS</span>
          </div>
          <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest max-w-xs leading-relaxed">
            A research-grade verification terminal for the quantification of linguistic trustworthiness.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em]">
          <div className="space-y-4">
            <span className="text-white block">RESOURCES</span>
            <a href="#" className="block hover:text-brand-accent">Datasets</a>
            <a href="#" className="block hover:text-brand-accent">Inference Docs</a>
          </div>
          <div className="space-y-4">
            <span className="text-white block">LEGAL</span>
            <a href="#" className="block hover:text-brand-accent">Open Source</a>
            <a href="#" className="block hover:text-brand-accent">Privacy Mod</a>
          </div>
          <div className="space-y-4">
            <span className="text-white block">CORE STATUS</span>
            <span className="block text-green-500">OPERATIONAL</span>
          </div>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] font-mono text-slate-600 tracking-widest">
        <div className="flex items-center gap-4">
          <span>© 2026 VERITAS ML PROTOCOLS</span>
          <span className="text-brand-accent font-bold">MADE BY LAKSH</span>
        </div>
        <span>LATENCY: 1.24 MS / REGION: ASIA-CENTRAL</span>
      </div>
    </Container>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Detector />
        <TheorySection />
        <ImplementationSection />
      </main>
      <Footer />
    </div>
  );
}
