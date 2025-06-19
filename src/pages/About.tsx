
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Target, Eye, Users, Award, Clock, MapPin, CheckCircle, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Reliability",
      description: "We deliver consistent, dependable services you can count on 24/7."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer First",
      description: "Every decision we make prioritizes our customers' needs and satisfaction."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for the highest quality in every service we provide."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Innovation",
      description: "We continuously adopt new technologies to serve you better."
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Foundation",
      description: "Mutunga Enterprise Ltd was established to bridge the digital divide in Kenya."
    },
    {
      year: "2019",
      title: "First 1000 Customers",
      description: "Reached our first milestone of serving 1000 satisfied customers."
    },
    {
      year: "2020",
      title: "Digital Expansion",
      description: "Expanded our services to include comprehensive eCitizen assistance."
    },
    {
      year: "2021",
      title: "24/7 Operations",
      description: "Became the first digital center in our area to operate round the clock."
    },
    {
      year: "2022",
      title: "Training Programs",
      description: "Launched professional computer training and digital literacy programs."
    },
    {
      year: "2023",
      title: "5000+ Customers",
      description: "Celebrated serving over 5000 customers across all our services."
    },
    {
      year: "2024",
      title: "Digital Gateway",
      description: "Rebranded as 'Your Digital Gateway' to reflect our comprehensive services."
    }
  ];

  const team = [
    {
      name: "Vincent Mutunga",
      role: "Founder & CEO",
      description: "Visionary leader with over 10 years in digital services and customer relations.",
      image: "/lovable-uploads/team-vincent.jpg"
    },
    {
      name: "Sarah Wanjiku",
      role: "Operations Manager",
      description: "Ensures smooth daily operations and maintains our high service standards.",
      image: "/lovable-uploads/team-sarah.jpg"
    },
    {
      name: "David Kimani",
      role: "Technical Lead",
      description: "Expert in computer systems, troubleshooting, and customer technical support.",
      image: "/lovable-uploads/team-david.jpg"
    },
    {
      name: "Grace Akinyi",
      role: "Customer Service Manager",
      description: "Dedicated to ensuring every customer receives exceptional service and support.",
      image: "/lovable-uploads/team-grace.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-black to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            About Mutunga Enterprise Ltd
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Your trusted digital gateway, bridging the gap between traditional services and the digital world
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2018, Mutunga Enterprise Ltd began as a small digital service center with a big vision: 
                to make technology accessible to everyone in Kenya. What started as a simple cyber cafe has evolved 
                into a comprehensive digital gateway serving thousands of customers.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our founder, Vincent Mutunga, recognized the growing need for reliable digital services in an 
                increasingly connected world. From helping students with assignments to assisting elderly citizens 
                with government applications, we've been at the forefront of Kenya's digital transformation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to be your one-stop solution for all digital needs, operating 24/7 to ensure 
                that technology never sleeps when you need it most.
              </p>
            </div>
            <div className="animate-fade-in">
              <div className="bg-gradient-to-br from-green-200 via-gray-200 to-red-200 h-96 rounded-2xl flex items-center justify-center">
                <div className="text-center text-gray-700">
                  <div className="text-2xl font-bold mb-4">Our Journey</div>
                  <div className="text-lg">From humble beginnings to digital excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Objectives */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center animate-fade-in hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide accessible, reliable, and comprehensive digital services that empower individuals 
                and businesses to thrive in the digital age, while bridging the technology gap in our community.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center animate-fade-in hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become Kenya's leading digital service provider, known for excellence, innovation, and 
                customer satisfaction, while contributing to the country's digital transformation journey.
              </p>
            </div>

            {/* Objectives */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center animate-fade-in hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Objectives</h3>
              <ul className="text-gray-600 leading-relaxed text-left space-y-2">
                <li>• Provide 24/7 digital services accessibility</li>
                <li>• Enhance digital literacy in our community</li>
                <li>• Deliver exceptional customer experiences</li>
                <li>• Foster technological innovation</li>
                <li>• Support local business growth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we serve our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center animate-fade-in group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:shadow-lg transition-shadow duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that have shaped Mutunga Enterprise Ltd into what it is today
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-600 to-red-600"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                          {milestone.year.slice(-2)}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 ml-4">{milestone.title}</h3>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The dedicated professionals who make your digital experience exceptional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center animate-fade-in group">
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-green-200 via-gray-200 to-red-200 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="text-center text-gray-700">
                      <div className="text-lg font-bold">{member.name}</div>
                      <div className="text-sm">{member.role}</div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-green-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Mutunga Enterprise Ltd?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're more than just a service provider - we're your digital partners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in hover:shadow-xl transition-shadow duration-300">
              <Clock className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Availability</h3>
              <p className="text-gray-600">
                We never close. Whether it's midnight or dawn, we're here to help you with your digital needs.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in hover:shadow-xl transition-shadow duration-300">
              <Users className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Support</h3>
              <p className="text-gray-600">
                Our trained professionals provide personalized assistance for all your digital service requirements.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in hover:shadow-xl transition-shadow duration-300">
              <MapPin className="w-12 h-12 text-black mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Convenient Location</h3>
              <p className="text-gray-600">
                Strategically located in the heart of Nairobi for easy access by public transport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-black to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Excellence?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Mutunga Enterprise Ltd for their digital needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Us Today
            </a>
            <a 
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
