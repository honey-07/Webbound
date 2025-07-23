import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Code, Smartphone, Monitor, MessageSquare, Brain, ShoppingCart, Server, TrendingUp } from 'lucide-react';
import SEO from './SEO';
import { services } from '../data/services';
import {serviceMetadata} from "../data/metadata.config"

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

const ServicePage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Service Not Found</h1>
          <Link to="/" className="text-blue-500 hover:text-blue-600">Return to Home</Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[service.icon as keyof typeof iconMap];

  return (
    <>
      <SEO 
        title={`${service.title} - Webbound.dev`}
        description={`Professional ${service.title} services by Webbound.dev. ${service.description.slice(0, 150)}...`}
        keywords={[service.title.toLowerCase(), ...(serviceMetadata as any)[service.id].keywords]}
        canonicalUrl={`/services/${serviceId}`}
        type="article"
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="container mx-auto px-4 py-12">
          <Link to="/" className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} text-white mb-6`}>
                <IconComponent className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {service.detailedDescription}
              </p>
              <Link to={"/contact"} className="brutalist-button">{service.cta}</Link>
            </div>

            {service.image && (
              <div className="card-3d">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="brutalist-container p-6 bg-white dark:bg-gray-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Features</h3>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="brutalist-container p-6 bg-white dark:bg-gray-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="brutalist-container p-6 bg-white dark:bg-gray-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Benefits</h3>
              <ul className="space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="brutalist-container p-8 bg-white dark:bg-gray-800 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Process</h3>
            <div className="grid md:grid-cols-5 gap-6">
              {service.process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    {index + 1}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{step}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="brutalist-container inline-block p-8 bg-white dark:bg-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                Let's discuss your project requirements and create a solution that drives results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to='/contact' className="brutalist-button">
                  START YOUR PROJECT
                </Link>
                <a href='https://calendly.com/webbound/30min' className="px-8 py-3 border-2 flex items-center  border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-800 transition-colors">
                  GET FREE CONSULTATION
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;