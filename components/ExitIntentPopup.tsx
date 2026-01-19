
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon, RocketLaunchIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';

const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const shown = localStorage.getItem('exit_popup_shown');
    if (shown) {
      setHasBeenShown(true);
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse moves above the viewport (towards tabs/address bar)
      if (e.clientY <= 0 && !hasBeenShown && !isVisible) {
        setIsVisible(true);
        setHasBeenShown(true);
        localStorage.setItem('exit_popup_shown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasBeenShown, isVisible]);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={closePopup}
      ></div>

      {/* Popup Content */}
      <div className="relative bg-white w-full max-w-2xl rounded-[3rem] overflow-hidden shadow-2xl transform transition-all animate-in fade-in zoom-in duration-300">
        <button 
          onClick={closePopup}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors z-20"
        >
          <XMarkIcon className="w-6 h-6 text-slate-400" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left Side: Visual */}
          <div className="hidden md:flex md:w-2/5 bg-[#1a0b3d] p-10 flex-col justify-between text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-[#7f1bff] rounded-xl flex items-center justify-center mb-6">
                <RocketLaunchIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black leading-tight mb-4">Wait! Before you go...</h3>
              <p className="text-sm text-slate-400 font-medium">Don't leave your traffic to chance.</p>
            </div>
            
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-3">
                <ShieldCheckIcon className="w-5 h-5 text-[#00f2ff]" />
                <span className="text-[10px] font-black uppercase tracking-widest">100% White-Hat</span>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#7f1bff] rounded-full blur-[80px] opacity-30"></div>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 p-8 md:p-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">
              Get Your <span className="text-[#7f1bff]">Free SEO Audit</span>
            </h2>
            <p className="text-slate-500 font-medium mb-8 leading-relaxed">
              We'll analyze your top 3 competitors and show you exactly how to outrank them in the next 90 days. 
              <br/><br/>
              <span className="text-slate-900 font-bold">Value: $500 — Today: Free</span>
            </p>

            <Link 
              to="/book-demo"
              onClick={closePopup}
              className="block w-full py-5 bg-[#7f1bff] text-white text-center font-black rounded-2xl hover:bg-[#6a15d9] transition-all shadow-xl shadow-purple-500/20 text-lg mb-6"
            >
              Claim My Free Audit
            </Link>

            <button 
              onClick={closePopup}
              className="w-full text-center text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-widest"
            >
              No thanks, I don't want more traffic
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
