import { Search, UserCircle } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between fixed top-0 w-full z-50">
      <div>
        <h1 className="text-xl font-bold text-slate-800">Suivi Opérationnel</h1>
        <p className="text-xs text-slate-500 font-medium">Suivi des agents actifs en temps réel</p>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text" 
            placeholder="Rechercher un agent..." 
            className="bg-slate-100 border-none rounded-full px-4 py-2 pl-10 text-sm w-64 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600 border border-slate-300">
            JP
          </div>
          <div className="hidden lg:block">
            <p className="text-sm font-bold text-slate-800 leading-tight">Jean-Pierre</p>
            <p className="text-xs text-slate-500">Superviseur V4</p>
          </div>
        </div>
      </div>
    </header>
  );
}
