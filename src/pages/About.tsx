import { PageLayout } from "../components/layout/PageLayout";
import { motion } from "motion/react";
import { Activity, Target, Eye, Cpu, Network, ShieldAlert } from "lucide-react";

const colorStyles: Record<string, { text: string, bg: string, border: string, hoverBorder: string, shadow: string }> = {
  purple: { text: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20", hoverBorder: "hover:border-purple-500/50", shadow: "shadow-[0_0_15px_rgba(168,85,247,0.1)]" },
  pink: { text: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20", hoverBorder: "hover:border-pink-500/50", shadow: "shadow-[0_0_15px_rgba(236,72,153,0.1)]" },
  red: { text: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", hoverBorder: "hover:border-red-500/50", shadow: "shadow-[0_0_15px_rgba(239,68,68,0.1)]" },
};

export function About() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d40a_1px,transparent_1px),linear-gradient(to_bottom,#06b6d40a_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center mb-24">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(99,102,241,0.2)]"
            >
              <Activity className="w-4 h-4" />
              Entity Origin
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 tracking-tight"
            >
              Saving Lives Through Intelligence
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-indigo-100/60 font-mono max-w-3xl mx-auto uppercase tracking-wide"
            >
              We are a collective of doctors, AI researchers, and engineers building the future of emergency medicine.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative bg-black/60 border border-blue-500/20 p-10 rounded-3xl backdrop-blur-xl hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                  <Target className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4 tracking-wide flex items-center gap-3">
                  <span className="text-blue-400 font-mono text-sm uppercase tracking-widest border border-blue-500/30 px-2 py-1 rounded bg-blue-500/10">01</span>
                  Our Mission
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  To eliminate preventable deaths in emergency care by providing real-time, AI-driven intelligence to paramedics, hospitals, and city infrastructure. We believe that time is the most critical resource in trauma care, and our technology ensures not a single second is wasted.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative bg-black/60 border border-teal-500/20 p-10 rounded-3xl backdrop-blur-xl hover:border-teal-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(20,184,166,0.15)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center mb-8 border border-teal-500/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(20,184,166,0.1)]">
                  <Eye className="w-8 h-8 text-teal-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4 tracking-wide flex items-center gap-3">
                  <span className="text-teal-400 font-mono text-sm uppercase tracking-widest border border-teal-500/30 px-2 py-1 rounded bg-teal-500/10">02</span>
                  Our Vision
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Building the world's first fully autonomous, AI-powered emergency medical ecosystem. We envision a future where every ambulance is a smart node, every hospital is perfectly prepared, and patient outcomes are dramatically improved through predictive intelligence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
