import { PageLayout } from "../components/layout/PageLayout";
import { motion } from "motion/react";
import { QrCode, ShieldCheck, HeartPulse, FileText, Phone, User, Activity, ScanLine } from "lucide-react";
import { Link } from "react-router-dom";

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

export function QrCard() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d40a_1px,transparent_1px),linear-gradient(to_bottom,#06b6d40a_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-pink-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center mb-24">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(236,72,153,0.2)]"
            >
              <QrCode className="w-4 h-4" />
              Emergency Identity
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-500 tracking-tight"
            >
              Digital Medical Tag
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-pink-100/60 font-mono max-w-3xl mx-auto uppercase tracking-wide"
            >
              Instant access to life-saving medical history via secure optical scan
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center relative"
            >
              {/* Background Glow for Card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-cyan-500/20 blur-[100px] rounded-full" />
              
              {/* Mockup of the QR Card */}
              <div className="relative w-80 h-[500px] bg-black/80 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(236,72,153,0.15)] overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-pink-500/20 to-purple-500/20" />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-50" />
                
                <div className="p-8 flex flex-col items-center h-full relative z-10">
                  <div className="w-16 h-16 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center mb-6 border border-pink-500/30 shadow-[0_0_20px_rgba(236,72,153,0.2)]">
                    <User className="w-8 h-8 text-pink-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1 tracking-wide">Jane Doe</h3>
                  <p className="text-pink-400 font-mono text-sm mb-8 tracking-widest">ID: VTL-8492-X</p>
                  
                  <div className="relative mb-8 group/qr cursor-pointer">
                    <Link to="/scanned-card" className="block relative z-10">
                      <div className="bg-white p-4 rounded-xl border-2 border-transparent group-hover/qr:border-pink-500 transition-colors duration-300 relative overflow-hidden">
                        <QrCode className="w-32 h-32 text-black" />
                        
                        {/* Scanning Laser Animation */}
                        <motion.div 
                          animate={{ top: ["0%", "100%", "0%"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          className="absolute left-0 right-0 h-0.5 bg-pink-500 shadow-[0_0_10px_#ec4899] z-20"
                        />
                      </div>
                    </Link>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black border border-pink-500 text-pink-400 text-[10px] font-mono font-bold px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.8)] animate-bounce whitespace-nowrap z-20 pointer-events-none uppercase tracking-widest">
                      <span className="flex items-center gap-2">
                        <ScanLine className="w-3 h-3" /> Click to Scan
                      </span>
                    </div>
                  </div>
                  
                  <div className="w-full space-y-4 mt-auto">
                    <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                      <span className="text-gray-500 font-mono uppercase text-xs">Blood Group</span>
                      <span className="text-red-400 font-bold font-mono bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">O POS</span>
                    </div>
                    <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                      <span className="text-gray-500 font-mono uppercase text-xs">Allergies</span>
                      <span className="text-white font-mono">Penicillin</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500 font-mono uppercase text-xs">Emergency</span>
                      <span className="text-cyan-400 font-mono">+1 (555) 0198</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Instant Access When Seconds Count</h2>
                <p className="text-cyan-100/60 text-lg leading-relaxed font-light">
                  In an emergency, patients are often unconscious or unable to communicate. The VitaLEdge QR Card provides paramedics with immediate access to critical health data, ensuring safe and effective treatment.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <HeartPulse className="text-red-400" />, title: "Blood Group & Allergies", color: "red" },
                  { icon: <Activity className="text-teal-400" />, title: "Chronic Diseases", color: "teal" },
                  { icon: <FileText className="text-blue-400" />, title: "Current Medications", color: "blue" },
                  { icon: <ShieldCheck className="text-green-400" />, title: "Insurance Information", color: "green" },
                  { icon: <Phone className="text-purple-400" />, title: "Emergency Contacts", color: "purple" },
                  { icon: <User className="text-orange-400" />, title: "Basic Demographics", color: "orange" }
                ].map((item, i) => {
                  const styles = colorStyles[item.color] || colorStyles.blue;
                  return (
                    <div key={i} className={`flex items-center gap-4 bg-black/40 backdrop-blur-md p-4 rounded-xl border ${styles.border} ${styles.hoverBorder} hover:bg-white/5 transition-all duration-300 group`}>
                      <div className={`${styles.bg} p-2.5 rounded-lg border ${styles.border} group-hover:scale-110 transition-transform duration-300 ${styles.shadow}`}>
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-gray-200 font-medium text-sm tracking-wide">{item.title}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="pt-8 border-t border-white/10">
                <h3 className="text-sm font-mono font-bold text-pink-400 mb-4 uppercase tracking-widest">System Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "Faster patient identification",
                    "Safer treatment by avoiding allergic reactions",
                    "Quicker family notification",
                    "Seamless hospital admission process"
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_5px_#06b6d4]" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
