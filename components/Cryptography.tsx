
import React from 'react';

const Cryptography: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <section>
        <h2 className="text-3xl font-bold mb-4">Post-Quantum Cryptographic Design</h2>
        <p className="text-slate-400 max-w-2xl">
          Implementing the NIST Round 3 Finalists to ensure long-term security against the "Quantum Apocalypse."
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-800/50 p-6 rounded-2xl border border-blue-500/30 hover:border-blue-500/60 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">CRYSTALS-Kyber</h3>
            <span className="bg-blue-600 text-[10px] font-black px-2 py-1 rounded uppercase">Key Encapsulation</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            Used for <strong>Secure Key Exchange</strong>. It allows the USB Dongle and the Gateway to agree on a secret 256-bit key without ever sending it over the wire. Even a quantum computer cannot derive the key from the observed exchange.
          </p>
          <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700 text-xs text-blue-300">
            Mechanism: Module Lattice-Based Learning With Errors (ML-LWE)
          </div>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-2xl border border-purple-500/30 hover:border-purple-500/60 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">CRYSTALS-Dilithium</h3>
            <span className="bg-purple-600 text-[10px] font-black px-2 py-1 rounded uppercase">Digital Signature</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
             Used for <strong>Entity Authentication</strong>. The Dongle signs every data packet. This proves to the hospital server that the data is authentic and hasn't been tampered with by a malicious device on the network.
          </p>
          <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700 text-xs text-purple-300">
             Mechanism: Fiat-Shamir with Aborts over Lattices
          </div>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-2xl border border-emerald-500/30 hover:border-emerald-500/60 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">AES-256 (GCM Mode)</h3>
            <span className="bg-emerald-600 text-[10px] font-black px-2 py-1 rounded uppercase">Symmetric Encryption</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            Used for <strong>Bulk Data Encryption</strong>. PQC algorithms are too computationally expensive for real-time telemetry. We use Kyber to share an AES key, then use AES-256 for the actual high-speed patient data.
          </p>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-2xl border border-orange-500/30 hover:border-orange-500/60 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">SHA-3 (Keccak)</h3>
            <span className="bg-orange-600 text-[10px] font-black px-2 py-1 rounded uppercase">Hashing</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            Used for <strong>Data Integrity</strong>. It generates a unique fingerprint for every block of medical data. If even a single bit is changed during transmission, the hash will fail validation.
          </p>
        </div>
      </div>

      <section className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700">
        <h3 className="text-xl font-bold mb-6 text-center">Cryptographic Lifecycle</h3>
        <div className="flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0 text-center">
          <div className="flex-1">
            <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-blue-500">1</div>
            <h4 className="font-bold">Pairing</h4>
            <p className="text-xs text-slate-500 px-4">Dilithium certificates exchanged between Dongle and Gateway during provisioning.</p>
          </div>
          <div className="hidden md:block w-8 h-0.5 bg-slate-700"></div>
          <div className="flex-1">
            <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-blue-500">2</div>
            <h4 className="font-bold">KEM Exchange</h4>
            <p className="text-xs text-slate-500 px-4">Kyber establishes a transient 256-bit AES Session Key.</p>
          </div>
          <div className="hidden md:block w-8 h-0.5 bg-slate-700"></div>
          <div className="flex-1">
            <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-blue-500">3</div>
            <h4 className="font-bold">Transmission</h4>
            <p className="text-xs text-slate-500 px-4">Medical data is encrypted with AES and signed with Dilithium.</p>
          </div>
          <div className="hidden md:block w-8 h-0.5 bg-slate-700"></div>
          <div className="flex-1">
            <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-blue-500">4</div>
            <h4 className="font-bold">Cleanup</h4>
            <p className="text-xs text-slate-500 px-4">Session key is wiped from RAM after device disconnects or timeout.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cryptography;
