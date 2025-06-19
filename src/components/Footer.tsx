import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'eCitizen Services',
    'Fleet Booking',
    'Building & Construction',
    'Business Consultancy',
    'Computer Training',
    'Printing & Design'
  ];

  const govServices = [
    'Birth Certificate',
    'ID Card Application',
    'Passport Services',
    'KRA PIN',
    'NHIF Registration',
    'Driving License'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/dfdb6b94-9976-4ca2-85da-47f0aa5d2551.png" 
                  alt="Mutunga Enterprise Ltd Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Mutunga Enterprise Ltd</h3>
                <p className="text-gray-400 text-sm">Your Digital Gateway</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your trusted partner for all digital services in Kenya. From government 
              applications to business solutions, we're here to help 24/7.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/254726564132" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Popular Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    to="/services"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">
                    Mutunga Enterprise Ltd<br />
                    Main Street, Nairobi<br />
                    Kenya
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a href="tel:+254726564132" className="text-gray-400 hover:text-white transition-colors duration-200">
                  +254 726 564 132
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a href="mailto:mutuvince@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                  mutuvince@gmail.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">
                    Open 24/7<br />
                    <span className="text-green-400 font-medium">Always Available</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Government Services Banner */}
        <div className="mt-12 p-6 bg-gradient-to-r from-green-800 to-red-800 rounded-lg">
          <h4 className="text-lg font-bold mb-4 text-center">Government Services Available</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {govServices.map((service) => (
              <div key={service} className="text-sm text-gray-200">
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2024 Mutunga Enterprise Ltd. All rights reserved.
              </p>
              <a 
                href="https://wa.me/254710245118"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center space-x-1"
              >
                <span>Website built and powered by</span>
                <span className="font-semibold text-green-400">Intellion Ltd</span>
              </a>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
