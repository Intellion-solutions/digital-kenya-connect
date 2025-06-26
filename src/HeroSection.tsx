
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
      image: "https://rimeastafrica.org/wp-content/uploads/2017/06/ecitizen.png",
      cta: "Get eCitizen Help",
      link: "/contact?service=eCitizen Services"
    },
    {
      id: 2,
      title: "Modern Cyber Cafe Services",
      subtitle: "State-of-the-art facilities with professional assistance",
      description: "High-speed internet, modern computers, printing, scanning, and expert help available 24/7",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      cta: "Visit Our Cyber",
      link: "/contact?service=Cyber Cafe"
    },
    {
      id: 3,
      title: "Professional Printing & Design",
      subtitle: "High-quality printing services for all your needs",
      description: "From business cards to large format printing, posters, banners, and bulk copying",
      image: "https://www.tenaui.sa/wp-content/uploads/2024/02/Large-Format-Printing.webp",
      cta: "View Printing Services",
      link: "/contact?service=Printing Services"
    },
    {
      id: 4,
      title: "Digital Skills & Training",
      subtitle: "Learn essential computer skills for the modern world",
      description: "Computer basics, Microsoft Office, internet usage, and digital literacy programs",
      image: "https://www.smartacademy.go.ke/choodrik/2024/03/Banner-1-1.jpg",
      cta: "Start Learning",
      link: "/contact?service=Computer Training"
    },
    {
      id: 5,
      title: "Business Solutions Center",
      subtitle: "Complete business support services",
      description: "CV writing, business registration, tax services, and professional consultations",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      cta: "Explore Business Services",
      link: "/contact?service=Business Consultancy"
    },
    {
      id: 6,
      title: "Software Development Services",
      subtitle: "Custom websites, Web Apps & Information systems software solutions",
      description: "Professional web development, mobile apps, and custom software solutions for your business",
      image: "https://miro.medium.com/v2/resize:fit:14720/1*O0Hdjnu6jioFNut3Bix-NQ.jpeg",
      cta: "View Our Work",
      link: "/contact?service=Software Development"
    },
    {
      id: 7,
      title: "Professional Consultancy",
      subtitle: "Expert guidance for your digital journey",
      description: "Get professional advice on technology, business processes, and digital transformation",
      image: "https://img.freepik.com/premium-photo/two-young-african-american-colleagues-formalwear-looking-through-data_274679-39908.jpg",
      cta: "Book Consultation",
      link: "/contact?service=Professional Consultancy"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[65vh] overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Enhanced background with better opacity */}
            <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
            
            {/* Logo overlay on background with reduced opacity and size */}
            <div className="absolute top-1/2 right-10 transform -translate-y-1/2 z-5 opacity-6">
              <img 
                src="/assets/dfdb6b94-9976-4ca2-85da-47f0aa5d2551.png" 
                alt="Vincom Computer (K)  Enterprise Ltd" 
                className="w-60 h-60 object-contain filter brightness-300"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-full mb-4">
              🇰🇪 Proudly Serving Kenya and Beyond
            </span>
            <div className="mb-4 flex items-center space-x-4">
              <div className="w-20 h-20 flex items-center justify-center bg-white bg-opacity-10 backdrop-blur-sm rounded-full">
                <img 
                  src="/assets/dfdb6b94-9976-4ca2-85da-47f0aa5d2551.png" 
                  alt="Vincom Computers (K)Enterprise Ltd" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Vincom Computers Enterprise Ltd
                </h2>
                <p className="text-green-300 text-lg">Your Trusted Digital Gateway</p>
              </div>
            </div>
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
                <div className="text-2xl font-bold">150+</div>
                <div className="text-sm text-gray-300">Services Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
