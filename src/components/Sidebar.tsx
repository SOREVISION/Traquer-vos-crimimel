import { LayoutDashboard, History, Archive, Key, Power, Map as MapIcon, Users, BellRing } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { icon: LayoutDashboard, label: 'Tableau de Bord', path: '/' },
  { icon: MapIcon, label: 'Carte Interactive', path: '/map' },
  { icon: Users, label: 'Personnel', path: '/archive' },
  { icon: BellRing, label: 'Alertes Géo', path: '/logs' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 flex flex-col bg-[#0F172A] text-white w-64 pt-0 hidden lg:flex">
      <div className="p-6 border-b border-slate-700 flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-xl italic text-white">T</div>
        <span className="text-xl font-bold tracking-tight">TRAQUEUR<span className="text-blue-400">PRO</span></span>
      </div>
      
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-4 px-6 py-3 transition-all duration-150 ${
              location.pathname === item.path
                ? 'bg-blue-600 border-r-4 border-blue-400 text-white font-medium'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <item.icon size={20} />
            <span className="text-sm">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-6 mt-auto bg-slate-800/50">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          <span className="text-[10px] text-slate-300 uppercase tracking-widest font-semibold">Serveur: Lyon (V4)</span>
        </div>
        <p className="text-[10px] text-slate-500">Dernière synchro: 14:02:45</p>
      </div>
    </aside>
  );
}
