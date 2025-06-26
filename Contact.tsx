import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, User, FileText, Calendar } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: searchParams.get('service') || '',
    message: '',
    urgency: 'normal'
  });

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      setFormData(prev => ({ ...prev, service: serviceParam }));
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hello! I would like to book a service.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nUrgency: ${formData.urgency}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/254726564132?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailContact = () => {
    const subject = 'Service Inquiry - Mutunga Enterprise Ltd';
    const body = `Hello,\n\nI would like to inquire about your services.\n\nBest regards,\n${formData.name || '[Your Name]'}`;
    const mailtoUrl = `mailto:mutuvince@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handleWhatsAppContact = () => {
    const message = 'Hello! I would like to inquire about your services.';
    const whatsappUrl = `https://wa.me/254726564132?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    'eCitizen Services',
    'Fleet Booking',
    'Building & Construction',
    'Business Consultancy',
    'Computer Training',
    'Printing Services',
    'Design Services',
    'General Inquiry'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-black to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
            We're here to help you with all your digital service needs. Contact us anytime!
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Our Center</h3>
                      <p className="text-gray-600">
                        VINCOM COMPUTER (K) ENTERPRISE<br />
                        Sindo town, Homabay County<br />
                        P.O Box 14-40308,
                        Sindo.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                      <p className="text-gray-600">
                        <a href="tel:+254726564132" className="hover:text-red-600 transition-colors">
                          +254 726 564 132
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                      <p className="text-gray-600">
                        <button 
                          onClick={handleEmailContact}
                          className="hover:text-blue-600 transition-colors cursor-pointer"
                        >
                          info@vincomcomputerenterprise.co.ke
                        </button>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
                      <p className="text-gray-600">
                        <button 
                          onClick={handleWhatsAppContact}
                          className="hover:text-green-600 transition-colors cursor-pointer"
                        >
                          Chat with us instantly
                        </button>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Operating Hours</h3>
                      <p className="text-gray-600">
                        Open 24/7<br />
                        <span className="text-green-600 font-medium">Always Available for You</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="tel:+254726564132"
                    className="bg-red-600 text-white p-4 rounded-lg text-center font-semibold hover:bg-red-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                  <button 
                    onClick={handleWhatsAppContact}
                    className="bg-green-600 text-white p-4 rounded-lg text-center font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                          placeholder="+254 XXX XXX XXX"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Needed
                      </label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                        Urgency Level
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          id="urgency"
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="normal">Normal</option>
                          <option value="normal">High Priority</option>
                          <option value="urgent">Urgent</option>
                          <option value="normal">Critical</option>
                          <option value="emergency">Emergency</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="Please describe your needs or ask any questions..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-red-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send via WhatsApp</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Find Us Here</h2>
          <div className="bg-gradient-to-br from-green-200 via-gray-200 to-red-200 h-96 rounded-2xl flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.660219609455!2d34.1653058!3d-0.4612339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18299b3ddf999c35%3A0x2fc04b65236970e1!2sSindo!5e0!3m2!1sen!2ske!4v1718702450000!5m2!1sen!2ske"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
