
import React from 'react';
import { Link } from 'react-router-dom';

const FooterCTA: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32 border-t border-slate-100">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#7f1bff] rounded-full blur-[120px]"></div>
      </div>
      
      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
          Ready to Outrank Your Competition?
        </h2>
        <p className="text-slate-500 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
          Join 500+ successful companies who scaled their organic reach with our data-driven SEO strategies.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/book-demo"
            className="w-full sm:w-auto px-10 py-4 bg-[#7f1bff] text-white font-black rounded-full hover:bg-[#6a15d9] transition-all shadow-xl shadow-purple-500/20"
          >
            Claim Free Audit
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-10 py-4 bg-slate-900 text-white font-black rounded-full hover:bg-slate-800 transition-all shadow-xl"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
