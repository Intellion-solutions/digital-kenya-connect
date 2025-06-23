
import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPreview = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Our Center",
      info: "P.O Box 14-40308,",
      details: "Sindo.       Kenya",
      color: "bg-green-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us Now",
      info: "+254 726 564 132",
      details: "Available 24/7",
      color: "bg-red-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      info: "info@vincomcomputerenterprise.co.ke",
      details: "Quick Response Guaranteed",
      color: "bg-blue-500"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      info: "Chat with us instantly",
      details: "Fastest way to reach us",
      color: "bg-green-600"
    }
  ];

  const handleWhatsAppContact = () => {
    const message = 'Hello! I would like to inquire about your services.';
    const whatsappUrl = `https://wa.me/254726564132?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-green-900 to-red-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("https://maps.app.goo.gl/oxHx15d2T7ShwR6c6")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch With Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to get started? Contact us today and let us help you with all your digital service needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl hover:bg-opacity-20 transition-all duration-300">
                <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-300 mb-1">{item.info}</p>
                  <p className="text-sm text-gray-400">{item.details}</p>
                </div>
              </div>
            ))}

            {/* Operating Hours */}
            <div className="flex items-start space-x-4 p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Operating Hours</h4>
                <p className="text-gray-300 mb-1">Open 24/7</p>
                <p className="text-sm text-green-400 font-medium">Always Available for You</p>
              </div>
            </div>
          </div>

          {/* Quick Actions & Map */}
          <div className="space-y-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
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

              <Link 
                to="/contact"
                className="block w-full bg-gradient-to-r from-green-600 to-red-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-200 text-center group"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Visit Full Contact Page</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Location Preview */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4 text-white">Our Location</h3>

              <div className="w-full h-48 rounded-lg overflow-hidden shadow-md border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.660219609455!2d34.1653058!3d-0.4612339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18299b3ddf999c35%3A0x2fc04b65236970e1!2sSindo!5e0!3m2!1sen!2ske!4v1718702450000!5m2!1sen!2ske"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
