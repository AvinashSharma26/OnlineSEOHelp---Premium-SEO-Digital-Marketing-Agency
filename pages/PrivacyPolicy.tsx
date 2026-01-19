
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-40 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">Privacy Policy</h1>
        <div className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
          <p className="font-medium text-slate-900">Effective Date: January 1, 2025</p>
          
          <h2 className="text-2xl font-bold text-slate-900">1. Introduction</h2>
          <p>Welcome to OnlineSEOHelp. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
          
          <h2 className="text-2xl font-bold text-slate-900">2. Data We Collect</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identity Data:</strong> first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> email address and telephone numbers.</li>
            <li><strong>Technical Data:</strong> internet protocol (IP) address, your login data, browser type and version.</li>
            <li><strong>Usage Data:</strong> information about how you use our website, products and services.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900">3. How We Use Your Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide the SEO services requested.</li>
            <li>To improve our website performance and user experience.</li>
            <li>To manage our relationship with you.</li>
            <li>To send you updates or promotional materials if you have opted in.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900">4. Data Security</h2>
          <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>

          <h2 className="text-2xl font-bold text-slate-900">5. Contact Information</h2>
          <p>If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@onlineseohelp.com.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
