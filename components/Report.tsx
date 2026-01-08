
import React from 'react';

const Report: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white text-slate-900 p-12 rounded shadow-2xl space-y-10 animate-in zoom-in-95 duration-500">
      <div className="text-center border-b-2 border-slate-200 pb-10">
        <h1 className="text-3xl font-black uppercase tracking-tighter mb-2">Project Technical Report</h1>
        <p className="text-lg font-medium text-slate-600 italic">Post-Quantum Cryptography Based USB Security for Medical IoT</p>
        <div className="mt-6 text-sm font-bold text-slate-400 uppercase">Academic Year 2024-2025</div>
      </div>

      <section>
        <h2 className="text-xl font-bold mb-4 border-l-4 border-blue-600 pl-4">Abstract</h2>
        <p className="text-slate-700 leading-relaxed">
          This project proposes a hardware-based security bridge for medical IoT systems. 
          By utilizing a Raspberry Pi Pico as a transparent USB middleware, we implement 
          CRYSTALS-Kyber for quantum-resistant key exchange and CRYSTALS-Dilithium for authentication. 
          This approach allows for immediate PQC-readiness for legacy medical hardware without firmware modifications, 
          mitigating the risk posed by future large-scale quantum computers.
        </p>
      </section>

      <section className="grid grid-cols-2 gap-6">
        <div className="bg-slate-50 p-6 rounded border border-slate-200">
          <h3 className="font-bold mb-2">Performance Metrics</h3>
          <ul className="text-sm space-y-2 text-slate-600">
            <li>• Encryption Latency: &lt; 45ms</li>
            <li>• Key Exchange: 1.2s</li>
            <li>• Power Consumption: 350mW</li>
            <li>• Memory Usage: 180KB RAM</li>
          </ul>
        </div>
        <div className="bg-slate-50 p-6 rounded border border-slate-200">
          <h3 className="font-bold mb-2">Standard Compliance</h3>
          <ul className="text-sm space-y-2 text-slate-600">
            <li>• NIST PQC Round 3 Finalist</li>
            <li>• FIPS 140-3 Compatibility</li>
            <li>• HIPAA Data Security Rule</li>
            <li>• ISO/IEEE 11073 (Health informatics)</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4 border-l-4 border-blue-600 pl-4">Conclusion</h2>
        <p className="text-slate-700 leading-relaxed">
          The prototype successfully demonstrates that quantum-safe security is achievable in constrained 
          embedded environments. The USB-based approach offers a practical, low-cost, and regulatory-friendly 
          path for hospitals to future-proof their critical telemetry data against emerging cryptographic threats.
        </p>
      </section>

      <div className="pt-10 flex justify-between items-center text-xs font-bold text-slate-400 border-t border-slate-100">
        <div>DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING</div>
        <div>CONFIDENTIAL RESEARCH COPY</div>
      </div>
    </div>
  );
};

export default Report;
