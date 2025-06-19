
import React from 'react';
import { FileText, Printer, Palette, GraduationCap, Globe, CreditCard, Briefcase, Settings, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  const serviceCategories = [
    {
      icon: FileText,
      title: "eCitizen Services",
      description: "Complete government services including ID cards, birth certificates, passports, and all official documents",
      services: ["Birth Certificate", "ID Card Application", "Passport Services", "Good Conduct Certificate", "Marriage Certificate", "Death Certificate", "Huduma Namba", "NHIF Registration", "KRA PIN", "Business Permit", "Land Search", "Driving License"],
      color: "from-green-500 to-green-600",
      link: "/services#ecitizen"
    },
    {
      icon: FileText,
      title: "Government Applications",
      description: "Assistance with all government applications and processes",
      services: ["NTSA Services", "HELB Application", "NSSF Registration", "County Services", "Court Documents", "Police Clearance", "Immigration Services", "Visa Applications", "Work Permit", "Student Visa", "Tourist Visa", "Residence Permit"],
      color: "from-red-500 to-red-600",
      link: "/services#government"
    },
    {
      icon: Printer,
      title: "Printing & Bulk Jobs",
      description: "Professional printing services for all your document needs",
      services: ["Document Printing", "Color Printing", "Large Format", "Business Cards", "Flyers & Brochures", "Posters & Banners", "Binding & Lamination", "Photocopying", "Scanning", "Thesis Printing", "Book Printing", "Certificate Printing"],
      color: "from-blue-500 to-blue-600",
      link: "/services#printing"
    },
    {
      icon: Palette,
      title: "Design & Branding",
      description: "Creative design solutions for your business and personal needs",
      services: ["Logo Design", "Business Cards", "Letterheads", "Brochures", "Poster Design", "Banner Design", "Social Media Graphics", "Website Design", "App Design", "Brand Identity", "Marketing Materials", "Event Materials"],
      color: "from-purple-500 to-purple-600",
      link: "/services#design"
    },
    {
      icon: GraduationCap,
      title: "Education & Student Services",
      description: "Complete support for students and educational needs",
      services: ["Typing Services", "CV Writing", "Assignment Help", "Research Assistance", "Thesis Formatting", "Project Printing", "Application Letters", "School Forms", "University Applications", "Scholarship Applications", "Student Permits", "Academic Transcripts"],
      color: "from-orange-500 to-orange-600",
      link: "/services#education"
    },
    {
      icon: Globe,
      title: "Online Services & Jobs",
      description: "Digital services and online job assistance",
      services: ["Job Applications", "Online Forms", "Email Setup", "Social Media", "Online Shopping", "Digital Payments", "Online Banking", "E-learning", "Video Calls", "File Sharing", "Cloud Storage", "Online Bookings"],
      color: "from-teal-500 to-teal-600",
      link: "/services#online"
    },
    {
      icon: CreditCard,
      title: "Ticket Booking & Payments",
      description: "Book tickets and make payments for various services",
      services: ["Bus Tickets", "Flight Booking", "Event Tickets", "Movie Tickets", "Hotel Booking", "Bill Payments", "Mobile Money", "Bank Transfers", "Online Shopping", "Utility Bills", "School Fees", "Insurance Payments"],
      color: "from-indigo-500 to-indigo-600",
      link: "/services#booking"
    },
    {
      icon: Briefcase,
      title: "Business & Office Support",
      description: "Professional business services and office solutions",
      services: ["Business Registration", "Tax Services", "Accounting Help", "Legal Documents", "Contracts", "Proposals", "Reports", "Presentations", "Data Entry", "Secretarial Services", "Translation", "Notary Services"],
      color: "from-gray-500 to-gray-600",
      link: "/services#business"
    },
    {
      icon: Settings,
      title: "Custom IT Services",
      description: "Technical support and custom IT solutions",
      services: ["Computer Repair", "Software Installation", "Data Recovery", "Virus Removal", "System Backup", "Network Setup", "Email Configuration", "Software Training", "Hardware Upgrade", "Tech Support", "Web Development", "Database Services"],
      color: "from-cyan-500 to-cyan-600",
      link: "/services#it"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Digital Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From government services to business solutions, we provide over 100 services 
            to meet all your digital needs under one roof.
          </p>
          <div className="flex items-center justify-center mt-6 space-x-2">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <span className="text-lg font-medium text-gray-700">Trusted by 5000+ customers across Kenya</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <p className="text-white text-opacity-90 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Services List */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {category.services.slice(0, 8).map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                        <span className="truncate">{service}</span>
                      </div>
                    ))}
                  </div>
                  
                  {category.services.length > 8 && (
                    <p className="text-sm text-gray-500 mb-4">
                      +{category.services.length - 8} more services available
                    </p>
                  )}

                  <Link
                    to={category.link}
                    className={`block w-full text-center bg-gradient-to-r ${category.color} text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 group-hover:scale-105`}
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Need Help Choosing the Right Service?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Our experienced staff is here to guide you through any process. 
              Get personalized assistance for all your digital service needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                Get Help Now
              </Link>
              <Link 
                to="/blog"
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
              >
                Read Our Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
