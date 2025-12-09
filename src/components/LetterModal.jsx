import React, { useEffect } from 'react';

const LetterModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      // Handle ESC key to close modal
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      style={{ animation: 'fadeIn 0.2s ease-in-out' }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      {/* Modal Container */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto border border-white/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-all duration-200 text-slate-700 hover:scale-110"
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Letter Content */}
        <div className="p-8 md:p-12 bg-gradient-to-b from-white to-[#fafafa]">
          <div className="max-w-none">
            <p className="text-[#1b1b1b] mb-6 text-lg md:text-xl leading-relaxed font-medium">
              Hi Shun,
            </p>
            
            <p className="text-[#1b1b1b] mb-6 text-base md:text-lg leading-relaxed">
              I'm Chakalov Petkov Richard, a Design Engineer from Nigeria. Your mission resonates with me because I've seen firsthand how slow, unclear healthcare systems lead to misdiagnosis and delayed care.
            </p>
            
            <p className="text-[#1b1b1b] mb-6 text-base md:text-lg leading-relaxed">
              I recently worked on a freelance MVP for a clinical workflow platform, and it showed me how much impact well-designed systems and AI-supported workflows can have, especially in environments where care is inconsistent.
            </p>
            
            <p className="text-[#1b1b1b] mb-6 text-base md:text-lg leading-relaxed">
              Your vision of delivering precision care within 24 hours is the exact kind of challenge I want to work on. I'd be proud to contribute to a team building tools that genuinely save lives.
            </p>
            
            <p className="text-[#1b1b1b] mb-8 text-base md:text-lg leading-relaxed">
              Thank you for considering my application.
            </p>
            
            <p className="text-[#1b1b1b] text-base md:text-lg font-semibold">
              — Chakalov Petkov Richard
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterModal;

