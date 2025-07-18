import Website from "../assets/Website.jpeg"
import Mobile from "../assets/Mobile.jpeg"
import CustomIT from "../assets/CustomIT.jpeg"
import Marketing from "../assets/Marketing.jpeg"
import Whatsapp from "../assets/Whatsapp.jpeg"
import Desktop from "../assets/Desktop.jpeg"
import AI from "../assets/AI.jpeg"
import Ecommerce from "../assets/Ecommerce.jpeg"

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
  technologies: string[];
  detailedDescription: string;
  benefits: string[];
  process: string[];
  cta: string;
  image?: string;
}

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom websites and web applications that drive results and deliver exceptional user experiences.',
    icon: 'Code',
    color: 'from-blue-500 to-purple-600',
    features: [
      'Custom Website Development',
      'Responsive Design',
      'Content Management Systems',
      'API Development & Integration',
      'E-commerce Solutions',
      'Performance Optimization',
      'SEO Implementation',
      'Maintenance & Support'
    ],
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Vercel'],
    detailedDescription: 'We create modern, responsive websites that not only look stunning but also perform exceptionally. Our web development services combine cutting-edge technologies with user-centric design to deliver solutions that drive business growth and enhance user engagement.',
    benefits: [
      'Increased online visibility and brand presence',
      'Enhanced user experience and engagement',
      'Improved conversion rates and ROI',
      'Scalable solutions that grow with your business',
      'Mobile-first responsive design',
      'Fast loading times and optimal performance'
    ],
    process: [
      'Discovery & Requirements Analysis',
      'Design & Prototyping',
      'Development & Testing',
      'Launch & Optimization',
      'Ongoing Support & Maintenance'
    ],
    cta: 'Launch Your Website',
    image: Website
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver powerful user experiences.',
    icon: 'Smartphone',
    color: 'from-green-400 to-blue-500',
    features: [
      'Native iOS Development',
      'Native Android Development',
      'Cross-platform Solutions',
      'UI/UX Design',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality',
      'Analytics Integration'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS Mobile', 'MongoDB', 'Redux'],
    detailedDescription: 'From concept to launch, we develop mobile applications that engage users and drive business results. Our mobile development expertise spans native and cross-platform solutions, ensuring optimal performance across all devices.',
    benefits: [
      'Reach customers on their preferred devices',
      'Improved customer engagement and retention',
      'Additional revenue streams',
      'Enhanced brand loyalty',
      'Real-time customer interaction',
      'Data-driven insights and analytics'
    ],
    process: [
      'Concept & Strategy Development',
      'UI/UX Design & Prototyping',
      'Development & Testing',
      'App Store Submission',
      'Launch & Marketing Support'
    ],
    cta: 'Build Your App',
    image: Mobile
  },
  {
    id: 'desktop-development',
    title: 'Desktop Applications',
    description: 'Powerful desktop applications that streamline business operations and enhance productivity.',
    icon: 'Monitor',
    color: 'from-purple-500 to-pink-500',
    features: [
      'Cross-platform Desktop Apps',
      'Native Performance',
      'Intuitive User Interfaces',
      'Data Management Systems',
      'Integration Capabilities',
      'Security Implementation',
      'Automated Workflows',
      'Custom Business Logic'
    ],
    technologies: ['Electron', 'React', 'Node.js', 'Python', 'C#', '.NET', 'SQLite', 'PostgreSQL'],
    detailedDescription: 'We build robust desktop applications that provide powerful functionality and seamless user experiences. Our desktop solutions are designed to integrate with existing systems and enhance business productivity.',
    benefits: [
      'Enhanced productivity and efficiency',
      'Streamlined business processes',
      'Offline functionality and reliability',
      'Custom solutions for specific needs',
      'Improved data management',
      'Reduced operational costs'
    ],
    process: [
      'Requirements Gathering',
      'System Architecture Design',
      'Development & Integration',
      'Testing & Quality Assurance',
      'Deployment & Training'
    ],
    cta: 'Develop Desktop Solution',
    image: Desktop
  },
  {
    id: 'whatsapp-solutions',
    title: 'WhatsApp Business Solutions',
    description: 'WhatsApp Business API implementation for enhanced customer engagement and communication.',
    icon: 'MessageSquare',
    color: 'from-green-500 to-teal-500',
    features: [
      'WhatsApp Business API Integration',
      'Automated Customer Support',
      'Broadcast Messaging',
      'Chatbot Development',
      'CRM Integration',
      'Analytics & Reporting',
      'Multi-agent Support',
      'Template Management'
    ],
    technologies: ['WhatsApp Business API', 'Node.js', 'Python', 'MongoDB', 'Redis', 'Webhook Integration'],
    detailedDescription: 'Transform your customer communication with our WhatsApp Business solutions. We implement and customize WhatsApp Business API to help you connect with customers effectively and automate support processes.',
    benefits: [
      'Direct customer communication channel',
      'Improved customer satisfaction',
      'Automated support and responses',
      'Increased engagement rates',
      'Cost-effective communication',
      'Global reach and accessibility'
    ],
    process: [
      'Business Account Setup',
      'API Integration & Configuration',
      'Chatbot Development',
      'Testing & Optimization',
      'Launch & Support'
    ],
    cta: 'Connect with WhatsApp',
    image: Whatsapp
  },
  {
    id: 'ai-ml-solutions',
    title: 'AI & Machine Learning',
    description: 'AI-powered automation and machine learning solutions that drive intelligent business decisions.',
    icon: 'Brain',
    color: 'from-orange-500 to-red-500',
    features: [
      'AI-Powered Automation',
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'Predictive Analytics',
      'Chatbot Development',
      'Recommendation Systems',
      'Process Optimization'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'AWS AI', 'Google Cloud AI'],
    detailedDescription: 'Harness the power of artificial intelligence to transform your business operations. Our AI and ML solutions provide intelligent automation, predictive insights, and enhanced decision-making capabilities.',
    benefits: [
      'Automated decision-making processes',
      'Enhanced customer experiences',
      'Predictive insights and analytics',
      'Increased operational efficiency',
      'Reduced human error',
      'Competitive advantage through innovation'
    ],
    process: [
      'Data Assessment & Strategy',
      'Model Development & Training',
      'Integration & Testing',
      'Deployment & Monitoring',
      'Continuous Optimization'
    ],
    cta: 'Implement AI Solutions',
    image: AI
  },
  {
    id: 'ecommerce-development',
    title: 'E-commerce Development',
    description: 'Conversion-optimized online stores with seamless user experiences and robust functionality.',
    icon: 'ShoppingCart',
    color: 'from-teal-500 to-cyan-500',
    features: [
      'Custom E-commerce Platforms',
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Processing Systems',
      'Customer Analytics',
      'Multi-vendor Support',
      'Mobile Commerce',
      'SEO Optimization'
    ],
    technologies: ['Shopify', 'WooCommerce', 'Magento', 'React', 'Node.js', 'Stripe', 'PayPal', 'AWS'],
    detailedDescription: 'Build a powerful online presence with our e-commerce solutions. We create feature-rich online stores that drive sales, enhance customer experience, and provide comprehensive management tools.',
    benefits: [
      'Increased sales and revenue',
      'Enhanced customer experience',
      'Streamlined operations',
      'Global market reach',
      'Detailed analytics and insights',
      'Scalable growth potential'
    ],
    process: [
      'Business Requirements Analysis',
      'Platform Selection & Setup',
      'Custom Development',
      'Testing & Optimization',
      'Launch & Marketing Support'
    ],
    cta: 'Launch Your Store',
    image: Ecommerce
  },
  {
    id: 'custom-it-solutions',
    title: 'Custom IT Solutions',
    description: 'Comprehensive IT solutions including cloud services, security, and DevOps implementation.',
    icon: 'Server',
    color: 'from-indigo-500 to-purple-600',
    features: [
      'Cloud Solutions & Migration',
      'DevOps Implementation',
      'Security Solutions',
      'Data Analytics',
      'Infrastructure as Code',
      'Monitoring & Logging',
      'Backup & Recovery',
      'Performance Optimization'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'Elasticsearch'],
    detailedDescription: 'Transform your IT infrastructure with our comprehensive solutions. We provide cloud services, security implementation, and DevOps practices that enhance efficiency and ensure scalability.',
    benefits: [
      'Improved operational efficiency',
      'Enhanced security and compliance',
      'Scalable infrastructure',
      'Cost optimization',
      'Better disaster recovery',
      'Automated workflows'
    ],
    process: [
      'Infrastructure Assessment',
      'Solution Design & Planning',
      'Implementation & Migration',
      'Testing & Validation',
      'Ongoing Support & Optimization'
    ],
    cta: 'Optimize Your IT',
    image: CustomIT
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & SEO',
    description: 'Data-driven marketing strategies that deliver measurable results and business growth.',
    icon: 'TrendingUp',
    color: 'from-pink-500 to-rose-500',
    features: [
      'Search Engine Optimization',
      'Social Media Marketing',
      'Content Strategy',
      'PPC Advertising',
      'Email Marketing',
      'Analytics & Reporting',
      'Conversion Optimization',
      'Brand Development'
    ],
    technologies: ['Google Analytics', 'Google Ads', 'Facebook Ads', 'SEMrush', 'HubSpot', 'Mailchimp', 'WordPress'],
    detailedDescription: 'Grow your online presence with our comprehensive digital marketing services. We create data-driven strategies that increase visibility, drive traffic, and convert visitors into customers.',
    benefits: [
      'Increased online visibility',
      'Higher search engine rankings',
      'More qualified leads',
      'Better ROI on marketing spend',
      'Enhanced brand awareness',
      'Measurable results and insights'
    ],
    process: [
      'Market Research & Analysis',
      'Strategy Development',
      'Campaign Implementation',
      'Performance Monitoring',
      'Optimization & Scaling'
    ],
    cta: 'Boost Your Marketing',
    image: Marketing
  }
];