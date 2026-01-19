
import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="pt-40 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">Cookie Policy</h1>
        <div className="prose prose-lg prose-slate max-w-none space-y-8 text-slate-600">
          <p className="font-medium text-slate-900">Effective Date: January 1, 2025</p>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900">1. What are Cookies?</h2>
            <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900">2. How We Use Cookies</h2>
            <p>OnlineSEOHelp uses cookies to improve your browsing experience by:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Remembering your preferences and settings.</li>
              <li>Understanding how you use our website.</li>
              <li>Personalizing the content you see.</li>
              <li>Helping with our marketing and promotional efforts (including behavioral advertising).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">3. Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-slate-800">Necessary Cookies</h3>
                <p>These cookies are essential for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences or logging in.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">Analytical/Performance Cookies</h3>
                <p>These allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">Functionality Cookies</h3>
                <p>These are used to recognize you when you return to our website. This enables us to personalize our content for you and remember your preferences.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">Targeting Cookies</h3>
                <p>These cookies record your visit to our website, the pages you have visited, and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">4. Managing Your Preferences</h2>
            <p>You can change your cookie preferences at any time. Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#7f1bff] hover:underline">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#7f1bff] hover:underline">www.allaboutcookies.org</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">5. Updates to This Policy</h2>
            <p>We may update our Cookie Policy from time to time. We encourage you to periodically review this page for the latest information on our cookie practices.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">6. Contact Us</h2>
            <p>If you have any questions about our use of cookies, please contact us at privacy@onlineseohelp.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
