import { PageLayout } from "../components/layout/PageLayout";
import { motion } from "motion/react";
import { Mail, Phone, Terminal } from "lucide-react";

const colorStyles: Record<string, { text: string, bg: string, border: string, hoverBorder: string, gradient: string, shadow: string }> = {
  teal: { text: "text-teal-400", bg: "bg-teal-500/10", border: "border-teal-500/20", hoverBorder: "hover:border-teal-500/20", gradient: "from-teal-500/5", shadow: "shadow-[0_0_15px_rgba(20,184,166,0.1)]" },
  blue: { text: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", hoverBorder: "hover:border-blue-500/20", gradient: "from-blue-500/5", shadow: "shadow-[0_0_15px_rgba(59,130,246,0.1)]" },
  purple: { text: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20", hoverBorder: "hover:border-purple-500/20", gradient: "from-purple-500/5", shadow: "shadow-[0_0_15px_rgba(168,85,247,0.1)]" },
};

export function Contact() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d40a_1px,transparent_1px),linear-gradient(to_bottom,#06b6d40a_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(20,184,166,0.2)]"
            >
              <Terminal className="w-4 h-4" />
              Secure Comm Channel
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 tracking-tight"
            >
              Contact VitalEdge
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-teal-100/60 font-mono max-w-3xl mx-auto uppercase tracking-wide"
            >
              Reach our team directly to deploy the VitaLEdge grid for hospitals and smart-city emergency systems.
            </motion.p>
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-500/10 blur-2xl rounded-3xl opacity-70" />
              <div className="relative bg-black/70 border border-teal-500/20 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-[0_0_35px_rgba(20,184,166,0.1)]">
                <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">System Coordinates</h2>
              
                <div className="space-y-6">
                  {[
                    { icon: <Mail className="w-6 h-6 text-teal-400" />, title: "Secure Inbox", lines: ["venkatcharan.ds@gmail.com"], color: "teal" },
                    { icon: <Phone className="w-6 h-6 text-blue-400" />, title: "Voice Link", lines: ["+91 8142288830"], color: "blue" }
                  ].map((item, i) => {
                    const styles = colorStyles[item.color] || colorStyles.teal;
                    return (
                      <div key={i} className={`flex items-start gap-6 group p-4 rounded-2xl hover:bg-white/5 border border-transparent ${styles.hoverBorder} transition-all duration-300`}>
                        <div className={`${styles.bg} p-4 rounded-xl border ${styles.border} group-hover:scale-110 transition-transform duration-300 ${styles.shadow}`}>
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-mono font-bold text-white uppercase tracking-widest mb-2">{item.title}</h3>
                          {item.lines.map((line, j) => (
                            <p key={j} className="text-gray-300 font-mono text-sm">{line}</p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
