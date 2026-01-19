
import React from 'react';
import { 
  ShieldCheckIcon, 
  ArrowTrendingUpIcon, 
  ClockIcon, 
  UserCircleIcon 
} from '@heroicons/react/24/outline';

const BookDemo: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 flex flex-col">
      <div className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto px-4 py-20 gap-20">
        
        {/* Left Side: Benefits */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
            See Your Future <br />
            <span className="text-[#7f1bff]">Growth Blueprint.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-12">
            In this 15-minute session, we'll reveal exactly where your competitors are beating you and how you can take back the top spot.
          </p>
          
          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-[#7f1bff] flex-shrink-0">
                <ArrowTrendingUpIcon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">SEO Performance Review</h3>
                <p className="text-slate-600 text-sm">A direct look at your current rankings vs. your top 3 competitors.</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 flex-shrink-0">
                <ShieldCheckIcon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Growth Opportunity Map</h3>
                <p className="text-slate-600 text-sm">Identifying "low-hanging fruit" keywords that can drive traffic in 30 days.</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 flex-shrink-0">
                <ClockIcon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Roadmap to ROI</h3>
                <p className="text-slate-600 text-sm">A clear timeline of what to fix, when to expect results, and the expected revenue boost.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-white rounded-3xl shadow-sm border border-slate-200">
             <div className="flex items-center gap-4 mb-4">
                <UserCircleIcon className="w-10 h-10 text-[#7f1bff]" />
                <span className="font-bold text-slate-900">Trusted by over 500+ global brands.</span>
             </div>
             <p className="text-sm text-slate-500 italic">"The strategy session alone was more valuable than 6 months with our previous agency." - Sarah Jenkins, CEO of TechFlow</p>
          </div>
        </div>
        
        {/* Right Side: Form */}
        <div className="flex-1">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-purple-500/10 border border-slate-100 sticky top-32">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Schedule Your Audit</h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Work Email</label>
                <input type="email" placeholder="you@company.com" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7f1bff] focus:bg-white transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Company Size</label>
                <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7f1bff] focus:bg-white transition-all">
                  <option>1-10 employees</option>
                  <option>11-50 employees</option>
                  <option>51-200 employees</option>
                  <option>201-500 employees</option>
                  <option>500+ employees</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Current SEO Budget (Monthly)</label>
                <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7f1bff] focus:bg-white transition-all">
                  <option>$1,000 - $3,000</option>
                  <option>$3,000 - $10,000</option>
                  <option>$10,000 - $25,000</option>
                  <option>$25,000+</option>
                </select>
              </div>
              <div className="p-4 bg-purple-50 text-[#7f1bff] rounded-xl text-xs flex items-center">
                <ShieldCheckIcon className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>By booking, you agree to our privacy policy. No spam, ever.</span>
              </div>
              <button className="w-full py-5 bg-[#7f1bff] text-white font-extrabold rounded-xl hover:bg-[#6a15d9] transition-all shadow-xl shadow-purple-500/20 text-lg uppercase tracking-tight">
                Claim My Free Audit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
