
export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  process: string[];
  icon: string;
  image: string;
  detailedContent?: string;
  features?: { title: string; description: string }[];
  faqs?: { question: string; answer: string }[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  outcomeSummary: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
