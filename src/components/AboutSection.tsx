
import React from 'react';
import { Target, Eye, CheckCircle, Users, Clock, Award, Star, Zap, Shield, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "5000+ Customers Served",
      description: "Trusted by thousands across Kenya",
      stat: "5000+"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Operations",
      description: "Always available when you need us",
      stat: "24/7"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "6+ Years Experience",
      description: "Established excellence since 2018",
      stat: "6+ Years"
    }
  ];

  const achievements = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Excellence in Service",
      description: "Recognized for outstanding customer service and digital innovation",
      color: "bg-yellow-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Response Time",
      description: "Average response time of under 5 minutes for all inquiries",
      color: "bg-blue-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Reliable",
      description: "Bank-level security for all your personal and business data",
      color: "bg-green-500"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Community Impact",
      description: "Contributed to digital literacy for over 10,000 Kenyans",
      color: "bg-red-500"
    }
  ];

  const teamStats = [
    { number: "15+", label: "Expert Staff Members" },
    { number: "150+", label: "Services Offered" },
    { number: "99.8%", label: "Customer Satisfaction" },
    { number: "47", label: "Counties Served" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-600 text-sm font-medium rounded-full mb-4">
              About Mutunga Enterprise Ltd
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted Digital Gateway
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Since 2018, Mutunga Enterprise Ltd has been at the forefront of Kenya's digital transformation. 
              What started as a vision to bridge the digital divide has evolved into a comprehensive digital 
              service center serving thousands of customers nationwide.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From government eCitizen services to professional printing, computer training, and business 
              solutions, we're your one-stop destination for all digital needs. Our commitment to excellence 
              and 24/7 availability makes us the preferred choice for individuals and businesses alike.
            </p>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-green-50 rounded-lg">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-600 text-sm">
                  To provide accessible, reliable digital services that empower our community to thrive in the digital age.
                </p>
              </div>
              
              <div className="p-6 bg-red-50 rounded-lg">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Our Vision</h3>
                <p className="text-gray-600 text-sm">
                  To become Kenya's leading digital service provider, known for excellence and innovation.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {teamStats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link 
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-red-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
            >
              Learn More About Us
            </Link>
          </div>

          {/* Enhanced Highlights & Achievements */}
          <div className="animate-fade-in space-y-8">
            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-green-50 via-gray-50 to-red-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Us?</h3>
              
              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-red-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      {highlight.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-lg font-bold text-gray-900">{highlight.title}</h4>
                        <span className="text-2xl font-bold text-green-600">{highlight.stat}</span>
                      </div>
                      <p className="text-gray-600">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Our Achievements</h3>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-4 hover:scale-105 transition-transform duration-200">
                    <div className={`w-12 h-12 ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-3 text-white`}>
                      {achievement.icon}
                    </div>
                    <h4 className="font-bold text-sm text-gray-900 mb-1">{achievement.title}</h4>
                    <p className="text-xs text-gray-600 leading-tight">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                Our Core Values
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-600">Reliability</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-600">Excellence</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-gray-600">Innovation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-600">Customer First</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-600">Integrity</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-600">Growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
