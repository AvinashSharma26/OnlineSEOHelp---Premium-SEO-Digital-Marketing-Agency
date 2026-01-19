
import React from 'react';
import { 
  MagnifyingGlassIcon, 
  MapPinIcon, 
  CogIcon, 
  DocumentTextIcon, 
  LinkIcon, 
  KeyIcon, 
  PencilSquareIcon, 
  PresentationChartLineIcon, 
  ShareIcon, 
  ComputerDesktopIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { Service, BlogPost, Testimonial, FAQ, CaseStudy } from './types';

export interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "99",
    yearlyPrice: "79",
    description: "Perfect for small businesses looking to establish their search presence.",
    features: [
      "Keyword Research (50 keywords)",
      "Technical SEO Audit",
      "On-Page Optimization (5 pages)",
      "Monthly Progress Report",
      "Email Support"
    ]
  },
  {
    name: "Professional",
    price: "249",
    yearlyPrice: "199",
    description: "Ideal for growing companies needing aggressive organic growth.",
    features: [
      "Keyword Research (200 keywords)",
      "Technical SEO Audit",
      "On-Page Optimization (20 pages)",
      "Content Strategy (2 posts/mo)",
      "Backlink Building (5/mo)",
      "Priority Support",
      "Competitor Analysis"
    ],
    isPopular: true
  },
  {
    name: "Enterprise",
    price: "599",
    yearlyPrice: "479",
    description: "Custom solutions for large scale organizations and e-commerce.",
    features: [
      "Unlimited Keywords",
      "Full Site Technical Audit",
      "On-Page Optimization (Unlimited)",
      "Dedicated Account Manager",
      "Custom Content Strategy",
      "Digital PR & Outreach",
      "24/7 Phone Support"
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    shortDesc: 'Drive sustainable organic traffic through holistic search strategies.',
    fullDesc: 'Our core SEO service is designed to dominate the SERPs. We don\'t just look at keywords; we look at the entire ecosystem of your website. From information architecture to user experience, we optimize every touchpoint that search engine crawlers and users interact with.',
    benefits: ['Increased Organic Visibility', 'Higher Quality Traffic', 'Long-term Growth', 'Better ROI than PPC'],
    process: ['Initial Audit', 'Competitor Analysis', 'Strategy Development', 'Implementation', 'Monitoring & Reporting'],
    icon: 'search',
    image: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&q=80&w=800',
    detailedContent: 'Search Engine Optimization (SEO) is the backbone of digital visibility. In an era where 93% of online experiences begin with a search engine, appearing on the first page of Google is no longer optional—it is a business imperative. Our approach to SEO combines technical precision with creative content strategy to ensure your brand is the definitive answer to your customers\' questions.',
    features: [
      { title: 'Semantic Search Integration', description: 'We optimize for intent, not just keywords, ensuring your content satisfies complex user queries.' },
      { title: 'E-E-A-T Optimization', description: 'Establishing your brand as an industry authority through expert-led content and verified signals.' },
      { title: 'Crawl Budget Management', description: 'Fine-tuning your site architecture so Google spends time on your most valuable pages.' }
    ],
    faqs: [
      { question: 'How long until I see rankings?', answer: 'Typical results appear within 3-6 months as authority builds and indices update.' },
      { question: 'Do you use Black Hat techniques?', answer: 'Never. We strictly adhere to Google Search Essentials to ensure long-term site safety.' }
    ]
  },
  {
    id: 'local-seo',
    title: 'Local SEO',
    shortDesc: 'Capture your local market and dominate the "Near Me" searches.',
    fullDesc: 'For businesses with physical locations, Local SEO is critical. We optimize your Google Business Profile, manage citations, and build local relevance to ensure you appear at the top of the Map Pack.',
    benefits: ['Increased Foot Traffic', 'Higher Conversion Rates', 'Enhanced Local Authority', 'Better Community Engagement'],
    process: ['GBP Optimization', 'Citation Audit', 'Local Keyword Research', 'Review Management Strategy'],
    icon: 'map',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800',
    detailedContent: 'Local SEO is about being found exactly when and where your customers are looking. Whether it\'s a bakery in Brooklyn or a law firm in London, we ensure your business dominates the map pack. Our strategy focuses on geo-relevance, local link building, and localized content that speaks to your community.',
    features: [
      { title: 'Google Business Profile Management', description: 'Active posting, Q&A management, and image optimization for your local listing.' },
      { title: 'Hyper-Local Citations', description: 'Building consistent NAP (Name, Address, Phone) data across 100+ local directories.' },
      { title: 'Review Growth Engine', description: 'Strategies to increase positive customer feedback and manage your online reputation.' }
    ]
  },
  {
    id: 'technical-seo',
    title: 'Technical SEO',
    shortDesc: 'The backbone of your SEO. We ensure your site is fast and crawlable.',
    fullDesc: 'Our technical experts dive deep into your site code, server configurations, and site speed to remove any barriers that prevent Google from crawling and indexing your content efficiently.',
    benefits: ['Faster Load Times', 'Better Crawl Efficiency', 'Improved Mobile Performance', 'Secure Website Status'],
    process: ['Technical Audit', 'Site Speed Optimization', 'Schema Markup', 'XML Sitemap Management'],
    icon: 'cog',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    detailedContent: 'If your website has a weak foundation, even the best content won\'t rank. Technical SEO is the process of ensuring your website meets the technical requirements of modern search engines with the goal of improved organic rankings. Our engineers perform deep-dives into your infrastructure to solve complex indexing issues.',
    features: [
      { title: 'Core Web Vitals Optimization', description: 'Improving LCP, FID, and CLS to meet Google\'s strict performance benchmarks.' },
      { title: 'Advanced Schema Deployment', description: 'Implementing JSON-LD structured data to win rich snippets and enhance SERP visibility.' },
      { title: 'Log File Analysis', description: 'Monitoring exactly how search bots interact with your site to eliminate crawl waste.' }
    ]
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing',
    shortDesc: 'Authority-building content that attracts, engages, and converts.',
    fullDesc: 'We create high-value editorial content that positions your brand as a thought leader. From whitepapers to viral blog posts, our content is engineered for both search engines and human readers.',
    benefits: ['Higher Engagement', 'Natural Backlink Attraction', 'Customer Trust', 'Full-Funnel Awareness'],
    process: ['Audience Persona Building', 'Topic Clustering', 'Content Creation', 'Promotion & Outreach'],
    icon: 'pencil',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800',
    detailedContent: 'Content is the currency of the digital age. Our content marketing service goes beyond simple blogging; we create a strategic roadmap of high-value assets that solve user problems and build brand equity. By focusing on semantic topic clusters, we establish your site as the definitive source for your industry\'s core concepts.',
    features: [
      { title: 'Data-Driven Topic Research', description: 'Using competitive gaps and search intent data to find high-value content opportunities.' },
      { title: 'Expert Editorial Team', description: 'Content written by specialists who understand your niche and brand voice.' },
      { title: 'Content Performance Tracking', description: 'Deep analytics on how each piece of content contributes to lead generation and SEO.' }
    ]
  },
  {
    id: 'ppc-ads',
    title: 'PPC & Google Ads',
    shortDesc: 'Instant visibility and high-intent traffic with targeted ad campaigns.',
    fullDesc: 'We manage performance-driven paid campaigns that deliver immediate ROI. Our certified experts optimize bidding, ad copy, and landing pages to ensure your ad spend results in actual profit.',
    benefits: ['Immediate Traffic', 'Precise Audience Targeting', 'Scalable Growth', 'Measurable ROI'],
    process: ['Keyword Bidding Strategy', 'Ad Creative Development', 'Landing Page Optimization', 'Performance Monitoring'],
    icon: 'chart',
    image: 'https://images.unsplash.com/photo-1533750354897-42887951c1ee?auto=format&fit=crop&q=80&w=800',
    detailedContent: 'Paid search is a surgical instrument for growth. We don\'t just "buy clicks"; we buy revenue. Our PPC management service focuses on high-intent search terms, remarketing to warm leads, and aggressive display strategies that keep your brand top-of-mind. We treat your ad spend as if it were our own.',
    features: [
      { title: 'Granular Bidding Management', description: 'Manual and automated bidding strategies to maximize conversion value and lower CPA.' },
      { title: 'Dynamic Search Ads', description: 'Using Google\'s machine learning to automatically target relevant queries with unique ad copy.' },
      { title: 'Strict Negative Keyword Filtering', description: 'Ensuring your budget is never wasted on irrelevant or low-intent search traffic.' }
    ]
  },
  {
    id: 'on-page-seo',
    title: 'On-Page SEO',
    shortDesc: 'Optimizing individual pages to rank higher and earn more relevant traffic.',
    fullDesc: 'Every page on your site has a purpose. We meticulously optimize titles, headers, meta descriptions, and content structure to ensure each page sends the strongest possible signal.',
    benefits: ['Targeted Keyword Ranking', 'Lower Bounce Rates', 'Improved User Engagement', 'Better Content Clarity'],
    process: ['Content Analysis', 'Title & Meta Optimization', 'Header Structuring', 'Internal Linking'],
    icon: 'document',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'off-page-seo',
    title: 'Off-Page SEO',
    shortDesc: 'Building authority through strategic link building and brand mentions.',
    fullDesc: 'SEO doesn\'t just happen on your website. We build high-quality backlink profiles through ethical outreach, guest posting, and digital PR to signal authority.',
    benefits: ['Increased Domain Authority', 'Enhanced Brand Trust', 'Diverse Traffic Sources', 'Improved Search Rankings'],
    process: ['Link Audit', 'Competitor Backlink Analysis', 'Outreach Strategy', 'Content Placement'],
    icon: 'link',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    shortDesc: 'Build a community and drive engagement across social platforms.',
    fullDesc: 'We transform your social presence into an authority hub. Our team manages your brand narrative across LinkedIn, Instagram, and Twitter to foster community and trust.',
    benefits: ['Brand Loyalty', 'Social Search Visibility', 'Multi-channel Engagement', 'Viral Reach Potential'],
    process: ['Social Audit', 'Strategy Roadmap', 'Content Calendar', 'Community Management'],
    icon: 'share',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'seo-audit',
    title: 'Website SEO Audit',
    shortDesc: 'A deep-dive diagnostic of your current search performance and health.',
    fullDesc: 'Our comprehensive audits reveal the hidden roadblocks holding you back. We provide a 100+ point inspection of technical, on-page, and authority factors.',
    benefits: ['Clear Growth Roadmap', 'Uncover Hidden Errors', 'Competitive Benchmarking', 'Performance Insight'],
    process: ['Data Gathering', 'Metric Analysis', 'Expert Review', 'Strategy Presentation'],
    icon: 'desktop',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'keyword-research',
    title: 'Keyword Research',
    shortDesc: 'Uncovering search terms that drive revenue, not just traffic.',
    fullDesc: 'Data-driven keyword research is the foundation of every successful SEO campaign. We identify high-intent keywords that your ideal customers are actually using.',
    benefits: ['Precise Targeting', 'Competitive Advantage', 'Content Strategy Map', 'Higher Intent Leads'],
    process: ['Seed Keyword Analysis', 'Topic Clustering', 'Intent Categorization', 'Opportunity Gap Analysis'],
    icon: 'key',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=800'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'techflow-scaling',
    title: 'Scaling Organic Traffic by 300% for B2B SaaS',
    client: 'TechFlow Inc.',
    industry: 'Cloud Computing',
    challenge: 'TechFlow struggled to rank for high-intent enterprise keywords against established industry giants.',
    solution: 'We implemented a multi-stage technical SEO overhaul combined with a strategic topic-clustering content approach.',
    results: [
      '300% Increase in Organic Traffic',
      '85% Increase in SQLs (Sales Qualified Leads)',
      '#1 Ranking for 12 Primary Competitive Keywords'
    ],
    outcomeSummary: 'By restructuring their knowledge base and focusing on mid-funnel content, TechFlow became a topical authority in cloud scalability.',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ecostyle-ecommerce',
    title: 'Driving $2M in Monthly Revenue through E-commerce SEO',
    client: 'EcoStyle Home',
    industry: 'Retail / Home Decor',
    challenge: 'EcoStyle was heavily dependent on expensive PPC ads, with organic visibility limited to brand-only searches.',
    solution: 'Deep product schema implementation and category page optimization to capture high-intent generic searches.',
    results: [
      '250% Growth in E-commerce Revenue from Organic',
      'Ranked #1 for "sustainable furniture"',
      'Reduced CPA by 40% through organic channel shift'
    ],
    outcomeSummary: 'Transformation from a brand-reliant traffic model to a discovery-driven organic powerhouse.',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'stellar-legal',
    title: 'Local SEO Dominance for Multi-State Law Firm',
    client: 'Stellar Legal Group',
    industry: 'Legal Services',
    challenge: 'Stellar Legal had 15 offices across 4 states but was buried on page 3 for competitive "personal injury attorney" searches in every market.',
    solution: 'Hyper-local citation building, unique geo-targeted service pages, and a massive Google Business Profile optimization campaign.',
    results: [
      '450% Increase in Monthly Consultation Calls',
      'Ranked in top 3 "Map Pack" for 85% of targeted locations',
      'Organic leads surpassed paid leads in month 4'
    ],
    outcomeSummary: 'Turned a fragmented digital presence into a unified lead-generation machine that dominates regional legal searches.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'vitality-health',
    title: 'Content-Led Growth for HealthTech Startup',
    client: 'Vitality AI',
    industry: 'Healthcare / Technology',
    challenge: 'High-cost acquisition and low brand trust in a crowded medical diagnostics space.',
    solution: 'Built a patient-first health library with 50+ deep-dive articles authored by medical professionals, optimized for "E-E-A-T".',
    results: [
      '1.2M Monthly Impressions in month 12',
      '65% Reduction in CPA compared to PPC',
      'Feature Snippet capture for 15 core symptoms'
    ],
    outcomeSummary: 'Established the brand as a primary information hub, moving users through the funnel from symptom search to app download.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'prime-realestate',
    title: 'Technical SEO Overhaul for Real Estate Search Engine',
    client: 'Prime Listings',
    industry: 'Real Estate',
    challenge: 'Faceted navigation causing 2M+ duplicate pages, exhausting crawl budget and tanking rankings for new listings.',
    solution: 'Dynamic canonical implementation, server-side rendering for search bots, and an automated internal linking engine.',
    results: [
      '95% Reduction in Index Bloat',
      'Crawl efficiency increased by 300%',
      'First-page rankings for "luxury homes" in 12 major cities'
    ],
    outcomeSummary: 'Fixed the foundational plumbing of a massive data-heavy site, allowing fresh properties to rank within hours of being listed.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'edu-spark',
    title: 'Scaling Organic Enrollments for Global EdTech',
    client: 'EduSpark Academy',
    industry: 'Education',
    challenge: 'High dependence on seasonal social media ads and low visibility for long-term "career path" keywords.',
    solution: 'Strategic topic clustering around career outcomes and "how to become" style guides, coupled with expert author wikis.',
    results: [
      '30,000 New Student Enrollments from Organic',
      'Authority Score increased from 22 to 55',
      'Top 3 rankings for "data science courses" globally'
    ],
    outcomeSummary: 'Shifted the acquisition model from "interruptive" social ads to "intent-based" search discovery, securing year-round stability.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'precision-mfg',
    title: 'B2B Lead Velocity for Niche Manufacturer',
    client: 'Precision Components Corp',
    industry: 'Manufacturing',
    challenge: 'Operating in a highly specialized niche with low search volume but extremely high lead value.',
    solution: 'Deep technical content targeting specific industry standards (ISO) and procurement-focused search terms.',
    results: [
      '250% Increase in RFP Requests',
      '100% Top-of-page visibility for niche part numbers',
      'Secured 3 Fortune 500 contracts via organic search'
    ],
    outcomeSummary: 'Proved that SEO isn\'t just for high-volume retail, delivering high-value enterprise leads through precise targeting.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'skyline-hotel',
    title: 'Direct Booking Growth for Luxury Hotel Chain',
    client: 'Skyline Resorts',
    industry: 'Hospitality',
    challenge: 'Losing 30% margin to OTAs (Expedia/Booking.com) for their own brand searches.',
    solution: 'Aggressive brand protection SEO and a site-speed optimization project to reduce mobile bounce rates.',
    results: [
      '40% Increase in Direct Web Bookings',
      'Saved $250k/year in OTA commissions',
      'Page load time reduced from 6s to 1.2s'
    ],
    outcomeSummary: 'Reclaimed brand search dominance and optimized the user experience to ensure travelers booked directly on-site.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fin-smart',
    title: 'SEO Recovery After Core Update for Fintech App',
    client: 'FinSmart Mobile',
    industry: 'Finance',
    challenge: 'Dropped 60% in traffic overnight following a Google YMYL (Your Money Your Life) update.',
    solution: 'Complete audit of financial expertise signals, adding detailed compliance disclaimers and expert review layers.',
    results: [
      '100% Traffic Recovery in 90 days',
      'Reached all-time high organic visibility',
      'Secured "People Also Ask" presence for 200+ terms'
    ],
    outcomeSummary: 'Successfully navigated the strictest search guidelines to regain trust and authority in the financial sector.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'beauty-glow',
    title: 'E-commerce Dominance for D2C Beauty Brand',
    client: 'Glow Essentials',
    industry: 'Retail / Beauty',
    challenge: 'Drowning in a sea of mass-market competitors and struggling to rank for "clean beauty" terms.',
    solution: 'Video-focused technical SEO (Video object schema) and a massive digital PR campaign to secure links from top fashion mags.',
    results: [
      '500% Increase in Organic Sales',
      'Secured backlinks from Vogue, Elle, and Cosmopolitan',
      'Ranked #1 for 5 high-volume category terms'
    ],
    outcomeSummary: 'Built a multi-channel authority profile that combined high-quality links with visual search dominance.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'ai-in-seo',
    title: 'What Is Artificial Intelligence? 3 Key Uses for AI In SEO',
    excerpt: 'Explore how AI is revolutionizing search engine optimization, from automated content creation to predictive analytics.',
    content: `
      <h2>Leverage the power of AI in your search engine optimization (SEO) efforts with our overview of AI, including its benefits, use cases, and examples!</h2>
      <h3>What is artificial intelligence?</h3>
      <p><strong>Artificial intelligence (AI)</strong> is technology that uses machine processing to simulate human intelligence through a computer system. Companies use AI technology in multiple capacities, from chatbots to data processing to scheduling.</p>
      
      <h3>How does artificial intelligence impact SEO?</h3>
      <p>We can’t talk about artificial intelligence without talking about <span class="text-[#7f1bff] font-bold">search engine optimization (SEO)</span>. With the rise of AI, there are questions around:</p>
      <div class="bg-purple-50 p-6 rounded-2xl my-8">
        <ul class="list-disc pl-6 space-y-2 font-bold text-slate-800">
          <li>How does AI impact SEO and optimization strategies?</li>
          <li>Does AI content work for SEO?</li>
          <li>Will AI replace SEO?</li>
        </ul>
      </div>
      <p>Here are some areas where AI will impact SEO:</p>
      <h4>1. Content creation</h4>
      <p>The area of SEO that has the biggest impact from AI is content creation. Creating content is what allows you to rank in different search results and drive qualified traffic to your website. So, how does AI impact content creation?</p>
      <div class="my-10 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
        <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200" alt="AI Content Generation Visualization" />
      </div>
      <p>AI programs like ChatGPT can write content for you. You provide it with a prompt, and it can generate an article within seconds. As a result, you can create more content quickly, so you have more opportunities to drive traffic through search engines.</p>
      <p>Sounds simple, right? It’s simple, but there are a lot of caveats to AI-generated content. For instance, AI content can often lack the "Human Experience" (E-E-A-T) that Google prioritizes in its ranking algorithms.</p>
      <h4>2. Predictive Keyword Analysis</h4>
      <p>Traditional keyword research looks at historical data. AI, however, can predict future search volume trends based on seasonal patterns and emerging linguistic shifts.</p>
    `,
    author: 'Macy Storm',
    date: '2025-08-18',
    category: 'SEO / BASICS / GLOSSARY',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'mastering-core-web-vitals',
    title: 'Mastering Core Web Vitals in 2025: The Ultimate Guide',
    excerpt: 'LCP, FID, and CLS are more important than ever. Learn how to optimize for the latest Google performance metrics.',
    content: `<h2>The Shift in 2025 SEO</h2><p>As we move into 2025, user experience has become the non-negotiable cornerstone of search engine rankings. Google's algorithm has evolved to prioritize visual stability, responsiveness, and loading speed as primary ranking signals.</p><h3>Why Speed is a Business Strategy</h3><p>Beyond SEO, speed correlates directly with conversion rates. Studies show that a 100ms delay can cost up to 7% in sales.</p>`,
    author: 'Sarah Jenkins',
    date: '2025-05-12',
    category: 'Technical SEO',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'google-leak-2025',
    title: 'The 2025 Google Algorithm Leak: What We Learned',
    excerpt: 'An unprecedented look into the internal ranking documents that were accidentally exposed. Here is the breakdown.',
    content: `<p>Earlier this year, internal Google documents were leaked, providing a rare glimpse into the ranking factors that actually matter. The leak confirmed that brand authority and user interaction signals are weighted far heavier than previously admitted.</p><h3>Key Takeaways</h3><ul class="list-disc pl-6 space-y-4"><li><strong>NavBoost is Real:</strong> Click data significantly influences rankings.</li><li><strong>Small Site Penalty:</strong> Google struggles to trust new domains without established brand signals.</li><li><strong>Length Doesn't Equal Quality:</strong> Word count is not a direct ranking factor.</li></ul>`,
    author: 'David Chen',
    date: '2025-09-01',
    category: 'SEO Trends',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'local-seo-secrets',
    title: 'Local SEO Secrets for Multi-Location Brands',
    excerpt: 'How to manage local visibility across 100+ locations without losing your mind or your rankings.',
    content: `<p>Scaling local SEO is one of the most complex challenges in digital marketing. For multi-location brands, the risk of data inconsistency is high. We break down the automated workflows used by top franchises to dominate "near me" searches.</p>`,
    author: 'Macy Storm',
    date: '2025-10-15',
    category: 'Local SEO',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'semantic-search-2026',
    title: 'The Rise of Semantic Search in 2026',
    excerpt: 'Keywords are dying. Entities and topics are taking over. Is your content strategy ready for the shift?',
    content: `<p>By 2026, the concept of a "target keyword" will be largely obsolete. Google's Knowledge Graph has evolved to understand entities and their relationships with unprecedented depth. This means content must be structured around topical completeness, not just keyword density.</p>`,
    author: 'Sarah Jenkins',
    date: '2026-01-10',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mobile-first-future',
    title: 'Mobile-First Indexing: The Final Frontier',
    excerpt: 'Google has officially finished its move to mobile-first indexing. Here is what your desktop-only site is missing.',
    content: `<p>It's official: Google no longer sees your desktop site as the primary version. If your mobile UX is a second-class citizen, your rankings will reflect that. We audit the top 10 common mobile-first mistakes and how to fix them.</p>`,
    author: 'David Chen',
    date: '2025-11-20',
    category: 'Technical SEO',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'e-e-a-t-decoded',
    title: 'E-E-A-T Decoded: How to Build Algorithmic Trust',
    excerpt: 'Google wants Experience, Expertise, Authoritativeness, and Trust. We show you the documentation needed to prove it.',
    content: `<p>Building trust with an algorithm is different than building trust with a human. We look at the structured data, author profiles, and external citations required to signal E-E-A-T to search engines.</p>`,
    author: 'Sarah Jenkins',
    date: '2025-07-05',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'voice-search-trends',
    title: 'Voice Search Trends: Optimization for Conversational AI',
    excerpt: 'With more people using Alexa, Siri, and Gemini, conversational search is exploding. Here is how to rank for voice.',
    content: `<p>Voice queries are longer and more natural. Optimizing for "best coffee NYC" is different than optimizing for "where can I get a good espresso near Central Park?". We explore the linguistic differences in conversational search.</p>`,
    author: 'Macy Storm',
    date: '2026-03-12',
    category: 'SEO Trends',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'link-building-2026',
    title: 'The New Era of Link Building: Digital PR',
    excerpt: 'Traditional guest posting is losing its edge. Learn why high-tier digital PR is the only sustainable way to build authority.',
    content: `<p>In 2026, Google has become incredibly adept at filtering out "paid" or "manipulative" links. The only links that move the needle are those that come from genuine editorial interest and massive brand mentions.</p>`,
    author: 'David Chen',
    date: '2026-05-20',
    category: 'Off-Page SEO',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ecommerce-seo-scale',
    title: 'SEO for Mega-E-commerce: Managing 1M+ Products',
    excerpt: 'Technical SEO challenges and solutions for the world\'s largest online retailers.',
    content: `<p>Managing the crawl budget for a site with 1,000,000 products requires a different set of rules. We discuss facet optimization, canonical management, and automated category page creation.</p>`,
    author: 'Sarah Jenkins',
    date: '2025-12-05',
    category: 'E-commerce SEO',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'video-seo-youtube',
    title: 'Video SEO: Dominating Both Google and YouTube',
    excerpt: 'Video results now take up 30% of SERP real estate. Learn how to optimize your video content for cross-platform reach.',
    content: `<p>Video SEO isn't just about tags and descriptions. It's about engagement metrics, transcriptions, and structured data that helps Google index key moments in your video.</p>`,
    author: 'David Chen',
    date: '2026-02-18',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'programmatic-seo-2025',
    title: 'Programmatic SEO: The High-Velocity Traffic Play',
    excerpt: 'How to use data and templates to build thousands of high-quality, high-ranking landing pages automatically.',
    content: `<p>Programmatic SEO allows you to target long-tail keywords at scale. We walk through the architecture needed to build 10,000+ localized or category-specific pages that actually provide value.</p>`,
    author: 'Macy Storm',
    date: '2025-06-30',
    category: 'Technical SEO',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Robert Miller',
    role: 'CEO',
    company: 'TechFlow Solutions (USA)',
    content: 'OnlineSEOHelp transformed our organic traffic. We saw a 140% increase in qualified leads within the first six months. Their technical expertise is unmatched in the global market.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=200&h=200&q=80'
  },
  {
    id: '2',
    name: 'Arjun Sharma',
    role: 'Founder',
    company: 'Bharat Retail (India)',
    content: 'As an Indian e-commerce brand, local relevance was key. OnlineSEOHelp mastered our regional SEO, helping us beat national giants in high-intent keyword categories.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=200&h=200&q=80'
  }
];

