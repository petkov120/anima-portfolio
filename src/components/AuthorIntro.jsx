import React, { useState } from 'react';
import avatar from '../assets/avatar.png';

const AuthorIntro = () => {
  const [avatarSrc, setAvatarSrc] = useState(avatar);
  const fallbackAvatar =
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><defs><linearGradient id="a" x1="0%" x2="100%" y1="0%" y2="100%"><stop stop-color="%231373e6" offset="0%"/><stop stop-color="%230bb5ff" offset="100%"/></linearGradient></defs><rect width="80" height="80" rx="40" fill="url(%23a)"/></svg>';

  return (
    <div className="flex flex-col items-center justify-center text-center mt-8 mb-6 animate-fade-in-down">
      <img
        src={avatarSrc}
        alt="Petkov Chakalov"
        className="w-20 h-20 rounded-full border border-gray-200 shadow-sm mb-4 object-cover animate-scale-in animate-delay-100"
        onError={() => setAvatarSrc(fallbackAvatar)}
      />
      <div className="text-sm font-semibold text-gray-700 animate-fade-in-up animate-delay-200">
        Petkov Chakalov — Product Designer &amp; Front-End Engineer
      </div>
      <p className="text-sm text-gray-500 max-w-xl leading-relaxed mt-1 animate-fade-in-up animate-delay-300">
        I design and build AI-powered clinical tools and workflow systems. This page is a focused case study for Anima, showing how I approach complex clinical ops problems from first principles.
      </p>
    </div>
  );
};

export default AuthorIntro;
