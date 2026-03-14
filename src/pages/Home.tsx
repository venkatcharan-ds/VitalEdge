import { PageLayout } from "../components/layout/PageLayout";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { motion } from "motion/react";
import { Activity, AlertTriangle, Clock, ShieldCheck, Stethoscope, HeartPulse, BrainCircuit, Ambulance, Building2, ChevronRight, Radio } from "lucide-react";
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

export function Home() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d40a_1px,transparent_1px),linear-gradient(to_bottom,#06b6d40a_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-12">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500 shadow-[0_0_8px_#06b6d4]"></span>
                </span>
                Live AI Emergency Network
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-cyan-900 leading-[1.1]">
                AI That Saves Lives <br className="hidden md:block" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">Before Arrival</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-cyan-100/60 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                VitaLEdge is an autonomous emergency response grid that predicts trauma severity, coordinates hospitals, and prepares life-saving resources in real-time.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
                <Link to="/smart-city" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto text-lg px-8 h-14 bg-cyan-500 hover:bg-cyan-400 text-black font-bold tracking-wide shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] transition-all duration-300 border border-cyan-300 group">
                    Initialize Grid
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/dashboard" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 h-14 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50 font-mono tracking-widest uppercase transition-all duration-300 backdrop-blur-md bg-black/40 group">
                    <Radio className="mr-2 w-5 h-5 group-hover:animate-pulse" />
                    View Dashboard
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-24 relative border-t border-cyan-500/10 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">System Vulnerabilities</h2>
              <p className="text-xl text-cyan-500/60 font-mono uppercase tracking-wide max-w-2xl mx-auto">
                Critical failures in legacy emergency care routing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
                  title: "Unknown Severity",
                  desc: "Trauma severity is often unknown until hospital arrival, delaying critical care.",
                  color: "red"
                },
                {
                  icon: <Clock className="h-8 w-8 text-orange-500" />,
                  title: "Unprepared Resources",
                  desc: "ICU beds, blood units, and specialists are not prepared in advance.",
                  color: "orange"
                },
                {
                  icon: <Ambulance className="h-8 w-8 text-yellow-500" />,
                  title: "Transit Delays",
                  desc: "Ambulances get delayed in traffic without smart routing or signal preemption.",
                  color: "yellow"
                }
              ].map((item, i) => {
                const styles = colorStyles[item.color] || colorStyles.blue;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <Card className={`bg-black/60 ${styles.border} backdrop-blur-xl ${styles.hoverBorder} transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden h-full`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <CardHeader className="relative z-10">
                        <div className={`mb-6 ${styles.bg} w-16 h-16 rounded-2xl flex items-center justify-center border ${styles.border} group-hover:scale-110 transition-transform duration-500 ${styles.shadow}`}>
                          {item.icon}
                        </div>
                        <CardTitle className="text-xl font-bold text-white tracking-wide">{item.title}</CardTitle>
                        <CardDescription className="text-gray-400 text-base leading-relaxed mt-2">{item.desc}</CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(6,182,212,0.15),rgba(0,0,0,1))] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                The Solution
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tight">
                VitaLEdge Protocol
              </h2>
              <p className="text-xl text-cyan-100/60 max-w-3xl mx-auto font-light leading-relaxed">
                An autonomous grid that predicts trauma severity, coordinates hospitals, and prepares life-saving resources before the patient arrives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <BrainCircuit />, title: "AI Trauma Prediction", color: "blue" },
                { icon: <Activity />, title: "Agentic AI Coordinator", color: "cyan" },
                { icon: <ShieldCheck />, title: "Emergency QR Card", color: "purple" },
                { icon: <Building2 />, title: "Smart Hospital Sync", color: "pink" },
                { icon: <HeartPulse />, title: "Blood Bank Sync", color: "red" },
                { icon: <Ambulance />, title: "Connected Ambulance", color: "yellow" },
                { icon: <Activity />, title: "Traffic Preemption", color: "green" },
                { icon: <Stethoscope />, title: "Disaster Response", color: "orange" },
              ].map((feature, i) => {
                const styles = colorStyles[feature.color] || colorStyles.blue;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`p-6 rounded-2xl bg-black/60 backdrop-blur-xl border ${styles.border} ${styles.hoverBorder} transition-all duration-300 cursor-pointer group relative overflow-hidden`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className={`mb-4 ${styles.text} group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-wide relative z-10">{feature.title}</h3>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
