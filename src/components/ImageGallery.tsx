
import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "/lovable-uploads/printing-service-1.jpg",
      title: "High-Quality Document Printing",
      description: "Professional printing services for all your document needs"
    },
    {
      id: 2,
      src: "/lovable-uploads/large-format-printer.jpg", 
      title: "Large Format Printing",
      description: "Banners, posters, and large-scale printing solutions"
    },
    {
      id: 3,
      src: "/lovable-uploads/bulk-photocopying.jpg",
      title: "Bulk Photocopying Services", 
      description: "Fast and efficient bulk copying for businesses and students"
    },
    {
      id: 4,
      src: "/lovable-uploads/ecitizen-assistance.jpg",
      title: "eCitizen Form Assistance",
      description: "Customers getting help with government online services"
    },
    {
      id: 5,
      src: "/lovable-uploads/scanning-lamination.jpg",
      title: "Scanning & Lamination",
      description: "Document scanning and professional lamination services"
    },
    {
      id: 6,
      src: "/lovable-uploads/creative-design-work.jpg",
      title: "Creative Design in Progress",
      description: "Professional graphic design and branding services"
    },
    {
      id: 7,
      src: "/lovable-uploads/poster-banner-production.jpg",
      title: "Poster & Banner Production",
      description: "Custom poster and banner design and printing"
    },
    {
      id: 8,
      src: "/lovable-uploads/students-typing.jpg",
      title: "Student Typing Services",
      description: "Students working on assignments and projects"
    },
    {
      id: 9,
      src: "/lovable-uploads/government-offices.jpg",
      title: "Government Office Support",
      description: "Assistance with various government office procedures"
    },
    {
      id: 10,
      src: "/lovable-uploads/customer-computer-help.jpg",
      title: "Personal Computer Assistance",
      description: "Staff helping customers with computer tasks and training"
    }
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See Our Services in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take a visual tour of our modern facilities and see how we help 
            thousands of customers with their digital service needs every day.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
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
          ))}
        </div>

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
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience Our Services?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Visit our modern facility and see why thousands of Kenyans trust us 
              with their digital service needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
                Visit Our Center
              </button>
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200">
                Book a Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
