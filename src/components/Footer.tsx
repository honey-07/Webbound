import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from '../assets/logo.webp'
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'Mobile Apps', href: '/services/mobile-development' },
      { name: 'Desktop Apps', href: '/services/desktop-development' },
      { name: 'AI & ML Solutions', href: '/services/ai-ml-solutions' },
      { name: 'E-commerce', href: '/services/ecommerce-development' },
      { name: 'IT Solutions', href: '/services/custom-it-solutions' },
      { name: 'Digital Marketing', href: '/services/digital-marketing' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/webbound_dev', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/webbound', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/webbound.dev', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <img src={Logo} alt="Webbound Logo" className='rounded-lg' />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold">WEBBOUND<span className="text-blue-400">.DEV</span></h3>
                <p className="text-xs text-gray-400 font-mono">TRANSFORMING IDEAS INTO DIGITAL REALITY</p>
              </div>
            </Link>

            <p className="text-gray-400 mb-6 max-w-md leading-relaxed text-sm lg:text-base">
              We're a cutting-edge technology solutions company specializing in web development, mobile apps,
              AI integration, and custom IT solutions. Let's build the future together.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm lg:text-base">hello@webbound.dev</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm lg:text-base">+1 (208) 408 1463</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm lg:text-base">
                  9169 W State St #2156<br />Garden City, ID 83714
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-1 md:space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 flex items-center hover:text-white transition-colors text-sm lg:text-base block py-0.5 md:py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-1 md:space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 flex items-center hover:text-white transition-colors text-sm lg:text-base block py-0.5 md:py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-1 md:space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 flex items-center hover:text-white transition-colors text-sm lg:text-base block py-0.5 md:py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 lg:mt-12 pt-6 lg:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Webbound.dev. All rights reserved.
            </div>

            <div className="flex space-x-4 lg:space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;