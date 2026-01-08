
import React from 'react';

export const VIVA_QUESTIONS = [
  {
    category: 'Cryptography',
    question: "Why do we need Post-Quantum Cryptography if current AES-256 is considered 'safe'?",
    answer: "Current symmetric encryption like AES-256 is relatively resistant to quantum attacks (Grover's algorithm only halves the effective bit strength), but our current asymmetric methods like RSA and ECC (used for key exchange and signatures) will be completely broken by Shor's algorithm. PQC secures the initial key exchange and authentication against future quantum threats."
  },
  {
    category: 'Healthcare',
    question: "Why use a USB dongle instead of just updating the medical device firmware?",
    answer: "Medical devices (e.g., MRI machines, infusion pumps) are highly regulated by bodies like the FDA. Modifying their internal firmware requires expensive and time-consuming re-certification. A plug-and-play USB device allows us to add a security layer 'transparently' without touching the core medical software."
  },
  {
    category: 'Hardware',
    question: "What is USB CDC mode and why did you choose it?",
    answer: "USB CDC (Communication Device Class) allows the MCU to appear as a Virtual COM Port. Most legacy medical devices use serial-over-USB to send telemetry data. CDC is universally supported and allows us to intercept the data stream easily."
  },
  {
    category: 'Cryptography',
    question: "Explain the 'Hybrid' approach used in this project.",
    answer: "We use PQC (Kyber) to establish a secure shared secret between the device and the gateway. Once that secret is established, we use standard AES-256 for data encryption. This provides the quantum resistance of Kyber with the proven high-speed performance of AES for the bulk data."
  }
];

export const ICONS = {
  Shield: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  ),
  Cpu: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>
  ),
  Lock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
  ),
  Activity: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
  )
};
