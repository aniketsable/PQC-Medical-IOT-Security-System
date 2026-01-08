
import React, { useState } from 'react';
import { VIVA_QUESTIONS } from '../constants';

const VivaSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header>
        <h2 className="text-3xl font-bold mb-4">Viva Voice Preparation</h2>
        <p className="text-slate-400">Anticipated questions from external examiners and technical experts.</p>
      </header>

      <div className="space-y-4">
        {VIVA_QUESTIONS.map((item, index) => (
          <div key={index} className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-700/50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <span className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase ${
                  item.category === 'Cryptography' ? 'bg-blue-600/30 text-blue-400' :
                  item.category === 'Hardware' ? 'bg-emerald-600/30 text-emerald-400' :
                  'bg-purple-600/30 text-purple-400'
                }`}>
                  {item.category}
                </span>
                <span className="font-semibold text-slate-200">{item.question}</span>
              </div>
              <svg 
                className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6 pt-2 animate-in slide-in-from-top-2 duration-200">
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                   <p className="text-slate-400 text-sm leading-relaxed">
                     <span className="text-blue-400 font-bold">Answer: </span>
                     {item.answer}
                   </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-2xl">
         <h4 className="font-bold text-white mb-2 flex items-center">
           <span className="mr-2">💡</span> Exam Tip
         </h4>
         <p className="text-sm text-blue-300">
           When asked about complexity, emphasize that while PQC is math-heavy, your project focuses on the <strong>Engineering Integration</strong>—making these complex algorithms work on low-power hardware in a high-stakes environment like a hospital.
         </p>
      </div>
    </div>
  );
};

export default VivaSection;
