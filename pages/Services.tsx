
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, ICON_MAP } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Our Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            Comprehensive digital growth solutions engineered to dominate search landscapes and drive sustainable business revenue.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`py-20 flex flex-col lg:flex-row gap-16 items-center border-b border-slate-100 last:border-0 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1">
                <div className="w-16 h-16 bg-purple-50 text-[#7f1bff] rounded-2xl flex items-center justify-center mb-8">
                  {ICON_MAP[service.icon]}
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                  {service.fullDesc}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                      <span className="w-2 h-2 bg-[#7f1bff] rounded-full mr-2"></span>
                      Key Benefits
                    </h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-slate-600 flex items-start font-medium">
                          <span className="text-[#7f1bff] mr-2">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                      Our Process
                    </h4>
                    <ul className="space-y-3">
                      {service.process.map((step, i) => (
                        <li key={i} className="text-sm text-slate-600 flex items-start font-medium">
                          <span className="text-purple-500 mr-2">{i + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Link 
                    to={`/services/${service.id}`}
                    className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-black rounded-xl hover:bg-[#7f1bff] transition-all shadow-lg"
                  >
                    Service Details
                  </Link>
                  <Link 
                    to="/book-demo" 
                    className="inline-flex items-center px-8 py-4 bg-purple-50 text-[#7f1bff] font-black rounded-xl hover:bg-purple-100 transition-all"
                  >
                    Book Audit
                  </Link>
                </div>
              </div>
              
              <div className="flex-1 w-full">
                <Link to={`/services/${service.id}`} className="block relative rounded-3xl overflow-hidden shadow-2xl group">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-purple-600/10 mix-blend-multiply transition-opacity opacity-0 group-hover:opacity-100"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                    <span className="px-6 py-3 bg-white text-slate-900 font-black rounded-full shadow-2xl">View Detailed Strategy</span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
