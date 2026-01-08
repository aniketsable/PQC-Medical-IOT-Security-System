
import React from 'react';

const Implementation: React.FC = () => {
  const pythonCode = `
# Project: PQC USB Security Device
# Implementation using liboqs-python for CRYSTALS-Kyber
import oqs
from Crypto.Cipher import AES
from Crypto.Hash import SHA3_256

def secure_transmission(medical_data):
    # 1. Initialize PQC Key Exchange (Kyber512)
    with oqs.KeyExchange('Kyber512') as kem:
        # Generate Public Key for the Device
        public_key = kem.generate_keypair()
        
        # In a real scenario, Gateway would provide a ciphertext
        # that we decapsulate to get the shared secret
        shared_secret = kem.decap_secret(received_ciphertext)
        
    # 2. Derive AES Key from Shared Secret using SHA-3
    aes_key = SHA3_256.new(shared_secret).digest()
    
    # 3. Encrypt Medical Telemetry
    cipher = AES.new(aes_key, AES.MODE_GCM)
    ciphertext, tag = cipher.encrypt_and_digest(medical_data.encode())
    
    return {
        "payload": ciphertext.hex(),
        "nonce": cipher.nonce.hex(),
        "auth_tag": tag.hex()
    }

# Example Usage
telemetry = "HR: 85, SPO2: 99%"
secure_packet = secure_transmission(telemetry)
print(f"Encrypted Packet: {secure_packet}")
`;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
       <header>
        <h2 className="text-3xl font-bold mb-4">Software Logic</h2>
        <p className="text-slate-400">The core algorithms running on the Raspberry Pi Pico and the Hospital Gateway.</p>
      </header>

      <div className="space-y-6">
        <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
           <div className="bg-slate-700 px-4 py-2 flex justify-between items-center">
              <span className="text-xs font-bold text-slate-300">PQC_ENGINE.PY (Simulation Logic)</span>
              <button className="text-xs text-blue-400 hover:text-blue-300">Copy Code</button>
           </div>
           <pre className="p-6 text-sm overflow-x-auto mono text-blue-200 bg-slate-900 leading-relaxed">
             {pythonCode}
           </pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-bold mb-4 text-emerald-400">Pico C/C++ Logic (Arduino IDE)</h3>
              <p className="text-xs text-slate-400 mb-4">The Pico handles USB interrupts and AES hardware acceleration.</p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li>• Use <code className="text-blue-400">TinyUSB</code> library for CDC profile.</li>
                <li>• Use <code className="text-blue-400">mbedtls</code> or <code className="text-blue-400">PQClean</code> for firmware-level crypto.</li>
                <li>• Pin Intercept: RX/TX pins linked to Medical Device Serial.</li>
              </ul>
           </div>
           <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-bold mb-4 text-blue-400">Gateway Validation (Python)</h3>
              <p className="text-xs text-slate-400 mb-4">The server running on a PC or Raspberry Pi 4 validates the data.</p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li>• Polls Serial ports for incoming USB Dongle packets.</li>
                <li>• Decrypts using the Kyber-established session key.</li>
                <li>• Verifies Dilithium signatures against local PKI database.</li>
              </ul>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Implementation;
