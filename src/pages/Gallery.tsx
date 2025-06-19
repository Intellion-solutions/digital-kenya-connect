
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { X, ZoomIn, Filter } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Images', count: 20 },
    { id: 'printing', name: 'Printing Services', count: 6 },
    { id: 'ecitizen', name: 'eCitizen Assistance', count: 4 },
    { id: 'training', name: 'Computer Training', count: 5 },
    { id: 'office', name: 'Office Work', count: 3 },
    { id: 'facility', name: 'Our Facility', count: 2 }
  ];

  const galleryImages = [
    {
      id: 1,
      src: "/lovable-uploads/printing-service-1.jpg",
      title: "High-Quality Document Printing",
      description: "Professional printing services for all your document needs",
      category: "printing"
    },
    {
      id: 2,
      src: "/lovable-uploads/large-format-printer.jpg", 
      title: "Large Format Printing",
      description: "Banners, posters, and large-scale printing solutions",
      category: "printing"
    },
    {
      id: 3,
      src: "/lovable-uploads/bulk-photocopying.jpg",
      title: "Bulk Photocopying Services", 
      description: "Fast and efficient bulk copying for businesses and students",
      category: "printing"
    },
    {
      id: 4,
      src: "/lovable-uploads/ecitizen-assistance.jpg",
      title: "eCitizen Form Assistance",
      description: "Customers getting help with government online services",
      category: "ecitizen"
    },
    {
      id: 5,
      src: "/lovable-uploads/scanning-lamination.jpg",
      title: "Scanning & Lamination",
      description: "Document scanning and professional lamination services",
      category: "printing"
    },
    {
      id: 6,
      src: "/lovable-uploads/creative-design-work.jpg",
      title: "Creative Design in Progress",
      description: "Professional graphic design and branding services",
      category: "office"
    },
    {
      id: 7,
      src: "/lovable-uploads/poster-banner-production.jpg",
      title: "Poster & Banner Production",
      description: "Custom poster and banner design and printing",
      category: "printing"
    },
    {
      id: 8,
      src: "/lovable-uploads/students-typing.jpg",
      title: "Student Typing Services",
      description: "Students working on assignments and projects",
      category: "training"
    },
    {
      id: 9,
      src: "/lovable-uploads/government-offices.jpg",
      title: "Government Office Support",
      description: "Assistance with various government office procedures",
      category: "ecitizen"
    },
    {
      id: 10,
      src: "/lovable-uploads/customer-computer-help.jpg",
      title: "Personal Computer Assistance",
      description: "Staff helping customers with computer tasks and training",
      category: "training"
    },
    {
      id: 11,
      src: "/lovable-uploads/business-card-printing.jpg",
      title: "Business Card Printing",
      description: "Professional business cards with quality printing",
      category: "printing"
    },
    {
      id: 12,
      src: "/lovable-uploads/passport-photo-service.jpg",
      title: "Passport Photo Services",
      description: "Professional passport and ID photos taken on-site",
      category: "ecitizen"
    },
    {
      id: 13,
      src: "/lovable-uploads/computer-training-class.jpg",
      title: "Computer Training Class",
      description: "Group training sessions for digital literacy",
      category: "training"
    },
    {
      id: 14,
      src: "/lovable-uploads/office-environment.jpg",
      title: "Modern Office Environment",
      description: "Clean and professional workspace for all customers",
      category: "facility"
    },
    {
      id: 15,
      src: "/lovable-uploads/digital-services-counter.jpg",
      title: "Digital Services Counter",
      description: "Dedicated service counters for different needs",
      category: "facility"
    },
    {
      id: 16,
      src: "/lovable-uploads/cv-writing-session.jpg",
      title: "CV Writing Session",
      description: "Professional CV and resume writing assistance",
      category: "office"
    },
    {
      id: 17,
      src: "/lovable-uploads/microsoft-office-training.jpg",
      title: "Microsoft Office Training",
      description: "Learning Word, Excel, and PowerPoint applications",
      category: "training"
    },
    {
      id: 18,
      src: "/lovable-uploads/id-application-help.jpg",
      title: "ID Application Assistance",
      description: "Helping customers with national ID applications",
      category: "ecitizen"
    },
    {
      id: 19,
      src: "/lovable-uploads/business-consultation.jpg",
      title: "Business Consultation",
      description: "Professional business advice and planning sessions",
      category: "office"
    },
    {
      id: 20,
      src: "/lovable-uploads/internet-browsing-assistance.jpg",
      title: "Internet Browsing Assistance",
      description: "Teaching customers how to navigate the internet safely",
      category: "training"
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-black to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Gallery
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Take a visual tour of our services, facilities, and satisfied customers in action
          </p>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Images</h2>
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {galleryImages.slice(0, 8).map((image) => (
                  <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <div 
                        className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                        onClick={() => openModal(image.src)}
                      >
                        {/* Image */}
                        <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-green-200 via-gray-200 to-red-200">
                          <div className="w-full h-64 bg-gray-300 flex items-center justify-center text-gray-600">
                            <div className="text-center">
                              <div className="text-lg font-medium mb-2">{image.title}</div>
                              <div className="text-sm text-gray-500">Click to view</div>
                            </div>
                          </div>
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ZoomIn className="w-8 h-8 text-white" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-4">
                          <h3 className="font-bold text-gray-900 mb-2">{image.title}</h3>
                          <p className="text-sm text-gray-600">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Filter className="w-6 h-6 text-gray-600 mr-3" />
            <h3 className="text-xl font-bold text-gray-900">Filter by Category</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id}
                className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-in"
                onClick={() => openModal(image.src)}
              >
                {/* Category Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    image.category === 'printing' ? 'bg-blue-500 text-white' :
                    image.category === 'ecitizen' ? 'bg-green-500 text-white' :
                    image.category === 'training' ? 'bg-orange-500 text-white' :
                    image.category === 'office' ? 'bg-purple-500 text-white' :
                    'bg-gray-500 text-white'
                  }`}>
                    {categories.find(cat => cat.id === image.category)?.name || 'Other'}
                  </span>
                </div>

                {/* Image */}
                <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-green-200 via-gray-200 to-red-200">
                  <div className="w-full h-64 bg-gray-300 flex items-center justify-center text-gray-600">
                    <div className="text-center">
                      <div className="text-lg font-medium mb-2">{image.title}</div>
                      <div className="text-sm text-gray-500">Click to view</div>
                    </div>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-600">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all duration-200 z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-full h-96 md:h-[600px] bg-gradient-to-br from-green-300 via-gray-300 to-red-300 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-700">
                <div className="text-2xl font-bold mb-4">Preview Image</div>
                <div className="text-lg">This would show the actual image</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 via-black to-red-600 rounded-2xl shadow-xl p-8 max-w-3xl mx-auto text-white">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Experience Our Services?
              </h3>
              <p className="text-lg mb-6">
                Visit Mutunga Enterprise and see why thousands of Kenyans trust us 
                with their digital service needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Visit Our Center
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200">
                  Book a Service
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

export default Gallery;
