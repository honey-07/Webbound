import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Phone } from 'lucide-react';
import SEO from '../components/SEO';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="404 - Page Not Found | Webbound.dev"
        description="The page you're looking for doesn't exist. Return to our homepage or explore our services."
        keywords={['404', 'page not found', 'error']}
        canonicalUrl="/404"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Visual */}
          <div className="relative mb-8">
            <div className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 leading-none">
              404
            </div>
            <div className="absolute inset-0 text-8xl md:text-9xl lg:text-[12rem] font-bold text-gray-200 dark:text-gray-800 -z-10 transform translate-x-1 translate-y-1 leading-none">
              404
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              PAGE NOT <span className="text-blue-500">FOUND</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-2">
              Oops! The page you're looking for doesn't exist in our digital reality.
            </p>
         
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/"
              className="brutalist-button flex items-center justify-center space-x-2 px-6 py-3"
            >
              <Home className="w-5 h-5" />
              <span>GO HOME</span>
            </Link>
            
           
            <Link
              to="/contact"
              className="brutalist-button brutalist-button-outline flex items-center justify-center space-x-2 px-6 py-3"
            >
              <Phone className="w-5 h-5" />
              <span>GET HELP</span>
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg brutalist-container">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                🌐 Popular Pages
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/services/web-development" className="text-blue-500 hover:text-blue-600 transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="/services/mobile-development" className="text-blue-500 hover:text-blue-600 transition-colors">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link to="/services/ai-ml-solutions" className="text-blue-500 hover:text-blue-600 transition-colors">
                    AI & ML Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-blue-500 hover:text-blue-600 transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg brutalist-container">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                🔧 Quick Actions
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/contact" className="text-blue-500 hover:text-blue-600 transition-colors">
                    Contact Support
                  </Link>
                </li>
                <li>
                  <a href="https://calendly.com/webbound/30min" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition-colors">
                    Book Consultation
                  </a>
                </li>
                <li>
                  <Link to="/careers" className="text-blue-500 hover:text-blue-600 transition-colors">
                    Join Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-blue-500 hover:text-blue-600 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg brutalist-container">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                💡 Need Help?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Can't find what you're looking for? Our team is here to help you navigate our digital solutions.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">📧</span>
                  <span className="text-gray-700 dark:text-gray-300">hello@webbound.dev</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">📞</span>
                  <span className="text-gray-700 dark:text-gray-300">+1 (208) 408 1463</span>
                </div>
              </div>
            </div>
          </div>

        
        
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
