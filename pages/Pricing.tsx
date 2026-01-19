
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { PRICING_PLANS, PRICING_FAQS } from '../constants';

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24 bg-slate-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 font-medium">
            Choose the plan that's right for your stage. No hidden fees or lock-ins.
          </p>
          
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-bold transition-colors ${!isYearly ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-8 bg-slate-200 rounded-full relative p-1 transition-colors hover:bg-slate-300"
            >
              <div className={`w-6 h-6 bg-[#7f1bff] rounded-full transition-transform duration-200 shadow-sm ${isYearly ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-bold transition-colors ${isYearly ? 'text-slate-900' : 'text-slate-400'}`}>Yearly <span className="text-[#7f1bff] ml-1">(20% Off)</span></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-32">
          {PRICING_PLANS.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white rounded-[2.5rem] p-10 border transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 ${plan.isPopular ? 'border-[#7f1bff] shadow-xl ring-4 ring-purple-50 shadow-purple-500/5' : 'border-slate-100 shadow-sm'}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#7f1bff] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed font-medium">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-5xl font-black text-slate-900">${isYearly ? plan.yearlyPrice : plan.price}</span>
                <span className="text-slate-400 font-medium ml-2">/mo</span>
              </div>
              
              <Link 
                to="/book-demo" 
                className={`block w-full text-center py-4 rounded-2xl font-black transition-all mb-8 ${plan.isPopular ? 'bg-[#7f1bff] text-white hover:bg-[#6a15d9] shadow-lg shadow-purple-500/20' : 'bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200'}`}
              >
                Get Started
              </Link>
              
              <div className="space-y-4">
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">What's included:</p>
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-[#7f1bff] flex-shrink-0" />
                    <span className="text-sm text-slate-600 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pricing FAQs */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Pricing & Plan FAQs</h2>
            <p className="text-slate-600 font-medium">Have questions about billing? Find answers here.</p>
          </div>
          <div className="space-y-4">
            {PRICING_FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-900">{faq.question}</span>
                  {openFaq === idx ? <ChevronUpIcon className="w-5 h-5 text-[#7f1bff]" /> : <ChevronDownIcon className="w-5 h-5 text-slate-400" />}
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openFaq === idx ? 'max-h-96 py-6 border-t border-slate-100 px-6' : 'max-h-0'}`}>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
