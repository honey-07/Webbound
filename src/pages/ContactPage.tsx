import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar, Clock, Globe } from 'lucide-react';
import CustomDropdown from '../components/CustomDropdown';
import SEO from '../components/SEO';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submissionj
    console.log('Form submitted:', formData);
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
      value: '+1 (208) 900-9315',
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
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              GET IN <span className="gradient-text">TOUCH</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your ideas into digital reality? Let's start the conversation and build something amazing together.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className={`card-3d p-6 rounded-lg bg-gradient-to-br ${method.color} text-white`}>
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <method.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{method.title}</h3>
                <p className="text-white/90 font-medium mb-1">{method.value}</p>
                <p className="text-white/70 text-sm">{method.description}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="brutalist-container p-8 bg-white dark:bg-gray-800">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Start Your Project
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed proposal.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                        className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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

                  <div className="grid md:grid-cols-3 gap-6">
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

                    <div>
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
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Tell us about your project, goals, requirements, and any specific features you need..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="brutalist-button w-full flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>SEND MESSAGE</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Business Hours */}
              <div className="brutalist-container p-6 bg-white dark:bg-gray-800">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-blue-500 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400 font-medium">{schedule.day}</span>
                      <span className="text-gray-900 dark:text-white text-sm">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <a href='https://calendly.com/webbound/30min' target='_blank' className="brutalist-button w-full flex items-center justify-center space-x-2 bg-purple-500">
                  <Calendar className="w-5 h-5" />
                  <span>SCHEDULE CALL</span>
                </a>
              </div>

              {/* Emergency Contact */}
              <div className="brutalist-container p-6 bg-gradient-to-br from-red-500 to-orange-500 text-white">
                <h3 className="text-lg font-bold mb-2">Emergency Support</h3>
                <p className="text-white/90 text-sm mb-3">
                  Need urgent assistance with an existing project?
                </p>
                <p className="text-white font-medium">emergency@webbound.dev</p>
                <p className="text-white/80 text-xs">Available 24/7 for critical issues</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                FREQUENTLY ASKED <span className="gradient-text">QUESTIONS</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
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
                <div key={index} className="brutalist-container p-6 bg-white dark:bg-gray-800">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
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