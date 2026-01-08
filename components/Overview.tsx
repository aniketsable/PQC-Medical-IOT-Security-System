
import React from 'react';

const Overview: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <section className="relative p-8 rounded-3xl bg-gradient-to-br from-blue-900/30 to-indigo-900/20 border border-blue-500/20 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] -z-10"></div>
        <h2 className="text-3xl font-bold mb-6 text-white border-l-4 border-blue-500 pl-4">System Architecture</h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-3xl">
          The project addresses the vulnerability of critical medical infrastructure to future quantum computer attacks.
          It implements a hardware-based "Post-Quantum Gateway" that sits between legacy medical devices and the hospital network.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center mb-10">
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center shadow-md">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-2">Source</span>
            <div className="text-xl font-bold">Medical Device</div>
            <p className="text-sm text-slate-500 mt-2">(Infusion Pump, ECG)</p>
          </div>
          <div className="hidden md:flex justify-center text-blue-500">
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </div>
          <div className="bg-blue-600/20 p-6 rounded-2xl border-2 border-dashed border-blue-500 text-center shadow-lg transform scale-105">
            <span className="text-xs font-bold text-blue-300 uppercase tracking-wider block mb-2">Middle Layer</span>
            <div className="text-xl font-bold text-white">USB PQC Dongle</div>
            <p className="text-sm text-blue-200 mt-2 font-medium">(KYBER + DILITHIUM)</p>
          </div>
          <div className="hidden md:flex justify-center text-blue-500">
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </div>
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center shadow-md col-span-1">
             <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-2">Destination</span>
             <div className="text-xl font-bold">Hospital Gateway</div>
             <p className="text-sm text-slate-500 mt-2">(Encrypted Storage/Cloud)</p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
          <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center">
             <span className="mr-2">🛡️</span> Threat Model
          </h3>
          <ul className="space-y-4 text-slate-400">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">●</span>
              <span><strong>Harvest Now, Decrypt Later:</strong> Prevents adversaries from storing encrypted hospital data today to decrypt once quantum computers arrive.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">●</span>
              <span><strong>Man-in-the-Middle (MITM):</strong> Kyber ensures session keys cannot be intercepted even with quantum power.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">●</span>
              <span><strong>Device Impersonation:</strong> Dilithium digital signatures verify that telemetry comes from a genuine, authorized medical device.</span>
            </li>
          </ul>
        </section>

        <section className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
          <h3 className="text-xl font-bold mb-4 text-emerald-400 flex items-center">
             <span className="mr-2">🚀</span> Why USB Middleware?
          </h3>
          <div className="space-y-4 text-slate-400">
            <p><strong>Legacy Preservation:</strong> Older devices lack the CPU power to run PQC natively.</p>
            <p><strong>Regulatory Speed:</strong> No changes to internal medical device code means no need for fresh clinical validation.</p>
            <p><strong>Hot-Swappable:</strong> Can be instantly moved between devices in case of failure or upgrade.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Overview;
