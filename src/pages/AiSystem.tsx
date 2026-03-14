import { PageLayout } from "../components/layout/PageLayout";
import { motion } from "motion/react";
import { BrainCircuit, Network, Zap, ShieldAlert, Activity, Terminal, Cpu, Database, Radio } from "lucide-react";
import { useEffect, useState } from "react";

export function AiSystem() {
  const [logs, setLogs] = useState<string[]>([
    "> INITIALIZING AGENTIC CORE...",
    "> ESTABLISHING NEURAL LINK...",
    "> CONNECTION SECURE."
  ]);

  useEffect(() => {
    const newLogs = [
      "> INCOMING TRAUMA DATA DETECTED.",
      "> ANALYZING VITALS: BP 90/60, HR 120.",
      "> CLASSIFICATION: CRITICAL.",
      "> QUERYING HOSPITAL AVAILABILITY...",
      "> ROUTING TO MEMORIAL HOSPITAL (ETA: 4 MIN).",
      "> DISPATCHING CARDIOLOGY TEAM.",
      "> TRAFFIC GRID PREEMPTION ACTIVE."
    ];
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < newLogs.length) {
        setLogs(prev => [...prev, newLogs[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <PageLayout>
      <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden selection:bg-cyan-500/30">
        {/* Futuristic Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d40a_1px,transparent_1px),linear-gradient(to_bottom,#06b6d40a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          
          {/* Header Section */}
          <div className="mb-16 border-b border-cyan-500/20 pb-8 relative">
            <div className="absolute top-0 left-0 w-2 h-full bg-cyan-500" />
            <div className="pl-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold tracking-[0.2em] uppercase mb-4"
              >
                <Terminal className="w-4 h-4" />
                System_Status: Online
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black mb-4 tracking-tighter uppercase font-mono"
              >
                Agentic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Core</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-cyan-100/60 font-mono max-w-2xl uppercase tracking-wide"
              >
                Autonomous neural network for real-time emergency coordination. Bypassing human latency.
              </motion.p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            
            {/* Left Column: Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="bg-black/40 border border-cyan-500/20 rounded-xl p-6 backdrop-blur-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/10 rounded-bl-full transition-transform group-hover:scale-150" />
                <h2 className="text-xl font-mono font-bold text-white mb-6 flex items-center gap-3 tracking-widest uppercase">
                  <Cpu className="text-cyan-400" />
                  Processing Units
                </h2>
                
                <div className="space-y-4">
                  {[
                    { icon: <Zap className="text-yellow-400 w-5 h-5" />, title: "Real-Time Inference", desc: "Sub-millisecond decision making based on live vitals." },
                    { icon: <Network className="text-blue-400 w-5 h-5" />, title: "Grid Sync", desc: "Continuous handshake with city traffic and hospital APIs." },
                    { icon: <Activity className="text-teal-400 w-5 h-5" />, title: "Resource Allocation", desc: "Dynamic routing of medical assets and personnel." },
                    { icon: <ShieldAlert className="text-red-400 w-5 h-5" />, title: "Threat Detection", desc: "Predictive modeling for patient deterioration." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-colors">
                      <div className="mt-1">{item.icon}</div>
                      <div>
                        <div className="text-sm font-bold text-white font-mono uppercase tracking-wide">{item.title}</div>
                        <div className="text-xs text-gray-400 font-mono mt-1">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Terminal */}
              <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-4 font-mono text-xs h-64 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-6 bg-gray-900 border-b border-gray-800 flex items-center px-3 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-gray-500 uppercase tracking-widest text-[10px]">sys_log.exe</span>
                </div>
                <div className="mt-6 space-y-2 text-green-400/80">
                  {logs.map((log, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }} 
                      animate={{ opacity: 1, x: 0 }}
                      className={i === logs.length - 1 ? "text-cyan-400 animate-pulse" : ""}
                    >
                      {log}
                    </motion.div>
                  ))}
                  <motion.div 
                    animate={{ opacity: [0, 1, 0] }} 
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="inline-block w-2 h-3 bg-cyan-400 ml-1"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Column: HUD Diagram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-7 relative h-[620px] md:h-[700px] rounded-xl border border-cyan-400/30 bg-[#04060b]/85 overflow-hidden flex items-center justify-center p-4 md:p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.15)]"
            >
              {/* Scanning Line */}
              <motion.div 
                animate={{ top: ["0%", "100%", "0%"] }} 
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-32 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent pointer-events-none z-0"
              />

              {/* Ambient glow wash */}
              <motion.div
                animate={{ opacity: [0.15, 0.35, 0.15] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-x-0 top-[20%] h-32 bg-cyan-500/15 blur-3xl pointer-events-none"
              />
              <div className="absolute -bottom-24 right-0 w-[360px] h-[220px] bg-purple-500/10 blur-3xl pointer-events-none" />
              
              <div className="absolute top-3 left-4 md:top-4 md:left-5 z-20 text-[9px] md:text-[10px] font-mono text-cyan-400/60 tracking-[0.22em] whitespace-nowrap">
                DATA_STREAM_ACTIVE // 0x8F9A2
              </div>
              <div className="absolute bottom-4 right-6 md:bottom-5 md:right-7 z-20 text-[9px] md:text-[10px] font-mono text-cyan-400/60 tracking-[0.2em] whitespace-nowrap">
                NODE_LATENCY: 12ms
              </div>

              {/* Frame accents */}
              <div className="absolute top-0 left-0 right-8 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
              <div className="absolute top-0 right-0 bottom-8 w-px bg-gradient-to-b from-cyan-500/40 via-cyan-500/20 to-transparent" />
              <div className="absolute top-3 left-3 w-8 h-8 border-l border-t border-cyan-400/45" />
              <div className="absolute top-3 right-3 w-8 h-8 border-r border-t border-cyan-400/45" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-l border-b border-cyan-400/45" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-r border-b border-cyan-400/45" />

              <div className="relative z-10 flex flex-col items-center w-full h-full justify-between py-12 md:py-14">
                
                {/* Top Nodes */}
                <div className="flex justify-between w-full px-4 md:px-12">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-full border border-blue-500/50 flex items-center justify-center bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.2)] relative">
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border-t-2 border-blue-400" />
                      <Activity className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-xs font-mono text-blue-400 tracking-widest">VITALS_INPUT</span>
                  </div>
                  
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-full border border-purple-500/50 flex items-center justify-center bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.2)] relative">
                      <motion.div animate={{ rotate: -360 }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border-t-2 border-purple-400" />
                      <Database className="w-6 h-6 text-purple-400" />
                    </div>
                    <span className="text-xs font-mono text-purple-400 tracking-widest">EHR_QUERY</span>
                  </div>
                </div>

                {/* Central Core */}
                <div className="relative w-48 h-48 flex items-center justify-center my-8">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-cyan-500/30 border-dashed" />
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-4 rounded-full border-2 border-transparent border-t-cyan-400 border-b-cyan-400 opacity-60" />
                  <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-8 rounded-full bg-cyan-500/25 blur-xl" />
                  <motion.div
                    animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.15, 0.35, 0.15] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-2 rounded-full border border-cyan-400/40"
                  />
                  
                  <div className="relative w-28 h-28 rounded-full bg-black border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.4)] z-10">
                    <BrainCircuit className="w-12 h-12 text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                  </div>

                  {/* Orbiting telemetry pings */}
                  {[0, 120, 240].map((angle) => (
                    <motion.div
                      key={angle}
                      className="absolute w-2 h-2 rounded-full bg-cyan-300/80 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                      style={{ transformOrigin: "0 0" }}
                      animate={{
                        x: [Math.cos((angle * Math.PI) / 180) * 92, Math.cos(((angle + 40) * Math.PI) / 180) * 92],
                        y: [Math.sin((angle * Math.PI) / 180) * 92, Math.sin(((angle + 40) * Math.PI) / 180) * 92],
                        opacity: [0.35, 1, 0.35]
                      }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                    />
                  ))}
                  
                  {/* Data particles flying into core */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-300 rounded-full"
                        style={{
                          top: '50%', left: '50%',
                          transformOrigin: `0 0`
                        }}
                        animate={{
                          x: [Math.cos(i * 60 * Math.PI / 180) * 100, 0],
                          y: [Math.sin(i * 60 * Math.PI / 180) * 100, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "easeIn"
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Bottom Nodes */}
                <div className="flex justify-between w-full px-2 md:px-4">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-lg border border-pink-500/50 flex items-center justify-center bg-pink-500/10 shadow-[0_0_15px_rgba(236,72,153,0.2)]">
                      <Radio className="w-5 h-5 text-pink-400" />
                    </div>
                    <span className="text-[10px] font-mono text-pink-400 tracking-widest text-center">DISPATCH<br/>ALERT</span>
                  </div>
                  
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-lg border border-green-500/50 flex items-center justify-center bg-green-500/10 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                      <Network className="w-5 h-5 text-green-400" />
                    </div>
                    <span className="text-[10px] font-mono text-green-400 tracking-widest text-center">TRAFFIC<br/>CONTROL</span>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-lg border border-yellow-500/50 flex items-center justify-center bg-yellow-500/10 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                      <ShieldAlert className="w-5 h-5 text-yellow-400" />
                    </div>
                    <span className="text-[10px] font-mono text-yellow-400 tracking-widest text-center">ER_PREP<br/>SIGNAL</span>
                  </div>
                </div>
                
                {/* Responsive CSS Lines */}
                <div className="absolute top-[22%] left-[26%] w-[1px] h-[19%] bg-gradient-to-b from-blue-500/50 to-cyan-500/50 rotate-[-30deg]" />
                <div className="absolute top-[22%] right-[26%] w-[1px] h-[19%] bg-gradient-to-b from-purple-500/50 to-cyan-500/50 rotate-[30deg]" />
                
                <div className="absolute bottom-[25%] left-[20%] w-[1px] h-[19%] bg-gradient-to-t from-pink-500/50 to-cyan-500/50 rotate-[40deg]" />
                <div className="absolute bottom-[25%] left-1/2 -translate-x-1/2 w-[1px] h-[19%] bg-gradient-to-t from-green-500/50 to-cyan-500/50" />
                <div className="absolute bottom-[25%] right-[20%] w-[1px] h-[19%] bg-gradient-to-t from-yellow-500/50 to-cyan-500/50 rotate-[-40deg]" />

                {/* Horizontal data beam */}
                <motion.div
                  animate={{ opacity: [0.12, 0.28, 0.12] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[34%] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
