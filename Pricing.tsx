
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Check, Star, Zap, MessageCircle, Phone } from 'lucide-react';

const Pricing = () => {
  const pricingCategories = [
    {
      title: "eCitizen Services",
      description: "Government document processing fees",
      color: "from-green-500 to-green-600",
      services: [
        { name: "Birth Certificate", price: "From KSh 30", note: "government Birth forms" },
        { name: "ID Card Application", price: "From KSh 200", note: "Assistance + application fee" },
        { name: "Passport Services", price: "From KSh 700", note: "Form filling + guidance" },
        { name: "Good Conduct Cert.", price: "From KSh 200", note: "Complete application process" },
        { name: "KRA PIN Application", price: "KSh 200", note: "Quick registration" },
        { name: "KRA Services", price: "KSh 200", note: "Filing returns + Other services" },
        { name: "NHIF Registration", price: "KSh 150", note: "Full setup assistance" },
        { name: "NTSA Services", price: "KSh 200", note: "Log book trasnfers + Other services" }
      ]
    },
    {
      title: "Printing & Design",
      description: "Professional printing and creative services",
      color: "from-blue-500 to-blue-600",
      services: [
        { name: "Black & White Printing", price: "KSh 5 per page", note: "A4 size, bulk discounts available" },
        { name: "Color Printing", price: "KSh 20 per page", note: "High quality, various sizes" },
        { name: "Business Cards", price: "From KSh 500", note: "Design + printing (50 cards)" },
        { name: "Euology & Wedding Cards", price: "From KSh 500", note: "Design + printing (25 cards)" },
        { name: "Flyers & Brochures", price: "From KSh 30 each", note: "Professional design available" },
        { name: "Posters (A3)", price: "From KSh 30", note: "Various sizes available" },
        { name: "Banner Printing", price: "From KSh 1000/msq ft", note: "Weather resistant materials" },
        { name: "PVC + hard printings", price: "From Ksh 50", note: "School IDs & Business cards" }
      ]
    },
    {
      title: "Business Services",
      description: "Professional business support and consultancy",
      color: "from-purple-500 to-purple-600",
      services: [
        { name: "CV Writing", price: "From KSh 150", note: "Professional formatting + review" },
        { name: "Business Plan", price: "From KSh 5,000", note: "Comprehensive business planning" },
        { name: "Logo Design", price: "From KSh 1,000", note: "Original design + revisions" },
        { name: "Business Registration", price: "From KSh 1,500", note: "Complete registration process" },
        { name: "Business Consulation services", price: "From KSh 1,000", note: "Professional Consulation" },
        { name: "Web & System Design", price: "From KSh 11,000", note: "Professional websites & apps etc" },
        { name: "Tax Consultation", price: "From KSh 1,000", note: "Professional tax advice" },
        { name: "Legal Documents", price: "From KSh 500", note: "Contracts, agreements, etc." }
      ]
    },
    {
      title: "Computer Training",
      description: "Digital literacy and skills development",
      color: "from-orange-500 to-orange-600",
      services: [
        { name: "Basic Computer Skills", price: "KSh 3,000/month", note: "5+ weeks comprehensive course" },
        { name: "Microsoft Office", price: "From KSh 4,000", note: "Word, Excel, PowerPoint, Access" },
        { name: "Internet & Email", price: "From KSh 2,000", note: "Digital communication skills" },
        { name: "Graphic Design Course", price: "From KSh 8,000", note: "Professional design tools" },
        { name: "Web Design Basics", price: "From KSh 10,000/month", note: "HTML, CSS fundamentals" },
        { name: "Digital Marketing", price: "From KSh 6,000/month", note: "online marketing & Others" }
      ]
    },
    {
      title: "Fleet & Construction",
      description: "Transportation and building solutions",
      color: "from-red-500 to-red-600",
      services: [
        { name: "Bus Ticket Booking", price: "Service fee KSh 150", note: "Long hours travels" },
        { name: "Car Rental Booking", price: "Negotiable", note: "Based on some factors" },
        { name: "Building Plan Review", price: "From KSh 3,000", note: "Professional architectural review" },
        { name: "Construction Consultation", price: "From KSh 1,500/hour", note: "Expert advice & planning" },
        { name: "Project Management", price: "Negotiable", note: "Based on project scope" },
        { name: "Material Sourcing", price: "Commission based", note: "Best prices guaranteed" }
      ]
    },
    {
      title: "General Services",
      description: "Additional digital and office support",
      color: "from-teal-500 to-teal-600",
      services: [
        { name: "Data Entry", price: "From KSh 50", note: "Accurate & fast typing" },
        { name: "Document Scanning", price: "From KSh 30/page", note: "High resolution scans" },
        { name: "Lamination", price: "From KSh 30", note: "Various sizes available" },
        { name: "Photocopying", price: "KSh 5/page", note: "Clear & professional copies" },
        { name: "Internet Access", price: "KSh 60/hour", note: "High-speed connection" },
        { name: "Computer Usage", price: "KSh 80/hour", note: "Modern computers available" }
      ]
    }
  ];

  const packageDeals = [
    {
      title: "Student Package",
      price: "From KSh 4,000",
      description: "Perfect for students and researchers",
      features: [
        "100+ hours computer access",
        "30+ pages free printing",
        "Computer packages",
        "Internet Access",
        "Document typing assistance",
        "Email & internet training",
        "Assignment formatting",
        "Research assistance"
      ],
      highlight: false
    },
    {
      title: "Business Starter",
      price: "Negotiable",
      description: "Everything you need to start your business",
      features: [
        "Business registration assistance",
        "Logo design & branding",
        "500 business cards",
        "Letterhead design",
        "Professional Research",
        "Basic website setup"
      ],
      highlight: true
    },
    {
      title: "Enterprise Solution",
      price: "Negotiable",
      description: "Custom solutions for large organizations",
      features: [
        "Bulk printing discounts",
        "Dedicated account manager",
        "Web App & Information systems",
        "Priority service",
        "Custom training programs",
        "Fleet booking management",
        "24/7 support"
      ],
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-black to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Affordable rates with flexible payment options. Most services are negotiable!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+254726564132"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call for Quote</span>
            </a>
            <a 
              href="https://wa.me/254726564132"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-12 bg-yellow-50 border-b-4 border-yellow-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">📋 Important Pricing Notes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold text-yellow-700 mb-2">💰 Negotiable Pricing</h3>
                <p className="text-gray-700">Most of our services have flexible pricing based on volume, complexity, and customer needs.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold text-yellow-700 mb-2">📞 Custom Quotes</h3>
                <p className="text-gray-700">Contact us for personalized pricing on bulk orders, enterprise solutions, and special projects.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold text-yellow-700 mb-2">🎯 Package Deals</h3>
                <p className="text-gray-700">Combine multiple services for better rates. Ask about our student and business packages.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Service Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Starting prices for our most popular services. Contact us for exact quotes and special offers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className={`bg-gradient-to-r ${category.color} text-white p-6`}>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-white text-opacity-90">{category.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex justify-between items-start border-b border-gray-100 pb-3">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{service.name}</h4>
                          <p className="text-sm text-gray-500">{service.note}</p>
                        </div>
                        <div className="text-right ml-4">
                          <span className="font-bold text-gray-900">{service.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <button className={`w-full bg-gradient-to-r ${category.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200`}>
                      Get Custom Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Package Deals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Save more with our bundled service packages designed for different customer needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packageDeals.map((package_, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden ${package_.highlight ? 'ring-4 ring-green-500 transform scale-105' : ''} hover:shadow-xl transition-all duration-300`}>
                {package_.highlight && (
                  <div className="bg-green-500 text-white text-center py-2 font-semibold">
                    <Star className="w-4 h-4 inline mr-1" />
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{package_.title}</h3>
                  <p className="text-gray-600 mb-4">{package_.description}</p>
                  <div className="text-3xl font-bold text-green-600 mb-6">{package_.price}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {package_.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                    package_.highlight 
                      ? 'bg-green-600 text-white hover:bg-green-700' 
                      : 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
                  }`}>
                    Choose This Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-black to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Pricing?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Pricing</h3>
              <p className="text-gray-200">Negotiate prices based on your needs and budget</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Volume Discounts</h3>
              <p className="text-gray-200">Better rates for bulk orders and regular customers</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
              <p className="text-gray-200">Tailored packages for specific requirements</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">No Hidden Fees</h3>
              <p className="text-gray-200">Transparent pricing with no surprise charges</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
