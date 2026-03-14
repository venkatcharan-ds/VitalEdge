import { PageLayout } from "../components/layout/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Activity, AlertTriangle, Bed, Users, HeartPulse, MapPin, Radio, ShieldAlert } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { motion } from "motion/react";

const colorStyles: Record<string, { text: string, bg: string, border: string, hoverBorder: string, gradient: string, shadow: string }> = {
  blue: { text: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", hoverBorder: "hover:border-blue-500/50", gradient: "from-blue-500/10", shadow: "shadow-[0_0_20px_rgba(59,130,246,0.15)]" },
  cyan: { text: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20", hoverBorder: "hover:border-cyan-500/50", gradient: "from-cyan-500/10", shadow: "shadow-[0_0_20px_rgba(6,182,212,0.15)]" },
  red: { text: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", hoverBorder: "hover:border-red-500/50", gradient: "from-red-500/10", shadow: "shadow-[0_0_20px_rgba(239,68,68,0.15)]" },
  purple: { text: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20", hoverBorder: "hover:border-purple-500/50", gradient: "from-purple-500/10", shadow: "shadow-[0_0_20px_rgba(168,85,247,0.15)]" },
};

const data = [
  { time: "10:00", severity: 40 },
  { time: "10:05", severity: 45 },
  { time: "10:10", severity: 60 },
  { time: "10:15", severity: 85 },
  { time: "10:20", severity: 90 },
  { time: "10:25", severity: 88 },
  { time: "10:30", severity: 95 },
];

export function Dashboard() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d40a_1px,transparent_1px),linear-gradient(to_bottom,#06b6d40a_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-cyan-500/20 pb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <ShieldAlert className="w-8 h-8 text-cyan-400" />
                <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tight">
                  Command Center
                </h1>
              </div>
              <p className="text-cyan-500/60 font-mono text-sm uppercase tracking-widest">Real-time Emergency Coordination Grid</p>
            </div>
            
            <div className="mt-6 md:mt-0 flex items-center gap-6 bg-black/50 border border-red-500/30 px-6 py-3 rounded-2xl backdrop-blur-md shadow-[0_0_30px_rgba(239,68,68,0.15)]">
              <div className="flex items-center gap-3">
                <div className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 shadow-[0_0_10px_#ef4444]"></span>
                </div>
                <span className="text-sm font-bold text-red-400 tracking-wide uppercase">1 Critical Inbound</span>
              </div>
              <div className="h-8 w-px bg-red-500/30" />
              <div className="text-sm font-mono text-red-300 flex items-center gap-2">
                <Radio className="w-4 h-4 animate-pulse" />
                ETA: 04:00
              </div>
            </div>
          </div>

          {/* Top Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: "Incoming Patients", value: "3", icon: <Activity className="text-cyan-400" />, trend: "+1 from last hour", color: "cyan" },
              { title: "Available ICU Beds", value: "12", icon: <Bed className="text-blue-400" />, trend: "3 reserved", color: "blue" },
              { title: "Blood Units (O-)", value: "45", icon: <HeartPulse className="text-red-400" />, trend: "Adequate", color: "red" },
              { title: "On-Call Specialists", value: "8", icon: <Users className="text-purple-400" />, trend: "2 in surgery", color: "purple" },
            ].map((stat, i) => {
              const styles = colorStyles[stat.color] || colorStyles.cyan;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className={`bg-black/60 ${styles.border} backdrop-blur-xl ${styles.hoverBorder} transition-colors relative overflow-hidden group`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                    <CardHeader className="flex flex-row items-center justify-between pb-2 relative z-10">
                      <CardTitle className="text-xs font-mono uppercase tracking-wider text-gray-400">{stat.title}</CardTitle>
                      <div className={`p-2 rounded-lg ${styles.bg} border ${styles.border}`}>
                        {stat.icon}
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="text-4xl font-bold text-white font-mono tracking-tighter">{stat.value}</div>
                      <p className={`text-xs ${styles.text} opacity-70 mt-2 font-medium`}>{stat.trend}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Chart */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2"
            >
              <Card className="bg-black/60 border-cyan-500/20 backdrop-blur-xl h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center gap-3">
                    <div className="p-2 bg-orange-500/20 rounded-lg border border-orange-500/30">
                      <AlertTriangle className="w-5 h-5 text-orange-400 animate-pulse" />
                    </div>
                    <span className="font-mono tracking-wide">Live Trauma Severity Score</span>
                    <span className="ml-auto text-xs font-mono text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                      ID: VTL-8492-X
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[320px] w-full mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={data}>
                        <defs>
                          <linearGradient id="colorSeverity" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#06b6d4" strokeOpacity={0.1} vertical={false} />
                        <XAxis dataKey="time" stroke="#6b7280" tick={{ fill: '#6b7280', fontSize: 12 }} tickLine={false} axisLine={false} />
                        <YAxis stroke="#6b7280" tick={{ fill: '#6b7280', fontSize: 12 }} tickLine={false} axisLine={false} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', borderColor: 'rgba(249,115,22,0.3)', borderRadius: '12px', backdropFilter: 'blur(8px)' }}
                          itemStyle={{ color: '#f97316', fontWeight: 'bold', fontFamily: 'monospace' }}
                          labelStyle={{ color: '#9ca3af', marginBottom: '4px' }}
                        />
                        <Area type="monotone" dataKey="severity" stroke="#f97316" strokeWidth={3} fillOpacity={1} fill="url(#colorSeverity)" />
                        <Line type="monotone" dataKey="severity" stroke="#f97316" strokeWidth={3} dot={{ r: 4, fill: '#000', stroke: '#f97316', strokeWidth: 2 }} activeDot={{ r: 6, fill: '#f97316', shadow: '0 0 10px #f97316' }} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Incoming List */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="bg-black/60 border-cyan-500/20 backdrop-blur-xl h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-white font-mono flex items-center gap-2">
                    <Activity className="w-5 h-5 text-cyan-400" />
                    Active Inbound
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { id: "VTL-8492-X", severity: "CRITICAL", eta: "04:00", type: "Trauma", color: "text-red-400", border: "border-red-500/30", bg: "bg-red-500/10" },
                      { id: "VTL-1123-Y", severity: "MODERATE", eta: "12:00", type: "Cardiac", color: "text-orange-400", border: "border-orange-500/30", bg: "bg-orange-500/10" },
                      { id: "VTL-9941-Z", severity: "STABLE", eta: "25:00", type: "Injury", color: "text-green-400", border: "border-green-500/30", bg: "bg-green-500/10" },
                    ].map((patient, i) => (
                      <div key={i} className={`flex flex-col p-4 rounded-xl border ${patient.border} bg-black/40 hover:bg-white/5 transition-colors relative overflow-hidden group`}>
                        <div className={`absolute left-0 top-0 bottom-0 w-1 ${patient.bg} group-hover:w-2 transition-all`} />
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-mono font-bold text-white tracking-wide">{patient.id}</div>
                          <div className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wider ${patient.color} ${patient.bg} border ${patient.border}`}>
                            {patient.severity}
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">{patient.type}</span>
                          <span className="font-mono text-cyan-400 flex items-center gap-1">
                            <Radio className="w-3 h-3" /> T-{patient.eta}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="lg:col-span-3"
            >
              <Card className="bg-black/60 border-cyan-500/20 overflow-hidden relative h-[400px] rounded-3xl">
                {/* High-tech map background */}
                <div className="absolute inset-0 bg-black">
                  <iframe
                    src="https://maps.google.com/maps?q=Hyderabad,+Telangana,+India&t=m&z=12&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(120%) opacity(0.6)' }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="pointer-events-none"
                  ></iframe>
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d41a_1px,transparent_1px),linear-gradient(to_bottom,#06b6d41a_1px,transparent_1px)] bg-[size:20px_20px] opacity-30 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,#000_100%)] pointer-events-none" />
                
                {/* Radar Sweep */}
                <motion.div 
                  animate={{ rotate: 360 }} 
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/10"
                  style={{ background: 'conic-gradient(from 0deg, transparent 70%, rgba(6, 182, 212, 0.1) 100%)' }}
                />

                {/* Map Grid Rings */}
                <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/20" />
                <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/10" />
                <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/5" />
                
                {/* Blips */}
                <div className="absolute top-[40%] left-[45%]">
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 shadow-[0_0_15px_#ef4444]"></span>
                  </span>
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/80 border border-red-500/30 px-2 py-1 rounded text-[10px] font-mono text-red-400 whitespace-nowrap backdrop-blur-md">
                    AMB-01
                  </div>
                </div>

                <div className="absolute top-[60%] left-[65%]">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" style={{ animationDuration: '2s' }}></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500 shadow-[0_0_10px_#f97316]"></span>
                  </span>
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-black/80 border border-orange-500/30 px-2 py-1 rounded text-[10px] font-mono text-orange-400 whitespace-nowrap backdrop-blur-md">
                    AMB-04
                  </div>
                </div>

                {/* Hospital Center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-[0_0_20px_#06b6d4]">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>
                
                {/* Overlay Info */}
                <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-xl p-5 rounded-2xl border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                  <h3 className="text-white font-mono font-bold flex items-center gap-3 mb-4 uppercase tracking-wider text-sm">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    Live Fleet Tracking
                  </h3>
                  <div className="space-y-3 text-sm font-mono">
                    <div className="flex items-center justify-between gap-6 bg-black/40 p-2 rounded-lg border border-white/5">
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />
                        AMB-01 (Critical)
                      </div>
                      <span className="text-cyan-400">1.2 mi</span>
                    </div>
                    <div className="flex items-center justify-between gap-6 bg-black/40 p-2 rounded-lg border border-white/5">
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]" />
                        AMB-04 (Moderate)
                      </div>
                      <span className="text-cyan-400">3.5 mi</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
