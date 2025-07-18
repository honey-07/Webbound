import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Monitor, MessageSquare, Brain, ShoppingCart, Server, TrendingUp } from 'lucide-react';
import { services } from '../data/services';

const iconMap = {
  Code,
  Smartphone,
  Monitor,
  MessageSquare,
  Brain,
  ShoppingCart,
  Server,
  TrendingUp,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            OUR <span className="gradient-text">SERVICES</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and accelerate growth
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <div
                key={service.id}
                className={`card-3d p-4 lg:p-6 rounded-lg bg-gradient-to-br ${service.color} text-white hover:shadow-xl transition-all duration-300`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{service.description}</p>
                </div>

                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-white/80">
                      <div className="w-1.5 h-1.5 bg-white/60 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center text-white font-medium hover:text-white/80 transition-colors text-sm lg:text-base"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="brutalist-container inline-block p-8 bg-gray-50 dark:bg-gray-800">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              READY TO START YOUR PROJECT?
            </h3>
            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 mb-6">
              Let's discuss how we can transform your ideas into digital reality.
            </p>
            <a href='https://calendly.com/webbound/30min' target='_blank' className="brutalist-button">
              GET FREE CONSULTATION
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;