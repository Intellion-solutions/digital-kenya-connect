import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, Printer, Palette, GraduationCap, Globe, CreditCard, Briefcase, Settings, ChevronDown, ChevronUp, CheckCircle, Truck, Building, Users2, Monitor } from 'lucide-react';

const Services = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('ecitizen');

  const serviceCategories = [
    {
      id: 'ecitizen',
      icon: FileText,
      title: "eCitizen Services",
      description: "Complete government services including ID cards, birth certificates, passports, and all official documents",
      color: "from-green-500 to-green-600",
      services: [
        "Birth Certificate Application",
        "National ID Card Application", 
        "Passport Application & Renewal",
        "Good Conduct Certificate",
        "Marriage Certificate",
        "Death Certificate Registration",
        "Huduma Namba Registration",
        "SHIF Registration & Services",
        "KRA PIN Application",
        "Business Permit Applications",
        "Land Search Services",
        "Driving License Application",
        "Certificate of No Impediment",
        "Single Status Certificate",
        "Change of Name Deed Poll",
        "Affidavit Services"
      ]
    },
    {
      id: 'fleet',
      icon: Truck,
      title: "Fleet Booking Services",
      description: "Complete transportation and logistics solutions for all your travel needs",
      color: "from-blue-500 to-blue-600",
      services: [
        "Bus Ticket Booking (All Routes)",
        "Matatu Booking Services",
        "Car Rental Bookings",
        "Truck Hiring Services",
        "Corporate Transport Solutions",
        "Airport Transfer Bookings",
        "Tour & Safari Vehicle Booking",
        "Wedding Car Rentals",
        "Event Transportation",
        "Logistics Coordination",
        "Driver Booking Services",
        "Fleet Management Solutions",
        "Vehicle Insurance Processing",
        "Route Planning Services",
        "Emergency Transport Booking",
        "Cargo Transportation"
      ]
    },
    {
      id: 'construction',
      icon: Building,
      title: "Building & Construction Solutions",
      description: "Comprehensive construction and building services from planning to completion",
      color: "from-orange-500 to-orange-600",
      services: [
        "Building Plan Approvals",
        "Construction Permits",
        "Architectural Drawings",
        "Structural Design Services",
        "Quantity Surveying",
        "Project Management",
        "Construction Supervision",
        "Building Material Sourcing",
        "Contractor Connections",
        "Land Survey Services",
        "Environmental Impact Assessments",
        "Building Inspections",
        "Renovation Planning",
        "Interior Design Services",
        "Cost Estimation",
        "Construction Documentation"
      ]
    },
    {
      id: 'consultancy',
      icon: Users2,
      title: "Business Consultancy Services",
      description: "Professional business advisory and consultancy services for growth and success",
      color: "from-purple-500 to-purple-600",
      services: [
        "Business Plan Development",
        "Market Research & Analysis",
        "Financial Planning & Advisory",
        "Investment Guidance",
        "Business Registration Support",
        "Tax Advisory Services",
        "Legal Compliance Consulting",
        "Strategic Planning",
        "Operations Optimization",
        "HR Consulting Services",
        "Marketing Strategy Development",
        "Brand Development",
        "Risk Management",
        "Performance Management",
        "Business Process Improvement",
        "Growth Strategy Consulting"
      ]
    },
    {
      id: 'training',
      icon: Monitor,
      title: "Computer Training & General Services",
      description: "Comprehensive computer training and digital literacy programs for all skill levels",
      color: "from-teal-500 to-teal-600",
      services: [
        "Basic Computer Skills",
        "Microsoft Office Training",
        "Internet & Email Usage",
        "Social Media Training",
        "Digital Marketing Course",
        "Web Design Training",
        "Graphic Design Course",
        "Data Entry Training",
        "Accounting Software Training",
        "Online Business Setup",
        "E-commerce Training",
        "Digital Banking Training",
        "Cybersecurity Awareness",
        "Mobile Phone Training",
        "Software Installation",
        "Computer Maintenance"
      ]
    },
    {
      id: 'government',
      icon: FileText,
      title: "Government Applications",
      description: "Assistance with all government applications and processes",
      color: "from-red-500 to-red-600",
      services: [
        "NTSA Driving License Services",
        "HELB Application & Management",
        "NSSF Registration",
        "County Government Services",
        "Court Document Processing",
        "Police Clearance Certificate",
        "Immigration Services",
        "Visa Applications (Tourist/Business)",
        "Work Permit Applications",
        "Student Visa Applications",
        "Residence Permit Applications",
        "Kenya Revenue Authority Services",
        "National Hospital Insurance Fund",
        "Ministry of Education Services",
        "Ministry of Health Services",
        "Ministry of Interior Services"
      ]
    },
    {
      id: 'printing',
      icon: Printer,
      title: "Printing & Bulk Jobs", 
      description: "Professional printing services for all your document needs",
      color: "from-blue-500 to-blue-600",
      services: [
        "Black & White Printing (A4/A3)",
        "Color Printing (A4/A3)",
        "Large Format Printing",
        "Business Card Printing",
        "Flyer & Brochure Printing",
        "Poster Printing (All Sizes)",
        "Banner Printing",
        "Binding Services (Spiral/Thermal)",
        "Lamination Services",
        "Photocopying Services",
        "Document Scanning",
        "Thesis & Project Printing",
        "Book Printing & Binding",
        "Certificate Printing",
        "ID Photo Printing",
        "Calendar & Diary Printing"
      ]
    },
    {
      id: 'design',
      icon: Palette,
      title: "Design & Branding Services",
      description: "Creative design solutions for your business and personal needs",
      color: "from-purple-500 to-purple-600", 
      services: [
        "Logo Design & Branding",
        "Business Card Design",
        "Letterhead Design",
        "Brochure & Flyer Design",
        "Poster & Banner Design",
        "Social Media Graphics",
        "Website Design",
        "Mobile App Design",
        "Brand Identity Development",
        "Marketing Material Design",
        "Event Material Design",
        "Product Label Design",
        "Menu Design",
        "Invoice & Receipt Design",
        "Presentation Design",
        "Infographic Design"
      ]
    },
    {
      id: 'education',
      icon: GraduationCap,
      title: "Education & Student Services",
      description: "Complete support for students and educational needs",
      color: "from-orange-500 to-orange-600",
      services: [
        "Document Typing Services",
        "CV & Resume Writing",
        "Cover Letter Writing",
        "Assignment Assistance",
        "Research Project Help",
        "Thesis Formatting & Printing",
        "Project Proposal Writing",
        "Application Letter Writing",
        "School Form Filling",
        "University Application Help",
        "Scholarship Application Assistance",
        "Student Permit Applications",
        "Academic Transcript Services",
        "Research Data Analysis",
        "PowerPoint Presentations",
        "Academic Writing Services"
      ]
    },
    {
      id: 'online',
      icon: Globe,
      title: "Online Services & Jobs",
      description: "Digital services and online job assistance",
      color: "from-teal-500 to-teal-600",
      services: [
        "Online Job Applications",
        "Online Form Filling",
        "Email Account Setup",
        "Social Media Management",
        "Online Shopping Assistance", 
        "Digital Payment Services",
        "Online Banking Setup",
        "E-learning Platform Access",
        "Video Call Setup",
        "File Sharing Services",
        "Cloud Storage Setup",
        "Online Booking Services",
        "Digital Marketing",
        "SEO Services",
        "Content Creation",
        "Online Survey Participation"
      ]
    },
    {
      id: 'booking',
      icon: CreditCard,
      title: "Ticket Booking & Payments",
      description: "Book tickets and make payments for various services",
      color: "from-indigo-500 to-indigo-600",
      services: [
        "Bus Ticket Booking",
        "Flight Booking Services",
        "Event Ticket Booking",
        "Movie Ticket Booking",
        "Hotel Reservation",
        "Utility Bill Payments",
        "Mobile Money Services",
        "Bank Transfer Services",
        "Online Shopping Payments",
        "School Fee Payments",
        "Insurance Premium Payments",
        "Government Fee Payments",
        "Subscription Payments",
        "Loan Payments",
        "Credit Card Payments",
        "Digital Wallet Setup"
      ]
    },
    {
      id: 'business',
      icon: Briefcase,
      title: "Business & Office Support",
      description: "Professional business services and office solutions",
      color: "from-gray-500 to-gray-600",
      services: [
        "Business Registration",
        "Tax Return Preparation",
        "Accounting Services",
        "Legal Document Preparation",
        "Contract Writing",
        "Business Proposal Writing",
        "Report Writing",
        "Presentation Creation",
        "Data Entry Services",
        "Secretarial Services",
        "Translation Services",
        "Notary Services",
        "Business Plan Writing",
        "Financial Statement Preparation",
        "Inventory Management",
        "Payroll Services"
      ]
    },
    {
      id: 'it',
      icon: Settings,
      title: "Custom IT Services",
      description: "Technical support and custom IT solutions",
      color: "from-cyan-500 to-cyan-600",
      services: [
        "Computer Repair & Maintenance",
        "Software Installation",
        "Data Recovery Services",
        "Virus Removal & Protection",
        "System Backup Solutions",
        "Network Setup & Configuration",
        "Email Configuration",
        "Software Training",
        "Hardware Upgrade",
        "Technical Support",
        "Website Development",
        "Database Management",
        "System Optimization",
        "Password Recovery",
        "File Format Conversion",
        "Digital Forensics"
      ]
    }
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-black to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Complete Digital Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Over 150 professional services available 24/7 to meet all your digital needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Book a Service
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200">
              Get Help Now
            </button>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Objectives */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide accessible, efficient, and reliable digital services that empower individuals 
                and businesses across Kenya to thrive in the digital age.
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-black to-gray-800 text-white rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-200 leading-relaxed">
                To be Kenya's leading digital services center, bridging the gap between traditional 
                processes and modern technology for all Kenyans.
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-xl">
              <h3 className="text-2xl font-bold text-red-800 mb-4">Our Objectives</h3>
              <p className="text-gray-700 leading-relaxed">
                Excellence in service delivery, continuous innovation, customer satisfaction, 
                and contributing to Kenya's digital transformation journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {serviceCategories.map((category) => {
              const IconComponent = category.icon;
              const isExpanded = expandedCategory === category.id;
              
              return (
                <div key={category.id} className="mb-6">
                  <div 
                    className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                    onClick={() => toggleCategory(category.id)}
                  >
                    {/* Category Header */}
                    <div className={`bg-gradient-to-r ${category.color} text-white p-6`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">{category.title}</h3>
                            <p className="text-white text-opacity-90">{category.description}</p>
                          </div>
                        </div>
                        <div className="ml-4">
                          {isExpanded ? 
                            <ChevronUp className="w-6 h-6" /> : 
                            <ChevronDown className="w-6 h-6" />
                          }
                        </div>
                      </div>
                      <div className="mt-4 text-sm text-white text-opacity-80">
                        {category.services.length} services available • Click to expand
                      </div>
                    </div>

                    {/* Services List */}
                    {isExpanded && (
                      <div className="p-6 bg-white">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {category.services.map((service, index) => (
                            <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700 font-medium">{service}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-6 pt-6 border-t border-gray-200">
                          <div className="flex flex-col sm:flex-row gap-4">
                            <button className={`bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex-1`}>
                              Book These Services
                            </button>
                            <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors duration-200 flex-1">
                              Get Quote
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Need a Custom Service?
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Don't see what you're looking for? We offer custom solutions tailored to your specific needs. 
                Our experienced team can help with any digital service requirement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
                  Request Custom Service
                </button>
                <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200">
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
