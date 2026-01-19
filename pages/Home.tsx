
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon, 
  RocketLaunchIcon, 
  PresentationChartLineIcon,
  MagnifyingGlassIcon,
  CpuChipIcon,
  GlobeAltIcon,
  AdjustmentsHorizontalIcon,
  StarIcon,
  CheckCircleIcon,
  CalendarIcon,
  UserIcon
} from '@heroicons/react/24/solid';
import { SERVICES, BLOG_POSTS, ICON_MAP, PRICING_PLANS, CASE_STUDIES } from '../constants';

const Home: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [activeAdditionalTab, setActiveAdditionalTab] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { value: '91%', label: 'CLIENT RETENTION RATE', sub: 'Industry Average: 50%' },
    { value: '93%', label: 'CLIENT SATISFACTION SCORE', sub: 'Industry Average: 72%' },
    { value: '420%', label: 'HIGHER NPS SCORE THAN', sub: 'Industry Average: 16' },
    { value: '500+', label: 'DIGITAL EXPERTS', sub: 'Global Growth Team' },
    { value: '27+', label: 'YEARS IN BUSINESS', sub: 'Established 1998' },
  ];

  const clientTestimonials = [
    {
      name: 'C.H. Reed',
      content: 'C.H. Reed was looking to increase its traffic and leads, and with a custom SEO and local SEO campaign from OnlineSEOHelp, the company has started to see impressive results — including a 40% increase in organic traffic.',
      services: 'SEO, LOCAL SEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
      logo: 'C.H. REED'
    },
    {
      name: 'All Pro Trailer Superstore',
      content: '"OnlineSEOHelp has helped us expand our digital footprint not only in Central PA and the mid-Atlantic, but also throughout the Continental U.S."',
      services: 'SEO, PPC, EMAIL, SOCIAL MEDIA, WEBSITE MAINTENANCE',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
      logo: 'TRAILER SUPERSTORE'
    },
    {
      name: 'de Ramon Plastic Surgery Institute',
      content: '"The nice thing about working with OnlineSEOHelp has always been that they\'ve pushed us to up the quality of everything that we\'re doing."',
      services: 'SEO, PPC, WEB DESIGN',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
      logo: 'DERAMÓN'
    }
  ];

  const tabs = [
    { 
      id: 0, 
      label: 'Search Engine Optimization', 
      icon: <MagnifyingGlassIcon className="w-5 h-5" />,
      content: (
        <div className="space-y-6 text-sm">
          <p className="text-slate-600 leading-relaxed">SEO is the marketing process that gets your website to the top of search results for products and services you provide.</p>
          <p className="text-slate-600 leading-relaxed font-medium">When someone searches online for something you sell, whether it's a product or service, you would hope that your business was front and center! <span className="font-bold text-slate-900">SEO is the process that gets you center stage for these searches.</span> It helps you rank better in search results and boost your visibility, so you can reach your targeted traffic and generate revenue.</p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/services" className="px-6 py-3 bg-purple-50 text-[#7f1bff] font-black rounded-xl hover:bg-purple-100 transition-all text-sm">View SEO Management Services</Link>
          </div>
        </div>
      )
    },
    { 
      id: 1, 
      label: 'AI SEO', 
      icon: <CpuChipIcon className="w-5 h-5" />,
      content: (
        <div className="space-y-6 text-sm">
          <p className="text-slate-600 leading-relaxed">AI SEO leverages machine learning and generative AI to predict search trends and automate content optimization for the next generation of search.</p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-6 py-3 bg-purple-50 text-[#7f1bff] font-black rounded-xl hover:bg-purple-100 transition-all text-sm">See AI Capabilities</button>
          </div>
        </div>
      )
    },
    { 
      id: 2, 
      label: 'OmniSEO®', 
      icon: <AdjustmentsHorizontalIcon className="w-5 h-5" />,
      content: (
        <div className="space-y-6 text-sm">
          <p className="text-slate-600 leading-relaxed">OmniSEO is our proprietary full-funnel optimization platform designed to unify search data across all digital touchpoints.</p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-6 py-3 bg-purple-50 text-[#7f1bff] font-black rounded-xl hover:bg-purple-100 transition-all text-sm">Demo OmniSEO Platform</button>
          </div>
        </div>
      )
    },
  ];

  const additionalServices = [
    {
      label: 'Digital Marketing',
      title: '360° Digital Growth Ecosystem',
      content: 'In the modern digital landscape, a fragmented approach leads to missed opportunities. Online SEO Help provides a unified 360-degree digital marketing strategy that synchronizes SEO, content, and paid channels into a single, high-performance growth engine. We don\'t just drive traffic; we build sustainable digital assets.',
      subContent: 'Our methodology leverages advanced data attribution and consumer behavior analysis to ensure every touchpoint is optimized for conversion. By integrating multi-channel signals, we create a synergistic effect that accelerates brand authority and maximizes your return on digital investment.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    },
    {
      label: 'Pay Per Click',
      title: 'Data-Driven Performance Advertising',
      content: 'While organic search builds long-term equity, PPC provides the precision and velocity needed to capture immediate market intent. We don\'t just "buy clicks"; we buy revenue. Our PPC management service focuses on high-intent search terms, remarketing to warm leads, and aggressive display strategies that keep your brand top-of-mind.',
      subContent: 'Our PPC experts manage performance-driven paid campaigns that deliver immediate ROI. We meticulously optimize bidding, ad copy, and landing pages to ensure your ad spend results in actual profit, maintaining constant vigilance over your campaign efficiency.',
      image: 'https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=800'
    },
    {
      label: 'Social Media Marketing',
      title: 'Social Authority & Audience Engagement',
      content: 'Social signals are a critical component of brand trust and modern search relevance. We develop sophisticated social media strategies that transform your social presence into an authority hub. Our team manages your brand narrative across LinkedIn, Instagram, and X to foster community and trust.',
      subContent: 'From LinkedIn professional networking to high-impact Instagram visual storytelling, we manage your brand\'s narrative. We focus on building genuine engagement that translates into multi-channel brand loyalty and increased viral reach potential.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800'
    },
    {
      label: 'Link Building',
      title: 'Strategic Authority Acquisition',
      content: 'Links remain one of the most powerful signals in Google\'s ranking algorithm, but quality is everything. We build high-quality backlink profiles through ethical outreach, guest posting, and digital PR to signal authority to search engines. Our approach ensures your domain grows in trust and prominence.',
      subContent: 'We prioritize links that drive referral traffic and signal genuine authority. By conducting deep competitor backlink analysis and targeted outreach, we secure placements that provide both immediate SEO value and long-term brand credibility.',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800'
    },
    {
      label: 'Guest Posting',
      title: 'Editorial Placement & Thought Leadership',
      content: 'Positioning your brand\'s experts on top-tier industry publications is the ultimate form of digital PR. We identify premium editorial opportunities that align with your brand\'s core expertise and secure placements that build your profile as a thought leader.',
      subContent: 'Our editorial team creates high-value content that attracts, engages, and converts. We manage the entire lifecycle from topic identification to outreach and publication, ensuring every piece of content strengthens your brand equity.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800'
    },
    {
      label: 'Reputation Management',
      title: 'Defensive SEO & Brand Sentiment Control',
      content: 'Your search results are your brand\'s first impression. Our Reputation Management (ORM) service uses "Defensive SEO" techniques to ensure the top results for your brand are positive and accurate. We monitor brand sentiment across review platforms, news sites, and social forums.',
      subContent: 'We take extreme ownership of your digital image. By proactively managing reviews and countering negative signals with high-authority positive assets, we safeguard your brand\'s reputation and ensure a consistent first impression.',
      image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="bg-[#050505] text-white">
      {/* Redesigned Hero Section */}
      <section className="relative pt-48 pb-64 overflow-hidden bg-[#050505] min-h-[90vh] flex flex-col items-center justify-center">
        {/* Background Perspective Grid Lines */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
             style={{ 
               backgroundImage: `linear-gradient(#ffffff15 1px, transparent 1px), linear-gradient(90deg, #ffffff15 1px, transparent 1px)`,
               backgroundSize: '100px 100px',
               perspective: '1000px',
               transform: 'rotateX(65deg) translateY(-20%) scale(2)',
               transformOrigin: 'top'
             }}>
        </div>
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#7f1bff] rounded-full blur-[200px] opacity-20 pointer-events-none"></div>

        <div className={`max-w-5xl mx-auto px-4 relative z-10 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Availability Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold text-slate-300 mb-10 backdrop-blur-md">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 shadow-[0_0_10px_#22c55e]"></span>
            3 spots left for Q2
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
            Strategies that convert <br />
            <span className="text-slate-400">searchers into buyers</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Get a high-performing SEO strategy designed to turn clicks into customers, all with a simple, stress-free subscription—no contracts, no hassle.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link to="/book-demo" className="px-10 py-5 bg-[#7f1bff] text-white font-black rounded-xl hover:bg-[#6a15d9] transition-all shadow-2xl shadow-purple-500/30 text-base active:scale-95 transform">
              Start your free audit
            </Link>
            
            <div className="flex flex-col items-start text-left">
              <div className="flex gap-0.5 mb-1">
                {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} className="w-4 h-4 text-orange-400" />)}
              </div>
              <p className="text-[13px] font-bold text-slate-500">500+ founders trust us</p>
            </div>
          </div>
        </div>

        {/* Floating Preview Cards Section at Bottom */}
        <div className="absolute bottom-[-60px] left-0 w-full overflow-hidden h-96 flex items-end justify-center pointer-events-none">
           <div className="flex gap-8 px-10 items-end transform translate-y-12 rotate-[-1.5deg] w-max">
             {CASE_STUDIES.slice(0, 6).map((study, idx) => (
               <div 
                 key={idx} 
                 className={`w-64 bg-[#111111] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl transition-transform duration-700 flex-shrink-0 group ${idx % 2 === 0 ? 'h-80' : 'h-[24rem]'}`}
                 style={{ transitionDelay: `${idx * 100}ms` }}
               >
                 <div className="relative h-1/2">
                    <img src={study.image} alt="" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
                 </div>
                 <div className="p-6">
                   <p className="text-[9px] font-black uppercase tracking-widest text-[#7f1bff] mb-2">{study.industry}</p>
                   <h4 className="text-sm font-bold text-white leading-snug line-clamp-2">{study.title}</h4>
                   <div className="mt-4 flex items-center justify-between opacity-50">
                     <span className="text-[9px] text-slate-400 font-bold uppercase">Case Study</span>
                     <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center">
                       <ArrowRightIcon className="w-3 h-3 text-white" />
                     </div>
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      <div className="bg-white text-slate-900 relative z-20">
        {/* Interactive Tabs Section */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              The right SEO agency that <span className="text-[#7f1bff]">future-proofs</span> your search growth
            </h2>
            <div className="flex flex-col lg:flex-row gap-8 mt-16">
              <div className="w-full lg:w-1/3 flex flex-col gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-4 px-8 py-6 rounded-2xl text-left transition-all border ${activeTab === tab.id ? 'bg-white border-slate-100 shadow-xl text-[#7f1bff]' : 'border-transparent text-slate-500 hover:bg-slate-50'}`}
                  >
                    <div className={`p-2 rounded-lg ${activeTab === tab.id ? 'bg-purple-50 text-[#7f1bff]' : 'text-slate-400'}`}>
                      {tab.icon}
                    </div>
                    <span className="font-bold text-sm">{tab.label}</span>
                  </button>
                ))}
              </div>
              <div className="w-full lg:w-2/3 bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-2xl">
                {tabs[activeTab].content}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-32 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-[#7f1bff] font-black uppercase tracking-widest text-xs mb-4">Case Studies</h2>
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Proven results from data-driven SEO.</h3>
              </div>
              <Link to="/case-studies" className="inline-flex items-center gap-2 text-slate-900 font-black hover:text-[#7f1bff] transition-colors">
                View all stories <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {CASE_STUDIES.slice(0, 3).map((study, idx) => (
                <Link key={idx} to={`/case-studies/${study.id}`} className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                  <div className="h-64 relative overflow-hidden">
                    <img src={study.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black text-[#7f1bff] uppercase border border-purple-100">
                      {study.industry}
                    </div>
                  </div>
                  <div className="p-10">
                    <h4 className="text-xl font-black text-slate-900 mb-4 group-hover:text-[#7f1bff] transition-colors line-clamp-2">{study.title}</h4>
                    <div className="space-y-4 mb-8">
                      {study.results.slice(0, 2).map((res, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircleIcon className="w-5 h-5 text-green-500" />
                          <span className="text-sm font-bold text-slate-700">{res}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                      <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Case Details</span>
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#7f1bff] group-hover:text-white transition-all">
                        <ArrowRightIcon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-[#1a0b3d] mb-6 tracking-tight">Additional Services We Provide</h2>
              <p className="text-slate-500 text-lg max-w-4xl mx-auto font-medium leading-relaxed">
                OnlineSEOHelp is a top-rated SEO company that also offers a wide array of inbound and outbound marketing services to help grow your online visibility. Some of them are:
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-20 overflow-x-auto pb-4 px-2">
              {additionalServices.map((service, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveAdditionalTab(idx)}
                  className={`px-8 py-4 rounded-2xl font-bold text-sm whitespace-nowrap transition-all border ${activeAdditionalTab === idx ? 'bg-[#7f1bff] text-white border-[#7f1bff] shadow-xl shadow-purple-500/20' : 'bg-white text-slate-500 border-slate-100 hover:border-slate-300'}`}
                >
                  {service.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1 w-full">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-100">
                  <img 
                    src={additionalServices[activeAdditionalTab].image} 
                    alt={additionalServices[activeAdditionalTab].title} 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent"></div>
                </div>
              </div>
              <div className="flex-1 space-y-8">
                <h3 className="text-3xl md:text-4xl font-black text-[#1a0b3d] leading-tight tracking-tight">
                  {additionalServices[activeAdditionalTab].title}
                </h3>
                <div className="space-y-6 text-slate-600 leading-relaxed font-medium text-lg">
                  <p>{additionalServices[activeAdditionalTab].content}</p>
                  <p>{additionalServices[activeAdditionalTab].subContent}</p>
                </div>
                <Link 
                  to="/services" 
                  className="inline-flex items-center gap-2 text-[#7f1bff] font-black hover:gap-4 transition-all"
                >
                  Know More <ArrowRightIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-32 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-[#7f1bff] font-black uppercase tracking-widest text-xs mb-4">Our Methodology</h2>
              <h3 className="text-4xl font-black text-slate-900 tracking-tight">How we drive unmatched growth.</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { step: "01", title: "Deep Site Audit", desc: "We analyze over 200 technical checkpoints.", icon: <MagnifyingGlassIcon className="w-8 h-8 text-[#7f1bff]" /> },
                { step: "02", title: "Growth Blueprint", desc: "Custom-tailored keyword mapping.", icon: <PresentationChartLineIcon className="w-8 h-8 text-[#7f1bff]" /> },
                { step: "03", title: "Velocity Execution", desc: "High-frequency content creation.", icon: <RocketLaunchIcon className="w-8 h-8 text-[#7f1bff]" /> }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-8">{item.icon}</div>
                  <h4 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h4>
                  <p className="text-slate-500 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-black mb-16"><span className="text-[#7f1bff]">Testimonials</span> from our clients</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {clientTestimonials.map((item, idx) => (
                <div key={idx} className="bg-[#f8f6ff] rounded-[2.5rem] p-10 h-[500px] relative overflow-hidden group border border-slate-100">
                  <h4 className="text-2xl font-black mb-6">{item.name}</h4>
                  <p className="text-slate-600 text-sm mb-8 line-clamp-6">{item.content}</p>
                  <img src={item.image} alt="" className="absolute bottom-0 right-0 w-2/3 h-1/2 object-cover rounded-tl-[3rem] border-t-8 border-l-8 border-white group-hover:scale-105 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Insights Section */}
        <section className="py-32 bg-slate-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-[#7f1bff] font-black uppercase tracking-widest text-xs mb-4">Insights</h2>
                <h3 className="text-4xl md:text-5xl font-black tracking-tight">Stay ahead of the curve.</h3>
              </div>
              <Link to="/blog" className="inline-flex items-center gap-2 text-white font-black hover:text-[#7f1bff] transition-colors">
                Read our blog <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {BLOG_POSTS.slice(0, 3).map((post, idx) => (
                <Link key={idx} to={`/blog/${post.id}`} className="group bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500">
                  <div className="h-56 relative overflow-hidden">
                    <img src={post.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">
                      <span className="flex items-center gap-1.5"><CalendarIcon className="w-3 h-3" /> {post.date}</span>
                      <span className="flex items-center gap-1.5"><UserIcon className="w-3 h-3" /> {post.author}</span>
                    </div>
                    <h4 className="text-xl font-black mb-4 group-hover:text-[#7f1bff] transition-colors line-clamp-2">{post.title}</h4>
                    <p className="text-slate-400 text-sm font-medium line-clamp-3 mb-8">{post.excerpt}</p>
                    <div className="flex items-center text-[#7f1bff] font-black text-xs gap-2 group-hover:gap-4 transition-all">
                      Read Article <ArrowRightIcon className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Pricing Section */}
        <section className="py-32 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-[#7f1bff] font-black text-xs uppercase mb-4 tracking-widest">Investment Plans</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 tracking-tight">Choose your path to scale.</h3>
            
            {/* Toggle Switch */}
            <div className="flex items-center justify-center gap-4 mb-16">
              <span className={`text-sm font-bold ${!isYearly ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
              <button 
                onClick={() => setIsYearly(!isYearly)}
                className="w-14 h-8 bg-slate-100 rounded-full relative p-1.5 transition-colors hover:bg-slate-200"
              >
                <div className={`w-5 h-5 bg-[#7f1bff] rounded-full transition-all duration-300 shadow-lg shadow-purple-500/30 ${isYearly ? 'translate-x-6' : 'translate-x-0'}`}></div>
              </button>
              <span className={`text-sm font-bold ${isYearly ? 'text-slate-900' : 'text-slate-400'}`}>Yearly <span className="text-[#7f1bff] font-black text-[10px] ml-1 uppercase">Save 20%</span></span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {PRICING_PLANS.map((plan, idx) => (
                <div key={idx} className={`bg-white rounded-[2.5rem] p-10 border transition-all duration-500 hover:shadow-2xl ${plan.isPopular ? 'border-[#7f1bff] shadow-xl shadow-purple-500/5 ring-4 ring-purple-50' : 'border-slate-100 shadow-sm'}`}>
                  {plan.isPopular && <div className="text-[10px] font-black text-[#7f1bff] uppercase tracking-[0.2em] mb-4">Recommended</div>}
                  <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-8">
                    <span className="text-5xl font-black tracking-tighter">${isYearly ? plan.yearlyPrice : plan.price}</span>
                    <span className="text-slate-400 font-medium ml-2">/mo</span>
                  </div>
                  <Link to="/book-demo" className={`block w-full py-4 rounded-xl font-black mb-10 transition-all ${plan.isPopular ? 'bg-[#7f1bff] text-white hover:bg-[#6a15d9] shadow-xl shadow-purple-500/20' : 'bg-slate-50 text-slate-900 hover:bg-slate-100'}`}>Get Started</Link>
                  <ul className="text-left space-y-5">
                    {plan.features.slice(0, 5).map((f, i) => (
                      <li key={i} className="text-sm font-medium text-slate-600 flex items-start gap-3">
                        <CheckCircleIcon className="w-5 h-5 text-[#7f1bff] flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
