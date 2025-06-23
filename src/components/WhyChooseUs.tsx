
import React from 'react';
import { Clock, Users, Shield, Award, MapPin, Headphones, Zap, Heart } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "We're always open when you need us most. No more waiting for office hours.",
      color: "bg-green-500"
    },
    {
      icon: Users,
      title: "Expert Staff",
      description: "Our trained professionals guide you through every process with patience and expertise.",
      color: "bg-red-500"
    },
    {
      icon: Shield,
      title: "Secure & Confidential",
      description: "Your personal information and documents are handled with the highest level of security.",
      color: "bg-blue-500"
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "We ensure every service meets the highest standards. Your satisfaction is our priority.",
      color: "bg-purple-500"
    },
    {
      icon: MapPin,
      title: "Strategic Location",
      description: "Easily accessible location with ample parking and public transport connectivity.",
      color: "bg-orange-500"
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Get instant help through WhatsApp, phone calls, or in-person consultations.",
      color: "bg-teal-500"
    },
    {
      icon: Zap,
      title: "Fast Processing",
      description: "Quick turnaround times for all services. Get what you need without the wait.",
      color: "bg-indigo-500"
    },
    {
      icon: Heart,
      title: "Community Focused",
      description: "Proudly serving the Kenyan community with dedication and local understanding.",
      color: "bg-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Vincom Computer (k) Enterprise?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're more than just a cyber café - we're your trusted partner for all digital services. 
            Here's what makes us the preferred choice for thousands of Kenyans.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-green-600 via-black to-red-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <div className="text-green-200 text-lg">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-red-200 text-lg">Services Offered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-white text-lg">Always Available</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
              <div className="text-green-200 text-lg">Success Rate</div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Join Thousands of Satisfied Customers
            </h3>
            <p className="text-lg text-gray-200 mb-6">
              Experience the difference of working with Kenya's most trusted digital services center.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Visit Our Center
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200">
                Call Us Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
