import React, { useState } from 'react';
import VideoModal from './VideoModal';
import AuthorIntro from './AuthorIntro';
import homeImage from '../assets/Home.png';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const accentBadges = [
    { label: 'Product Strategy', className: 'bg-[#f1f5ff] text-[#0b70ff]' },
    { label: 'UX Research', className: 'bg-[#fdf2f8] text-[#b4235a]' },
    { label: 'Systems Thinking', className: 'bg-[#ecfdf3] text-[#0f7b3e]' },
    { label: 'Front-End Engineering', className: 'bg-[#fff7ed] text-[#c05621]' },
  ];

  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-10 lg:px-14 py-16 md:py-24 bg-[#f7f7f5] text-[#1b1b1b]">
        <div className="absolute inset-x-12 md:inset-x-32 top-6 h-52 bg-white/70 blur-3xl rounded-full pointer-events-none" />

        <div className="w-full max-w-6xl text-center relative">
          <AuthorIntro />

          <div className="flex items-center justify-center flex-wrap gap-3 mb-8">
            {accentBadges.map((badge, index) => (
              <div
                key={badge.label}
                className={`px-4 py-2 rounded-full text-sm font-semibold border border-black/5 shadow-sm animate-fade-in-up ${badge.className}`}
                style={{ 
                  animationDelay: `${0.4 + index * 0.1}s`,
                  opacity: 0
                }}
              >
                {badge.label}
              </div>
            ))}
          </div>

          <header className="mb-12 md:mb-14">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-balance text-[#0f0f0f] animate-fade-in-up animate-delay-500">
              Clinify: Everything clinicians need, in one place
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-[#3c3c3c] max-w-3xl mx-auto leading-relaxed font-medium text-balance animate-fade-in-up animate-delay-600">
              Clinify is an AI-powered system I'm designing and building that unifies member search, analytics, communication, SDoH insights, risk modeling, program enrollment, and patient engagement into a single streamlined workflow.
              <br /><br />
              This page is a preview of the kind of work and reasoning I'd bring to Anima.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-700">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-[#0b70ff] text-white rounded-lg font-semibold shadow-[0_14px_38px_rgba(11,112,255,0.25)] hover:shadow-[0_18px_44px_rgba(11,112,255,0.3)] transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Watch 60-second demo
              </button>
              <a
                href="https://jobs.ashbyhq.com/Anima/4e389480-768d-4247-9a9a-ea0f9bd49744/application"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-[#0b70ff] rounded-lg font-semibold border border-[#d9e3ff] hover:shadow-[0_12px_30px_rgba(11,112,255,0.12)] hover:-translate-y-0.5 transition-all duration-200 text-center"
              >
                Open Anima Application
              </a>
            </div>
          </header>

          <div className="w-full flex justify-center animate-slide-in-up animate-delay-700">
            <div className="w-full max-w-5xl rounded-3xl overflow-hidden shadow-[0_26px_70px_rgba(0,0,0,0.14)] border border-[#e6e6e6] bg-white">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#ededed] bg-[#fafafa] text-xs text-[#6f6f6f]">
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c840]" />
                </span>
                <span className="font-semibold text-[#4a4a4a]">Clinify workspace preview</span>
              </div>
              <img
                src={homeImage}
                alt="Clinify platform preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Hero;
