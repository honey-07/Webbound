export const defaultMetadata = {
  title: 'Webbound - Modern Technology Solutions',
  description: 'Expert technology solutions for web development, mobile apps, custom IT solutions, and digital transformation.',
  applicationName: 'Webbound',
  authors: [{ name: 'Webbound Team' }],
  keywords: ['web development', 'mobile apps', 'IT solutions', 'digital marketing', 'technology services', 'custom software', 'whatsapp business', 'desktop development'],
  colorScheme: 'light',
  creator: 'Webbound',
  publisher: 'Webbound',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export interface ServiceMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  schema?: any;
}

export const serviceMetadata: Record<string, ServiceMetadata> = {
  'web-development': {
    title: 'Web Development Services - Custom Websites & Web Apps | Webbound.dev',
    description: 'Professional web development services including custom websites, web applications, e-commerce solutions, and responsive design. React.js, Next.js, and modern technologies.',
    keywords: [
      'web development',
      'custom websites',
      'web applications',
      'responsive design',
      'React.js development',
      'Next.js development',
      'full-stack development',
      'frontend development',
      'backend development',
      'API development',
      'CMS development',
      'e-commerce websites',
      'SEO optimization',
      'performance optimization'
    ],
    canonicalUrl: '/services/web-development',
    ogImage: '/og-web-development.png',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Web Development Services",
      "description": "Custom websites and web applications that drive results and deliver exceptional user experiences.",
      "provider": {
        "@type": "Organization",
        "name": "Webbound.dev"
      },
      "serviceType": "Web Development",
      "areaServed": "Worldwide"
    }
  },
  
  'mobile-development': {
    title: 'Mobile App Development - iOS & Android Apps | Webbound.dev',
    description: 'Native and cross-platform mobile app development services for iOS and Android. React Native, Flutter, Swift, and Kotlin expertise for powerful mobile experiences.',
    keywords: [
      'mobile app development',
      'iOS app development',
      'Android app development',
      'React Native development',
      'Flutter development',
      'cross-platform apps',
      'native app development',
      'mobile UI/UX design',
      'app store optimization',
      'mobile commerce',
      'push notifications',
      'offline functionality',
      'Swift development',
      'Kotlin development',
      'mobile analytics'
    ],
    canonicalUrl: '/services/mobile-development',
    ogImage: '/og-mobile-development.png',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Mobile App Development",
      "description": "Native and cross-platform mobile applications that deliver powerful user experiences.",
      "provider": {
        "@type": "Organization",
        "name": "Webbound.dev"
      },
      "serviceType": "Mobile App Development",
      "areaServed": "Worldwide"
    }
  },
  
  'desktop-development': {
    title: 'Desktop Application Development - Cross-Platform Solutions | Webbound.dev',
    description: 'Professional desktop application development using Electron, React, and native technologies. Custom business solutions that enhance productivity and streamline operations.',
    keywords: [
      'desktop application development',
      'Electron development',
      'cross-platform desktop apps',
      'Windows applications',
      'macOS applications',
      'Linux applications',
      'business software',
      'productivity tools',
      'desktop UI/UX',
      'data management systems',
      'workflow automation',
      'enterprise software',
      'custom business logic',
      'offline applications'
    ],
    canonicalUrl: '/services/desktop-development',
    ogImage: '/og-desktop-development.png',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Desktop Application Development",
      "description": "Powerful desktop applications that streamline business operations and enhance productivity.",
      "provider": {
        "@type": "Organization",
        "name": "Webbound.dev"
      },
      "serviceType": "Desktop Application Development",
      "areaServed": "Worldwide"
    }
  },
  
  'whatsapp-solutions': {
    title: 'WhatsApp Business API Solutions - Customer Engagement | Webbound.dev',
    description: 'WhatsApp Business API integration and chatbot development for enhanced customer communication. Automated support, broadcast messaging, and CRM integration.',
    keywords: [
      'WhatsApp Business API',
      'WhatsApp integration',
      'WhatsApp chatbot',
      'customer engagement',
      'automated customer support',
      'broadcast messaging',
      'WhatsApp CRM',
      'messaging automation',
      'customer communication',
      'WhatsApp marketing',
      'business messaging',
      'multi-agent support',
      'template management',
      'webhook integration'
    ],
    canonicalUrl: '/services/whatsapp-solutions',
    ogImage: '/og-whatsapp-solutions.png',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "WhatsApp Business Solutions",
      "description": "WhatsApp Business API implementation for enhanced customer engagement and communication.",
      "provider": {
        "@type": "Organization",
        "name": "Webbound.dev"
      },
      "serviceType": "WhatsApp Business Integration",
      "areaServed": "Worldwide"
    }
  },
  
  'ai-ml-solutions': {
    title: 'AI & Machine Learning Solutions - Intelligent Automation | Webbound.dev',
    description: 'AI-powered automation and machine learning solutions. Natural language processing, computer vision, predictive analytics, and custom AI development.',
    keywords: [
      'AI development',
      'machine learning solutions',
      'artificial intelligence',
      'AI automation',
      'natural language processing',
      'computer vision',
      'predictive analytics',
      'AI chatbots',
      'recommendation systems',
      'deep learning',
      'TensorFlow development',
      'PyTorch development',
      'OpenAI integration',
      'AI consulting',
      'process optimization'
    ],
    canonicalUrl: '/services/ai-ml-solutions',
    ogImage: '/og-ai-ml-solutions.png',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI & Machine Learning Solutions",
      "description": "AI-powered automation and machine learning solutions that drive intelligent business decisions.",
      "provider": {
        "@type": "Organization",
        "name": "Webbound.dev"
      },
      "serviceType": "AI & Machine Learning Development",
      "areaServed": "Worldwide"
    }
  },
  
  'ecommerce-development': {
    title: 'E-commerce Development - Online Store Solutions | Webbound.dev',
    description: 'Custom e-commerce development with Shopify, WooCommerce, and Magento. Payment integration, inventory management, and conversion optimization.',
    keywords: [
      'e-commerce development',
      'online store development',
      'Shopify development',
      'WooCommerce development',
      'Magento development',
      'payment gateway integration',
      'inventory management',
      'order processing',
      'mobile commerce',
      'multi-vendor marketplace',
      'conversion optimization',
      'e-commerce SEO',
      'customer analytics',
      'shopping cart development'
    ],
    canonicalUrl: '/services/ecommerce-development',
    ogImage: '/og-ecommerce-development.png',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "E-commerce Development",
      "description": "Conversion-optimized online stores with seamless user experiences and robust functionality.",
      "provider": {
        "@type": "Organization",
        "name": "Webbound.dev"
      },
      "serviceType": "E-commerce Development",
      "areaServed": "Worldwide"
    }
  },
  
  'custom-it-solutions': {
    title: 'Custom IT Solutions - Cloud, DevOps & Infrastructure | Webbound.dev',
    description: 'Comprehensive IT solutions including cloud migration, DevOps implementation, security solutions, and infrastructure optimization. AWS, Azure, and Google Cloud expertise.',
    keywords: [
      'custom IT solutions',
      'cloud solutions',
      'cloud migration',
      'DevOps implementation',
      'AWS services',
      'Azure solutions',
      'Google Cloud Platform',
      'infrastructure as code',
      'Kubernetes deployment',
      'Docker containerization',
      'security solutions',
      'monitoring and logging',
      'backup and recovery',
      'performance optimization',
      'IT consulting'
    ],
    canonicalUrl: '/services/custom-it-solutions',
    ogImage: '/og-custom-it-solutions.png',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Custom IT Solutions",
      "description": "Comprehensive IT solutions including cloud services, security, and DevOps implementation.",
      "provider": {
        "@type": "Organization",
        "name": "Webbound.dev"
      },
      "serviceType": "IT Solutions & Consulting",
      "areaServed": "Worldwide"
    }
  },
  
  'digital-marketing': {
    title: 'Digital Marketing & SEO Services - Growth Marketing | Webbound.dev',
    description: 'Data-driven digital marketing services including SEO, social media marketing, PPC advertising, content strategy, and conversion optimization for business growth.',
    keywords: [
      'digital marketing',
      'SEO services',
      'search engine optimization',
      'social media marketing',
      'PPC advertising',
      'Google Ads management',
      'Facebook advertising',
      'content marketing',
      'email marketing',
      'conversion optimization',
      'brand development',
      'analytics and reporting',
      'marketing automation',
      'lead generation',
      'growth marketing'
    ],
    canonicalUrl: '/services/digital-marketing',
    ogImage: '/og-digital-marketing.png',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Digital Marketing & SEO",
      "description": "Data-driven marketing strategies that deliver measurable results and business growth.",
      "provider": {
        "@type": "Organization",
        "name": "Webbound.dev"
      },
      "serviceType": "Digital Marketing & SEO",
      "areaServed": "Worldwide"
    }
  }
};

// Helper function to get metadata for a specific service
export const getServiceMetadata = (serviceId: string): ServiceMetadata | null => {
  return serviceMetadata[serviceId] || null;
};

// Helper function to get all service metadata
export const getAllServiceMetadata = (): Record<string, ServiceMetadata> => {
  return serviceMetadata;
};