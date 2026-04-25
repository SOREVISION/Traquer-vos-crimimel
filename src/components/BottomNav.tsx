import { LayoutDashboard, Search, Compass, PlusSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { icon: LayoutDashboard, label: 'DASHBOARD', path: '/' },
  { icon: Search, label: 'TARGETS', path: '/targets' },
  { icon: Compass, label: 'INTEL_MAP', path: '/map' },
  { icon: PlusSquare, label: 'LAUNCH', path: '/launch' },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 h-20 bg-zinc-950 border-t border-zinc-800 lg:hidden">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex flex-col items-center justify-center p-2 h-full w-full transition-all active:scale-90 ${
            location.pathname === item.path
              ? 'bg-tactical-primary text-black border-t-2 border-red-400 opacity-100'
              : 'text-zinc-600 opacity-70 hover:bg-zinc-900'
          }`}
        >
          <item.icon size={20} />
          <span className="font-mono text-[10px] font-bold tracking-widest uppercase mt-1">
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
