/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import BottomNav from './components/BottomNav';
import Dashboard from './views/Dashboard';
import IntelMap from './views/IntelMap';
import TargetProfile from './views/TargetProfile';
import LaunchHunt from './views/LaunchHunt';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-tactical-bg text-tactical-text font-sans antialiased">
        <TopBar />
        <Sidebar font-display />
        <main className="lg:pl-64 pt-16 pb-24 lg:pb-0 min-h-screen">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/map" element={<IntelMap />} />
            <Route path="/targets" element={<Dashboard />} />
            <Route path="/target/:id" element={<TargetProfile />} />
            <Route path="/launch" element={<LaunchHunt />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </Router>
  );
}
