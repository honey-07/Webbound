import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Code, Zap, ChevronDown } from 'lucide-react';
import Logo from '../assets/logo.png'
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
  ];

  const serviceItems = [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile Apps', href: '/services/mobile-development' },
    { name: 'Desktop Apps', href: '/services/desktop-development' },
    { name: 'WhatsApp Solutions', href: '/services/whatsapp-solutions' },
    { name: 'AI & ML', href: '/services/ai-ml-solutions' },
    { name: 'E-commerce', href: '/services/ecommerce-development' },
    { name: 'IT Solutions', href: '/services/custom-it-solutions' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
  ];

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3 lg:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 lg:space-x-3 group" onClick={closeMenus}>
            <div className="relative">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src={Logo} alt="Webbound logo" className='rounded-lg' />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                WEBBOUND<span className="text-blue-500">.DEV</span>
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-mono hidden lg:block">
                TRANSFORMING IDEAS INTO DIGITAL REALITY
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="relative text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium text-sm uppercase tracking-wider group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium text-sm uppercase tracking-wider"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      onClick={closeMenus}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 lg:space-x-4">
           

            <Link to="/contact" className="brutalist-button hidden md:block text-xs lg:text-sm px-4 py-2 lg:px-6 lg:py-3">
              START PROJECT
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg max-h-screen overflow-y-auto">
            <nav className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block py-3 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium text-sm uppercase tracking-wider border-b border-gray-100 dark:border-gray-800 last:border-b-0"
                  onClick={closeMenus}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services Section */}
              <div className="border-b border-gray-100 dark:border-gray-800">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full py-3 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium text-sm uppercase tracking-wider"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="pb-2">
                    {serviceItems.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block py-2 pl-4 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm"
                        onClick={closeMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link
                to="/contact"
                className="brutalist-button w-full mt-4 text-center"
                onClick={closeMenus}
              >
                START PROJECT
              </Link>
            </nav>
          </div>
        )}
      </div>
      
      {/* Overlay for mobile menu */}
      {(isMenuOpen || isServicesOpen) && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeMenus}
        />
      )}
    </header>
  );
};

export default Header;