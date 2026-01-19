
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, BLOG_POSTS } from '../constants';

const Sitemap: React.FC = () => {
  return (
    <div className="pt-40 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-12 tracking-tight">Sitemap</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Main Pages</h2>
            <ul className="space-y-3 font-medium text-[#7f1bff]">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/services" className="hover:underline">Services</Link></li>
              <li><Link to="/pricing" className="hover:underline">Pricing</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog Insights</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link to="/book-demo" className="hover:underline">Book a Strategy Call</Link></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Services</h2>
            <ul className="space-y-3 font-medium text-[#7f1bff]">
              {SERVICES.map(s => (
                <li key={s.id}><Link to={`/services#${s.id}`} className="hover:underline">{s.title}</Link></li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Recent Blog Posts</h2>
            <ul className="space-y-3 font-medium text-[#7f1bff]">
              {BLOG_POSTS.slice(0, 5).map(p => (
                <li key={p.id}><Link to={`/blog/${p.id}`} className="hover:underline">{p.title}</Link></li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Legal</h2>
            <ul className="space-y-3 font-medium text-[#7f1bff]">
              <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:underline">Cookie Policy</Link></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
