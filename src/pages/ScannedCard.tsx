import { motion } from "motion/react";
import { ShieldCheck, HeartPulse, FileText, Phone, User, Activity, AlertTriangle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function ScannedCard() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-pink-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/qr-card" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </Link>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-green-400" />
            <span className="text-sm font-medium text-green-400">Verified Identity</span>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-center gap-6 mb-12 bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-white/10 shadow-2xl"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(236,72,153,0.3)]">
            <User className="w-12 h-12 text-white" />
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl font-bold mb-2">Jane Doe</h1>
            <p className="text-gray-400 mb-4">ID: VTL-8492-X</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium border border-red-500/30">O Positive</span>
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium border border-orange-500/30">Allergy: Penicillin</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">Asthma</span>
            </div>
          </div>
        </motion.div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Demographics */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-500/20 rounded-lg">
                <User className="w-5 h-5 text-orange-400" />
              </div>
              <h2 className="text-xl font-semibold">Basic Demographics</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-400">Age</span>
                <span className="font-medium">32 Years</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-400">Gender</span>
                <span className="font-medium">Female</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-400">Height</span>
                <span className="font-medium">165 cm</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="text-gray-400">Weight</span>
                <span className="font-medium">62 kg</span>
              </div>
            </div>
          </motion.div>

          {/* Blood Group & Allergies */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-500/20 rounded-lg">
                <HeartPulse className="w-5 h-5 text-red-400" />
              </div>
              <h2 className="text-xl font-semibold">Blood & Allergies</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-400">Blood Group</span>
                <span className="font-bold text-red-400">O Positive</span>
              </div>
              <div className="pt-2">
                <span className="text-gray-400 block mb-2">Known Allergies</span>
                <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 p-3 rounded-xl">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  <span className="font-medium text-red-200">Penicillin (Severe)</span>
                </div>
                <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 p-3 rounded-xl mt-2">
                  <AlertTriangle className="w-4 h-4 text-orange-400" />
                  <span className="font-medium text-orange-200">Peanuts (Mild)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Chronic Diseases */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-teal-500/20 rounded-lg">
                <Activity className="w-5 h-5 text-teal-400" />
              </div>
              <h2 className="text-xl font-semibold">Chronic Diseases</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-400 mt-2" />
                <div>
                  <p className="font-medium text-gray-200">Asthma</p>
                  <p className="text-sm text-gray-400">Diagnosed 2015. Well-controlled.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-400 mt-2" />
                <div>
                  <p className="font-medium text-gray-200">Hypertension</p>
                  <p className="text-sm text-gray-400">Diagnosed 2021. On medication.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Current Medications */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <FileText className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-xl font-semibold">Current Medications</h2>
            </div>
            <ul className="space-y-3">
              <li className="bg-black/30 p-3 rounded-xl border border-white/5">
                <p className="font-medium text-blue-300">Albuterol Inhaler</p>
                <p className="text-sm text-gray-400">As needed for shortness of breath</p>
              </li>
              <li className="bg-black/30 p-3 rounded-xl border border-white/5">
                <p className="font-medium text-blue-300">Lisinopril 10mg</p>
                <p className="text-sm text-gray-400">Once daily in the morning</p>
              </li>
            </ul>
          </motion.div>

          {/* Emergency Contacts */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Phone className="w-5 h-5 text-purple-400" />
              </div>
              <h2 className="text-xl font-semibold">Emergency Contacts</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-black/30 p-3 rounded-xl border border-white/5">
                <div>
                  <p className="font-medium text-gray-200">John Doe</p>
                  <p className="text-sm text-gray-400">Husband</p>
                </div>
                <a href="tel:+15550198" className="p-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors">
                  <Phone className="w-4 h-4" />
                </a>
              </div>
              <div className="flex items-center justify-between bg-black/30 p-3 rounded-xl border border-white/5">
                <div>
                  <p className="font-medium text-gray-200">Sarah Smith</p>
                  <p className="text-sm text-gray-400">Sister</p>
                </div>
                <a href="tel:+15550234" className="p-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors">
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Insurance Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <ShieldCheck className="w-5 h-5 text-green-400" />
              </div>
              <h2 className="text-xl font-semibold">Insurance Info</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-400">Provider</span>
                <span className="font-medium">BlueCross Health</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-400">Policy No.</span>
                <span className="font-medium font-mono">BC-9982-441</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="text-gray-400">Group No.</span>
                <span className="font-medium font-mono">GRP-552</span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
