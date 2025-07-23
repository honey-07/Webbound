import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar, Clock, Globe, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import CustomDropdown from '../components/CustomDropdown';
import SEO from '../components/SEO';

interface ApiResponse {
  success: boolean;
  error?: string;
  message?: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [formState, setFormState] = useState<{
    isSubmitting: boolean;
    submitted: boolean;
    error: string | null;
  }>({
    isSubmitting: false,
    submitted: false,
    error: null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.service || !formData.message.trim()) {
      setFormState({
        isSubmitting: false,
        submitted: false,
        error: 'Please fill in all required fields.'
      });
      return;
    }
    if (formData.message.length < 10) {
      setFormState({
        isSubmitting: false,
        submitted: false,
        error: 'Message must be at least 10 characters long.'
      });
      return;
    }

    setFormState({ isSubmitting: true, submitted: false, error: null });

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result: ApiResponse = await response.json();

      if (result.success) {
        setFormState({
          isSubmitting: false,
          submitted: true,
          error: null
        });
        // Reset form data
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          budget: '',
          timeline: '',
          message: ''
        });
        
        // Scroll to success message
        setTimeout(() => {
          document.querySelector('.success-message')?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
        }, 100);
      } else {
        setFormState({
          isSubmitting: false,
          submitted: false,
          error: result.error || 'Failed to submit form. Please try again.'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormState({
        isSubmitting: false,
        submitted: false,
        error: 'Network error. Please check your connection and try again.'
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    'Web Development',
    'Mobile App Development',
    'Desktop Applications',
    'WhatsApp Business Solutions',
    'AI & Machine Learning',
    'E-commerce Development',
    'Custom IT Solutions',
    'Digital Marketing & SEO'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000'
  ];

  const timelines = [
    'ASAP (Rush)',
    '1-2 weeks',
    '1-3 months',
    '3-6 months',
    '6+ months'
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@webbound.dev',
      description: 'Send us an email anytime',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (208) 408 1463',
      description: 'Call us during business hours',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '9169 W State St #2156',
      description: 'Garden City, ID 83714',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Timezone',
      value: 'MST (UTC-7)',
      description: 'Mountain Standard Time',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM MST' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM MST' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <>
      <SEO 
        title="Contact Us - Webbound.dev"
        description="Get in touch with Webbound.dev for your technology needs. We're here to help transform your business with our expert solutions and services."
        keywords={['contact us', 'get in touch', 'tech support', 'IT services contact', 'technology consultation']}
        canonicalUrl="/contact"
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16 md:pt-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              GET IN <span className="gradient-text">TOUCH</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
              Ready to transform your ideas into digital reality? Let's start the conversation and build something amazing together.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className={`card-3d p-4 md:p-6 rounded-lg bg-gradient-to-br ${method.color} text-white`}>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <method.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-base md:text-lg font-bold mb-2">{method.title}</h3>
                <p className="text-white/90 font-medium mb-1 text-sm md:text-base">{method.value}</p>
                <p className="text-white/70 text-xs md:text-sm">{method.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="brutalist-container p-6 md:p-8 bg-white dark:bg-gray-800">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
                  Start Your Project
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 md:mb-8 text-sm md:text-base">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed proposal.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={formState.isSubmitting}
                        className={`w-full px-4 py-3 border-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                          formState.error && !formData.name.trim() 
                            ? 'border-red-300 dark:border-red-600' 
                            : 'border-gray-300 dark:border-gray-600'
                        } ${formState.isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={formState.isSubmitting}
                        className={`w-full px-4 py-3 border-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                          formState.error && !formData.email.trim() 
                            ? 'border-red-300 dark:border-red-600' 
                            : 'border-gray-300 dark:border-gray-600'
                        } ${formState.isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <CustomDropdown
                        name="service"
                        label="Service Needed"
                        options={services}
                        value={formData.service}
                        onChange={(value) => handleChange({ target: { name: 'service', value } } as any)}
                        placeholder="Select a service"
                        required
                      />
                    </div>

                    <div>
                      <CustomDropdown
                        name="budget"
                        label="Budget Range"
                        options={budgetRanges}
                        value={formData.budget}
                        onChange={(value) => handleChange({ target: { name: 'budget', value } } as any)}
                        placeholder="Select budget"
                      />
                    </div>

                    <div className="sm:col-span-2 lg:col-span-1">
                      <CustomDropdown
                        name="timeline"
                        label="Timeline"
                        options={timelines}
                        value={formData.timeline}
                        onChange={(value) => handleChange({ target: { name: 'timeline', value } } as any)}
                        placeholder="Select timeline"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={formState.isSubmitting}
                      rows={5}
                      className={`w-full px-4 py-3 border-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none ${
                        formState.error && !formData.message.trim() 
                          ? 'border-red-300 dark:border-red-600' 
                          : 'border-gray-300 dark:border-gray-600'
                      } ${formState.isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                      placeholder="Tell us about your project, goals, requirements, and any specific features you need..."
                    />
                  </div>

                  {/* Success Message */}
                  {formState.submitted && (
                    <div className="success-message bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-4 flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-green-800 dark:text-green-400 font-semibold">Message Sent Successfully!</h4>
                        <p className="text-green-700 dark:text-green-300 text-sm mt-1">
                          Thank you for your inquiry. We'll get back to you within 24 hours with a detailed proposal.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {formState.error && (
                    <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-lg p-4 flex items-start space-x-3">
                      <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-red-800 dark:text-red-400 font-semibold">Error Sending Message</h4>
                        <p className="text-red-700 dark:text-red-300 text-sm mt-1">{formState.error}</p>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState.isSubmitting}
                    className={`brutalist-button w-full flex items-center justify-center space-x-2 ${
                      formState.isSubmitting 
                        ? 'opacity-70 cursor-not-allowed' 
                        : 'hover:transform hover:scale-105'
                    }`}
                  >
                    {formState.isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>SENDING...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>SEND MESSAGE</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
              {/* Business Hours */}
              <div className="brutalist-container p-4 md:p-6 bg-white dark:bg-gray-800">
                <div className="flex items-center mb-3 md:mb-4">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-blue-500 mr-3" />
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">Business Hours</h3>
                </div>
                <div className="space-y-2 md:space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                      <span className="text-gray-600 dark:text-gray-400 font-medium text-sm md:text-base">{schedule.day}</span>
                      <span className="text-gray-900 dark:text-white text-sm">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3 md:space-y-4">
                <a href='https://calendly.com/webbound/30min' target='_blank' className="brutalist-button w-full flex items-center justify-center space-x-2 bg-purple-500 text-sm md:text-base py-3 md:py-4">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                  <span>SCHEDULE CALL</span>
                </a>
              </div>

              {/* Emergency Contact */}
              <div className="brutalist-container p-4 md:p-6 bg-gradient-to-br from-red-500 to-orange-500 text-white">
                <h3 className="text-base md:text-lg font-bold mb-2">Emergency Support</h3>
                <p className="text-white/90 text-sm mb-3">
                  Need urgent assistance with an existing project?
                </p>
                <p className="text-white font-medium text-sm md:text-base">emergency@webbound.dev</p>
                <p className="text-white/80 text-xs">Available 24/7 for critical issues</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 md:mt-20">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                FREQUENTLY ASKED <span className="gradient-text">QUESTIONS</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  question: 'How long does a typical project take?',
                  answer: 'Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during consultation.'
                },
                {
                  question: 'Do you provide ongoing support?',
                  answer: 'Yes! We offer comprehensive maintenance packages including updates, security monitoring, backups, and technical support to keep your solution running smoothly.'
                },
                {
                  question: 'What is your development process?',
                  answer: 'We follow an agile methodology: consultation, planning, development, testing, and deployment. You\'ll receive regular updates and can provide feedback throughout.'
                },
                {
                  question: 'Can you work with existing systems?',
                  answer: 'Absolutely! We specialize in integrating with existing systems, APIs, and databases. We can enhance or modernize your current technology stack.'
                }
              ].map((faq, index) => (
                <div key={index} className="brutalist-container p-4 md:p-6 bg-white dark:bg-gray-800">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;