
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="pt-40 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">Terms of Service</h1>
        <div className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
          <p className="font-medium text-slate-900">Last Updated: January 1, 2025</p>
          
          <h2 className="text-2xl font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p>By accessing and using the services of OnlineSEOHelp, you accept and agree to be bound by the terms and provision of this agreement.</p>
          
          <h2 className="text-2xl font-bold text-slate-900">2. Description of Service</h2>
          <p>OnlineSEOHelp provides search engine optimization, technical audits, content strategy, and digital marketing consulting. We reserve the right to modify or discontinue the Service with or without notice.</p>

          <h2 className="text-2xl font-bold text-slate-900">3. Obligations</h2>
          <p>You agree to provide true, accurate, and current information as prompted by the service's registration or contact forms. SEO results depend on many external factors, and while we use industry best practices, specific rankings cannot be guaranteed.</p>

          <h2 className="text-2xl font-bold text-slate-900">4. Intellectual Property</h2>
          <p>The content, organization, graphics, design, and other matters related to our site are protected under applicable copyrights and other proprietary laws. The copying, redistribution, use or publication by you of any such matters or any part of the Site is strictly prohibited.</p>

          <h2 className="text-2xl font-bold text-slate-900">5. Limitation of Liability</h2>
          <p>OnlineSEOHelp shall not be liable for any indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses resulting from the use of the service.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
