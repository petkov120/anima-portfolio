import React, { useState } from 'react';
import LetterModal from './LetterModal';

const LetterWidget = () => {
  const [isLetterModalOpen, setIsLetterModalOpen] = useState(false);

  return (
    <>
      {/* Fixed Floating Letter Button */}
      <div className="fixed bottom-6 right-6 z-40 group">
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="bg-[#1b1b1b] text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
            Message to founder Shun
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#1b1b1b]" />
          </div>
        </div>
        
        <button
          onClick={() => setIsLetterModalOpen(true)}
          className="relative w-14 h-14 bg-[#0b70ff] text-white rounded-full shadow-[0_8px_24px_rgba(11,112,255,0.4)] hover:shadow-[0_12px_32px_rgba(11,112,255,0.5)] hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label="Message to founder Shun"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          
          {/* Pulse animation ring */}
          <span className="absolute inset-0 rounded-full bg-[#0b70ff] animate-ping opacity-20" />
        </button>
      </div>

      {/* Letter Modal */}
      <LetterModal isOpen={isLetterModalOpen} onClose={() => setIsLetterModalOpen(false)} />
    </>
  );
};

export default LetterWidget;

