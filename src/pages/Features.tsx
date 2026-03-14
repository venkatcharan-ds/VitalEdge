import { PageLayout } from "../components/layout/PageLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { motion } from "motion/react";
import { Activity, BrainCircuit, ShieldCheck, Building2, HeartPulse, Ambulance, Navigation, Eye, RefreshCw, AlertTriangle, FileText, Cpu } from "lucide-react";

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

export function Features() {
  const features = [
    {
      icon: <BrainCircuit className="h-8 w-8 text-blue-400" />,
      title: "AI Trauma Severity Prediction",
      desc: "Real-time vital analysis, mortality risk prediction, and severity scoring.",
      color: "blue"
    },
    {
      icon: <Activity className="h-8 w-8 text-teal-400" />,
      title: "Agentic AI Coordinator",
      desc: "Autonomous emergency response AI for multi-hospital coordination and resource allocation.",
      color: "teal"
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-purple-400" />,
      title: "Emergency QR Identity Card",
      desc: "Stores Name, Age, Blood group, Allergies, Chronic diseases, Medications, Insurance, and Contacts.",
      color: "purple"
    },
    {
      icon: <Building2 className="h-8 w-8 text-pink-400" />,
      title: "Intelligent Hospital Coordination",
      desc: "ICU bed tracking, operation theatre pre-booking, and specialist alerts.",
      color: "pink"
    },
    {
      icon: <HeartPulse className="h-8 w-8 text-red-400" />,
      title: "Blood Bank Coordination",
      desc: "Automatic blood type detection and early blood preparation.",
      color: "red"
    },
    {
      icon: <Ambulance className="h-8 w-8 text-yellow-400" />,
      title: "Connected Ambulance System",
      desc: "Real-time vital entry by paramedics and nearest ambulance assignment.",
      color: "yellow"
    },
    {
      icon: <Navigation className="h-8 w-8 text-green-400" />,
      title: "Smart Traffic Signal System",
      desc: "Automatic green corridor creation for faster transit.",
      color: "green"
    },
    {
      icon: <Eye className="h-8 w-8 text-indigo-400" />,
      title: "Explainable AI",
      desc: "Shows exactly why the AI predicts high risk, building trust with medical staff.",
      color: "indigo"
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-cyan-400" />,
      title: "Continuous Learning AI",
      desc: "Improves accuracy over time with real hospital outcome data.",
      color: "cyan"
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-orange-400" />,
      title: "Disaster Mode",
      desc: "Mass casualty coordination and triage management during large-scale emergencies.",
      color: "orange"
    },
    {
      icon: <FileText className="h-8 w-8 text-emerald-400" />,
      title: "Insurance Integration",
      desc: "Faster approvals and automated claims processing based on trauma severity.",
      color: "emerald"
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d40a_1px,transparent_1px),linear-gradient(to_bottom,#06b6d40a_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center mb-24">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            >
              <Cpu className="w-4 h-4" />
              System Capabilities
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 tracking-tight"
            >
              Platform Features
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100/60 font-mono max-w-3xl mx-auto uppercase tracking-wide"
            >
              A comprehensive suite of AI-powered tools designed to optimize every second of an emergency
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const styles = colorStyles[feature.color] || colorStyles.blue;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="h-full"
                >
                  <Card className={`h-full bg-black/60 backdrop-blur-xl border ${styles.border} ${styles.hoverBorder} transition-all duration-500 group relative overflow-hidden`}>
                    {/* Card Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <CardHeader className="relative z-10">
                      <div className={`mb-6 ${styles.bg} w-16 h-16 rounded-2xl flex items-center justify-center border ${styles.border} group-hover:scale-110 transition-transform duration-500 ${styles.shadow}`}>
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl font-bold text-white tracking-wide">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <CardDescription className="text-gray-400 text-base leading-relaxed">
                        {feature.desc}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
