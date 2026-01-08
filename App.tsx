
import React, { useState } from 'react';
import { ProjectTab } from './types';
import Overview from './components/Overview';
import Hardware from './components/Hardware';
import Cryptography from './components/Cryptography';
import LiveDemo from './components/LiveDemo';
import Implementation from './components/Implementation';
import VivaSection from './components/VivaSection';
import Report from './components/Report';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProjectTab>(ProjectTab.OVERVIEW);

  const renderContent = () => {
    switch (activeTab) {
      case ProjectTab.OVERVIEW: return <Overview />;
      case ProjectTab.HARDWARE: return <Hardware />;
      case ProjectTab.CRYPTOGRAPHY: return <Cryptography />;
      case ProjectTab.DEMO: return <LiveDemo />;
      case ProjectTab.CODE: return <Implementation />;
      case ProjectTab.VIVA: return <VivaSection />;
      case ProjectTab.REPORT: return <Report />;
      default: return <Overview />;
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 px-6 py-4 flex items-center justify-between shadow-lg z-10">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">PQC Medical IoT</h1>
            <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Post-Quantum Security Device</p>
          </div>
        </div>
        <nav className="hidden md:flex space-x-1">
          {Object.values(ProjectTab).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md transition-all duration-200 text-sm font-medium ${
                activeTab === tab 
                ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' 
                : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-slate-900 scroll-smooth">
        <div className="max-w-7xl mx-auto p-6 md:p-10">
          {renderContent()}
        </div>
      </main>

      {/* Footer / Mobile Nav */}
      <footer className="md:hidden bg-slate-800 border-t border-slate-700 p-2 grid grid-cols-4 gap-1">
        {[ProjectTab.OVERVIEW, ProjectTab.DEMO, ProjectTab.CODE, ProjectTab.VIVA].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex flex-col items-center justify-center py-2 rounded ${
              activeTab === tab ? 'text-blue-400' : 'text-slate-500'
            }`}
          >
            <span className="text-[10px]">{tab}</span>
          </button>
        ))}
      </footer>
    </div>
  );
};

export default App;
