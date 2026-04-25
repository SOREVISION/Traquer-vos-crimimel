import { motion } from 'motion/react';
import { Compass, Radio, MapPin, Orbit, ShieldAlert, Antenna } from 'lucide-react';

const alerts = [
  { id: 1, type: 'CRITICAL', time: '12s AGO', message: 'INTRUSION DÉTECTÉE DANS LE SECTEUR 7-G. INTERVENTION REQUISE.' },
  { id: 2, type: 'INTEL', time: '4m AGO', message: 'MATCH BIOMÉTRIQUE CONFIRMÉ À CDG TERMINAL 2. CONFIANCE: 89%.' },
  { id: 3, type: 'SYSTEM', time: '15m AGO', message: 'BALAYAGE PÉRIMÉTRIQUE TERMINÉ. AUCUNE ANOMALIE DÉTECTÉE.' },
];

export default function IntelMap() {
  return (
    <div className="relative w-full h-[calc(100vh-80px)] bg-slate-100 overflow-hidden">
      {/* Map Layer */}
      <div 
        className="absolute inset-0 opacity-40 grayscale contrast-125 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2033&auto=format&fit=crop')" }}
      />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#94a3b8_0.5px,transparent_0.5px)] [background-size:24px_24px]" />

      <div className="relative z-10 p-8 h-full flex flex-col pointer-events-none">
        {/* Top HUD Elements */}
        <div className="flex justify-between items-start">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white/90 border border-slate-200 p-5 rounded-xl shadow-lg backdrop-blur-md pointer-events-auto"
          >
            <h4 className="text-[10px] text-slate-400 font-bold mb-2 uppercase tracking-widest">POSITIONNEMENT</h4>
            <div className="text-slate-800 space-y-1 text-sm font-bold">
              <p>LAT: 48.8566</p>
              <p>LONG: 2.3522</p>
              <p>ALT: 35.2M</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="w-48 aspect-video bg-white border border-slate-200 p-1 rounded-lg shadow-lg overflow-hidden relative pointer-events-auto"
          >
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
              alt="Satellite"
              className="w-full h-full object-cover grayscale opacity-80"
            />
            <motion.div 
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="absolute top-2 right-2 bg-blue-500 w-2 h-2 rounded-full shadow-[0_0_8px_#3b82f6]"
            />
          </motion.div>
        </div>

        {/* Map Marker */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.3, 0.6] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-64 h-64 border-2 border-blue-500/30 rounded-full flex items-center justify-center bg-blue-500/5"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
             <MapPin size={32} className="text-blue-600 fill-blue-600 drop-shadow-lg" />
             <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-white border border-slate-200 p-4 rounded-xl shadow-2xl min-w-[220px] z-20 hidden group-hover:block backdrop-blur-md opacity-100">
                <div className="flex items-center gap-2 mb-2">
                   <div className="w-2 h-2 bg-blue-500 rounded-full" />
                   <p className="text-[10px] text-slate-800 font-bold tracking-tight uppercase">Agent: SYNDICATE_01</p>
                </div>
                <p className="text-[10px] text-slate-500 font-medium leading-relaxed">CDG Terminal 2 - Entrée Nord</p>
                <div className="mt-2 pt-2 border-t border-slate-100">
                   <span className="text-blue-600 font-bold text-[10px] uppercase">Confiance: 89%</span>
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white" />
             </div>
          </div>
        </div>

        {/* Alerts Sidebar */}
        <motion.div 
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          className="absolute top-8 bottom-8 right-8 w-80 bg-white shadow-2xl border border-slate-200 rounded-2xl flex flex-col z-20 pointer-events-auto"
        >
          <div className="p-5 border-b border-slate-100 bg-slate-50 flex items-center justify-between rounded-t-2xl">
            <h2 className="text-sm text-slate-800 font-bold uppercase tracking-tight">Flux d'Alertes</h2>
            <Antenna size={16} className="text-slate-300" />
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {alerts.map((alert) => (
              <div key={alert.id} className={`p-4 rounded-xl border border-slate-50 transition-colors ${alert.type === 'CRITICAL' ? 'bg-red-50 border-red-100' : 'bg-slate-50 border-slate-100'} hover:shadow-sm`}>
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-[9px] font-bold tracking-widest uppercase ${alert.type === 'CRITICAL' ? 'text-red-600' : 'text-slate-400'}`}>
                    {alert.type}_ALERTE
                  </span>
                  <span className="text-slate-400 text-[9px] font-bold">{alert.time}</span>
                </div>
                <p className="text-slate-800 text-[11px] font-bold leading-relaxed">{alert.message}</p>
                {alert.type === 'CRITICAL' && (
                  <div className="flex gap-2 mt-3">
                    <button className="flex-1 bg-red-600 text-white rounded-lg text-[10px] font-bold py-2 hover:bg-red-700 transition-colors shadow-sm">RESTER</button>
                    <button className="flex-1 bg-white border border-slate-200 text-slate-400 rounded-lg text-[10px] font-bold py-2 hover:bg-slate-50 transition-colors shadow-sm">IGNORER</button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-5 border-t border-slate-100 bg-slate-50 rounded-b-2xl">
            <button className="w-full bg-slate-900 text-white rounded-xl text-[10px] font-bold py-3 shadow-md hover:bg-black transition-all uppercase tracking-widest">
              CONFINAMENT TOTAL
            </button>
          </div>
        </motion.div>

        {/* Bottom Status Panels */}
        <div className="mt-auto flex gap-4 pointer-events-auto">
          <div className="bg-white/90 border border-slate-200 p-5 rounded-xl shadow-lg backdrop-blur-md">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-slate-400 text-[10px] font-bold tracking-widest uppercase">LIAISON SAT</span>
            </div>
            <div className="text-xl text-slate-800 font-bold">CONNECTÉ</div>
          </div>
          <div className="bg-white/90 border border-slate-200 p-5 rounded-xl shadow-lg backdrop-blur-md">
            <div className="flex items-center gap-2 mb-1">
              <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-2 h-2 bg-red-500 rounded-full" />
              <span className="text-slate-400 text-[10px] font-bold tracking-widest uppercase">THRETS_DÉTECTÉES</span>
            </div>
            <div className="text-xl text-slate-800 font-bold">04</div>
          </div>
        </div>
      </div>
    </div>
  );
}
