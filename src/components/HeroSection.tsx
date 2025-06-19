
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Complete eCitizen Services",
      subtitle: "Get all your government services done quickly and efficiently",
      description: "Birth certificates, ID cards, passports, driving licenses, and more - all under one roof",
      image: "/lovable-uploads/ecitizen-services.jpg",
      cta: "Get eCitizen Help",
      link: "/services#ecitizen"
    },
    {
      id: 2,
      title: "Professional Printing & Design",
      subtitle: "High-quality printing services for all your needs",
      description: "From business cards to large format printing, posters, banners, and bulk copying",
      image: "/lovable-uploads/printing-services.jpg",
      cta: "View Printing Services",
      link: "/services#printing"
    },
    {
      id: 3,
      title: "Digital Skills & Training",
      subtitle: "Learn essential computer skills for the modern world",
      description: "Computer basics, Microsoft Office, internet usage, and digital literacy programs",
      image: "/lovable-uploads/computer-training.jpg",
      cta: "Start Learning",
      link: "/services#education"
    },
    {
      id: 4,
      title: "Business Solutions Center",
      subtitle: "Complete business support services",
      description: "CV writing, business registration, tax services, and professional consultations",
      image: "/lovable-uploads/business-center.jpg",
      cta: "Explore Business Services",
      link: "/services#business"
    },
    {
      id: 5,
      title: "24/7 Internet & Computing",
      subtitle: "Always open when you need us most",
      description: "High-speed internet, modern computers, scanning, photocopying, and lamination services",
      image: "/lovable-uploads/cyber-cafe.jpg",
      cta: "Visit Our Cyber",
      link: "/contact"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            <div 
              className="w-full h-full bg-cover bg-center bg-gradient-to-r from-green-900 via-black to-red-900"
              style={{ 
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`,
                backgroundBlendMode: 'overlay'
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-full mb-4">
              🇰🇪 Proudly Serving Kenya
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          
          <h2 className="text-xl md:text-2xl text-green-300 mb-4 font-medium">
            {slides[currentSlide].subtitle}
          </h2>
          
          <p className="text-lg text-gray-200 mb-8 max-w-2xl leading-relaxed">
            {slides[currentSlide].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to={slides[currentSlide].link}
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors duration-200 text-center"
            >
              {slides[currentSlide].cta}
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-200 text-center"
            >
              Get Help Now
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="flex items-center space-x-3 text-white">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold">5000+</div>
                <div className="text-sm text-gray-300">Happy Customers</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-white">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-gray-300">Always Open</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-white">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm text-gray-300">Services Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all duration-200"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all duration-200"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
