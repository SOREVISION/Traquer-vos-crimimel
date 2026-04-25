import { motion } from 'motion/react';
import { Rocket, Target, Shield, Map as MapIcon, Upload, Camera, PlusCircle, MapPin, Search } from 'lucide-react';
import { useState } from 'react';

export default function LaunchHunt() {
  const [dragActive, setDragActive] = useState(false);
  const [radius, setRadius] = useState(12.5);

  return (
    <div className="max-w-[1440px] mx-auto p-8 flex flex-col gap-8 pb-32">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-slate-800 uppercase tracking-tight">Initier une Mission</h1>
        <p className="text-slate-500 text-sm font-medium">Déployez de nouvelles unités de surveillance sur le secteur</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Form Container */}
        <div className="md:col-span-8 space-y-6">
          <form className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-widest block">Intelligence Visuelle</label>
              <div 
                onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                onDragLeave={() => setDragActive(false)}
                className={`border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center gap-4 transition-all ${
                  dragActive ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-slate-50'
                } group cursor-pointer`}
              >
                <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-slate-400 group-hover:text-blue-500 transition-colors">
                  <Upload size={24} />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-slate-800">Glissez-déposez le dossier agent</p>
                  <p className="text-xs text-slate-400 mt-1">PNG, JPG ou PDF (Max 25Mo)</p>
                </div>
                <button type="button" className="mt-2 text-blue-600 text-xs font-bold hover:underline">ou parcourir les fichiers</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Secteur Cible</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                  <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-10 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none appearance-none font-medium text-slate-700">
                    <option>PARIS_EST_V4</option>
                    <option>LYON_CENTRE_V2</option>
                    <option>MARSEILLE_PORT_V5</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Priorité Opérationnelle</label>
                <div className="relative">
                  <Shield className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                  <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-10 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none appearance-none font-medium text-slate-700">
                    <option>NORMALE</option>
                    <option>URGENTE (OMEGA)</option>
                    <option>SURVEILLANCE PASSIVE</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Rayon de Recherche (KM)</label>
              <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                 <input 
                   type="range" 
                   min="1" 
                   max="50" 
                   step="0.1" 
                   value={radius}
                   onChange={(e) => setRadius(parseFloat(e.target.value))}
                   className="flex-1 h-1.5 bg-slate-200 accent-blue-600 appearance-none cursor-pointer rounded-full" 
                 />
                 <span className="text-sm font-bold text-slate-700 min-w-[60px] text-right">{radius} KM</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Notes Complémentaires</label>
              <textarea 
                className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none h-32 font-medium text-slate-700 placeholder:text-slate-300"
                placeholder="Détails sur l'équipement suspect, direction de fuite probable..."
              />
            </div>
          </form>

          <div className="flex gap-4">
             <button className="flex-1 bg-slate-900 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-black transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-sm">
                <Rocket size={18} />
                DÉPLOYER L'UNITÉ
             </button>
             <button className="px-8 border border-slate-200 text-slate-500 font-bold rounded-xl hover:bg-slate-50 transition-all uppercase tracking-widest text-sm">
                ANNULER
             </button>
          </div>
        </div>

        {/* Info Side */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="bg-blue-600 rounded-2xl p-6 text-white shadow-xl shadow-blue-200">
            <h3 className="font-bold flex items-center gap-2 mb-4">
              <Shield size={20} />
              Règle d'Engagement
            </h3>
            <p className="text-sm text-blue-100 leading-relaxed font-medium">
              Toute nouvelle mission doit être validée par le Superviseur District. Les données biométriques sont automatiquement corrélées avec la base centrale V4.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">THÉÂTRE OPÉRATIONNEL</h4>
            <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden relative border border-slate-50 shadow-inner">
               <img 
                 src="https://images.unsplash.com/photo-1548345680-f5475ee511d7?q=80&w=2070&auto=format&fit=crop" 
                 alt="Preview Map"
                 className="w-full h-full object-cover grayscale opacity-40"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-24 h-24 rounded-full border-2 border-blue-500 border-dashed"
                  />
                  <div className="w-2 h-2 bg-blue-600 rounded-full shadow-lg" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
