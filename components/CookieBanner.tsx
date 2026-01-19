
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000); // Show after 2 seconds for better UX
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[60] flex justify-center pointer-events-none">
      <div className="bg-slate-900/90 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-[2rem] shadow-2xl max-w-4xl w-full pointer-events-auto animate-in slide-in-from-bottom-10 duration-500">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="bg-white/10 p-3 rounded-2xl flex-shrink-0">
            <ShieldCheckIcon className="w-8 h-8 text-[#00f2ff]" />
          </div>
          
          <div className="flex-grow text-center md:text-left">
            <h4 className="text-white font-bold text-lg mb-1">Your privacy matters</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              We use cookies to optimize your experience, analyze traffic, and personalize content. By clicking "Accept All", you consent to our use of cookies. Read our <Link to="/cookies" className="text-[#00f2ff] hover:underline">Cookie Policy</Link> for more details.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button 
              onClick={handleDecline}
              className="px-6 py-3 rounded-xl border border-white/10 text-white font-bold text-sm hover:bg-white/5 transition-all whitespace-nowrap"
            >
              Essential Only
            </button>
            <button 
              onClick={handleAccept}
              className="px-8 py-3 bg-[#7f1bff] text-white font-black rounded-xl hover:bg-[#6a15d9] transition-all shadow-lg shadow-purple-500/20 text-sm whitespace-nowrap"
            >
              Accept All
            </button>
          </div>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
