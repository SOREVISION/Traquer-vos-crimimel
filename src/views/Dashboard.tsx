import { Target, targets, intelLogs } from '../data';
import { TargetCard } from '../components/TargetCard';
import { Radar, Rss, Users, Activity, ShieldAlert, Timer } from 'lucide-react';
import { motion } from 'motion/react';

export default function Dashboard() {
  return (
    <div className="max-w-[1440px] mx-auto p-8">
      {/* Stats Row */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start">
            <p className="text-slate-500 text-sm font-medium">Total Personnel</p>
            <Users className="text-slate-300" size={18} />
          </div>
          <p className="text-3xl font-bold text-slate-900 mt-1">248</p>
          <div className="text-xs text-green-600 font-bold mt-2">+12 cette semaine</div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start">
            <p className="text-slate-500 text-sm font-medium">Agents Actifs</p>
            <Activity className="text-blue-400" size={18} />
          </div>
          <p className="text-3xl font-bold text-blue-600 mt-1">84</p>
          <div className="text-xs text-slate-400 mt-2">34% de la force totale</div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start">
            <p className="text-slate-500 text-sm font-medium">Alertes Système</p>
            <ShieldAlert className="text-red-300" size={18} />
          </div>
          <p className="text-3xl font-bold text-red-500 mt-1">3</p>
          <div className="text-xs text-red-600 font-bold mt-2 underline cursor-pointer">Voir les incidents</div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start">
            <p className="text-slate-500 text-sm font-medium">Temps de Réponse</p>
            <Timer className="text-slate-300" size={18} />
          </div>
          <p className="text-3xl font-bold text-slate-900 mt-1">1.2s</p>
          <div className="text-xs text-green-600 font-bold mt-2">Optimal</div>
        </div>
      </section>

      {/* Content Grid */}
      <div className="grid grid-cols-12 gap-8">
        {/* Map Visualization */}
        <div className="col-span-12 lg:col-span-8 bg-slate-200 rounded-2xl relative overflow-hidden shadow-inner border-2 border-slate-300 min-h-[500px]">
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#94a3b8" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0.4, 0.8] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute top-1/2 left-1/3 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg"
          />
          <div className="absolute top-1/4 left-2/3 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg" />
          <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg" />
          
          <div className="absolute top-6 left-6 bg-white p-4 rounded-lg shadow-md flex items-center space-x-3 border border-slate-100">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">Zone d'Alerte: Secteur 4</span>
          </div>

          <div className="absolute bottom-6 left-6 flex items-center gap-4">
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-lg flex gap-6">
              <div className="flex flex-col">
                <span className="text-slate-400 text-[10px] font-bold uppercase">LATITUDE</span>
                <span className="text-slate-900 font-bold text-sm">48.8566° N</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400 text-[10px] font-bold uppercase">LONGITUDE</span>
                <span className="text-slate-900 font-bold text-sm">2.3522° E</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 flex flex-col gap-2">
             <button className="bg-white w-10 h-10 rounded-lg shadow-lg flex items-center justify-center font-bold text-xl text-slate-700 hover:bg-slate-50 transition-colors">+</button>
             <button className="bg-white w-10 h-10 rounded-lg shadow-lg flex items-center justify-center font-bold text-xl text-slate-700 hover:bg-slate-50 transition-colors">-</button>
          </div>
        </div>

        {/* Detailed List SidePanel */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col overflow-hidden max-h-[600px]">
            <div className="p-5 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
              <h3 className="font-bold text-slate-800">Agents à proximité</h3>
              <span className="text-xs font-bold text-blue-600 cursor-pointer hover:underline">Tout voir</span>
            </div>
            <div className="flex-1 overflow-y-auto divide-y divide-slate-50">
              {targets.map((target) => (
                <div key={target.id} className={`p-4 flex items-center justify-between hover:bg-slate-50 transition-colors ${target.threat === 'CRITICAL' ? 'bg-red-50' : ''}`}>
                  <div className="flex items-center space-x-3">
                    <img 
                      src={target.image} 
                      alt={target.name}
                      className="w-10 h-10 rounded-full object-cover bg-slate-200 border border-slate-100"
                    />
                    <div>
                      <p className="text-sm font-bold text-slate-800 uppercase tracking-tight">{target.name}</p>
                      <p className={`text-[10px] font-medium ${target.threat === 'CRITICAL' ? 'text-red-500' : 'text-slate-500'}`}>
                        {target.threat === 'CRITICAL' ? 'Signal Faible' : 'Actif - ' + target.lastKnownLoc}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-[10px] font-bold ${target.threat === 'CRITICAL' ? 'text-red-500' : 'text-green-500'} uppercase`}>
                      {target.threat === 'CRITICAL' ? 'HORS LIGNE' : 'EN LIGNE'}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Batterie: {target.scanProgress}%</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="m-5 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold shadow-md hover:bg-black transition-all uppercase tracking-wider">
              Générer Rapport Global
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-bold text-slate-800 uppercase tracking-widest">Flux Intel</span>
              <Rss size={16} className="text-slate-300" />
            </div>
            <div className="space-y-4">
              {intelLogs.slice(0, 3).map((log, idx) => (
                <div key={idx} className="flex gap-4">
                   <div className="text-[10px] font-bold text-slate-400 w-12 pt-0.5">{log.time}</div>
                   <div className="flex-1 text-[11px] text-slate-600 border-l border-slate-100 pl-4">{log.message}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
