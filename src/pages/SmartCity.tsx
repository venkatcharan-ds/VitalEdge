import { PageLayout } from "../components/layout/PageLayout";
import { motion } from "motion/react";
import { Building2, Navigation, Ambulance, HeartPulse, Database, Network } from "lucide-react";

export function SmartCity() {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            <Network className="w-4 h-4" />
            Ecosystem
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Smart City Integration
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            VitaLEdge connects ambulances, traffic systems, hospitals, and blood banks into a single, intelligent emergency network.
          </p>
        </div>

        {/* Animated City Network Visualization */}
        <div className="relative h-[600px] w-full bg-black/80 rounded-3xl border border-cyan-500/20 overflow-hidden mb-24 flex items-center justify-center shadow-[0_0_100px_rgba(6,182,212,0.1)]">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d41a_1px,transparent_1px),linear-gradient(to_bottom,#06b6d41a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),rgba(0,0,0,1))]" />
          
          <div className="relative z-10 w-full max-w-5xl h-full flex items-center justify-center">
            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 flex items-center justify-center z-20">
              {/* Rotating outer rings */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-cyan-500/30 border-t-cyan-400 border-r-cyan-400" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-2 rounded-full border border-blue-500/30 border-b-blue-400 border-l-blue-400" />
              <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-4 rounded-full bg-cyan-500/20 blur-xl" />
              
              {/* Core */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative w-20 h-20 bg-black/80 rounded-full border border-cyan-400 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.6)] backdrop-blur-xl z-30"
              >
                <Network className="w-8 h-8 text-cyan-300" />
              </motion.div>
              <div className="absolute -bottom-8 text-[10px] font-bold text-cyan-300 tracking-[0.3em] uppercase bg-black/60 px-4 py-1.5 rounded-full border border-cyan-500/30 backdrop-blur-md">City Core</div>
            </div>

            {/* Connecting Lines (CSS representation) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0">
              <line x1="25%" y1="20%" x2="50%" y2="50%" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4,4" />
              <line x1="75%" y1="20%" x2="50%" y2="50%" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4,4" />
              <line x1="25%" y1="80%" x2="50%" y2="50%" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4,4" />
              <line x1="75%" y1="80%" x2="50%" y2="50%" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4,4" />
              <line x1="15%" y1="50%" x2="50%" y2="50%" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4,4" />
            </svg>

            {/* Animated Data Packets (Dots moving along lines) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
              {/* Top Left to Center */}
              <motion.div animate={{ x: ["25%", "50%"], y: ["20%", "50%"], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0 }} className="absolute w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_10px_#facc15] -ml-1 -mt-1" />
              {/* Top Right to Center */}
              <motion.div animate={{ x: ["75%", "50%"], y: ["20%", "50%"], opacity: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }} className="absolute w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_#4ade80] -ml-1 -mt-1" />
              {/* Center to Bottom Left */}
              <motion.div animate={{ x: ["50%", "25%"], y: ["50%", "80%"], opacity: [0, 1, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 1 }} className="absolute w-2 h-2 bg-pink-400 rounded-full shadow-[0_0_10px_#f472b6] -ml-1 -mt-1" />
              {/* Center to Bottom Right */}
              <motion.div animate={{ x: ["50%", "75%"], y: ["50%", "80%"], opacity: [0, 1, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.2 }} className="absolute w-2 h-2 bg-red-400 rounded-full shadow-[0_0_10px_#f87171] -ml-1 -mt-1" />
              {/* Left to Center */}
              <motion.div animate={{ x: ["15%", "50%"], y: ["50%", "50%"], opacity: [0, 1, 0] }} transition={{ duration: 2.1, repeat: Infinity, ease: "linear", delay: 0.8 }} className="absolute w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_#c084fc] -ml-1 -mt-1" />
            </div>

            {/* Nodes */}
            {[
              { icon: <Ambulance />, label: "Connected Ambulances", pos: "top-[20%] left-[25%] -translate-x-1/2 -translate-y-1/2", color: "text-yellow-400", border: "border-yellow-500/40", shadow: "shadow-[0_0_20px_rgba(250,204,21,0.2)]" },
              { icon: <Navigation />, label: "Traffic Systems", pos: "top-[20%] left-[75%] -translate-x-1/2 -translate-y-1/2", color: "text-green-400", border: "border-green-500/40", shadow: "shadow-[0_0_20px_rgba(74,222,128,0.2)]" },
              { icon: <Building2 />, label: "Hospitals", pos: "top-[80%] left-[25%] -translate-x-1/2 -translate-y-1/2", color: "text-pink-400", border: "border-pink-500/40", shadow: "shadow-[0_0_20px_rgba(244,114,182,0.2)]" },
              { icon: <HeartPulse />, label: "Blood Banks", pos: "top-[80%] left-[75%] -translate-x-1/2 -translate-y-1/2", color: "text-red-400", border: "border-red-500/40", shadow: "shadow-[0_0_20px_rgba(248,113,113,0.2)]" },
              { icon: <Database />, label: "Health Records", pos: "top-[50%] left-[15%] -translate-x-1/2 -translate-y-1/2", color: "text-purple-400", border: "border-purple-500/40", shadow: "shadow-[0_0_20px_rgba(192,132,252,0.2)]" },
            ].map((node, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.1 }}
                className={`absolute ${node.pos} flex flex-col items-center gap-3 z-20 cursor-default`}
              >
                <div className={`w-16 h-16 bg-black/80 rounded-2xl border ${node.border} ${node.shadow} flex items-center justify-center backdrop-blur-xl relative overflow-hidden group`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className={`${node.color} relative z-10`}>{node.icon}</div>
                </div>
                <span className="text-xs text-gray-300 font-bold tracking-wide bg-black/70 px-3 py-1.5 rounded-full border border-white/10 whitespace-nowrap backdrop-blur-md">{node.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Ambulance className="w-6 h-6 text-yellow-400" />,
              color: "from-yellow-500/10 to-transparent border-yellow-500/20 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)]",
              title: "Connected Ambulances",
              desc: "Paramedics enter real-time patient vitals directly into the VitaLEdge system, instantly transmitting data to the AI and destination hospital."
            },
            {
              icon: <Navigation className="w-6 h-6 text-green-400" />,
              color: "from-green-500/10 to-transparent border-green-500/20 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(74,222,128,0.15)]",
              title: "Traffic Systems",
              desc: "Integration with city traffic management to automatically create 'green corridors' by preempting traffic signals for approaching ambulances."
            },
            {
              icon: <Building2 className="w-6 h-6 text-pink-400" />,
              color: "from-pink-500/10 to-transparent border-pink-500/20 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(244,114,182,0.15)]",
              title: "Hospitals",
              desc: "Real-time synchronization of ICU bed availability, specialist schedules, and operation theatre readiness across the city network."
            },
            {
              icon: <HeartPulse className="w-6 h-6 text-red-400" />,
              color: "from-red-500/10 to-transparent border-red-500/20 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(248,113,113,0.15)]",
              title: "Blood Banks",
              desc: "Automated alerts to regional blood banks based on predicted trauma severity and patient blood type from the QR identity card."
            },
            {
              icon: <Database className="w-6 h-6 text-purple-400" />,
              color: "from-purple-500/10 to-transparent border-purple-500/20 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(192,132,252,0.15)]",
              title: "Digital Health Records",
              desc: "Secure, instant access to national or regional electronic health records (EHR) to inform emergency treatment decisions."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-gradient-to-br ${item.color} bg-black/40 backdrop-blur-sm border p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
              <div className="bg-black/50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform relative z-10">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
