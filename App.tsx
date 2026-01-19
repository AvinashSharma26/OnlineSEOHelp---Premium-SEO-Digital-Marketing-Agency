
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FooterCTA from './components/FooterCTA';
import ExitIntentPopup from './components/ExitIntentPopup';
import CookieBanner from './components/CookieBanner';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import BookDemo from './pages/BookDemo';
import Pricing from './pages/Pricing';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import Sitemap from './pages/Sitemap';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';

// SEO Title Manager
const SEOHandler = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const baseTitle = 'OnlineSEOHelp';
    let pageTitle = '';

    const path = pathname.split('/')[1];
    switch (path) {
      case 'about': pageTitle = 'About Our Agency'; break;
      case 'services': pageTitle = 'Premium SEO Services'; break;
      case 'blog': pageTitle = 'SEO & Marketing Blog'; break;
      case 'case-studies': pageTitle = 'Success Stories & Results'; break;
      case 'contact': pageTitle = 'Contact Us'; break;
      case 'book-demo': pageTitle = 'Book Your Free SEO Audit'; break;
      case 'pricing': pageTitle = 'Transparent Pricing Plans'; break;
      case 'privacy': pageTitle = 'Privacy Policy'; break;
      case 'terms': pageTitle = 'Terms of Service'; break;
      case 'cookies': pageTitle = 'Cookie Policy'; break;
      case '': pageTitle = 'Home - Scale Your Digital Growth'; break;
      default: pageTitle = 'Digital Marketing Expertise';
    }

    document.title = `${pageTitle} | ${baseTitle}`;
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <SEOHandler />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <ExitIntentPopup />
        <CookieBanner />
        <WhatsAppButton />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-demo" element={<BookDemo />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/sitemap" element={<Sitemap />} />
          </Routes>
        </main>
        {/* Footer CTA logic */}
        <Routes>
           <Route path="/book-demo" element={null} />
           <Route path="/pricing" element={null} />
           <Route path="/privacy" element={null} />
           <Route path="/terms" element={null} />
           <Route path="/cookies" element={null} />
           <Route path="/sitemap" element={null} />
           <Route path="/case-studies" element={null} />
           <Route path="/case-studies/:id" element={null} />
           <Route path="/services/:id" element={null} />
           <Route path="*" element={<FooterCTA />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
