import { PageLayout } from "../components/layout/PageLayout";
import { motion } from "motion/react";
import { Activity, BrainCircuit, Building2, HeartPulse, ShieldCheck, ChevronDown } from "lucide-react";

const colorStyles: Record<string, { text: string, bg: string, border: string, hoverBorder: string, gradient: string, shadow: string }> = {
  blue: { text: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", hoverBorder: "hover:border-blue-500/50", gradient: "from-blue-500/5", shadow: "shadow-[0_0_20px_rgba(59,130,246,0.15)]" },
  teal: { text: "text-teal-400", bg: "bg-teal-500/10", border: "border-teal-500/20", hoverBorder: "hover:border-teal-500/50", gradient: "from-teal-500/5", shadow: "shadow-[0_0_20px_rgba(20,184,166,0.15)]" },
  purple: { text: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20", hoverBorder: "hover:border-purple-500/50", gradient: "from-purple-500/5", shadow: "shadow-[0_0_20px_rgba(168,85,247,0.15)]" },
  pink: { text: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20", hoverBorder: "hover:border-pink-500/50", gradient: "from-pink-500/5", shadow: "shadow-[0_0_20px_rgba(236,72,153,0.15)]" },
  red: { text: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", hoverBorder: "hover:border-red-500/50", gradient: "from-red-500/5", shadow: "shadow-[0_0_20px_rgba(239,68,68,0.15)]" },
  yellow: { text: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", hoverBorder: "hover:border-yellow-500/50", gradient: "from-yellow-500/5", shadow: "shadow-[0_0_20px_rgba(234,179,8,0.15)]" },
  green: { text: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20", hoverBorder: "hover:border-green-500/50", gradient: "from-green-500/5", shadow: "shadow-[0_0_20px_rgba(34,197,94,0.15)]" },
  indigo: { text: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20", hoverBorder: "hover:border-indigo-500/50", gradient: "from-indigo-500/5", shadow: "shadow-[0_0_20px_rgba(99,102,241,0.15)]" },
  cyan: { text: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20", hoverBorder: "hover:border-cyan-500/50", gradient: "from-cyan-500/5", shadow: "shadow-[0_0_20px_rgba(6,182,212,0.15)]" },
  orange: { text: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20", hoverBorder: "hover:border-orange-500/50", gradient: "from-orange-500/5", shadow: "shadow-[0_0_20px_rgba(249,115,22,0.15)]" },
  emerald: { text: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", hoverBorder: "hover:border-emerald-500/50", gradient: "from-emerald-500/5", shadow: "shadow-[0_0_20px_rgba(16,185,129,0.15)]" },
};

export function HowItWorks() {
  const steps = [
    {
      icon: <Activity className="h-6 w-6 text-blue-400" />,
      title: "Vital Entry",
      desc: "Paramedics enter patient vitals into the VitaLEdge system directly from the ambulance.",
      color: "blue",
      delay: 0.1
    },
    {
      icon: <BrainCircuit className="h-6 w-6 text-teal-400" />,
      title: "AI Prediction",
      desc: "VitaLEdge AI analyzes the vitals to predict trauma severity and mortality risk instantly.",
      color: "teal",
      delay: 0.3
    },
    {
      icon: <Building2 className="h-6 w-6 text-purple-400" />,
      title: "Hospital Coordination",
      desc: "Agentic AI autonomously contacts nearby hospitals to find available ICU beds and specialists.",
      color: "purple",
      delay: 0.5
    },
    {
      icon: <HeartPulse className="h-6 w-6 text-red-400" />,
      title: "Resource Preparation",
      desc: "Blood banks are alerted, and operation theatres are pre-booked before arrival.",
      color: "red",
      delay: 0.7
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-green-400" />,
      title: "Immediate Treatment",
      desc: "The patient arrives at a fully prepared hospital, eliminating waiting time and saving lives.",
      color: "green",
      delay: 0.9
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d40a_1px,transparent_1px),linear-gradient(to_bottom,#06b6d40a_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center mb-24">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
            >
              <BrainCircuit className="w-4 h-4" />
              System Architecture
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 tracking-tight"
            >
              Operational Protocol
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-cyan-500/60 font-mono max-w-3xl mx-auto uppercase tracking-wide"
            >
              Autonomous flow from emergency detection to hospital admission
            </motion.p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Central Glowing Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/20 via-blue-500/20 to-purple-500/20 -translate-x-1/2 rounded-full hidden md:block">
              {/* Animated scanning beam */}
              <motion.div 
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-cyan-400 to-transparent blur-[2px]"
              />
            </div>

            <div className="space-y-16 md:space-y-24 relative">
              {steps.map((step, index) => {
                const styles = colorStyles[step.color] || colorStyles.blue;
                return (
                  <div key={index} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    
                    {/* Content Card */}
                    <motion.div 
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: step.delay, type: "spring", stiffness: 100 }}
                      className="flex-1 w-full"
                    >
                      <div className={`group relative bg-black/60 border ${styles.border} p-8 rounded-3xl backdrop-blur-xl ${styles.hoverBorder} transition-all duration-500 hover:${styles.shadow} overflow-hidden ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                        {/* Card Background Glow */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                        
                        <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "justify-start" : "md:justify-end"}`}>
                          <span className={`text-xs font-mono font-bold tracking-widest uppercase ${styles.text} ${styles.bg} px-3 py-1 rounded-full border ${styles.border}`}>
                            Phase 0{index + 1}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white tracking-wide relative z-10">{step.title}</h3>
                        <p className="text-gray-400 text-lg leading-relaxed relative z-10">{step.desc}</p>
                      </div>
                    </motion.div>
                    
                    {/* Center Node */}
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: step.delay + 0.2, type: "spring" }}
                      className="relative z-20 hidden md:flex items-center justify-center w-20 h-20 rounded-2xl bg-black/80 border border-white/10 backdrop-blur-xl group hover:scale-110 transition-transform duration-300 cursor-default"
                    >
                      <div className={`absolute inset-0 rounded-2xl ${styles.bg} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      <div className={`absolute inset-0 rounded-2xl border ${styles.border} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      <div className="relative z-10">
                        {step.icon}
                      </div>
                    </motion.div>
                    
                    {/* Empty space for alternating layout */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                );
              })}
            </div>
            
            {/* Bottom connection point */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="hidden md:flex justify-center mt-12 relative z-20"
            >
              <div className="w-12 h-12 rounded-full bg-black/80 border border-cyan-500/30 flex items-center justify-center backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                <ChevronDown className="w-5 h-5 text-cyan-400 animate-bounce" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
