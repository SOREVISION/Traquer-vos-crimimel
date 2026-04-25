import { useParams, Link } from 'react-router-dom';
import { targets } from '../data';
import { Target as TargetIcon, ArrowLeft, Crosshair, MapPin, Camera, Zap, Orbit, ShieldAlert, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export default function TargetProfile() {
  const { id } = useParams();
  const target = targets.find(t => t.id === id);

  if (!target) return <div className="p-8 font-bold text-red-600">AGENT_INTROUVABLE</div>;

  return (
    <div className="max-w-[1440px] mx-auto p-8 flex flex-col gap-8 pb-32">
      <Link to="/" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors text-sm font-bold uppercase tracking-tight">
        <ArrowLeft size={16} /> Retour au Tableau de Bord
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Profile Image & Status */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
            <div className="relative aspect-[3/4] bg-slate-100 rounded-xl overflow-hidden mb-6">
              <img 
                src={target.image} 
                alt={target.name} 
                className="w-full h-full object-cover grayscale opacity-90 contrast-110"
              />
              <div className="absolute top-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold text-slate-800 uppercase tracking-widest">En Ligne</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm font-bold text-slate-800 uppercase">
                <span>Santé du Signal</span>
                <span className="text-green-600">Optimale</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '92%' }}
                  className="h-full bg-blue-500 rounded-full" 
                />
              </div>
            </div>
          </div>

          <button className="w-full h-14 bg-slate-900 text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-black transition-all shadow-lg uppercase tracking-wider text-sm">
            <FileText size={18} />
            Générer Fiche Agent
          </button>
        </div>

        {/* Informational Data */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 relative">
             <div className="absolute top-6 right-8 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-widest">
                Force: {target.threat === 'CRITICAL' ? 'Force Spéciale' : 'Force Active'}
             </div>

             <div className="mb-8">
                <p className="text-blue-500 text-[10px] font-bold mb-1 uppercase tracking-widest">DOSSIER OPÉRATIONNEL</p>
                <h2 className="text-4xl text-slate-900 font-bold uppercase tracking-tight leading-tight mb-2">
                  {target.alias || target.name}
                </h2>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <MapPin size={14} />
                  <span>ID: {target.id} // Affectation: {target.lastKnownLoc}</span>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8 border-t border-slate-100">
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <ShieldAlert size={14} className="text-blue-500" />
                    MISSIONS ACTIVES
                  </h4>
                  <ul className="space-y-3">
                    {target.wantedFor?.map((w, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                   <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Zap size={14} className="text-blue-500" />
                    DONNÉES PHYSIQUES
                  </h4>
                   <div className="text-sm text-slate-600 space-y-3">
                      <div className="flex justify-between border-b border-slate-50 pb-2">
                        <span className="font-medium">Taille</span>
                        <span className="font-bold text-slate-900">{target.biometrics?.ht}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-50 pb-2">
                        <span className="font-medium">Poids</span>
                        <span className="font-bold text-slate-900">{target.biometrics?.wt}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-50 pb-2">
                        <span className="font-medium">Optiques</span>
                        <span className="font-bold text-slate-900">{target.biometrics?.eyes}</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Surveillance Feed */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
             <div className="p-5 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-tight flex items-center gap-2">
                  <Camera size={14} className="text-blue-500" />
                  FLUX VIDÉO EN DIRECT
                </span>
                <span className="text-[10px] text-slate-400 font-bold">CAM_77_V4_PARIS</span>
             </div>
             <div className="aspect-video relative bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1549675584-91f19337af3d?q=80&w=2072&auto=format&fit=crop" 
                  alt="Feed"
                  className="w-full h-full object-cover grayscale opacity-80"
                />
                <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <motion.div 
                      animate={{ scale: [1, 2], opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="absolute inset-0 bg-blue-500 rounded-full"
                    />
                    <div className="relative w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-xl" />
                  </div>
                </div>
             </div>
             <div className="p-4 bg-slate-50 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase">
                <span>Dernière mise à jour: 0.2s</span>
                <span className="flex items-center gap-2"><Orbit size={12} /> Sync satellite confirmée</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