export const FAQS: FAQ[] = [
  {
    question: "How long does it take to see SEO results?",
    answer: "SEO is a long-term investment. While technical optimizations can show impacts in weeks, significant organic growth typically requires 3 to 6 months of consistent strategy and execution."
  },
  {
    question: "Do you guarantee #1 rankings on Google?",
    answer: "No ethical SEO agency can guarantee #1 rankings. Google's algorithms change constantly. However, our data-backed methods consistently place clients in the top positions for their most valuable keywords."
  }
];

export const PRICING_FAQS: FAQ[] = [
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time."
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  search: <MagnifyingGlassIcon className="w-6 h-6" />,
  map: <MapPinIcon className="w-6 h-6" />,
  cog: <CogIcon className="w-6 h-6" />,
  document: <DocumentTextIcon className="w-6 h-6" />,
  link: <LinkIcon className="w-6 h-6" />,
  key: <KeyIcon className="w-6 h-6" />,
  pencil: <PencilSquareIcon className="w-6 h-6" />,
  chart: <PresentationChartLineIcon className="w-6 h-6" />,
  share: <ShareIcon className="w-6 h-6" />,
  desktop: <ComputerDesktopIcon className="w-6 h-6" />,
  chat: <ChatBubbleLeftRightIcon className="w-6 h-6" />,
  stats: <ChartBarIcon className="w-6 h-6" />,
  shield: <ShieldCheckIcon className="w-6 h-6" />
};
