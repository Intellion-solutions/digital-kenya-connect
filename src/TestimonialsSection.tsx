
import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Wanjiku",
      role: "University Student",
      location: "Nairobi",
      rating: 5,
      text: "Vincom computer helped me get my passport so quickly! The staff was incredibly patient and guided me through every step. I was so stressed about the process, but they made it simple.",
      image: "/",
      service: "Passport Application"
    },
    {
      id: 2,
      name: "John Mwangi",
      role: "Small Business Owner",
      location: "Kiambu",
      rating: 5,
      text: "I've been using their printing services for my business for over 2 years. Quality is always top-notch and the prices are very fair. Their design team also created an amazing logo for my company.",
      image: "/",
      service: "Printing & Design Services"
    },
    {
      id: 3,
      name: "Grace Njeri",
      role: "Teacher",
      location: "Nakuru",
      rating: 5,
      text: "The staff here are angels! They helped me with my HELB application and even printed all my teaching materials. The 24/7 service is a lifesaver for busy people like me.",
      image: "",
      service: "HELB Application & Printing"
    },
    {
      id: 4,
      name: "David Kiprotich",
      role: "Job Seeker",
      location: "Eldoret",
      rating: 5,
      text: "They wrote the most professional CV for me and helped me apply for jobs online. Within a month, I got three interviews! Their career guidance is exceptional.",
      image: "",
      service: "CV Writing & Job Applications"
    },
    {
      id: 5,
      name: "Mary Akinyi",
      role: "Mother of 3",
      location: "Kisumu",
      rating: 5,
      text: "Getting birth certificates for my children was so easy here. The staff understood my needs and helped me with everything. Very professional and caring service.",
      image: "",
      service: "Birth Certificate Services"
    },
    {
      id: 6,
      name: "Peter Mutua",
      role: "Entrepreneur",
      location: "Machakos",
      rating: 5,
      text: "From business registration to getting my KRA PIN, they handled everything. The one-stop solution saved me weeks of running around government offices.",
      image: "",
      service: "Business Registration & KRA Services"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here are real stories from real customers 
            who have experienced our exceptional service.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-white" />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Customer Image */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-green-500 to-red-500 p-1">
                  <div className="w-full h-full rounded-full bg-gray-300 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-green-200 to-red-200 flex items-center justify-center text-2xl font-bold text-gray-700">
                      {currentData.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(currentData.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                  "{currentData.text}"
                </blockquote>

                {/* Customer Info */}
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-gray-900">{currentData.name}</h4>
                  <p className="text-gray-600">{currentData.role} • {currentData.location}</p>
                  <p className="text-sm text-green-600 font-medium mt-1">
                    Service: {currentData.service}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -left-6 transform -translate-y-1/2">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 hover:shadow-xl transition-all duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            
            <div className="absolute top-1/2 -right-6 transform -translate-y-1/2">
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 hover:shadow-xl transition-all duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTestimonial ? 'bg-green-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mini Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={testimonial.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                "{testimonial.text.substring(0, 120)}..."
              </p>
              <div className="text-sm">
                <p className="font-medium text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to join our satisfied customers?
          </p>
          <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
