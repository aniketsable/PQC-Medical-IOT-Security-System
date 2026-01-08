
import React from 'react';

const Hardware: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <header>
        <h2 className="text-3xl font-bold mb-4">Hardware Specifications</h2>
        <p className="text-slate-400">Selecting components for low-latency PQC execution and reliable USB handling.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg">
          <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-lg flex items-center justify-center mb-4">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>
          </div>
          <h3 className="text-lg font-bold mb-2">Microcontroller</h3>
          <p className="text-slate-500 text-sm mb-4">Raspberry Pi Pico (RP2040) or ESP32-S3</p>
          <ul className="text-xs text-slate-400 space-y-2">
            <li>• Dual-core Cortex M0+ (133MHz)</li>
            <li>• Native USB 1.1 Support</li>
            <li>• 264KB Internal SRAM</li>
            <li>• High performance/price ratio</li>
          </ul>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg">
          <div className="w-12 h-12 bg-emerald-600/20 text-emerald-400 rounded-lg flex items-center justify-center mb-4">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v10m0 0l-4-4m4 4l4-4m0 10v-6m0 0l-4 4m4-4l4-4"/></svg>
          </div>
          <h3 className="text-lg font-bold mb-2">USB Mode: CDC</h3>
          <p className="text-slate-500 text-sm mb-4">Virtual Serial Communication</p>
          <p className="text-xs text-slate-400">
            Chosen over HID for high-throughput medical telemetry. CDC is the standard for "intercepting" raw data from legacy machines that use serial-over-USB.
          </p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg">
          <div className="w-12 h-12 bg-purple-600/20 text-purple-400 rounded-lg flex items-center justify-center mb-4">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3 className="text-lg font-bold mb-2">Secure Storage</h3>
          <p className="text-slate-500 text-sm mb-4">Flash Persistence (Emulated EEPROM)</p>
          <p className="text-xs text-slate-400">
            Cryptographic seeds are stored in isolated flash sectors. Future versions could integrate the ATECC608A secure element for physical tamper protection.
          </p>
        </div>
      </div>

      <section className="bg-slate-800/30 border border-slate-700 p-8 rounded-2xl">
        <h3 className="text-xl font-bold mb-6">Internal Hardware Workflow</h3>
        <div className="relative overflow-hidden bg-slate-900 rounded-xl p-6 mono text-sm text-blue-300">
          <div className="space-y-2">
            <div>1. [PICO] Powers up, initializes USB Device Stack.</div>
            <div>2. [PICO] Handshakes with Medical Device (Serial @ 115200 baud).</div>
            <div>3. [PICO] Intercepts raw ASCII/Binary patient data stream.</div>
            <div>4. [PICO] Loads Kyber Session Key into RAM.</div>
            <div>5. [PICO] Processes data through AES-256 Engine.</div>
            <div>6. [PICO] Encapsulates data with Dilithium Signature.</div>
            <div>7. [PICO] Forwards secure packet to Host Gateway.</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hardware;
