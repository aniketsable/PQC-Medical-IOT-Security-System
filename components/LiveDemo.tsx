
import React, { useState, useEffect } from 'react';

const LiveDemo: React.FC = () => {
  const [medicalData, setMedicalData] = useState("HR: 72 bpm, SpO2: 98%");
  const [step, setStep] = useState(0);
  const [log, setLog] = useState<string[]>([]);

  const steps = [
    "Raw medical data captured from USB port",
    "Running CRYSTALS-Dilithium signature (Identity verification)",
    "Generating AES-256 Initialization Vector (IV)",
    "Encrypting payload with Quantum-Safe Session Key (Kyber derived)",
    "Appending SHA-3 Integrity Tag",
    "Transmitting secure packet to Hospital Gateway"
  ];

  const runSimulation = () => {
    setStep(0);
    setLog([]);
  };

  useEffect(() => {
    if (step > 0 && step <= steps.length) {
      const timer = setTimeout(() => {
        setLog(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${steps[step-1]}`]);
        if (step < steps.length) setStep(s => s + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header>
        <h2 className="text-3xl font-bold mb-4">Functional Demonstration</h2>
        <p className="text-slate-400">Simulation of the PQC processing pipeline within the USB Dongle.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl">
          <h3 className="text-lg font-bold mb-4 text-blue-400">Step 1: Input Raw Data</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Simulated Medical Telemetry</label>
              <input 
                value={medicalData}
                onChange={(e) => setMedicalData(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white mono"
                placeholder="e.g. Heart Rate, Temperature..."
              />
            </div>
            <button 
              onClick={() => setStep(1)}
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-900/20"
              disabled={step > 0 && step < steps.length}
            >
              {step > 0 && step < steps.length ? 'Processing...' : 'Encrypt & Transmit'}
            </button>
          </div>

          <div className="mt-8">
             <h4 className="text-sm font-bold text-slate-400 mb-3">Pipeline Visualization</h4>
             <div className="space-y-3">
               {steps.map((s, i) => (
                 <div key={i} className={`flex items-center space-x-3 text-sm ${i < step ? 'text-emerald-400' : 'text-slate-600'}`}>
                    <div className={`w-2 h-2 rounded-full ${i < step ? 'bg-emerald-500 animate-pulse' : 'bg-slate-700'}`}></div>
                    <span>{s}</span>
                 </div>
               ))}
             </div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col shadow-2xl">
          <div className="bg-slate-800 px-4 py-2 border-b border-slate-700 flex justify-between items-center">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Serial Console Output</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-500/50"></div>
            </div>
          </div>
          <div className="flex-1 p-4 mono text-xs overflow-y-auto space-y-1 h-[400px]">
            {log.length === 0 && <div className="text-slate-600 italic">No activity logged. Click 'Encrypt & Transmit' to start.</div>}
            {log.map((entry, i) => (
              <div key={i} className="animate-in slide-in-from-left duration-300">
                <span className="text-slate-500">{entry.split(']')[0]}]</span>
                <span className="text-blue-400">{entry.split(']')[1]}</span>
              </div>
            ))}
            {step === steps.length && (
              <div className="pt-4 space-y-2">
                <div className="text-emerald-500 font-bold underline">--- TRANSMISSION PACKET GENERATED ---</div>
                <div className="text-slate-300 break-all p-2 bg-slate-800 rounded">
                  {`ENC_PAYLOAD: 0x5F2D9A...${Math.random().toString(16).substring(2, 20)}...8B`}
                </div>
                <div className="text-slate-300 break-all p-2 bg-slate-800 rounded">
                   {`DILITHIUM_SIG: 0x${Math.random().toString(16).substring(2, 40)}...`}
                </div>
                <div className="text-emerald-400 text-[10px] italic">Verified at Gateway with SHA-3 integrity match.</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDemo;
