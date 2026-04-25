import React from 'react';
import { Target } from '../data';
import { Target as TargetIcon, Search, Crosshair, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface Props {
  target: Target;
}

export const TargetCard: React.FC<Props> = ({ target }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">
      {/* Header */}
      <div className="bg-slate-50 p-4 border-b border-slate-100 flex justify-between items-center">
        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
          ID: {target.id}
        </span>
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest ${
          target.threat === 'CRITICAL' ? 'bg-red-100 text-red-600' : 
          target.threat === 'HIGH' ? 'bg-blue-100 text-blue-600' :
          'bg-slate-100 text-slate-600'
        }`}>
          {target.threat}
        </span>
      </div>

      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <img 
          src={target.image} 
          alt={target.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-lg">
             <div className="flex items-center gap-1.5">
                <div className={`w-2 h-2 rounded-full ${target.threat === 'CRITICAL' ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`} />
                <span className="text-[10px] font-bold text-slate-700 uppercase">Actif</span>
             </div>
          </div>
        </div>
      </div>

      {/* Footer Details */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight">{target.name}</h3>
          <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-1">
            <MapPin size={12} className="text-slate-300" />
            {target.lastKnownLoc}
          </p>
        </div>

        <div className="flex justify-between items-end border-t border-slate-50 pt-4">
          <div className="flex flex-col">
            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-0.5">Batterie</span>
            <div className="flex items-center gap-2">
              <div className="w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${target.scanProgress < 50 ? 'bg-red-500' : 'bg-green-500'}`} 
                  style={{ width: `${target.scanProgress}%` }}
                />
              </div>
              <span className="text-[10px] font-bold text-slate-600">{target.scanProgress}%</span>
            </div>
          </div>
          <Link 
            to={`/target/${target.id}`}
            className="bg-slate-900 text-white p-2 rounded-lg hover:bg-black transition-colors"
          >
            <Search size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
